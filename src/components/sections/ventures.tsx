

import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function VenturesSection() {
  return (
    <section id="ventures" className="pt-0 md:pt-0 min-h-[90vh] py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="max-w3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12">Ventures</h2>

          <div className="flex flex-col items-center space-y-16">
            <div className="flex flex-col items-center">
                <Image
                    src="https://raw.githubusercontent.com/SSGutala/Portfolio/61f360425f33f225faeffc56b46f36a656138480/hooplogo.jpg"
                    alt="The Hoop Foundation Logo"
                    width={187}
                    height={187}
                    className="rounded-2xl mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">Hoop Foundation — Social Impact Learning Initiative</h3>
                <div className="text-muted-foreground mb-4 text-center">
                  <p>Role: Founder & Program Architect</p>
                  <p>Timeline: 2024–Present</p>
                  <p>Type: Education Impact | Community Model | AI-Assisted Learning</p>
                  <p className="italic">Scope: Concept → Field Discovery → Program Model Design → Pre-Launch Validation</p>
                </div>
                
                <div className="w-full text-left">
                  <h4 className="text-xl font-bold mb-4">Product Vision</h4>
                  <div className="space-y-4 text-lg text-muted-foreground">
                      <p>To expand high-quality education access to underserved children living in Indian slum communities by designing a hybrid community + online learning model — powered by volunteer teachers, remote learning pods, and AI-based learning companions.</p>
                      <blockquote className="border-l-4 border-primary pl-4 italic">“Every child should have access to opportunity, not just information. Education shouldn’t depend on your ZIP code.”</blockquote>
                  </div>
                </div>

                <div className="text-lg text-muted-foreground space-y-6 text-left mt-8">
                    <p>
                        The Hoop Foundation is a non-profit organization I founded with the mission of empowering underprivileged children through education, creativity, and opportunity. Our goal is to provide education to the poorest of the poor elementary children in India, particularly those living in the slums, by leveraging both live and pre-recorded remote teaching methods alongside AI-powered learning agents. The long-term vision is to meet national curriculum needs for children K through 12, supporting their college and career goals entirely free of cost.
                    </p>
                    <p>
                        Our first initiative was held in India, where we successfully assisted over 200 underserved students by providing custom educational materials and treats, helping make learning more engaging and accessible. This effort marked the foundation’s first step toward creating lasting impact at the grassroots level.
                    </p>
                    <p>
                        Beyond this, The Hoop Foundation continues to build partnerships, recruit volunteers, and lay the groundwork for broader programs, including future 501(c) registration in the United States and NGO registration in India. The journey has taught me the importance of combining entrepreneurial drive with compassion, and how education can be one of the most powerful tools for change.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center text-left w-full">
                <div className="rounded-2xl mb-4 bg-black p-4">
                  <Image
                      src="https://raw.githubusercontent.com/SSGutala/Portfolio/5151bb3c20f4821795f6d93526e6d73138d14986/Veera-logo.png"
                      alt="Veera Apparel Logo"
                      width={187}
                      height={187}
                      className="rounded-2xl mix-blend-lighten"
                  />
                </div>
                 <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Veera Apparel — Lifestyle Activewear Venture</h3>
                    <div className="text-muted-foreground mb-6">
                        <p>Role: Founder & Product Owner</p>
                        <p>Timeline: 2024–Present</p>
                        <p>Type: Apparel & Brand | Lifestyle & Activewear</p>
                        <p className="italic">Scope: Concept → Market Discovery → Design System → Pre-Launch Validation</p>
                    </div>
                </div>

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
                <p className="text-muted-foreground text-sm mb-8 text-center">
                  Veera Apparel Product Render Samples
                </p>

                <div className="space-y-12 mt-8 w-full">
                  <div>
                      <h4 className="text-xl font-bold mb-4">Product Vision</h4>
                      <div className="space-y-4 text-lg text-muted-foreground">
                          <p>To design lifestyle activewear that feels premium, minimal, and culturally expressive—without being loud or cliché. Built for everyday wear, not just events or gyms.</p>
                          <blockquote className="border-l-4 border-primary pl-4 italic">“Comfort-first apparel with subtle identity—not costume, not cliché, just confidently expressive.”</blockquote>
                      </div>
                  </div>
                  
                  <div className="text-lg text-muted-foreground space-y-6">
                      <h4 className="text-xl font-bold mb-4">Phase 1 — Discovery & Market Insight</h4>
                       <h5 className="text-lg font-semibold mb-3">Activities:</h5>
                       <ul className="list-disc list-inside">
                        <li>Interviewed 50+ early potential users (fitness creators, young professionals, models) on comfort, fit, and cultural expression.</li>
                        <li>Analyzed premium activewear brands (Lululemon, Alo, Gymshark) to compare tone, brand language, and perception of quality. </li>
                        <li>Identified opportunity in understated cultural identity—not bold graphics or printed symbolism.</li>
                      </ul>
                      
                      <p><strong>PM Deliverables:</strong> Problem Statement • Target Persona Profiles • Brand Positioning Axes (Minimal ↔ Loud, Lifestyle ↔ Performance)</p>
                  </div>
                  
                  <hr className="border-border" />

                  <div className="text-lg text-muted-foreground space-y-6">
                      <h4 className="text-xl font-bold mb-4">Phase 2 — Requirements & Material Exploration</h4>
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

                  <hr />
                  
                  <div className="text-lg text-muted-foreground space-y-6">
                    <h4 className="text-xl font-bold mb-4">Phase 3 — Design Iteration</h4>
                     <div className="space-y-4">
                        <h4 className="font-semibold">Prototype 1: Graphic-Based Concepts</h4>
                        <ul className="list-disc list-inside">
                            <li>Explored strong cultural illustration and printed motifs</li>
                            <li>Created mockups in Illustrator and Figma for visualizing placement & identity</li>
                            <li><strong>User Insight:</strong> “Looks good, but too loud to wear casually.”</li>
                        </ul>
                    </div>
                     <div className="space-y-4">
                        <h4 className="font-semibold">Prototype 2: Minimal & Tone-Based Expression</h4>
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
                      <h4 className="text-xl font-bold mb-4">Phase 4 — Brand Identity & Pre-Launch Planning</h4>
                      <ul className="list-disc list-inside">
                        <li>Created lifestyle concept visuals (gym, café, everyday casual)</li>
                        <li>Developed brand story centered on subtle identity, comfort, and self-expression</li>
                        <li>Built early Go-to-Market concept: waitlist, concept testing, influencer sampling (not executed yet)</li>
                      </ul>
                      <p><strong>PM Deliverables:</strong> Brand Story • MVP Concept Brief • Design System Snapshot</p>
                  </div>

                   <hr className="border-border" />

                   <div className="text-lg text-muted-foreground space-y-6">
                      <h4 className="text-xl font-bold mb-4">Outcome & Current Stage</h4>
                      <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Insight</TableHead>
                              <TableHead>Impact</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>People want "premium minimal" more than bold ethnic designs</TableCell>
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

                        <h5 className="font-semibold pt-4">Next Steps (Pending)</h5>
                        <ul className="list-disc list-inside">
                            <li>Produce first fabric prototypes (sampling stage)</li>
                            <li>Fit, drape, softness testing with user panel</li>
                            <li>Small batch launch (50–75 units) with story-first marketing</li>
                        </ul>
                   </div>

                    <hr className="border-border" />

                    <div className="text-lg text-muted-foreground space-y-6">
                        <h4 className="text-xl font-bold mb-4">What I Learned</h4>
                        <blockquote className="border-l-4 border-primary pl-4 italic space-y-2">
                          <p>Subtlety is a strategy—not just a design choice.</p>
                          <p>Fabric is the MVP in apparel.</p>
                          <p>You can validate desirability without producing inventory.</p>
                        </blockquote>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col items-center text-left w-full">
              <Image
                  src="https://raw.githubusercontent.com/SSGutala/Portfolio/4cdedf9fa796a57e7ed6d1240bba3ffeeefaabfc/AW_Logo.png"
                  alt="Alphawave Technologies Logo"
                  width={128}
                  height={128}
                  className="rounded-2xl mb-4"
              />
              <div className="text-center">
                  <h3 className="text-2xl font-bold">Alphawave Technologies — Smart Footwear Venture</h3>
                  <p className="text-muted-foreground mt-2">Role: Product Owner &amp; Founder</p>
                  <p className="text-muted-foreground">Timeline: 2020–2023</p>
                  <p className="text-muted-foreground">Type: Hardware + Mobile SaaS | Wearable Tech | IoT</p>
                  <p className="text-muted-foreground italic mb-6">Scope: Concept → Market Discovery → MVP → Technical Pre-Validation</p>
              </div>

              <div className="space-y-12 mt-8 w-full">
                  <div>
                      <h4 className="text-xl font-bold mb-4">Product Vision</h4>
                      <div className="space-y-4 text-lg text-muted-foreground">
                          <p>To design the first app-controlled adaptive footwear, enabling users to dynamically change colors and patterns using their phone — blending personalization, fashion, and smart wearable technology.</p>
                          <blockquote className="border-l-4 border-primary pl-4 italic">“Shoes that adapt like your phone wallpaper — customizable, expressive, and digitally intelligent.”</blockquote>
                      </div>
                  </div>

                  <div>
                      <h4 className="text-xl font-bold mb-4">Phase 1 — Product Discovery &amp; Vision Architecture</h4>
                      <h5 className="text-lg font-semibold mb-3">Defining Mission, Target Market &amp; Use Case</h5>
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
                      <h4 className="text-xl font-bold mb-4">Phase 2 — Requirements Definition &amp; Technical Feasibility</h4>
                      <p className="text-lg text-muted-foreground mb-4"><strong>Key Challenge:</strong> Can this technology (e-Ink / OLED / color-shifting materials) actually be embedded into a shoe while maintaining flexibility, durability, and battery efficiency?</p>
                      <h5 className="text-lg font-semibold mb-3">Activities Performed</h5>
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
                      <h4 className="text-xl font-bold mb-4">Phase 3 — Design &amp; Experience Prototyping</h4>
                      <h5 className="text-lg font-semibold mb-3">Prototype 1 — Concept Modeling (Sketches &amp; 2D Visual Renders)</h5>
                       <div className="space-y-4 text-lg text-muted-foreground">
                          <p><strong>Goal:</strong> Capture form, functionality, and the user experience.</p>
                          <p>Created concept storyboards, sketch design pack, and usage journey mapping.</p>
                          <p>Defined mobile app companion concept: Color selection, presets, connectivity, “Style Library.”</p>
                      </div>

                      <h5 className="text-lg font-semibold my-3">Prototype 2 — Low-Fidelity UX Wireframes</h5>
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
                      <h4 className="text-xl font-bold mb-4">Phase 4 — High-Fidelity Design &amp; Physical Prototype Coordination</h4>
                      <div className="space-y-8 text-lg text-muted-foreground">
                          <div>
                              <h5 className="font-semibold mb-2">Hardware: Physical Product Engineering & Manufacturing Enablement</h5>
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
                                      <p className="text-muted-foreground text-sm mt-4 text-center">
                                          E-ink Prism Model
                                      </p>
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
                                       <p className="text-muted-foreground text-sm mt-4 text-center">
                                          OLED Model
                                      </p>
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
                              <h5 className="font-semibold mb-2">Embedded Software & Hardware Control</h5>
                               <ul className="list-disc list-inside space-y-1">
                                  <li>Iterated from Arduino-based prototypes to ESP32 microcontroller for improved Bluetooth capabilities, battery efficiency, and processing speed.</li>
                                  <li>Wrote firmware in C/C++ to handle BLE communication, boot sequencing, power management, and LED driver control.</li>
                                  <li>Designed logic for real-time color switching, synchronization timing, and memory-based preset storage on EEPROM.</li>
                                  <li>Collaborated with an electrical engineer to build a custom PCB, integrating power regulation, BLE module, LED drivers, and charging components.</li>
                                  <li>Tested firmware at multiple stages, using serial debugging and edge-case simulations to improve reliability and responsiveness.</li>
                              </ul>
                          </div>
                          <div>
                              <h5 className="font-semibold mb-2">Mobile Software – React Native App (User Experience & BLE Integration)</h5>
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
                      <h4 className="text-xl font-bold mb-4">Phase 5 — User Testing &amp; Market Validation</h4>
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
                              <TableRow><TableCell>Suggested adding preset “Collections” (Seasonal, Minimal, Streetwear)</TableCell><TableCell>Medium</TableCell><TableCell>Added Collection concept</TableCell></TableRow>
                          </TableBody>
                      </Table>
                      <p className="text-lg text-muted-foreground my-4"><strong>PM Deliverable:</strong> Usability Report — Iteration Path for V2</p>
                  </div>
                  
                  <div>
                      <h4 className="text-xl font-bold mb-4">Phase 6 — MVP Concept Definition (Go-to-Market Prep)</h4>
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
                      <h4 className="text-xl font-bold mb-4">Outcome &amp; Learnings</h4>
                       <div className="space-y-4 text-lg text-muted-foreground">
                          <div>
                              <h5 className="font-semibold mb-2">Why MVP Production Paused:</h5>
                              <ul className="list-disc list-inside space-y-1">
                                  <li>Supply chain &amp; manufacturing risk too high for bootstrapped budget</li>
                                  <li>Complexity in durability testing &amp; certifications</li>
                                  <li>High initial manufacturing cost ($85–$120 per pair — too high without volume)</li>
                              </ul>
                          </div>
                          <div>
                              <h5 className="font-semibold mb-2">What I learned:</h5>
                               <ul className="list-disc list-inside space-y-1">
                                  <li>Hardware x Software PM requires deep technical feasibility + vendor collaboration</li>
                                  <li>Human behavior favors simplicity—users don’t need full control, just curated choices</li>
                                  <li>PM Rule: Faster doesn’t mean better — “Test desirability before building feasibility.”</li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div>
                      <h4 className="text-xl font-bold mb-4">Next Iteration (Concept for Future)</h4>
                      <p className="text-lg text-muted-foreground">Knowing GenAI and flexible tech are evolving rapidly, revived concept can become:</p>
                      <p className="text-lg text-muted-foreground font-semibold">AI-Powered Adaptive Footwear — Upload an outfit → App generates matching shoe style → Sends to smart footwear with instant color sync.</p>
                  </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
                <Image
                    src="https://raw.githubusercontent.com/SSGutala/Portfolio/ffbb7b6b6eed5e77e9fa05007f8f7aa8fd4b1641/superstarlogo.png"
                    alt="SuperStar Logo"
                    width={240}
                    height={240}
                    className="rounded-2xl mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">SuperStar</h3>
                <p className="text-muted-foreground mb-6">(2019 - 2020)</p>

                <div className="text-lg text-muted-foreground space-y-6 text-left">
                    <p>
                        SuperStar was a social media app venture developed over the course of a year, designed to let anyone create and share short films directly from a smartphone. The vision was to give creators a platform for episodic storytelling — a “Netflix for creators” — that democratized film production and distribution.
                    </p>
                    <p>
                        Throughout development, we engaged with digital creators and actors to test the concept and app features. While the editing tools showed promise, feedback revealed that the short-film creation process was still too complex for a mobile app to simplify, and many creators preferred professional equipment. Market insights also showed that the audience for such a platform was limited at the time, with the broader community not yet ready for this type of product.
                    </p>
                    <p>
                        Despite these challenges, the venture demonstrated valuable lessons in understanding creator needs, market timing, and product feasibility. The concept remains ahead of its time, with potential to succeed as technology advances and user behavior evolves.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center">
               <div className="w-36 h-36 rounded-2xl mb-4 flex items-center justify-center bg-gradient-to-b from-yellow-400 to-orange-500">
                  <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: 'white', stopOpacity: 1}} />
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
                      fill="url(#grad)"
                    >
                      Yp
                    </text>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">YoungPreneurs</h3>
                <p className="text-muted-foreground mb-6">(2018 - 2019)</p>

                <div className="text-lg text-muted-foreground space-y-6 text-left">
                    <p>
                        YoungPreneurs was my first design project and second venture, created to connect startup founders, co-founders, and early investors through a dedicated mobile platform. The goal was to make it easier for entrepreneurs to find essential collaborators and initial funding, with a long-term vision of expanding the network to include venture capitalists and broader startup support.
                    </p>
                    <p>
                        Building YoungPreneurs offered early lessons in both product design and the startup ecosystem. The project emphasized the challenges founders face when seeking co-founders and funding, and highlighted how critical usability is when designing a platform for networking.
                    </p>
                    <p>
                        Through the process, I gained insights into the importance of community, relationship-building, and streamlined user experiences — lessons that continue to shape how I approach product design and venture creation today.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center">
               <div className="w-48 h-36 rounded-2xl mb-4 flex items-center justify-center bg-gradient-to-r from-blue-600 to-fuchsia-600">
                  <span className="text-3xl font-light text-white tracking-widest">Provaloh</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Provaloh</h3>
                 <p className="text-muted-foreground mb-6">(2017 - 2019)</p>
                <div className="text-lg text-muted-foreground space-y-6 text-left">
                    <p>
                        Provaloh was my very first venture experience — a virtual trial room app designed to let users try on clothes digitally before making a purchase. The concept aimed to blend fashion with technology, reducing the uncertainty of online shopping while improving customer confidence in their choices.
                    </p>
                    <p>
                        To bring this vision to life, I built and led a team of 10 people across engineering, marketing, business, and design. Together, we explored how to merge technical feasibility with customer needs while experimenting with different approaches to user experience and product delivery.
                    </p>
                    <p>
                       As my first exposure to building a venture, Provaloh provided invaluable lessons in leadership, collaboration, and the fundamentals of product development. It showed me how bold ideas can spark new possibilities, and how execution and teamwork are key to turning vision into reality.
                    </p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
