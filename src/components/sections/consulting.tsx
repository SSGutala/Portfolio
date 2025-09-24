import AnimatedSection from "@/components/animated-section";
import Image from "next/image";

export default function ConsultingSection() {
  return (
    <AnimatedSection id="consulting" className="pt-0 md:pt-0">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">Consulting</h2>
        <p className="text-lg text-muted-foreground mb-16">
          I provide consulting in web and app design, as well as product development — helping early-stage founders and teams shape ideas into user-friendly, market-ready products. My focus is on bridging strategy and design, ensuring digital experiences are both functional and engaging.
        </p>

        <div className="space-y-24">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4">Bangladrop</h3>
            <video
              src="https://raw.githubusercontent.com/SSGutala/Portfolio/0931ddc08ab698b4d49418541cb9298aa4afeced/BangladropRender.mov"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg shadow-2xl w-full max-w-md mb-8"
            />
            <div className="text-lg text-muted-foreground space-y-6 text-left">
              <p>
                <strong>Bangladrop</strong> was a startup based in Bangladesh seeking support in designing the first iteration of their mobile app for a dropshipping platform. The vision was to create a system similar to Alibaba but focused on connecting global business owners with wholesale sellers in Bangladesh.
              </p>
              <p>
                I worked closely with the client through multiple meetings to understand their goals and translate them into actionable design solutions. This included customizing wireframes and app flows to align with Bangladrop’s vision, while also engaging with prospective customers and businesses in Bangladesh to ensure the design addressed real user needs.
              </p>
              <p>
                The project offered valuable experience in global market design, client collaboration, and customer research. It strengthened my ability to conduct interviews, capture client objectives, and deliver designs tailored to diverse audiences — bridging product vision with practical usability.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4">NECX</h3>
            <Image
                src="https://raw.githubusercontent.com/SSGutala/Portfolio/bdd81293e2af4475fcd3d757a8dfaf4f28680d3c/necxlogo.png"
                alt="NECX Logo"
                width={150}
                height={150}
                className="rounded-xl mb-8"
            />
            <div className="text-lg text-muted-foreground space-y-6 text-left">
              <p>
                <strong>NECX</strong> engaged me to design their first prototype mobile app, created to showcase innovative solutions for law enforcement agencies to seed investors. The prototype emphasized usability and functionality, translating NECX’s vision into a tangible digital experience for stakeholders and potential customers.
              </p>
              <p>
                In this project, I collaborated closely with NECX to capture client requests and address the unique challenges of law enforcement information management. Through iterative wireframes and design refinements, I ensured the app balanced industry standards with the client’s goals.
              </p>
              <p>
                The experience strengthened my ability to work efficiently in a fast-paced environment, prioritize timelines, and adapt to complex requirements. Despite non-disclosure constraints, the NECX project expanded my expertise in designing for specialized industries and highlighted the value of aligning product design with client and market expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
