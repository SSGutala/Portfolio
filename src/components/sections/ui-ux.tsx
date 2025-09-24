import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";

const mockups = [
  {
    caption: "High-fidelity dashboard design for a data analytics platform.",
    imageId: "ui-mockup-1",
  },
  {
    caption: "User flow and wireframes for a new mobile banking feature.",
    imageId: "ui-mockup-2",
  },
  {
    caption: "Early-stage wireframing for a social media application.",
    imageId: "ui-mockup-3",
  },
  {
    caption: "Component library showcase from a comprehensive design system.",
    imageId: "ui-mockup-4",
  },
];

const getUiImage = (id: string): ImagePlaceholder | undefined => PlaceHolderImages.find(p => p.id === id);

export default function UiUxSection() {
  return (
    <AnimatedSection id="uiux" className="pt-0 md:pt-0">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-center">Designing systems and experiences.</h2>
      <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12 text-center">
        From wireframes to high-fidelity mockups, I focus on creating intuitive and beautiful user interfaces.
      </p>

      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {mockups.map((mockup, index) => {
            const image = getUiImage(mockup.imageId);
            return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden bg-card">
                    <CardContent className="flex aspect-video items-center justify-center p-0 relative">
                      {image && (
                         <Image
                          src={image.imageUrl}
                          alt={mockup.caption}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                    </CardContent>
                  </Card>
                  <p className="text-sm text-muted-foreground mt-2 text-center">{mockup.caption}</p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="ml-14" />
        <CarouselNext className="mr-14" />
      </Carousel>
    </AnimatedSection>
  );
}
