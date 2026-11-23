import type { Metadata } from "next";
import Link from "next/link";
import {
  Accessibility,
  ArrowRight,
  Bath,
  ClipboardList,
  Grid3X3,
  HelpCircle,
  House,
  Lightbulb,
  PanelTop,
  Phone,
  ShowerHead,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Home Renovation Chandler AZ | Bathroom Remodeling | ARZ",
  description:
    "Planning a home renovation in Chandler? ARZ focuses on bathroom remodeling, including showers, tile, vanities, flooring, lighting, and accessibility.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/home-renovation-chandler-az/`,
  },
  openGraph: {
    title: "Home Renovation Chandler AZ | Bathroom Remodeling | ARZ",
    description:
      "Planning a home renovation in Chandler? ARZ focuses on bathroom remodeling, including showers, tile, vanities, flooring, lighting, and accessibility.",
    url: `${siteConfig.url}/home-renovation-chandler-az/`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Does ARZ handle whole-home renovations in Chandler?",
    answer:
      "ARZ focuses on bathroom remodeling rather than whole-home renovations, additions, kitchens, or structural carpentry. If your larger plan includes a bathroom, we can help you define and discuss that bathroom scope.",
  },
  {
    question: "Can a bathroom remodel be one part of a larger home renovation plan?",
    answer:
      "Yes. A bathroom can be treated as a defined project within a broader home plan. Separating the room’s layout, fixtures, surfaces, storage, lighting, and accessibility needs can make it easier to discuss the work with the right specialist.",
  },
  {
    question: "What bathroom projects does ARZ discuss?",
    answer:
      "Depending on the room and requested changes, the conversation may focus on a complete bathroom remodel, shower remodeling, a tub-to-shower conversion, tile or flooring, a vanity, lighting, or accessibility improvements.",
  },
  {
    question: "Do I need a finished design before contacting ARZ?",
    answer:
      "No. You can start with the problem you want to solve, a few inspiration images, and the features you are considering. The appropriate direction depends on your room, existing conditions, preferences, and project scope.",
  },
  {
    question: "What should I send when asking about the bathroom portion of a renovation?",
    answer:
      "Share the Chandler area, a few photos if available, what is not working, what you want to keep, the features you are considering, and whether you are thinking about a targeted update or a broader bathroom renovation.",
  },
  {
    question: "What happens after I share my bathroom renovation scope?",
    answer:
      "ARZ can use the information to understand what you are trying to change and direct the conversation toward the relevant bathroom service. The next step depends on the room, requested work, and information available about the existing space.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/home-renovation-chandler-az/#webpage`,
      url: `${siteConfig.url}/home-renovation-chandler-az/`,
      name: "Home Renovation Chandler AZ | Bathroom Remodeling | ARZ",
      description:
        "Planning a home renovation in Chandler? ARZ focuses on bathroom remodeling, including showers, tile, vanities, flooring, lighting, and accessibility.",
      inLanguage: "en-US",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/home-renovation-chandler-az/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteConfig.url}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Home Renovation Chandler AZ",
          item: `${siteConfig.url}/home-renovation-chandler-az/`,
        },
      ],
    },
  ],
};

const serviceCards = [
  {
    href: "/bathroom-remodeling-chandler-az/",
    label: "Chandler bathroom remodeling",
    description: "Start with a room-wide plan when several parts of the bathroom need to work together.",
    icon: Bath,
  },
  {
    href: "/shower-remodeling/",
    label: "Shower remodeling",
    description: "Explore a more functional or updated shower area without losing sight of daily use.",
    icon: ShowerHead,
  },
  {
    href: "/tub-to-shower-conversion/",
    label: "Tub-to-shower conversion",
    description: "Consider a different bathing layout when the existing tub is no longer serving the room.",
    icon: ArrowRight,
  },
  {
    href: "/bathroom-tile-installation/",
    label: "Bathroom tile installation",
    description: "Plan wall, shower, and floor surfaces around scale, texture, grout, and maintenance.",
    icon: Grid3X3,
  },
  {
    href: "/bathroom-flooring-installation/",
    label: "Bathroom flooring",
    description: "Coordinate the floor with the doorway, vanity, wet areas, and the rest of the room.",
    icon: House,
  },
  {
    href: "/bathroom-vanity-installation/",
    label: "Bathroom vanity installation",
    description: "Think through storage, counter space, sink placement, hardware, and fixture relationships.",
    icon: PanelTop,
  },
  {
    href: "/bathroom-lighting-installation/",
    label: "Bathroom lighting",
    description: "Use lighting decisions to support mirrors, grooming, storage, and the overall room direction.",
    icon: Lightbulb,
  },
  {
    href: "/handicap-accessible-bathroom/",
    label: "Accessible bathroom planning",
    description: "Discuss entry, reach, seating, storage, and other features around the person using the room.",
    icon: Accessibility,
  },
];

