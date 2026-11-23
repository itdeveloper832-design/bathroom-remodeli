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
  HeartHandshake,
  Accessibility,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalTrust from "@/components/home/local-trust";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Sun Lakes AZ | ARZ Home Remodeling",
  description:
    "Bathroom remodeling in Sun Lakes, AZ for walk-in showers, tub-to-shower conversions, accessible updates, tile, vanities, and complete renovations.",
  keywords: [
    "bathroom remodeling Sun Lakes AZ",
    "bathroom remodel Sun Lakes",
    "walk-in shower Sun Lakes",
    "tub-to-shower conversion Sun Lakes",
    "accessible bathroom remodeling Sun Lakes",
    "bathroom tile installation Sun Lakes",
    "bathroom vanity Sun Lakes",
    "bathroom remodel cost Sun Lakes",
  ],
  openGraph: {
    title: "Bathroom Remodeling Sun Lakes AZ | ARZ Home Remodeling",
    description:
      "Bathroom remodeling in Sun Lakes, AZ for walk-in showers, tub-to-shower conversions, accessible updates, tile, vanities, and complete renovations.",
    url: `${siteConfig.url}/bathroom-remodeling-sun-lakes/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Sun Lakes AZ - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Sun Lakes AZ | ARZ Home Remodeling",
    description:
      "Bathroom remodeling in Sun Lakes, AZ for walk-in showers, tub-to-shower conversions, accessible updates, tile, vanities, and complete renovations.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-sun-lakes/`,
  },
};

const sunLakesFaqs = [
  {
    question: "Can you convert my bathtub into a walk-in shower in Sun Lakes?",
    answer:
      "Yes. A tub-to-shower conversion can replace an existing bathtub with a shower designed around the available space. The project may include demolition, waterproofing, tile, fixtures, storage, seating, flooring, and glass.",
  },
  {
    question: "Can you make my Sun Lakes bathroom easier to use?",
    answer:
      "Yes. Depending on the existing layout, improvements can include a low-threshold shower, curbless entry, shower seating, handheld fixtures, grab bars, improved lighting, accessible controls, and slip-conscious flooring.",
  },
  {
    question: "Can you remodel only my shower?",
    answer:
      "Yes. A bathroom renovation does not necessarily require remodeling the entire room. A shower-focused project can address the existing bathing area while leaving other parts of the bathroom unchanged when appropriate.",
  },
  {
    question: "Do you install bathroom vanities?",
    answer:
      "Yes. Vanity projects can include removing the existing vanity, installing a new configuration, coordinating countertops and sinks, and completing required plumbing connections.",
  },
  {
    question: "What type of tile can I use in my bathroom?",
    answer:
      "The appropriate tile depends on the application, design, maintenance preferences, and installation requirements. Options can include porcelain, ceramic, and other suitable tile materials.",
  },
  {
    question: "How much does bathroom remodeling cost in Sun Lakes?",
    answer:
      "The cost depends on the size and condition of the bathroom and the work included. A tub-to-shower conversion, vanity replacement, and complete bathroom renovation can all have very different project requirements. An in-home evaluation provides a more useful estimate than a generic price range.",
  },
  {
    question: "How long does a bathroom remodel take?",
    answer:
      "The timeline depends on the size and complexity of the project, materials, demolition, plumbing or electrical modifications, and other site conditions. A project schedule can be discussed after the scope is established.",
  },
  {
    question: "Do bathroom remodeling projects require permits?",
    answer:
      "Permit requirements depend on the work being performed and applicable local requirements. Projects involving plumbing, electrical, structural changes, or other regulated work may require permits or inspections. Applicable requirements should be confirmed for the specific project.",
  },
];

const scopeChecklist = [
  "Walk-in shower installation",
  "Tub-to-shower conversion",
  "Curbless or low-threshold shower",
  "Accessible bathroom improvements",
  "Shower seating",
  "Grab bars and support features",
  "Bathroom vanity replacement",
  "Countertop installation",
  "Shower and bathroom tile",
  "Bathroom flooring",
  "Lighting and fixture updates",
  "Storage improvements",
  "Complete bathroom remodeling",
];

