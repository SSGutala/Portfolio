import Image from "next/image";
import Link from "next/link";
import { glassCardStyle } from "@/lib/glass-styles";

const projects = [
  {
    slug: "aria",
    name: "Aria",
    tagline: "AI Product Workflow Platform",
    description:
      "An AI-powered platform helping founders, PMs, and builders move from raw ideas to structured execution.",
    logo: (
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#00D1FF]/15 shadow-[0_0_24px_rgba(0,209,255,0.25)] ring-1 ring-[#00D1FF]/40">
        <span className="font-landing text-4xl font-bold text-[#00D1FF]">A</span>
      </div>
    ),
  },
  {
    slug: "veera-apparel",
    name: "Veera Apparel",
    tagline: "Lifestyle Activewear Venture",
    description:
      "Premium minimal lifestyle activewear with subtle cultural expression, designed for everyday wear.",
    logo: (
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-black p-2 shadow-lg ring-1 ring-white/15">
        <Image
          src="https://raw.githubusercontent.com/SSGutala/Portfolio/5151bb3c20f4821795f6d93526e6d73138d14986/Veera-logo.png"
          alt="Veera Apparel Logo"
          width={64}
          height={64}
          className="object-contain mix-blend-lighten"
        />
      </div>
    ),
  },
  {
    slug: "alphawave-technologies",
    name: "Alphawave Technologies",
    tagline: "Smart Footwear Venture",
    description:
      "App-controlled adaptive footwear with dynamic color-changing technology powered by e-Ink and BLE.",
    logo: (
      <Image
        src="https://raw.githubusercontent.com/SSGutala/Portfolio/4cdedf9fa796a57e7ed6d1240bba3ffeeefaabfc/AW_Logo.png"
        alt="Alphawave Logo"
        width={80}
        height={80}
        className="rounded-2xl object-contain shadow-lg ring-1 ring-white/10"
      />
    ),
  },
  {
    slug: "superstar",
    name: "SuperStar",
    tagline: "Short Film Creator Platform",
    description:
      "A mobile platform democratizing episodic storytelling — a Netflix for creators, built from a smartphone.",
    logo: (
      <Image
        src="https://raw.githubusercontent.com/SSGutala/Portfolio/ffbb7b6b6eed5e77e9fa05007f8f7aa8fd4b1641/superstarlogo.png"
        alt="SuperStar Logo"
        width={80}
        height={80}
        className="rounded-2xl object-contain shadow-lg ring-1 ring-white/10"
      />
    ),
  },
];

export default function VenturesSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black py-20 text-white md:py-32">
      <div className="pointer-events-none absolute -left-20 top-32 h-72 w-72 rounded-full bg-[#00D1FF]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#00D1FF]">
            Projects
          </p>
          <h2 className="font-landing text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem]">
            Projects
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/65">
            A collection of ventures, products, and initiatives built from concept to execution.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative flex flex-col items-center overflow-hidden rounded-2xl p-8 text-center transition-transform duration-300 hover:-translate-y-1"
              style={glassCardStyle}
            >
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <div className="mb-5 transition-transform duration-300 group-hover:scale-105">
                {project.logo}
              </div>

              <h3 className="mb-1 font-landing text-lg font-bold text-white transition-colors group-hover:text-[#00D1FF]">
                {project.name}
              </h3>

              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#00D1FF]/80">
                {project.tagline}
              </p>

              <p className="text-sm leading-relaxed text-white/55">
                {project.description}
              </p>

              <span className="mt-5 flex items-center gap-1 text-xs text-white/50 opacity-0 transition-opacity group-hover:opacity-100">
                View project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
