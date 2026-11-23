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
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  MapPin,
  ShieldCheck,
  Wrench,
  Sparkles,
  Ruler,
  Layers,
  Check,
  Droplets,
  Clock,
  Layout,
  Maximize2,
  Box,
  Sliders,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Bathroom Vanity Installation Chandler AZ | ARZ Home",
  description:
    "Bathroom vanity installation in Chandler, AZ with storage, countertop, and fixture options planned around your bathroom layout.",
  keywords: [
    "bathroom vanity installation Chandler AZ",
    "bathroom vanity installation Chandler",
    "bathroom vanity installer Chandler AZ",
    "custom bathroom vanities Chandler",
    "bathroom vanity replacement Chandler",
    "bathroom vanity installation near me",
    "double sink bathroom vanity Chandler",
    "floating bathroom vanity Chandler",
    "bathroom vanity and countertop installation",
    "vanity replacement Chandler AZ",
  ],
  openGraph: {
    title: "Bathroom Vanity Installation Chandler AZ | ARZ Home",
    description:
      "Bathroom vanity installation in Chandler, AZ with storage, countertop, and fixture options planned around your bathroom layout.",
    url: `${siteConfig.url}/bathroom-vanity-installation/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/services/bathroom-vanity-installation.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Vanity Installation in Chandler, AZ - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Vanity Installation Chandler AZ | ARZ Home",
    description:
      "Bathroom vanity installation in Chandler, AZ with storage, countertop, and fixture options planned around your bathroom layout.",
    images: [`${siteConfig.url}/images/services/bathroom-vanity-installation.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-vanity-installation/`,
  },
};

const vanityFaqs = [
  {
    question: "Do you install bathroom vanities in Chandler?",
    answer:
      "Yes. Bathroom vanity installation can include cabinet installation, countertops, sinks, faucets, hardware, and related components depending on the project scope.",
  },
  {
    question: "Can you replace my existing bathroom vanity?",
    answer:
      "Yes. An existing vanity can be removed and replaced with a new configuration when the bathroom layout and project conditions allow.",
  },
  {
    question: "Can you install a double-sink vanity?",
    answer:
      "Yes. Double-sink installations can be considered for bathrooms with sufficient space and an appropriate plumbing configuration.",
  },
  {
    question: "Can you install a floating bathroom vanity?",
    answer:
      "Yes. Floating vanities can be installed when the wall structure and selected vanity system are appropriate for the installation.",
  },
  {
    question: "Can you install the countertop too?",
    answer:
      "Yes. Countertop installation can be included depending on the selected vanity and project scope.",
  },
  {
    question: "Do you handle plumbing when installing a vanity?",
    answer:
      "Plumbing connections can be addressed as part of the project when adjustments are required for the selected vanity and sink configuration.",
  },
  {
    question: "Can you install a vanity in a small bathroom?",
    answer:
      "Yes. Compact and space-efficient vanity configurations can be considered for smaller bathrooms.",
  },
  {
    question: "How do I choose the right vanity size?",
    answer:
      "The available wall width, depth, plumbing, fixture clearance, storage needs, and surrounding bathroom layout should all be considered before selecting a vanity.",
  },
  {
    question: "How much does bathroom vanity installation cost?",
    answer:
      "Pricing depends on the vanity, countertop, sink, plumbing, installation requirements, materials, and other project details. A project-specific estimate provides a more useful figure than a generic price range.",
  },
  {
    question: "Can a vanity be installed as part of a bathroom remodel?",
    answer:
      "Yes. A vanity can be installed as part of a larger bathroom renovation involving showers, tile, flooring, lighting, countertops, and other improvements.",
  },
];

const vanityProcessSteps = [
  {
    step: "01",
    title: "Measure the Existing Space",
    body: "We evaluate the available wall width, vanity depth, floor area, plumbing locations, and surrounding bathroom features.",
  },
  {
    step: "02",
    title: "Determine the Vanity Configuration",
    body: "We discuss whether a single-sink, double-sink, floating, freestanding, or customized configuration makes the most sense.",
  },
  {
    step: "03",
    title: "Select Materials & Finishes",
    body: "The vanity, countertop, sink, faucet, hardware, and other components are selected according to the planned design.",
  },
  {
    step: "04",
    title: "Prepare the Installation Area",
    body: "The existing vanity is removed when necessary, and the wall, floor, and plumbing connections are prepared for installation.",
  },
  {
    step: "05",
    title: "Install & Level the Vanity",
    body: "The vanity cabinet is positioned, leveled, secured, and prepared for the countertop and plumbing components.",
  },
  {
    step: "06",
    title: "Install Countertop & Sink",
    body: "The selected countertop and sink are installed according to the planned configuration.",
  },
  {
    step: "07",
    title: "Complete Plumbing & Hardware",
    body: "Faucets, drains, supply connections, cabinet hardware, and other selected components are installed and checked.",
  },
  {
    step: "08",
    title: "Final Inspection",
    body: "The finished vanity is inspected for alignment, stability, functionality, plumbing performance, and overall finish quality.",
  },
];

const chandlerNeighborhoods = [
  "Chandler",
  "Ocotillo",
  "Fulton Ranch",
  "Sun Lakes",
  "Downtown Chandler",
  "Warner Ranch",
  "Cooper Commons",
  "Dobson Ranch",
  "Chandler Heights",
  "Andersen Springs",
  "Layton Lakes",
  "The Islands",
  "Pecos Ranch",
];

const nearbyAreas = ["Gilbert", "Mesa", "Tempe", "Queen Creek", "Apache Junction", "Ahwatukee"];

export default function BathroomVanityInstallationPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Services", url: `${siteConfig.url}/services/` },
          {
            name: "Bathroom Vanity Installation",
            url: `${siteConfig.url}/bathroom-vanity-installation/`,
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Vanity Installation in Chandler, AZ"
        serviceDescription="Bathroom vanity installation in Chandler, AZ with custom, floating, single and double-sink vanities, countertops, sinks, and storage."
        serviceUrl={`${siteConfig.url}/bathroom-vanity-installation/`}
      />
      <PriceSchema
        serviceName="Bathroom Vanity Installation"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-vanity-installation/`}
      />
      <FAQSchema faqs={vanityFaqs} />
      <Header />
      <main className="min-h-screen bg-background">
        {/* 1. HERO SECTION */}
        <ServiceHero
          title="Bathroom Vanity Installation in Chandler, AZ"
          subtitle="Custom, Floating & Double-Sink Vanity Installation"
          description="Upgrade your bathroom with a properly fitted vanity designed around your available space, storage needs, countertop preferences, and everyday routine. ARZ Home Remodeling provides bathroom vanity installation in Chandler, AZ, including floating, freestanding, single-sink, and double-sink vanity configurations. Depending on your project, installation can include vanity cabinets, countertops, sinks, faucets, hardware, plumbing connections, mirrors, and related bathroom finishes. Whether you're replacing an outdated vanity or completing a larger bathroom renovation, we'll help you plan the installation around the existing bathroom and your project goals."
          image="/images/hero/luxury-shower-remodel-chandler.avif"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Vanity Installation", url: `${siteConfig.url}/bathroom-vanity-installation/` },
          ]}
        />

        {/* QUICK ACTION BAR */}
        <section className="bg-card border-b border-border py-6">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Layout className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Custom Bathroom Vanity Solutions</p>
                  <p className="text-xs text-muted-foreground">Expert cabinet, countertop, sink & plumbing installation in Chandler, AZ</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  <a href={`tel:${siteConfig.phoneClean}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call (520) 569-3339
                  </a>
                </Button>
                <Button asChild variant="outline" size="default" className="border-border hover:bg-secondary">
                  <a href="#contact">
                    Request Free Estimate
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT DOES BATHROOM VANITY INSTALLATION INCLUDE? */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Comprehensive Scope
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                What Does Bathroom Vanity Installation Include?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                A vanity installation can involve much more than placing a cabinet against the bathroom wall.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Depending on the project, the work may include:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Removing the existing vanity",
                  "Measuring the available space",
                  "Preparing the wall and floor",
                  "Installing the vanity cabinet",
                  "Leveling and securing the cabinet",
                  "Installing the countertop",
                  "Installing the sink",
                  "Connecting the faucet",
                  "Adjusting plumbing connections",
                  "Installing cabinet hardware",
                  "Installing a mirror or related accessories",
                  "Completing final adjustments",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-secondary/60 border border-border p-4 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl">
                <p className="text-muted-foreground text-base leading-relaxed">
                  The exact scope depends on whether you&apos;re replacing an existing vanity, installing a new vanity in an existing location, or incorporating the vanity into a larger bathroom renovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. BATHROOM VANITY OPTIONS FOR CHANDLER HOMES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Styles & Configurations
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Bathroom Vanity Options for Chandler Homes
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Different bathrooms require different vanity configurations to match floor space, plumbing, and daily routines.
              </p>

              <div className="space-y-6">
                <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Single-Sink Vanities</h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-3">
                    A single-sink vanity can be a practical choice for guest bathrooms, hall bathrooms, smaller primary bathrooms, and other spaces where efficient use of floor area is important.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Available configurations can include different cabinet widths, drawer arrangements, countertop materials, sink styles, and finishes.
                  </p>
                </div>

                <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Double-Sink Vanities</h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-3">
                    Double-sink vanities provide two dedicated sink areas and can be useful in larger primary bathrooms to streamline morning and evening routines.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The available wall space, plumbing configuration, countertop dimensions, and cabinet layout should be considered before selecting a double vanity.
                  </p>
                </div>

                <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Floating Bathroom Vanities</h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-3">
                    A floating vanity is mounted securely above the floor rather than sitting directly on it.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    This can create a more open visual appearance, make the floor beneath the vanity easier to see and clean, and deliver a sleek, contemporary aesthetic.
                  </p>
                </div>

                <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Freestanding Vanities</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Freestanding vanities provide a traditional cabinet-style configuration and are available in a wide range of sizes, finishes, storage arrangements, and countertop combinations.
                  </p>
                </div>

                <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Custom Vanity Configurations</h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-3">
                    If a standard vanity doesn&apos;t fit the available space or storage requirements, a more customized configuration may be appropriate.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Custom planning can help address unusual wall dimensions, limited floor space, additional storage requirements, or a specific bathroom design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. BATHROOM VANITY REPLACEMENT IN CHANDLER */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Upgrade Workflow
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Bathroom Vanity Replacement in Chandler
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                If your existing vanity is damaged, outdated, too small, or simply doesn&apos;t work well for your routine, replacing it can make a noticeable difference without necessarily requiring a complete bathroom renovation.
              </p>

              <div className="bg-secondary/60 border border-border p-6 rounded-2xl mb-8">
                <p className="text-xs uppercase tracking-wider font-bold text-primary mb-3">Replacement Sequence</p>
                <div className="flex flex-wrap items-center gap-2 text-foreground font-semibold text-sm sm:text-base">
                  <span>Existing Vanity Removal</span>
                  <span className="text-primary">→</span>
                  <span>Space Preparation</span>
                  <span className="text-primary">→</span>
                  <span>New Vanity Installation</span>
                  <span className="text-primary">→</span>
                  <span>Countertop</span>
                  <span className="text-primary">→</span>
                  <span>Sink</span>
                  <span className="text-primary">→</span>
                  <span>Faucet</span>
                  <span className="text-primary">→</span>
                  <span>Plumbing Connections</span>
                  <span className="text-primary">→</span>
                  <span>Final Inspection</span>
                </div>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl">
                <p className="text-muted-foreground text-base leading-relaxed">
                  Before installation, the existing space should be checked for dimensions, plumbing locations, wall conditions, flooring, and other factors that could affect the new vanity. This helps avoid choosing a vanity that looks good but doesn&apos;t fit the actual bathroom.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. BATHROOM VANITY & COUNTERTOP INSTALLATION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Materials & Surfaces
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Bathroom Vanity & Countertop Installation
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The vanity cabinet and countertop should be considered together. Depending on your design, countertop options may include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-card border border-border p-6 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Quartz</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Quartz provides a consistent appearance and is commonly selected for bathroom countertops because of its non-porous durability and relatively straightforward maintenance.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Granite</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Granite provides a natural-stone appearance with individual patterns and variations, adding organic beauty and timeless appeal.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Marble</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Marble can provide a distinctive high-end appearance, although it generally requires more consideration regarding care and maintenance.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl">
                <p className="text-muted-foreground text-base leading-relaxed">
                  The right countertop depends on your preferred appearance, maintenance expectations, budget, and the rest of the bathroom design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SINK & FAUCET INSTALLATION */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Plumbing Fixtures
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Sink & Faucet Installation
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A new vanity can be paired with different sink and faucet configurations. Depending on the vanity and countertop design, options may include:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Undermount sinks",
                  "Vessel sinks",
                  "Integrated sink countertops",
                  "Single-handle faucets",
                  "Widespread faucets",
                  "Centerset faucets",
                  "Wall-mounted faucets where appropriate",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-secondary/50 border border-border p-4 rounded-xl">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-card border-l-4 border-primary p-6 rounded-r-2xl bg-secondary/30">
                <p className="text-muted-foreground text-base leading-relaxed">
                  The sink, faucet, countertop, and vanity should be selected as a coordinated system so the components work together dimensionally and visually.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. OUR BATHROOM VANITY INSTALLATION PROCESS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Step-By-Step Workflow
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Our Bathroom Vanity Installation Process
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Every vanity installation follows an organized, professional sequence from initial measurement through final inspection.
              </p>

              <div className="space-y-4">
                {vanityProcessSteps.map((step, idx) => (
                  <div key={idx} className="bg-card border border-border p-6 rounded-2xl flex flex-col sm:flex-row gap-5 items-start">
                    <span className="text-2xl font-serif font-bold text-primary shrink-0 bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-base leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. COMMON BATHROOM VANITY PROBLEMS WE SOLVE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Solutions & Improvements
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Common Bathroom Vanity Problems We Solve
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Not Enough Storage</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A poorly configured vanity can leave toiletries, towels, and everyday items without enough dedicated storage. A better cabinet layout can provide drawers, doors, shelves, and other storage options suited to the bathroom.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Vanity Is Too Large</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    An oversized vanity can make a smaller bathroom feel crowded. A properly measured replacement can improve usable floor space without sacrificing necessary storage.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Vanity Is Too Small</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A vanity that&apos;s too small may leave inadequate countertop space or storage. A larger configuration may be possible if the bathroom has enough available wall and floor space.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Damaged Cabinets</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Water exposure and years of use can cause cabinet finishes to deteriorate. Replacing the vanity can provide an opportunity to address both appearance and durability.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Outdated Design</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    An old vanity can make an otherwise updated bathroom look unfinished. A new cabinet, countertop, sink, faucet, and hardware combination can bring the different bathroom elements together.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Plumbing Doesn&apos;t Match</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Changing vanity configurations can sometimes require adjustments to plumbing connections. The plumbing should be reviewed before installation so the selected vanity works with existing conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. CHOOSING THE RIGHT VANITY SIZE */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Planning & Sizing
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Choosing the Right Vanity Size
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Vanity size shouldn&apos;t be selected based only on appearance. Before purchasing a vanity, consider:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
                {[
                  "Available wall width",
                  "Vanity depth",
                  "Door & drawer clearance",
                  "Entry clearance",
                  "Toilet location",
                  "Shower or tub location",
                  "Plumbing position",
                  "Countertop space",
                  "Sink configuration",
                  "Storage requirements",
                  "Mirror dimensions",
                ].map((factor, idx) => (
                  <div key={idx} className="bg-card border border-border p-3 rounded-xl text-center text-xs font-semibold text-foreground flex items-center justify-center min-h-[48px]">
                    {factor}
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl">
                <p className="text-muted-foreground text-base leading-relaxed">
                  A vanity that looks perfect online may not work well if it interferes with another bathroom fixture. Proper measurements are therefore one of the most important parts of the installation process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. VANITY INSTALLATION FOR SMALL BATHROOMS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Space Optimization
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Bathroom Vanity Installation for Small Bathrooms
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Small bathrooms require careful planning because every inch of available space matters. Depending on the layout, options may include:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Compact Vanity</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A narrower vanity can preserve floor space while still providing essential storage.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Floating Vanity</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A wall-mounted configuration can create a more open visual appearance and expose more floor.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Wall-Mounted Faucet</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Where appropriate, moving the faucet configuration can provide additional countertop flexibility.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Single-Sink Setup</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A single sink can provide more usable cabinet and countertop space than a double-sink configuration in a compact bathroom.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl sm:col-span-2 md:col-span-2">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Vertical Storage</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Using the available wall area above the vanity can help supplement the storage provided by the vanity itself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. PRIMARY BATHROOM VANITY INSTALLATION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Primary Bathrooms
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Primary Bathroom Vanity Installation
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Primary bathrooms often provide enough space for larger, more customized vanity configurations. Popular options include:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {[
                  "Double-sink vanities",
                  "Larger countertops",
                  "Multiple drawers",
                  "Built-in storage",
                  "Floating designs",
                  "Coordinated mirrors",
                  "Decorative hardware",
                  "Quartz countertops",
                  "Custom layouts",
                ].map((item, idx) => (
                  <div key={idx} className="bg-card border border-border p-4 rounded-xl text-center font-medium text-foreground text-sm">
                    {item}
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl">
                <p className="text-muted-foreground text-base leading-relaxed">
                  The vanity should be planned together with the shower, toilet, lighting, flooring, and other bathroom elements so the finished room feels cohesive and balanced.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12. HOW MUCH DOES IT COST? */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Pricing & Factors
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                How Much Does Bathroom Vanity Installation Cost in Chandler?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The cost of a vanity installation depends on the project scope. Factors that can affect the total include:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
                {[
                  "Vanity size",
                  "Cabinet construction",
                  "Custom vs. standard vanity",
                  "Single vs. double sink",
                  "Countertop material",
                  "Sink type",
                  "Faucet selection",
                  "Plumbing modifications",
                  "Existing vanity removal",
                  "Wall or floor preparation",
                  "Hardware",
                  "Mirror installation",
                ].map((factor, idx) => (
                  <div key={idx} className="bg-secondary/60 border border-border p-3 rounded-xl text-center text-xs font-semibold text-foreground flex items-center justify-center min-h-[48px]">
                    {factor}
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl mb-8">
                <p className="text-muted-foreground text-base leading-relaxed">
                  A straightforward replacement can have a very different cost from a custom vanity installation involving a new countertop, plumbing changes, double sinks, and related bathroom improvements. For that reason, an accurate estimate should be based on the actual bathroom and selected materials.
                </p>
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  <a href="#contact">
                    Request a Free Bathroom Vanity Estimate
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 13. HOW LONG DOES VANITY INSTALLATION TAKE? */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Timelines
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                How Long Does Vanity Installation Take?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Installation time depends on whether the project involves a simple replacement or additional work such as plumbing modifications, countertop fabrication, wall preparation, or other bathroom renovations.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The overall timeline can also depend on the availability of the selected vanity and countertop.
              </p>
              <div className="bg-card border border-border p-6 rounded-2xl">
                <p className="text-muted-foreground text-base leading-relaxed">
                  During the consultation, the project scope can be reviewed so you have a clearer understanding of the expected installation process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 14. BATHROOM VANITY MAINTENANCE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Care & Longevity
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Bathroom Vanity Maintenance
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Once installed, a few simple habits can help protect your vanity:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">Keep Water Off Cabinet Surfaces</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Wipe standing water from around sinks and countertops to reduce unnecessary moisture exposure.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">Use Appropriate Cleaning Products</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Follow the manufacturer&apos;s care recommendations for the selected countertop and cabinet materials.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">Check Plumbing Connections</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Occasionally inspect supply lines and drain connections for signs of minor leaks.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">Don&apos;t Overload Drawers</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Use cabinet and drawer storage according to the manufacturer&apos;s recommendations to preserve glides.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl md:col-span-2">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">Address Leaks Quickly</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Even a small plumbing leak can cause unnecessary damage to cabinetry if left unresolved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 15. VANITY INSTALLATION VS CABINET & COUNTERTOP INSTALLATION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Service Distinction
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Bathroom Vanity Installation vs. Cabinet & Countertop Installation
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                These services can overlap, but their primary focus is different:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-primary/5 border-2 border-primary/40 p-8 rounded-2xl shadow-sm relative">
                  <span className="text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground px-3 py-1 rounded-full absolute -top-3 left-6">
                    This Service
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2 mt-2">Bathroom Vanity Installation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Focused specifically on the installation or replacement of bathroom vanity cabinets, countertops, sinks, faucets, and related components.
                  </p>
                </div>

                <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Cabinet & Countertop Installation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Can involve broader cabinet and countertop work across the bathroom or other areas of the home.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full border-border hover:bg-secondary">
                    <Link href="/cabinet-countertop-installation/">
                      Explore Cabinet & Countertop Installation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl">
                <p className="text-foreground font-medium text-base">
                  If you&apos;re specifically replacing or installing a bathroom vanity, this service is the more relevant starting point.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 16. CHANDLER SERVICE AREA */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Local Service Area
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Chandler Bathroom Vanity Installation Service Area
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                ARZ Home Remodeling serves homeowners in Chandler and applicable nearby East Valley communities. Service areas can include:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
                {chandlerNeighborhoods.map((n) => (
                  <div key={n} className="flex items-center gap-2 bg-secondary/60 border border-border p-3 rounded-xl text-sm font-medium text-foreground">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span>{n}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-serif text-xl font-bold text-foreground mb-4">Nearby Communities</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {nearbyAreas.map((area) => (
                  <span key={area} className="bg-secondary/60 border border-border px-4 py-2 rounded-xl text-sm font-semibold text-foreground">
                    {area}
                  </span>
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Service availability depends on the specific property and actual coverage area.
              </p>
            </div>
          </div>
        </section>

        {/* 17. RELATED BATHROOM SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Complete Bathroom Solutions
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Related Bathroom Services
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-card border border-border p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">Bathroom Remodeling in Chandler</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      For a complete bathroom renovation involving multiple components, explore our Chandler bathroom remodeling service.
                    </p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-fit border-border hover:bg-secondary">
                    <Link href="/bathroom-remodeling-chandler-az/">
                      Explore Bathroom Remodeling
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">Shower Remodeling</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Upgrade an existing shower with new tile, fixtures, waterproofing, glass, storage, and other improvements.
                    </p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-fit border-border hover:bg-secondary">
                    <Link href="/shower-remodeling/">
                      Explore Shower Remodeling
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">Tub-to-Shower Conversion</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Replace an existing bathtub with a walk-in or low-threshold shower.
                    </p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-fit border-border hover:bg-secondary">
                    <Link href="/tub-to-shower-conversion/">
                      Explore Tub-to-Shower Conversion
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">Bathroom Tile Installation</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Coordinate new wall, floor, shower, and accent tile with your vanity installation.
                    </p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-fit border-border hover:bg-secondary">
                    <Link href="/bathroom-tile-installation/">
                      Explore Tile Installation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl flex flex-col justify-between md:col-span-2">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">Accessible Bathroom Remodeling</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Plan bathroom features around easier entry, movement, comfort, and everyday use.
                    </p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-fit border-border hover:bg-secondary">
                    <Link href="/handicap-accessible-bathroom/">
                      Explore Accessible Remodeling
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 18. FREQUENTLY ASKED QUESTIONS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Common Inquiries
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Clear answers to common questions about bathroom vanity installation in Chandler, AZ:
              </p>

              <div className="space-y-4">
                {vanityFaqs.map((faq, idx) => (
                  <div key={idx} className="bg-card border border-border p-6 rounded-2xl">
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2 flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed pl-8">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 19. READY FOR A NEW BATHROOM VANITY? (BOTTOM ACTION SECTION) */}
        <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready for a New Bathroom Vanity?
              </h2>
              <p className="text-primary-foreground/90 text-lg sm:text-xl leading-relaxed mb-8">
                Whether you&apos;re replacing a damaged vanity, improving storage, upgrading a primary bathroom, or completing a larger renovation, the right vanity can make the room more functional and easier to use. ARZ Home Remodeling helps Chandler homeowners plan and install bathroom vanities around their available space, preferred materials, and project goals.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 font-bold shadow-lg">
                  <a href="#contact">
                    Request Your Free Vanity Installation Estimate
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold">
                  <a href={`tel:${siteConfig.phoneClean}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call (520) 569-3339
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 20. CONTACT SECTION WITH LEADSMART FORM & DIRECT CALL */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
