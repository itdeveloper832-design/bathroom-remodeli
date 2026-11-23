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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalTrust from "@/components/home/local-trust";

export const metadata: Metadata = {
  title: "Bathroom Remodeling in Queen Creek, AZ | ARZ Home Remodeling",
  description:
    "Quality bathroom remodeling in Queen Creek, AZ. Walk-in showers, tub-to-shower conversions, vanities, tile, primary & guest baths. Free estimate.",
  keywords: [
    "Bathroom Remodeling Queen Creek AZ",
    "bathroom remodel Queen Creek",
    "Queen Creek bathroom remodeling",
    "bathroom renovation Queen Creek",
    "bathroom remodeling services Queen Creek",
    "shower remodeling Queen Creek",
    "walk-in shower Queen Creek",
    "tub-to-shower conversion Queen Creek",
    "primary bathroom remodel Queen Creek",
    "guest bathroom remodeling Queen Creek",
    "bathroom tile and flooring",
  ],
  openGraph: {
    title: "Bathroom Remodeling in Queen Creek, AZ | ARZ Home Remodeling",
    description:
      "Quality bathroom remodeling in Queen Creek, AZ. Walk-in showers, tub-to-shower conversions, vanities, tile, primary & guest baths. Free estimate.",
    url: `${siteConfig.url}/bathroom-remodeling-queen-creek-az/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Queen Creek Arizona - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling in Queen Creek, AZ | ARZ Home Remodeling",
    description:
      "Quality bathroom remodeling in Queen Creek, AZ. Walk-in showers, tub-to-shower conversions, vanities, tile, primary & guest baths. Free estimate.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-queen-creek-az/`,
  },
};

const queenCreekFaqs = [
  {
    question: "How long does a bathroom remodel take in Queen Creek, AZ?",
    answer:
      "The timeline depends on the size and scope of the project, existing bathroom conditions, material availability, and whether plumbing or other construction changes are required.",
  },
  {
    question: "How much does bathroom remodeling cost in Queen Creek?",
    answer:
      "The cost depends on the bathroom size, existing layout, materials, fixtures, demolition, plumbing, waterproofing, and overall scope. An evaluation of the existing bathroom provides a more useful estimate than a generic price range.",
  },
  {
    question: "Can you remodel a bathroom without changing the layout?",
    answer:
      "Yes. Many bathroom renovations can be planned around the existing layout. Keeping plumbing and major fixture locations in place may help maintain a more focused project scope.",
  },
  {
    question: "Can you convert a bathtub into a shower?",
    answer:
      "Yes. A tub-to-shower conversion can replace an existing bathtub with a walk-in shower designed around the available bathroom space.",
  },
  {
    question: "Do you install walk-in showers in Queen Creek?",
    answer:
      "Yes. Walk-in shower projects can include tile, glass enclosures, niches, seating, updated fixtures, low-threshold entries, and other selected features.",
  },
  {
    question: "Do you remodel primary bathrooms?",
    answer:
      "Yes. Primary bathroom remodeling can include showers, vanities, countertops, flooring, tile, lighting, fixtures, storage, and other coordinated improvements.",
  },
  {
    question: "Do you remodel guest bathrooms?",
    answer:
      "Yes. Guest and hall bathroom renovations can focus on efficient layouts, practical storage, updated fixtures, tile, flooring, vanities, showers, tubs, and other finishes.",
  },
  {
    question: "Do you serve San Tan Valley?",
    answer:
      "We serve Queen Creek and selected nearby communities. Contact us with your property address so we can confirm service availability.",
  },
  {
    question: "Can you make an existing bathroom more accessible?",
    answer:
      "Accessibility improvements can include low-threshold or curbless showers, seating, grab bars, handheld fixtures, improved lighting, and other features depending on the bathroom and project requirements.",
  },
  {
    question: "Do bathroom remodeling projects require permits?",
    answer:
      "Permit requirements depend on the type and scope of work. Projects involving plumbing, electrical, structural modifications, or other regulated work may have different requirements. Applicable local requirements should be confirmed for the specific project.",
  },
];

