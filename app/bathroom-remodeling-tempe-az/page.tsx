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
  GraduationCap,
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
  title: "Bathroom Remodeling Tempe AZ | Local Planning Guide",
  description:
    "Bathroom remodeling for Tempe, AZ homes with showers, tubs, tile, vanities, flooring, and complete updates. Request an estimate.",
  keywords: [
    "bathroom remodeling Tempe AZ",
    "bathroom remodel Tempe AZ",
    "bathroom renovation Tempe",
    "bathroom remodeler Tempe AZ",
    "walk-in shower remodeling Tempe",
    "tub-to-shower conversion Tempe",
    "primary bathroom remodel Tempe",
    "guest bathroom remodeling Tempe",
    "small bathroom remodeling Tempe",
    "bathroom vanity installation Tempe",
    "bathroom tile installation Tempe",
    "accessible bathroom remodeling Tempe",
  ],
  openGraph: {
    title: "Bathroom Remodeling Tempe AZ | Local Planning Guide",
    description:
      "Bathroom remodeling for Tempe, AZ homes with showers, tubs, tile, vanities, flooring, and complete updates. Request an estimate.",
    url: `${siteConfig.url}/bathroom-remodeling-tempe-az/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Tempe Arizona - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Tempe AZ | Local Planning Guide",
    description:
      "Bathroom remodeling for Tempe, AZ homes with showers, tubs, tile, vanities, flooring, and complete updates. Request an estimate.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-tempe-az/`,
  },
};

const tempeFaqs = [
  {
    question: "How much does a bathroom remodel cost in Tempe, AZ?",
    answer:
      "The cost depends on the bathroom's existing condition, project scope, material selections, plumbing requirements, and installation work. A custom evaluation is more useful than a generic square-foot estimate.",
  },
  {
    question: "How long does a bathroom remodel take in Tempe?",
    answer:
      "The timeline depends on the scope of work, material availability, existing conditions, and whether plumbing or other construction changes are required. A focused shower or vanity project may require less work than a complete bathroom renovation.",
  },
  {
    question: "Can you convert my bathtub into a walk-in shower?",
    answer:
      "Yes. A tub-to-shower conversion can replace an existing bathtub with a shower designed around the available footprint, including tile, waterproofing, fixtures, storage, and glass where appropriate.",
  },
  {
    question: "Can you remodel only my shower?",
    answer:
      "Yes. A bathroom project does not necessarily require a complete renovation. A shower can be remodeled independently depending on the existing conditions and desired improvements.",
  },
  {
    question: "Do you remodel primary bathrooms in Tempe?",
    answer:
      "Yes. Primary bathroom renovations can include showers, vanities, countertops, flooring, tile, lighting, fixtures, storage, seating, and other coordinated improvements.",
  },
  {
    question: "Do you remodel small bathrooms?",
    answer:
      "Yes. Smaller bathrooms can benefit from space-efficient vanities, walk-in showers, recessed storage, coordinated tile, practical fixtures, and improved lighting.",
  },
  {
    question: "Can you make a bathroom easier to access?",
    answer:
      "Depending on the layout, accessibility-focused improvements can include low-threshold or curbless showers, seating, handheld fixtures, grab-bar preparation, and practical clearances.",
  },
  {
    question: "Do bathroom remodels in Tempe require permits?",
    answer:
      "Permit requirements depend on the work being performed. The City of Tempe's residential plan-review process states that renovations require plan approval before permits can be issued.",
  },
  {
    question: "What areas of Tempe do you serve?",
    answer:
      "We serve homeowners throughout Tempe, including South Tempe, Warner Ranch, Shalimar, Downtown Tempe, North Tempe, Alta Mira, Optimist Park, Tally Ho, and surrounding areas.",
  },
];

const scopeChecklist = [
  "Walk-in shower installation",
  "Tub-to-shower conversion",
  "Custom shower tile",
  "Bathroom flooring",
  "Vanity replacement",
  "Countertop installation",
  "Shower niches and storage",
  "Shower seating",
  "Modern plumbing fixtures",
  "Bathroom lighting",
  "Glass shower enclosures",
  "Accessibility improvements",
  "Complete bathroom renovation",
];

