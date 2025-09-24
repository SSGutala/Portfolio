import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ventures = [
  {
    name: "InnovateAI",
    thesis: "AI-powered platform for democratizing market research.",
    stage: "Idea",
    logoId: "venture-logo-1",
  },
  {
    name: "ConnectSphere",
    thesis: "Decentralized professional networking for the new web.",
    stage: "MVP",
    logoId: "venture-logo-2",
  },
  {
    name: "HealthTrack",
    thesis: "Personalized wellness monitoring using wearable tech.",
    stage: "Scale",
    logoId: "venture-logo-3",
  },
];

const getVentureLogo = (id: string): ImagePlaceholder | undefined => PlaceHolderImages.find(p => p.id === id);

export default function VenturesSection() {
  return (
    <AnimatedSection id="ventures" className="pt-0 md:pt-0">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-center">Ventures</h2>
      <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12 text-center">
        Exploring new ideas and building ventures from the ground up. Here are some of the concepts I'm currently working on.
      </p>
      
      <div className="md:hidden">
        <Carousel opts={{ loop: true }} className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {ventures.map((venture, index) => {
              const logo = getVentureLogo(venture.logoId);
              return (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <VentureCard venture={venture} logo={logo} />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ventures.map((venture, index) => {
          const logo = getVentureLogo(venture.logoId);
          return <VentureCard key={index} venture={venture} logo={logo} />;
        })}
      </div>
    </AnimatedSection>
  );
}

interface VentureCardProps {
  venture: typeof ventures[0];
  logo: ImagePlaceholder | undefined;
}

const VentureCard = ({ venture, logo }: VentureCardProps) => (
  <Card className="flex flex-col h-full bg-card hover:bg-accent transition-all duration-300 transform hover:-translate-y-1">
    <CardHeader className="flex-row items-center gap-4">
      {logo && (
        <Image
          src={logo.imageUrl}
          alt={`${venture.name} logo`}
          width={64}
          height={64}
          data-ai-hint={logo.imageHint}
          className="rounded-lg bg-muted p-1"
        />
      )}
      <div>
        <h3 className="text-xl font-bold">{venture.name}</h3>
        <Badge variant={venture.stage === 'Idea' ? 'outline' : venture.stage === 'MVP' ? 'secondary' : 'default'} className="mt-1">
          {venture.stage}
        </Badge>
      </div>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-muted-foreground">{venture.thesis}</p>
    </CardContent>
  </Card>
);
