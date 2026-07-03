import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Instagram, Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function HomeSection() {
  return (
    <section id="home" className="relative min-h-[90vh] py-20 md:py-32 overflow-hidden">
      {/* Background Blurs and Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-copper/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-slate-400/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Abstract SVG line - simplified representation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" preserveAspectRatio="none" viewBox="0 0 1000 500">
        <path d="M0,400 Q200,300 400,450 T800,200 T1000,400" fill="none" stroke="hsl(var(--copper))" strokeWidth="0.5" />
      </svg>

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            
            {/* Kicker */}
            <div className="flex items-center space-x-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-copper shadow-sm"></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/80">
                Builder • Strategist • Product Leader
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 leading-[1.1] text-primary">
              Visionary, builder, <br/>
              and <span className="text-copper italic font-normal">product leader.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
              I create products and experiences where creativity meets execution, blending design, strategy, and innovation to turn bold ideas into meaningful results.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-lg text-base shadow-lg">
                <a href="https://www.linkedin.com/in/sai-gutala/" target="_blank" rel="noopener noreferrer">
                  Get in Touch
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border bg-transparent hover:bg-white/50 px-8 py-6 rounded-lg text-base">
                <a href="#projects">
                  View My Work
                </a>
              </Button>
            </div>

            {/* Socials */}
            <div className="flex items-center space-x-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Mail, href: "mailto:contact@saigutala.com" },
                { icon: Github, href: "https://github.com/SSGutala" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sai-gutala/" },
              ].map((social, i) => (
                <Link key={i} href={social.href} className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary/5 hover:border-primary/40">
                  <social.icon className="h-5 w-5" strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column Image */}
          <div className="flex justify-center relative mt-10 md:mt-0">
            <div className="relative rounded-[120px] overflow-hidden border-[1px] border-primary/10 shadow-2xl p-2 bg-white/30 backdrop-blur-sm">
               <div className="relative w-[320px] h-[480px] md:w-[380px] md:h-[560px] rounded-[110px] overflow-hidden">
                 <Image
                  src="https://raw.githubusercontent.com/SSGutala/Portfolio/d7ad034310738f8191b1c7120317bbad8dee53ad/_DSC1457.jpeg"
                  alt="Sri Gutala professional picture"
                  fill
                  className="object-cover"
                  priority
                />
               </div>
            </div>
            
            {/* Decorative copper semi-circle border */}
            <div className="absolute top-[-10px] left-[-20px] md:left-[-10px] w-[350px] md:w-[410px] h-[510px] md:h-[590px] border-[1.5px] border-copper/60 rounded-[140px] z-[-1] transform -rotate-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