const mainServices = [
  {
    title: "Walk-In Shower Remodeling",
    href: "/shower-remodeling/",
    description:
      "Replace an outdated tub or enclosed shower with a more open bathing area designed around your bathroom's available space.",
    detail:
      "A walk-in shower can include custom tile, built-in niches, shower seating, handheld fixtures, low-threshold entry, curbless design, and a glass enclosure.",
    cta: "Explore Shower Remodeling →",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "If your bathtub is rarely used, converting the existing tub area into a shower can make the bathroom more practical for everyday use.",
    detail:
      "A tub-to-shower conversion in Tempe can include bathtub removal, surface preparation, waterproofing, tile installation, fixtures, storage, flooring adjustments, and a custom glass enclosure.",
    cta: "Explore Tub-to-Shower Conversion →",
  },
  {
    title: "Primary Bathroom Remodeling",
    href: "/master-bathroom-remodel/",
    description:
      "A primary bathroom should provide comfortable bathing space, practical storage, and finishes that complement the rest of the home.",
    detail:
      "A primary bathroom renovation may combine a walk-in shower, double vanity, countertop, flooring, custom tile, shower niche, seating, glass enclosure, lighting, fixtures, and other improvements. The project can focus on a specific area or combine several upgrades into a complete renovation.",
    cta: "Explore Primary Bathroom Remodeling →",
  },
  {
    title: "Guest Bathroom Remodeling",
    href: "/guest-bathroom-remodeling/",
    description:
      "Guest bathrooms often need to make the most of a smaller footprint.",
    detail:
      "A guest bathroom renovation can include a new vanity, shower or tub, tile, flooring, fixtures, lighting, storage, and coordinated finishes. The goal is to improve the room without adding unnecessary changes.",
    cta: "Explore Guest Bathroom Remodeling →",
  },
  {
    title: "Small Bathroom Remodeling",
    href: "/small-bathroom-remodeling/",
    description:
      "Small bathrooms require careful planning because every fixture, cabinet, and section of floor space matters.",
    features: [
      "Compact vanity configurations",
      "Walk-in showers",
      "Recessed shower niches",
      "Space-efficient storage",
      "Updated fixtures",
      "Coordinated tile",
      "Improved lighting",
      "Practical bathroom layouts",
    ],
    cta: "Explore Small Bathroom Remodeling →",
  },
  {
    title: "Accessible Bathroom Remodeling",
    href: "/handicap-accessible-bathroom/",
    description:
      "Bathroom accessibility can become increasingly important as homeowners' needs change.",
    features: [
      "Low-threshold shower entries",
      "Curbless showers",
      "Shower seating",
      "Handheld shower fixtures",
      "Grab-bar preparation",
      "Slip-conscious flooring",
      "Improved lighting",
      "More practical fixture placement",
    ],
    cta: "Explore Handicap Accessible Bathroom Remodeling →",
  },
];

const showerFeatures = [
  {
    title: "Curbless & Low-Threshold Showers",
    description:
      "Reduce the step into the shower with a low-threshold or curbless design where the existing bathroom conditions allow.",
  },
  {
    title: "Custom-Tiled Showers",
    description:
      "Use tile to create a coordinated shower design with different sizes, patterns, textures, and accent details.",
  },
  {
    title: "Built-In Shower Niches",
    description:
      "Recessed niches provide convenient storage without requiring a freestanding shelf on the shower floor.",
  },
  {
    title: "Shower Seating",
    description:
      "A built-in bench or seat can provide additional comfort and functionality when appropriate for the layout.",
  },
  {
    title: "Glass Shower Enclosures",
    description:
      "A glass enclosure can visually open the bathroom while allowing the shower tile and design details to remain visible.",
  },
];

const tileCoordinatedAreas = [
  "Shower walls",
  "Shower floors",
  "Bathroom floors",
  "Niches",
  "Backsplashes",
  "Accent walls",
  "Tub surrounds",
];

const vanityBenefits = [
  "More cabinet storage",
  "Additional counter space",
  "Updated sinks",
  "Modern hardware",
  "Better room proportions",
  "Improved organization",
  "A refreshed appearance",
];

