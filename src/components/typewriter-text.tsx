"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Product Manager",
  "AI Strategist",
  "Designer",
  "Architect",
  "Leader",
];

function needsAn(word: string) {
  return /^[aeiou]/i.test(word.trim());
}

export default function TypewriterText({
  words = ROLES,
  className = "",
}: {
  words?: string[];
  className?: string;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [showN, setShowN] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const an = needsAn(current);
    const typingSpeed = deleting ? 45 : 90;
    const pauseAtEnd = 1600;
    const pauseAtStart = 400;
    const doneTyping = !deleting && showN === an && text === current;
    const doneDeleting = deleting && text === "" && !showN;

    if (doneTyping) {
      const timeout = setTimeout(() => setDeleting(true), pauseAtEnd);
      return () => clearTimeout(timeout);
    }

    if (doneDeleting) {
      const timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, pauseAtStart);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      if (deleting) {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
          return;
        }
        if (showN) {
          setShowN(false);
        }
        return;
      }

      // Type white "n" first when the article should be "An"
      if (an && !showN) {
        setShowN(true);
        return;
      }

      if (text !== current) {
        setText(current.slice(0, text.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, showN, deleting, wordIndex, words]);

  return (
    <span>
      {showN ? <span className="text-white">n</span> : null}
      <span className="text-white"> </span>
      <span className={className}>
        {text}
        <span className="typewriter-cursor" aria-hidden="true">
          |
        </span>
      </span>
    </span>
  );
}
