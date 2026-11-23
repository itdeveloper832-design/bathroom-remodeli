import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, DollarSign, Droplets, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Bathroom Remodeling in Dobson Place, Chandler AZ | ARZ",
  description: "Plan a bathroom remodel in Dobson Place, Chandler with practical guidance for showers, tubs, tile, vanities, permits, and accessibility. Contact ARZ.",
  alternates: {
    canonical: `${siteConfig.url}/chandler-az-dobson-place/`,
  },
  openGraph: {
    title: "Bathroom Remodeling in Dobson Place, Chandler AZ | ARZ",
    description: "Plan a bathroom remodel in Dobson Place, Chandler with practical guidance for showers, tubs, tile, vanities, permits, and accessibility.",
    url: `${siteConfig.url}/chandler-az-dobson-place/`,
    type: "website",
  },
};

const faqs = [
  {
    q: "What bathroom remodeling services are available in Dobson Place?",
    a: "A project in Dobson Place may focus on a shower, tub-to-shower conversion, bathtub, vanity, tile, flooring, lighting, accessibility improvements, or a more complete bathroom renovation. The right scope depends on the existing room, the household’s priorities, and how the space is used.",
  },
  {
    q: "How much does a bathroom remodel cost in Dobson Place?",
    a: "There is no useful single price for every Dobson Place bathroom. Cost depends on room size, demolition, layout or plumbing changes, waterproofing, fixtures, cabinetry, tile, glass, lighting, and finish selections. A consultation can define the scope before a project-specific estimate is prepared.",
  },
  {
    q: "How long does a bathroom remodel take in Dobson Place?",
    a: "Timing varies with the size of the room, demolition findings, layout changes, selections, inspections, custom materials, and product availability. A focused shower or surface update can follow a different sequence from a complete renovation, so the scope should be clarified before a schedule is discussed.",
  },
  {
    q: "Do I need a permit or association review for a bathroom remodel in Dobson Place?",
    a: "Permit and association questions depend on the proposed work and property. Plumbing, electrical, structural, or layout changes may require review, while some finish-focused updates may follow a different path. Homeowners should confirm current City of Chandler requirements and check applicable Dobson Place association documents before work begins.",
  },
  {
    q: "Which materials are practical for an everyday Chandler bathroom?",
    a: "Homeowners often compare porcelain or ceramic tile, grout systems, shower surfaces, glass, vanity materials, countertops, lighting, and ventilation based on cleaning, daily use, appearance, and maintenance. The best combination depends on the room, household needs, and design priorities rather than one universal material package.",
  },
  {
    q: "Can a Dobson Place bathroom remodel include accessibility improvements?",
    a: "Yes. An accessibility discussion may include a lower-threshold shower, handheld fixture, grab-bar backing, clearer circulation, better lighting, seating, and storage that is easier to reach. The appropriate details should be planned around the user’s mobility needs and the existing room dimensions.",
  },
  {
    q: "Can I remodel a bathroom while living in my Dobson Place home?",
    a: "Many homeowners plan remodeling around an occupied home, but the practical approach depends on how many bathrooms are available, the project scope, dust and noise controls, material delivery, and the sequence of work. Discussing household routines early can help identify useful access and scheduling questions.",
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
      "@id": `${siteConfig.url}/chandler-az-dobson-place/#service`,
      name: "Bathroom Remodeling in Dobson Place, Chandler",
      serviceType: "Bathroom remodeling",
      description: "Bathroom remodeling services and planning guidance for homeowners in Dobson Place, Chandler, Arizona, including showers, tubs, tile, vanities, flooring, lighting, accessibility, and complete renovations.",
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: "ARZ Home Remodeling",
        telephone: siteConfig.phone,
        url: siteConfig.url,
      },
      areaServed: {
        "@type": "Place",
        name: "Dobson Place, Chandler, Arizona",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chandler",
          addressRegion: "AZ",
          postalCode: "85224",
          addressCountry: "US",
        },
      },
      url: `${siteConfig.url}/chandler-az-dobson-place/`,
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/chandler-az-dobson-place/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteConfig.url}/chandler-az-dobson-place/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
        { "@type": "ListItem", position: 2, name: "Chandler Bathroom Remodeling", item: `${siteConfig.url}/bathroom-remodeling-chandler-az/` },
        { "@type": "ListItem", position: 3, name: "Dobson Place Bathroom Remodeling", item: `${siteConfig.url}/chandler-az-dobson-place/` },
      ],
    },
  ],
};

