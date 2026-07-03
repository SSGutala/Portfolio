import Image from "next/image";

export default function HoopFoundationProject() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Logo */}
      <div className="mb-6">
        <Image
          src="https://raw.githubusercontent.com/SSGutala/Portfolio/61f360425f33f225faeffc56b46f36a656138480/hooplogo.jpg"
          alt="The Hoop Foundation Logo"
          width={160}
          height={160}
          className="rounded-2xl shadow-2xl"
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Hoop Foundation</h1>
      <p className="text-xl text-muted-foreground mb-2 text-center">Social Impact Learning Initiative</p>

      <div className="text-muted-foreground mb-8 text-center space-y-1">
        <p>Role: Founder &amp; Program Architect</p>
        <p>Timeline: 2024–Present</p>
        <p>Type: Education Impact | Community Model | AI-Assisted Learning</p>
        <p className="italic">Scope: Concept → Field Discovery → Program Model Design → Pre-Launch Validation</p>
      </div>

      <div className="w-full text-left">
        <h2 className="text-xl font-bold mb-4">Product Vision</h2>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>To expand high-quality education access to underserved children living in Indian slum communities by designing a hybrid community + online learning model — powered by volunteer teachers, remote learning pods, and AI-based learning companions.</p>
          <blockquote className="border-l-4 border-primary pl-4 italic">&ldquo;Every child should have access to opportunity, not just information. Education shouldn&apos;t depend on your ZIP code.&rdquo;</blockquote>
        </div>
      </div>

      <div className="text-lg text-muted-foreground space-y-6 text-left mt-8 w-full">
        <div className="phase space-y-3">
          <h2 className="text-xl font-bold mb-4">Phase 1 — Vision Architecture &amp; Strategic Partner Alignment</h2>
          <p>Focused on defining the mission, identifying real-world constraints, and modeling how physical + digital learning can work sustainably in underserved communities.</p>
          <h3 className="text-xl font-semibold mb-4 mt-2">Key Activities</h3>
          <ul className="list-disc list-inside">
            <li>Identified and partnered with a grassroots school in Hyderabad, India that is looking to expand beyond its physical location.</li>
            <li>Held exploratory discussions with nonprofit founders, educators, and volunteers to understand current operational and scale limitations.</li>
            <li>Defined the program vision, impact goals, and a preliminary expansion model for bringing structured learning into slum communities.</li>
            <li>Designed an operating framework for a hybrid teaching model: human-led live sessions supported by AI-assisted self-paced learning.</li>
          </ul>
          <p className="mt-2 font-semibold">PM Deliverables:</p>
          <ul className="list-disc list-inside">
            <li>Vision Statement &amp; Program Narrative</li>
            <li>Stakeholder &amp; Partnership Map</li>
            <li>Expansion Model (Physical School + Remote Learning Pods)</li>
            <li>Program Design Blueprint</li>
          </ul>
        </div>

        <div className="phase space-y-3">
          <h2 className="text-xl font-bold mb-4">Phase 2 — Community Research &amp; Needs Discovery</h2>
          <p>Conducted field research in Hyderabad slum communities to understand real barriers to learning — beyond just a lack of content or devices.</p>
          <div className="explore-table mt-4 rounded-xl overflow-hidden border border-[#e4d7c7] bg-[#f7f1e7]">
            <table className="w-full border-collapse">
              <thead className="bg-[#f2e9dd]">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-800">Area</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-800">Key Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#e4d7c7] hover:bg-[#efe3d4] transition-colors">
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Parent Interviews</td>
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Understood daily routines, learning gaps, financial pressure, and access to smartphones, internet, and safe study space.</td>
                </tr>
                <tr className="border-t border-[#e4d7c7] hover:bg-[#efe3d4] transition-colors">
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Child Engagement Sessions</td>
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Ran drawing, storytelling, and simple learning games to build rapport and observe motivation and attention span.</td>
                </tr>
                <tr className="border-t border-[#e4d7c7] hover:bg-[#efe3d4] transition-colors">
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Learning Constraints</td>
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Identified limited device access, absence of quiet learning environments, and the need for on-ground supervision and support.</td>
                </tr>
                <tr className="border-t border-[#e4d7c7] hover:bg-[#efe3d4] transition-colors">
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Cultural Understanding</td>
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Observed the central role of trust, family permission, and emotional safety in whether children will consistently attend sessions.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 font-semibold">Key Insight → Technology alone won&apos;t work — children need mentorship, emotional support, and structured guidance, not just screens and videos.</p>
        </div>

        <div className="phase space-y-3">
          <h2 className="text-xl font-bold mb-4">Phase 3 — Program Model Definition &amp; Business Design</h2>
          <p>Focused on designing how learning would actually be delivered and what is operationally feasible at scale.</p>
          <div className="explore-table mt-4 rounded-xl overflow-hidden border border-[#e4d7c7] bg-[#f7f1e7]">
            <table className="w-full border-collapse">
              <thead className="bg-[#f2e9dd]">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-800">Area</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-800">What Was Done</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#e4d7c7] hover:bg-[#efe3d4] transition-colors">
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Teaching Model Design</td>
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Proposed a remote learning pod structure: 10–15 children, local facilitator, and tablet-based AI guidance for basic literacy and numeracy.</td>
                </tr>
                <tr className="border-t border-[#e4d7c7] hover:bg-[#efe3d4] transition-colors">
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Business Model Canvas</td>
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Mapped key partners (NGOs, local schools, edtech tools, volunteers, global donors) and core activities for sustainable program delivery.</td>
                </tr>
                <tr className="border-t border-[#e4d7c7] hover:bg-[#efe3d4] transition-colors">
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Scalability Planning</td>
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Modeled a phased expansion path: pilot pods → neighborhood clusters → multi-community hubs leveraging AI-assisted content.</td>
                </tr>
                <tr className="border-t border-[#e4d7c7] hover:bg-[#efe3d4] transition-colors">
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Volunteer Enablement</td>
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Defined structured roles: on-ground facilitators, remote mentors, and AI-learning supervisors responsible for pacing and engagement.</td>
                </tr>
                <tr className="border-t border-[#e4d7c7] hover:bg-[#efe3d4] transition-colors">
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Funding Pathway</td>
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Designed a donations funnel for education kits, shared devices, and pod setup costs, including recurring sponsorship options.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 font-semibold">Outcome → Designed a &ldquo;Community + AI Hybrid Learning Model&rdquo; centered on structured guidance, mentorship, and basic digital tools—not full-tech dependency.</p>
        </div>

        <div className="phase space-y-3">
          <h2 className="text-xl font-bold mb-4">Phase 4 — Pre-Launch Validation &amp; Early Engagement</h2>
          <p>While full teaching operations haven&apos;t begun yet, early trust-building, presence in the community, and partner alignment have been established.</p>
          <div className="explore-table mt-4 rounded-xl overflow-hidden border border-[#e4d7c7] bg-[#f7f1e7]">
            <table className="w-full border-collapse">
              <thead className="bg-[#f2e9dd]">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-800">Engagement Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-800">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#e4d7c7] hover:bg-[#efe3d4] transition-colors">
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Supply Donation Drive</td>
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Organized distribution of stationery, books, snacks, and clothing to children in slum communities as a first touchpoint.</td>
                </tr>
                <tr className="border-t border-[#e4d7c7] hover:bg-[#efe3d4] transition-colors">
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Volunteer Field Visits</td>
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Spent time on the ground with local leaders, observing interest levels, testing classroom engagement, and validating curiosity.</td>
                </tr>
                <tr className="border-t border-[#e4d7c7] hover:bg-[#efe3d4] transition-colors">
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Trust-Building</td>
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Parents and early volunteers expressed willingness to participate in a structured after-school learning pod once launched.</td>
                </tr>
                <tr className="border-t border-[#e4d7c7] hover:bg-[#efe3d4] transition-colors">
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Program Acceptance</td>
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Existing school partners endorsed the hybrid model and agreed to host the first pilot pod using their current facilities.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 font-semibold">PM Deliverables: Vision Deck · Operational Model Outline · Early Engagement Report</p>
        </div>

        <div className="phase space-y-3">
          <h2 className="text-xl font-bold mb-4">Outcome &amp; Current Status</h2>
          <div className="explore-table mt-4 rounded-xl overflow-hidden border border-[#e4d7c7] bg-[#f7f1e7]">
            <table className="w-full border-collapse">
              <thead className="bg-[#f2e9dd]">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-800">Validation Area</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-800">Result</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#e4d7c7] hover:bg-[#efe3d4] transition-colors">
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Interest in Learning Pods</td>
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Confirmed through parent interviews, child engagement, and volunteer enthusiasm for structured after-school learning.</td>
                </tr>
                <tr className="border-t border-[#e4d7c7] hover:bg-[#efe3d4] transition-colors">
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Parent Support Readiness</td>
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Majority of parents expressed willingness to send children to nearby learning pods if safety and trust are maintained.</td>
                </tr>
                <tr className="border-t border-[#e4d7c7] hover:bg-[#efe3d4] transition-colors">
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Digital Readiness</td>
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Device access is low, but communities are open to shared devices and structured tech-aided learning when properly supervised.</td>
                </tr>
                <tr className="border-t border-[#e4d7c7] hover:bg-[#efe3d4] transition-colors">
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">NGO Partner Alignment</td>
                  <td className="px-4 py-3 text-left align-top text-sm text-neutral-800">Partner organization agreed in principle to pilot the first learning pod using their existing school premises and community trust.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="phase space-y-3">
          <h2 className="text-xl font-bold mb-4">What I Learned</h2>
          <blockquote className="border-l-4 border-neutral-400 pl-4 text-neutral-800 italic">
            Real impact products start with community, not code. <br />
            Education builds trust before it builds curriculum. <br />
            Emotional desirability can be validated before technical feasibility. <br />
            In this case, the true MVP isn&apos;t software — it&apos;s community acceptance.
          </blockquote>
          <h3 className="text-xl font-semibold mb-4 mt-4">Next Steps (Planned — Not Yet Executed)</h3>
          <ul className="list-disc list-inside">
            <li>Pilot the first Learning Pod in Hyderabad with 10–15 children.</li>
            <li>Deploy shared tablet-based AI learning assistants (stories, quizzes, basic skills).</li>
            <li>Measure engagement, attendance, and learning progress over an initial 8–12 week period.</li>
            <li>Evolve the AI Companion concept (OneBot) into an early prototype focused on storytelling, doubt clearing, and personalized practice.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
