import Link from "next/link";
import { glassCardStyle } from "@/lib/glass-styles";

const LINKEDIN_URL = "https://www.linkedin.com/in/sai-gutala/";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white md:py-28">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#00D1FF]/10 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#00D1FF]/[0.07] blur-[90px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-10 px-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] md:gap-14 md:px-8">
        <div
          className="relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-[2rem] px-8 py-14 text-center md:sticky md:top-28 md:min-h-[360px] md:rounded-[2.25rem]"
          style={glassCardStyle}
        >
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#00D1FF]/25 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          <p className="font-landing text-6xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            3+
          </p>
          <p className="mt-4 max-w-[12ch] font-landing text-lg font-semibold leading-snug text-white md:text-xl">
            Years Of Experience
          </p>
        </div>

        <div className="flex flex-col">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#00D1FF]">
            About Me
          </p>
          <h2 className="font-landing text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
            Hi, I&apos;m Sri! 👋
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            Over the past three+ years, I&apos;ve been building products across
            both fast-paced startups and large enterprise organizations. At
            heart, I&apos;m someone who naturally gravitates toward finding
            complex problems, understanding why they exist, and building
            intuitive solutions that people actually enjoy using.
          </p>

          <div className="mt-12 max-w-2xl">
            <h3 className="font-landing text-xl font-semibold text-white md:text-2xl">
              What I Do
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
              I sit at the intersection of technology, business, and user
              experience. Whether it&apos;s streamlining enterprise workflows,
              launching community initiatives, or diving into AI-driven
              features, I love taking complex ideas, turning them into scalable
              products, and seeing the measurable impact they create.
            </p>
          </div>

          <div className="mt-12 max-w-2xl">
            <h3 className="font-landing text-xl font-semibold text-white md:text-2xl">
              Education &amp; Background
            </h3>
            <ul className="mt-4 space-y-3 text-base leading-relaxed text-white/65 md:text-lg">
              <li>
                M.S. in Management — The George Washington University (In
                Progress)
              </li>
              <li>
                B.S. in Electrical &amp; Computer Engineering — George Mason
                University
              </li>
            </ul>
          </div>

          <div className="mt-12 max-w-2xl">
            <h3 className="font-landing text-xl font-semibold text-white md:text-2xl">
              Looking Ahead
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
              I&apos;m passionate about continuing my path as an AI Product
              Manager—building smart, user-centric tools that solve real
              problems and deliver high-value results.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
              When I&apos;m not diving into product strategy or obsessing over
              UX details, you can usually find me tinkering with new tech
              concepts or bringing people together around innovative ideas.
            </p>
          </div>

          <div className="mt-12 max-w-2xl">
            <h3 className="font-landing text-xl font-semibold text-white md:text-2xl">
              Let&apos;s Connect!
            </h3>
            <div className="mt-5 flex items-start gap-5">
              <Link
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                className="group relative inline-flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-10px_18px_rgba(255,255,255,0.06)] transition-[transform,background-color] duration-300 hover:scale-[1.05] hover:bg-white/15"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-3 bottom-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
                />
                <span
                  aria-hidden="true"
                  className="text-xl leading-none transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
              <p className="pt-1 text-base leading-relaxed text-white/65 md:text-lg">
                Feel free to reach out on LinkedIn, if you&apos;d like to chat
                about product management, AI, or collaborate on something cool.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
