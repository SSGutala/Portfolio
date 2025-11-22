
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ConnectButton } from "@/components/connect-button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Ventures", href: "#ventures" },
  { name: "Consulting", href: "#consulting" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef<{[key: string]: HTMLElement | null}>({});

  useEffect(() => {
    navItems.forEach(item => {
      const id = item.href.substring(1);
      sectionRefs.current[id] = document.getElementById(id);
    });

    const handleScroll = () => {
      let currentSection = 'home';
      let maxVisible = 0;

      const viewportHeight = window.innerHeight;

      for (const id in sectionRefs.current) {
        const section = sectionRefs.current[id];
        if (section) {
          const rect = section.getBoundingClientRect();
          const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
          
          if (id === 'home' && window.scrollY < viewportHeight / 2) {
             currentSection = 'home';
             break;
          }

          if (visibleHeight > maxVisible) {
            maxVisible = visibleHeight;
            currentSection = id;
          }
        }
      }
      
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
        currentSection = 'consulting';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-6 md:px-8">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-lg font-extrabold uppercase tracking-wider">
              Sri Gutala
            </span>
          </Link>

          <nav className="hidden md:flex flex-1 items-center justify-center space-x-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "nav-link",
                  activeSection === item.href.substring(1) && "active"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex flex-1 items-center justify-end space-x-4">
             <ConnectButton variant="outline">Connect</ConnectButton>
            <Button asChild>
              <a href="https://docs.google.com/document/d/13ciZiL_jlkSxqxgCaEvAtzph2389z9EnutM0dO18NP8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
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
                    "transition-colors hover:text-primary-foreground hover:bg-primary",
                     activeSection === item.href.substring(1) ? "text-primary-foreground bg-primary" : "text-muted-foreground",
                     "rounded-md px-3 py-1"
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
