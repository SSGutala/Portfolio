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
                <div className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12 space-y-6">
                  <p>
                      Hi, I’m Srivatsav. I’m passionate about building products that combine creativity with impact, taking ideas from concept to something people can actually enjoy using. My background spans product management, startups, and design, and I enjoy shaping projects where strategy and user experience come together.
                  </p>
                  <p>
                      Outside of work, music is a big part of who I am. I sing, play guitar and piano, and write songs. It’s a creative outlet that keeps me inspired and often gives me fresh perspective on the work I do.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {stats.map(stat => (
                        <div key={stat.label} className="p-6 rounded-lg bg-black border border-primary">
                            <p className="text-4xl md:text-5xl font-bold text-primary flex items-baseline justify-center">
                              {stat.value}
                              <span className="text-sm font-medium tracking-widest text-muted-foreground ml-2">YEARS</span>
                            </p>
                            <p className="text-sm text-muted-foreground uppercase tracking-widest mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <Button asChild size="lg">
                    <a href="https://docs.google.com/document/d/1t3SIQxCx4P6oIHpcJ1Prg2nnzYp-3z0l9fI7SObNotQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a>
                </Button>
            </div>
        </section>
    );
}
