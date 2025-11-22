
import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
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
    <AnimatedSection id="ventures" className="pt-0 md:pt-0">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12">Ventures</h2>

        <div className="flex flex-col items-center space-y-16">
          <div className="flex flex-col items-center">
              <Image
                  src="https://raw.githubusercontent.com/SSGutala/Portfolio/17df4d3237b30de90ef68e27a089ad67831d1c23/hooplogo.jpg"
                  alt="The Hoop Foundation Logo"
                  width={187}
                  height={187}
                  className="rounded-2xl mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">The Hoop Foundation</h3>
              <p className="text-muted-foreground mb-4">(2024 - Present)</p>
              <p className="text-lg font-semibold text-primary mb-6">Empowering underserved children through education and creativity.</p>

              <div className="text-lg text-muted-foreground space-y-6 text-left">
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
          <div className="flex flex-col items-center">
              <div className="rounded-2xl mb-4 bg-black p-4">
                <Image
                    src="https://raw.githubusercontent.com/SSGutala/Portfolio/5151bb3c20f4821795f6d93526e6d73138d14986/Veera-logo.png"
                    alt="Veera Apparel Logo"
                    width={187}
                    height={187}
                    className="rounded-2xl mix-blend-lighten"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Veera Apparel</h3>
              <p className="text-muted-foreground mb-6">(2024 - Present)</p>

              <div className="text-lg text-muted-foreground space-y-6 text-left">
                  <p>
                      Veera is a lifestyle and apparel venture built around the idea of combining premium design with cultural representation. The brand’s vision focused on creating workout and athleisure wear that felt both high-quality and expressive, especially for audiences often overlooked in mainstream activewear.
                  </p>
                  <p>
                      The journey involved developing the brand identity, experimenting with materials, and designing a digital-first experience. The website was crafted with a sleek “liquid glass” interface to reflect the modern, elevated feel of the brand, while the product design emphasized comfort, durability, and style.
                  </p>
                  <p>
                      Through research and early feedback, Veera reinforced the importance of balancing aesthetics with functionality. Customers valued clean, minimal designs with subtle accents over bold, cluttered patterns. The project highlighted how thoughtful branding, user-friendly digital experiences, and well-crafted products can create a sense of pride and representation in everyday wear.
                  </p>
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
                <h3 className="text-2xl font-bold">Alphawave Technologies — Smart Footwear System</h3>
                <p className="text-muted-foreground mt-2 mb-6">(2020 - 2023)</p>
                <p className="text-muted-foreground italic">Role: Founder & Product Lead | Type: Wearable Tech Venture (Smart Fashion / IoT)</p>
            </div>

            <div className="space-y-12 mt-8">
                <div>
                    <h4 className="text-xl font-bold mb-4">🧠 Problem & Opportunity</h4>
                    <div className="space-y-4 text-lg text-muted-foreground">
                        <p><strong>Problem Statement:</strong> People want shoes that match multiple outfits and styles, but buying multiple pairs is costly and environmentally wasteful. Fashion-focused customers wanted personalization, without having to purchase multiple physical products.</p>
                        <p><strong>Target Users:</strong> Tech-savvy teens, sneaker enthusiasts, and fashion-conscious buyers.</p>
                        <p><strong>Business Insight:</strong> 75% of potential customers we interviewed expressed interest in shoes that could “match anything” and change appearance — but were unwilling to pay high prices for screens. They preferred simple, stylish, lower-cost flexibility.</p>
                    </div>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-4">🔍 Research & Insights</h4>
                    <p className="text-lg text-muted-foreground mb-4">Conducted 100+ user interviews and early concept tests with college fashion groups, sneaker communities, and Etsy custom shoe designers.</p>
                    <h5 className="text-lg font-semibold mb-3">📌 Key Findings:</h5>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold">Insight</TableHead>
                                <TableHead className="font-bold text-right">Source</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Customers prefer multiple preset styles (colors, textures) over full-screen video displays</TableCell>
                                <TableCell className="text-right text-muted-foreground">Interviews</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Cost sensitivity was high — users wouldn’t pay +$120 for OLED screens</TableCell>
                                <TableCell className="text-right text-muted-foreground">Surveys</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell>Most users wear just 3–4 color types regularly</TableCell>
                                <TableCell className="text-right text-muted-foreground">Diary study</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Simplicity > Tech complexity (screens felt ‘too gimmicky’)</TableCell>
                                <TableCell className="text-right text-muted-foreground">Prototype feedback</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                
                <div>
                    <h4 className="text-xl font-bold mb-4">💡 Solution Strategy</h4>
                    <p className="text-lg text-muted-foreground mb-4">We pivoted from OLED screen shoes ➝ to lightweight, color-shifting smart footwear powered by microfilm color panels controlled through a mobile app.</p>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-lg">
                        <div>
                            <h5 className="font-semibold mb-2">Prioritized for MVP:</h5>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                <li><span className="text-green-600 mr-2">✅</span>Color change (4–10 preset styles)</li>
                                <li><span className="text-green-600 mr-2">✔️</span>Bluetooth connectivity</li>
                                <li><span className="text-green-600 mr-2">✔️</span>Long battery life (7 days)</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold mb-2">Deprioritized:</h5>
                             <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                <li><span className="text-red-600 mr-2">⚠️</span>Animated screens due to cost & low user pull</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-4">🔧 Design & Prototyping</h4>
                    <p className="text-lg text-muted-foreground mb-4">Iterated 6 times through lo-fi app screens, a web-based configurator, and in-person wearable samples.</p>
                     <ul className="list-decimal list-inside text-lg text-muted-foreground space-y-1">
                        <li><strong>Phase 1:</strong> Paper sketches → Figma flows → interactive mockups</li>
                        <li><strong>Phase 2:</strong> 3D renders of shoes + color modes</li>
                        <li><strong>Phase 3:</strong> App UI prototype for selecting color/style</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-4">🚀 Development & Execution</h4>
                     <ul className="list-disc list-inside text-lg text-muted-foreground space-y-1">
                        <li>Led cross-functional team (4 engineers, 1 designer, 1 marketer)</li>
                        <li>Led patent research & provisional filing</li>
                        <li>Built functional prototype using Arduino Nano, Bluetooth controllers & E-ink panel</li>
                        <li>Launched pilot with 32 testers</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-4">📈 Outcomes</h4>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold">Metric</TableHead>
                                <TableHead className="font-bold text-right">Outcome</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>User Satisfaction</TableCell>
                                <TableCell className="text-right">40% improvement after iteration 4</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Cost Reduction</TableCell>
                                <TableCell className="text-right">Reduced prototype cost 60% from OLED → static panels</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell>Value Perception</TableCell>
                                <TableCell className="text-right">3.2 ⭐ → 4.5 ⭐ rating after UX and hardware refinement</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell>Feature Adoption</TableCell>
                                <TableCell className="text-right">Most used feature: Style presets</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-4">🔁 Retrospective & Next Steps</h4>
                    <h5 className="font-semibold mb-2">What I would do next:</h5>
                     <ul className="list-disc list-inside text-lg text-muted-foreground space-y-1">
                        <li>Partner with existing shoe brand for co-manufacturing</li>
                        <li>Target sneaker collectors through limited-edition designs</li>
                        <li>Convert into a Shopify plugin for customized footwear</li>
                    </ul>
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
    </AnimatedSection>
  );
}
