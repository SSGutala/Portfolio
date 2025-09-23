import AnimatedSection from "@/components/animated-section";
import { ConnectButton } from "@/components/connect-button";
import Image from "next/image";

export default function ConsultingSection() {
  return (
    <AnimatedSection id="consulting">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Builder, advisor, and product leader.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            I partner with early-stage startups and established companies to define, design, and deliver impactful products. My approach combines strategic thinking with hands-on execution.
          </p>
          <ConnectButton size="lg">
            Get in Touch
          </ConnectButton>
        </div>
        <div className="flex justify-center">
           <Image
            src="https://raw.githubusercontent.com/SSGutala/Portfolio/7c67606f69b501fa960efc8988fef2275ee3120f/prof-pic.png"
            alt="SRIVATSAV professional picture"
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
