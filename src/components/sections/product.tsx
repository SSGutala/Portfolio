import AnimatedSection from "@/components/animated-section";

export default function ProductSection() {
  return (
    <AnimatedSection id="product" className="pt-0 md:pt-0">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 text-center">Product</h2>
      <div className="flex flex-col items-center">
        <video
          src="https://raw.githubusercontent.com/SSGutala/Portfolio/cf9aa8bf85d3d96aa8cec1ee6583c3e768b94bae/AWSlipOns.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg shadow-2xl w-full max-w-4xl"
        />
        <p className="text-muted-foreground text-sm mt-4">
          Alphawave Technologies Product Render
        </p>
      </div>
    </AnimatedSection>
  );
}
