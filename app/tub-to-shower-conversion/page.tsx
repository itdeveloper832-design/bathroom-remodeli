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
  ShowerHead,
  ShieldCheck,
  Wrench,
  Sparkles,
  Bath,
  ArrowRightLeft,
  Ruler,
  Layers,
  Check,
  Droplets,
  Clock,
  DollarSign,
  Accessibility,
  Grid,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Tub to Shower Conversion Chandler AZ | Free Estimate",
  description:
    "Replace your bathtub with a walk-in shower in Chandler, AZ. Choose custom tile, glass, storage and low-threshold options. Get an estimate.",
  keywords: [
    "tub to shower conversion Chandler AZ",
    "tub to shower conversion Chandler",
    "bathtub to shower conversion Chandler",
    "bathtub conversion Chandler AZ",
    "tub replacement shower Chandler",
    "convert bathtub to walk-in shower Chandler",
    "tub to walk-in shower conversion",
    "bathtub removal and shower installation",
    "shower conversion Chandler AZ",
    "tub conversion near me",
  ],
  openGraph: {
    title: "Tub to Shower Conversion Chandler AZ | Free Estimate",
    description:
      "Replace your bathtub with a walk-in shower in Chandler, AZ. Choose custom tile, glass, storage and low-threshold options. Get an estimate.",
    url: `${siteConfig.url}/tub-to-shower-conversion/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/services/tub-to-shower-conversion.jpg`,
        width: 1200,
        height: 630,
        alt: "Tub to Shower Conversion in Chandler, AZ - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tub to Shower Conversion Chandler AZ | Free Estimate",
    description:
      "Replace your bathtub with a walk-in shower in Chandler, AZ. Choose custom tile, glass, storage and low-threshold options. Get an estimate.",
    images: [`${siteConfig.url}/images/services/tub-to-shower-conversion.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/tub-to-shower-conversion/`,
  },
};

const tubConversionFaqs = [
  {
    question: "Can I replace my bathtub with a walk-in shower?",
    answer:
      "Yes. A bathtub can be removed and replaced with a walk-in shower designed around the existing bathroom footprint. The final configuration depends on the available space, plumbing, drainage, floor conditions, and desired features.",
  },
  {
    question: "How much does a tub-to-shower conversion cost in Chandler?",
    answer:
      "The cost varies based on demolition, plumbing, waterproofing, tile, glass, fixtures, shower size, accessibility features, and material selections. A project estimate should be based on the actual bathroom and planned scope.",
  },
  {
    question: "How long does a bathtub-to-shower conversion take?",
    answer:
      "The timeline depends on the project's size and complexity, including demolition, plumbing, waterproofing, tile, glass, and material availability.",
  },
  {
    question: "Can I get a curbless shower from my existing bathtub?",
    answer:
      "A curbless conversion may be possible, but it depends on the floor structure, drainage, shower depth, waterproofing requirements, and existing conditions.",
  },
  {
    question: "Can I add a shower bench during the conversion?",
    answer:
      "Yes, when the available shower space and construction allow it. A bench should be planned as part of the shower design rather than added after construction.",
  },
  {
    question: "Can I add a shower niche?",
    answer:
      "Yes. Built-in niches can be incorporated into the shower walls to provide dedicated storage for everyday products.",
  },
  {
    question: "Can I keep the same bathroom layout?",
    answer:
      "In many conversions, the new shower can be planned around the existing bathtub footprint. However, plumbing or other changes may be appropriate depending on the desired shower configuration.",
  },
  {
    question: "Is a tub-to-shower conversion good for accessibility?",
    answer:
      "It can improve shower entry by replacing the high wall of a bathtub with a lower or easier-entry configuration. Additional features such as seating, handheld fixtures, and grab-bar reinforcement may also be considered.",
  },
  {
    question: "What happens to the old bathtub?",
    answer:
      "The existing bathtub is removed as part of the conversion. Surrounding materials may also need to be removed to properly prepare the area for the new shower.",
  },
  {
    question: "Can I install frameless glass after the conversion?",
    answer:
      "Yes. Frameless or semi-frameless glass can be incorporated into the finished shower depending on the configuration and available space.",
  },
  {
    question: "Do I need a permit for a tub-to-shower conversion in Chandler?",
    answer:
      "Permit requirements depend on the scope of work. Plumbing, electrical, structural, or other regulated modifications may have different requirements from cosmetic changes. Applicable requirements should be confirmed for the specific project.",
  },
];

