"use client";

import { useEffect, useState } from "react";

const ROLES = ["Designer", "Product Leader", "Builder", "Strategist"];

export default function TypewriterText({
  words = ROLES,
  className = "",
}: {
  words?: string[];
  className?: string;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const typingSpeed = deleting ? 45 : 90;
    const pauseAtEnd = 1600;
    const pauseAtStart = 400;

    if (!deleting && text === current) {
      const timeout = setTimeout(() => setDeleting(true), pauseAtEnd);
      return () => clearTimeout(timeout);
    }

    if (deleting && text === "") {
      const timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, pauseAtStart);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setText(
        deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return (
    <span className={className}>
      {text}
      <span className="typewriter-cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}
