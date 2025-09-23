import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    title: "Redesigning a B2B SaaS Platform",
    summary: "Led the UX overhaul for a complex enterprise software, boosting user satisfaction by 40%.",
    tags: ["UX Research", "UI Design", "SaaS"],
    imageId: "product-card-1",
    href: "#"
  },
  {
    title: "Mobile App for FinTech Startup",
    summary: "Designed and launched an MVP for a personal finance app, acquiring 10k users in 3 months.",
    tags: ["Mobile App", "FinTech", "Product Strategy"],
    imageId: "product-card-2",
    href: "#"
  },
  {
    title: "E-commerce Conversion Rate Optimization",
    summary: "A/B tested and implemented new checkout flows, increasing conversion by 15%.",
    tags: ["E-commerce", "CRO", "Analytics"],
    imageId: "product-card-3",
    href: "#"
  },
  {
    title: "Building a Multi-platform Design System",
    summary: "Created a unified design language and component library for web, iOS, and Android.",
    tags: ["Design Systems", "UI/UX"],
    imageId: "product-card-4",
    href: "#"
  },
];

const getProductImage = (id: string) => PlaceHolderImages.find(p => p.id === id);

export default function ProductSection() {
  return (
    <AnimatedSection id="product">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-center">Product</h2>
      <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12 text-center">
        A selection of products and case studies I've worked on. Each project presented unique challenges and learning opportunities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((study, index) => {
          const image = getProductImage(study.imageId);
          return (
            <Card key={index} className="group overflow-hidden bg-card hover:bg-accent transition-all duration-300 transform hover:-translate-y-1">
              <Link href={study.href} className="block">
                <div className="relative h-60 w-full">
                  {image && (
                     <Image
                      src={image.imageUrl}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    {study.title}
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:rotate-45 group-hover:text-primary" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{study.summary}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardFooter>
              </Link>
            </Card>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
