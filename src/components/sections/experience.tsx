const experiences = [
  {
    company: "AT&T",
    role: "Product & Automation",
    summary:
      "Drove automation and product strategies in a large enterprise environment—mapping workflows, aligning stakeholders, and translating complex operational needs into clearer product direction.",
  },
  {
    company: "Alarm.com",
    role: "Product Strategy",
    summary:
      "Contributed to product strategy and user-centric digital experiences within an enterprise platform context, focusing on feasibility, clarity, and outcomes that matter to customers.",
  },
  {
    company: "Fluid Touch",
    role: "Product & Experience Design",
    summary:
      "Supported product and experience work spanning strategy and design—bridging user research, workflow thinking, and execution to help ideas become usable products.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="min-h-[90vh] py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
            Experience
          </h1>
          <p className="text-lg text-muted-foreground">
            Corporate roles where I shaped product strategy, automation, and
            user-centered digital experiences across enterprise environments.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          {experiences.map((item) => (
            <article
              key={item.company}
              className="border-l-2 border-primary/30 pl-6 md:pl-8"
            >
              <h2 className="text-2xl font-bold tracking-tight">{item.company}</h2>
              <p className="text-sm font-medium uppercase tracking-widest text-primary/80 mt-2">
                {item.role}
              </p>
              <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
