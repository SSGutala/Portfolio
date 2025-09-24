
"use client";

import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function UiUxSection() {
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state based on whether the element is intersecting
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2, // Trigger when 20% of the element is visible
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

  return (
    <AnimatedSection id="uiux" className="pt-0 md:pt-0">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-center">Designing systems and experiences.</h2>
      <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12 text-center">
        From wireframes to high-fidelity mockups, I focus on creating intuitive and beautiful user interfaces.
      </p>

      <div ref={animationRef} className="relative h-96 md:h-[600px] w-full max-w-4xl mx-auto flex items-center justify-center overflow-hidden">
        {/* Left Phone */}
        <div
          className={cn(
            "absolute transition-all duration-[1200ms] ease-out",
            "w-[48%] md:w-[300px]",
            isVisible
              ? "opacity-100 translate-x-[-55%]"
              : "opacity-0 translate-x-[-150%]"
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
          className={cn(
            "absolute transition-all duration-[1200ms] ease-out",
            "w-[48%] md:w-[300px]",
            isVisible
              ? "opacity-100 translate-x-[55%]"
              : "opacity-0 translate-x-[150%]"
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
