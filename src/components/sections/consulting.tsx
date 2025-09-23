import AnimatedSection from "@/components/animated-section";
import { ConnectButton } from "@/components/connect-button";

export default function ConsultingSection() {
  return (
    <AnimatedSection id="consulting" className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">
        Advisory & execution to ship outcomes.
      </h1>
       <ConnectButton size="lg">
         Get in Touch
       </ConnectButton>
    </AnimatedSection>
  );
}
