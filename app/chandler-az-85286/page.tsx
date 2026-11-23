import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bath, CheckCircle2, ClipboardCheck, Droplets, HardHat, Home, MapPin, Phone, Sparkles, Wrench } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Bathroom Remodeling in Chandler AZ 85286 | ARZ Home",
  description: "Bathroom remodeling for Chandler, AZ 85286 homes with showers, tub conversions, tile, vanities, flooring, and complete renovations. Get an estimate.",
  alternates: {
    canonical: `${siteConfig.url}/chandler-az-85286/`,
  },
  openGraph: {
    title: "Bathroom Remodeling in Chandler AZ 85286 | ARZ Home",
    description: "Bathroom remodeling for Chandler, AZ 85286 homes with showers, tub conversions, tile, vanities, flooring, and complete renovations. Get an estimate.",
    url: `${siteConfig.url}/chandler-az-85286/`,
    type: "website",
  },
};

const faqs = [
  {
    q: "What bathroom remodeling services are available in Chandler 85286?",
    a: "A project may focus on a shower, tub-to-shower conversion, bathtub, vanity, tile, flooring, lighting, accessibility improvements, or a more complete bathroom renovation. The right scope depends on the room, existing conditions, and how you want to use it.",
  },
  {
    q: "Is a tub-to-shower conversion right for a South Chandler home?",
    a: "It can be a practical choice when a tub is rarely used and a more accessible daily shower would serve the household better. Before removing the only tub, consider whether another bathroom should retain bathing functionality and discuss drainage, entry, glass, storage, and waterproofing requirements.",
  },
  {
    q: "How should I plan an accessible or aging-in-place bathroom?",
    a: "Start with the user’s mobility needs and the room’s clearances. A plan may include a lower-threshold or curbless entry, a handheld shower, a seat, grab-bar blocking, easier-to-reach controls, non-slip surfaces, stronger lighting, and a layout that leaves useful maneuvering space. Final design and installation details depend on the room and project goals.",
  },
  {
    q: "What materials are practical for mineral residue and daily cleaning?",
    a: "Porcelain and ceramic tile, properly selected grout, glass, quartz, cabinetry, and resilient flooring each have different cleaning and maintenance considerations. In Chandler, homeowners may want to discuss mineral residue, grout care, ventilation, slope, and access for regular cleaning before choosing finishes.",
  },
  {
    q: "Do bathroom remodels in Chandler require permits?",
    a: "Permit needs depend on the proposed work, such as plumbing relocation, electrical changes, structural work, or other alterations. The City of Chandler provides current permit and inspection information; a project conversation can help identify which questions to confirm before work begins. Visit the [City of Chandler permit page](https://www.chandleraz.gov/government/departments/development-services/building-safety-plan-review-permits-and-inspections).",
  },
  {
    q: "How long does a bathroom remodel take?",
    a: "Timing varies with the size of the room, demolition findings, layout changes, selections, inspections, custom materials, and product availability. A focused surface update may have a different schedule from a full renovation, so the project scope should be clarified before a schedule is discussed.",
  },
  {
    q: "Can a shower-pan replacement be handled without remodeling the entire room?",
    a: "Sometimes. If the problem is limited to the shower floor, a focused repair or replacement may be possible, but the surrounding waterproofing, framing, tile, plumbing, and any visible water damage should be evaluated before narrowing the scope. Existing conditions determine the appropriate approach.",
  },
  {
    q: "What should I prepare before requesting a bathroom remodeling consultation?",
    a: "Note what does not work in the room, how the bathroom is used, whether the tub is needed, where storage is lacking, and which finishes you prefer. Photos, approximate dimensions, inspiration images, and questions about access, ventilation, maintenance, permits, and budget can make the initial conversation more productive.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/chandler-az-85286/#service`,
      name: "Bathroom Remodeling in Chandler AZ 85286",
      serviceType: "Bathroom remodeling",
      description: "Bathroom remodeling guidance and services for homeowners in Chandler, Arizona ZIP 85286, including shower, tub, vanity, tile, flooring, lighting, and renovation planning.",
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: "ARZ Home Remodeling",
        telephone: siteConfig.phone,
        url: siteConfig.url,
      },
      areaServed: {
        "@type": "PostalCode",
        postalCode: "85286",
        addressCountry: "US",
        addressRegion: "AZ",
        addressLocality: "Chandler",
      },
      url: `${siteConfig.url}/chandler-az-85286/`,
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/chandler-az-85286/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1"),
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteConfig.url}/chandler-az-85286/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
        { "@type": "ListItem", position: 2, name: "Chandler Bathroom Remodeling", item: `${siteConfig.url}/bathroom-remodeling-chandler-az/` },
        { "@type": "ListItem", position: 3, name: "Bathroom Remodeling 85286", item: `${siteConfig.url}/chandler-az-85286/` },
      ],
    },
  ],
};

