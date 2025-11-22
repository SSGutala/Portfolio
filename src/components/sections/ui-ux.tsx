
"use client";

import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const FadeInImage: React.FC<FadeInImageProps> = ({ src, alt, width, height, className }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const imageEl = imageRef.current;
      if (!imageEl) return;

      const rect = imageEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Start fading in when the top of the element is visible,
      // and be fully visible when it's 45% up the screen (1 - 0.55 = 0.45)
      const end = viewportHeight * 0.45; 
      
      let progress = 0;
      if (rect.top < viewportHeight && rect.bottom > 0) {
        progress = (viewportHeight - rect.top) / (viewportHeight - end);
      }
      
      const clampedProgress = Math.max(0, Math.min(1, progress));

      setOpacity(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={imageRef}
      style={{ opacity }}
      className={cn('transition-opacity duration-1000 ease-in-out', className)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-contain rounded-lg"
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
          <div className="flex justify-center items-center gap-4 md:gap-8 flex-col md:flex-row">
            <div className="w-[48%] md:w-auto md:max-w-[320px]">
              <Image
                src="https://raw.githubusercontent.com/SSGutala/Portfolio/a8e1cae263ceecd70eab9040feb9c91281ffa384/AWr1.png"
                alt="Alphawave Rider App Screen 1"
                width={320}
                height={640}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-[48%] md:w-auto md:max-w-[320px]">
              <Image
                src="https://raw.githubusercontent.com/SSGutala/Portfolio/a8e1cae263ceecd70eab9040feb9c91281ffa384/AWr3.png"
                alt="Alphawave Rider App Screen 2"
                width={320}
                height={640}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
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
              className="w-full max-w-2xl"
            />
            <FadeInImage
              src="https://raw.githubusercontent.com/SSGutala/Portfolio/47fa924db0d0f62b17075764116a105db2a81aef/DJAIr2.png"
              alt="DJ AI Web App Screen 2"
              width={640}
              height={400}
              className="w-full max-w-2xl"
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
