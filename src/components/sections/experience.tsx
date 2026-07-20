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

/** Shared centerline of the timeline track (px from left of track container). */
const TRACK_CENTER = 28;


export default function ExperienceSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const markerRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const scroller = scrollRef.current;

    const update = () => {
      const track = trackRef.current;
      const pane = scrollRef.current;
      if (!track || !pane) return;

      const maxScroll = pane.scrollHeight - pane.clientHeight;
      const atBottom = maxScroll <= 0 || pane.scrollTop >= maxScroll - 2;

      // Scroll-driven fill; snap to full when the last role is reached
      let nextProgress =
        maxScroll <= 0 ? 1 : Math.min(1, Math.max(0, pane.scrollTop / maxScroll));
      if (atBottom) nextProgress = 1;
      setProgress(nextProgress);

      const trackRect = track.getBoundingClientRect();
      const glowTipY = trackRect.top + trackRect.height * nextProgress;

      let nextActive = -1;
      markerRefs.current.forEach((marker, index) => {
        if (!marker) return;
        const markerRect = marker.getBoundingClientRect();
        const markerCenterY = markerRect.top + markerRect.height / 2;
        // Activate once the glow tip reaches/passes the ring center
        if (glowTipY >= markerCenterY - 2 || atBottom) {
          nextActive = index;
        }
      });

      if (atBottom) nextActive = experiences.length - 1;
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

        <div
          ref={scrollRef}
          className="relative z-0 min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-16 pt-4 md:pl-4 md:pr-2 md:pb-24 md:pt-16 lg:pt-20 [scrollbar-width:thin] [scrollbar-color:rgba(0,209,255,0.35)_transparent]"
        >
          <div ref={trackRef} className="relative pl-2">
            {/* Base track — centered on TRACK_CENTER */}
            <div
              className="absolute top-2 bottom-2 z-0 w-px bg-white/15"
              style={{ left: TRACK_CENTER, transform: "translateX(-50%)" }}
            />

            {/* Neon progress fill — same centerline */}
            <div
              className="absolute top-2 z-0 w-px origin-top"
              style={{
                left: TRACK_CENTER,
                transform: "translateX(-50%)",
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
                    className="relative pl-16 md:pl-[4.5rem]"
                  >
                    {/* Black disc masks the line so it does not pass through the ring */}
                    <span
                      aria-hidden="true"
                      className="absolute top-1.5 z-[1] h-4 w-4 rounded-full bg-black md:h-5 md:w-5"
                      style={{
                        left: TRACK_CENTER,
                        transform: "translateX(-50%)",
                      }}
                    />

                    {/* Thick glowing ring (hollow), centered on the track */}
                    <span
                      ref={(el) => {
                        markerRefs.current[index] = el;
                      }}
                      aria-hidden="true"
                      className={cn(
                        "absolute top-1.5 z-[2] h-4 w-4 rounded-full bg-transparent transition-all duration-300 md:h-5 md:w-5",
                        isActive
                          ? "border-[3px] border-[#00D1FF]"
                          : "border-2 border-white/35"
                      )}
                      style={{
                        left: TRACK_CENTER,
                        transform: "translateX(-50%)",
                        boxShadow: isActive
                          ? isCurrent
                            ? "0 0 0 3px rgba(0,209,255,0.18), 0 0 12px rgba(0,209,255,0.95), 0 0 26px rgba(0,209,255,0.5)"
                            : "0 0 0 2px rgba(0,209,255,0.12), 0 0 10px rgba(0,209,255,0.7)"
                          : "none",
                      }}
                    />

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