const conversionProcessSteps = [
  {
    step: "01",
    title: "Consultation",
    body: "We discuss why you want to replace the bathtub, how you want to use the new shower, your preferred style, and the features you want to include.",
  },
  {
    step: "02",
    title: "Bathroom Evaluation",
    body: "We review the existing tub area, bathroom layout, plumbing, drainage, surrounding surfaces, available space, and other project conditions.",
  },
  {
    step: "03",
    title: "Design & Material Selection",
    body: "The shower configuration, tile, fixtures, glass, storage, seating, hardware, and other finishes are selected around the planned design.",
  },
  {
    step: "04",
    title: "Bathtub Removal",
    body: "The existing bathtub and necessary surrounding materials are removed so the area can be prepared for the new shower.",
  },
  {
    step: "05",
    title: "Plumbing & Preparation",
    body: "Required plumbing or drainage changes are addressed, and the shower area is prepared for the selected construction system.",
  },
  {
    step: "06",
    title: "Waterproofing",
    body: "The shower area receives the appropriate moisture-protection system before tile and other finished surfaces are installed.",
  },
  {
    step: "07",
    title: "Tile, Fixtures & Storage",
    body: "The selected shower tile, fixtures, niches, seating, and other components are installed according to the project scope.",
  },
  {
    step: "08",
    title: "Glass Installation",
    body: "If glass is included, the enclosure is installed after the shower area has reached the appropriate stage for final measurement and installation.",
  },
  {
    step: "09",
    title: "Final Walkthrough",
    body: "The completed conversion is reviewed with the homeowner and the finished project is checked against the agreed scope.",
  },
];

const chandlerNeighborhoods = [
  "Dobson Ranch",
  "Warner Ranch",
  "Ocotillo",
  "Fulton Ranch",
  "Sun Lakes",
  "Downtown Chandler",
  "Cooper Commons",
  "Chandler Heights",
  "Andersen Springs",
  "Layton Lakes",
  "Pecos Ranch",
  "The Islands",
];

const chandlerZipCodes = ["85224", "85225", "85226", "85244", "85246", "85248", "85249", "85286"];

