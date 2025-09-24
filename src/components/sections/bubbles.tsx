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
    vec3 color = mix(env * 0.5, env * 1.0 + film * 1.0, F);

    // final with subtle opacity
    gl_FragColor = vec4(color, 0.4 + 0.2 * F);
  }
`;


const Bubbles = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  const envMap = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    if (context) {
        const gradient = context.createLinearGradient(0, 0, 0, 256);
        gradient.addColorStop(0, 'hsl(210, 60%, 70%)'); // Lighter sky blue
        gradient.addColorStop(0.45, 'hsl(210, 40%, 30%)'); // Deeper sky blue
        gradient.addColorStop(0.5, 'hsl(210, 40%, 25%)'); // Horizon line
        gradient.addColorStop(0.55, 'hsl(100, 20%, 20%)'); // Distant green
        gradient.addColorStop(1, 'hsl(100, 20%, 15%)'); // Darker green
        context.fillStyle = gradient;
        context.fillRect(0, 0, 256, 256);
    }
    return new THREE.CanvasTexture(canvas);
  }, []);


  useEffect(() => {
    if (!mountRef.current || !envMap) return;
    const container = mountRef.current;
    
    let isReducedMotion = false;
    if (typeof window !== 'undefined') {
        try {
            isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        } catch (e) {
            console.error("Could not check for reduced motion preference.", e);
        }
    }
    
    let renderer: THREE.WebGLRenderer | null = null;
    try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch(e) {
        console.error("WebGL not supported, falling back to CSS.", e);
        isReducedMotion = true;
    }


    if (isReducedMotion) {
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
        const hue = 180 + Math.random() * 120;
        circle.style.background = `radial-gradient(circle, hsla(${hue}, 70%, 80%, 0.4) 0%, hsla(${hue}, 70%, 80%, 0) 70%)`;
        circle.style.opacity = `${Math.random() * 0.25 + 0.1}`;
        container.appendChild(circle);
      }
      return;
    }

    if (!renderer) return;

    const bubbleCount = 36;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const pmremGenerator = new PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const renderedEnvMap = pmremGenerator.fromEquirectangular(envMap).texture;

    const bubbles: THREE.Mesh[] = [];
    const bubbleGeometry = new THREE.SphereGeometry(1, 48, 48);

    for (let i = 0; i < bubbleCount; i++) {
      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          cameraPos: { value: camera.position },
          filmThickness: { value: THREE.MathUtils.randFloat(250, 800) },
          ior: { value: 1.33 },
          envMap: { value: renderedEnvMap },
        },
        transparent: true,
        side: THREE.FrontSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const bubble = new THREE.Mesh(bubbleGeometry, material);
      
      const vFOV = THREE.MathUtils.degToRad(camera.fov);
      const viewHeight = 2 * Math.tan(vFOV / 2) * camera.position.z;
      
      // Convert pixel sizes to world units
      const maxWorldSize = (56 / window.innerHeight) * viewHeight;
      const minWorldSize = (16 / window.innerHeight) * viewHeight;
      const scale = THREE.MathUtils.randFloat(minWorldSize, maxWorldSize) / 2; // radius

      bubble.scale.set(scale, scale, scale);
      
      const viewWidth = viewHeight * camera.aspect;
      const spawnRangeY = viewHeight / 2 + scale * 2;
      const spawnRangeX = viewWidth / 2 + scale * 2;
      
      bubble.position.set(
        THREE.MathUtils.randFloat(-spawnRangeX, spawnRangeX),
        THREE.MathUtils.randFloat(-spawnRangeY, spawnRangeY),
        THREE.MathUtils.randFloat(-2, 2)
      );

      (bubble as any).userData = {
        // Smaller bubbles move faster
        speed: (maxWorldSize - scale * 2) * 0.01 + 0.0025,
        rotationSpeed: {
          x: THREE.MathUtils.randFloat(-0.001, 0.001),
          y: THREE.MathUtils.randFloat(-0.001, 0.001),
        },
        horizontalDrift: Math.sin(i) * 0.00015,
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
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();
      time += delta;

      const vFOV = THREE.MathUtils.degToRad(camera.fov);
      const viewHeight = 2 * Math.tan(vFOV / 2) * camera.position.z;
      const viewWidth = viewHeight * camera.aspect;
      
      const limitY = viewHeight / 2 + 1;
      const limitX = viewWidth / 2 + 1;
      const resetY = -limitY;


      bubbles.forEach((bubble, i) => {
        bubble.position.y += (bubble as any).userData.speed;
        
        const sineDrift = Math.sin(time + i) * (bubble as any).userData.horizontalDrift;
        bubble.position.x += sineDrift;

        bubble.rotation.x += (bubble as any).userData.rotationSpeed.x;
        bubble.rotation.y += (bubble as any).userData.rotationSpeed.y;

        if (bubble.position.y - bubble.scale.x > limitY) {
          bubble.position.y = resetY - bubble.scale.x;
          bubble.position.x = THREE.MathUtils.randFloat(-limitX, limitX);
        }
      });
      
      camera.position.x += (mouse.x * 0.25 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 0.25 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer?.render(scene, camera);
    };

    animate();
    
    const localRenderer = renderer;
    const onResize = () => {
        if (!container || !localRenderer) return;
        const width = container.clientWidth;
        const height = container.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        localRenderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (container) {
        container.innerHTML = '';
      }
      if (localRenderer) {
          localRenderer.dispose();
          bubbleGeometry.dispose();
          bubbles.forEach(bubble => {
              if (bubble.material instanceof THREE.Material) {
                  bubble.material.dispose();
              }
          });
          scene.clear();
          pmremGenerator.dispose();
          renderedEnvMap.dispose();
          if(envMap) envMap.dispose();
      }
    };
  }, [envMap]);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default Bubbles;
