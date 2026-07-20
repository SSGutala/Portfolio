"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Consulting", href: "/consulting" },
  { name: "Leadership", href: "/leadership" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sri-gutala/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/SSGutala",
    icon: Github,
  },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isLanding = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header
      className={cn(
        "z-50 w-full text-white transition-colors duration-300",
        isLanding ? "fixed top-0 left-0 right-0" : "sticky top-0",
        scrolled || !isLanding
          ? "border-b border-white/10 bg-black"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center px-6 md:px-8">
        <Link
          href="/"
          className="mr-6 font-landing text-[15px] font-extrabold uppercase tracking-[0.12em] text-white underline decoration-[#00D1FF] decoration-2 underline-offset-4"
        >
          Sri Gutala
        </Link>

        <nav className="hidden flex-1 items-center justify-center space-x-6 text-sm md:flex">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-medium tracking-wide transition-colors",
                  active ? "text-white" : "text-white/65 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/70 transition-colors hover:border-white/60 hover:text-white"
              >
                <social.icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <button
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-black/95 md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "rounded-md px-3 py-1 transition-colors",
                  isActivePath(pathname, item.href)
                    ? "bg-white text-black"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2 sm:hidden">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/70"
                >
                  <social.icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
