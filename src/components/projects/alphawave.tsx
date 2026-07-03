import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AlphawaveProject() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Logo */}
      <div className="mb-6">
        <Image
          src="https://raw.githubusercontent.com/SSGutala/Portfolio/4cdedf9fa796a57e7ed6d1240bba3ffeeefaabfc/AW_Logo.png"
          alt="Alphawave Technologies Logo"
          width={128}
          height={128}
          className="rounded-2xl shadow-2xl"
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Alphawave Technologies</h1>
      <p className="text-xl text-muted-foreground mb-2 text-center">Smart Footwear Venture</p>

      <div className="text-muted-foreground mb-8 text-center space-y-1">
        <p>Role: Product Owner &amp; Founder</p>
        <p>Timeline: 2020–2023</p>
        <p>Type: Hardware + Mobile SaaS | Wearable Tech | IoT</p>
        <p className="italic">Scope: Concept → Market Discovery → MVP → Technical Pre-Validation</p>
      </div>

      <div className="space-y-12 mt-4 w-full">
        <div>
          <h2 className="text-xl font-bold mb-4">Product Vision</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>To design the first app-controlled adaptive footwear, enabling users to dynamically change colors and patterns using their phone — blending personalization, fashion, and smart wearable technology.</p>
            <blockquote className="border-l-4 border-primary pl-4 italic">&ldquo;Shoes that adapt like your phone wallpaper — customizable, expressive, and digitally intelligent.&rdquo;</blockquote>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Phase 1 — Product Discovery &amp; Vision Architecture</h2>
          <h3 className="text-lg font-semibold mb-3">Defining Mission, Target Market &amp; Use Case</h3>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>Conducted market gap analysis across fashion tech, smart wearables, and customization products.</p>
            <p>Identified growing trend in: Self-expression, modular fashion, sustainable personalization, and youth-driven digital identity.</p>
            <div>
              <p className="font-semibold">PM Deliverables built:</p>
              <ul className="list-disc list-inside">
                <li>Product Vision Statement</li>
                <li>Problem Statement</li>
                <li>User Personas (Sneakerheads, lifestyle users, creators)</li>
                <li>Market Size Model (~$12B Growing Smart Wearables Market)</li>
                <li>Business Model Canvas (Customizable hardware + digital experiences)</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Phase 2 — Requirements Definition &amp; Technical Feasibility</h2>
          <p className="text-lg text-muted-foreground mb-4"><strong>Key Challenge:</strong> Can this technology (e-Ink / OLED / color-shifting materials) actually be embedded into a shoe while maintaining flexibility, durability, and battery efficiency?</p>
          <h3 className="text-lg font-semibold mb-3">Activities Performed</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Exploration</TableHead>
                <TableHead>What We Did</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow><TableCell>Material Feasibility</TableCell><TableCell>Evaluated OLED, LCD mesh, flexible e-Ink, electrochromic film</TableCell></TableRow>
              <TableRow><TableCell>Vendor Discussions</TableCell><TableCell>Met with E-Ink Corp and multiple Shenzhen prototyping labs</TableCell></TableRow>
              <TableRow><TableCell>Legal &amp; Patent Research</TableCell><TableCell>Conducted IP feasibility, initiated provisional patent development</TableCell></TableRow>
              <TableRow><TableCell>Technical Workshops</TableCell><TableCell>Evaluated battery integration, wireless controllers (BLE), flex-PCB constraints</TableCell></TableRow>
              <TableRow><TableCell>Engineering Budgeting</TableCell><TableCell>Cost modeling for prototype versioning, BOM analysis</TableCell></TableRow>
            </TableBody>
          </Table>
          <p className="text-lg text-muted-foreground my-4"><strong>PM Deliverable Created:</strong> Technical Feasibility Assessment &amp; Build vs Buy Matrix</p>
          <p className="text-lg text-muted-foreground"><strong>Decision:</strong> Pivoted away from OLED screens (fragility / heat / high-cost) → toward static color-shifting e-Ink panels with Bluetooth microcontroller integration.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Phase 3 — Design &amp; Experience Prototyping</h2>
          <h3 className="text-lg font-semibold mb-3">Prototype 1 — Concept Modeling (Sketches &amp; 2D Visual Renders)</h3>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p><strong>Goal:</strong> Capture form, functionality, and the user experience.</p>
            <p>Created concept storyboards, sketch design pack, and usage journey mapping.</p>
            <p>Defined mobile app companion concept: Color selection, presets, connectivity, &ldquo;Style Library.&rdquo;</p>
          </div>
          <h3 className="text-lg font-semibold my-3">Prototype 2 — Low-Fidelity UX Wireframes</h3>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>Built quick flows using Figma lo-fi, focusing on:</p>
            <ul className="list-disc list-inside">
              <li>How users select styles</li>
              <li>How shoe connects to app (Bluetooth scanning)</li>
              <li>Style presets &amp; favorites experience</li>
            </ul>
            <div>
              <p className="font-semibold mt-4">Deliverables:</p>
              <ul className="list-disc list-inside">
                <li>User Flow Maps</li>
                <li>Lo-Fi Wireframes</li>
                <li>Interaction Model Diagram (shoe ↔ phone ↔ cloud preset sync)</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Phase 4 — High-Fidelity Design &amp; Physical Prototype Coordination</h2>
          <div className="space-y-8 text-lg text-muted-foreground">
            <div>
              <h3 className="font-semibold mb-2">Hardware: Physical Product Engineering &amp; Manufacturing Enablement</h3>
              <div className="flex flex-col md:flex-row gap-8 items-center my-8">
                <div className="flex-1">
                  <video
                    src="https://raw.githubusercontent.com/SSGutala/Portfolio/61f360425f33f225faeffc56b46f36a656138480/AWPrismrender.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-lg shadow-2xl w-full"
                  />
                  <p className="text-muted-foreground text-sm mt-4 text-center">E-ink Prism Model</p>
                </div>
                <div className="flex-1">
                  <video
                    src="https://raw.githubusercontent.com/SSGutala/Portfolio/cf9aa8bf85d3d96aa8cec1ee6583c3e768b94bae/AWSlipOns.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-lg shadow-2xl w-full"
                  />
                  <p className="text-muted-foreground text-sm mt-4 text-center">OLED Model</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1">
                <li>Developed detailed 3D renders and engineering-ready shoe models using Blender and Keyshot, integrating battery housing, MCU compartment, wiring channels, and removable color panel slots.</li>
                <li>Built multiple iterations of physical prototypes using Arduino and then ESP32, allowing BLE communication, higher power efficiency, and debugging through the Arduino IDE and VS Code.</li>
                <li>Managed BOM (Bill of Materials) planning and sourcing, coordinating key components: fabric base, e-textile layer, 3.7V LiPo battery, ESP32-based microcontroller, wiring harness, and color-change e-ink panel prototypes.</li>
                <li>Created technical documentation and annotated CAD files to communicate design intent, constraints, and dimensions to Shenzhen-based manufacturing partners for prototyping.</li>
                <li>Engaged with E-ink suppliers and wearable material specialists, evaluating tradeoffs in flexibility, voltage tolerance, durability, and response time for color change modules.</li>
                <li>Coordinated design handoff, prototype approval, and version tracking using supplier communication packets, combining renders, specs, materials, and firmware interactions.</li>
                <li>Incorporated user feedback loops to refine wearability, weight distribution, charging methods, and style preservation—improving user comfort perception and aesthetic appeal.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Embedded Software &amp; Hardware Control</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Iterated from Arduino-based prototypes to ESP32 microcontroller for improved Bluetooth capabilities, battery efficiency, and processing speed.</li>
                <li>Wrote firmware in C/C++ to handle BLE communication, boot sequencing, power management, and LED driver control.</li>
                <li>Designed logic for real-time color switching, synchronization timing, and memory-based preset storage on EEPROM.</li>
                <li>Collaborated with an electrical engineer to build a custom PCB, integrating power regulation, BLE module, LED drivers, and charging components.</li>
                <li>Tested firmware at multiple stages, using serial debugging and edge-case simulations to improve reliability and responsiveness.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Mobile Software – React Native App (User Experience &amp; BLE Integration)</h3>
              <div className="flex justify-center items-center gap-4 md:gap-8 flex-col md:flex-row my-8">
                <div className="w-[48%] md:w-auto md:max-w-[320px]">
                  <Image
                    src="https://raw.githubusercontent.com/SSGutala/Portfolio/a8e1cae263ceecd70eab9040feb9c91281ffa384/AWr1.png"
                    alt="Alphawave Rider App Screen 1"
                    width={320}
                    height={640}
                    className="w-full h-auto object-contain rounded-lg shadow-xl"
                  />
                </div>
                <div className="w-[48%] md:w-auto md:max-w-[320px]">
                  <Image
                    src="https://raw.githubusercontent.com/SSGutala/Portfolio/a8e1cae263ceecd70eab9040feb9c91281ffa384/AWr3.png"
                    alt="Alphawave Rider App Screen 2"
                    width={320}
                    height={640}
                    className="w-full h-auto object-contain rounded-lg shadow-xl"
                  />
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1">
                <li>Built a hybrid mobile application using React Native to support both iOS and Android, prioritizing faster iteration and cost efficiency for prototype testing.</li>
                <li>Designed and documented the BLE command protocol, mapping app interactions to firmware-level actions (hex command strings for color updates, style changes, and preset sync).</li>
                <li>Created high-fidelity Figma screens, then converted them into responsive React Native components—Live Preview, Color Wheel, Preset Editor, and One-Tap Apply Style.</li>
                <li>Structured the app using a modular architecture (UI Layer → BLE Service Layer → Firmware Controller), ensuring scalable integration with hardware.</li>
                <li>Implemented real-time preview simulation in the app using React Native Animated API to mirror actual hardware behavior — helping users visualize style changes before pushing them to the shoe.</li>
                <li>Conducted usability testing across 15+ users, identifying friction in Bluetooth pairing flow; iterated to add automatic device detection and onboarding prompts.</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4 text-lg text-muted-foreground mt-4">
            <p className="font-semibold">Deliverables:</p>
            <ul className="list-disc list-inside">
              <li>Hi-Fi App Design System</li>
              <li>Design Spec Document for Hardware Integration</li>
              <li>Clickable Prototype for Demo &amp; Pre-Investor Pitch</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Phase 5 — User Testing &amp; Market Validation</h2>
          <p className="text-lg text-muted-foreground mb-4">Conducted 100+ tests with: Lifestyle users, Fashion students, and TikTok content creators.</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feedback</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Outcome</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow><TableCell>Customization felt scarce in the footwear market</TableCell><TableCell>High</TableCell><TableCell>Confirmed interest</TableCell></TableRow>
              <TableRow><TableCell>Users preferred preset-based designs, not complex manual editing</TableCell><TableCell>High</TableCell><TableCell>Simplified UX model</TableCell></TableRow>
              <TableRow><TableCell>Concerns about durability and weather-resistance</TableCell><TableCell>High</TableCell><TableCell>Redesigned housing</TableCell></TableRow>
              <TableRow><TableCell>Suggested adding preset &ldquo;Collections&rdquo; (Seasonal, Minimal, Streetwear)</TableCell><TableCell>Medium</TableCell><TableCell>Added Collection concept</TableCell></TableRow>
            </TableBody>
          </Table>
          <p className="text-lg text-muted-foreground my-4"><strong>PM Deliverable:</strong> Usability Report — Iteration Path for V2</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Phase 6 — MVP Concept Definition (Go-to-Market Prep)</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>Based on feasibility, user desirability, and cost modeling, MVP was defined as:</p>
            <p className="font-semibold">App-Controlled Static Color-Shifting Shoe (No animation video, just dynamic color panels)</p>
            <ul className="list-disc list-inside">
              <li>Mobile App Integration</li>
              <li>Limited battery use (&lt;8hrs per charge)</li>
              <li>Quick style swapping</li>
              <li>Limited initial presets (6–10 styles)</li>
              <li>Fabricated to withstand physical usage</li>
            </ul>
            <div>
              <p className="font-semibold mt-4">Deliverables:</p>
              <ul className="list-disc list-inside">
                <li>MVP Feature List &amp; Prioritization (MoSCoW)</li>
                <li>Go-to-Market MVP Plan</li>
                <li>Pitch Assets for Investor Readiness</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Outcome &amp; Learnings</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <div>
              <h3 className="font-semibold mb-2">Why MVP Production Paused:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Supply chain &amp; manufacturing risk too high for bootstrapped budget</li>
                <li>Complexity in durability testing &amp; certifications</li>
                <li>High initial manufacturing cost ($85–$120 per pair — too high without volume)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What I learned:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Hardware x Software PM requires deep technical feasibility + vendor collaboration</li>
                <li>Human behavior favors simplicity—users don&apos;t need full control, just curated choices</li>
                <li>PM Rule: Faster doesn&apos;t mean better — &ldquo;Test desirability before building feasibility.&rdquo;</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Next Iteration (Concept for Future)</h2>
          <p className="text-lg text-muted-foreground">Knowing GenAI and flexible tech are evolving rapidly, revived concept can become:</p>
          <p className="text-lg text-muted-foreground font-semibold">AI-Powered Adaptive Footwear — Upload an outfit → App generates matching shoe style → Sends to smart footwear with instant color sync.</p>
        </div>
      </div>
    </div>
  );
}
