
"use client";

import { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { PMREMGenerator } from 'three';

const vertexShader = `
  varying vec3 vWorldNormal;
  varying vec3 vWorldPos;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldPos = wp.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const fragmentShader = `
  precision highp float;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPos;
  uniform vec3 cameraPos;
  uniform float filmThickness; // 200–800 nm
  uniform float ior;           // 1.33

  // Fresnel Schlick
  float fresnel(vec3 N, vec3 V, float F0) {
    float cosTheta = clamp(dot(N, V), 0.0, 1.0);
    return F0 + (1.0 - F0) * pow(1.0 - cosTheta, 5.0);
  }

  // Approx thin-film interference -> returns rgb 0..1
  vec3 thinFilm(float cosI, float thicknessNm) {
    // wavelengths nm
    float rW = 650.0;
    float gW = 510.0;
    float bW = 440.0;
    float twoPi = 6.28318530718;
    float n = 1.33; // Approx IOR of water
    
    float phase_r = twoPi * n * thicknessNm * cosI / rW;
    float phase_g = twoPi * n * thicknessNm * cosI / gW;
    float phase_b = twoPi * n * thicknessNm * cosI / bW;
    
    float Ir = 0.5 + 0.5 * cos(phase_r);
    float Ig = 0.5 + 0.5 * cos(phase_g);
    float Ib = 0.5 + 0.5 * cos(phase_b);
    
    return clamp(vec3(Ir, Ig, Ib), 0.0, 1.0);
  }

  uniform samplerCube envMap; // PMREM env
  void main() {
    vec3 N = normalize(vWorldNormal);
    vec3 V = normalize(cameraPos - vWorldPos);

    // reflect env
    vec3 R = reflect(-V, N);
    vec3 env = textureCube(envMap, R).rgb;

    // Fresnel edge boost
    float F = fresnel(N, V, 0.02);

    // Iridescent film color stronger at grazing angles
    float cosI = clamp(dot(N, V), 0.0, 1.0);
    vec3 film = thinFilm(cosI, filmThickness);

    // mix: clear glass center, rainbow edge
    vec3 color = mix(env * 0.25, env * 0.6 + film * 0.7, F);

    // final with subtle opacity
    gl_FragColor = vec4(color, 0.38 + 0.15 * F);
  }
`;


const Bubbles = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  const envMap = useMemo(() => {
    // This part now only runs on the client due to the check in useEffect
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const context = canvas.getContext('2d');
    if (context) {
        const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
        gradient.addColorStop(0, 'hsl(0, 0%, 15%)');
        gradient.addColorStop(1, 'hsl(0, 0%, 5%)');
        context.fillStyle = gradient;
        context.fillRect(0, 0, 128, 128);
    }
    return new THREE.CanvasTexture(canvas);
  }, []);


  useEffect(() => {
    if (!mountRef.current || !envMap) return;
    
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      // Create static CSS bubbles as a fallback
      const container = mountRef.current;
      container.style.position = 'relative';
      for (let i = 0; i < 30; i++) {
        const circle = document.createElement('div');
        const size = Math.random() * (32 - 16) + 16;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.borderRadius = '50%';
        circle.style.position = 'absolute';
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.top = `${Math.random() * 100}%`;
        const hue = Math.random() * 360;
        circle.style.background = `radial-gradient(circle, hsla(${hue}, 70%, 80%, 0.4) 0%, hsla(${hue}, 70%, 80%, 0) 70%)`;
        circle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
        container.appendChild(circle);
      }
      return;
    }

    const bubbleCount = 36;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    const pmremGenerator = new PMREMGenerator(renderer);
    const renderedEnvMap = pmremGenerator.fromEquirectangular(envMap).texture;

    const bubbles: THREE.Mesh[] = [];
    const bubbleGeometry = new THREE.SphereGeometry(1, 48, 48);

    for (let i = 0; i < bubbleCount; i++) {
      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          cameraPos: { value: camera.position },
          filmThickness: { value: THREE.MathUtils.randFloat(200, 800) },
          ior: { value: 1.33 },
          envMap: { value: renderedEnvMap },
        },
        transparent: true,
        side: THREE.FrontSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const bubble = new THREE.Mesh(bubbleGeometry, material);
      
      // Calculate world units to approximate 16-64px size
      const vFOV = THREE.MathUtils.degToRad(camera.fov);
      const height = 2 * Math.tan(vFOV / 2) * camera.position.z;
      const aspect = window.innerWidth / window.innerHeight;
      const width = height * aspect;
      const maxScale = (64 / window.innerHeight) * height * 0.5;
      const minScale = (16 / window.innerHeight) * height * 0.5;
      const scale = THREE.MathUtils.randFloat(minScale, maxScale);

      bubble.scale.set(scale, scale, scale);
      
      const spawnRangeY = height / 2 + scale * 2;
      const spawnRangeX = width / 2 + scale * 2;
      
      bubble.position.set(
        THREE.MathUtils.randFloat(-spawnRangeX, spawnRangeX),
        THREE.MathUtils.randFloat(-spawnRangeY, spawnRangeY),
        THREE.MathUtils.randFloat(-2, 2)
      );

      (bubble as any).userData = {
        speed: (maxScale - scale) * 0.025 + 0.0025, // Adjusted speed
        rotationSpeed: {
          x: THREE.MathUtils.randFloat(-0.002, 0.002),
          y: THREE.MathUtils.randFloat(-0.002, 0.002),
        },
        horizontalDrift: THREE.MathUtils.randFloat(-0.001, 0.001)
      };

      bubbles.push(bubble);
      scene.add(bubble);
    }
    
    const mouse = new THREE.Vector2();
    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();

      const vFOV = THREE.MathUtils.degToRad(camera.fov);
      const viewHeight = 2 * Math.tan(vFOV / 2) * camera.position.z;
      const resetY = -viewHeight / 2 - 1;
      const limitY = viewHeight / 2 + 1;

      bubbles.forEach(bubble => {
        bubble.position.y += (bubble as any).userData.speed;
        bubble.position.x += (bubble as any).userData.horizontalDrift;
        
        bubble.rotation.x += (bubble as any).userData.rotationSpeed.x;
        bubble.rotation.y += (bubble as any).userData.rotationSpeed.y;

        if (bubble.position.y > limitY) {
          bubble.position.y = resetY;
          bubble.position.x = THREE.MathUtils.randFloat(-viewHeight * camera.aspect / 2, viewHeight * camera.aspect / 2);
        }
      });
      
      camera.position.x += (mouse.x * 0.25 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 0.25 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();
    
    const onResize = () => {
        if (!mountRef.current) return;
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (mountRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        mountRef.current.innerHTML = '';
      }
      renderer.dispose();
      scene.children.forEach(child => {
        if(child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if(Array.isArray(child.material)) {
            child.material.forEach(m => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      scene.clear();
      pmremGenerator.dispose();
      renderedEnvMap.dispose();
      if(envMap) envMap.dispose();
    };
  }, [envMap]);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default Bubbles;
