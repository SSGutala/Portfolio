import { notFound } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import AriaProject from "@/components/projects/aria";
import HoopFoundationProject from "@/components/projects/hoop-foundation";
import VeeraApparelProject from "@/components/projects/veera-apparel";
import AlphawaveProject from "@/components/projects/alphawave";
import SuperStarProject from "@/components/projects/superstar";
import YoungPreneursProject from "@/components/projects/youngpreneurs";
import ProvalohProject from "@/components/projects/provaloh";

const projectComponents: Record<string, React.ComponentType> = {
  aria: AriaProject,
  "hoop-foundation": HoopFoundationProject,
  "veera-apparel": VeeraApparelProject,
  "alphawave-technologies": AlphawaveProject,
  superstar: SuperStarProject,
  youngpreneurs: YoungPreneursProject,
  provaloh: ProvalohProject,
};

export function generateStaticParams() {
  return Object.keys(projectComponents).map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ProjectComponent = projectComponents[slug];

  if (!ProjectComponent) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-32">
          {/* Back link */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-x-1"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Projects
          </Link>

          <ProjectComponent />
        </div>
      </main>
      <Footer />
    </div>
  );
}