const mainServices = [
  {
    title: "Walk-In Shower Remodeling",
    href: "/walk-in-showers/",
    description:
      "Replace an outdated tub or enclosed shower with a more open bathing area designed around the available space.",
    detail:
      "Depending on the project, a walk-in shower can include custom tile, built-in niches, shower seating, handheld fixtures, glass enclosures, low-threshold entries, or a curbless design. A properly planned shower can improve accessibility, storage, appearance, and everyday convenience without requiring a complete bathroom renovation.",
    cta: "Explore Shower Remodeling →",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "If your bathtub is rarely used, converting it into a shower can create a more practical bathing area.",
    detail:
      "A tub-to-shower conversion may include bathtub removal, surface preparation, plumbing adjustments when required, waterproofing, tile installation, shower fixtures, storage niches, and a new glass enclosure. The project can often be planned around the existing bathroom footprint while giving the room a more open and functional feel.",
    cta: "Explore Tub-to-Shower Conversion →",
  },
  {
    title: "Primary Bathroom Remodeling",
    href: "/master-bathroom-remodel/",
    description:
      "A primary bathroom should provide the comfort, storage, and functionality you need every day.",
    detail:
      "A primary bathroom remodel can combine improvements such as a redesigned shower, new vanity and countertop, bathroom flooring, custom tile, lighting, fixtures, storage, and other finish upgrades. Whether you prefer a simple modern design or a more detailed primary bathroom renovation, the project can be planned around your existing space and priorities.",
    cta: "Explore Primary Bathroom Remodeling →",
  },
  {
    title: "Guest Bathroom Remodeling",
    href: "/guest-bathroom-remodeling/",
    description:
      "Guest and hall bathrooms often need to make efficient use of limited space while remaining comfortable for household members and visitors.",
    detail:
      "A guest bathroom remodel may include a new shower or tub, vanity, countertop, flooring, tile, lighting, fixtures, storage, and coordinated finishes. We focus on practical layouts and durable materials that make the room easier to use and maintain.",
    cta: "Explore Guest Bathroom Remodeling →",
  },
  {
    title: "Bathroom Tile & Flooring",
    href: "/bathroom-tile-installation/",
    description:
      "Tile and flooring play an important role in both the appearance and maintenance of a bathroom.",
    detail:
      "We can coordinate shower tile, bathroom flooring, wall surfaces, backsplashes, grout, transitions, and other finishes to create a consistent design. Material selection can be based on the room's moisture exposure, maintenance requirements, design preferences, and everyday use.",
    cta: "Explore Bathroom Tile Installation →",
  },
  {
    title: "Bathroom Vanity Installation",
    href: "/bathroom-vanity-installation/",
    description:
      "A new vanity can improve storage, countertop space, organization, and the overall appearance of your bathroom.",
    detail:
      "Depending on the space, options may include single or double vanities, floating or freestanding designs, quartz or other countertop materials, new sinks, faucets, mirrors, and coordinated hardware.",
    cta: "Explore Bathroom Vanity Installation →",
  },
];

const scopeChecklist = [
  "Walk-in shower installation",
  "Tub-to-shower conversion",
  "Custom shower tile",
  "Bathroom flooring",
  "Vanity and countertop installation",
  "Shower glass and enclosures",
  "Updated plumbing fixtures",
  "Bathroom lighting",
  "Built-in shower storage",
  "Accessibility improvements",
  "Primary bathroom remodeling",
  "Guest bathroom remodeling",
  "Complete bathroom renovations",
];

const whatToRemodelFirst = [
  {
    title: "If Your Bathtub Is Rarely Used",
    body: "A tub-to-shower conversion may create a more convenient bathing area while making better use of the existing footprint.",
  },
  {
    title: "If Your Bathroom Feels Crowded",
    body: "Changing the vanity, shower configuration, storage, or fixture placement may improve the usable space without expanding the room.",
  },
  {
    title: "If the Bathroom Looks Outdated",
    body: "New tile, flooring, vanity, fixtures, lighting, and shower glass can modernize the room without necessarily changing the entire layout.",
  },
  {
    title: "If Accessibility Is Becoming Important",
    body: "A low-threshold or curbless shower, seating, grab bars, improved lighting, and better clearances can make the bathroom easier and safer to use.",
  },
  {
    title: "If Several Components Need Replacement",
    body: "A complete bathroom renovation may make more sense when the shower, vanity, flooring, fixtures, storage, and other major components all need attention.",
  },
];