const whatRemodelImproves = [
  {
    title: "An Unused Bathtub",
    description:
      "If your household rarely uses the tub, replacing it with a walk-in shower can create a more practical bathing area.",
  },
  {
    title: "An Outdated Shower",
    description:
      "Modernize an aging shower with updated tile, storage, fixtures, waterproofing, seating, and glass.",
  },
  {
    title: "Limited Storage",
    description:
      "Improve organization with vanity cabinets, drawers, recessed niches, and other storage solutions.",
  },
  {
    title: "An Aging Vanity",
    description:
      "Replace an outdated vanity with a configuration that provides better storage, counter space, and functionality.",
  },
  {
    title: "Dated Tile",
    description:
      "Refresh shower walls, floors, backsplashes, or accent areas with coordinated new tile.",
  },
  {
    title: "Poor Bathroom Layout",
    description:
      "Review the placement of the shower, vanity, storage, fixtures, and other elements to determine whether the existing space can be used more effectively.",
  },
  {
    title: "Difficult Shower Access",
    description:
      "Consider a low-threshold or curbless shower, seating, handheld fixtures, and other accessibility-focused improvements.",
  },
];

const designIdeas = [
  {
    title: "Replace an Unused Tub With a Walk-In Shower",
    description:
      "Converting a rarely used bathtub can create a more practical bathing area while updating the overall appearance of the room.",
  },
  {
    title: "Add a Built-In Shower Niche",
    description:
      "A recessed niche provides storage for everyday shower products without taking up valuable floor space.",
  },
  {
    title: "Upgrade the Vanity",
    description:
      "A new vanity can improve storage, counter space, organization, and the appearance of the entire bathroom.",
  },
  {
    title: "Coordinate Shower & Floor Tile",
    description:
      "Using complementary tile throughout the room can create a more cohesive design.",
  },
  {
    title: "Improve Bathroom Lighting",
    description:
      "Updated vanity, ceiling, and shower-area lighting can improve visibility and make the bathroom more comfortable to use.",
  },
  {
    title: "Add a Glass Shower Enclosure",
    description:
      "Glass can create a more open visual connection between the shower and the rest of the bathroom.",
  },
];

const costTypes = [
  {
    title: "Walk-In Shower Remodel",
    desc: "May include shower preparation, waterproofing, tile, fixtures, storage, seating, and glass.",
    est: "Free Custom Estimate",
  },
  {
    title: "Tub-to-Shower Conversion",
    desc: "May include bathtub removal, preparation, plumbing adjustments when necessary, waterproofing, tile, fixtures, storage, and a glass enclosure.",
    est: "Free Custom Estimate",
  },
  {
    title: "Guest Bathroom Remodel",
    desc: "May combine a vanity, shower or tub, tile, flooring, fixtures, lighting, and finishing updates.",
    est: "Free Custom Estimate",
  },
  {
    title: "Primary Bathroom Remodel",
    desc: "May combine shower improvements, vanity and countertop installation, flooring, tile, lighting, fixtures, storage, and other upgrades.",
    est: "Free Custom Estimate",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    body: "We discuss what you want to change, how you use the bathroom, your preferred design style, and the type of renovation you are considering.",
  },
  {
    step: "02",
    title: "In-Home Evaluation",
    body: "We review the existing bathroom layout, shower or tub, vanity, flooring, storage, fixtures, and other relevant conditions.",
  },
  {
    step: "03",
    title: "Remodeling Plan",
    body: "The project is organized around your priorities, available space, existing conditions, and desired improvements.",
  },
  {
    step: "04",
    title: "Material Selection",
    body: "Select tile, flooring, vanity, countertop, fixtures, glass, hardware, and other finishes for the planned design.",
  },
  {
    step: "05",
    title: "Remodeling & Installation",
    body: "Existing materials are removed as needed, the space is prepared, and the planned improvements are installed.",
  },
  {
    step: "06",
    title: "Final Walkthrough",
    body: "The completed bathroom is reviewed after installation so the finished project can be checked against the planned scope.",
  },
];

const showerPreparationItems = [
  "Shower substrate preparation",
  "Waterproofing",
  "Drainage preparation",
  "Shower niches",
  "Shower seating",
  "Tile installation",
  "Grout and sealant",
  "Fixture installation",
  "Glass enclosure installation",
];

const materialsConsiderations = [
  {
    title: "Easy-to-Maintain Tile",
    description: "Select surfaces that fit your cleaning preferences and the overall design.",
  },
  {
    title: "Appropriate Grout",
    description: "Grout selection should take into account the tile, location, expected use, and maintenance requirements.",
  },
  {
    title: "Durable Flooring",
    description: "Choose flooring that works with the bathroom's moisture exposure and overall design.",
  },
  {
    title: "Practical Shower Glass",
    description: "Glass selection can influence both the appearance and maintenance requirements of the shower enclosure.",
  },
  {
    title: "Suitable Countertops",
    description: "Countertop materials should complement the vanity, tile, fixtures, and intended use of the bathroom.",
  },
  {
    title: "Functional Storage",
    description: "Niches, vanity drawers, cabinets, and other storage features can help keep frequently used items organized.",
  },
];

