"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lockScroll = pathname === "/experience";

  useEffect(() => {
    const root = document.documentElement;
    root.style.backgroundColor = "#000000";
    document.body.style.backgroundColor = "#000000";

    if (lockScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      root.style.backgroundColor = "";
      document.body.style.backgroundColor = "";
      document.body.style.overflow = "";
    };
  }, [lockScroll]);

  return (
    <div
      className={cn(
        "flex min-h-screen flex-col bg-black text-white",
        lockScroll && "h-svh overflow-hidden"
      )}
    >
      {children}
    </div>
  );
}