const serviceLinks = [
  ["Shower remodeling", "/shower-remodeling/", "Compare shower layouts, surfaces, storage, and fixtures."],
  ["Tub-to-shower conversion", "/tub-to-shower-conversion/", "Consider access, drainage, waterproofing, and whether another bathroom should retain a tub."],
  ["Master bathroom remodel", "/master-bathroom-remodel/", "Coordinate the primary shower, tub, vanity, lighting, storage, and finish palette."],
  ["Guest bathroom remodeling", "/guest-bathroom-remodeling/", "Plan a practical refresh for a frequently used guest or family bathroom."],
  ["Accessible bathroom planning", "/handicap-accessible-bathroom/", "Review lower-threshold entry, controls, backing, seating, clear paths, and reach."],
  ["Tile and flooring", "/bathroom-tile-installation/", "Compare wet-area tile, grout, flooring, traction, appearance, and maintenance."],
  ["Vanities and countertops", "/cabinet-countertop-installation/", "Plan storage, counter space, cabinetry, cleaning access, and daily function."],
  ["Bathroom lighting", "/bathroom-lighting-installation/", "Address mirror visibility, task and ambient lighting, and moisture management."],
] as const;

export default function DobsonPlaceBathroomRemodelingPage() {
  const phoneHref = `tel:${siteConfig.phoneClean}`;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-24 md:pt-28 lg:pt-32 pb-16 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6"><MapPin className="w-4 h-4" /> Dobson Place · Chandler, AZ 85224</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">Bathroom Remodeling in Dobson Place, Chandler</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">Planning a bathroom remodel in Dobson Place? ARZ Home Remodeling helps Chandler homeowners compare shower updates, tub conversions, primary- and guest-bath renovations, tile, vanities, lighting, accessibility, and complete-room changes around the way the home is used.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href={phoneHref} className="trackable-phone call-to-action bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition shadow-lg font-bold text-lg w-full sm:w-auto flex items-center justify-center gap-2"><Phone className="w-5 h-5" /> Call {siteConfig.phone}</a>
              <Link href="/contact/" className="bg-secondary text-foreground border border-border px-8 py-4 rounded-xl hover:bg-secondary/80 transition shadow-sm font-bold text-lg w-full sm:w-auto">Request a Consultation</Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Scope-led planning</div>
              <div className="flex items-center gap-2"><Droplets className="w-5 h-5 text-primary" /> Shower and full-room options</div>
              <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> North-central Chandler service area</div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-foreground">Plan a bathroom remodel around your Dobson Place home</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Dobson Place is an established north-central Chandler community in the 85224 service area, near Dobson Road and Warner Road, the Dobson Ranch Golf Course, and local retail centers. The official community site places it near the Chandler/Gilbert border, so the exact property address and any applicable association documents should be confirmed before planning work. Its varied home styles and existing conditions make a room-specific review more useful than assuming every bathroom needs the same package or finish schedule.</p>
                  <p>Start by listing the problems you want to solve: a dated tub, difficult shower entry, limited vanity storage, worn tile, poor lighting, ventilation concerns, or a layout that no longer fits the household. That list helps separate a focused update from a broader renovation.</p>
                  <p>If your property is subject to association rules, confirm any current review or approval process before work begins. Permit questions also depend on the proposed plumbing, electrical, structural, and layout changes; because Dobson Place is near the Chandler/Gilbert border, confirm the authority for the exact address and review the <a href="https://www.chandleraz.gov/government/departments/development-services/building-safety-plan-review-permits-and-inspections" target="_blank" rel="noreferrer" className="text-primary hover:underline">City of Chandler permit information</a> when applicable.</p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4"><Link href="/bathroom-remodeling-chandler-az/" className="text-primary font-bold hover:underline flex items-center gap-2">Explore Chandler remodeling <ArrowRight className="w-5 h-5" /></Link><Link href="/contact/" className="text-primary font-bold hover:underline flex items-center gap-2">Discuss your bathroom <ArrowRight className="w-5 h-5" /></Link></div>
              </div>
              <div className="bg-background p-8 rounded-2xl shadow-sm border border-border">
                <h3 className="font-semibold text-2xl mb-4 text-foreground">Questions that affect scope</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3 items-start"><ChevronRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" /><span>Will the existing footprint stay, or could plumbing, walls, or electrical paths need to change?</span></li>
                  <li className="flex gap-3 items-start"><ChevronRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" /><span>Does the household need a tub, a more accessible shower, or both in different bathrooms?</span></li>
                  <li className="flex gap-3 items-start"><ChevronRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" /><span>Which finishes support the desired look while remaining practical to clean?</span></li>
                  <li className="flex gap-3 items-start"><ChevronRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" /><span>Could ventilation, lighting, storage, waterproofing, or clearances need attention at the same time?</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background"><div className="container mx-auto px-4 max-w-5xl"><h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12 text-center text-foreground">Choose the right bathroom project</h2><div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-border rounded-2xl bg-secondary/30"><Droplets className="w-10 h-10 text-primary mb-4" /><h3 className="text-2xl font-semibold mb-3">Shower or tub update</h3><p className="text-muted-foreground mb-4 leading-relaxed">Replace a dated surround, improve entry, add storage, or compare a tub-to-shower conversion with keeping a tub for bathing. The shower footprint, drain, waterproofing, threshold, glass, and daily maintenance should be part of the early conversation.</p><Link href="/shower-remodeling/" className="text-primary font-medium hover:underline">Review shower remodeling options →</Link></div>
          <div className="p-8 border border-border rounded-2xl bg-secondary/30"><MapPin className="w-10 h-10 text-primary mb-4" /><h3 className="text-2xl font-semibold mb-3">Guest bathroom refresh</h3><p className="text-muted-foreground mb-4 leading-relaxed">Coordinate a vanity, countertop, lighting, flooring, paint-ready surfaces, and easy-clean shower or tub finishes for a high-use room. Storage and traffic flow matter as much as the finish palette.</p><Link href="/guest-bathroom-remodeling/" className="text-primary font-medium hover:underline">See guest-bathroom remodeling →</Link></div>
          <div className="p-8 border border-border rounded-2xl bg-secondary/30"><ShieldCheck className="w-10 h-10 text-primary mb-4" /><h3 className="text-2xl font-semibold mb-3">Primary bathroom renovation</h3><p className="text-muted-foreground mb-4 leading-relaxed">Plan a coordinated combination of shower, tub, vanity storage, tile, lighting, ventilation, and circulation. If the footprint changes, existing plumbing, electrical paths, wall conditions, and inspection questions should be identified before selections are finalized.</p><Link href="/master-bathroom-remodel/" className="text-primary font-medium hover:underline">Explore primary-bath remodeling →</Link></div>
          <div className="p-8 border border-border rounded-2xl bg-secondary/30"><DollarSign className="w-10 h-10 text-primary mb-4" /><h3 className="text-2xl font-semibold mb-3">Accessible or aging-in-place changes</h3><p className="text-muted-foreground mb-4 leading-relaxed">Consider a lower-threshold shower, handheld controls, grab-bar backing, seating, stronger lighting, clear paths, reachable storage, and surfaces that support confident daily use. The appropriate choices depend on the user and room dimensions.</p><Link href="/handicap-accessible-bathroom/" className="text-primary font-medium hover:underline">Review accessible bathroom planning →</Link></div>
        </div></div></section>

        <section className="py-16 md:py-24 bg-secondary"><div className="container mx-auto px-4 max-w-5xl"><div className="grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-primary font-semibold mb-3">Planning before selections</p><h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-5">The decisions that shape a bathroom remodel</h2><p className="text-muted-foreground leading-relaxed mb-6">The visible finishes matter, but they are only one part of the project. A useful plan considers the condition of the existing room, water and electrical connections, ventilation, waterproofing, door and fixture clearances, storage, and the maintenance you are willing to handle.</p><p className="text-muted-foreground leading-relaxed">If plumbing and walls remain largely in place, the project may focus on fixtures and finishes. If the shower footprint, plumbing, electrical circuits, or walls change, the scope can become more involved. Identify that difference before selecting products.</p></div><div className="space-y-4">{["Shower, tub, or both: choose around bathing habits, access, and available floor area.", "Vanity and storage: plan drawers, counter space, medicine storage, and cleaning access together.", "Tile and grout: compare appearance with wet-area use, traction, maintenance, and future repairs.", "Lighting and ventilation: address mirror visibility, task lighting, moisture management, and comfort.", "Layout and systems: identify whether plumbing, electrical, walls, or the subfloor need closer review."].map((item, index) => <div key={item} className="flex gap-4 rounded-lg border border-border p-5"><span className="text-primary font-serif font-bold text-xl">0{index + 1}</span><p className="text-muted-foreground leading-relaxed">{item}</p></div>)}</div></div></div></section>

        <section className="py-16 md:py-24 bg-background"><div className="container mx-auto px-4 max-w-5xl"><div className="grid lg:grid-cols-2 gap-12"><div><h2 className="text-3xl font-serif font-semibold text-foreground mb-5">Materials for an everyday Chandler bathroom</h2><p className="text-muted-foreground leading-relaxed mb-5">Homeowners commonly compare porcelain and ceramic tile, grout systems, shower wall surfaces, glass, countertops, and vanity materials based on appearance and upkeep. Easier-clean surfaces may be worth considering in wet areas, but performance depends on the product, installation, ventilation, cleaning habits, and design goal.</p><p className="text-muted-foreground leading-relaxed">Lighting, exhaust ventilation, storage, and hardware deserve the same attention as tile. Those details affect how the room feels in daily use and how manageable it is to maintain.</p><div className="mt-6 flex flex-wrap gap-x-6 gap-y-3"><Link href="/bathroom-tile-installation/" className="text-primary font-semibold hover:underline">Compare bathroom tile →</Link><Link href="/bathroom-flooring-installation/" className="text-primary font-semibold hover:underline">Review bathroom flooring →</Link><Link href="/cabinet-countertop-installation/" className="text-primary font-semibold hover:underline">Plan cabinetry and countertops →</Link><Link href="/bathroom-vanity-installation/" className="text-primary font-semibold hover:underline">Review vanity installation →</Link><Link href="/bathroom-remodeling-permits-chandler/" className="text-primary font-semibold hover:underline">Review Chandler permits →</Link></div></div><div><h2 className="text-3xl font-serif font-semibold text-foreground mb-5">Accessibility can be planned into the room</h2><p className="text-muted-foreground leading-relaxed mb-5">If the bathroom needs to support changing mobility, accessibility should be considered while the layout and walls are being planned. Discuss shower entry, handheld controls, grab-bar backing, seating, lighting, clear paths, fixture reach, and storage height around the user.</p><Link href="/handicap-accessible-bathroom/" className="text-primary font-semibold inline-flex items-center gap-2 hover:underline">Review accessible bathroom options <ArrowRight className="w-4 h-4" /></Link></div></div></div></section>

        <section className="py-16 md:py-24 bg-secondary"><div className="container mx-auto px-4 max-w-5xl"><h2 className="text-3xl md:text-4xl font-serif font-semibold mb-10 text-foreground">Bathroom remodeling services for Dobson Place homeowners</h2><div className="grid md:grid-cols-2 gap-5">{serviceLinks.map(([title, href, description]) => <div key={title} className="rounded-xl border border-border bg-background p-6"><h3 className="font-semibold text-xl text-foreground mb-2">{title}</h3><p className="text-muted-foreground leading-relaxed mb-4">{description}</p><Link href={href} className="text-primary font-semibold inline-flex items-center gap-2 hover:underline">Learn about {title.toLowerCase()} <ArrowRight className="w-4 h-4" /></Link></div>)}</div></div></section>

        <section className="py-16 md:py-24 bg-background"><div className="container mx-auto px-4 max-w-3xl mb-10"><p className="text-primary font-semibold mb-3">From first conversation to final review</p><h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-5">A clear bathroom remodeling process</h2><p className="text-muted-foreground leading-relaxed">The sequence should make decisions visible before work begins. The exact schedule depends on scope, selections, inspections, and existing conditions.</p></div><div className="container mx-auto px-4 max-w-5xl"><div className="grid md:grid-cols-5 gap-4">{[["01", "Consultation", "Discuss the room, household needs, priorities, and possible scope."], ["02", "Scope and selections", "Compare layout, shower or tub choices, materials, storage, lighting, and accessibility details."], ["03", "Preparation", "Confirm site planning, material readiness, and permit or association questions where applicable."], ["04", "Installation", "Complete the planned demolition, preparation, installation, and finish work in sequence."], ["05", "Final review", "Walk through the completed work, care questions, and any remaining items." ]].map(([number, title, description]) => <div key={number} className="rounded-xl border border-border p-5 bg-secondary/40"><span className="text-primary font-serif font-bold text-2xl">{number}</span><h3 className="font-semibold text-lg mt-3 mb-2">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{description}</p></div>)}</div></div></section>

        <section className="py-16 md:py-24 bg-secondary"><div className="container mx-auto px-4 max-w-4xl"><div className="text-center mb-10"><h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">Questions about remodeling in Dobson Place</h2><p className="text-muted-foreground">The right answer depends on the room and proposed scope. These are the planning questions homeowners often need to resolve.</p></div><div className="space-y-4">{faqs.map((faq) => <details key={faq.q} className="rounded-xl border border-border bg-background p-6 group"><summary className="cursor-pointer font-semibold text-foreground pr-6">{faq.q}</summary><p className="text-muted-foreground leading-relaxed mt-4">{faq.a}</p></details>)}</div></div></section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground"><div className="container mx-auto px-4 max-w-4xl text-center"><h2 className="text-3xl md:text-4xl font-serif font-semibold mb-5">Ready to plan your Dobson Place bathroom?</h2><p className="text-primary-foreground/85 text-lg leading-relaxed mb-8">Bring your bathroom’s daily problems, desired changes, approximate dimensions, and finish ideas to the conversation. ARZ Home Remodeling can help you clarify the next useful step for a shower update, tub conversion, guest bath, primary bath, accessible bathroom, or complete renovation.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><a href={phoneHref} className="trackable-phone call-to-action bg-background text-foreground px-8 py-4 rounded-xl hover:bg-background/90 transition shadow-lg font-bold text-lg flex items-center justify-center gap-2"><Phone className="w-5 h-5" /> Call {siteConfig.phone}</a><Link href="/contact/" className="border border-primary-foreground/40 px-8 py-4 rounded-xl hover:bg-primary-foreground/10 transition font-bold text-lg">Request a Consultation</Link><Link href="/" className="border border-primary-foreground/40 px-8 py-4 rounded-xl hover:bg-primary-foreground/10 transition font-bold text-lg">Return to ARZ Home</Link></div></div></section>
      </main>
      <Footer />
    </>
  );
}