export default function TubToShowerConversionPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Services", url: `${siteConfig.url}/services/` },
          {
            name: "Tub to Shower Conversion",
            url: `${siteConfig.url}/tub-to-shower-conversion/`,
          },
        ]}
      />
      <ServiceSchema
        serviceName="Tub to Shower Conversion in Chandler, AZ"
        serviceDescription="Convert your bathtub to a walk-in shower in Chandler, AZ. Choose custom tile, glass, low-threshold options, storage, and updated fixtures."
        serviceUrl={`${siteConfig.url}/tub-to-shower-conversion/`}
      />
      <PriceSchema
        serviceName="Tub to Shower Conversion"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/tub-to-shower-conversion/`}
      />
      <FAQSchema faqs={tubConversionFaqs} />
      <Header />
      <main className="min-h-screen bg-background">
        {/* 1. HERO SECTION */}
        <ServiceHero
          title="Tub to Shower Conversion in Chandler, AZ"
          subtitle="Replace Your Bathtub With a Walk-In Shower"
          description="If you rarely use your bathtub or find the high tub wall difficult to step over, converting the existing tub into a shower can make your bathroom more practical and comfortable. ARZ Home Remodeling provides tub to shower conversion in Chandler, AZ, transforming existing bathtub spaces into walk-in and low-threshold shower areas designed around the bathroom's available footprint. A conversion can include bathtub removal, shower preparation, waterproofing, custom tile, shower fixtures, built-in storage, shower seating, and glass enclosure installation. Whether you want a simple, practical shower or a more customized design, we'll help you determine which options make sense for your existing bathroom."
          image="/images/hero/luxury-shower-remodel-chandler.avif"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Tub to Shower Conversion", url: `${siteConfig.url}/tub-to-shower-conversion/` },
          ]}
        />

        {/* QUICK ACTION BAR */}
        <section className="bg-card border-b border-border py-6">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ArrowRightLeft className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Transform Your Unused Bathtub</p>
                  <p className="text-xs text-muted-foreground">Custom walk-in and low-threshold shower conversions in Chandler, AZ</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  <a href={`tel:${siteConfig.phoneClean}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call (662) 653-8071
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

        {/* 2. WHAT IS A TUB-TO-SHOWER CONVERSION? */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Overview & Features
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                What Is a Tub-to-Shower Conversion?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                A tub-to-shower conversion replaces an existing bathtub with a shower while generally working within the existing bathroom area.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Instead of keeping a bathtub that isn&apos;t being used, homeowners can create a more practical bathing space with features such as:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Walk-in shower entry",
                  "Low-threshold shower",
                  "Custom shower tile",
                  "Frameless or semi-frameless glass",
                  "Built-in shower niches",
                  "Shower seating",
                  "Handheld shower fixtures",
                  "Updated shower controls",
                  "Modern shower flooring",
                  "Improved storage",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-secondary/60 border border-border p-4 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl">
                <p className="text-muted-foreground text-base leading-relaxed">
                  The exact design depends on the existing tub area, bathroom layout, plumbing, drainage, floor conditions, and the features you want in the finished shower.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TUB-TO-SHOWER CONVERSION SERVICES IN CHANDLER */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Complete Conversion Scope
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Tub-to-Shower Conversion Services in Chandler
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Every bathtub conversion is different.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Some homeowners want to replace an outdated tub with a straightforward walk-in shower. Others want a completely updated shower with custom tile, glass, seating, storage, and modern fixtures. Depending on the project, your conversion can include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Bath className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Bathtub Removal</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The existing bathtub and selected surrounding materials are removed to prepare the area for the new shower configuration.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Ruler className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Shower Area Preparation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The exposed area is evaluated and prepared for the new shower construction, including the surrounding walls, floor, framing, and other relevant conditions.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Plumbing & Drainage Updates</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    If required by the new configuration, plumbing and drainage components can be adjusted to support the planned shower layout and fixtures.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Shower Waterproofing</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The shower area is prepared with an appropriate waterproofing system before finished surfaces are installed.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Grid className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Custom Shower Tile</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Shower walls, floors, niches, and other areas can be finished with selected porcelain or ceramic tile.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Shower Glass</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Depending on the design, the finished shower can include frameless or semi-frameless glass.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Storage & Seating</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Built-in niches, shelves, benches, or other practical features can be incorporated when the available space allows.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Final Installation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Fixtures, hardware, glass, finishing details, and other selected components are installed as part of the completed shower.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WALK-IN SHOWER CONVERSION IN CHANDLER */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Open Layouts & Sizing
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Walk-In Shower Conversion in Chandler
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                One of the most common reasons homeowners replace a bathtub is to create a walk-in shower.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                A walk-in shower can make the bathing area feel more open while eliminating the need to step over a traditional bathtub wall. Depending on the bathroom, the new shower may include:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
                {[
                  "Low-threshold entry",
                  "Curbless configuration",
                  "Custom tile walls",
                  "Shower floor tile",
                  "Frameless glass",
                  "Built-in niche",
                  "Shower bench",
                  "Handheld shower",
                  "Modern controls",
                  "Multiple fixtures",
                ].map((feature, idx) => (
                  <div key={idx} className="bg-secondary/70 border border-border p-3 rounded-xl text-center text-sm font-semibold text-foreground flex items-center justify-center min-h-[54px]">
                    {feature}
                  </div>
                ))}
              </div>

              <div className="bg-card border-l-4 border-primary p-6 rounded-r-2xl bg-secondary/30">
                <p className="text-foreground text-base leading-relaxed font-medium mb-2">
                  Sized for your home:
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  The best configuration depends on the available space and existing construction. A tub does not automatically need to be replaced with a large shower. The new design should be sized around the bathroom and the way the homeowner intends to use it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. LOW-THRESHOLD & CURBLESS TUB-TO-SHOWER CONVERSIONS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Entry Options
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Low-Threshold & Curbless Tub-to-Shower Conversions
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                If easier shower entry is important, the conversion can be planned around a lower or minimized shower threshold when the existing construction allows it.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                    <ShowerHead className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Low-Threshold Shower</h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    A low-threshold shower reduces the height that needs to be stepped over compared with a traditional tub.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    This can make the transition into the shower easier while maintaining a defined shower area and reliable water containment.
                  </p>
                </div>

                <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Curbless Shower</h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    A curbless shower minimizes or eliminates the raised threshold between the bathroom floor and shower area. This can create a cleaner appearance and provide easier entry.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed bg-secondary/60 p-4 rounded-xl border border-border">
                    <strong className="text-foreground">Feasibility Note:</strong> Converting a tub area to a curbless shower involves more than simply removing the bathtub. Floor structure, shower depth, drainage, waterproofing, and floor slope all need to work together based on the specific bathroom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. TUB-TO-SHOWER CONVERSION FOR ACCESSIBILITY */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Comfort & Mobility
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Tub-to-Shower Conversion for Accessibility
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Replacing a bathtub can be particularly useful when entering the existing tub has become difficult. A shower conversion can be designed with accessibility-related features such as:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Easier shower entry",
                  "Low-threshold or curbless configuration",
                  "Shower seating",
                  "Handheld shower fixtures",
                  "Practical control placement",
                  "Grab-bar reinforcement where appropriate",
                  "Slip-conscious shower surfaces",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-secondary/50 border border-border p-4 rounded-xl">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Not every bathroom requires the same accessibility features. The design should be based on the homeowner&apos;s needs and the physical limitations of the existing bathroom.
              </p>

              <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-lg font-bold text-foreground mb-1">Planning a broader accessibility renovation?</h4>
                  <p className="text-muted-foreground text-sm">Discover barrier-free layouts, grab bar reinforcement, and aging-in-place solutions.</p>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shrink-0">
                  <Link href="/handicap-accessible-bathroom/">
                    Explore Accessible Remodeling
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 7. WHAT HAPPENS TO THE EXISTING BATHTUB? */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Demolition & Subsurface Preparation
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                What Happens to the Existing Bathtub?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The existing bathtub is removed as part of the conversion process. Depending on the bathroom, this may involve removing:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {[
                  "Bathtub",
                  "Tub surround",
                  "Existing wall finishes",
                  "Old shower or tub fixtures",
                  "Selected flooring",
                  "Surrounding trim & materials",
                ].map((item, idx) => (
                  <div key={idx} className="bg-card border border-border p-4 rounded-xl text-center font-medium text-foreground text-sm">
                    {item}
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl">
                <h4 className="font-serif text-lg font-bold text-foreground mb-2">Evaluating Exposed Conditions</h4>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Once the tub is removed, the exposed area can be evaluated before the new shower construction begins. This is important because conditions hidden behind older finishes may need to be addressed before new materials are installed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. OUR TUB-TO-SHOWER CONVERSION PROCESS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Step-By-Step Workflow
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Our Tub-to-Shower Conversion Process
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Every project follows an organized, professional sequence from initial assessment through final walkthrough.
              </p>

              <div className="space-y-4">
                {conversionProcessSteps.map((step, idx) => (
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

        {/* 9. CHOOSING THE RIGHT SHOWER AFTER REMOVING YOUR TUB */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Design Configurations
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Choosing the Right Shower After Removing Your Tub
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Removing the bathtub is only the first decision. You also need to decide what type of shower should replace it.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Walk-In Shower</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A practical choice for homeowners who want easier entry and a more open bathing area.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Low-Threshold Shower</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A useful option when you want easier entry while retaining a small transition into the shower.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Curbless Shower</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Creates a more continuous transition between the bathroom and shower area when the existing construction allows it.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Shower With Bench</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Useful for homeowners who want a place to sit while bathing or additional comfort during everyday use.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Shower With Built-In Niche</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Provides dedicated storage for shampoo, soap, and other shower products without adding freestanding shelving.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Glass-Enclosed Shower</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Glass can make the new shower feel more open and visually connected to the rest of the bathroom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. SHOWER TILE OPTIONS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Finishes & Materials
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Shower Tile Options for Your Conversion
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Once the bathtub is removed, the new shower can be finished with materials selected around your preferred design and maintenance needs. Common options include:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {[
                  "Porcelain tile",
                  "Ceramic tile",
                  "Large-format tile",
                  "Mosaic floor tile",
                  "Accent tile",
                  "Neutral finishes",
                  "Patterned tile",
                  "Coordinated wall & floor",
                ].map((tile, idx) => (
                  <div key={idx} className="bg-secondary/60 border border-border p-4 rounded-xl text-center text-sm font-semibold text-foreground flex items-center justify-center min-h-[56px]">
                    {tile}
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Tile selection should consider the shower surface, water exposure, cleaning requirements, overall bathroom design, and the intended use of the space.
              </p>

              <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-lg font-bold text-foreground mb-1">Looking for custom bathroom tile work?</h4>
                  <p className="text-muted-foreground text-sm">Explore floor-to-ceiling surrounds, decorative inlays, and non-slip floor tiles.</p>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shrink-0">
                  <Link href="/bathroom-tile-installation/">
                    Explore Tile Installation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 11. SHOWER GLASS OPTIONS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Enclosures & Openness
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Shower Glass Options
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                A new shower can be finished with different glass configurations depending on the design:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Frameless Glass</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Frameless glass provides a clean appearance with minimal visible framing, creating a sleek, open look.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Semi-Frameless Glass</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Semi-frameless configurations can provide a balance between visual openness and structural framing.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Clear Glass</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Clear glass allows the shower tile and interior design to remain visible throughout the bathroom.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Other Glass Finishes</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Depending on availability and project requirements, homeowners may consider frosted, textured, or patterned glass finishes.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                The enclosure should be measured and designed around the finished shower rather than selected independently from the rest of the project.
              </p>
            </div>
          </div>
        </section>

        {/* 12. COMMON REASONS TO REPLACE BATHTUB */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Homeowner Motivations
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Common Reasons Chandler Homeowners Replace Their Bathtub
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">The Bathtub Is Rarely Used</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    If your household almost always showers, converting unused tub space can make the bathroom far more practical for everyday life.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">The Tub Is Difficult to Enter</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A high bathtub wall can become inconvenient or hazardous for children, older adults, or anyone with limited mobility.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">The Bathroom Feels Outdated</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    An older tub and surround can make the entire bathroom look dated even when other components are in good condition.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">You Want More Shower Space</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A properly designed shower can provide a much more comfortable bathing area while using the existing bathroom footprint.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">You Want Easier Maintenance</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    New tile, fixtures, glass, and storage can create a cleaner, more organized, and easier-to-maintain shower environment.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">You Are Planning for the Future</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Homeowners may choose to replace a tub before accessibility becomes a major concern and incorporate features that keep the home comfortable over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. BENEFITS OF REPLACING A BATHTUB WITH A SHOWER */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Key Advantages
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Benefits of Replacing a Bathtub With a Shower
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex gap-4 items-start bg-card border border-border p-6 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-1">Easier Entry</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A walk-in or low-threshold shower can eliminate the need to step over a high bathtub wall.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-card border border-border p-6 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-1">More Practical Daily Use</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      If your household prefers showers, replacing an unused bathtub can make far better use of the bathroom.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-card border border-border p-6 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-1">Updated Appearance</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      New tile, glass, fixtures, and finishes can give the bathroom a completely refreshed appearance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-card border border-border p-6 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-1">Better Storage</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A conversion can incorporate built-in niches and dedicated storage solutions into the new shower.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-card border border-border p-6 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <ShowerHead className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-1">Improved Comfort</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The new shower can be designed around preferred fixtures, dimensions, seating, and ergonomic controls.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-card border border-border p-6 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Accessibility className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-1">Future Flexibility</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Accessibility-related features can be incorporated during the conversion if they fit your current or anticipated needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 14. HOW MUCH DOES A TUB-TO-SHOWER CONVERSION COST? */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Cost & Pricing Factors
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                How Much Does a Tub-to-Shower Conversion Cost in Chandler, AZ?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The cost of converting a bathtub into a shower depends on the specific bathroom and the amount of work required. Factors that can affect the project cost include:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
                {[
                  "Bathroom dimensions",
                  "Bathtub removal",
                  "Demolition scope",
                  "Wall conditions",
                  "Plumbing changes",
                  "Drainage modifications",
                  "Waterproofing system",
                  "Shower tile",
                  "Shower flooring",
                  "Glass enclosure",
                  "Fixtures & hardware",
                  "Niches & seating",
                  "Accessibility features",
                  "Material selections",
                ].map((factor, idx) => (
                  <div key={idx} className="bg-secondary/60 border border-border p-3 rounded-xl text-center text-xs font-semibold text-foreground flex items-center justify-center min-h-[48px]">
                    {factor}
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl mb-8">
                <p className="text-muted-foreground text-base leading-relaxed">
                  A basic conversion can have a very different scope from a highly customized shower with new plumbing, premium finishes, glass, seating, and other features. For that reason, the most useful estimate comes after reviewing the existing bathroom and understanding the desired project scope.
                </p>
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  <a href="#contact">
                    Request a Free Tub-to-Shower Estimate
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 15. HOW LONG DOES A CONVERSION TAKE? */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Project Timelines
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                How Long Does a Tub-to-Shower Conversion Take?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Project duration depends on the condition of the existing bathroom, demolition requirements, plumbing changes, shower size, waterproofing system, tile installation, glass, material availability, and other work included in the project.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A straightforward conversion may involve fewer steps than a larger bathroom renovation.
              </p>
              <div className="bg-card border border-border p-6 rounded-2xl">
                <p className="text-muted-foreground text-base leading-relaxed">
                  During the consultation and planning stage, the project scope can be reviewed so you have a better understanding of what the work involves before construction begins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 16. TUB-TO-SHOWER CONVERSION VS SHOWER REMODELING */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Understanding the Differences
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Tub-to-Shower Conversion vs. Shower Remodeling
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                These services overlap, but they are not the same project. Understanding the difference ensures you choose the exact scope you need:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-primary/5 border-2 border-primary/40 p-8 rounded-2xl shadow-sm relative">
                  <span className="text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground px-3 py-1 rounded-full absolute -top-3 left-6">
                    This Service
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2 mt-2">Tub-to-Shower Conversion</h3>
                  <p className="text-primary font-semibold text-base mb-4">
                    Primary Goal: Replace an existing bathtub with a shower.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The existing tub is removed, the area is remediated and waterproofed, and the bathing area is completely redesigned around a new shower.
                  </p>
                </div>

                <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Shower Remodeling</h3>
                  <p className="text-foreground font-semibold text-base mb-4">
                    Primary Goal: Upgrade or rebuild an existing shower.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    This may include new tile, glass enclosures, waterproofing, fixtures, storage niches, or other shower improvements without tub removal.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full border-border hover:bg-secondary">
                    <Link href="/shower-remodeling/">
                      Explore Shower Remodeling
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-secondary/60 border border-border p-6 rounded-2xl">
                <p className="text-foreground font-medium text-base">
                  If you currently have a bathtub and want it replaced with a shower, this tub-to-shower conversion page is the more relevant service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 17. CHANDLER NEIGHBORHOODS & ZIP CODES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Local Service Coverage
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Tub-to-Shower Conversion in Chandler Neighborhoods
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                ARZ Home Remodeling serves homeowners in Chandler and applicable nearby East Valley communities. Service areas can include:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
                {chandlerNeighborhoods.map((n) => (
                  <div key={n} className="flex items-center gap-2 bg-card border border-border p-3 rounded-xl text-sm font-medium text-foreground">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span>{n}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-serif text-xl font-bold text-foreground mb-4">Applicable Chandler ZIP Codes</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {chandlerZipCodes.map((zip) => (
                  <span key={zip} className="bg-card border border-border px-4 py-2 rounded-xl text-sm font-semibold text-foreground">
                    {zip}
                  </span>
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Service availability depends on the specific property and actual coverage area. If you&apos;re unsure whether your home is within our service area, contact us and we&apos;ll confirm.
              </p>
            </div>
          </div>
        </section>

        {/* 18. RELATED BATHROOM REMODELING SERVICES */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Full Bathroom Solutions
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Related Bathroom Remodeling Services
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-card border border-border p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">Shower Remodeling</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      If you already have a shower and want to replace or upgrade it, explore our complete shower remodeling service.
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
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">Accessible Bathroom Remodeling</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      For homeowners planning a broader accessibility-focused renovation, we provide bathroom remodeling solutions designed around easier movement and everyday use.
                    </p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-fit border-border hover:bg-secondary">
                    <Link href="/handicap-accessible-bathroom/">
                      Explore Accessible Remodeling
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">Bathroom Tile Installation</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Coordinate the new shower with custom bathroom tile, shower walls, niches, and other tiled surfaces.
                    </p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-fit border-border hover:bg-secondary">
                    <Link href="/bathroom-tile-installation/">
                      Explore Tile Installation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">Bathroom Vanity Installation</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Complete the bathroom transformation with a new vanity, countertop, sink, storage, and related finishes.
                    </p>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-fit border-border hover:bg-secondary">
                    <Link href="/bathroom-vanity-installation/">
                      Explore Vanity Installation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 19. FREQUENTLY ASKED QUESTIONS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Common Questions
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Clear answers to common questions about converting bathtubs into walk-in showers in Chandler, AZ:
              </p>

              <div className="space-y-4">
                {tubConversionFaqs.map((faq, idx) => (
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

        {/* 20. READY TO REPLACE YOUR BATHTUB? (BOTTOM CTA BAR) */}
        <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready to Replace Your Bathtub?
              </h2>
              <p className="text-primary-foreground/90 text-lg sm:text-xl leading-relaxed mb-8">
                If your bathtub is rarely used, difficult to enter, outdated, or simply no longer fits your lifestyle, a tub-to-shower conversion can transform the space without requiring a completely different bathroom footprint. ARZ Home Remodeling can help you plan a new shower around your existing bathroom, preferred style, accessibility needs, and project goals.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 font-bold shadow-lg">
                  <a href="#contact">
                    Request Free Conversion Estimate
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold">
                  <a href={`tel:${siteConfig.phoneClean}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call (662) 653-8071
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 21. CONTACT SECTION WITH LEADSMART FORM & CALL INFO */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