const updateScopeItems = [
  "New vanity",
  "New countertop",
  "Updated fixtures",
  "Bathroom flooring",
  "New tile",
  "Improved lighting",
  "Shower glass",
  "Paint and finish improvements",
];

const completeRemodelScopeItems = [
  "Shower or tub replacement",
  "Plumbing modifications",
  "New vanity and countertop",
  "New flooring",
  "Wall and shower tile",
  "Lighting",
  "Fixtures",
  "Storage",
  "Accessibility improvements",
  "Waterproofing",
  "Coordinated finishing work",
];

const wetAreaConsiderations = [
  "Proper substrate preparation",
  "Waterproofing",
  "Shower drainage",
  "Tile installation",
  "Grout selection",
  "Shower glass",
  "Vanity materials",
  "Storage",
  "Fixture placement",
  "Ease of maintenance",
];

const materialsList = [
  {
    title: "Easy-to-Maintain Tile",
    description:
      "Porcelain and ceramic tile can provide durable surfaces for bathroom floors, shower walls, backsplashes, and other areas. Larger-format tile can also create a cleaner appearance while reducing the number of grout joints.",
  },
  {
    title: "Practical Shower Storage",
    description:
      "Recessed niches and integrated shelving can keep shampoo, soap, and other everyday items organized without taking up additional floor space.",
  },
  {
    title: "Bathroom Vanities",
    description:
      "Vanity size and configuration should match the available wall space, plumbing locations, storage requirements, and countertop needs.",
  },
  {
    title: "Shower Glass",
    description:
      "Glass enclosures can create a more open appearance and complement a range of bathroom designs. The appropriate configuration depends on the shower layout and homeowner preferences.",
  },
  {
    title: "Appropriate Flooring",
    description:
      "Bathroom flooring should be selected with moisture exposure, cleaning, appearance, and everyday use in mind.",
  },
];

const costFactors = [
  {
    name: "Bathroom Size",
    detail: "Larger spaces generally require more materials and installation work.",
  },
  {
    name: "Existing Conditions",
    detail:
      "The condition of the existing tile, flooring, shower, tub, walls, subfloor, and other components can affect preparation and demolition requirements.",
  },
  {
    name: "Plumbing Changes",
    detail:
      "Keeping the existing plumbing layout can have a different scope from relocating drains, supply lines, or fixtures.",
  },
  {
    name: "Shower Configuration",
    detail:
      "A straightforward shower replacement and a custom tiled shower with glass, niches, seating, and specialized features can have significantly different scopes.",
  },
  {
    name: "Material Selection",
    detail:
      "Tile, countertops, cabinetry, fixtures, hardware, flooring, and glass selections all influence the overall project.",
  },
  {
    name: "Accessibility Improvements",
    detail:
      "Curbless showers, seating, grab bars, improved clearances, and other accessibility features can require additional planning and construction.",
  },
  {
    name: "Overall Finish Level",
    detail:
      "A simple bathroom update and a highly customized primary bathroom renovation will naturally have different project requirements.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    body: "We discuss what you want to change, how the bathroom is currently used, your preferred style, and the main goals for the renovation.",
  },
  {
    step: "02",
    title: "In-Home Evaluation",
    body: "The existing bathroom is reviewed for layout, measurements, surfaces, plumbing, shower or tub configuration, storage, and other project considerations.",
  },
  {
    step: "03",
    title: "Project Planning",
    body: "The remodeling scope is organized around your priorities, including major changes, materials, fixtures, finishes, and potential construction requirements.",
  },
  {
    step: "04",
    title: "Material Selection",
    body: "Tile, flooring, vanities, countertops, shower fixtures, glass, hardware, lighting, and other finishes are selected according to the planned design.",
  },
  {
    step: "05",
    title: "Remodeling & Installation",
    body: "Existing materials are removed as required, the space is prepared, and the new bathroom components are installed according to the agreed project scope.",
  },
  {
    step: "06",
    title: "Final Walkthrough",
    body: "The completed bathroom is reviewed with you so the finished work and project scope can be confirmed.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Clear Project Scope",
    body: "We explain the planned work so you understand what is included in your bathroom renovation.",
  },
  {
    title: "Design Guidance",
    body: "We help you evaluate shower layouts, tile, vanities, storage, fixtures, finishes, and other design decisions.",
  },
  {
    title: "Written Project Proposal",
    body: "The project scope and expected costs are documented before construction begins.",
  },
  {
    title: "Practical Material Selection",
    body: "We help select materials based on appearance, intended use, maintenance, and the requirements of the bathroom.",
  },
  {
    title: "Organized Project Management",
    body: "The project is coordinated from consultation and material selection through installation and final walkthrough.",
  },
  {
    title: "Local Queen Creek Service",
    body: "We provide bathroom remodeling services for homeowners in Queen Creek and nearby communities, with project planning based around the property's existing space.",
  },
];

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