const mainServices = [
  {
    title: "Walk-In Shower Remodeling",
    href: "/walk-in-showers/",
    description:
      "Replace an outdated tub or enclosed shower with a more open and convenient bathing area.",
    features: [
      "Low-threshold entry",
      "Curbless shower design",
      "Custom tile",
      "Built-in storage niches",
      "Shower seating",
      "Handheld showerheads",
      "Modern controls",
      "Frameless or semi-frameless glass",
      "Updated shower fixtures",
    ],
    detail:
      "A properly planned shower can make the bathroom easier to use while also creating a cleaner, more contemporary appearance.",
    cta: "Explore Walk-In Shower Remodeling →",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "If your bathtub is rarely used, converting it into a shower can make better use of the existing bathroom footprint.",
    features: [
      "Bathtub removal",
      "Surface preparation",
      "Plumbing adjustments when necessary",
      "Shower waterproofing",
      "Tile installation",
      "Shower fixtures",
      "Storage niches",
      "Shower seating",
      "Flooring updates",
      "Glass enclosure installation",
    ],
    detail:
      "The finished design can be planned around the existing tub area when the layout allows, helping create a practical shower without unnecessarily changing the entire bathroom.",
    cta: "Explore Tub-to-Shower Conversion →",
  },
  {
    title: "Accessible Bathroom Remodeling",
    href: "/handicap-accessible-bathroom/",
    description:
      "Bathroom accessibility can become increasingly important when homeowners want their space to remain comfortable and practical for years to come.",
    features: [
      "Low-threshold shower entries",
      "Curbless showers",
      "Shower seating",
      "Handheld showerheads",
      "Grab bars",
      "Improved lighting",
      "Easier-to-reach controls",
      "Slip-conscious flooring",
      "Practical storage",
      "Accessible vanity configurations",
    ],
    detail:
      "Accessibility features should be selected according to the homeowner's needs and the actual dimensions of the bathroom.",
    cta: "Explore Accessible Bathroom Remodeling →",
  },
  {
    title: "Bathroom Vanity Installation",
    href: "/bathroom-vanity-installation/",
    description:
      "A vanity affects both storage and the overall appearance of the bathroom.",
    features: [
      "More useful cabinet storage",
      "Additional counter space",
      "Updated sinks",
      "New hardware",
      "Improved organization",
      "A better fit for the room",
    ],
    detail:
      "Larger bathrooms may accommodate double vanities, while smaller bathrooms can benefit from compact configurations that preserve usable floor space. Quartz, granite, and other countertop materials can be selected to coordinate with the vanity, tile, flooring, fixtures, and overall bathroom design.",
    cta: "Explore Bathroom Vanity Installation →",
  },
  {
    title: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation/",
    description:
      "Tile plays an important role in both the appearance and maintenance of a bathroom.",
    features: [
      "Shower walls",
      "Shower floors",
      "Bathroom floors",
      "Niches",
      "Backsplashes",
      "Accent walls",
      "Tub surrounds",
    ],
    detail:
      "Tile size, pattern, texture, color, grout, and transition details can all be considered together to create a cohesive finished space. Porcelain and other suitable materials can provide durable surfaces for many bathroom applications.",
    cta: "Explore Bathroom Tile Installation →",
  },
  {
    title: "Bathroom Flooring",
    href: "/bathroom-flooring-installation/",
    description:
      "Bathroom flooring needs to work with the rest of the room while providing a practical surface for everyday use.",
    features: [
      "Porcelain tile",
      "Ceramic tile",
      "Slip-conscious flooring options",
      "Coordinated grout",
      "Floor patterns",
      "Transitions between surfaces",
    ],
    detail:
      "The goal is to create a floor that fits both the visual style and practical requirements of the bathroom.",
    cta: "Explore Bathroom Flooring →",
  },
];

