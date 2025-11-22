import AnimatedSection from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomeSection() {
  return (
    <AnimatedSection id="home" className="relative">

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Visionary, builder, and product leader.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            I create products and experiences where creativity meets execution, blending design, strategy, and innovation to turn bold ideas into meaningful results.
          </p>
          <Button asChild size="lg">
            <a href="https://www.linkedin.com/in/sai-gutala/" target="_blank" rel="noopener noreferrer">
              Get in Touch
            </a>
          </Button>
        </div>
        <div className="flex justify-center">
           <Image
            src="https://raw.githubusercontent.com/SSGutala/Portfolio/7c67606f69b501fa960efc8988fef2275ee3120f/prof-pic.png"
            alt="Sri Gutala professional picture"
            width={350}
            height={350}
            className="rounded-full object-cover"
            priority
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
