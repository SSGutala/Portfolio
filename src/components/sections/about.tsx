import { Button } from "@/components/ui/button";

const stats = [
    { value: "1.5+", label: "Corporate Experience" },
    { value: "4+", label: "Venture Experience" },
    { value: "5+", label: "Product Design" },
];

export default function AboutSection() {
    return (
        <section id="about" className="pt-0 md:pt-0 pb-20 md:pb-32 bg-background">
            <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">About Me</h2>
                <div className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12 space-y-6 text-left">
                  <p>
                      Hi, I’m Sai Srivatsav Gutala—though most people call me Sri.
                  </p>
                  <p>
                      I’m a product thinker, builder, and storyteller at heart. What excites me most is turning ambitious ideas into something people can actually experience—whether it’s intuitive software, hardware-backed products, or creative experiences that live somewhere in between.
                  </p>
                  <p>
                      My journey started not in a corporate boardroom—but in a notebook, sketching app concepts at 15, teaching myself design, and launching my first venture-based project at 18. Since then, I’ve built ventures, founded a non-profit, collaborated with manufacturers in Shenzhen, designed user-centric digital products, and driven automation and product strategies within enterprise environments like AT&T, Alarm.com, and Fluid Touch. Across all these experiences, I’ve developed a strong passion for product strategy, user research, experience design, and building things people care about.
                  </p>
                  <p>
                      I enjoy operating at the intersection of technology, design, and human behavior. Whether I’m mapping workflows for an AI-powered automation system, designing adaptive footwear, or crafting culturally expressive apparel, I focus on user insight, feasibility, and emotional resonance—not just functionality.
                  </p>
                   <p>
                      Outside of work, music is a huge part of my identity. I sing, write songs, and play guitar and piano. Music keeps me rooted in creativity, storytelling, and emotion—skills that naturally flow into how I build products and experiences. I also love visual design, psychology, fitness, and capturing cinematic content for storytelling or personal branding.
                  </p>
                  <p>
                      At my core, I believe products should not just work—they should make people feel something.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
                    {stats.map(stat => (
                        <div key={stat.label} className="p-6 rounded-lg bg-card border border-primary">
                            <p className="text-4xl md:text-5xl font-bold text-primary-foreground bg-primary rounded-md p-2 flex items-baseline justify-center">
                              {stat.value}
                              <span className="text-sm font-medium tracking-widest text-primary-foreground/80 ml-2">YEARS</span>
                            </p>
                            <p className="text-sm text-muted-foreground uppercase tracking-widest mt-4">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <Button asChild size="lg">
                    <a href="https://docs.google.com/document/d/13ciZiL_jlkSxqxgCaEvAtzph2389z9EnutM0dO18NP8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a>
                </Button>
            </div>
        </section>
    );
}
