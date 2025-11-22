
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
  { name: "Product", href: "#product" },
  { name: "UI/UX", href: "#uiux" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'home' && entry.intersectionRatio >= 0.5) {
             setActiveSection('home');
          } else if (entry.intersectionRatio > 0.25 && entry.target.id !== 'home') {
            setActiveSection(entry.target.id);
          }
        }
      });
       if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };
    
    observer.current = new IntersectionObserver(handleIntersection, { 
      threshold: [0.25, 0.5, 0.75],
    });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      if (observer.current) {
        observer.current.observe(section);
      }
    });

    const handleScroll = () => {
        if (window.scrollY < 200) {
            setActiveSection('home');
        }
    };
    window.addEventListener('scroll', handleScroll);


    return () => {
       window.removeEventListener('scroll', handleScroll);
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
