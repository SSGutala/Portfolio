"use client";

import { useEffect } from "react";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.backgroundColor = "#000000";
    document.body.style.backgroundColor = "#000000";

    return () => {
      root.style.backgroundColor = "";
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {children}
    </div>
  );
}
