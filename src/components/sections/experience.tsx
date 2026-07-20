"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "Fluid Touch",
    role: "Product Analyst / Software Engineer",
    location: "Remote",
    dates: "January 2025 - October 2025",
    bullets: [
      "Supported the successful development and alpha launch of Ghostwrite — an LLM-powered writing feature for Noteshelf — a 10M+ user productivity platform, translating sentence-completion use cases into technical requirements, feature behavior, edge cases, and QA acceptance criteria.",
      "Defined prompt behavior, input/output expectations, fallback states, and user-facing response logic for generative writing workflows, partnering with engineering to improve relevance, reliability, and release readiness.",
      "Supported natural-language template search by mapping user search intent, query behavior, ranking expectations, and template metadata needs into implementation-ready requirements.",
      "Analyzed beta feedback, validation findings, product signals, and user-reported issues to identify LLM output quality problems, workflow friction, and usability gaps before launch.",
      "Documented expected system behavior, test scenarios, error cases, and release considerations to help engineering validate AI feature performance across real user workflows.",
    ],
  },
  {
    company: "AT&T",
    role: "Technical Product Manager",
    location: "Dallas, TX",
    dates: "June 2023 - November 2024",
    bullets: [
      "Engineered automated reporting and operational workflows that eliminated 4,900-plus manual hours annually and prevented approximately $170K in projected overspend by improving cross-functional issue detection.",
      "Translated 15+ internal customer needs into requirements, workflow logic, user stories, dashboards, automated processes, success criteria, and delivery-ready documentation.",
      "Supported troubleshooting, issue follow-up, QA support, release coordination, dependency tracking, and post-launch review across multiple technical workstreams.",
      "Partnered with engineering, operations, and business stakeholders to investigate workflow failures, document root causes, recommend corrective actions, and improve internal support processes.",
      "Created workflow documentation, stakeholder updates, training context, and support materials to improve adoption and reduce confusion across technical and non-technical users.",
    ],
  },
  {
    company: "Alphawave Technologies",
    role: "Product Lead / Founder",
    location: "Fairfax, VA",
    dates: "May 2020 - July 2023",
    bullets: [
      "Built and tested a 0-to-1 hardware-software consumer product concept across mobile app, embedded system, BLE, supplier, durability, battery, and user experience constraints.",
      "Conducted 100+ user testing sessions across 6 prototypes, improving user satisfaction by approximately 40% while validating technical and product feasibility.",
      "Led a 4-person team through prototype design, technical tradeoff analysis, early customer discovery, supplier research, and hardware-software concept validation.",
    ],
  },
  {
    company: "Alarm.com",
    role: "Product Management Intern",
    location: "McLean, VA",
    dates: "May 2021 - August 2021",
    bullets: [
      "Accelerated product delivery timelines by 20% across smart home initiatives by streamlining technical requirements, coordinating project plans, and aligning engineering priorities for a $581M connected technology market segment.",
      "Partnered with product and engineering stakeholders to refine requirements, clarify technical tradeoffs, and support delivery planning across smart home, device, and platform-related product initiatives.",
      "Conducted market and competitive analysis to identify product gaps, feature opportunities, and customer experience improvements across connected technology solutions.",
    ],
  },
  {
    company: "PEMDAS Technologies",
    role: "Software Development Intern",
    location: "Alexandria, VA",
    dates: "May 2019 - August 2019",
    bullets: [
      "Developed Python/Django and JavaScript automation tools that converted manual reporting workflows into software-driven processes, eliminating 300+ hours of operational work annually and boosting internal data-access efficiency by 35%.",
      "Supported debugging, maintenance, and documentation for internal software tools used to improve data access, reporting accuracy, and operational efficiency.",
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

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col md:grid md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] md:gap-16 md:px-8">
        {/* Left title — top-aligned like reference */}
        <div className="flex shrink-0 flex-col justify-start px-6 pb-4 pt-10 md:px-0 md:pb-0 md:pt-16 lg:pt-20">
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
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-16 pt-4 md:px-0 md:pb-24 md:pt-16 lg:pt-20 [scrollbar-width:thin] [scrollbar-color:rgba(0,209,255,0.35)_transparent]"
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
                    key={`${item.company}-${item.dates}`}
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
                    <p className="mt-2 text-sm leading-relaxed text-white/55 md:text-[0.95rem]">
                      <span className="font-medium text-white/75">{item.role}</span>
                      <span className="mx-2 text-white/25">•</span>
                      {item.location}
                      <span className="mx-2 text-white/25">•</span>
                      {item.dates}
                    </p>
                    <ul className="mt-4 space-y-3 text-base leading-relaxed text-white/75 md:text-[1.05rem]">
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