const whatCanImprove = [
  {
    title: "Replace an Unused Bathtub",
    description:
      "If you rarely use the bathtub, the space may be better suited to a walk-in shower with improved storage and easier access.",
  },
  {
    title: "Improve Shower Access",
    description:
      "A low-threshold or curbless shower can reduce the step into the bathing area and provide a more open layout.",
  },
  {
    title: "Add More Storage",
    description:
      "Vanity drawers, cabinets, recessed shower niches, and other storage features can help keep everyday items organized.",
  },
  {
    title: "Update an Outdated Vanity",
    description:
      "A new vanity can improve cabinet space, counter area, sink configuration, and the overall appearance of the room.",
  },
  {
    title: "Refresh Worn Tile",
    description:
      "Replacing dated shower walls, flooring, backsplashes, or other surfaces can give the bathroom a completely different appearance.",
  },
  {
    title: "Improve Lighting",
    description:
      "Updated vanity, ceiling, and shower-area lighting can make everyday bathroom routines more comfortable.",
  },
  {
    title: "Make Better Use of Existing Space",
    description:
      "Changing the shower, vanity, storage, or fixture arrangement may improve how efficiently the bathroom functions without requiring unnecessary expansion.",
  },
];

const sunLakesCommunities = [
  {
    name: "Oakwood",
    description:
      "Bathroom updates in Oakwood can range from replacing an older bathtub to creating a more accessible shower, improving storage, or refreshing tile and fixtures.",
  },
  {
    name: "Cottonwood",
    description:
      "Homeowners in Cottonwood may choose focused shower renovations, vanity replacements, tub conversions, or broader bathroom improvements.",
  },
  {
    name: "IronOaks",
    description:
      "Bathroom renovations in IronOaks can combine improved accessibility with updated finishes, better storage, modern fixtures, and more comfortable shower areas.",
  },
  {
    name: "Palo Verde",
    description:
      "Projects in Palo Verde can range from replacing an outdated shower or tub to coordinating a larger renovation involving the vanity, flooring, lighting, and finishes.",
  },
  {
    name: "Sun Lakes Country Club",
    description:
      "Bathroom improvements can be tailored to the home's existing footprint, whether the priority is easier shower access, updated materials, better storage, or a complete renovation.",
  },
];

const comfortMaterials = [
  {
    title: "Easy-to-Maintain Tile",
    description:
      "Porcelain and other appropriate tile materials can provide durable surfaces for shower walls and bathroom floors while offering a wide range of colors, sizes, and patterns.",
  },
  {
    title: "Practical Grout Selection",
    description:
      "Grout selection depends on the tile, application, color, and maintenance preferences. We can help determine which available option fits the intended use of the space.",
  },
  {
    title: "Shower Glass",
    description:
      "A glass enclosure can make a shower feel more open while allowing custom tile and other design features to remain visible. Glass treatments may also be considered when homeowners want to simplify routine cleaning.",
  },
  {
    title: "Quartz Countertops",
    description:
      "Quartz can provide a durable and low-maintenance surface for many bathroom vanity applications while offering a range of colors and patterns.",
  },
  {
    title: "Smart Storage",
    description:
      "Built-in shower niches, vanity drawers, shelving, and other storage solutions can reduce countertop clutter and keep frequently used items within easy reach.",
  },
];

const walkInShowerFeatures = [
  "Low or zero-threshold entry",
  "Shower seating",
  "Handheld showerhead",
  "Adjustable controls",
  "Recessed storage niche",
  "Appropriate shower drainage",
  "Slip-conscious shower flooring",
  "Frameless or semi-frameless glass",
  "Large-format or smaller-format tile",
];

const waterproofingItems = [
  "Substrate preparation",
  "Waterproof shower walls",
  "Waterproof shower floors",
  "Treated corners and transitions",
  "Properly sealed penetrations",
  "Drainage preparation",
  "Tile installation",
  "Grout and sealant",
  "Fixture installation",
  "Glass enclosure installation",
];

