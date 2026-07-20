"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/experience") {
    return null;
  }

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-8 md:px-8">
        <p className="text-sm text-white/55">
          &copy; {new Date().getFullYear()} Sri Gutala. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