const tempeNeighborhoods = [
  {
    name: "South Tempe",
    desc: "Homeowners can update bathrooms with walk-in showers, tub-to-shower conversions, primary bathroom renovations, tile, flooring, vanities, and storage improvements.",
  },
  {
    name: "Warner Ranch",
    desc: "Bathroom renovations can modernize existing showers, vanities, tile, fixtures, flooring, and storage while working with the home's existing layout.",
  },
  {
    name: "Shalimar",
    desc: "Homeowners can improve older bathroom finishes, storage, shower areas, vanities, and overall functionality.",
  },
  {
    name: "Downtown Tempe",
    desc: "Established properties may benefit from practical bathroom improvements that modernize the space without unnecessary changes.",
  },
  {
    name: "North Tempe",
    desc: "Bathroom projects can range from focused shower and vanity upgrades to broader renovations.",
  },
  {
    name: "Alta Mira",
    desc: "Homeowners can improve bathroom storage, finishes, shower configurations, and vanity areas according to the available space.",
  },
  {
    name: "Optimist Park",
    desc: "Bathroom remodeling can focus on updating aging fixtures and finishes or creating a more functional layout.",
  },
  {
    name: "Tally Ho",
    desc: "Renovations can include shower upgrades, vanity replacement, flooring, tile, lighting, storage, and other bathroom improvements.",
  },
];

const asuPracticalImprovements = [
  "Compact vanities",
  "Walk-in showers",
  "Updated tile",
  "Durable flooring",
  "Improved storage",
  "Updated fixtures",
  "Better lighting",
  "Space-efficient layouts",
];

