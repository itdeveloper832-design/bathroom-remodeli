import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema, PriceSchema, BreadcrumbSchema, LocalBusinessSchema } from "@/components/seo/json-ld";
import {
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  Droplets,
  CheckCircle2,
  ArrowRight,
  Phone,
  Check,
  Home,
  Sparkles,
  Layers,
  Wrench,
  Bath,
  Maximize2,
  Grid,
  HelpCircle,
  FileText,
  Compass,
  AlertCircle,
  Accessibility,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalTrust from "@/components/home/local-trust";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Apache Junction AZ | ARZ Home Remodeling",
  description:
    "Bathroom remodeling in Apache Junction, AZ for walk-in showers, tub conversions, tile, vanities, accessible upgrades, and complete bathroom renovations.",
  keywords: [
    "bathroom remodeling Apache Junction AZ",
    "bathroom remodel Apache Junction",
    "bathroom remodeling Apache Junction",
    "bathroom renovation Apache Junction",
    "bathroom remodeler Apache Junction",
    "bathroom remodeling contractor Apache Junction",
    "shower remodeling Apache Junction",
    "walk-in shower Apache Junction",
    "tub-to-shower conversion Apache Junction",
    "master bathroom remodel Apache Junction",
    "guest bathroom remodeling Apache Junction",
    "small bathroom remodeling Apache Junction",
    "accessible bathroom remodeling Apache Junction",
    "bathroom tile installation Apache Junction",
    "bathroom vanity installation Apache Junction",
    "bathroom remodel cost Apache Junction",
    "bathroom remodeling near Apache Junction",
  ],
  openGraph: {
    title: "Bathroom Remodeling Apache Junction AZ | ARZ Home Remodeling",
    description:
      "Bathroom remodeling in Apache Junction, AZ for walk-in showers, tub conversions, tile, vanities, accessible upgrades, and complete bathroom renovations.",
    url: `${siteConfig.url}/bathroom-remodeling-apache-junction-az/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Apache Junction Arizona - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Apache Junction AZ | ARZ Home Remodeling",
    description:
      "Bathroom remodeling in Apache Junction, AZ for walk-in showers, tub conversions, tile, vanities, accessible upgrades, and complete bathroom renovations.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-apache-junction-az/`,
  },
};

const apacheJunctionFaqs = [
  {
    question: "How much does a bathroom remodel cost in Apache Junction?",
    answer:
      "Bathroom remodeling costs vary depending on the existing bathroom, project size, materials, plumbing requirements, fixtures, tile, glass, and overall scope. An evaluation and defined project scope provide a more useful estimate than a generic price per square foot.",
  },
  {
    question: "How long does a bathroom remodel take?",
    answer:
      "The timeline depends on the size and complexity of the project, material availability, demolition, plumbing or electrical work, and other project requirements. A specific timeline can be discussed after evaluating the bathroom.",
  },
  {
    question: "Can you convert my bathtub into a walk-in shower?",
    answer:
      "Yes. A tub-to-shower conversion can replace an existing bathtub with a shower designed around the available space and your preferred features.",
  },
  {
    question: "Do you remodel small bathrooms?",
    answer:
      "Yes. Smaller bathrooms can often benefit from better fixture placement, space-efficient vanities, walk-in showers, storage niches, lighting, and carefully selected finishes.",
  },
  {
    question: "Can you remodel a primary bathroom?",
    answer:
      "Yes. A primary bathroom renovation can combine shower improvements, vanities, countertops, flooring, tile, lighting, fixtures, storage, and other upgrades.",
  },
  {
    question: "Can you make a bathroom more accessible?",
    answer:
      "Accessibility improvements can include low-threshold or curbless showers, seating, grab bars, handheld fixtures, slip-conscious flooring, and other features depending on the bathroom and homeowner's needs.",
  },
  {
    question: "Do bathroom remodels in Apache Junction require permits?",
    answer:
      "It depends on the scope of work. Projects involving plumbing, electrical, structural changes, or other regulated work may have permitting and inspection requirements.",
  },
  {
    question: "Do you serve Gold Canyon and nearby areas?",
    answer:
      "Service availability depends on the property and project. Contact us with your address to confirm whether your home is within our current service area.",
  },
];

