import { Button } from "@/components/ui/button";

const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "20+", label: "Projects Shipped" },
    { value: "10+", label: "Happy Clients" },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-32 bg-card">
            <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">About Me</h2>
                <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12">
                    I'm a product-focused builder with a passion for creating meaningful technology. My expertise spans the full product lifecycle, from initial concept and strategy to design, launch, and iteration.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {stats.map(stat => (
                        <div key={stat.label} className="p-6 rounded-lg bg-background">
                            <p className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
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
