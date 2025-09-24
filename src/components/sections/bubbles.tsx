"use client";

import { useEffect, useRef } from 'react';

const Bubbles = () => {
  const layerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const cv = canvasRef.current;
    if (!layer || !cv) return;

    // Reduced motion fallback
    let reduce = false;
    try {
        reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch(e) {
        console.error("Could not check for reduced motion preference.", e);
    }
    
    const ctx = cv.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    function fit() {
      if (!layer) return;
      const {width, height} = layer.getBoundingClientRect();
      cv.width = Math.max(1, Math.floor(width * DPR));
      cv.height = Math.max(1, Math.floor(height * DPR));
      // cv.style.width = width + 'px'; // not needed with tailwind
      // cv.style.height = height + 'px';
    }
    fit(); 
    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(layer);


    // Palette for iridescent rims (HSL hue degrees)
    const hues = [0, 210, 270, 160, 35, 330];

    // Bubble model
    const bubbles: any[] = [];
    const COUNT = 30;                    // total bubbles
    const MIN_PX = 16, MAX_PX = 48;      // size clamp (on-screen)
    function rnd(a: number, b: number){ return a + Math.random()*(b-a); }

    function spawnBubble() {
      const w = cv.width, h = cv.height;
      const r = rnd(MIN_PX, MAX_PX) * DPR * 0.5;
      return {
        x: rnd(r, w-r),
        y: rnd(0, h),
        r,
        hue: hues[Math.floor(Math.random()*hues.length)],
        alpha: rnd(0.25, 0.4),
        vy: rnd(-0.08, -0.25) * DPR,         // upward
        vx: rnd(-0.06, 0.06) * DPR,
        wobble: rnd(0.6, 1.2),
        t: Math.random()*Math.PI*2
      };
    }
    for (let i=0;i<COUNT;i++) bubbles.push(spawnBubble());

    // mouse parallax
    let mx=0, my=0;
    const onMouseMove = (e: MouseEvent) => {
        const r = layer.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        mx = ((e.clientX - r.left)/r.width - .5) * 6 * DPR;
        my = ((e.clientY - r.top)/r.height - .5) * 6 * DPR;
    };
    layer.addEventListener('mousemove', onMouseMove);

    // Draw one bubble with reflective/iridescent rim (Canvas 2D technique)
    function drawBubble(b: any) {
      const {x,y,r,alpha,hue} = b;

      // 1) Base clear body (very faint center glow)
      let g = ctx!.createRadialGradient(x, y, 0, x, y, r*1.05);
      g.addColorStop(0.0, `rgba(255,255,255,${alpha*0.05})`);
      g.addColorStop(0.7, `rgba(255,255,255,${alpha*0.02})`);
      g.addColorStop(1.0, `rgba(255,255,255,0)`);
      ctx!.globalCompositeOperation = 'source-over';
      ctx!.fillStyle = g;
      ctx!.beginPath(); ctx!.arc(x,y,r,0,Math.PI*2); ctx!.fill();

      // 2) Iridescent rim (rainbow thin-film)
      const stops = [
        [0.72, `hsla(${(hue+300)%360}, 90%, 70%, ${alpha*0.65})`],
        [0.80, `hsla(${(hue+240)%360}, 90%, 65%, ${alpha*0.75})`],
        [0.88, `hsla(${(hue+180)%360}, 85%, 60%, ${alpha*0.85})`],
        [0.94, `hsla(${(hue+120)%360}, 85%, 65%, ${alpha*0.75})`],
        [0.98, `hsla(${(hue+60)%360},  85%, 70%, ${alpha*0.55})`],
        [1.00, `rgba(255,255,255,0)`]
      ];
      g = ctx!.createRadialGradient(x, y, r*0.6, x, y, r*1.02);
      for (const [p,c] of stops) g.addColorStop(p as number, c as string);
      ctx!.globalCompositeOperation = 'lighter'; // additive for glossy look
      ctx!.fillStyle = g;
      ctx!.beginPath(); ctx!.arc(x,y,r,0,Math.PI*2); ctx!.fill();

      // 3) Specular highlight (small white spot near rim)
      const hx = x - r*0.35, hy = y - r*0.35;
      const hg = ctx!.createRadialGradient(hx, hy, 0, hx, hy, r*0.55);
      hg.addColorStop(0.0, `rgba(255,255,255,${alpha*0.9})`);
      hg.addColorStop(0.25, `rgba(255,255,255,${alpha*0.25})`);
      hg.addColorStop(1.0, `rgba(255,255,255,0)`);
      ctx!.fillStyle = hg;
      ctx!.beginPath(); ctx!.arc(x,y,r,0,Math.PI*2); ctx!.fill();

      // 4) Dark inner rim (gives thickness)
      const dg = ctx!.createRadialGradient(x, y, r*0.5, x, y, r*1.02);
      dg.addColorStop(0.92, `rgba(0,0,0,${alpha*0.15})`);
      dg.addColorStop(1.00, `rgba(0,0,0,0)`);
      ctx!.globalCompositeOperation = 'source-over';
      ctx!.fillStyle = dg;
      ctx!.beginPath(); ctx!.arc(x,y,r,0,Math.PI*2); ctx!.fill();
    }

    // Static fallback (no animation)
    if (reduce) {
      ctx.clearRect(0,0,cv.width,cv.height);
      for (const b of bubbles) drawBubble(b);
      return;
    }

    // Animation loop
    let animationFrameId: number;
    function tick(){
      const w=cv.width, h=cv.height;
      ctx!.clearRect(0,0,w,h);

      for (const b of bubbles){
        b.t += 0.016;
        b.x += b.vx + Math.sin(b.t*b.wobble)*0.05 + mx*0.002;
        b.y += b.vy + my*0.002;

        // wrap
        if (b.y + b.r < 0) { Object.assign(b, spawnBubble()); b.y = h + b.r; }
        if (b.x - b.r > w) b.x = -b.r;
        if (b.x + b.r < 0) b.x = w + b.r;

        drawBubble(b);
      }
      animationFrameId = requestAnimationFrame(tick);
    }
    tick();

    return () => {
        window.removeEventListener('resize', fit);
        layer.removeEventListener('mousemove', onMouseMove);
        resizeObserver.disconnect();
        cancelAnimationFrame(animationFrameId);
    }
  }, []);

  return (
    <div ref={layerRef} className="w-full h-full">
        <canvas ref={canvasRef} className="w-full h-full block"></canvas>
    </div>
  );
};

export default Bubbles;
