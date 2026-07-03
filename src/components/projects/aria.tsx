import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AriaProject() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Logo */}
      <div className="w-36 h-36 rounded-3xl mb-6 flex items-center justify-center bg-primary shadow-2xl">
        <span className="text-7xl font-serif font-bold text-primary-foreground">A</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Aria</h1>
      <p className="text-xl text-muted-foreground mb-2 text-center">AI Product Workflow Platform</p>

      <div className="text-muted-foreground mb-8 text-center space-y-1">
        <p>Role: Founder &amp; Product Builder</p>
        <p>Timeline: 2026–Present</p>
        <p>Type: AI Product Platform | Workflow Automation | Product Execution Tool</p>
        <p className="italic">Scope: Concept → Product Strategy → UX Iteration → MVP Build → Alpha Testing</p>
      </div>

      <div className="w-full text-left">
        <h2 className="text-xl font-bold mb-4">Product Overview</h2>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>Aria is an AI-powered product workflow platform designed to help founders, product managers, consultants, and builders move from raw ideas to structured execution faster.</p>
          <p>The platform helps users turn messy inputs, such as product ideas, meeting notes, research, strategy conversations, and early requirements, into organized product outputs that can support planning, decision-making, documentation, and execution.</p>
          <p>At its core, Aria is built to reduce the friction between thinking, documenting, designing, and building.</p>
        </div>
      </div>

      <div className="w-full text-left mt-8">
        <h2 className="text-xl font-bold mb-4">Who It&apos;s For</h2>
        <p className="text-lg text-muted-foreground mb-4">Aria is designed for people who are responsible for turning ideas into real products or business outcomes, including:</p>
        <div className="explore-table mt-4 rounded-xl overflow-hidden border border-border bg-card">
          <Table>
            <TableHeader className="bg-secondary/50">
              <TableRow>
                <TableHead>User Type</TableHead>
                <TableHead>Use Case</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Founders</TableCell>
                <TableCell>Turning early ideas into structured product plans, pitch-ready materials, and execution roadmaps.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Product Managers</TableCell>
                <TableCell>Organizing requirements, product thinking, user needs, and stakeholder communication into clear artifacts.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Consultants</TableCell>
                <TableCell>Translating client conversations, discovery notes, and strategy work into polished deliverables.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Builders</TableCell>
                <TableCell>Moving from concept to MVP with clearer structure, faster iteration, and less manual documentation work.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="w-full text-left mt-8">
        <h2 className="text-xl font-bold mb-4">Product Vision</h2>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>To create an AI-native workspace that helps users move from idea to execution without losing context, momentum, or structure.</p>
          <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">&ldquo;Aria is built for the messy middle between an idea and a real product.&rdquo;</blockquote>
        </div>
      </div>

      <div className="w-full text-left mt-8">
        <h2 className="text-xl font-bold mb-4">Current Progress</h2>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>I have taken Aria through <strong>five major app iterations</strong>, refining the product direction, user experience, workflow structure, and core feature set with each version.</p>
          <p>I have also built an early <strong>MVP</strong> that brings the core concept into a working product experience. The focus now is on tightening the product experience, validating the workflow with real users, and preparing for early alpha testing.</p>
        </div>
      </div>

      <div className="w-full text-left mt-8">
        <h2 className="text-xl font-bold mb-4">Current Status</h2>
        <div className="explore-table mt-4 rounded-xl overflow-hidden border border-border bg-card">
          <Table>
            <TableHeader className="bg-secondary/50">
              <TableRow>
                <TableHead>Area</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Product Concept</TableCell>
                <TableCell>Defined and refined through multiple iterations.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>UX Direction</TableCell>
                <TableCell>Evolved across five app versions based on usability, clarity, and workflow needs.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>MVP</TableCell>
                <TableCell>Built and functional at an early stage.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Validation</TableCell>
                <TableCell>Preparing for alpha testing with a limited group of early users.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Product Focus</TableCell>
                <TableCell>Helping users turn unstructured ideas and inputs into organized product workflows and execution-ready outputs.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="w-full text-left mt-8">
        <h2 className="text-xl font-bold mb-4">What I Learned</h2>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>Building Aria has reinforced that AI products need more than powerful generation. They need structure, context, and a clear workflow around the user&apos;s actual job.</p>
          <p>The biggest challenge is not just helping users create outputs faster. It is helping them think more clearly, stay organized, and move from idea to execution with less friction.</p>
        </div>
      </div>

      <div className="w-full text-left mt-8">
        <h2 className="text-xl font-bold mb-4">Next Steps</h2>
        <ul className="list-disc list-inside space-y-1 text-lg text-muted-foreground">
          <li>Begin alpha testing with early users.</li>
          <li>Collect feedback on workflow clarity, output usefulness, and overall product experience.</li>
          <li>Refine the onboarding and core user journey.</li>
          <li>Prioritize the highest-value workflows based on real usage.</li>
          <li>Continue improving the MVP toward a sharper, more focused product experience.</li>
        </ul>
      </div>
    </div>
  );
}
