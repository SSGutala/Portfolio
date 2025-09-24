"use client";

import { useEffect, useRef } from 'react';

const Bubbles = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    const layer = document.getElementById('bubble-sprites');
    if (!layer) return;

    // Photoreal sprite URLs (transparent PNGs)
    const SPRITES = [
      'https://raw.githubusercontent.com/SSGutala/Portfolio/df9668041c16aa5913594877e17de454b9bf8eb1/bluebubble.png',
      'https://raw.githubusercontent.com/SSGutala/Portfolio/df9668041c16aa5913594877e17de454b9bf8eb1/greenbubble.png',
      'https://raw.githubusercontent.com/SSGutala/Portfolio/df9668041c16aa5913594877e17de454b9bf8eb1/pinkbubble.png',
      'https://raw.githubusercontent.com/SSGutala/Portfolio/df9668041c16aa5913594877e17de454b9bf8eb1/puplebubble.png', // (as uploaded)
      'https://raw.githubusercontent.com/SSGutala/Portfolio/df9668041c16aa5913594877e17de454b9bf8eb1/redbubble.png'
    ];

    const COUNT = 34;                 // total bubbles
    const MIN = 16, MAX = 42;         // px size clamp (keep small & realistic)
    const HUES = ['0deg','25deg','120deg','210deg','280deg']; // subtle tints

    const spawn = (i: number) => {
      const img = document.createElement('img');
      img.className = 'bubble';
      img.src = SPRITES[i % SPRITES.length];

      // size & placement
      const size = Math.round(MIN + Math.random()*(MAX-MIN));
      const w = layer.clientWidth || window.innerWidth;
      const h = layer.clientHeight || window.innerHeight;
      const x = Math.round(Math.random()*(w - size));
      const startY = Math.round(Math.random()*h*0.6 + h*0.2);

      img.style.left = x+'px';
      img.style.top = startY+'px';
      img.style.setProperty('--size', size+'px');

      // animation tuning
      const drift = (Math.random()<.5?-1:1) * (6 + Math.random()*14); // sideways px
      const s = 0.92 + Math.random()*0.2;                              // scale jitter
      const durSec = 18 + Math.random()*16;                            // 18–34s
      const delay = (-Math.random()*durSec) + 's';                     // stagger
      const op = (0.5 + Math.random()*0.25).toFixed(2);

      img.style.setProperty('--x', '0px');
      img.style.setProperty('--drift', drift+'px');
      img.style.setProperty('--s', String(s));
      img.style.setProperty('--dur', durSec+'s');
      img.style.setProperty('--delay', delay);
      img.style.setProperty('--op', op);
      img.style.setProperty('--hue', HUES[Math.floor(Math.random()*HUES.length)]);

      layer.appendChild(img);

      // recycle at end of each float
      img.addEventListener('animationiteration', () => {
        const nw = layer.clientWidth || window.innerWidth;
        const nx = Math.round(Math.random()*(nw - size));
        img.style.left = nx+'px';
        img.style.setProperty('--hue', HUES[Math.floor(Math.random()*HUES.length)]);
      });
    }

    for (let i=0;i<COUNT;i++) spawn(i);

    // keep layout stable on resize
    const handleResize = () => {
      // nothing heavy needed; new spawns will use new width
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      // Clean up bubbles if the component unmounts
      const bubbles = layer.querySelectorAll('.bubble');
      bubbles.forEach(bubble => bubble.remove());
    }
  }, []);

  return null;
};

export default Bubbles;
