import AnimatedSection from "@/components/animated-section";
import Image from "next/image";

export default function ProductSection() {
  return (
    <AnimatedSection id="product" className="pt-0 md:pt-0">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 text-center">Product</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
        <div className="flex justify-center items-center">
          <Image
            src="https://raw.githubusercontent.com/SSGutala/Portfolio/61f360425f33f225faeffc56b46f36a656138480/archer-front-veera.png"
            alt="Veera Apparel Front Render"
            width={400}
            height={400}
            className="rounded-lg shadow-2xl object-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="https://raw.githubusercontent.com/SSGutala/Portfolio/61f360425f33f225faeffc56b46f36a656138480/veera-big-back.png"
            alt="Veera Apparel Back Render"
            width={400}
            height={400}
            className="rounded-lg shadow-2xl object-contain"
          />
        </div>
      </div>
      <p className="text-muted-foreground text-sm mb-16 text-center">
        Veera Apparel Product Render Samples
      </p>

      <div className="flex flex-col items-center space-y-16">
        {/* The Alphawave video that was here has been moved to the Ventures section */}
      </div>
    </AnimatedSection>
  );
}
