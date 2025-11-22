import AnimatedSection from "@/components/animated-section";
import Image from "next/image";

export default function ProductSection() {
  return (
    <AnimatedSection id="product" className="pt-0 md:pt-0">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 text-center">Product</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
        {/* The Veera apparel images were here and have been moved to the Ventures section */}
      </div>
      

      <div className="flex flex-col items-center space-y-16">
        {/* The Alphawave video that was here has been moved to the Ventures section */}
      </div>
    </AnimatedSection>
  );
}
