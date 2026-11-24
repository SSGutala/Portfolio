import { notFound } from "next/navigation";
import Link from "next/link";
import AriaProject from "@/components/projects/aria";
import SuperStarProject from "@/components/projects/superstar";
import CaseStudyFrame from "@/components/projects/case-study-frame";

const projectComponents: Record<string, React.ComponentType> = {
  aria: AriaProject,
  superstar: SuperStarProject,
};

// Full case-study pages served as-is from public/case-studies.
const caseStudies: Record<string, { title: string }> = {
  "closet-ai": { title: "Closet AI Product Portfolio" },
  lilpreneur: { title: "LilPreneur Product Portfolio" },
  "alphawave-technologies": { title: "Alphawave Product Portfolio" },
  "veera-apparel": { title: "Veera Product Portfolio" },
};

export function generateStaticParams() {
  return [...Object.keys(projectComponents), ...Object.keys(caseStudies)].map(
    (slug) => ({ slug })
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = caseStudies[slug];

  if (caseStudy) {
    return (
      <div className="bg-black">
        <CaseStudyFrame
          src={`/case-studies/${slug}/index.html`}
          title={caseStudy.title}
        />
      </div>
    );
  }

  const ProjectComponent = projectComponents[slug];

  if (!ProjectComponent) {
    notFound();
  }

  return (
    <div className="bg-black text-white">
      <div className="project-prose mx-auto max-w-4xl px-6 py-20 md:px-8 md:py-32">
        <Link
          href="/projects"
          className="group mb-12 inline-flex items-center gap-2 text-white/55 transition-colors hover:text-[#00D1FF]"
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
    </div>
  );
}