const mainServices = [
  {
    title: "Walk-In Shower Remodeling",
    href: "/walk-in-showers/",
    description:
      "Replace an outdated tub or enclosed shower with a more comfortable walk-in shower designed around the available space.",
    features: [
      "Custom shower tile",
      "Frameless or semi-frameless glass",
      "Built-in niches",
      "Shower seating",
      "Handheld shower fixtures",
      "Low-threshold entries",
      "Curbless shower designs",
      "Modern shower controls",
    ],
    cta: "Explore Shower Remodeling →",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "If your bathtub is rarely used, converting it into a shower can make better use of the existing bathroom footprint.",
    detail:
      "A tub-to-shower conversion may include bathtub removal, plumbing preparation, waterproofing, tile installation, shower fixtures, storage, and a new glass enclosure.",
    cta: "Explore Tub-to-Shower Conversion →",
  },
  {
    title: "Primary Bathroom Remodeling",
    href: "/master-bathroom-remodel/",
    description:
      "Create a more comfortable primary bathroom with a coordinated combination of shower, vanity, tile, flooring, lighting, fixtures, and storage improvements.",
    detail:
      "The project can focus on updating the existing layout or making larger changes when the space and project requirements allow.",
    cta: "Explore Primary Bathroom Remodeling →",
  },
  {
    title: "Guest Bathroom Remodeling",
    href: "/guest-bathroom-remodeling/",
    description:
      "Guest bathrooms often benefit from practical improvements that make better use of limited space.",
    detail:
      "We can update the shower or tub, vanity, flooring, tile, lighting, fixtures, storage, and other finishes to create a cleaner and more functional bathroom.",
    cta: "Explore Guest Bathroom Remodeling →",
  },
  {
    title: "Small Bathroom Remodeling",
    href: "/small-bathroom-remodeling/",
    description:
      "A small bathroom doesn't necessarily need additional square footage to become more useful.",
    features: [
      "Space-efficient vanities",
      "Walk-in showers",
      "Recessed niches",
      "Better fixture placement",
      "Larger-format tile",
      "Improved lighting",
      "Practical storage",
    ],
    cta: "Explore Small Bathroom Remodeling →",
  },
  {
    title: "Accessible Bathroom Remodeling",
    href: "/ada-bathroom-remodeling/",
    description:
      "If entering or using your bathroom has become difficult, an accessibility-focused renovation can improve everyday comfort and usability.",
    features: [
      "Low-threshold showers",
      "Curbless entries",
      "Shower seating",
      "Grab bars & reinforced backing",
      "Handheld shower fixtures",
      "Slip-conscious flooring",
      "Improved clearances",
    ],
    cta: "Explore Accessible Bathrooms →",
  },
];

const upgradeCategories = [
  {
    title: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation/",
    description:
      "Update shower walls, bathroom floors, backsplashes, niches, and accent areas with tile selected for the design and intended use of the space.",
  },
  {
    title: "Bathroom Flooring",
    href: "/bathroom-flooring-installation/",
    description:
      "Bathroom flooring needs to perform well in a moisture-prone environment while complementing the rest of the room. We can help coordinate tile size, pattern, texture, grout, and transitions as part of the renovation.",
  },
  {
    title: "Bathroom Vanity Installation",
    href: "/bathroom-vanity-installation/",
    description:
      "A properly sized vanity can improve both storage and countertop space. Options may include single or double vanities, different cabinet configurations, countertops, sinks, hardware, and finishes.",
  },
  {
    title: "Shower Glass & Enclosures",
    href: "/walk-in-showers/",
    description:
      "Glass can help create a more open appearance while completing the finished shower design. Depending on the layout, options may include frameless and semi-frameless configurations.",
  },
];

