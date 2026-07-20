"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  useEffect(() => {
    const root = document.documentElement;
    if (isLanding) {
      root.classList.add("landing-dark");
      root.style.backgroundColor = "#000000";
      document.body.style.backgroundColor = "#000000";
    } else {
      root.classList.remove("landing-dark");
      root.style.backgroundColor = "";
      document.body.style.backgroundColor = "";
    }

    return () => {
      root.classList.remove("landing-dark");
      root.style.backgroundColor = "";
      document.body.style.backgroundColor = "";
    };
  }, [isLanding]);

  return (
    <div
      className={cn(
        "flex min-h-screen flex-col",
        isLanding ? "bg-black" : "bg-background"
      )}
    >
      {children}
    </div>
  );
}
