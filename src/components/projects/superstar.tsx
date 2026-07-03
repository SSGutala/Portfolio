import Image from "next/image";

export default function SuperStarProject() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Logo */}
      <div className="mb-6">
        <Image
          src="https://raw.githubusercontent.com/SSGutala/Portfolio/ffbb7b6b6eed5e77e9fa05007f8f7aa8fd4b1641/superstarlogo.png"
          alt="SuperStar Logo"
          width={160}
          height={160}
          className="rounded-2xl shadow-2xl"
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">SuperStar</h1>
      <p className="text-xl text-muted-foreground mb-8 text-center">Short Film Creator Platform</p>
      <p className="text-muted-foreground mb-8 text-center">(2019 – 2020)</p>

      <div className="text-lg text-muted-foreground space-y-6 text-left w-full">
        <p>
          SuperStar was a social media app venture developed over the course of a year, designed to let anyone create and share short films directly from a smartphone. The vision was to give creators a platform for episodic storytelling — a &ldquo;Netflix for creators&rdquo; — that democratized film production and distribution.
        </p>
        <p>
          Throughout development, we engaged with digital creators and actors to test the concept and app features. While the editing tools showed promise, feedback revealed that the short-film creation process was still too complex for a mobile app to simplify, and many creators preferred professional equipment. Market insights also showed that the audience for such a platform was limited at the time, with the broader community not yet ready for this type of product.
        </p>
        <p>
          Despite these challenges, the venture demonstrated valuable lessons in understanding creator needs, market timing, and product feasibility. The concept remains ahead of its time, with potential to succeed as technology advances and user behavior evolves.
        </p>
      </div>
    </div>
  );
}