const problemsSolved = [
  {
    title: "Outdated Bathtubs",
    description:
      "Large or rarely used bathtubs can take up valuable space. A tub-to-shower conversion can create a more practical bathing area.",
  },
  {
    title: "Worn Tile & Grout",
    description:
      "Cracked tile, deteriorated grout, or outdated finishes can make a bathroom difficult to maintain. Replacing these surfaces can refresh the room while improving its functionality.",
  },
  {
    title: "Limited Storage",
    description:
      "Poorly planned storage can leave countertops crowded and everyday items difficult to organize. Vanity upgrades, recessed niches, and other storage solutions can help.",
  },
  {
    title: "Difficult Shower Access",
    description:
      "High tub walls or traditional shower thresholds may be uncomfortable for some homeowners. A low-threshold or curbless shower can provide easier access when appropriate for the space.",
  },
  {
    title: "Outdated Fixtures",
    description:
      "Older faucets, shower controls, lighting, and other fixtures can affect both appearance and everyday convenience.",
  },
  {
    title: "Inefficient Bathroom Layout",
    description:
      "Sometimes the biggest improvement isn't a new finish — it's using the available space more effectively.",
  },
];

const popularDesignChoices = [
  "Warm neutral porcelain tile",
  "Large-format shower tile",
  "Natural stone-inspired finishes",
  "Modern vanities",
  "Quartz countertops",
  "Frameless glass",
  "Brushed or matte hardware",
  "Built-in shower storage",
  "Improved bathroom lighting",
];

const costTypes = [
  {
    title: "Guest Bathroom Update",
    desc: "May include selected improvements such as a vanity, fixtures, flooring, lighting, or finishes.",
    est: "Free Custom Estimate",
  },
  {
    title: "Tub-to-Shower Conversion",
    desc: "May include bathtub removal, preparation, waterproofing, tile, fixtures, storage, and glass.",
    est: "Free Custom Estimate",
  },
  {
    title: "Complete Bathroom Remodel",
    desc: "May combine shower or tub improvements with a new vanity, flooring, tile, lighting, fixtures, and other coordinated upgrades.",
    est: "Free Custom Estimate",
  },
  {
    title: "Primary Bathroom Remodel",
    desc: "A larger renovation may involve multiple areas of the bathroom and potentially more extensive layout or plumbing work.",
    est: "Free Custom Estimate",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    body: "We discuss what you want to change, what isn't working in your current bathroom, your design preferences, and your project goals.",
  },
  {
    step: "02",
    title: "Bathroom Evaluation",
    body: "We review the existing layout, shower or tub, vanity, flooring, plumbing, storage, and other areas that may affect the renovation.",
  },
  {
    step: "03",
    title: "Project Planning",
    body: "We define the remodeling scope and discuss materials, fixtures, finishes, layout considerations, and priorities.",
  },
  {
    step: "04",
    title: "Material Selection",
    body: "Choose the tile, vanity, countertop, shower fixtures, glass, flooring, hardware, and other finishes that fit your project.",
  },
  {
    step: "05",
    title: "Remodeling",
    body: "The existing materials are removed as required, the space is prepared, and the selected bathroom components are installed according to the project scope.",
  },
  {
    step: "06",
    title: "Final Walkthrough",
    body: "We review the completed bathroom and project scope with you and address applicable finishing items.",
  },
];

const serviceAreasList = [
  "Apache Junction",
  "Superstition Foothills",
  "Gold Canyon",
  "Lost Dutchman area",
];

const serviceZipCodes = ["85119", "85120"];

