import { glassCardStyle } from "@/lib/glass-styles";

const experiences = [
  {
    company: "AT&T",
    role: "Product & Automation",
    summary:
      "Drove automation and product strategies in a large enterprise environment—mapping workflows, aligning stakeholders, and translating complex operational needs into clearer product direction.",
  },
  {
    company: "Alarm.com",
    role: "Product Strategy",
    summary:
      "Contributed to product strategy and user-centric digital experiences within an enterprise platform context, focusing on feasibility, clarity, and outcomes that matter to customers.",
  },
  {
    company: "Fluid Touch",
    role: "Product & Experience Design",
    summary:
      "Supported product and experience work spanning strategy and design—bridging user research, workflow thinking, and execution to help ideas become usable products.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black py-20 text-white md:py-32">
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#00D1FF]/10 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#00D1FF]">
            Experience
          </p>
          <h1 className="font-landing text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem]">
            Experience
          </h1>
          <p className="mt-4 text-lg text-white/65">
            Corporate roles where I shaped product strategy, automation, and
            user-centered digital experiences across enterprise environments.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          {experiences.map((item) => (
            <article
              key={item.company}
              className="relative overflow-hidden rounded-2xl px-6 py-7 md:px-8"
              style={glassCardStyle}
            >
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="border-l-2 border-[#00D1FF]/50 pl-5 md:pl-6">
                <h2 className="font-landing text-2xl font-bold tracking-tight text-white">
                  {item.company}
                </h2>
                <p className="mt-2 text-sm font-medium uppercase tracking-widest text-[#00D1FF]">
                  {item.role}
                </p>
                <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
                  {item.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
