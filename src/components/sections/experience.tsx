"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "AT&T",
    role: "Product & Automation",
    meta: "Enterprise",
    bullets: [
      "Drove automation and product strategies in a large enterprise environment, mapping workflows and aligning stakeholders.",
      "Translated complex operational needs into clearer product direction.",
    ],
  },
  {
    company: "Alarm.com",
    role: "Product Strategy",
    meta: "Enterprise Platform",
    bullets: [
      "Contributed to product strategy and user-centric digital experiences within an enterprise platform context.",
      "Focused on feasibility, clarity, and outcomes that matter to customers.",
    ],
  },
  {
    company: "Fluid Touch",
    role: "Product & Experience Design",
    meta: "Product & Design",
    bullets: [
      "Supported product and experience work spanning strategy and design.",
      "Bridged user research, workflow thinking, and execution to help ideas become usable products.",
    ],
  },
];

export default function ExperienceSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const scroller = scrollRef.current;

    const update = () => {
      const track = trackRef.current;
      const pane = scrollRef.current;
      if (!track || !pane) return;

      const paneRect = pane.getBoundingClientRect();
      const triggerY = paneRect.top + paneRect.height * 0.35;

      const trackRect = track.getBoundingClientRect();
      const start = trackRect.top;
      const end = trackRect.bottom;
      const raw = (triggerY - start) / (end - start || 1);
      setProgress(Math.min(1, Math.max(0, raw)));

      let nextActive = -1;
      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        const itemRect = el.getBoundingClientRect();
        if (itemRect.top + 12 <= triggerY + 8) {
          nextActive = index;
        }
      });
      setActiveIndex(nextActive);
    };

    update();
    scroller?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      scroller?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="relative h-[calc(100svh-4rem)] overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-[#00D1FF]/10 blur-[80px]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] md:gap-16 md:px-8">
        {/* Left title — stays fixed */}
        <div className="flex shrink-0 flex-col justify-center px-6 pb-4 pt-8 md:px-0 md:py-0">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#00D1FF]">
            Experience
          </p>
          <h1 className="font-landing text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-[3.25rem]">
            My work
            <br />
            experience
          </h1>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-white/55 md:text-lg">
            Corporate roles where I shaped product strategy, automation, and
            user-centered digital experiences across enterprise environments.
          </p>
        </div>

        {/* Right timeline — only this pane scrolls */}
        <div
          ref={scrollRef}
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-16 pt-4 md:px-0 md:pb-24 md:pt-20 [scrollbar-width:thin] [scrollbar-color:rgba(0,209,255,0.35)_transparent]"
        >
          <div ref={trackRef} className="relative pl-10 md:pl-12">
            <div className="absolute bottom-2 left-[15px] top-2 w-px bg-white/15 md:left-[17px]" />

            <div
              className="absolute left-[15px] top-2 w-px origin-top md:left-[17px]"
              style={{
                height: `calc((100% - 1rem) * ${progress})`,
                background:
                  "linear-gradient(180deg, #00D1FF 0%, #38bdf8 55%, #00D1FF 100%)",
                boxShadow:
                  "0 0 8px rgba(0,209,255,0.9), 0 0 18px rgba(0,209,255,0.55), 0 0 32px rgba(0,209,255,0.35)",
              }}
            />

            <div className="space-y-14 md:space-y-16">
              {experiences.map((item, index) => {
                const isActive = index <= activeIndex;
                const isCurrent = index === activeIndex;

                return (
                  <article
                    key={item.company}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    className="relative"
                  >
                    <span
                      className={cn(
                        "absolute -left-10 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border transition-all duration-300 md:-left-[2.65rem] md:h-[1.15rem] md:w-[1.15rem]",
                        isActive
                          ? "border-[#00D1FF] bg-[#00D1FF]"
                          : "border-white/35 bg-black"
                      )}
                      style={
                        isActive
                          ? {
                              boxShadow: isCurrent
                                ? "0 0 0 4px rgba(0,209,255,0.2), 0 0 14px rgba(0,209,255,0.95), 0 0 28px rgba(0,209,255,0.55)"
                                : "0 0 0 3px rgba(0,209,255,0.15), 0 0 10px rgba(0,209,255,0.65)",
                            }
                          : undefined
                      }
                    >
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full transition-colors duration-300",
                          isActive ? "bg-white" : "bg-transparent"
                        )}
                      />
                    </span>

                    <h2
                      className={cn(
                        "font-landing text-2xl font-bold tracking-tight transition-colors duration-300 md:text-[1.75rem]",
                        isActive ? "text-[#00D1FF]" : "text-white"
                      )}
                    >
                      {item.company}
                    </h2>
                    <p className="mt-2 text-sm text-white/55 md:text-[0.95rem]">
                      {item.role}
                      <span className="mx-2 text-white/25">•</span>
                      {item.meta}
                    </p>
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-white/75 md:text-lg">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D1FF]/80" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
