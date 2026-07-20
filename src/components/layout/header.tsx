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
    href: "https://www.linkedin.com/in/sai-gutala/",
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
    if (!isLanding) {
      setScrolled(false);
      return;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isLanding]);

  return (
    <header
      className={cn(
        "z-50 w-full transition-colors duration-300",
        isLanding
          ? cn(
              "fixed top-0 left-0 right-0",
              scrolled
                ? "border-b border-white/10 bg-black text-white"
                : "border-b border-transparent bg-black/0 text-white"
            )
          : "sticky top-0 border-b border-border/40 bg-background/95 text-foreground backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center px-6 md:px-8">
        <Link href="/" className="mr-6 flex items-center space-x-3">
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full",
              isLanding
                ? "bg-[#00BFFF]/15 ring-1 ring-[#00BFFF]/60"
                : "border-[1.5px] border-primary"
            )}
          >
            <span
              className={cn(
                "font-landing text-sm font-semibold",
                isLanding ? "text-[#00BFFF]" : "font-serif text-primary"
              )}
            >
              SG
            </span>
          </div>
          <span
            className={cn(
              "text-[15px] font-extrabold tracking-[0.12em]",
              isLanding
                ? "font-landing uppercase text-white"
                : "uppercase tracking-[0.2em] text-primary"
            )}
          >
            Sri Gutala
          </span>
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
                  isLanding
                    ? active
                      ? "text-white"
                      : "text-white/65 hover:text-white"
                    : cn("nav-link", active && "active")
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
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
                  isLanding
                    ? "border-white/25 text-white/70 hover:border-white/60 hover:text-white"
                    : "border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40"
                )}
              >
                <social.icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <button
            className={cn("md:hidden", isLanding ? "text-white" : "text-foreground")}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={cn(
            "md:hidden",
            isLanding
              ? "border-t border-white/10 bg-black/95"
              : "border-t border-border"
          )}
        >
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "rounded-md px-3 py-1 transition-colors",
                  isLanding
                    ? isActivePath(pathname, item.href)
                      ? "bg-white text-black"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                    : isActivePath(pathname, item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-primary hover:text-primary-foreground"
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
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full border",
                    isLanding
                      ? "border-white/25 text-white/70"
                      : "border-primary/20 text-primary"
                  )}
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