const costFactors = [
  "Bathroom size",
  "Existing tub or shower",
  "Demolition requirements",
  "Plumbing modifications",
  "Electrical work",
  "Shower configuration",
  "Tile selection",
  "Vanity and countertop",
  "Flooring",
  "Shower glass",
  "Fixtures",
  "Accessibility features",
  "Custom storage",
  "Layout modifications",
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    body: "We discuss what you want to change, what isn't working with the current bathroom, your preferred style, and the type of renovation you're considering.",
  },
  {
    step: "02",
    title: "In-Home Evaluation",
    body: "We review the existing layout, measurements, shower or tub, vanity, flooring, plumbing, storage, and other relevant conditions.",
  },
  {
    step: "03",
    title: "Project Planning",
    body: "We organize the project around your priorities and determine which improvements make sense for the available space.",
  },
  {
    step: "04",
    title: "Material Selection",
    body: "Choose tile, flooring, vanity, countertop, fixtures, glass, hardware, colors, and other finishes for the planned design.",
  },
  {
    step: "05",
    title: "Remodeling",
    body: "The project moves through the required demolition, preparation, plumbing or electrical work, waterproofing, installation, finishing, and cleanup.",
  },
  {
    step: "06",
    title: "Final Walkthrough",
    body: "After the work is completed, we review the finished bathroom and address remaining project details.",
  },
];

