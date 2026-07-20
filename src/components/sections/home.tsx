"use client";

import Image from "next/image";
import Link from "next/link";
import TypewriterText from "@/components/typewriter-text";

const PROFILE_IMAGE =
  "https://raw.githubusercontent.com/SSGutala/Portfolio/e77d74a451cecc5b18ba12ef46bac912858e475d/ProfPic2.png";

export default function HomeSection() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-black text-white">
      {/* Portrait — right side, lighter crop, brighter */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[52%]">
        <div className="relative h-full w-full">
          <Image
            src={PROFILE_IMAGE}
            alt="Sri Gutala"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 52vw"
            className="object-cover object-[center_top] brightness-[1.18] contrast-[1.05] saturate-[1.05] md:object-[center_2%]"
          />
          {/* Soft left fade only — keep the portrait bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent md:via-black/25 md:to-transparent" />
          {/* Light bottom fade on mobile for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:hidden" />
          <div className="absolute inset-0 bg-black/35 md:bg-transparent" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl items-center px-6 pb-16 pt-24 md:px-8 md:pb-20 md:pt-28">
        <div className="w-full max-w-xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-white/90 md:text-base">
            Hello
          </p>

          <h1 className="font-landing text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            <span className="block">I&apos;m Sri</span>
            <span className="mt-1 block whitespace-nowrap">
              A{" "}
              <TypewriterText className="text-[#00BFFF]" />
            </span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-[#A0A0A0] md:text-lg">
            I create products and experiences where creativity meets execution,
            blending design, strategy, and innovation to turn bold ideas into
            meaningful results.
          </p>

          <Link
            href="/projects"
            className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-medium tracking-wide text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-10px_18px_rgba(255,255,255,0.06)] transition-[transform,background-color] duration-300 hover:scale-[1.02] hover:bg-white/15"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
            />
            Explore Projects
            <span aria-hidden="true" className="text-base leading-none transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
