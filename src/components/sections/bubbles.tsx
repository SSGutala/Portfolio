"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Bubbles = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      // Fallback for reduced motion is handled by CSS in home.tsx - this script does nothing.
      return;
    }

    let bubbleCount = 100;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);
    
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight2.position.set(-5, -5, -2);
    scene.add(directionalLight2);

    // Bubbles
    const bubbles: THREE.Mesh[] = [];
    const bubbleGeometry = new THREE.SphereGeometry(1, 32, 32);
    const colors = [
      new THREE.Color("hsl(0, 80%, 60%)"),   // Red
      new THREE.Color("hsl(210, 95%, 62%)"), // Blue
      new THREE.Color("hsl(270, 90%, 65%)"), // Violet
      new THREE.Color("hsl(160, 70%, 55%)"), // Mint
      new THREE.Color("hsl(35, 100%, 60%)"),  // Amber
      new THREE.Color("hsl(330, 85%, 68%)"), // Pink
    ];

    for (let i = 0; i < bubbleCount; i++) {
      const material = new THREE.MeshPhysicalMaterial({
        transmission: 1.0,
        ior: 1.33,
        thickness: THREE.MathUtils.randFloat(0.1, 0.3),
        roughness: 0.05,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        envMapIntensity: 1.0,
        attenuationColor: colors[i % colors.length],
        attenuationDistance: Infinity,
        transparent: true,
        opacity: THREE.MathUtils.randFloat(0.3, 0.5),
      });

      const bubble = new THREE.Mesh(bubbleGeometry, material);
      const scale = THREE.MathUtils.randFloat(0.1, 0.4); // Smaller bubbles
      bubble.scale.set(scale, scale, scale);
      
      bubble.position.set(
        THREE.MathUtils.randFloat(-8, 8),
        THREE.MathUtils.randFloat(-8, 8),
        THREE.MathUtils.randFloat(-4, 4)
      );

      // Store extra data for animation
      (bubble as any).userData = {
        speed: (0.45 - scale) * 0.0375, // Adjusted speed based on size
        rotationSpeed: {
          x: THREE.MathUtils.randFloat(-0.005, 0.005),
          y: THREE.MathUtils.randFloat(-0.005, 0.005),
        },
        horizontalDrift: THREE.MathUtils.randFloat(-0.002, 0.002)
      };

      bubbles.push(bubble);
      scene.add(bubble);
    }
    
    // Mouse Parallax
    const mouse = new THREE.Vector2();
    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Performance Monitoring
    let lastFrameTime = performance.now();
    const animate = () => {
      requestAnimationFrame(animate);

      const now = performance.now();
      const delta = now - lastFrameTime;
      lastFrameTime = now;

      // Performance check
      if (delta > 18 && bubbles.length > 15) { // ~55fps threshold
        const toRemove = Math.floor(bubbles.length * 0.3);
        for(let i = 0; i < toRemove; i++) {
            const bubbleToRemove = bubbles.pop();
            if (bubbleToRemove) scene.remove(bubbleToRemove);
        }
      }

      bubbles.forEach(bubble => {
        bubble.position.y += (bubble as any).userData.speed;
        bubble.position.x += (bubble as any).userData.horizontalDrift;
        
        bubble.rotation.x += (bubble as any).userData.rotationSpeed.x;
        bubble.rotation.y += (bubble as any).userData.rotationSpeed.y;

        if (bubble.position.y > 10) {
          bubble.position.y = -10;
          bubble.position.x = THREE.MathUtils.randFloat(-8, 8);
        }
      });
      
      // Parallax effect
      camera.position.x += (mouse.x * 0.3 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();
    
    // Handle resize
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
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default Bubbles;
