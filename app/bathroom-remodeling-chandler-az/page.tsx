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
  Star,
  MapPin,
  Clock,
  Phone,
  Check,
  ArrowRight,
  Sparkles,
  Layers,
  Wrench,
  CheckCircle2,
  HelpCircle,
  FolderCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Chandler AZ | ARZ Home Remodeling",
  description:
    "Bathroom remodeling in Chandler, AZ for showers, tub conversions, tile, vanities, flooring, and complete bathroom renovations. Get an estimate.",
  keywords: [
    "bathroom remodeling in chandler, AZ",
    "bathroom remodeling chandler",
    "bathroom remodel chandler az",
    "bathroom renovation chandler",
    "walk-in shower remodeling chandler",
    "tub-to-shower conversion chandler",
    "bathroom remodeling contractor chandler",
    "bathroom remodeler chandler",
  ],
  openGraph: {
    title: "Bathroom Remodeling Chandler AZ | ARZ Home Remodeling",
    description:
      "Bathroom remodeling in Chandler, AZ for showers, tub conversions, tile, vanities, flooring, and complete bathroom renovations. Get an estimate.",
    url: `${siteConfig.url}/bathroom-remodeling-chandler-az/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/bathroom-remodeling-chandler.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Chandler Arizona - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Chandler AZ | ARZ Home Remodeling",
    description:
      "Bathroom remodeling in Chandler, AZ for showers, tub conversions, tile, vanities, flooring, and complete bathroom renovations. Get an estimate.",
    images: [`${siteConfig.url}/images/bathroom-remodeling-chandler.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-chandler-az/`,
  },
};

const chandlerFaqs = [
  {
    question: "How much does a bathroom remodel cost in Chandler, AZ?",
    answer:
      "The cost depends on the size and condition of the bathroom, materials, fixtures, demolition, shower or tub configuration, tile, cabinetry, glass, plumbing, electrical work, and overall project scope. A focused update and a complete renovation can have very different costs.",
  },
  {
    question: "How long does a bathroom remodel take?",
    answer:
      "Project duration depends on the size and complexity of the renovation, materials, demolition, installation requirements, and the work included in the project scope.",
  },
  {
    question: "Can I convert my bathtub into a walk-in shower?",
    answer:
      "Yes, a tub-to-shower conversion can replace an existing bathtub with a shower configuration designed around the available bathroom space.",
  },
  {
    question: "Do you remodel small bathrooms?",
    answer:
      "Yes. Small bathroom remodeling can focus on efficient layouts, appropriately sized fixtures, walk-in showers, storage, lighting, tile, and other improvements that make better use of limited space.",
  },
  {
    question: "Do you remodel primary bathrooms?",
    answer:
      "Yes. A primary bathroom renovation can include shower remodeling, vanity and countertop installation, flooring, tile, lighting, storage, fixtures, and other improvements.",
  },
  {
    question: "Can you remodel a guest bathroom?",
    answer:
      "Yes. Guest bathroom remodeling can include updates to the tub or shower, vanity, flooring, tile, fixtures, lighting, and finishes.",
  },
  {
    question: "Can a bathroom be remodeled without changing the layout?",
    answer:
      "In many cases, a bathroom can be updated while keeping the existing layout. The best approach depends on the condition of the room and the changes you want to make.",
  },
  {
    question: "Should I choose a bathtub or walk-in shower?",
    answer:
      "The better option depends on how the bathroom is used, the available space, household needs, and personal preferences. A walk-in shower may be useful when easier access and an open layout are priorities, while a bathtub may remain important for certain households.",
  },
  {
    question: "Can a bathroom be made easier to use?",
    answer:
      "Yes. Depending on the bathroom and homeowner's needs, improvements may include low-threshold or curbless showers, seating, handheld fixtures, storage, lighting, and other accessibility-focused features.",
  },
  {
    question: "Do bathroom remodels in Chandler require permits?",
    answer:
      "Permit requirements depend on the type and scope of work. Projects involving plumbing, electrical work, structural changes, or other regulated construction may have different requirements from cosmetic updates. The applicable requirements should be confirmed for the specific project before work begins.",
  },
  {
    question: "What areas of Chandler do you serve?",
    answer:
      "ARZ Home Remodeling serves homeowners in Chandler and applicable nearby communities. Service coverage should be confirmed for your specific address before planning a project.",
  },
];

const mainServices = [
  {
    title: "Walk-In Shower Remodeling",
    href: "/shower-remodeling/",
    description:
      "An outdated bathtub or enclosed shower can make a bathroom feel smaller and harder to use. A walk-in shower can create a more open layout while providing a practical solution for everyday routines.",
    detail:
      "Depending on the bathroom design, a walk-in shower may include custom tile, built-in niches, seating, glass enclosure options, low-threshold entry, or a curbless configuration.",
    cta: "Explore Walk-In Shower Remodeling",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "If you rarely use the bathtub, converting it into a shower can make better use of the existing bathroom footprint.",
    detail:
      "A tub-to-shower conversion may include removal of the existing tub, shower preparation, waterproofing, wall and floor tile, shower fixtures, storage, and glass enclosure options. Keeping the new shower within or close to the existing footprint can also be an effective way to update the bathroom without completely changing its layout.",
    cta: "Explore Tub-to-Shower Conversions",
  },
  {
    title: "Primary Bathroom Remodeling",
    href: "/master-bathroom-remodel/",
    description:
      "A primary bathroom should support your daily routine while providing the design and storage you want.",
    detail:
      "A primary bathroom remodel can include a redesigned shower, new vanity and countertop, bathroom flooring, tile, lighting, fixtures, storage, and other improvements. The project can be focused on a specific problem or planned as a broader renovation that updates multiple areas of the room.",
    cta: "Explore Primary Bathroom Remodeling",
  },
  {
    title: "Guest Bathroom Remodeling",
    href: "/guest-bathroom-remodeling/",
    description:
      "Guest and hall bathrooms often need to make efficient use of limited space while remaining comfortable for everyday use.",
    detail:
      "A guest bathroom remodel can include a new tub or shower, vanity, countertop, flooring, tile, lighting, fixtures, storage, and updated finishes. The goal is to improve the room without adding unnecessary changes that do not benefit the space.",
    cta: "Explore Guest Bathroom Remodeling",
  },
  {
    title: "Small Bathroom Remodeling",
    href: "/small-bathroom-remodeling/",
    description:
      "A small bathroom does not necessarily need additional square footage to become more functional.",
    detail:
      "Layout, fixture sizing, shower configuration, storage, lighting, and material selection can make a significant difference in a compact room. Depending on the existing space, improvements may include a smaller vanity, walk-in shower, recessed storage, larger-format tile, improved lighting, and more efficient fixture placement.",
    cta: "Explore Small Bathroom Remodeling",
  },
  {
    title: "Accessible Bathroom Remodeling",
    href: "/handicap-accessible-bathroom/",
    description:
      "If a bathroom needs to be easier and safer to use, accessibility-focused improvements can be incorporated into the remodeling plan.",
    detail:
      "Depending on the needs of the homeowner and the available space, options may include low-threshold or curbless shower entries, shower seating, handheld shower fixtures, grab-bar preparation, slip-conscious flooring, improved lighting, and more usable clearances.",
    cta: "Explore Accessible Bathroom Remodeling",
  },
];

const surfaceServices = [
  {
    title: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation/",
    description:
      "Tile can be used throughout a bathroom, including shower walls, bathroom floors, backsplashes, niches, and accent areas. Tile selection involves more than appearance—size, pattern, texture, finish, grout selection, and surface harmony all affect the finished result.",
    cta: "Explore Bathroom Tile Installation",
  },
  {
    title: "Bathroom Flooring",
    href: "/bathroom-flooring-installation/",
    description:
      "Bathroom flooring needs to work in a moisture-prone environment while matching the overall design of the room. Depending on the project, homeowners consider different tile sizes, patterns, textures, and finishes that work with the shower and vanity.",
    cta: "Explore Bathroom Flooring Installation",
  },
  {
    title: "Bathroom Vanity Installation",
    href: "/cabinet-countertop-installation/",
    description:
      "A new vanity can improve both storage and the appearance of a bathroom. Vanity projects involve cabinet configuration, countertop selection, sink placement, hardware, and finishes coordinated with the rest of the renovation.",
    cta: "Explore Bathroom Vanity Installation",
  },
  {
    title: "Shower Glass & Enclosures",
    href: "/shower-remodeling/",
    description:
      "The shower enclosure has a major effect on the appearance and openness of a bathroom. Depending on the layout, glass options may include frameless or semi-frameless configurations selected around shower dimensions and door placement.",
    cta: "Explore Shower Remodeling",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    body: "We discuss what you want to change, what is not working in the current bathroom, your preferred style, and the goals for the project.",
  },
  {
    step: "02",
    title: "Bathroom Evaluation",
    body: "The existing bathroom is reviewed to identify factors that may affect the project, including the shower, tub, vanity, flooring, plumbing, lighting, storage, and available space.",
  },
  {
    step: "03",
    title: "Project Planning",
    body: "The remodeling scope is organized around the improvements you want to make. Major changes, materials, fixtures, finishes, and design priorities are discussed as part of the planning process.",
  },
  {
    step: "04",
    title: "Material Selection",
    body: "Tile, flooring, vanities, countertops, shower fixtures, glass, hardware, and other finishes are selected according to the planned design.",
  },
  {
    step: "05",
    title: "Bathroom Remodeling",
    body: "Existing materials are removed as needed, the space is prepared, and the new bathroom components are installed according to the agreed project scope.",
  },
  {
    step: "06",
    title: "Final Walkthrough",
    body: "After the remodeling work is completed, the finished bathroom and project scope are reviewed with you.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Clear Project Scope",
    body: "We organize the planned remodeling work so you understand what is included in the project.",
  },
  {
    title: "Design Guidance",
    body: "We help you consider shower layouts, tile, vanities, storage, fixtures, finishes, and other design decisions.",
  },
  {
    title: "Practical Solutions",
    body: "The goal is to improve how the bathroom looks while making it more useful for everyday life.",
  },
  {
    title: "Local Chandler Service",
    body: "We work with homeowners in Chandler and applicable nearby East Valley communities.",
  },
  {
    title: "Attention to Finished Details",
    body: "Tile layout, shower transitions, storage niches, vanity installation, glass, fixtures, and finishing details all contribute to the completed bathroom.",
  },
];

const featuredProjects = [
  {
    title: "Master Bathroom Remodel — Dobson Ranch",
    body: "A primary bathroom renovation focused on the shower area, finishes, and overall functionality.",
  },
  {
    title: "Primary Bathroom Update — Ocotillo",
    body: "A bathroom update involving the vanity and surface finishes around the existing layout.",
  },
  {
    title: "Guest Bathroom Update — Sun Lakes",
    body: "A guest bathroom improvement involving tile, the tub/shower area, and selected finishes.",
  },
  {
    title: "Bathroom Renovation — Fulton Ranch",
    body: "A bathroom renovation focused on shower design, finishes, storage, and everyday usability.",
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

export default function ChandlerBathroomRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Services", url: `${siteConfig.url}/services/` },
          {
            name: "Bathroom Remodeling Chandler AZ",
            url: `${siteConfig.url}/bathroom-remodeling-chandler-az/`,
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Remodeling in Chandler, Arizona"
        serviceDescription="Bathroom remodeling in Chandler, AZ for showers, tubs, tile, vanities, flooring, and complete bathroom renovations."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-chandler-az/`}
      />
      <FAQSchema faqs={chandlerFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in Chandler AZ"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-chandler-az/`}
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* HERO SECTION */}
        <ServiceHero
          title="Bathroom Remodeling in Chandler, AZ"
          subtitle="Custom Bathroom Remodeling for Chandler Homes"
          description="A bathroom should be comfortable, functional, and designed around the way you actually use your home. ARZ Home Remodeling provides bathroom remodeling in Chandler, AZ, including shower upgrades, tub-to-shower conversions, bathroom tile and flooring, vanity installations, accessibility improvements, and complete bathroom renovations. Whether you're updating a guest bathroom, replacing an outdated tub, improving a primary bathroom, or planning a complete renovation, we help you determine the right scope for your space and goals."
          image="/images/hero/luxury-shower-remodel-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Remodeling Chandler AZ", url: `${siteConfig.url}/bathroom-remodeling-chandler-az/` },
          ]}
        />

        {/* SECTION: SERVICES IN CHANDLER OVERVIEW */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Comprehensive Remodeling Capabilities
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Bathroom Remodeling Services in Chandler, AZ
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Every bathroom renovation has different requirements. Some homeowners need a focused upgrade, while others want to completely change the room.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our Chandler bathroom remodeling services can include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { name: "Walk-in shower remodeling", href: "/shower-remodeling/" },
                  { name: "Tub-to-shower conversions", href: "/tub-to-shower-conversion/" },
                  { name: "Primary bathroom remodeling", href: "/master-bathroom-remodel/" },
                  { name: "Guest bathroom remodeling", href: "/guest-bathroom-remodeling/" },
                  { name: "Small bathroom remodeling", href: "/small-bathroom-remodeling/" },
                  { name: "Accessible bathroom remodeling", href: "/handicap-accessible-bathroom/" },
                  { name: "Bathroom tile installation", href: "/bathroom-tile-installation/" },
                  { name: "Bathroom flooring installation", href: "/bathroom-flooring-installation/" },
                  { name: "Bathroom vanity and countertop installation", href: "/cabinet-countertop-installation/" },
                  { name: "Shower glass and enclosures", href: "/shower-remodeling/" },
                  { name: "Storage and shower niches", href: "/shower-remodeling/" },
                  { name: "Fixtures, finishes, and other bathroom upgrades", href: "/contact/" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-secondary/60 border border-border p-4 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <Link href={item.href} className="text-foreground font-semibold hover:text-primary transition-colors text-base">
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                The right combination depends on the existing bathroom, available space, layout, condition of the room, and improvements you want to make.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: DESIGNED AROUND YOUR HOME */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Tailored Project Scope
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                Bathroom Remodeling Designed Around Your Home
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                An outdated bathroom can create everyday frustrations. A cramped layout, limited storage, worn tile, an old bathtub, poor lighting, or an inconvenient shower can make the room difficult to use even when everything is technically functional.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A bathroom remodel in Chandler gives you an opportunity to improve both the appearance and functionality of the space.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                You may only need to replace a bathtub with a <Link href="/walk-in-showers/" className="text-primary font-semibold hover:underline">walk-in shower</Link> or install a new <Link href="/cabinet-countertop-installation/" className="text-primary font-semibold hover:underline">vanity</Link>. In other cases, the bathroom may benefit from new <Link href="/bathroom-flooring-installation/" className="text-primary font-semibold hover:underline">flooring</Link>, <Link href="/bathroom-tile-installation/" className="text-primary font-semibold hover:underline">tile</Link>, lighting, fixtures, storage, and a redesigned shower area.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We start with the bathroom you have rather than assuming every project needs the same solution. The remodeling plan can be organized around the condition of the existing space, your priorities, and the level of renovation you want.
              </p>

              <div className="bg-card border border-border p-8 rounded-2xl shadow-sm text-center">
                <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">
                  Ready to discuss your bathroom?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Schedule your free in-home visit with an experienced Chandler project supervisor.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-8">
                    <a href={`tel:${siteConfig.phoneClean}`}>
                      <Phone className="w-5 h-5 mr-2" />
                      Call {siteConfig.phone}
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="font-bold border-primary text-primary hover:bg-primary hover:text-white">
                    <Link href="/contact/">
                      Request a Free Bathroom Remodeling Estimate
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: OUR CHANDLER SERVICES (MAIN 6 CARDS) */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Primary Remodeling Solutions
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Our Chandler Bathroom Remodeling Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((svc, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:border-primary/50 transition-all duration-300 group"
                >
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed mb-4">
                      {svc.description}
                    </p>
                    <p className="text-muted-foreground/90 text-sm leading-relaxed mb-6">
                      {svc.detail}
                    </p>
                  </div>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center text-primary font-bold text-base hover:underline mt-auto pt-4 border-t border-border"
                  >
                    <span>{svc.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: TILE, FLOORING & VANITY INSTALLATION */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Surfaces, Storage & Enclosures
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Bathroom Tile, Flooring & Vanity Installation
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A complete bathroom renovation involves more than the shower or bathtub. The surfaces, storage, fixtures, and finishes throughout the room all affect how the finished bathroom looks and functions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {surfaceServices.map((item, idx) => (
                <div key={idx} className="bg-card border border-border p-8 rounded-2xl shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed mb-6">{item.description}</p>
                  </div>
                  <Link href={item.href} className="text-primary font-bold hover:underline inline-flex items-center text-base">
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: CHOOSING THE RIGHT REMODEL */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Project Scope Guidance
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                Choosing the Right Bathroom Remodel for Your Chandler Home
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Not every bathroom requires a complete renovation. A focused remodel may be the better option when the existing layout works well and only certain components need to be replaced.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-secondary/60 border border-border p-8 rounded-2xl">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4 text-primary">
                    A Focused Bathroom Update May Make Sense When:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "The existing layout works well",
                      "The bathtub or shower is outdated",
                      "The vanity needs replacement",
                      "Tile or flooring needs to be updated",
                      "Fixtures and finishes are worn",
                      "Storage needs improvement",
                      "You want to refresh the appearance without redesigning the entire room",
                    ].map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground text-base">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-secondary/60 border border-border p-8 rounded-2xl">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4 text-primary">
                    A Complete Bathroom Renovation May Make Sense When:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "The existing layout no longer works",
                      "Several major components are outdated",
                      "The shower and vanity both need replacement",
                      "Storage is inadequate",
                      "Accessibility improvements are needed",
                      "The overall design needs to change",
                      "Plumbing or electrical work is part of the project",
                      "Multiple surfaces and fixtures need to be replaced together",
                    ].map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground text-base">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mt-8 text-center font-medium">
                The appropriate scope depends on the existing bathroom and the improvements you want to make.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: CHANDLER HOME CONSIDERATIONS & MATERIALS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                  Local Context
                </span>
                <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">
                  Bathroom Remodeling Considerations for Chandler Homes
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  Chandler has a wide variety of homes, so bathroom remodeling projects can differ significantly from one property to another.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  An older bathroom may require attention to existing finishes, shower construction, storage, plumbing, or an inefficient layout. A newer bathroom may need a more focused update involving tile, flooring, vanities, shower features, lighting, fixtures, or finishes.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Arizona's dry climate and mineral-heavy water conditions can also influence how homeowners think about bathroom surfaces and maintenance. For that reason, there is no single bathroom design that works for every Chandler home.
                </p>
              </div>

              <div>
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                  Material Selection
                </span>
                <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">
                  Choosing Bathroom Materials for Chandler
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  Bathroom materials should be selected based on both appearance and everyday use. Shower glass, fixtures, tile, and grout can require regular cleaning, particularly in areas affected by mineral deposits.
                </p>
                <div className="bg-card border border-border p-6 rounded-xl">
                  <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Recommended Material Options:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <span>• Porcelain tile</span>
                    <span>• Ceramic tile</span>
                    <span>• Shower glass</span>
                    <span>• Low-maintenance walls</span>
                    <span>• Bathroom flooring</span>
                    <span>• Selected grout systems</span>
                    <span>• Shower niches</span>
                    <span>• Vanity cabinetry</span>
                    <span>• Countertops</span>
                    <span>• Modern fixtures</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: COST GUIDE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Investment Overview
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                How Much Does a Bathroom Remodel Cost in Chandler, AZ?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Bathroom remodeling costs vary from project to project. The final scope can depend on the size of the bathroom, condition of the existing space, demolition requirements, material selections, fixtures, shower configuration, tile, cabinetry, glass, plumbing, electrical work, and the number of components being replaced.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                A focused update can have a very different scope from a complete bathroom renovation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <div className="bg-secondary/60 border border-border p-6 rounded-xl">
                  <h3 className="font-serif font-bold text-foreground text-lg mb-2">Guest Bathroom Update</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A smaller project focusing on selected improvements such as a vanity, fixtures, flooring, tile, or finishes.
                  </p>
                </div>
                <div className="bg-secondary/60 border border-border p-6 rounded-xl">
                  <h3 className="font-serif font-bold text-foreground text-lg mb-2">Guest Bathroom Remodel</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A larger renovation involving the tub or shower, tile, vanity, flooring, fixtures, lighting, and finishes.
                  </p>
                </div>
                <div className="bg-secondary/60 border border-border p-6 rounded-xl">
                  <h3 className="font-serif font-bold text-foreground text-lg mb-2">Tub-to-Shower Conversion</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Involves tub removal, shower preparation, waterproofing, tile, fixtures, storage, and glass.
                  </p>
                </div>
                <div className="bg-secondary/60 border border-border p-6 rounded-xl">
                  <h3 className="font-serif font-bold text-foreground text-lg mb-2">Primary Bathroom Remodel</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A larger renovation combining a new shower, vanity, flooring, tile, lighting, fixtures, and storage.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/bathroom-remodeling-cost-chandler-az/"
                  className="text-primary font-bold hover:underline inline-flex items-center text-lg"
                >
                  <span>View the Chandler Bathroom Remodeling Cost Guide</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <span className="hidden sm:inline text-muted-foreground">|</span>
                <Link
                  href="/contact/"
                  className="bg-primary text-white hover:bg-primary/90 font-bold px-6 py-3 rounded-xl inline-flex items-center text-base"
                >
                  Request a Bathroom Remodeling Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: PROCESS (01-06) */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Structured Execution
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Our Bathroom Remodeling Process
              </h2>
              <p className="text-muted-foreground text-lg mt-4">
                A clear remodeling process helps you understand what happens before, during, and after the renovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* SECTION: SERVICE AREAS & ZIP CODES */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Coverage Areas
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Bathroom Remodeling Throughout Chandler, AZ
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                ARZ Home Remodeling serves homeowners throughout Chandler and nearby East Valley communities, subject to actual project and service-area coverage.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Bathroom remodeling needs can vary from neighborhood to neighborhood because homes differ in age, layout, size, and existing construction.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-secondary/60 border border-border p-6 rounded-2xl">
                  <h3 className="font-serif font-bold text-foreground text-xl mb-4 text-primary">
                    Chandler Neighborhoods
                  </h3>
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
                  <h3 className="font-serif font-bold text-foreground text-xl mb-4 text-primary">
                    Chandler ZIP Codes
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-muted-foreground text-base font-semibold">
                    {chandlerZipCodes.map((z, i) => (
                      <span key={i} className="bg-card border border-border px-3 py-2 rounded-lg text-center">
                        ZIP {z}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-base text-center">
                If you're unsure whether your home is within our service area, contact us before planning your project.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: HOME STYLES & PRACTICAL APPROACH */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Tailored Home Design
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Bathroom Remodeling for Different Chandler Home Styles
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The best bathroom renovation depends on the existing room rather than simply following a generic design.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                <div className="bg-card border border-border p-5 rounded-xl">
                  <strong className="text-foreground block mb-1">Compact Guest Bathroom:</strong>
                  <span className="text-muted-foreground text-sm">Benefits from a space-efficient vanity and walk-in shower.</span>
                </div>
                <div className="bg-card border border-border p-5 rounded-xl">
                  <strong className="text-foreground block mb-1">Primary Bathroom:</strong>
                  <span className="text-muted-foreground text-sm">Has room for a larger shower, double vanity, and upgraded storage.</span>
                </div>
                <div className="bg-card border border-border p-5 rounded-xl">
                  <strong className="text-foreground block mb-1">Older Bathroom:</strong>
                  <span className="text-muted-foreground text-sm">Benefits from replacing outdated surfaces while fixing layout issues.</span>
                </div>
                <div className="bg-card border border-border p-5 rounded-xl">
                  <strong className="text-foreground block mb-1">Accessible Remodel:</strong>
                  <span className="text-muted-foreground text-sm">Prioritizes easier shower entry, seating, and practical clearances.</span>
                </div>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Why Chandler Homeowners Choose a Practical Remodeling Approach
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                A successful bathroom renovation is not only about choosing attractive materials. The layout needs to work, the shower needs to suit the available space, storage needs to be convenient, the vanity needs to fit the room, and flooring must suit everyday use.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyChooseUsPoints.map((item, idx) => (
                  <div key={idx} className="bg-card border border-border p-6 rounded-xl shadow-sm">
                    <h3 className="font-serif font-bold text-foreground text-lg mb-2 text-primary">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: FEATURED PROJECTS (GALLERY SHOWCASE) */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Local Completed Work
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Bathroom Remodeling Projects in Chandler
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Seeing completed bathroom work can help homeowners understand the types of improvements that can be made to different spaces.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {featuredProjects.map((proj, idx) => (
                  <div key={idx} className="bg-secondary/60 border border-border p-6 rounded-xl">
                    <h3 className="font-serif font-bold text-foreground text-lg mb-2">{proj.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{proj.body}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/gallery/"
                  className="bg-primary text-white hover:bg-primary/90 font-bold px-8 py-4 rounded-xl inline-flex items-center text-lg shadow-md"
                >
                  <span>View the Full Bathroom Remodeling Gallery</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: SHOWER CONSTRUCTION & WATERPROOFING */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Technical Quality
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Shower Construction & Waterproofing
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The visible tile and glass are only part of a properly planned shower. Depending on the project, shower construction can involve:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {[
                  "Substrate preparation",
                  "Waterproofing",
                  "Shower drainage",
                  "Tile-setting materials",
                  "Carefully planned transitions",
                  "Shower niches",
                  "Shower seating",
                  "Fixture installation",
                  "Grout and sealant systems",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-card border border-border p-3 rounded-lg text-sm text-muted-foreground font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                The exact construction approach depends on the bathroom design and existing conditions. For homeowners, the important consideration is that a finished shower should be planned as a complete assembly rather than focusing only on the visible tile and glass.
              </p>
              <Link
                href="/shower-remodeling/"
                className="text-primary font-bold hover:underline inline-flex items-center text-base"
              >
                <span>Explore Our Shower Remodeling Process</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION: DESIGN IDEAS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">
                Inspiration & Features
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Bathroom Design Ideas for Chandler Homes
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                A successful bathroom design should solve the problems you actually have with the existing room.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Larger Walk-In Showers",
                    desc: "Replacing an underused bathtub can create a more open shower area and change how the bathroom feels.",
                  },
                  {
                    title: "Built-In Shower Storage",
                    desc: "A recessed niche can provide convenient storage for everyday shower products without relying on freestanding organizers.",
                  },
                  {
                    title: "Modern Vanities",
                    desc: "A properly sized vanity can improve storage and countertop space while coordinating with the rest of the bathroom.",
                  },
                  {
                    title: "Larger-Format Tile",
                    desc: "Larger-format tile can create a cleaner visual appearance while reducing the number of grout joints.",
                  },
                  {
                    title: "Improved Lighting",
                    desc: "Thoughtful bathroom lighting can improve visibility around the vanity, mirror, shower, and other areas.",
                  },
                  {
                    title: "Easier-to-Use Features",
                    desc: "Features such as handheld fixtures, seating, low-threshold entries, and well-positioned controls improve convenience.",
                  },
                ].map((idea, idx) => (
                  <div key={idx} className="bg-secondary/60 border border-border p-6 rounded-xl">
                    <h3 className="font-serif font-bold text-foreground text-lg mb-2 text-primary">{idea.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{idea.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block text-center">
                Got Questions?
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
                Frequently Asked Questions About Bathroom Remodeling in Chandler
              </h2>

              <div className="space-y-6">
                {chandlerFaqs.map((faq, idx) => (
                  <div key={idx} className="bg-card border border-border p-6 rounded-2xl shadow-sm">
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

        {/* SECTION: FINAL CTA */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                Ready to Remodel Your Chandler Bathroom?
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Whether you need a focused shower upgrade, a tub-to-shower conversion, a new vanity and tile, an accessibility improvement, or a complete bathroom renovation, the first step is understanding what your existing bathroom needs. Tell us what you want to change, what is not working, and what you would like the finished bathroom to accomplish.
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
                    Get a Free Bathroom Remodeling Estimate
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION WITH FORM */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
