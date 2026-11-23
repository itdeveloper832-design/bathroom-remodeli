import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ContactSection from "@/components/home/contact-section";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema, PriceSchema, BreadcrumbSchema, LocalBusinessSchema } from "@/components/seo/json-ld";
import Link from "next/link";
import {
  ShieldCheck,
  Phone,
  Check,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  MapPin,
  Sparkles,
  Accessibility,
  Droplets,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Accessible Bathroom Remodeling Chandler AZ | ARZ Home",
  description:
    "Accessible bathroom remodeling in Chandler, AZ with practical options for safer entry, shower use, flooring, grab bars, and everyday mobility.",
  keywords: [
    "accessible bathroom remodeling Chandler AZ",
    "handicap accessible bathroom remodeling Chandler",
    "accessible bathroom remodel Chandler",
    "accessible shower remodeling Chandler",
    "handicap accessible shower Chandler",
    "ADA bathroom remodeling Chandler",
    "aging in place bathroom remodeling Chandler",
    "barrier-free shower Chandler",
    "curbless shower Chandler",
    "roll-in shower Chandler",
  ],
  openGraph: {
    title: "Accessible Bathroom Remodeling Chandler AZ | ARZ Home",
    description:
      "Accessible bathroom remodeling in Chandler, AZ with practical options for safer entry, shower use, flooring, grab bars, and everyday mobility.",
    url: `${siteConfig.url}/handicap-accessible-bathroom/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-small-bath.png`,
        width: 1200,
        height: 630,
        alt: "Accessible Bathroom Remodeling in Chandler, AZ - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessible Bathroom Remodeling Chandler AZ | ARZ Home",
    description:
      "Accessible bathroom remodeling in Chandler, AZ with practical options for safer entry, shower use, flooring, grab bars, and everyday mobility.",
    images: [`${siteConfig.url}/images/og-small-bath.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/handicap-accessible-bathroom/`,
  },
};

const accessibleFaqs = [
  {
    question: "What is an accessible bathroom remodel?",
    answer:
      "An accessible bathroom remodel modifies the bathroom to make everyday use easier and safer for people with mobility limitations or changing accessibility needs. Improvements can include shower access, flooring, support features, fixture placement, lighting, and bathroom layout.",
  },
  {
    question: "Can you install a curbless shower in an existing bathroom?",
    answer:
      "A curbless shower may be possible in an existing bathroom, but feasibility depends on the floor structure, drainage, available space, shower dimensions, and existing conditions.",
  },
  {
    question: "What is the difference between a curbless and low-threshold shower?",
    answer:
      "A curbless shower minimizes or eliminates the raised threshold between the bathroom and shower. A low-threshold shower retains a small entry transition while reducing the height compared with a traditional shower curb.",
  },
  {
    question: "Can a bathtub be replaced with an accessible shower?",
    answer:
      "Yes. A tub-to-shower conversion can replace an existing bathtub with a shower designed around the available space and the homeowner's accessibility requirements.",
  },
  {
    question: "Are accessible bathrooms only for wheelchair users?",
    answer:
      "No. Accessible features can benefit people with many different mobility needs and can also make a bathroom easier to use as household needs change over time.",
  },
  {
    question: "Can an accessible bathroom still look modern?",
    answer:
      "Yes. Accessibility features can be integrated with modern tile, glass, vanities, fixtures, lighting, and other design elements.",
  },
  {
    question: "Should I add grab bars during a bathroom remodel?",
    answer:
      "If grab bars may be useful now or in the future, planning appropriate reinforcement during remodeling can make installation easier later. The location and type of support should be determined around the intended use of the bathroom.",
  },
  {
    question: "What flooring is best for an accessible bathroom?",
    answer:
      "Flooring should be selected with the bathroom's moisture conditions, cleaning requirements, design, and intended use in mind. Appropriate slip-conscious surfaces can be considered during the remodeling process.",
  },
  {
    question: "Can I remodel my bathroom for aging in place?",
    answer:
      "Yes. Aging-in-place remodeling can incorporate easier shower entry, seating, accessible controls, improved lighting, practical storage, grab-bar reinforcement, and other features intended to keep the bathroom comfortable as needs change.",
  },
  {
    question: "Does an accessible bathroom remodel require permits in Chandler?",
    answer:
      "Permit requirements depend on the type and scope of work. Plumbing, electrical, structural, or other regulated changes may have different requirements from cosmetic improvements. Applicable requirements should be confirmed for the specific project.",
  },
];

const serviceListItems = [
  "Curbless and zero-threshold showers",
  "Low-threshold shower entries",
  "Roll-in shower configurations",
  "Shower seating and benches",
  "Grab bars and grab-bar reinforcement",
  "Handheld shower fixtures",
  "Slip-conscious bathroom flooring",
  "Accessible vanity configurations",
  "Comfort-height fixtures",
  "Improved bathroom lighting",
  "Wider or more practical clearances",
  "Easier-to-operate faucets and controls",
  "Shower niches and accessible storage",
  "Bathroom layout modifications",
];

const processSteps = [
  {
    step: "01",
    title: "Accessibility Consultation",
    body: "We discuss what is difficult to use in the current bathroom, your mobility requirements, household needs, and the improvements you want to make.",
  },
  {
    step: "02",
    title: "Existing Bathroom Evaluation",
    body: "The current layout, shower or tub, vanity, flooring, fixtures, available space, and other conditions are reviewed to determine what changes may be practical.",
  },
  {
    step: "03",
    title: "Accessible Design Planning",
    body: "We organize the remodeling around the accessibility features that make sense for the bathroom, such as shower entry, seating, grab-bar reinforcement, fixtures, storage, flooring, and lighting.",
  },
  {
    step: "04",
    title: "Material & Fixture Selection",
    body: "Bathroom surfaces, shower materials, vanity components, fixtures, hardware, glass, flooring, and other finishes are selected according to the planned design.",
  },
  {
    step: "05",
    title: "Remodeling & Installation",
    body: "Existing materials are removed as required, the space is prepared, and the planned bathroom components are installed according to the project scope.",
  },
  {
    step: "06",
    title: "Final Walkthrough",
    body: "The completed bathroom is reviewed to make sure the remodeling work and selected features match the agreed project scope.",
  },
];

export default function AccessibleBathroomPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Services", url: `${siteConfig.url}/services/` },
          {
            name: "Accessible Bathroom Remodeling",
            url: `${siteConfig.url}/handicap-accessible-bathroom/`,
          },
        ]}
      />
      <ServiceSchema
        serviceName="Accessible Bathroom Remodeling in Chandler, Arizona"
        serviceDescription="Accessible bathroom remodeling in Chandler, AZ with curbless showers, grab bars, accessible vanities, safer flooring, and aging-in-place solutions."
        serviceUrl={`${siteConfig.url}/handicap-accessible-bathroom/`}
      />
      <FAQSchema faqs={accessibleFaqs} />
      <PriceSchema
        serviceName="Accessible Bathroom Remodeling"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/handicap-accessible-bathroom/`}
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* HERO SECTION */}
        <ServiceHero
          title="Accessible Bathroom Remodeling in Chandler, AZ"
          subtitle="Safer, More Comfortable Accessible Bathrooms for Chandler Homes"
          description="An accessible bathroom should make everyday routines easier without looking institutional or sacrificing the style of your home. ARZ Home Remodeling provides accessible bathroom remodeling in Chandler, AZ, with solutions designed around mobility, safety, comfort, and long-term usability. Whether you're remodeling for current mobility needs, planning for aging in place, or simply want a bathroom that's easier and safer to use, we can help you plan improvements around your existing space."
          image="/images/hero/luxury-shower-remodel-chandler.avif"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Accessible Bathroom Remodeling", url: `${siteConfig.url}/handicap-accessible-bathroom/` },
          ]}
        />

        {/* SECTION 2: SERVICES OVERVIEW */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Tailored Mobility & Safety Upgrades
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Accessible Bathroom Remodeling Services in Chandler
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Accessibility means different things for different homeowners in <Link href="/bathroom-remodeling-chandler-az/" className="text-primary font-semibold hover:underline">Chandler, AZ</Link>.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Some bathrooms need a safer shower entrance. Others need additional clearance, better lighting, accessible storage, or fixtures that are easier to reach and operate.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {serviceListItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-secondary/60 border border-border p-4 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground font-semibold text-base">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                The right combination depends on the existing bathroom, available space, mobility requirements, and how you want to use the room.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: ACCESSIBLE SHOWER REMODELING */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Shower Safety & Design
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                Accessible Shower Remodeling in Chandler, AZ
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                For many homeowners, the shower is the most important part of an accessible bathroom remodel. A traditional bathtub or high shower threshold can make entering and exiting the shower difficult. Remodeling can create an easier transition while also improving the overall appearance and functionality of the bathroom.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                  <h3 className="font-serif font-bold text-foreground text-xl mb-2 text-primary">Curbless Shower Entry</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    A curbless shower minimizes the raised threshold between the bathroom floor and shower area. This can make entry easier for people using walkers, wheelchairs, or other mobility aids.
                  </p>
                </div>
                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                  <h3 className="font-serif font-bold text-foreground text-xl mb-2 text-primary">Low-Threshold Shower</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    When a completely curbless design is not practical for the existing bathroom, a low-threshold configuration may provide a more accessible entry while working with the available construction.
                  </p>
                </div>
                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                  <h3 className="font-serif font-bold text-foreground text-xl mb-2 text-primary">Roll-In Shower</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    A roll-in shower can provide additional entry space for wheelchair users and may incorporate seating, handheld fixtures, accessible controls, and carefully planned clearances.
                  </p>
                </div>
                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                  <h3 className="font-serif font-bold text-foreground text-xl mb-2 text-primary">Shower Seating & Handhelds</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    A built-in bench and handheld shower wand provide comfort, stability, and control while bathing from a seated position.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/shower-remodeling/"
                  className="text-primary font-bold hover:underline inline-flex items-center text-lg"
                >
                  <span>Explore Shower Remodeling</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CHALLENGES WE ADDRESS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block text-center">
                Solving Everyday Homeowner Problems
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
                Bathroom Accessibility Challenges We Can Address
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Difficult Tub or Shower Access",
                    desc: "A high bathtub wall or raised shower threshold can make entering difficult. Replacing it with an accessible shower provides a safer transition.",
                  },
                  {
                    title: "Limited Mobility Space",
                    desc: "Tight clearances make movement difficult for wheelchairs or walkers. Reconfiguring fixture placement improves room mobility.",
                  },
                  {
                    title: "Slippery Bathroom Surfaces",
                    desc: "Water increases fall risks. Appropriate slip-conscious flooring and shower surfaces improve traction while matching design.",
                  },
                  {
                    title: "Hard-to-Reach Fixtures",
                    desc: "Controls positioned too high or far away cause strain. Accessible remodeling brings faucets and vanities within comfortable reach.",
                  },
                  {
                    title: "Insufficient Shower Support",
                    desc: "Reinforced wall backing, grab bars, seating, and handheld wands offer physical support entering or using the shower.",
                  },
                  {
                    title: "Poor Lighting",
                    desc: "Dim lighting reduces safety. Bright, multi-point LED lighting over vanity and shower areas improves overall visibility.",
                  },
                ].map((c, idx) => (
                  <div key={idx} className="bg-secondary/60 border border-border p-6 rounded-2xl">
                    <h3 className="font-serif font-bold text-foreground text-xl mb-3 text-primary">{c.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: ACCESSIBLE FEATURES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Key Components
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Accessible Bathroom Features for Chandler Homes
              </h2>

              <div className="space-y-6">
                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Curbless & Zero-Threshold Showers</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    A zero-threshold shower creates a seamless transition between floor and shower. Feasibility depends on floor structure, drainage depth, and layout.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Grab Bars & Reinforced Walls</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    We install in-wall wood blocking during framing so grab bars can support heavy weight safely now or be added easily in the future without tear-out.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Accessible Vanities</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Custom floating or open-bottom vanities provide knee clearance for seated use while maintaining beautiful storage and countertop surfaces. Learn more about our <Link href="/bathroom-vanity-installation/" className="text-primary font-bold hover:underline">Bathroom Vanity Installation</Link>.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Slip-Conscious Flooring</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    High DCOF-rated porcelain tile and textured surfaces provide reliable traction in wet bathroom conditions. Explore options for <Link href="/bathroom-tile-installation/" className="text-primary font-bold hover:underline">Bathroom Tile Installation</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: AGING IN PLACE & MODERN DESIGN */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                  Future-Proof Living
                </span>
                <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">
                  Aging-in-Place Bathroom Remodeling
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  An accessible bathroom does not have to be designed only around an immediate mobility limitation. Many Chandler homeowners choose accessibility improvements to remain comfortable as their needs change over time.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm font-medium">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Curbless or low-threshold shower entry</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Shower seating and handheld wands</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Reinforced grab-bar wall blocking</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Multi-point LED lighting & easy controls</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Practical clearances and accessible storage</li>
                </ul>
              </div>

              <div>
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                  Aesthetics & Style
                </span>
                <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">
                  Accessible Design Without an Institutional Look
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  Accessibility and modern bathroom design work hand-in-hand. Today's accessible bathrooms incorporate the same premium finishes used in luxury home renovations:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground font-medium">
                  <span>• Porcelain & ceramic tile</span>
                  <span>• Custom vanities</span>
                  <span>• Quartz countertops</span>
                  <span>• Frameless glass</span>
                  <span>• Recessed shower niches</span>
                  <span>• Modern fixtures</span>
                  <span>• Designer lighting</span>
                  <span>• Coordinated hardware</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REAL PROJECT CASE STUDY EVIDENCE SECTION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto bg-card border border-border p-8 lg:p-12 rounded-3xl shadow-md">
              <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">
                Local Project Evidence & Case Study
              </span>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Curbless Roll-In Shower Conversion — Sun Lakes, Chandler, AZ
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                <strong>Homeowner Goal:</strong> Convert a high-step 1990s garden bathtub into a modern zero-threshold curbless walk-in shower for long-term aging in place without losing home resale value.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-secondary p-4 rounded-xl">
                  <span className="text-xs font-bold text-primary uppercase block mb-1">Scope & Engineering</span>
                  <p className="text-xs text-muted-foreground">Floor slab recessing, Schluter-KERDI waterproofing membrane, linear trench drain installation.</p>
                </div>
                <div className="bg-secondary p-4 rounded-xl">
                  <span className="text-xs font-bold text-primary uppercase block mb-1">Safety Features</span>
                  <p className="text-xs text-muted-foreground">2x8 in-wall structural blocking, matte-black 500-lb rated grab bars, teak fold-down seating.</p>
                </div>
                <div className="bg-secondary p-4 rounded-xl">
                  <span className="text-xs font-bold text-primary uppercase block mb-1">Finishes & Surfaces</span>
                  <p className="text-xs text-muted-foreground">Large-format non-slip porcelain floor tile (DCOF &gt; 0.45), frameless glass panel, floating quartz vanity.</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "ARZ Home Remodeling completely transformed our Sun Lakes bathroom into a beautiful, barrier-free space that gives our family complete safety and confidence." — Chandler Homeowner
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7: PLANNING & PROCESS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Structured Execution
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Accessible Bathroom Remodeling Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {processSteps.map((stepItem, idx) => (
                <div key={idx} className="bg-secondary/60 border border-border p-8 rounded-2xl shadow-sm relative overflow-hidden">
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

        {/* SECTION 8: RELATED SERVICES & HUB LINKS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Explore More Solutions
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Related Bathroom Remodeling Services
              </h2>
              <p className="text-muted-foreground text-base mt-3">
                Accessible bathroom remodeling can be combined with other specialized bathroom improvements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-foreground text-xl mb-2">Shower Remodeling</h3>
                  <p className="text-muted-foreground text-sm mb-4">Update shower surfaces, waterproofing, storage, and glass features.</p>
                </div>
                <Link href="/shower-remodeling/" className="text-primary font-bold hover:underline inline-flex items-center text-sm">
                  <span>Explore Shower Remodeling</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-foreground text-xl mb-2">Tub-to-Shower Conversion</h3>
                  <p className="text-muted-foreground text-sm mb-4">Replace bathtubs with barrier-free showers suited to your layout.</p>
                </div>
                <Link href="/tub-to-shower-conversion/" className="text-primary font-bold hover:underline inline-flex items-center text-sm">
                  <span>Explore Tub-to-Shower Conversion</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-foreground text-xl mb-2">Bathroom Remodeling Chandler</h3>
                  <p className="text-muted-foreground text-sm mb-4">Visit our primary Chandler bathroom remodeling hub page.</p>
                </div>
                <Link href="/bathroom-remodeling-chandler-az/" className="text-primary font-bold hover:underline inline-flex items-center text-sm">
                  <span>Bathroom Remodeling in Chandler</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block text-center">
                Frequently Asked Questions
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
                Frequently Asked Questions About Accessible Bathroom Remodeling
              </h2>

              <div className="space-y-6">
                {accessibleFaqs.map((faq, idx) => (
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
                Plan a More Accessible Bathroom in Chandler
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                If your current bathroom is difficult to enter, difficult to move around in, or no longer fits your household's needs, remodeling can improve both usability and comfort. Whether you need a curbless shower, safer flooring, shower seating, accessible fixtures, or grab-bar reinforcement, we can help.
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
                    Request a Free Accessible Bathroom Estimate
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
