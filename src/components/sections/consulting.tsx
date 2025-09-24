import AnimatedSection from "@/components/animated-section";

export default function ConsultingSection() {
  return (
    <AnimatedSection id="consulting" className="pt-0 md:pt-0">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">Consulting</h2>
        <p className="text-lg text-muted-foreground">
          I provide consulting in web and app design, as well as product development — helping early-stage founders and teams shape ideas into user-friendly, market-ready products. My focus is on bridging strategy and design, ensuring digital experiences are both functional and engaging.
        </p>
      </div>
    </AnimatedSection>
  );
}
