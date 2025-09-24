import AnimatedSection from "@/components/animated-section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Briefcase, Lightbulb, Users } from "lucide-react";

const services = [
  {
    icon: <Briefcase className="h-8 w-8 mb-4" />,
    title: "Strategy",
    description: "Defining product vision and roadmap to align with business goals.",
  },
  {
    icon: <Users className="h-8 w-8 mb-4" />,
    title: "UX Research",
    description: "Understanding user needs to inform design and development.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 mb-4" />,
    title: "Prototyping",
    description: "Creating interactive models to test and validate ideas.",
  },
  {
    icon: <BarChart className="h-8 w-8 mb-4" />,
    title: "Analytics",
    description: "Using data to drive product decisions and measure success.",
  },
];

export default function ConsultingSection() {
  return (
    <AnimatedSection id="consulting" className="pt-0 md:pt-0">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-center">Consulting Services</h2>
      <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12 text-center">
        I offer a range of services to help you build and scale successful products.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="bg-card text-center p-6 flex flex-col items-center">
            <CardHeader>
              {service.icon}
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardDescription>{service.description}</CardDescription>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
