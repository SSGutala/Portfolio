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
    }
    fit(); 
    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(layer);

    // Palette for iridescent rims (HSL hue degrees)
    const hues = [0, 210, 270, 160, 35, 330];

    // Bubble model
    const bubbles: any[] = [];
    const COUNT = 30;
    const MIN_PX = 16, MAX_PX = 48;
    function rnd(a: number, b: number){ return a + Math.random()*(b-a); }
    
    /* helpers */
    const lerp = (a:number,b:number,t:number)=>a+(b-a)*t;
    function makeOffscreen(w:number,h:number){ const c=document.createElement('canvas'); c.width=w; c.height=h; return c; }

    /* spawn with depth */
    function spawnBubble() {
      const w = cv.width, h = cv.height;
      const z = Math.random();                 // 0 = near, 1 = far
      const screenR = rnd(MIN_PX, MAX_PX) * DPR * 0.5 * lerp(1.15, 0.85, z);
      return {
        x: rnd(screenR, w-screenR),
        y: rnd(0, h),
        r: screenR,
        z,
        hue: hues[Math.floor(Math.random()*hues.length)],
        alpha: lerp(0.42, 0.26, z),            // nearer = a bit stronger
        vy: rnd(-0.22, -0.06) * DPR * lerp(1.0, 1.3, z),
        vx: rnd(-0.05, 0.05) * DPR,
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

    /* one-time offscreen for blur */
    const blurCanvas = makeOffscreen(256,256);
    const bctx = blurCanvas.getContext('2d');
    if (!bctx) return;

    /* draw a bubble with horizon band, iridescent rim, specular, inner refraction */
    function drawBubble(b: any, time: number) {
      const {x,y,r,alpha,hue,z} = b;

      // ----- base clear body -----
      let g = ctx!.createRadialGradient(x, y, 0, x, y, r*1.05);
      g.addColorStop(0.00, `rgba(255,255,255,${alpha*0.06})`);
      g.addColorStop(0.65, `rgba(255,255,255,${alpha*0.02})`);
      g.addColorStop(1.00, `rgba(255,255,255,0)`);
      ctx!.globalCompositeOperation = 'source-over';
      ctx!.fillStyle = g;
      ctx!.beginPath(); ctx!.arc(x,y,r,0,Math.PI*2); ctx!.fill();

      // ----- inner refraction (gives thickness) -----
      const inner = ctx!.createRadialGradient(x, y, r*0.55, x, y, r*1.02);
      inner.addColorStop(0.90, `rgba(0,0,0,${alpha*0.18})`);
      inner.addColorStop(1.00, `rgba(0,0,0,0)`);
      ctx!.fillStyle = inner;
      ctx!.beginPath(); ctx!.arc(x,y,r,0,Math.PI*2); ctx!.fill();

      // ----- horizon reflection band -----
      const bandY = y - r*0.25;                 // a bit above center
      const bandR = r*1.02;
      const band = ctx!.createRadialGradient(x, bandY, r*0.15, x, bandY, bandR);
      band.addColorStop(0.00, `rgba(255,255,255,${alpha*0.70})`);
      band.addColorStop(0.30, `rgba(255,255,255,${alpha*0.25})`);
      band.addColorStop(1.00, `rgba(255,255,255,0)`);
      ctx!.globalCompositeOperation = 'lighter';
      ctx!.fillStyle = band;
      ctx!.beginPath(); ctx!.arc(x, y, r, 0, Math.PI*2); ctx!.fill();

      // ----- iridescent rim (animated hues) -----
      const hueShift = Math.sin(time*0.2 + b.t)*12; // gentle drift
      const stops = [
        [0.70, `hsla(${(hue+hueShift+300)%360}, 92%, 72%, ${alpha*0.55})`],
        [0.78, `hsla(${(hue+hueShift+260)%360}, 92%, 68%, ${alpha*0.65})`],
        [0.86, `hsla(${(hue+hueShift+210)%360}, 90%, 62%, ${alpha*0.80})`],
        [0.92, `hsla(${(hue+hueShift+160)%360}, 88%, 64%, ${alpha*0.70})`],
        [0.97, `hsla(${(hue+hueShift+120)%360}, 88%, 68%, ${alpha*0.55})`],
        [1.00, `rgba(255,255,255,0)`],
      ];
      g = ctx!.createRadialGradient(x, y, r*0.6, x, y, r*1.02);
      for (const [p,c] of stops) g.addColorStop(p as number, c as string);
      ctx!.globalCompositeOperation = 'lighter';
      ctx!.fillStyle = g;
      ctx!.beginPath(); ctx!.arc(x,y,r,0,Math.PI*2); ctx!.fill();

      // ----- specular glint + tiny bloom -----
      const hx = x - r*0.32, hy = y - r*0.32;
      const glint = ctx!.createRadialGradient(hx, hy, 0, hx, hy, r*0.55);
      glint.addColorStop(0.00, `rgba(255,255,255,${alpha*0.95})`);
      glint.addColorStop(0.20, `rgba(255,255,255,${alpha*0.35})`);
      glint.addColorStop(1.00, `rgba(255,255,255,0)`);
      ctx!.fillStyle = glint;
      ctx!.beginPath(); ctx!.arc(x,y,r,0,Math.PI*2); ctx!.fill();

      // ----- depth-of-field blur for far bubbles -----
      if (z > 0.65) {
        const blur = lerp(0.6, 1.6, (z-0.65)/0.35) * DPR; // px
        const d = Math.ceil(r*2);
        blurCanvas.width = blurCanvas.height = d*2;
        const oc = bctx; oc.clearRect(0,0,blurCanvas.width,blurCanvas.height);
        // draw the bubble again on offscreen at local coords
        oc.save(); oc.translate(d, d);
        // reuse a softer radial fill to approximate total look (fast path)
        const og = oc.createRadialGradient(0,0, r*0.6, 0,0, r*1.02);
        og.addColorStop(0.7, 'rgba(255,255,255,0.08)');
        og.addColorStop(1.0, 'rgba(255,255,255,0)');
        oc.fillStyle = og; oc.beginPath(); oc.arc(0,0,r,0,Math.PI*2); oc.fill();
        oc.restore();
        // blur by drawing scaled with shadow blur
        ctx!.save();
        ctx!.filter = `blur(${blur}px)`;         // Canvas2D blur
        ctx!.globalCompositeOperation = 'lighter';
        ctx!.drawImage(blurCanvas, x-d, y-d);
        ctx!.restore();
      }
    }


    // Static fallback (no animation)
    if (reduce) {
      ctx.clearRect(0,0,cv.width,cv.height);
      for (const b of bubbles) drawBubble(b, 0);
      return;
    }

    // Animation loop
    let animationFrameId: number;
    let time = 0;
    function tick(ts: number){
      if (!time) time = ts;
      const elapsed = (ts - time) / 1000;
      time = ts;

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

        drawBubble(b, elapsed);
      }
      animationFrameId = requestAnimationFrame(tick);
    }
    tick(0);

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