const galleryItems = [
  {
    id: 1,
    title: "Master Bath Remodel",
    category: "Full Renovation & Custom Walk-In Shower",
    before: "/images/projects/dobson-master-before.avif",
    after: "/images/projects/dobson-master-after.avif",
  },
  {
    id: 2,
    title: "Custom Vanity & Stone Installation",
    category: "Quartz Vanity & Tile Surround",
    before: "/images/projects/ocotillo-shower-before.avif",
    after: "/images/projects/ocotillo-shower-after.avif",
  },
  {
    id: 3,
    title: "Guest Bath Tub-to-Shower Conversion",
    category: "Low-Threshold Tile Shower",
    before: "/images/projects/sun-lakes-guest-before.avif",
    after: "/images/projects/sun-lakes-guest-after.avif",
  },
  {
    id: 4,
    title: "Primary Suite Transformation",
    category: "Custom Tile, Fixtures & Frameless Glass",
    before: "/images/projects/fulton-spa-before.avif",
    after: "/images/projects/fulton-spa-after.avif",
  },
];

function BeforeAfterCard({ item }: { item: typeof galleryItems[0] }) {
  return (
    <div className="gallery-card relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group">
      <Image
        src={item.after}
        alt={`${item.title} - After Remodel`}
        fill
        loading="lazy"
        decoding="async"
        quality={75}
        className="object-cover gallery-after"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <Image
        src={item.before}
        alt={`${item.title} - Before Remodel`}
        fill
        loading="lazy"
        decoding="async"
        quality={75}
        className="object-cover gallery-before"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-4 left-4 z-10">
        <span className="gallery-label-before px-3 py-1 text-xs font-semibold rounded-full bg-background/80 text-foreground">
          Before
        </span>
        <span className="gallery-label-after px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
          After
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
        <h3 className="font-serif text-xl font-semibold text-background">{item.title}</h3>
        <span className="text-background/70 text-sm">{item.category}</span>
      </div>
    </div>
  );
}