const whyChooseUsPoints = [
  {
    title: "Bathroom-Focused Remodeling",
    body: "Our work focuses on bathroom renovations ranging from individual shower and vanity upgrades to larger bathroom transformations.",
  },
  {
    title: "Practical Design",
    body: "We plan improvements around how the bathroom is actually used, available space, storage needs, and homeowner priorities.",
  },
  {
    title: "Clear Project Scope",
    body: "The remodeling plan is organized around the work being requested and the existing conditions of the bathroom.",
  },
  {
    title: "Local Tempe Service",
    body: "We work with homeowners throughout Tempe and surrounding East Valley communities.",
  },
  {
    title: "Attention to Detail",
    body: "Tile layout, shower transitions, niches, vanity installation, fixtures, glass, flooring, and finishing details all contribute to the final result.",
  },
  {
    title: "Organized Project Management",
    body: "The project moves through consultation, planning, material selection, installation, and final walkthrough in a structured process.",
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

export default function TempeBathroomRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          {
            name: "Bathroom Remodeling Tempe AZ",
            url: "https://arzhomeremodeling.com/bathroom-remodeling-tempe-az/",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Remodeling in Tempe, Arizona"
        serviceDescription="Bathroom remodeling in Tempe, AZ for walk-in showers, tub-to-shower conversions, primary and guest baths, vanities, tile, and complete bathroom renovations."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-tempe-az/`}
      />
      <FAQSchema faqs={tempeFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in Tempe AZ"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-tempe-az/`}
      />
      <Header />
      <main>
        {/* HERO SECTION */}
        <ServiceHero
          subtitle="Bathroom Remodeling in Tempe, AZ"
          title="Bathroom Remodeling in Tempe, AZ"
          description="Create a bathroom that fits your home, your routine, and the way you actually use the space. ARZ Home Remodeling provides bathroom remodeling in Tempe, AZ, from focused shower and vanity upgrades to complete bathroom renovations. We help homeowners improve outdated bathrooms with walk-in showers, tub-to-shower conversions, custom tile, bathroom flooring, vanities, storage, lighting, fixtures, and accessibility-focused features. Whether you want to replace an unused bathtub, modernize a primary bathroom, improve a guest bath, or completely renovate the room, we start with the existing space and build the project around your priorities."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Tempe", url: `${siteConfig.url}/bathroom-remodeling-tempe-az/` },
          ]}
        />

        {/* SECTION 1: BATHROOM REMODELING FOR TEMPE HOMEOWNERS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling for Tempe Homeowners
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              A bathroom can look outdated without needing a completely different layout.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              An unused bathtub may take up valuable space. An older shower may have limited storage. A vanity may no longer provide enough counter or cabinet space. Worn flooring, dated tile, poor lighting, or aging fixtures can also make an otherwise comfortable bathroom harder to use.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A well-planned <strong className="font-semibold text-foreground">bathroom remodel in Tempe, AZ</strong> can address these problems while improving the appearance and functionality of the room. Homeowners replacing an unused bathtub can learn more about our{" "}
              <Link href="/tub-to-shower-conversion/" className="text-primary font-semibold hover:underline">
                tub-to-shower conversion
              </Link>{" "}
              process.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling works with homeowners on both individual upgrades and larger renovations. Depending on the existing bathroom and your goals, your project may include:
            </p>

            <div className="bg-secondary/60 rounded-2xl p-6 md:p-8 border border-border mb-8">
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
              The right scope depends on your home, existing plumbing, available space, material selections, and the improvements you want to make.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <a href="#contact">Get a Free Bathroom Remodeling Estimate</a>
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

        {/* SECTION 2: LOCAL BATHROOM RENOVATIONS THROUGHOUT TEMPE */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Local Bathroom Renovations Throughout Tempe
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Tempe includes a wide range of residential properties, from established neighborhoods and older homes to newer developments and properties near Downtown Tempe and Arizona State University.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Because every bathroom is different, remodeling decisions should start with the existing room rather than a one-size-fits-all design.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              An older bathroom may benefit from replacing worn finishes and improving storage. A smaller bathroom may need a more efficient vanity and shower layout. A primary bathroom may have enough space for a larger shower, double vanity, additional storage, and upgraded finishes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our approach is straightforward: understand what is not working, identify the improvements that matter most, and create a remodeling plan around the space available.
            </p>

            <div className="bg-background p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                We serve homeowners throughout:
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-muted-foreground text-sm font-medium">
                {[
                  "South Tempe",
                  "Warner Ranch",
                  "Shalimar",
                  "Downtown Tempe",
                  "North Tempe",
                  "Alta Mira",
                  "Optimist Park",
                  "Tally Ho",
                ].map((nh) => (
                  <div key={nh} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground">{nh}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border">
                As well as other surrounding Tempe neighborhoods.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: SERVICES */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground">
                Our Tempe Bathroom Remodeling Services
              </h2>
              <p className="text-muted-foreground text-lg">
                We provide bathroom remodeling options for primary bathrooms, guest bathrooms, smaller spaces, and individual shower or vanity upgrades.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </section>

        {/* SECTION 4: SHOWER REMODELING FOR TEMPE BATHROOMS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Shower Features</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-4 text-foreground">
                Shower Remodeling for Tempe Bathrooms
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The shower is often one of the most important parts of a bathroom renovation. A properly planned shower can improve the room&apos;s appearance, storage, accessibility, and everyday comfort.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {showerFeatures.map((feat, idx) => (
                <div
                  key={feat.title}
                  className={`bg-background p-6 rounded-2xl border border-border shadow-sm ${
                    idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <h3 className="font-semibold text-foreground text-lg mb-2">{feat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/shower-remodeling/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Explore Shower Remodeling →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 5: BATHROOM TILE INSTALLATION IN TEMPE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Tile Installation in Tempe
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Tile can dramatically change the appearance of a bathroom while tying different areas of the room together.
            </p>

            <div className="bg-secondary p-6 rounded-2xl border border-border mb-6">
              <h3 className="font-semibold text-foreground text-base mb-3">
                Tile selections can be coordinated across:
              </h3>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                {tileCoordinatedAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Large-format tile can create a cleaner visual appearance, while smaller decorative tile can add texture or contrast. The right selection depends on the design, intended use, maintenance preferences, and other materials being used throughout the bathroom.
            </p>

            <div>
              <Link
                href="/bathroom-tile-installation/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Explore Bathroom Tile Installation →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6: BATHROOM FLOORING IN TEMPE */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Flooring in Tempe
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Bathroom flooring needs to work with the rest of the room while providing a practical surface for everyday use.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Flooring can be coordinated with the shower tile, vanity, countertop, fixtures, wall colors, and other finishes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Depending on the design, homeowners may choose a subtle floor that allows the shower to stand out or a more distinctive pattern that becomes part of the overall bathroom design.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Proper transitions and layout planning are also important when connecting new flooring with existing areas of the home.
            </p>

            <div>
              <Link
                href="/bathroom-flooring-installation/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Explore Bathroom Flooring Installation →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 7: VANITY & COUNTERTOP INSTALLATION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Vanity &amp; Countertop Installation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The vanity has a major impact on both storage and everyday functionality.
            </p>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-6 shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Replacing an outdated vanity can provide:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                {vanityBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Larger primary bathrooms may accommodate double vanities, while smaller bathrooms can benefit from compact configurations that preserve usable floor space. Countertop materials can also be selected to coordinate with the vanity, shower tile, flooring, fixtures, and overall bathroom design.
            </p>

            <div>
              <Link
                href="/bathroom-vanity-installation/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Explore Bathroom Vanity Installation →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8: WHAT CAN A TEMPE BATHROOM REMODEL IMPROVE? */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Problem Solving</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                What Can a Tempe Bathroom Remodel Improve?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatRemodelImproves.map((item, idx) => (
                <div
                  key={item.title}
                  className={`bg-background p-6 rounded-2xl border border-border shadow-sm ${
                    idx === 6 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: BATHROOM REMODELING IDEAS FOR TEMPE HOMES */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Design Inspiration</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-4 text-foreground">
                Bathroom Remodeling Ideas for Tempe Homes
              </h2>
              <p className="text-muted-foreground text-lg">
                You don&apos;t always need to completely change the bathroom to make a meaningful improvement.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {designIdeas.map((idea) => (
                <div key={idea.title} className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-semibold text-foreground text-base mb-2">{idea.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{idea.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: COST SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Project Budgeting</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                How Much Does a Bathroom Remodel Cost in Tempe, AZ?
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                The cost of a bathroom renovation depends on the existing room, project scope, material selections, plumbing requirements, and amount of construction involved.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                A focused shower upgrade will have different requirements from a complete primary bathroom renovation.
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
              Because existing bathroom conditions vary, an in-home evaluation provides a more useful basis for planning than a generic square-foot estimate.
            </p>

            <div className="text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Request a Custom Bathroom Remodeling Estimate →
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 11: PROCESS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Step-By-Step</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground">
                Our Tempe Bathroom Remodeling Process
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {processSteps.map((step) => (
                <div key={step.step} className="bg-secondary rounded-2xl p-6 border border-border flex flex-col justify-between shadow-sm">
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

        {/* SECTION 12: SHOWER PREPARATION & WATERPROOFING */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              Shower Preparation &amp; Waterproofing
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center max-w-2xl mx-auto">
              The visible tile is only one part of a properly constructed shower. Before tile installation, the shower area may require appropriate substrate preparation, waterproofing, drainage preparation, and installation of the selected shower system.
            </p>

            <div className="bg-background p-8 rounded-2xl border border-border mb-6 shadow-sm">
              <h3 className="font-semibold text-foreground text-base mb-4">
                Depending on the design, the project may involve:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                {showerPreparationItems.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-8 text-center">
              The appropriate installation method depends on the existing bathroom, selected materials, and planned shower configuration.
            </p>

            <div className="text-center">
              <Link href="/shower-remodeling/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg">
                Learn More About Shower Remodeling →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 13: CHOOSING BATHROOM MATERIALS FOR A TEMPE HOME */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Materials &amp; Finishes</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-4 text-foreground">
                Choosing Bathroom Materials for a Tempe Home
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Material selection should balance appearance, maintenance, durability, and everyday use. When planning a bathroom renovation, homeowners may consider:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {materialsConsiderations.map((mat) => (
                <div key={mat.title} className="bg-secondary p-6 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-semibold text-foreground text-base mb-2">{mat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{mat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 14: BATHROOM REMODELING IN TEMPE NEIGHBORHOODS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Local Communities</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-4 text-foreground">
                Bathroom Remodeling in Tempe Neighborhoods
              </h2>
              <p className="text-muted-foreground text-lg">
                Different parts of Tempe contain different home styles and bathroom layouts.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tempeNeighborhoods.map((n) => (
                <div key={n.name} className="bg-background p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{n.name}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{n.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 15: ASU & DOWNTOWN TEMPE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <GraduationCap className="w-10 h-10 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                  Bathroom Remodeling Near ASU &amp; Downtown Tempe
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Homes and properties near Arizona State University and Downtown Tempe can have different remodeling priorities from larger suburban properties.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  Smaller bathrooms may benefit from practical improvements such as:
                </p>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-6 md:p-8 border border-border mb-6">
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                {asuPracticalImprovements.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              For rental or investment properties, the remodeling scope should be planned around the property&apos;s condition, intended use, and owner&apos;s objectives.
            </p>
          </div>
        </section>

        {/* SECTION 16: PERMITS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling Permits in Tempe
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Permit requirements depend on the type and scope of work being performed.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              The City of Tempe states that residential renovations require plan approval before permits can be issued, and its Building Safety Division provides residential plan review and permitting services.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Projects involving plumbing, electrical work, structural modifications, or other regulated construction may require additional review. For a specific bathroom renovation, applicable requirements should be confirmed based on the property and proposed scope of work.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              The City of Tempe provides residential permit applications and related services through its online Citizen Access Portal.
            </p>
          </div>
        </section>

        {/* Local Trust Badge */}
        <LocalTrust cityName="Tempe" />

        {/* SECTION 17: WHY CHOOSE ARZ */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose ARZ</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-4 text-foreground">
                Why Tempe Homeowners Choose ARZ Home Remodeling
              </h2>
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

        {/* SECTION 18: PORTFOLIO / PROJECTS */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <span className="text-primary text-sm font-medium tracking-wider uppercase">
                  Tempe Bathroom Remodeling Projects
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-4 text-foreground">
                  Selected East Valley Bathroom Remodeling Projects
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Every bathroom has different dimensions, layouts, materials, and construction requirements. Our remodeling work can include walk-in shower transformations, tub-to-shower conversions, primary bathroom updates, and guest bathroom refreshes.
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
                    View Bathroom Remodeling Projects
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

        {/* SECTION 19: SERVING HOMEOWNERS THROUGHOUT TEMPE & ADJACENT HUBS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Serving Homeowners Throughout Tempe, AZ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling serves homeowners throughout Tempe, including:
            </p>

            <p className="font-semibold text-foreground text-lg mb-8 max-w-2xl mx-auto">
              South Tempe · Warner Ranch · Shalimar · Downtown Tempe · North Tempe · Alta Mira · Optimist Park · Tally Ho
            </p>

            <p className="text-muted-foreground text-sm mb-6">
              We also serve surrounding East Valley communities, including Chandler, Gilbert, Mesa, Ahwatukee, Queen Creek, and Apache Junction.
            </p>

            <div className="flex flex-wrap justify-center gap-5 pt-6 border-t border-border">
              <Link href="/bathroom-remodeling-chandler-az/" className="text-primary font-semibold hover:underline text-sm">
                Explore Chandler Bathroom Remodeling →
              </Link>
              <Link href="/bathroom-remodeling-gilbert-az/" className="text-primary font-semibold hover:underline text-sm">
                Explore Gilbert Bathroom Remodeling →
              </Link>
              <Link href="/bathroom-remodeling-mesa-az/" className="text-primary font-semibold hover:underline text-sm">
                Explore Mesa Bathroom Remodeling →
              </Link>
              <Link href="/bathroom-remodeling-queen-creek-az/" className="text-primary font-semibold hover:underline text-sm">
                Explore Queen Creek Bathroom Remodeling →
              </Link>
              <Link href="/bathroom-remodeling-apache-junction-az/" className="text-primary font-semibold hover:underline text-sm">
                Explore Apache Junction Bathroom Remodeling →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 20: FAQ */}
        <ServiceFAQ
          title="Frequently Asked Questions"
          description="Get answers to common questions about bathroom remodeling in Tempe, AZ."
          faqs={tempeFaqs}
        />

        {/* SECTION 21: TESTIMONIALS */}
        <Testimonials />

        {/* SECTION 22: CONTACT & ESTIMATE */}
        <ContactSection />

        {/* SECTION 23: FINAL CTA */}
        <ServiceCTA
          title="Ready to Remodel Your Tempe Bathroom?"
          description="Whether you want to replace an outdated bathtub, create a walk-in shower, update a primary bathroom, improve a guest bath, install a new vanity, or complete a full renovation, the first step is understanding what your existing space needs. Tell us what you'd like to change, and we'll discuss your remodeling options and next steps."
        />
      </main>
      <Footer />
    </>
  );
}