export default function HomeRenovationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <main id="main-content">
        <section className="bg-secondary/40 border-b border-border">
          <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Home renovation planning in Chandler, Arizona
              </p>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
                Planning a Home Renovation in Chandler, AZ? Start With the Bathroom Scope
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                ARZ Home Remodeling focuses on bathroom remodeling rather than whole-home renovation, additions, or structural carpentry. If your larger plan includes a bathroom, this page helps you find the right starting point for that part of the project.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/bathroom-remodeling-chandler-az/">
                    Explore Chandler Bathroom Remodeling <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${siteConfig.phoneClean}`}>
                    Call {siteConfig.phone} <Phone className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">A clear service boundary</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-serif font-bold text-foreground">
                What ARZ can help you plan
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A broad renovation plan can contain several different trades and decisions. ARZ’s documented focus is the bathroom itself: how the room should function, which surfaces and fixtures belong together, and what kind of update fits the space you want to change.
              </p>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {serviceCards.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group rounded-2xl border border-border bg-background p-5 hover:border-primary/60 hover:shadow-sm transition-all"
                  >
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="mt-4 font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.label}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                      View service <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18 bg-secondary/30 border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Choose the right starting point</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-serif font-bold text-foreground">
                Is your bathroom update targeted or room-wide?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                You do not need to decide every finish before asking a question. It is more useful to describe what is not working and the outcome you want. That gives the project conversation a practical starting point without treating an inspiration image as a complete plan.
              </p>
            </div>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-background p-6">
                <h3 className="text-xl font-serif font-semibold text-foreground">A targeted bathroom update</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  This may be the right direction when one part of the room is creating the problem. Examples include an outdated shower, a tub that no longer suits daily use, worn tile, limited vanity storage, or lighting that does not support the way the room is used.
                </p>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                  Start with the service that best matches the feature: <Link className="text-primary hover:underline" href="/shower-remodeling/">shower remodeling</Link>, <Link className="text-primary hover:underline" href="/tub-to-shower-conversion/">tub-to-shower conversion</Link>, tile, flooring, vanity, or lighting.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6">
                <h3 className="text-xl font-serif font-semibold text-foreground">A broader bathroom renovation</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  A room-wide project may make more sense when several elements are connected: layout, wet area, surfaces, storage, lighting, and accessibility. The appropriate scope depends on the bathroom’s dimensions, existing conditions, products, and the changes you want to make.
                </p>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                  For a room-wide starting point, visit the <Link className="text-primary hover:underline" href="/bathroom-remodeling-chandler-az/">Chandler bathroom remodeling</Link> hub or <Link className="text-primary hover:underline" href="/bathroom-remodeling/">complete bathroom remodeling</Link> page.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Prepare for a useful conversation</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-serif font-bold text-foreground">
                What to gather before you reach out
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A few simple details can make it easier to discuss the bathroom portion of a larger renovation. You can start without a finished design or a complete materials list.
              </p>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-border p-6">
                <ClipboardList className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-foreground">Describe the problem</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Note what is difficult, outdated, crowded, damaged, or no longer suited to daily use.</p>
              </div>
              <div className="rounded-2xl border border-border p-6">
                <House className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-foreground">Share the room context</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Include the Chandler area, photos if available, and whether you are considering layout or plumbing changes.</p>
              </div>
              <div className="rounded-2xl border border-border p-6">
                <Lightbulb className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-foreground">Bring the direction</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Mention inspiration images, preferred features, accessibility needs, and what you want to keep.</p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-muted-foreground leading-relaxed">
                If you are coordinating a larger home renovation, describe the bathroom as a defined scope rather than assuming one contractor handles every part of the plan. ARZ can direct the conversation toward the bathroom work that fits the request.
              </p>
              <Button asChild className="mt-5">
                <Link href="/contact/">Share Your Bathroom Scope <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18 bg-secondary/30 border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Questions before you choose a path</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-serif font-bold text-foreground">Home renovation and bathroom remodeling FAQs</h2>
            </div>
            <div className="mt-8 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-xl border border-border bg-background px-5 py-4">
                  <summary className="cursor-pointer list-none pr-8 font-semibold text-foreground marker:hidden relative">
                    {faq.question}
                    <span className="absolute right-0 top-0 text-primary text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="pt-3 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Next step</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-serif font-bold text-foreground">Have a larger renovation plan with a bathroom in it?</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Tell ARZ Home Remodeling what you want to change in your Chandler, Arizona bathroom. Include the feature, problem, or inspiration that started the conversation, and we can point you toward the relevant bathroom remodeling scope.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact/">Contact ARZ About Your Bathroom <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${siteConfig.phoneClean}`}>Call {siteConfig.phone} <Phone className="ml-2 h-4 w-4" /></a>
              </Button>
              <Link href="/" className="sm:ml-2 inline-flex items-center justify-center text-sm text-muted-foreground hover:text-primary transition-colors">
                Return to ARZ Home Remodeling <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
