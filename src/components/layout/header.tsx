"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConnectButton } from "@/components/connect-button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Consulting", href: "#consulting" },
  { name: "Ventures", href: "#ventures" },
  { name: "Product", href: "#product" },
  { name: "UI/UX", href: "#uiux" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      if (observer.current) {
        observer.current.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (observer.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          observer.current.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-6 md:px-8">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold">SRIVATSAV</span>
          </Link>

          <nav className="hidden md:flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "link-underline transition-colors hover:text-primary",
                  activeSection === item.href.substring(1) ? "active text-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex flex-1 items-center justify-end space-x-4">
            <ConnectButton variant="outline">Connect</ConnectButton>
            <Button asChild>
              <a href="/resume.pdf" download="SRIVATSAV_Resume.pdf">Resume</a>
            </Button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col items-center space-y-4 py-4 border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "link-underline transition-colors hover:text-primary",
                    activeSection === item.href.substring(1) ? "active text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
