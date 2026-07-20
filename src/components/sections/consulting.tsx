import Image from "next/image";
import { glassCardStyle } from "@/lib/glass-styles";

export default function ConsultingSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black py-20 text-white md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#00D1FF]/10 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#00D1FF]">
            Consulting
          </p>
          <h2 className="mb-6 font-landing text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem]">
            Consulting
          </h2>
          <p className="mb-16 text-lg text-white/65">
            Through{" "}
            <a
              href="https://kyropartners.co"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#00D1FF] underline underline-offset-2 transition-colors hover:text-[#00D1FF]/80"
            >
              Kyro Partners
            </a>
            , I provide consulting in web/app design and development, SEO, product direction and branding for early-stage founders and local businesses translating complex ideas into user-friendly, market-ready products. My focus is on bridging strategy and design, ensuring digital experiences are both functional and engaging.
          </p>
        </div>

        <div className="space-y-16">
          <div
            className="relative overflow-hidden rounded-[1.75rem] px-6 py-10 md:px-10"
            style={glassCardStyle}
          >
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="flex flex-col items-center">
              <h3 className="mb-6 text-center font-landing text-2xl font-bold text-white">
                Corporate Stretch
              </h3>
              <div className="w-full">
                <video
                  src="https://raw.githubusercontent.com/SSGutala/Portfolio/e2fe9b606d096e903260830d8a2bf9662c1a2728/CSRender.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="mb-8 w-full rounded-lg shadow-2xl ring-1 ring-white/10"
                />
              </div>
              <div className="mx-auto max-w-3xl space-y-6 text-left text-lg text-white/65">
                <p>
                  <strong className="text-white">Corporate Stretch</strong> partnered with me to elevate their digital presence and brand identity. The company provides mobile stretch therapy services to athletes, corporate employees, and teams across the Washington, DC metro area, with a mission to improve wellness, energy, and productivity through guided movement.
                </p>
                <p>
                  I worked on positioning Corporate Stretch as a professional, trusted service brand by designing a clean, modern website and refining their messaging. The focus was on highlighting the core problem — workplace fatigue and unproductivity from sitting all day — and presenting Corporate Stretch’s mobile therapy sessions as an energizing solution.
                </p>
                <p>
                  Through this project, I gained experience in shaping a wellness service into a scalable digital brand, balancing approachable design with corporate credibility. It underscored the importance of tone, storytelling, and usability when building trust with both businesses and individual clients.
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[1.75rem] px-6 py-10 md:px-10"
            style={glassCardStyle}
          >
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <h3 className="mb-6 font-landing text-2xl font-bold text-white">Bangladrop</h3>
              <video
                src="https://raw.githubusercontent.com/SSGutala/Portfolio/0931ddc08ab698b4d49418541cb9298aa4afeced/BangladropRender.mov"
                autoPlay
                loop
                muted
                playsInline
                className="mb-8 w-full max-w-md rounded-lg shadow-2xl ring-1 ring-white/10"
              />
              <div className="space-y-6 text-left text-lg text-white/65">
                <p>
                  <strong className="text-white">Bangladrop</strong> was a startup based in Bangladesh seeking support in designing the first iteration of their mobile app for a dropshipping platform. The vision was to create a system similar to Alibaba but focused on connecting global business owners with wholesale sellers in Bangladesh.
                </p>
                <p>
                  I worked closely with the client through multiple meetings to understand their goals and translate them into actionable design solutions. This included customizing wireframes and app flows to align with Bangladrop’s vision, while also engaging with prospective customers and businesses in Bangladesh to ensure the design addressed real user needs.
                </p>
                <p>
                  The project offered valuable experience in global market design, client collaboration, and customer research. It strengthened my ability to conduct interviews, capture client objectives, and deliver designs tailored to diverse audiences — bridging product vision with practical usability.
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[1.75rem] px-6 py-10 md:px-10"
            style={glassCardStyle}
          >
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <h3 className="mb-6 font-landing text-2xl font-bold text-white">NECX</h3>
              <Image
                src="https://raw.githubusercontent.com/SSGutala/Portfolio/bdd81293e2af4475fcd3d757a8dfaf4f28680d3c/necxlogo.png"
                alt="NECX Logo"
                width={150}
                height={150}
                className="mb-8 rounded-xl ring-1 ring-white/10"
              />
              <div className="space-y-6 text-left text-lg text-white/65">
                <p>
                  <strong className="text-white">NECX</strong> engaged me to design their first prototype mobile app, created to showcase innovative solutions for law enforcement agencies to seed investors. The prototype emphasized usability and functionality, translating NECX’s vision into a tangible digital experience for stakeholders and potential customers.
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
      </div>
    </section>
  );
}
