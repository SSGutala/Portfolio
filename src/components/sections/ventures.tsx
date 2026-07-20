import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    slug: "aria",
    name: "Aria",
    tagline: "AI Product Workflow Platform",
    description:
      "An AI-powered platform helping founders, PMs, and builders move from raw ideas to structured execution.",
    logo: (
      <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-primary shadow-lg">
        <span className="text-4xl font-serif font-bold text-primary-foreground">A</span>
      </div>
    ),
  },
  {
    slug: "hoop-foundation",
    name: "Hoop Foundation",
    tagline: "Social Impact Learning Initiative",
    description:
      "A hybrid community + online learning model expanding education access to underserved children in India.",
    logo: (
      <Image
        src="https://raw.githubusercontent.com/SSGutala/Portfolio/61f360425f33f225faeffc56b46f36a656138480/hooplogo.jpg"
        alt="Hoop Foundation Logo"
        width={80}
        height={80}
        className="rounded-2xl object-cover shadow-lg"
      />
    ),
  },
  {
    slug: "veera-apparel",
    name: "Veera Apparel",
    tagline: "Lifestyle Activewear Venture",
    description:
      "Premium minimal lifestyle activewear with subtle cultural expression, designed for everyday wear.",
    logo: (
      <div className="w-20 h-20 rounded-2xl bg-black flex items-center justify-center p-2 shadow-lg">
        <Image
          src="https://raw.githubusercontent.com/SSGutala/Portfolio/5151bb3c20f4821795f6d93526e6d73138d14986/Veera-logo.png"
          alt="Veera Apparel Logo"
          width={64}
          height={64}
          className="mix-blend-lighten object-contain"
        />
      </div>
    ),
  },
  {
    slug: "alphawave-technologies",
    name: "Alphawave Technologies",
    tagline: "Smart Footwear Venture",
    description:
      "App-controlled adaptive footwear with dynamic color-changing technology powered by e-Ink and BLE.",
    logo: (
      <Image
        src="https://raw.githubusercontent.com/SSGutala/Portfolio/4cdedf9fa796a57e7ed6d1240bba3ffeeefaabfc/AW_Logo.png"
        alt="Alphawave Logo"
        width={80}
        height={80}
        className="rounded-2xl object-contain shadow-lg"
      />
    ),
  },
  {
    slug: "superstar",
    name: "SuperStar",
    tagline: "Short Film Creator Platform",
    description:
      "A mobile platform democratizing episodic storytelling — a Netflix for creators, built from a smartphone.",
    logo: (
      <Image
        src="https://raw.githubusercontent.com/SSGutala/Portfolio/ffbb7b6b6eed5e77e9fa05007f8f7aa8fd4b1641/superstarlogo.png"
        alt="SuperStar Logo"
        width={80}
        height={80}
        className="rounded-2xl object-contain shadow-lg"
      />
    ),
  },
  {
    slug: "youngpreneurs",
    name: "YoungPreneurs",
    tagline: "Startup Founder Network",
    description:
      "A mobile platform connecting startup founders, co-founders, and early investors to build together.",
    logo: (
      <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-b from-yellow-400 to-orange-500 shadow-lg">
        <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <defs>
            <linearGradient id="grad-card" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="40"
            fontWeight="100"
            fontFamily="sans-serif"
            fill="url(#grad-card)"
          >
            Yp
          </text>
        </svg>
      </div>
    ),
  },
  {
    slug: "provaloh",
    name: "Provaloh",
    tagline: "Virtual Trial Room App",
    description:
      "A virtual try-on app blending fashion with technology to reduce uncertainty in online clothing purchases.",
    logo: (
      <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-r from-blue-600 to-fuchsia-600 shadow-lg px-1">
        <span className="text-xs font-light text-white tracking-widest text-center leading-tight">Provaloh</span>
      </div>
    ),
  },
];

export default function VenturesSection() {
  return (
    <section className="pt-0 md:pt-0 min-h-[90vh] py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Projects</h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-xl mx-auto">
            A collection of ventures, products, and initiatives built from concept to execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-card hover:bg-secondary/40 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Logo */}
              <div className="mb-5 transition-transform duration-300 group-hover:scale-105">
                {project.logo}
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                {project.name}
              </h3>

              {/* Tagline */}
              <p className="text-xs font-medium text-primary/70 uppercase tracking-wider mb-3">
                {project.tagline}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Arrow hint */}
              <span className="mt-5 text-xs text-muted-foreground flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                View project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
