
"use client";

import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function UiUxSection() {
  const animationRef = useRef<HTMLDivElement>(null);
  const leftPhoneRef = useRef<HTMLDivElement>(null);
  const rightPhoneRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0, // Trigger as soon as any part is visible
      }
    );

    const currentRef = animationRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionEl = animationRef.current;
      const leftPhoneEl = leftPhoneRef.current;
      const rightPhoneEl = rightPhoneRef.current;
      if (!sectionEl || !leftPhoneEl || !rightPhoneEl || !isIntersecting) return;

      const rect = sectionEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate progress: 0 when top of section hits bottom of viewport, 1 when it hits 88% of the way up the screen
      const start = viewportHeight;
      const end = viewportHeight * 0.12; // End animation when top of section reaches 88% up the viewport
      const progress = (start - rect.top) / (start - end);
      const clampedProgress = Math.max(0, Math.min(1, progress));

      // Calculate transform values
      const leftTranslate = -100 + clampedProgress * 45;  // from -100% to -55%
      const rightTranslate = 100 - clampedProgress * 45; // from 100% to 55%
      
      const opacity = clampedProgress;

      leftPhoneEl.style.transform = `translateX(${leftTranslate}%)`;
      leftPhoneEl.style.opacity = `${opacity}`;
      rightPhoneEl.style.transform = `translateX(${rightTranslate}%)`;
      rightPhoneEl.style.opacity = `${opacity}`;
    };

    if (isIntersecting) {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isIntersecting]);

  return (
    <AnimatedSection id="uiux" className="pt-0 md:pt-0">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-center">Designing systems and experiences.</h2>
      <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12 text-center">
        From wireframes to high-fidelity mockups, I focus on creating intuitive and beautiful user interfaces.
      </p>

      <div ref={animationRef} className="relative h-96 md:h-[600px] w-full max-w-4xl mx-auto flex items-center justify-center overflow-hidden">
        {/* Left Phone */}
        <div
          ref={leftPhoneRef}
          className={cn(
            "absolute",
            "w-[48%] md:w-[300px]",
            "transform -translate-x-[100%] opacity-0"
          )}
        >
          <Image
            src="https://raw.githubusercontent.com/SSGutala/Portfolio/a8e1cae263ceecd70eab9040feb9c91281ffa384/AWr1.png"
            alt="Alphawave Rider App Screen 1"
            width={320}
            height={640}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Phone */}
        <div
          ref={rightPhoneRef}
          className={cn(
            "absolute",
            "w-[48%] md:w-[300px]",
             "transform translate-x-[100%] opacity-0"
          )}
        >
          <Image
            src="https://raw.githubusercontent.com/SSGutala/Portfolio/a8e1cae263ceecd70eab9040feb9c91281ffa384/AWr3.png"
            alt="Alphawave Rider App Screen 2"
            width={320}
            height={640}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
