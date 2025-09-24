import Image from "next/image";
import AnimatedSection from "@/components/animated-section";

export default function VenturesSection() {
  return (
    <AnimatedSection id="ventures" className="pt-0 md:pt-0">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12">Ventures</h2>

        <div className="flex flex-col items-center space-y-16">
          <div className="flex flex-col items-center">
              <Image
                  src="https://raw.githubusercontent.com/SSGutala/Portfolio/5151bb3c20f4821795f6d93526e6d73138d14986/Veera-logo.png"
                  alt="Veera Apparel Logo"
                  width={128}
                  height={128}
                  className="rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Veera Apparel</h3>
              <p className="text-muted-foreground mb-6">(2024 - Present)</p>

              <div className="text-lg text-muted-foreground space-y-6 text-left">
                  <p>
                      Veera is a lifestyle and apparel venture built around the idea of combining premium design with cultural representation. The brand’s vision focused on creating workout and athleisure wear that felt both high-quality and expressive, especially for audiences often overlooked in mainstream activewear.
                  </p>
                  <p>
                      The journey involved developing the brand identity, experimenting with materials, and designing a digital-first experience. The website was crafted with a sleek “liquid glass” interface to reflect the modern, elevated feel of the brand, while the product design emphasized comfort, durability, and style.
                  </p>
                  <p>
                      Through research and early feedback, Veera reinforced the importance of balancing aesthetics with functionality. Customers valued clean, minimal designs with subtle accents over bold, cluttered patterns. The project highlighted how thoughtful branding, user-friendly digital experiences, and well-crafted products can create a sense of pride and representation in everyday wear.
                  </p>
              </div>
          </div>
          
          <div className="flex flex-col items-center">
              <Image
                  src="https://raw.githubusercontent.com/SSGutala/Portfolio/4cdedf9fa796a57e7ed6d1240bba3ffeeefaabfc/AW_Logo.png"
                  alt="Alphawave Technologies Logo"
                  width={128}
                  height={128}
                  className="rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Alphawave Technologies</h3>
              <p className="text-muted-foreground mb-6">(2020-2023)</p>

              <div className="text-lg text-muted-foreground space-y-6 text-left">
                  <p>
                      Alphawave Technologies was a three-year wearable devices venture exploring the future of smart footwear. The vision began with shoes that could display images and short videos through flexible OLED screens, but through six iterations of prototypes and over 100 customer interviews, the product evolved toward a more practical, market-aligned design: footwear capable of shifting between multiple static colors and patterns, controlled by a mobile app.
                  </p>
                  <p>
                      Across the journey, we learned how to build shoes and wearables from the ground up — taking a concept from barebones MVP to a market-ready product. Customer research revealed strong preferences for lower-cost shoes with multiple style options, and for premium footwear that leaned on designer-driven aesthetics. App testing further reinforced the value of simplicity: users favored neutral tones, straightforward navigation, and minimal complexity.
                  </p>
                  <p>
                      These insights guided the final product direction — shifting from dynamic displays to cost-effective static styles — and shaped our broader approach to wearable tech, product design, and customer-driven development.
                  </p>
              </div>
          </div>

          <div className="flex flex-col items-center">
              <Image
                  src="https://raw.githubusercontent.com/SSGutala/Portfolio/ffbb7b6b6eed5e77e9fa05007f8f7aa8fd4b1641/superstarlogo.png"
                  alt="SuperStar Logo"
                  width={144}
                  height={144}
                  className="rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">SuperStar</h3>
              <p className="text-muted-foreground mb-6">(2019 - 2020)</p>

              <div className="text-lg text-muted-foreground space-y-6 text-left">
                  <p>
                      SuperStar was a social media app venture developed over the course of a year, designed to let anyone create and share short films directly from a smartphone. The vision was to give creators a platform for episodic storytelling — a “Netflix for creators” — that democratized film production and distribution.
                  </p>
                  <p>
                      Throughout development, we engaged with digital creators and actors to test the concept and app features. While the editing tools showed promise, feedback revealed that the short-film creation process was still too complex for a mobile app to simplify, and many creators preferred professional equipment. Market insights also showed that the audience for such a platform was limited at the time, with the broader community not yet ready for this type of product.
                  </p>
                  <p>
                      Despite these challenges, the venture demonstrated valuable lessons in understanding creator needs, market timing, and product feasibility. The concept remains ahead of its time, with potential to succeed as technology advances and user behavior evolves.
                  </p>
              </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
