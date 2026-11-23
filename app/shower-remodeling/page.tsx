import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ContactSection from "@/components/home/contact-section";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema, PriceSchema, BreadcrumbSchema, LocalBusinessSchema } from "@/components/seo/json-ld";
import Link from "next/link";
import {
  Phone,
  Check,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  MapPin,
  ShowerHead,
  ShieldCheck,
  Wrench,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Shower Remodeling Chandler AZ | Tile, Glass & ARZ Home",
  description:
    "Shower remodeling in Chandler, AZ with tile, glass, fixtures, niches, and layout options. Discuss a practical update for your existing bathroom.",
  keywords: [
    "shower remodeling Chandler AZ",
    "walk-in shower company services",
    "walk-in shower remodeling Chandler",
    "shower replacement Chandler",
    "shower tile Chandler",
    "frameless glass shower Chandler",
    "curbless shower Chandler",
    "zero-threshold shower Chandler",
    "tub-to-shower conversion Chandler",
    "primary bathroom shower remodeling",
  ],
  openGraph: {
    title: "Shower Remodeling Chandler AZ | Tile, Glass & ARZ Home",
    description:
      "Shower remodeling in Chandler, AZ with tile, glass, fixtures, niches, and layout options. Discuss a practical update for your existing bathroom.",
    url: `${siteConfig.url}/shower-remodeling/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-shower.png`,
        width: 1200,
        height: 630,
        alt: "Shower Remodeling in Chandler, AZ - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shower Remodeling Chandler AZ | Tile, Glass & ARZ Home",
    description:
      "Shower remodeling in Chandler, AZ with tile, glass, fixtures, niches, and layout options. Discuss a practical update for your existing bathroom.",
    images: [`${siteConfig.url}/images/og-shower.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/shower-remodeling/`,
  },
};

const showerFaqs = [
  {
    question: "How much does a shower remodel cost in Chandler, AZ?",
    answer:
      "The cost depends on the shower size, existing conditions, demolition, waterproofing, tile, fixtures, glass, plumbing, drainage, storage, and overall project scope. A focused shower update can have a very different cost from a complete shower renovation.",
  },
  {
    question: "How long does a shower remodel take?",
    answer:
      "Project duration depends on the existing shower, project size, materials, demolition, plumbing requirements, waterproofing, tile installation, glass, and other work included in the remodeling scope.",
  },
  {
    question: "Can I replace my bathtub with a walk-in shower?",
    answer:
      "Yes. A tub-to-shower conversion can replace an existing bathtub with a shower designed around the available bathroom footprint.",
  },
  {
    question: "What is a curbless shower?",
    answer:
      "A curbless shower minimizes or eliminates the raised threshold between the bathroom floor and shower area. It can provide a clean appearance and easier shower entry when the existing construction allows it.",
  },
  {
    question: "Can you remodel a small shower?",
    answer:
      "Yes. A small shower can be improved with better storage, tile, fixtures, glass, layout adjustments, and other features selected around the available space.",
  },
  {
    question: "Can I add a shower niche?",
    answer:
      "Yes. Built-in shower niches can provide dedicated storage for soap, shampoo, and other products. The niche should be planned during the shower construction stage.",
  },
  {
    question: "Can I add a shower bench?",
    answer:
      "Depending on the available space and shower design, seating can be incorporated into the remodel.",
  },
  {
    question: "Is a walk-in shower the same as a curbless shower?",
    answer:
      'Not always. "Walk-in shower" generally describes a shower designed for easier entry, while "curbless" specifically refers to minimizing or eliminating the raised shower threshold. A walk-in shower can have a low threshold or other entry configuration.',
  },
  {
    question: "What type of tile is best for a shower?",
    answer:
      "The appropriate tile depends on the shower design, surface, maintenance requirements, appearance, and project conditions. Porcelain and ceramic tile are common options, but the right selection should be based on the specific application.",
  },
  {
    question: "Can shower remodeling improve accessibility?",
    answer:
      "Yes. Depending on the bathroom, accessibility improvements can include easier shower entry, curbless or low-threshold configurations, seating, handheld fixtures, practical controls, and other features.",
  },
  {
    question: "Do shower remodels in Chandler require permits?",
    answer:
      "Permit requirements depend on the scope of work. Projects involving plumbing, electrical, structural modifications, or other regulated work may have different requirements from cosmetic updates. Applicable requirements should be confirmed for the specific project.",
  },
];

const serviceListItems = [
  { name: "Walk-in shower remodeling", href: "/shower-remodeling/" },
  { name: "Custom shower tile installation", href: "/bathroom-tile-installation/" },
  { name: "Frameless glass shower enclosures", href: "/shower-remodeling/" },
  { name: "Semi-frameless shower glass", href: "/shower-remodeling/" },
  { name: "Curbless and zero-threshold showers", href: "/handicap-accessible-bathroom/" },
  { name: "Low-threshold shower entries", href: "/handicap-accessible-bathroom/" },
  { name: "Tub-to-shower conversions", href: "/tub-to-shower-conversion/" },
  { name: "Shower niches and built-in storage", href: "/shower-remodeling/" },
  { name: "Shower seating and benches", href: "/shower-remodeling/" },
  { name: "Updated shower fixtures", href: "/shower-remodeling/" },
  { name: "Handheld shower fixtures", href: "/shower-remodeling/" },
  { name: "Shower floor upgrades", href: "/bathroom-flooring-installation/" },
  { name: "Waterproofing and shower preparation", href: "/shower-remodeling/" },
  { name: "Primary bathroom shower renovations", href: "/master-bathroom-remodel/" },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation & Design Planning",
    body: "We discuss what you want to change, what is not working with the current shower, your preferred style, and the features you want in the finished space.",
  },
  {
    step: "02",
    title: "Existing Shower Evaluation",
    body: "The existing shower, tub, layout, plumbing, drainage, available space, surfaces, and surrounding bathroom are reviewed to determine the practical remodeling options.",
  },
  {
    step: "03",
    title: "Project Planning",
    body: "The shower configuration, materials, fixtures, storage, glass, tile, and other project details are organized around the planned scope.",
  },
  {
    step: "04",
    title: "Preparation",
    body: "Existing materials are removed as needed, the shower area is prepared, and required plumbing or construction adjustments are addressed.",
  },
  {
    step: "05",
    title: "Waterproofing & Installation",
    body: "The shower assembly is prepared, waterproofing is installed according to the selected system, and the planned tile, fixtures, storage, and other components are installed.",
  },
  {
    step: "06",
    title: "Glass & Finishing",
    body: "Selected shower glass, hardware, finishing components, and other details are completed.",
  },
  {
    step: "07",
    title: "Final Walkthrough",
    body: "The completed shower is reviewed with the homeowner to make sure the finished project matches the agreed scope.",
  },
];

