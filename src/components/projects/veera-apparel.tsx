import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function VeeraApparelProject() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Logo */}
      <div className="rounded-2xl mb-6 bg-black p-4 shadow-2xl">
        <Image
          src="https://raw.githubusercontent.com/SSGutala/Portfolio/5151bb3c20f4821795f6d93526e6d73138d14986/Veera-logo.png"
          alt="Veera Apparel Logo"
          width={140}
          height={140}
          className="rounded-2xl mix-blend-lighten"
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Veera Apparel</h1>
      <p className="text-xl text-muted-foreground mb-2 text-center">Lifestyle Activewear Venture</p>

      <div className="text-muted-foreground mb-8 text-center space-y-1">
        <p>Role: Founder &amp; Product Owner</p>
        <p>Timeline: 2024–Present</p>
        <p>Type: Apparel &amp; Brand | Lifestyle &amp; Activewear</p>
        <p className="italic">Scope: Concept → Market Discovery → Design System → Pre-Launch Validation</p>
      </div>

      {/* Product render images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 w-full max-w-4xl">
        <div className="flex justify-center items-center">
          <Image
            src="https://raw.githubusercontent.com/SSGutala/Portfolio/61f360425f33f225faeffc56b46f36a656138480/archer-front-veera.png"
            alt="Veera Apparel Front Render"
            width={400}
            height={400}
            className="rounded-lg shadow-2xl object-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="https://raw.githubusercontent.com/SSGutala/Portfolio/61f360425f33f225faeffc56b46f36a656138480/veera-big-back.png"
            alt="Veera Apparel Back Render"
            width={400}
            height={400}
            className="rounded-lg shadow-2xl object-contain"
          />
        </div>
      </div>
      <p className="text-muted-foreground text-sm mb-8 text-center">Veera Apparel Product Render Samples</p>

      <div className="space-y-12 mt-8 w-full">
        <div>
          <h2 className="text-xl font-bold mb-4">Product Vision</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>To design lifestyle activewear that feels premium, minimal, and culturally expressive—without being loud or cliché. Built for everyday wear, not just events or gyms.</p>
            <blockquote className="border-l-4 border-primary pl-4 italic">&ldquo;Comfort-first apparel with subtle identity—not costume, not cliché, just confidently expressive.&rdquo;</blockquote>
          </div>
        </div>

        <div className="text-lg text-muted-foreground space-y-6">
          <h2 className="text-xl font-bold mb-4">Phase 1 — Discovery &amp; Market Insight</h2>
          <h3 className="text-lg font-semibold mb-3">Activities:</h3>
          <ul className="list-disc list-inside">
            <li>Interviewed 50+ early potential users (fitness creators, young professionals, models) on comfort, fit, and cultural expression.</li>
            <li>Analyzed premium activewear brands (Lululemon, Alo, Gymshark) to compare tone, brand language, and perception of quality.</li>
            <li>Identified opportunity in understated cultural identity—not bold graphics or printed symbolism.</li>
          </ul>
          <p><strong>PM Deliverables:</strong> Problem Statement • Target Persona Profiles • Brand Positioning Axes (Minimal ↔ Loud, Lifestyle ↔ Performance)</p>
        </div>

        <hr className="border-border" />

        <div className="text-lg text-muted-foreground space-y-6">
          <h2 className="text-xl font-bold mb-4">Phase 2 — Requirements &amp; Material Exploration</h2>
          <p>Focused on fabric feel, premium perception, and manufacturability at small scale.</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Area</TableHead>
                <TableHead>Key Focus</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Material Testing</TableCell>
                <TableCell>Evaluated cotton-spandex and bamboo blends for softness, stretch, and wash durability</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cost Modeling</TableCell>
                <TableCell>Created small-batch feasibility plan (50–100 unit drop)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Brand Testing</TableCell>
                <TableCell>Compared subtle symbolic accents vs cultural graphic printing</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p><strong>Outcome → Shifted design toward neutral tones, subtle accents, and tone-on-tone motifs.</strong></p>
        </div>

        <hr className="border-border" />

        <div className="text-lg text-muted-foreground space-y-6">
          <h2 className="text-xl font-bold mb-4">Phase 3 — Design Iteration</h2>
          <div className="space-y-4">
            <h3 className="font-semibold">Prototype 1: Graphic-Based Concepts</h3>
            <ul className="list-disc list-inside">
              <li>Explored strong cultural illustration and printed motifs</li>
              <li>Created mockups in Illustrator and Figma for visualizing placement &amp; identity</li>
              <li><strong>User Insight:</strong> &ldquo;Looks good, but too loud to wear casually.&rdquo;</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Prototype 2: Minimal &amp; Tone-Based Expression</h3>
            <ul className="list-disc list-inside">
              <li>Refined into clean silhouettes and tone-on-tone symbolic elements</li>
              <li>Focused on matte textures, subtle cultural accents, and premium feel</li>
              <li>Developed Visual Identity System (Design System v1) including:
                <ul className="list-disc list-inside ml-6">
                  <li>Soft neutral palette (charcoal, stone, deep navy)</li>
                  <li>Tone-on-tone accents and minimal branding</li>
                  <li>Placement rules for symbolic micro-elements</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-border" />

        <div className="text-lg text-muted-foreground space-y-6">
          <h2 className="text-xl font-bold mb-4">Phase 4 — Brand Identity &amp; Pre-Launch Planning</h2>
          <ul className="list-disc list-inside">
            <li>Created lifestyle concept visuals (gym, café, everyday casual)</li>
            <li>Developed brand story centered on subtle identity, comfort, and self-expression</li>
            <li>Built early Go-to-Market concept: waitlist, concept testing, influencer sampling (not executed yet)</li>
          </ul>
          <p><strong>PM Deliverables:</strong> Brand Story • MVP Concept Brief • Design System Snapshot</p>
        </div>

        <hr className="border-border" />

        <div className="text-lg text-muted-foreground space-y-6">
          <h2 className="text-xl font-bold mb-4">Outcome &amp; Current Stage</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Insight</TableHead>
                <TableHead>Impact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>People want &ldquo;premium minimal&rdquo; more than bold ethnic designs</TableCell>
                <TableCell>Shifted away from graphic imagery toward tone-based accents</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fabric feel signals quality</TableCell>
                <TableCell>Limited materials to mid-weight cotton and cotton-spandex blends</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cultural identity must be subtle, not loud</TableCell>
                <TableCell>Established symbolic over literal cultural designs</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <h3 className="font-semibold pt-4">Next Steps (Pending)</h3>
          <ul className="list-disc list-inside">
            <li>Produce first fabric prototypes (sampling stage)</li>
            <li>Fit, drape, softness testing with user panel</li>
            <li>Small batch launch (50–75 units) with story-first marketing</li>
          </ul>
        </div>

        <hr className="border-border" />

        <div className="text-lg text-muted-foreground space-y-6">
          <h2 className="text-xl font-bold mb-4">What I Learned</h2>
          <blockquote className="border-l-4 border-primary pl-4 italic space-y-2">
            <p>Subtlety is a strategy—not just a design choice.</p>
            <p>Fabric is the MVP in apparel.</p>
            <p>You can validate desirability without producing inventory.</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
