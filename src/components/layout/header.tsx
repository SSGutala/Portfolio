"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home", color: "red" },
  { name: "About", href: "#about", color: "orange" },
  { name: "Ventures", href: "#ventures", color: "yellow" },
  { name: "Consulting", href: "#consulting", color: "green" },
  { name: "Product", href: "#product", color: "blue" },
  { name: "UI/UX", href: "#uiux", color: "pink" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observer = useRef<IntersectionObserver | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // JS to split letters for animation
    if (navRef.current) {
      const links = navRef.current.querySelectorAll('.nav-ink');
      links.forEach(link => {
        // Check if already processed
        if (link.querySelector('.char')) return;
        
        const text = link.textContent?.trim() || '';
        link.setAttribute('aria-label', text);
        link.textContent = ''; // clear
        [...text].forEach((ch, idx) => {
          const span = document.createElement('span');
          span.className = 'char';
          span.style.setProperty('--i', String(idx)); // for stagger
          span.textContent = ch;
          link.appendChild(span);
        });
      });
    }
  }, []);

  useEffect(() => {
    // Set home as active by default
    setActiveSection('home');

    const handleScroll = () => {
        if (window.scrollY === 0) {
            setActiveSection('home');
        }
    };
    
    window.addEventListener('scroll', handleScroll);

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Don't unset home if we are at the top
            if (window.scrollY > 100 || entry.target.id !== 'home') {
                 setActiveSection(entry.target.id);
            }
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
            <span className="text-xl md:text-2xl font-bold">SRIVATSAV</span>
          </Link>

          <nav ref={navRef} className="hidden md:flex flex-1 items-center justify-center space-x-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                data-color={item.color}
                className={cn(
                  "nav-ink",
                  activeSection === item.href.substring(1) && "active"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button asChild variant="outline">
                <a href="https://www.linkedin.com/in/sai-gutala/" target="_blank" rel="noopener noreferrer">Connect</a>
            </Button>
            <Button asChild>
              <a href="https://docs.google.com/document/d/1t3SIQxCx4P6oIHpcJ1Prg2nnzYp-3z0l9fI7SObNotQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
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
                    "transition-colors hover:text-primary",
                     activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground"
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