function renderFaqAnswer(answer: string) {
  const permitLink = "[City of Chandler permit page](https://www.chandleraz.gov/government/departments/development-services/building-safety-plan-review-permits-and-inspections)";
  if (!answer.includes(permitLink)) return answer;
  const [before, after] = answer.split(permitLink);
  return (
    <>
      {before}
      <a href="https://www.chandleraz.gov/government/departments/development-services/building-safety-plan-review-permits-and-inspections" target="_blank" rel="noreferrer" className="text-primary hover:underline">City of Chandler permit page</a>
      {after}
    </>
  );
}

export default function Chandler85286Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-24 md:pt-28 lg:pt-32 pb-16 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <MapPin className="w-4 h-4" /> South Chandler, Arizona · ZIP 85286
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Bathroom Remodeling in Chandler, AZ 85286
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Planning a bathroom remodel in South Chandler? ARZ Home Remodeling helps 85286 homeowners compare shower updates, tub conversions, master-bath renovations, guest-bath improvements, and complete room changes with practical guidance for Arizona homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href={`tel:${siteConfig.phoneClean}`} className="trackable-phone call-to-action bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition shadow-lg font-bold text-lg w-full sm:w-auto flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call {siteConfig.phone}
              </a>
              <a href="/contact/" className="bg-secondary text-foreground border border-border px-8 py-4 rounded-xl hover:bg-secondary/80 transition shadow-sm font-bold text-lg w-full sm:w-auto">
                Request a Consultation
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Scope-led planning</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Shower and full-room options</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Local Chandler service area</div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-serif font-semibold mb-6 text-foreground">Bathroom Remodeling Options for South Chandler Homes</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    A bathroom remodel can be a focused improvement or a broader renovation. In the 85286 area, homeowners may be weighing a dated tub, a difficult shower entry, limited storage, worn tile, poor lighting, or a layout that no longer fits the household. The useful starting point is not a one-size-fits-all package; it is a clear look at what needs to change and what can remain.
                  </p>
                  <p>
                    ARZ Home Remodeling serves South Chandler communities including Sun Groves, Carino Estates, Springfield, and nearby areas around Tumbleweed Park. Neighborhood references help identify the service area, but the right scope still depends on the individual room, existing plumbing and electrical, selections, and the homeowner’s priorities.
                  </p>
                  <p>
                    If you are comparing a shower-only update with a complete renovation, start by listing the daily problems you want solved. That list can guide decisions about access, storage, ventilation, surfaces, lighting, and whether changing the footprint is worth considering.
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/" className="text-primary font-bold hover:underline flex items-center gap-2">Explore ARZ Home Remodeling <ArrowRight className="w-5 h-5" /></Link>
                  <Link href="/contact/" className="text-primary font-bold hover:underline flex items-center gap-2">Discuss your bathroom <ArrowRight className="w-5 h-5" /></Link>
                </div>
              </div>
              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border">
                <h3 className="font-semibold text-2xl mb-4 text-foreground">Start with the decisions that affect scope</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3 items-start"><ClipboardCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" /><span>Will the existing footprint stay, or could plumbing and walls need to change?</span></li>
                  <li className="flex gap-3 items-start"><Bath className="w-6 h-6 text-primary flex-shrink-0 mt-1" /><span>Does the household need a tub, a more accessible shower, or both in different bathrooms?</span></li>
                  <li className="flex gap-3 items-start"><Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" /><span>Which finishes support the desired look while remaining practical to clean?</span></li>
                  <li className="flex gap-3 items-start"><Wrench className="w-6 h-6 text-primary flex-shrink-0 mt-1" /><span>Could ventilation, lighting, storage, or waterproofing need attention at the same time?</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12 text-center text-foreground">Choose the Right Bathroom Project</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-border rounded-2xl bg-secondary/30">
                <Bath className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Tub-to-Shower Conversion</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">A tub-to-shower conversion can make a frequently used bathroom easier to enter and more aligned with daily routines. Planning should account for the shower footprint, drain location, waterproofing, threshold, glass, niche or shelving, handheld controls, and whether another bathroom will retain a tub.</p>
                <Link href="/tub-to-shower-conversion/" className="text-primary font-medium hover:underline">Review tub-to-shower options →</Link>
              </div>
              <div className="p-8 border border-border rounded-2xl bg-secondary/30">
                <Home className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Walk-In and Accessible Showers</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">A lower-threshold or curbless shower may be considered when mobility, balance, or future ease of use matters. The design may include seating, grab-bar blocking, handheld controls, stronger lighting, non-slip surfaces, and useful clearances. The room and user needs determine the details.</p>
                <Link href="/handicap-accessible-bathroom/" className="text-primary font-medium hover:underline">Explore accessible bathroom planning →</Link>
              </div>
              <div className="p-8 border border-border rounded-2xl bg-secondary/30">
                <Wrench className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Master Bathroom Renovation</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">A master-bathroom remodel can coordinate the shower, tub, vanity, storage, lighting, flooring, ventilation, and finish palette. If the layout is changing, existing plumbing, electrical paths, wall conditions, and inspection needs should be part of the early discussion.</p>
                <Link href="/master-bathroom-remodel/" className="text-primary font-medium hover:underline">See master-bathroom remodeling →</Link>
              </div>
              <div className="p-8 border border-border rounded-2xl bg-secondary/30">
                <Droplets className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Guest, Hall, and Focused Repairs</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">A guest or hallway bathroom may need a durable tub, updated tile, better storage, a new vanity, improved lighting, or a focused shower-pan evaluation. A complete room renovation is not always the only useful starting point; the visible symptoms and underlying conditions should guide the scope.</p>
                <Link href="/guest-bathroom-remodeling/" className="text-primary font-medium hover:underline">Explore guest-bathroom remodeling →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-10 text-center text-foreground">What to Plan Before Demolition</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background rounded-2xl border border-border p-8">
                <h3 className="text-2xl font-semibold mb-4">Layout, plumbing, and electrical</h3>
                <p className="text-muted-foreground leading-relaxed">Keeping fixtures in their current positions may simplify a project, while moving drains, supply lines, walls, lighting, outlets, or ventilation may add design and inspection considerations. Discuss the desired layout early so the proposal reflects the work that matters to you.</p>
              </div>
              <div className="bg-background rounded-2xl border border-border p-8">
                <h3 className="text-2xl font-semibold mb-4">Waterproofing and ventilation</h3>
                <p className="text-muted-foreground leading-relaxed">A shower is more than its visible tile. Ask how the shower base, transitions, wall assembly, penetrations, slopes, and drainage will be addressed. Adequate ventilation and a practical cleaning plan also matter in a warm Arizona climate.</p>
              </div>
              <div className="bg-background rounded-2xl border border-border p-8">
                <h3 className="text-2xl font-semibold mb-4">Storage, lighting, and daily use</h3>
                <p className="text-muted-foreground leading-relaxed">Recessed niches, drawers, medicine cabinets, vanity outlets, layered lighting, mirrors, and towel locations should be considered alongside the finish selections. A beautiful room is more useful when the things you reach for each day have a logical place.</p>
              </div>
              <div className="bg-background rounded-2xl border border-border p-8">
                <h3 className="text-2xl font-semibold mb-4">Permits and community questions</h3>
                <p className="text-muted-foreground leading-relaxed">Permit requirements depend on the work proposed and existing conditions. Plumbing, electrical, structural, and layout changes may need different review than a limited cosmetic update. Confirm current requirements with the <a href="https://www.chandleraz.gov/government/departments/development-services/building-safety-plan-review-permits-and-inspections" target="_blank" rel="noreferrer" className="text-primary hover:underline">City of Chandler Building Safety department</a>, and check any applicable community or HOA process before ordering materials.</p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Link href="/bathroom-remodeling-permits-chandler/" className="text-primary font-bold hover:underline inline-flex items-center gap-2">Read the Chandler bathroom permit guide <ArrowRight className="w-5 h-5" /></Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-foreground">Materials and Maintenance in Chandler</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">Porcelain and ceramic tile, large-format surfaces, shower panels, grout, glass, quartz, cabinetry, and resilient flooring each have different installation and maintenance considerations. The best choice depends on the look, traffic, cleaning routine, budget, and installation conditions.</p>
                <p className="text-muted-foreground leading-relaxed mb-5">Homeowners may also want to plan for mineral residue, grout care, ventilation, drainage, and access for routine cleaning. No surface eliminates maintenance, so it is useful to ask how joints, edges, hardware, and transitions should be cleaned and inspected over time.</p>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  <Link href="/bathroom-tile-installation/" className="text-primary font-medium hover:underline">Bathroom tile installation →</Link>
                  <Link href="/bathroom-flooring-installation/" className="text-primary font-medium hover:underline">Bathroom flooring →</Link>
                  <Link href="/cabinet-countertop-installation/" className="text-primary font-medium hover:underline">Cabinets and countertops →</Link>
                  <Link href="/bathroom-vanity-installation/" className="text-primary font-medium hover:underline">Bathroom vanities →</Link>
                </div>
              </div>
              <div className="bg-secondary rounded-2xl border border-border p-8">
                <h3 className="text-2xl font-semibold mb-5">Useful finish questions</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3 items-start"><Droplets className="w-6 h-6 text-primary flex-shrink-0 mt-1" /><span>How will mineral residue affect the cleaning routine for glass, tile, and fixtures?</span></li>
                  <li className="flex gap-3 items-start"><Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" /><span>Which grout, caulk, edge, and transition details will be easiest to inspect?</span></li>
                  <li className="flex gap-3 items-start"><Home className="w-6 h-6 text-primary flex-shrink-0 mt-1" /><span>Do the vanity, countertop, mirror, lighting, and storage choices work together?</span></li>
                  <li className="flex gap-3 items-start"><Wrench className="w-6 h-6 text-primary flex-shrink-0 mt-1" /><span>Will ventilation and drainage support the selected materials and everyday use?</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-serif font-semibold mb-12 text-center text-foreground">A Practical Bathroom Remodeling Process</h2>
            <div className="space-y-8">
              {[
                ["1", "Consultation and measurements", "Discuss how the bathroom is used, what is not working, which fixtures should remain, and what changes you are considering. Measurements and existing-condition questions help define the project."],
                ["2", "Scope, selections, and proposal", "Compare layout options, surfaces, fixtures, storage, lighting, and accessibility details. A clear scope should identify assumptions, selections, allowances or exclusions where applicable, and the next decisions."],
                ["3", "Permit and ordering review", "If the proposed work requires permits or inspections, confirm the process and responsible parties. Product availability and lead times may affect when installation should begin."],
                ["4", "Protection, demolition, and rough-in", "Protect adjacent areas, remove the agreed scope, and evaluate conditions that become visible. Plumbing, electrical, framing, ventilation, and substrate work are addressed as the project requires."],
                ["5", "Waterproofing, finishes, and walkthrough", "Install the planned waterproofing, surfaces, fixtures, storage, lighting, and accessories. A final walkthrough can identify questions, care instructions, and any remaining punch-list items."],
              ].map(([number, title, description]) => (
                <div key={number} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">{number}</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">{title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-semibold mb-10 text-center text-foreground">Questions Chandler 85286 Homeowners Ask</h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <details key={faq.q} className="group bg-secondary/40 rounded-xl border border-border p-6">
                  <summary className="cursor-pointer list-none pr-8 text-xl font-semibold text-foreground relative">{faq.q}<span className="absolute right-0 top-0 text-primary transition-transform group-open:rotate-45">+</span></summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{renderFaqAnswer(faq.a)}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Plan Your Chandler 85286 Bathroom Remodel</h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">Bring your goals, photos, approximate measurements, and questions to the conversation. ARZ Home Remodeling can help clarify whether your project is a shower update, tub conversion, focused repair, or broader renovation and outline the next practical step.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href={`tel:${siteConfig.phoneClean}`} className="trackable-phone bg-white text-primary px-10 py-5 rounded-xl hover:bg-gray-100 transition shadow-2xl font-bold text-xl w-full sm:w-auto flex items-center justify-center gap-2"><Phone className="w-5 h-5" /> Call {siteConfig.phone}</a>
              <a href="/contact/" className="border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white/10 transition font-bold text-xl w-full sm:w-auto">Request a Consultation</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