const queenCreekAreasList = [
  "Queen Creek",
  "Queen Creek Station",
  "Areas around Ellsworth Road",
  "Areas around Queen Creek Road",
  "San Tan Mountain area",
  "San Tan Valley",
];

const queenCreekZipCodes = ["85142", "85140"];

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

export default function QueenCreekBathroomRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          {
            name: "Bathroom Remodeling Queen Creek AZ",
            url: "https://arzhomeremodeling.com/bathroom-remodeling-queen-creek-az/",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Remodeling in Queen Creek, AZ"
        serviceDescription="Quality bathroom remodeling in Queen Creek, AZ including walk-in showers, tub-to-shower conversions, primary and guest bathroom renovations, tile, and vanities."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-queen-creek-az/`}
      />
      <FAQSchema faqs={queenCreekFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in Queen Creek, AZ"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-queen-creek-az/`}
      />
      <Header />
      <main>
        {/* HERO SECTION */}
        <ServiceHero
          subtitle="Quality Bathroom Remodeling for Queen Creek Homes"
          title="Bathroom Remodeling in Queen Creek, AZ"
          description="Upgrade your bathroom around the way you actually use it. ARZ Home Remodeling provides bathroom remodeling in Queen Creek, AZ, including walk-in showers, tub-to-shower conversions, primary and guest bathroom renovations, bathroom tile and flooring, vanity installation, accessibility improvements, and complete bathroom renovations. Whether you need a focused update or want to completely renovate the room, we plan the project around your existing layout, priorities, material preferences, and intended use."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Queen Creek", url: `${siteConfig.url}/bathroom-remodeling-queen-creek-az/` },
          ]}
        />

        {/* SECTION 1: BATHROOM REMODELING DESIGNED AROUND YOUR QUEEN CREEK HOME */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling Designed Around Your Queen Creek Home
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              A bathroom remodel should do more than make an old room look newer. It should solve the problems that affect your everyday routine.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              You may be dealing with an outdated bathtub, limited storage, worn tile, an inefficient vanity, poor lighting, an uncomfortable shower, or a bathroom layout that no longer works for your household.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Other homeowners may want a complete transformation with a new shower, vanity, flooring, tile, fixtures, lighting, storage, and coordinated finishes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling approaches each project by looking at the existing bathroom and understanding what you want to accomplish.
            </p>

            <div className="bg-secondary/60 rounded-2xl p-6 md:p-8 border border-border mb-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Depending on the project, your bathroom renovation may include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {scopeChecklist.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The goal is to create a bathroom that looks cohesive while remaining practical for everyday use.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <a href="#contact">
                  Request a Queen Creek Bathroom Remodeling Estimate
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call {siteConfig.phone}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 2: SERVICES SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground">
                Queen Creek Bathroom Remodeling Services
              </h2>
              <p className="text-muted-foreground text-lg">
                Every bathroom has different requirements. Some homeowners need one major improvement, while others want to renovate the entire room.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((svc) => (
                <div
                  key={svc.title}
                  className="bg-background rounded-2xl p-8 border border-border flex flex-col justify-between shadow-sm hover:border-primary/50 transition-all"
                >
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{svc.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{svc.description}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{svc.detail}</p>
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
          </div>
        </section>

        {/* SECTION 3: WHAT SHOULD YOU REMODEL FIRST? */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Project Planning</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-4 text-foreground">
                What Should You Remodel First?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Not every bathroom needs a complete renovation. The best starting point depends on what isn&apos;t working in your existing space.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {whatToRemodelFirst.map((item, idx) => (
                <div
                  key={item.title}
                  className={`bg-secondary p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between ${
                    idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground text-sm">
              The right approach depends on the existing bathroom, your goals, and the scope of work required.
            </p>
          </div>
        </section>

        {/* SECTION 4: BATHROOM UPDATE OR COMPLETE BATHROOM REMODEL? */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Scope &amp; Options</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-4 text-foreground">
                Bathroom Update or Complete Bathroom Remodel?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Not every bathroom requires the same level of construction. We help determine the appropriate scope based on the condition of the existing space and your remodeling goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Bathroom Update */}
              <div className="bg-background rounded-2xl p-8 border border-border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                    Bathroom Update
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    A smaller bathroom update may be appropriate when the existing layout works well but selected components need improvement. An update could include:
                  </p>
                  <ul className="space-y-2.5">
                    {updateScopeItems.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Complete Bathroom Remodel */}
              <div className="bg-background rounded-2xl p-8 border border-border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                    Complete Bathroom Remodel
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    A complete bathroom remodel may be more appropriate when multiple major components are outdated or the existing layout no longer meets your needs. A larger renovation may involve:
                  </p>
                  <ul className="space-y-2.5">
                    {completeRemodelScopeItems.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: DESIGNING BATHROOMS FOR QUEEN CREEK HOMES */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-foreground">
                Designing Bathrooms for Queen Creek Homes
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Queen Creek includes newer residential developments, established neighborhoods, and larger custom homes. Because bathrooms vary from one property to another, the remodeling approach should be based on the existing room rather than a one-size-fits-all design.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mt-3">
                Arizona bathrooms also need to handle regular water exposure, cleaning, everyday household use, and the conditions associated with the local environment.
              </p>
            </div>

            <div className="bg-secondary/60 rounded-2xl p-6 md:p-8 border border-border mb-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                For wet-area remodeling, we consider:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {wetAreaConsiderations.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-muted-foreground text-sm">
              The objective is to create a bathroom that looks good while remaining practical after the remodeling project is complete.
            </p>
          </div>
        </section>

        {/* SECTION 6: BATHROOM MATERIALS & FEATURES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Quality &amp; Durability</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-4 text-foreground">
                Bathroom Materials &amp; Features
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {materialsList.map((mat, idx) => (
                <div
                  key={mat.title}
                  className={`bg-background p-6 rounded-2xl border border-border shadow-sm ${
                    idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{mat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{mat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Trust Badge */}
        <LocalTrust cityName="Queen Creek" />

        {/* SECTION 7: HOW MUCH DOES BATHROOM REMODELING COST IN QUEEN CREEK? */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Pricing &amp; Investment</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                How Much Does Bathroom Remodeling Cost in Queen Creek?
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                The cost of a <strong className="font-semibold text-foreground">bathroom remodel in Queen Creek, AZ</strong> depends on the existing bathroom and the scope of work.
              </p>
              <p className="text-muted-foreground text-base mt-2 max-w-2xl mx-auto">
                A focused shower or vanity upgrade will have different requirements from a complete primary bathroom renovation. Several factors can affect the final project cost.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {costFactors.map((factor) => (
                <div key={factor.name} className="bg-secondary p-5 rounded-2xl border border-border shadow-xs">
                  <h3 className="font-semibold text-foreground text-base mb-1">{factor.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{factor.detail}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed text-center mb-8">
              For that reason, a generic square-foot price isn&apos;t a reliable way to estimate an individual bathroom. An evaluation of the existing space provides a more useful basis for determining the remodeling scope and expected cost.
            </p>

            <div className="text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Request a Queen Creek Bathroom Remodeling Estimate →
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 8: OUR QUEEN CREEK BATHROOM REMODELING PROCESS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Step-By-Step</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground">
                Our Queen Creek Bathroom Remodeling Process
              </h2>
              <p className="text-muted-foreground text-lg">
                A clear remodeling process helps homeowners understand what happens before construction begins and what to expect throughout the project.
              </p>
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

        {/* SECTION 9: WHY QUEEN CREEK HOMEOWNERS CHOOSE ARZ */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose ARZ</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-4 text-foreground">
                Why Queen Creek Homeowners Choose ARZ Home Remodeling
              </h2>
              <p className="text-muted-foreground text-lg">
                Choosing a remodeling company involves more than selecting materials. Planning, communication, workmanship, and project organization also matter.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUsPoints.map((pt) => (
                <div key={pt.title} className="p-6 bg-secondary rounded-2xl border border-border flex flex-col justify-between shadow-sm">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">{pt.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pt.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: PORTFOLIO SHOWCASE */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <span className="text-primary text-sm font-medium tracking-wider uppercase">
                  Our Bathroom Remodeling Portfolio
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-4 text-foreground">
                  See Our Bathroom Remodeling Work
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  View examples of bathroom renovations and upgrades completed throughout Chandler and the surrounding East Valley. Our work can include shower renovations, vanity upgrades, tile installations, flooring improvements, and complete bathroom transformations.
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
                    View Full Bathroom Remodeling Gallery
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

        {/* SECTION 11: SERVICE AREA & FOCUSED INTERNAL LINKS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling Service Area in Queen Creek
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling provides bathroom remodeling services throughout <strong className="font-semibold text-foreground">Queen Creek, Arizona</strong>, and nearby areas.
            </p>

            <div className="flex flex-wrap justify-center gap-2.5 text-muted-foreground text-sm mb-6 max-w-2xl mx-auto">
              {queenCreekAreasList.map((area) => (
                <span key={area} className="bg-secondary px-3.5 py-1.5 rounded-full border border-border font-medium text-foreground text-sm shadow-xs">
                  {area}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2 text-muted-foreground text-xs mb-6">
              {queenCreekZipCodes.map((zip) => (
                <span key={zip} className="bg-secondary px-3 py-1 rounded-md text-foreground font-mono text-xs border border-border">
                  ZIP {zip}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground text-sm mb-8 leading-relaxed max-w-2xl mx-auto">
              Service availability can depend on the property location and project requirements. If you&apos;re unsure whether your home is within our service area, contact us with your address and we&apos;ll confirm availability.
            </p>

            {/* Focused hierarchy internal links */}
            <div className="flex flex-wrap justify-center gap-5 pt-6 border-t border-border">
              <Link href="/walk-in-showers/" className="text-primary font-semibold hover:underline text-sm">
                Shower Remodeling →
              </Link>
              <Link href="/tub-to-shower-conversion/" className="text-primary font-semibold hover:underline text-sm">
                Tub-to-Shower Conversion →
              </Link>
              <Link href="/master-bathroom-remodel/" className="text-primary font-semibold hover:underline text-sm">
                Primary Bathroom Remodeling →
              </Link>
              <Link href="/bathroom-vanity-installation/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Vanity Installation →
              </Link>
              <Link href="/bathroom-remodeling-chandler-az/" className="text-primary font-semibold hover:underline text-sm">
                Chandler Bathroom Remodeling →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 12: FAQ SECTION */}
        <ServiceFAQ
          title="Frequently Asked Questions"
          description="Get answers to common questions about bathroom remodeling in Queen Creek, AZ."
          faqs={queenCreekFaqs}
        />

        {/* SECTION 13: TESTIMONIALS */}
        <Testimonials />

        {/* SECTION 14: LEADSMART FORM & CONTACT ESTIMATE */}
        <ContactSection />

        {/* SECTION 15: FINAL CTA */}
        <ServiceCTA
          title="Ready to Remodel Your Queen Creek Bathroom?"
          description="Upgrade your bathroom around your home's existing space, your daily routine, and the improvements that matter most to you. Whether you're planning a bathroom remodel in Queen Creek, replacing an outdated tub, upgrading a shower, installing a new vanity, or renovating the entire room, ARZ Home Remodeling can help you plan the next step."
        />
      </main>
      <Footer />
    </>
  );
}
