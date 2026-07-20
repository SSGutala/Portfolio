import { Briefcase, Lightbulb } from "lucide-react";
import { glassCardStyle } from "@/lib/glass-styles";

const features = [
  {
    title: "Product Strategy",
    description:
      "From user research to roadmap, shaping products that balance insight, feasibility, and emotion.",
    icon: Lightbulb,
  },
  {
    title: "Venture Building",
    description:
      "Launching ideas into real products: software, hardware, apparel, and everything in between.",
    icon: Briefcase,
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white md:py-28">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#00D1FF]/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#00D1FF]/[0.07] blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-stretch gap-10 px-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] md:gap-14 md:px-8">
        <div
          className="relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-[2rem] px-8 py-14 text-center md:min-h-full md:rounded-[2.25rem]"
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

        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#00D1FF]">
            About Me
          </p>
          <h2 className="font-landing text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
            Building products that make people feel something
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
            I&apos;m Sai Srivatsav Gutala, most people call me Sri. I&apos;m a
            product thinker, builder, and storyteller. I turn ambitious ideas
            into experiences people can actually use, whether that&apos;s
            intuitive software, hardware-backed products, or creative work that
            lives somewhere in between. From sketching app concepts at 15 to
            driving strategy at AT&amp;T, Alarm.com, and Fluid Touch, I work at
            the intersection of technology, design, and human behavior.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative flex items-start gap-4 overflow-hidden rounded-2xl px-4 py-5"
                style={glassCardStyle}
              >
                <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00D1FF]/15 shadow-[0_0_20px_rgba(0,209,255,0.35)] ring-1 ring-[#00D1FF]/50">
                  <feature.icon className="h-5 w-5 text-[#00D1FF]" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-landing text-base font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/55">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