export default function ApacheJunctionPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          {
            name: "Bathroom Remodeling Apache Junction AZ",
            url: "https://arzhomeremodeling.com/bathroom-remodeling-apache-junction-az/",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Remodeling in Apache Junction, AZ"
        serviceDescription="Bathroom remodeling in Apache Junction, AZ for walk-in showers, tub conversions, tile, vanities, accessible upgrades, and complete bathroom renovations."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-apache-junction-az/`}
      />
      <FAQSchema faqs={apacheJunctionFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in Apache Junction, AZ"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-apache-junction-az/`}
      />
      <Header />
      <main>
        {/* HERO SECTION */}
        <ServiceHero
          subtitle="Quality Bathroom Remodeling for Apache Junction Homes"
          title="Bathroom Remodeling in Apache Junction, AZ"
          description="Upgrade an outdated bathroom into a space that's more comfortable, functional, and suited to your home. ARZ Home Remodeling provides bathroom remodeling in Apache Junction, AZ, including walk-in showers, tub-to-shower conversions, bathroom tile, vanities, flooring, accessibility upgrades, and complete bathroom renovations. Whether you're refreshing a guest bathroom, replacing an old bathtub, or planning a complete primary bathroom remodel, we build the project around your existing space, design preferences, and remodeling goals."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Apache Junction", url: `${siteConfig.url}/bathroom-remodeling-apache-junction-az/` },
          ]}
        />

        {/* SECTION 1: SERVICES SECTION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground">
                Bathroom Remodeling Services in Apache Junction
              </h2>
              <p className="text-muted-foreground text-lg">
                Every bathroom remodel has different requirements. Some homeowners need a focused upgrade, while others want to completely redesign the room.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {mainServices.map((svc) => (
                <div
                  key={svc.title}
                  className="bg-secondary rounded-2xl p-8 border border-border flex flex-col justify-between shadow-sm hover:border-primary/50 transition-all"
                >
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{svc.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{svc.description}</p>

                    {svc.features && (
                      <ul className="space-y-2 mb-4">
                        {svc.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-xs text-foreground font-medium">
                            <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {svc.detail && (
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{svc.detail}</p>
                    )}
                  </div>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline mt-auto pt-4 border-t border-border/60"
                  >
                    {svc.cta}
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <a href="#contact">
                  Request a Free Project Estimate
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 2: TILE, FLOORING & VANITY UPGRADES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Finishes &amp; Features</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-4 text-foreground">
                Bathroom Tile, Flooring &amp; Vanity Upgrades
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A bathroom renovation isn&apos;t limited to the shower.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {upgradeCategories.map((cat) => (
                <div key={cat.title} className="bg-background p-6 md:p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{cat.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cat.description}</p>
                  </div>
                  <Link href={cat.href} className="text-primary text-sm font-semibold hover:underline mt-auto">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: PROBLEMS WE HELP SOLVE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Practical Solutions</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-4 text-foreground">
                Bathroom Remodeling Problems We Help Solve
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Older bathrooms can create problems that go beyond outdated appearance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {problemsSolved.map((prob) => (
                <div key={prob.title} className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{prob.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{prob.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: REMODELING FOR APACHE JUNCTION HOMES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-foreground">
                Bathroom Remodeling for Apache Junction Homes
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Apache Junction homes range from established properties to newer residential construction, so the right remodeling approach can vary significantly from one bathroom to another.
              </p>
            </div>

            <div className="bg-background p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                Before recommending materials or finishes, we consider the existing layout, condition of the bathroom, plumbing locations, available space, storage requirements, and the goals of the homeowner.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                For shower and wet-area renovations, proper preparation and moisture management are particularly important. Tile, grout, waterproofing, drainage, and shower construction should all work together as part of the finished system.
              </p>
              <p className="text-foreground font-semibold text-base">
                The goal is simple: build a bathroom that looks good while remaining practical for everyday use.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <a href="#contact">Request an Estimate</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border bg-background">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Local Trust Badge */}
        <LocalTrust cityName="Apache Junction" />

        {/* SECTION 5: SUPERSTITION FOOTHILLS & NEARBY DESIGN STYLING */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Desert-Inspired Design</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-4 text-foreground">
                Bathroom Remodeling in the Superstition Foothills &amp; Nearby Areas
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Apache Junction homeowners have different design preferences depending on the property and surrounding community. Some homes benefit from warm, natural finishes that complement the desert environment, while others are better suited to clean contemporary designs.
              </p>
            </div>

            <div className="bg-secondary/60 rounded-2xl p-6 md:p-8 border border-border mb-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Popular remodeling choices can include:
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {popularDesignChoices.map((choice) => (
                  <div key={choice} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-foreground font-medium">{choice}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-muted-foreground text-sm">
              The design should ultimately reflect the homeowner&apos;s preferences rather than forcing every Apache Junction bathroom into the same style.
            </p>
          </div>
        </section>

        {/* SECTION 6: COST GUIDE */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Project Budgeting</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                How Much Does Bathroom Remodeling Cost in Apache Junction, AZ?
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                The cost of a bathroom remodel depends on the size and condition of the bathroom, materials selected, shower or bathtub configuration, plumbing requirements, cabinetry, tile, glass, fixtures, and overall project scope.
              </p>
              <p className="text-muted-foreground text-base mt-2 max-w-2xl mx-auto">
                A focused bathroom update can have a very different budget from a complete renovation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {costTypes.map((c) => (
                <div key={c.title} className="bg-background p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{c.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{c.desc}</p>
                  </div>
                  <span className="text-primary font-semibold text-sm pt-3 border-t border-border/60">{c.est}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed text-center mb-8">
              The most reliable way to determine your project&apos;s cost is to evaluate the existing bathroom and define the exact scope of work.
            </p>

            <div className="text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Request a Bathroom Remodeling Estimate →
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 7: PERMITTING & BUILDING GUIDELINES */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Building Guidelines</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-4 text-foreground">
                Do You Need a Permit for a Bathroom Remodel in Apache Junction?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Permit requirements depend on the type and scope of work.
              </p>
            </div>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-8 shadow-sm">
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                Cosmetic improvements may have different requirements from projects involving plumbing changes, electrical work, structural modifications, or other regulated construction.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                Before work begins, the applicable requirements should be confirmed for the specific project. If your renovation requires permitting or inspections, the project should be planned around the applicable local requirements.
              </p>
              <p className="text-foreground font-semibold text-base">
                Have questions about your project? Contact our team to discuss the scope of your bathroom remodel.
              </p>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <a href="#contact">Discuss Your Project Scope</a>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 8: PROCESS SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">How We Work</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground">
                Our Apache Junction Bathroom Remodeling Process
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {processSteps.map((step) => (
                <div key={step.step} className="bg-background rounded-2xl p-6 border border-border flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="text-4xl font-bold text-primary/25 font-mono">{step.step}</span>
                    <h3 className="font-semibold text-foreground mt-2 mb-2 text-lg">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: PORTFOLIO SHOWCASE */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <span className="text-primary text-sm font-medium tracking-wider uppercase">
                  Bathroom Remodeling Projects
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-4 text-foreground">
                  See Examples of Completed Remodeling Work
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Seeing examples of completed remodeling work can help you decide which improvements are right for your own bathroom. Our portfolio can include projects involving walk-in showers, tub-to-shower conversions, vanities, tile, and complete renovations.
                </p>
              </div>
              <div>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-background"
                >
                  <Link href="/gallery/">
                    View Our Bathroom Remodeling Gallery
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {galleryItems.map((item) => (
                <BeforeAfterCard key={item.id} item={item} />
              ))}
            </div>

            <p className="text-xs text-muted-foreground/80 italic text-center">
              The portfolio shown above includes projects from our broader East Valley service area.
            </p>
          </div>
        </section>

        {/* SECTION 10: SERVICE AREA & CONTEXTUAL NAVIGATION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling Areas We Serve
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling provides bathroom remodeling services in <strong className="font-semibold text-foreground">Apache Junction and nearby East Valley communities</strong>, subject to actual project availability.
            </p>

            <div className="flex flex-wrap justify-center gap-2.5 text-muted-foreground text-sm mb-6 max-w-2xl mx-auto">
              {serviceAreasList.map((area) => (
                <span key={area} className="bg-background px-3.5 py-1.5 rounded-full border border-border font-medium text-foreground text-sm shadow-xs">
                  {area}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2 text-muted-foreground text-xs mb-6">
              {serviceZipCodes.map((zip) => (
                <span key={zip} className="bg-background px-3 py-1 rounded-md text-foreground font-mono text-xs border border-border">
                  ZIP {zip}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground text-sm mb-8 leading-relaxed max-w-2xl mx-auto">
              If you&apos;re unsure whether we service your address, contact us and we&apos;ll confirm.
            </p>

            <div className="flex flex-wrap justify-center gap-5 pt-6 border-t border-border">
              <Link href="/shower-remodeling/" className="text-primary font-semibold hover:underline text-sm">
                Walk-In Showers →
              </Link>
              <Link href="/tub-to-shower-conversion/" className="text-primary font-semibold hover:underline text-sm">
                Tub-to-Shower Conversion →
              </Link>
              <Link href="/bathroom-remodeling-gold-canyon-az/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Gold Canyon AZ →
              </Link>
              <Link href="/bathroom-remodeling-mesa-az/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Mesa AZ →
              </Link>
              <Link href="/bathroom-remodeling-chandler-az/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Chandler AZ →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 11: FAQ SECTION */}
        <ServiceFAQ
          title="Bathroom Remodeling FAQs"
          description="Common questions about bathroom remodeling in Apache Junction, AZ."
          faqs={apacheJunctionFaqs}
        />

        {/* SECTION 12: TESTIMONIALS */}
        <Testimonials />

        {/* SECTION 13: LEADSMART FORM & CONTACT */}
        <ContactSection />

        {/* SECTION 14: FINAL CTA */}
        <ServiceCTA
          title="Ready to Remodel Your Bathroom in Apache Junction?"
          description="Whether you're replacing an outdated bathtub, updating a shower, improving accessibility, or planning a complete bathroom renovation, ARZ Home Remodeling can help you determine the right approach for your space."
        />
      </main>
      <Footer />
    </>
  );
}