const chandlerNeighborhoods = [
  "Dobson Ranch",
  "Warner Ranch",
  "Ocotillo",
  "Fulton Ranch",
  "Sun Lakes",
  "Chandler Heights",
  "Gila Springs",
  "Fox Crossing",
  "Cooper Commons",
  "Downtown Chandler",
];

const chandlerZipCodes = ["85224", "85225", "85226", "85248", "85249", "85286"];

export default function ShowerRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Services", url: `${siteConfig.url}/services/` },
          {
            name: "Shower Remodeling",
            url: `${siteConfig.url}/shower-remodeling/`,
          },
        ]}
      />
      <ServiceSchema
        serviceName="Shower Remodeling in Chandler, Arizona"
        serviceDescription="Shower remodeling in Chandler, AZ for walk-in showers, custom tile, glass enclosures, curbless designs, and tub-to-shower conversions."
        serviceUrl={`${siteConfig.url}/shower-remodeling/`}
      />
      <FAQSchema faqs={showerFaqs} />
      <PriceSchema
        serviceName="Shower Remodeling"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/shower-remodeling/`}
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* HERO SECTION */}
        <ServiceHero
          title="Shower Remodeling in Chandler, AZ"
          subtitle="Custom Shower Remodeling for Chandler Homes"
          description="An outdated shower can affect how comfortable, functional, and easy to maintain your bathroom feels every day. ARZ Home Remodeling provides shower remodeling in Chandler, AZ, with options designed around your existing space, preferred style, and everyday needs. Our shower remodeling services can include walk-in showers, custom shower tile, frameless and semi-frameless glass enclosures, curbless and low-threshold designs, shower seating, built-in niches, updated fixtures, and tub-to-shower conversions. Whether you're replacing an aging shower or planning a larger bathroom renovation, we help you choose improvements that fit your space and project goals."
          image="/images/hero/luxury-shower-remodel-chandler.avif"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Shower Remodeling", url: `${siteConfig.url}/shower-remodeling/` },
          ]}
        />

        {/* SECTION 2: SERVICES IN CHANDLER */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Comprehensive Shower Services
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Shower Remodeling Services in Chandler, AZ
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Every shower remodeling project is different. Some homeowners want to replace damaged tile and outdated fixtures, while others want to completely change the shower layout.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Depending on the existing bathroom and project scope, your shower remodel may include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {serviceListItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-secondary/60 border border-border p-4 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <Link href={item.href} className="text-foreground font-semibold hover:text-primary transition-colors text-base">
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                The right combination depends on the existing shower, available space, layout, drainage, materials, and how you want the finished bathroom to function.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: WALK-IN SHOWER REMODELING */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Open Layout & Practical Entry
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                Walk-In Shower Remodeling in Chandler
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A walk-in shower can make a bathroom feel more open while providing a practical alternative to an outdated bathtub or enclosed shower.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
                {[
                  "Custom tile walls",
                  "Tiled shower floors",
                  "Built-in niches",
                  "Shower seating",
                  "Handheld fixtures",
                  "Multiple shower heads",
                  "Frameless glass",
                  "Semi-frameless glass",
                  "Low-threshold entry",
                  "Curbless entry",
                ].map((feature, idx) => (
                  <div key={idx} className="bg-card border border-border p-3 rounded-xl text-center text-sm font-semibold text-foreground">
                    {feature}
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The shower should be planned around the existing bathroom rather than forcing a standard configuration into every space. For homeowners replacing an underused bathtub, a <Link href="/tub-to-shower-conversion/" className="text-primary font-bold hover:underline">tub-to-shower conversion</Link> can also create a walk-in shower while working within the existing bathroom footprint.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: CUSTOM SHOWER TILE & GLASS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                  Surfaces & Craftsmanship
                </span>
                <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">
                  Custom Shower Tile Installation
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  Tile is one of the most visible parts of a remodeled shower, but proper preparation beneath the tile is equally important.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  Shower tile can be used on shower walls, floors, niches, benches, accent walls, and transitional areas. Homeowners choose porcelain or ceramic tile in different sizes, patterns, textures, and finishes tailored to maintenance needs.
                </p>
                <Link href="/bathroom-tile-installation/" className="text-primary font-bold hover:underline inline-flex items-center text-base">
                  <span>Explore Bathroom Tile Installation</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div>
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                  Light & Openness
                </span>
                <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">
                  Frameless & Semi-Frameless Shower Glass
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  Glass allows light through the bathing area, creating a clean visual connection between the shower and the rest of the bathroom.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  Options include frameless or semi-frameless enclosures with clear, frosted, rain-pattern, or low-iron glass measured and planned around finished shower dimensions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: CURBLESS, TUB-TO-SHOWER & PRIMARY SHOWER */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                  Seamless Entry
                </span>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Curbless & Zero-Threshold Shower Remodeling
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  A curbless or zero-threshold shower minimizes the raised barrier between the bathroom floor and shower area. This provides a clean, open appearance while making shower entry easier.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  A successful curbless shower requires floor structure adjustments, proper drainage slope, and waterproofing. For accessibility improvements, combine with seating and handheld wands.
                </p>
                <Link href="/handicap-accessible-bathroom/" className="text-primary font-bold hover:underline inline-flex items-center text-base">
                  <span>Explore Accessible Bathroom Remodeling</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="border-t border-border pt-12">
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                  Space Optimization
                </span>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Tub-to-Shower Conversion in Chandler
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  If you rarely use your bathtub, converting it into a shower makes better use of the existing footprint. Tub removal, waterproofing, wall tile, floor slope, storage, and glass create a modern bathing area.
                </p>
                <Link href="/tub-to-shower-conversion/" className="text-primary font-bold hover:underline inline-flex items-center text-base">
                  <span>Explore Tub-to-Shower Conversion</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="border-t border-border pt-12">
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                  Primary Suite Upgrades
                </span>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Primary Bathroom Shower Remodeling
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  The shower is often one of the most important elements of a primary bathroom renovation. Larger shower footprints, custom tile, multiple fixtures, recessed niches, seating, and lighting create a functional daily retreat.
                </p>
                <Link href="/master-bathroom-remodel/" className="text-primary font-bold hover:underline inline-flex items-center text-base">
                  <span>Explore Primary Bathroom Remodeling</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: COMMON PROBLEMS WE SOLVE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block text-center">
                Resolving Everyday Issues
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
                Common Shower Problems We Help Solve
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Cracked or Damaged Tile",
                    desc: "Cracked tile indicates worn surfaces or foundation movement. Replacing damaged tile updates appearance while addressing underlying shower backing.",
                  },
                  {
                    title: "Worn Grout and Caulking",
                    desc: "Aging grout and sealant become hard to keep clean. Remodeling replaces old joints with modern stain-resistant grout formulations.",
                  },
                  {
                    title: "Outdated Shower Design",
                    desc: "Older showers feature small layouts, limited storage, and dated gold trim. A remodel modernizes finishes and storage.",
                  },
                  {
                    title: "Difficult Shower Entry",
                    desc: "High tub walls or raised curbs can be inconvenient. Low-threshold or curbless designs provide easier entry.",
                  },
                  {
                    title: "Limited Shower Storage",
                    desc: "Cluttered shower corners are solved with custom recessed tile niches built directly into the wall assembly.",
                  },
                  {
                    title: "Poor Shower Functionality",
                    desc: "Weak water pressure or outdated single-knob valves are upgraded with pressure-balanced thermostatic controls and handheld wands.",
                  },
                ].map((prob, idx) => (
                  <div key={idx} className="bg-secondary/60 border border-border p-6 rounded-2xl">
                    <h3 className="font-serif font-bold text-foreground text-xl mb-3 text-primary">{prob.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">{prob.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: WATERPROOFING & CONSTRUCTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Technical Quality & Moisture Protection
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Shower Waterproofing & Construction
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The visible tile and glass are only part of a properly planned shower. Proper waterproofing is essential because tile and grout alone are not a 100% moisture-barrier.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {[
                  "Substrate preparation",
                  "Waterproofing membranes",
                  "Schluter®-KERDI systems",
                  "Proper floor slope & drainage",
                  "Tile-setting mortars",
                  "Planned wall transitions",
                  "Recessed shower niches",
                  "Built-in seating",
                  "Stain-resistant grouts",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-card border border-border p-3 rounded-lg text-sm text-muted-foreground font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: UPGRADE OPTIONS & CHANDLER CLIMATE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                  Features & Upgrades
                </span>
                <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">
                  Shower Upgrade Options
                </h2>
                <ul className="space-y-3 text-muted-foreground text-base">
                  <li><strong className="text-foreground">Built-In Shower Niches:</strong> Recessed storage keeps bottles off the floor.</li>
                  <li><strong className="text-foreground">Shower Seating:</strong> Built-in tiled benches provide comfort while bathing.</li>
                  <li><strong className="text-foreground">Handheld Fixtures:</strong> Offers flexibility for targeted washing and cleaning.</li>
                  <li><strong className="text-foreground">Multiple Fixtures:</strong> Combination shower heads and rain heads.</li>
                  <li><strong className="text-foreground">Modern Controls:</strong> Pressure-balanced valves coordinate with hardware.</li>
                </ul>
              </div>

              <div>
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                  Local Conditions
                </span>
                <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">
                  Shower Remodeling for Chandler Homes
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  Chandler homes vary in age, size, and bathroom layout. Older homes may have outdated tub-shower combos, while newer homes need tile or glass refreshes.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Arizona's dry climate and mineral-heavy water conditions influence how homeowners choose shower surfaces, glass coatings, fixtures, and routine maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: PROCESS (01-07) */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Structured Execution
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Our Shower Remodeling Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {processSteps.map((stepItem, idx) => (
                <div key={idx} className="bg-card border border-border p-8 rounded-2xl shadow-sm relative overflow-hidden">
                  <span className="text-5xl font-serif font-black text-primary/15 absolute top-4 right-6 pointer-events-none">
                    {stepItem.step}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3 relative z-10">
                    {stepItem.step} — {stepItem.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed relative z-10">
                    {stepItem.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: SERVICE AREAS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Coverage Areas
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Shower Remodeling Throughout Chandler, AZ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-secondary/60 border border-border p-6 rounded-2xl">
                  <h3 className="font-serif font-bold text-foreground text-xl mb-4 text-primary">Chandler Neighborhoods</h3>
                  <div className="grid grid-cols-2 gap-2 text-muted-foreground text-base">
                    {chandlerNeighborhoods.map((n, i) => (
                      <span key={i} className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary shrink-0" />
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-secondary/60 border border-border p-6 rounded-2xl">
                  <h3 className="font-serif font-bold text-foreground text-xl mb-4 text-primary">Chandler ZIP Codes</h3>
                  <div className="grid grid-cols-2 gap-3 text-muted-foreground text-base font-semibold">
                    {chandlerZipCodes.map((z, i) => (
                      <span key={i} className="bg-card border border-border px-3 py-2 rounded-lg text-center">
                        ZIP {z}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 11: RELATED HUB LINKS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Explore Related Pages
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Related Remodeling Services
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-foreground text-lg mb-2">Chandler Remodeling Hub</h3>
                  <p className="text-muted-foreground text-xs mb-4">Main Chandler bathroom remodeling service hub.</p>
                </div>
                <Link href="/bathroom-remodeling-chandler-az/" className="text-primary font-bold hover:underline text-xs inline-flex items-center">
                  <span>Bathroom Remodeling in Chandler</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-foreground text-lg mb-2">Accessible Bathrooms</h3>
                  <p className="text-muted-foreground text-xs mb-4">Curbless showers & aging-in-place solutions.</p>
                </div>
                <Link href="/handicap-accessible-bathroom/" className="text-primary font-bold hover:underline text-xs inline-flex items-center">
                  <span>Accessible Bathroom Remodeling</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-foreground text-lg mb-2">Tub-to-Shower</h3>
                  <p className="text-muted-foreground text-xs mb-4">Replace tub with walk-in shower.</p>
                </div>
                <Link href="/tub-to-shower-conversion/" className="text-primary font-bold hover:underline text-xs inline-flex items-center">
                  <span>Tub-to-Shower Conversion</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-foreground text-lg mb-2">Primary Bath Remodel</h3>
                  <p className="text-muted-foreground text-xs mb-4">Primary suite shower transformations.</p>
                </div>
                <Link href="/master-bathroom-remodel/" className="text-primary font-bold hover:underline text-xs inline-flex items-center">
                  <span>Primary Bathroom Remodeling</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12: FAQS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block text-center">
                Frequently Asked Questions
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
                Frequently Asked Questions About Shower Remodeling in Chandler
              </h2>

              <div className="space-y-6">
                {showerFaqs.map((faq, idx) => (
                  <div key={idx} className="bg-secondary/60 border border-border p-6 rounded-2xl">
                    <h3 className="font-serif font-bold text-foreground text-xl mb-3 flex items-start gap-3">
                      <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed pl-9">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                Ready to Remodel Your Shower in Chandler?
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Whether you want to replace an outdated shower, convert a bathtub, create a walk-in shower, install custom tile and glass, or design a more accessible bathing area, the first step is understanding your existing space.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-extrabold text-lg px-8 py-6 rounded-xl shadow-lg">
                  <a href={`tel:${siteConfig.phoneClean}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now ({siteConfig.phone})
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 font-extrabold text-lg px-8 py-6 rounded-xl">
                  <Link href="/contact/">
                    Request a Free Shower Remodeling Estimate
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
