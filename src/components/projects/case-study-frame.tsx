"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const HEADER_OFFSET = 80;

export default function CaseStudyFrame({ src, title }: { src: string; title: string }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const [height, setHeight] = useState(1200);

  const setup = useCallback(() => {
    const frame = frameRef.current;
    const doc = frame?.contentDocument;
    if (!frame || !doc?.body) return;
    cleanupRef.current?.();

    // The frame grows to fit its content so the page scrolls as one document.
    const measure = () => setHeight(doc.documentElement.scrollHeight);
    const observer = new ResizeObserver(measure);
    observer.observe(doc.body);
    measure();

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a");
      const href = link?.getAttribute("href");
      if (!link || !href) return;

      if (href.startsWith("#")) {
        event.preventDefault();
        const target = doc.getElementById(href.slice(1));
        if (!target) return;
        const top =
          frame.getBoundingClientRect().top +
          target.getBoundingClientRect().top +
          window.scrollY -
          HEADER_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
      } else {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    };
    doc.addEventListener("click", onClick);

    cleanupRef.current = () => {
      observer.disconnect();
      doc.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    // Covers the case where the frame finished loading before hydration.
    if (frameRef.current?.contentDocument?.readyState === "complete") setup();
    return () => cleanupRef.current?.();
  }, [setup]);

  return (
    <iframe
      ref={frameRef}
      src={src}
      title={title}
      onLoad={setup}
      scrolling="no"
      className="block w-full border-0"
      style={{ height }}
    />
  );
}
