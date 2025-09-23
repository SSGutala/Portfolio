import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Mail, href: 'mailto:srivatsav@example.com', name: 'Email' },
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
  { icon: Github, href: '#', name: 'GitHub' },
  { icon: Twitter, href: '#', name: 'X' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-border">
      <div className="max-w-6xl mx-auto py-8 px-6 md:px-8 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.name} href={link.href} passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">{link.name}</span>
                  <Icon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              </Link>
            );
          })}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SRIVATSAV. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
