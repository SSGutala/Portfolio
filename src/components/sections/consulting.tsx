import AnimatedSection from "@/components/animated-section";
import { Card } from "@/components/ui/card";
import { ConnectButton } from "@/components/connect-button";

const services = [
  "Strategy",
  "Research",
  "Prototyping",
  "Design Systems",
  "Analytics",
];

export default function ConsultingSection() {
  return (
    <AnimatedSection id="consulting" className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
        Advisory & execution to ship outcomes.
      </h1>
      <p className="max-w-3xl text-lg text-muted-foreground mb-12">
        I partner with early-stage startups and established companies to define, design, and deliver impactful products. My approach combines strategic thinking with hands-on execution.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12 w-full max-w-5xl">
        {services.map((service) => (
          <Card key={service} className="bg-card hover:bg-accent transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center p-6 h-28">
            <h3 className="font-semibold text-center text-sm md:text-base">{service}</h3>
          </Card>
        ))}
      </div>
       <ConnectButton size="lg">
         Get in Touch
       </ConnectButton>
    </AnimatedSection>
  );
}
