"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ConnectButton } from "@/components/connect-button";

const navItems = [
  { name: "About", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Consulting", href: "/consulting" },
  { name: "Leadership", href: "/leadership" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-6 md:px-8">
          <Link href="/" className="mr-6 flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-primary">
              <span className="font-serif text-sm font-semibold text-primary">SG</span>
            </div>
            <span className="text-[15px] font-extrabold uppercase tracking-[0.2em] text-primary">
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
                  isActivePath(pathname, item.href) && "active"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end space-x-4">
            <ConnectButton variant="outline">Connect</ConnectButton>
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
                    isActivePath(pathname, item.href)
                      ? "text-primary-foreground bg-primary"
                      : "text-muted-foreground",
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
