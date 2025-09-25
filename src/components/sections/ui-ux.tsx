
"use client";

import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface PhoneAnimationProps {
  leftImageSrc: string;
  leftImageAlt: string;
  rightImageSrc: string;
  rightImageAlt: string;
}

const PhoneAnimation: React.FC<PhoneAnimationProps> = ({ leftImageSrc, leftImageAlt, rightImageSrc, rightImageAlt }) => {
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
        threshold: 0,
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

      const start = viewportHeight;
      const end = viewportHeight * 0.12; 
      const progress = (start - rect.top) / (start - end);
      const clampedProgress = Math.max(0, Math.min(1, progress));

      const leftTranslate = -100 + clampedProgress * 45;
      const rightTranslate = 100 - clampedProgress * 45;
      const opacity = clampedProgress;

      leftPhoneEl.style.transform = `translateX(${leftTranslate}%)`;
      leftPhoneEl.style.opacity = `${opacity}`;
      rightPhoneEl.style.transform = `translateX(${rightTranslate}%)`;
      rightPhoneEl.style.opacity = `${opacity}`;
    };

    if (isIntersecting) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isIntersecting]);

  return (
    <div ref={animationRef} className="relative h-96 md:h-[600px] w-full max-w-4xl mx-auto flex items-center justify-center overflow-hidden">
      <div
        ref={leftPhoneRef}
        className="absolute w-[48%] md:w-[320px] transform -translate-x-[100%] opacity-0"
      >
        <Image
          src={leftImageSrc}
          alt={leftImageAlt}
          width={320}
          height={640}
          className="w-full h-auto object-contain"
        />
      </div>
      <div
        ref={rightPhoneRef}
        className="absolute w-[48%] md:w-[320px] transform translate-x-[100%] opacity-0"
      >
        <Image
          src={rightImageSrc}
          alt={rightImageAlt}
          width={320}
          height={640}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

interface FadeInImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const FadeInImage: React.FC<FadeInImageProps> = ({ src, alt, width, height, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = imageRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={imageRef}
      className={cn(
        'transition-opacity duration-1000 ease-in-out',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
};


export default function UiUxSection() {
  return (
    <AnimatedSection id="uiux" className="pt-0 md:pt-0">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-center">Designing systems and experiences.</h2>
      <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12 text-center">
        From wireframes to high-fidelity mockups, I focus on creating intuitive and beautiful user interfaces.
      </p>

      <div className="space-y-16">
        <div>
          <h3 className="text-2xl font-light underline text-center mb-8">Alphawave Mobile App Samples</h3>
          <PhoneAnimation
            leftImageSrc="https://raw.githubusercontent.com/SSGutala/Portfolio/a8e1cae263ceecd70eab9040feb9c91281ffa384/AWr1.png"
            leftImageAlt="Alphawave Rider App Screen 1"
            rightImageSrc="https://raw.githubusercontent.com/SSGutala/Portfolio/a8e1cae263ceecd70eab9040feb9c91281ffa384/AWr3.png"
            rightImageAlt="Alphawave Rider App Screen 2"
          />
          <p className="text-muted-foreground text-sm mt-4 text-center">
            Alphawave Technologies Mobile App Render Samples
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-light underline text-center mb-8">DJ AI Web App Samples</h3>
          <div className="flex flex-col items-center gap-8">
             <FadeInImage
              src="https://raw.githubusercontent.com/SSGutala/Portfolio/47fa924db0d0f62b17075764116a105db2a81aef/DJAIr1.png"
              alt="DJ AI Web App Screen 1"
              width={640}
              height={400}
              className="w-full max-w-2xl h-auto object-contain rounded-lg"
            />
            <FadeInImage
              src="https://raw.githubusercontent.com/SSGutala/Portfolio/47fa924db0d0f62b17075764116a105db2a81aef/DJAIr2.png"
              alt="DJ AI Web App Screen 2"
              width={640}
              height={400}
              className="w-full max-w-2xl h-auto object-contain rounded-lg"
            />
          </div>
          <p className="text-muted-foreground text-sm mt-4 text-center">
            DJ AI Web App Samples
          </p>
          <div className="max-w-3xl mx-auto text-lg text-muted-foreground space-y-6 text-center mt-8">
            <p>
              DJ AI was envisioned as a next-generation web application for music creation and mixing. The concept combined the power of artificial intelligence with the creativity of human text input. On one side, the app would allow users to generate unique mixes automatically through AI—blending beats, transitions, and effects of two user-defined songs, in real time. On the other, it offered manual mixing tools, giving users full control to layer tracks, adjust tempo, and experiment with their own style.
            </p>
            <p>
              The design focused on building an intuitive interface that balanced automation and manual creativity, making the platform accessible to casual listeners while still offering depth for aspiring DJs. The vision was to create a space where music could be both discovered and co-created, redefining what it means to mix in the digital age, as well as serve as a device in bars and nightclubs that would save businesses money.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
