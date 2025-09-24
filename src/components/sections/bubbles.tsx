"use client";

import { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { PMREMGenerator } from 'three';

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
        gradient.addColorStop(0.48, 'hsl(210, 40%, 30%)'); // Deeper sky blue
        gradient.addColorStop(0.5, 'hsl(210, 40%, 28%)'); // Horizon line
        gradient.addColorStop(0.52, 'hsl(100, 20%, 20%)'); // Distant green
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
    camera.position.z = 10;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    const pmremGenerator = new PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const renderedEnvMap = pmremGenerator.fromEquirectangular(envMap).texture;
    scene.environment = renderedEnvMap;

    const bubbles: THREE.Mesh[] = [];
    const bubbleGeometry = new THREE.SphereGeometry(1, 64, 64);
    
    const tintPalette = [
      new THREE.Color("hsl(0, 80%, 60%)"),   // Red
      new THREE.Color("hsl(210, 95%, 62%)"), // Blue
      new THREE.Color("hsl(270, 90%, 65%)"), // Violet
      new THREE.Color("hsl(160, 70%, 55%)"), // Mint
      new THREE.Color("hsl(35, 100%, 60%)"),  // Amber
      new THREE.Color("hsl(330, 85%, 68%)"), // Pink
    ];

    for (let i = 0; i < bubbleCount; i++) {
       const material = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transmission: 1.0,
        ior: 1.33,
        thickness: THREE.MathUtils.randFloat(0.12, 0.35),
        roughness: 0.03,
        clearcoat: 1.0,
        clearcoatRoughness: 0.08,
        envMapIntensity: 1.2,
        iridescence: 1.0,
        iridescenceIOR: 1.3,
        iridescenceThicknessRange: [220, 800],
        attenuationColor: tintPalette[i % tintPalette.length],
        attenuationDistance: 2.0,
        transparent: true,
        opacity: 0.35,
      });

      const bubble = new THREE.Mesh(bubbleGeometry, material);
      
      const vFOV = THREE.MathUtils.degToRad(camera.fov);
      const viewHeight = 2 * Math.tan(vFOV / 2) * camera.position.z;
      
      const maxWorldSize = (48 / window.innerHeight) * viewHeight;
      const minWorldSize = (16 / window.innerHeight) * viewHeight;
      const scale = THREE.MathUtils.randFloat(minWorldSize, maxWorldSize) / 2; // radius

      bubble.scale.set(scale, scale, scale);
      
      const viewWidth = viewHeight * camera.aspect;
      bubble.position.set(
        THREE.MathUtils.randFloat(-viewWidth / 2, viewWidth / 2),
        THREE.MathUtils.randFloat(-viewHeight / 2 - 2, viewHeight / 2 + 2),
        THREE.MathUtils.randFloat(-1.5, 1.5)
      );

      (bubble as any).userData = {
        speed: (0.02 + (maxWorldSize - scale * 2) * 0.1),
        rotationSpeed: {
          x: THREE.MathUtils.randFloat(-0.005, 0.005),
          y: THREE.MathUtils.randFloat(-0.005, 0.005),
        },
        horizontalDrift: (Math.random() * 2 - 1) * (0.02 + Math.random() * 0.03),
        phase: Math.random() * Math.PI * 2,
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
      
      const limitY = viewHeight / 2 + 2; 
      const limitX = viewWidth / 2 + 1;
      const resetY = -limitY;

      bubbles.forEach((bubble) => {
        bubble.position.y += (bubble as any).userData.speed * delta * 3; // frame-rate independent
        
        const sineDrift = Math.sin(time * 0.6 + (bubble as any).userData.phase) * (bubble as any).userData.horizontalDrift;
        bubble.position.x += sineDrift * delta * 3;

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
              if (Array.isArray(bubble.material)) {
                bubble.material.forEach(m => m.dispose());
              } else {
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