const whyChooseUsPoints = [
  {
    title: "Bathroom-Focused Remodeling",
    body: "We focus on bathroom renovation projects ranging from individual shower and vanity improvements to complete bathroom transformations.",
  },
  {
    title: "Practical Design",
    body: "We plan the bathroom around how you use the space, available dimensions, storage needs, accessibility considerations, and desired improvements.",
  },
  {
    title: "Clear Project Scope",
    body: "Before construction, the proposed work, materials, and project scope are discussed so you understand what is included.",
  },
  {
    title: "Local Service",
    body: "We work with homeowners throughout Sun Lakes and surrounding East Valley communities.",
  },
  {
    title: "Material Guidance",
    body: "We help homeowners compare tile, flooring, vanities, countertops, fixtures, glass, and other finishes according to appearance, intended use, and maintenance requirements.",
  },
  {
    title: "Attention to Installation Details",
    body: "Waterproofing, tile layout, transitions, fixtures, storage, vanity installation, glass, and finishing details all contribute to the completed bathroom.",
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

export default function SunLakesBathroomRemodelingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          {
            name: "Bathroom Remodeling Sun Lakes",
            url: "https://arzhomeremodeling.com/bathroom-remodeling-sun-lakes/",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Bathroom Remodeling in Sun Lakes, AZ"
        serviceDescription="Bathroom remodeling in Sun Lakes, AZ for walk-in showers, tub conversions, accessible updates, tile, vanities, and complete bathroom renovations."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-sun-lakes/`}
      />
      <FAQSchema faqs={sunLakesFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling Sun Lakes AZ"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-sun-lakes/`}
      />
      <Header />
      <main>
        {/* HERO SECTION */}
        <ServiceHero
          subtitle="Bathroom Remodeling Designed Around Sun Lakes Homes"
          title="Bathroom Remodeling in Sun Lakes, AZ"
          description="Upgrade your bathroom with a renovation designed around the way you actually use your home. ARZ Home Remodeling provides bathroom remodeling in Sun Lakes, AZ, including walk-in showers, tub-to-shower conversions, accessible bathroom updates, vanity installations, tile and flooring upgrades, and complete bathroom renovations. Whether you want to replace an outdated bathtub, improve shower access, add practical storage, update worn finishes, or completely transform the room, we plan the project around your existing layout, priorities, and design preferences."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Sun Lakes", url: `${siteConfig.url}/bathroom-remodeling-sun-lakes/` },
          ]}
        />

        {/* SECTION 1: DESIGNED FOR SUN LAKES HOMEOWNERS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling for Sun Lakes Homeowners
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              A bathroom should be comfortable, functional, and easy to maintain.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Over time, bathrooms can develop problems that make everyday routines less convenient. An older bathtub may have a high step-in height. A shower may have limited storage or outdated fixtures. Vanity cabinets can lose functionality, while tile, flooring, lighting, and countertops may show years of wear.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A bathroom renovation gives you the opportunity to address those problems without making unnecessary changes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling works with Sun Lakes homeowners on both focused improvements and larger renovations. Depending on your goals, your project may include:
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
              The right approach depends on the existing bathroom, available space, plumbing, materials, and how you want the finished room to function.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <a href="#contact">Request a Free Bathroom Remodeling Estimate</a>
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

        {/* SECTION 2: THROUGHOUT SUN LAKES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Renovations Throughout Sun Lakes, AZ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Sun Lakes is an established community with a variety of homes and residential neighborhoods, including <strong className="font-semibold text-foreground">Oakwood, Cottonwood, IronOaks, Palo Verde, and Sun Lakes Country Club</strong>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Because homes have different layouts, ages, and renovation histories, there is no single remodeling solution that works for every bathroom.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Some homeowners may only need to replace an outdated vanity or shower. Others may want to remove an unused bathtub and create a more accessible walk-in shower. A larger renovation may combine the shower, vanity, flooring, lighting, tile, fixtures, and storage into one coordinated project.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We begin with the existing bathroom and identify the improvements that will make the biggest difference.
            </p>

            <div className="bg-background p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="font-semibold text-foreground text-lg mb-4">
                Bathroom Remodeling Services for Sun Lakes Homes:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground font-medium">
                {[
                  "Primary bathrooms",
                  "Guest bathrooms",
                  "Smaller bathrooms",
                  "Aging-in-place improvements",
                  "Shower-only renovations",
                  "Tub-to-shower conversions",
                  "Vanity and countertop upgrades",
                  "Complete bathroom renovations",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SERVICES */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground">
                Bathroom Remodeling Services in Sun Lakes
              </h2>
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

        {/* SECTION 4: WHAT CAN A BATHROOM REMODEL IMPROVE? */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Everyday Improvements</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                What Can a Bathroom Remodel Improve?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatCanImprove.map((item, idx) => (
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

        {/* SECTION 5: SUN LAKES COMMUNITIES */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Local Neighborhoods</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Bathroom Remodeling for Sun Lakes Communities
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sunLakesCommunities.map((comm, idx) => (
                <div
                  key={comm.name}
                  className={`bg-secondary p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between ${
                    idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{comm.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{comm.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: COMFORT AND EASY MAINTENANCE */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Materials &amp; Care</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-4 text-foreground">
                Designing a Bathroom for Comfort and Easy Maintenance
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A bathroom should not only look good when the project is finished. The materials and layout should also make sense for everyday use.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {comfortMaterials.map((mat, idx) => (
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
        <LocalTrust cityName="Sun Lakes" />

        {/* SECTION 7: WALK-IN SHOWER DESIGN */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              Walk-In Shower Design for Sun Lakes Bathrooms
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              A walk-in shower should be designed around the bathroom and the person using it.
            </p>

            <div className="bg-secondary p-8 rounded-2xl border border-border mb-6 shadow-sm">
              <h3 className="font-semibold text-foreground text-base mb-4">
                Depending on the available space, a shower may include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                {walkInShowerFeatures.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed text-center max-w-2xl mx-auto">
              Not every bathroom needs every feature. We help determine which options make sense for the existing layout, intended use, maintenance preferences, and overall design.
            </p>
          </div>
        </section>

        {/* SECTION 8: WATERPROOFING */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              Shower Waterproofing and Moisture Protection
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center max-w-2xl mx-auto">
              Tile is only the visible part of a shower. Behind the finished surface, the shower assembly requires appropriate preparation, waterproofing, drainage, and installation details.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              For appropriate tiled shower projects, waterproofing systems such as <strong className="font-semibold text-foreground">Schluter-KERDI</strong> may be incorporated into the planned assembly.
            </p>

            <div className="bg-background p-8 rounded-2xl border border-border mb-6 shadow-sm">
              <h3 className="font-semibold text-foreground text-base mb-4">
                Depending on the project, shower preparation can include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                {waterproofingItems.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed text-center max-w-2xl mx-auto">
              The specific waterproofing and installation method depends on the existing bathroom, selected materials, shower design, and project requirements.
            </p>
          </div>
        </section>

        {/* SECTION 9: COST GUIDE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Project Budgeting</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Bathroom Remodeling Cost in Sun Lakes, AZ
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                There is no single price for every bathroom renovation in Sun Lakes. The total project cost depends on the existing bathroom and the scope of work.
              </p>
            </div>

            <div className="bg-secondary/60 rounded-2xl p-6 md:p-8 border border-border mb-8">
              <h3 className="font-semibold text-foreground text-base mb-4">
                Factors that can affect the cost include:
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {costFactors.map((factor) => (
                  <div key={factor} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{factor}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed text-center mb-8 max-w-2xl mx-auto">
              For example, a straightforward vanity replacement has very different requirements from a complete primary bathroom renovation. Rather than relying on a generic square-foot estimate, we evaluate the existing space and your goals before preparing a project scope and estimate.
            </p>

            <div className="text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg"
              >
                Request a Free Sun Lakes Bathroom Remodeling Estimate →
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 10: PROCESS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Step-By-Step</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground">
                Our Sun Lakes Bathroom Remodeling Process
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

        {/* SECTION 11: WHY CHOOSE ARZ */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose ARZ</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-4 text-foreground">
                Why Choose ARZ Home Remodeling?
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

        {/* SECTION 12: PORTFOLIO SHOWCASE */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <span className="text-primary text-sm font-medium tracking-wider uppercase">
                  Bathroom Remodeling Projects
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-4 text-foreground">
                  Before &amp; After Transformations
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Every bathroom has different dimensions, layouts, materials, and remodeling requirements. Our project experience includes primary bathroom renovations, walk-in showers, tub-to-shower conversions, and guest bathroom updates.
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

        {/* SECTION 13: SERVICE AREA */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling Near Sun Lakes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ARZ Home Remodeling serves homeowners throughout Sun Lakes and nearby communities, including:
            </p>

            <p className="font-semibold text-foreground text-lg mb-8 max-w-2xl mx-auto">
              Oakwood · Cottonwood · IronOaks · Palo Verde · Sun Lakes Country Club · Chandler · Ocotillo · Fulton Ranch · Layton Lakes · Downtown Chandler · Gilbert · Mesa
            </p>

            <p className="text-muted-foreground text-sm mb-6">
              If you&apos;re unsure whether your property is within our service area, contact us and we&apos;ll confirm availability for your location.
            </p>

            <div className="flex flex-wrap justify-center gap-5 pt-6 border-t border-border">
              <Link href="/bathroom-remodeling-chandler-az/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Chandler AZ →
              </Link>
              <Link href="/bathroom-remodeling-ocotillo/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Ocotillo →
              </Link>
              <Link href="/bathroom-remodeling-fulton-ranch/" className="text-primary font-semibold hover:underline text-sm">
                Bathroom Remodeling Fulton Ranch →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 14: FAQ */}
        <ServiceFAQ
          title="Frequently Asked Questions"
          description="Get answers to common questions about bathroom remodeling in Sun Lakes, AZ."
          faqs={sunLakesFaqs}
        />

        {/* SECTION 15: TESTIMONIALS */}
        <Testimonials />

        {/* SECTION 16: CONTACT */}
        <ContactSection />

        {/* SECTION 17: FINAL CTA */}
        <ServiceCTA
          title="Ready to Remodel Your Sun Lakes Bathroom?"
          description="Make your bathroom more comfortable, functional, and easier to maintain with a renovation designed around your home. Tell us what you'd like to change and we'll discuss your remodeling options and next steps."
        />
      </main>
      <Footer />
    </>
  );
}
