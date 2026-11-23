import type { Metadata } from "next";
import Link from "next/link";
import {
  Accessibility,
  ArrowRight,
  Bath,
  CheckCircle2,
  DoorOpen,
  Home,
  Lightbulb,
  PanelsTopLeft,
  Phone,
  Ruler,
  ShowerHead,
  Sparkles,
} from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Roofing Contractors Chandler AZ | Bathroom Remodeling",
  description:
    "Looking for roofing contractors in Chandler? ARZ focuses on bathroom remodeling, with local service paths for showers, tubs, tile, flooring, and accessibility.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/roofing-chandler-az/`,
  },
  openGraph: {
    title: "Roofing Contractors Chandler AZ | Bathroom Remodeling",
    description:
      "Looking for roofing contractors in Chandler? ARZ focuses on bathroom remodeling, with local service paths for showers, tubs, tile, flooring, and accessibility.",
    url: `${siteConfig.url}/roofing-chandler-az/`,
    type: "website",
  },
};

const faqs = [
  {
    question: "Does ARZ provide roofing services in Chandler?",
    answer:
      "No. ARZ Home Remodeling is not a roofing contractor and does not provide roof inspections, roof repair, roof replacement, or general roofing work. ARZ focuses on bathroom remodeling in Chandler, Arizona.",
  },
  {
    question: "What remodeling services does ARZ provide instead?",
    answer:
      "ARZ provides bathroom-focused remodeling paths such as complete bathroom remodeling, shower remodeling, tub-to-shower conversions, tile and flooring installation, vanities, lighting, and accessible bathroom planning. Explore the service that best matches your bathroom goal.",
  },
  {
    question: "Can ARZ remodel a bathroom as part of a larger home plan?",
    answer:
      "ARZ can discuss the bathroom portion of a larger home-improvement plan. The company’s work is focused on bathroom remodeling rather than whole-home renovation or roofing, so sharing the bathroom’s goals first helps establish whether the request fits the available scope.",
  },
  {
    question: "Should I ask for one bathroom service or a complete remodel?",
    answer:
      "A focused service may be a good starting point when one feature is the clear priority, such as a shower, tub, tile, flooring, vanity, or lighting. When several elements need to work together, a complete bathroom remodeling discussion may be more useful.",
  },
  {
    question: "What should I include when contacting ARZ?",
    answer:
      "Describe the bathroom, the problem you want to address, and the direction you are considering. It also helps to share your Chandler neighborhood or ZIP code, whether the room is used by guests or family members, and any accessibility or layout concerns.",
  },
  {
    question: "What is the next step for a Chandler bathroom project?",
    answer:
      "Start with the Chandler bathroom remodeling page or contact ARZ directly. A clear description of the room and the improvements you are considering gives the team a useful starting point for discussing the appropriate bathroom service path.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/roofing-chandler-az/#webpage`,
      url: `${siteConfig.url}/roofing-chandler-az/`,
      name: "Roofing Contractors Chandler AZ | Bathroom Remodeling",
      description:
        "A scope-clarification page for Chandler visitors searching for roofing contractors who may instead need bathroom remodeling services.",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: "Bathroom remodeling in Chandler, Arizona",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/roofing-chandler-az/#faq`,
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
      "@id": `${siteConfig.url}/roofing-chandler-az/#breadcrumbs`,
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
          name: "Services",
          item: `${siteConfig.url}/services/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Roofing Chandler AZ",
          item: `${siteConfig.url}/roofing-chandler-az/`,
        },
      ],
    },
  ],
};

const serviceCards = [
  {
    href: "/bathroom-remodeling-chandler-az/",
    label: "Chandler Bathroom Remodeling",
    description: "Start with the local hub when several bathroom decisions need to be considered together.",
    icon: Home,
  },
  {
    href: "/bathroom-remodeling/",
    label: "Complete Bathroom Remodeling",
    description: "Review the broader bathroom-remodeling path for a coordinated room update.",
    icon: Bath,
  },
  {
    href: "/shower-remodeling/",
    label: "Shower Remodeling",
    description: "Explore shower-focused updates when the bathing area is the main concern.",
    icon: ShowerHead,
  },
  {
    href: "/tub-to-shower-conversion/",
    label: "Tub-to-Shower Conversion",
    description: "Consider a tub conversion when a more open or easier-to-use shower is the goal.",
    icon: DoorOpen,
  },
  {
    href: "/bathroom-tile-installation/",
    label: "Bathroom Tile Installation",
    description: "Plan wall or floor tile as part of a bathroom finish update.",
    icon: PanelsTopLeft,
  },
  {
    href: "/bathroom-flooring-installation/",
    label: "Bathroom Flooring",
    description: "Review bathroom-specific flooring options for a room exposed to regular moisture.",
    icon: Ruler,
  },
  {
    href: "/bathroom-vanity-installation/",
    label: "Bathroom Vanity Installation",
    description: "Improve storage, counter space, and the daily-use area around the sink.",
    icon: Sparkles,
  },
  {
    href: "/bathroom-lighting-installation/",
    label: "Bathroom Lighting",
    description: "Consider lighting when visibility, task function, or the room’s atmosphere needs attention.",
    icon: Lightbulb,
  },
  {
    href: "/handicap-accessible-bathroom/",
    label: "Accessible Bathroom Planning",
    description: "Explore bathroom changes that support safer movement and easier daily use.",
    icon: Accessibility,
  },
];

export default function RoofingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <main>
        <section className="bg-secondary/40 py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Chandler, Arizona · Bathroom remodeling
              </p>
              <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Looking for Roofing Contractors in Chandler? Start With the Bathroom Scope
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                If you searched for roofing contractors in Chandler, you may be looking for a different trade. ARZ Home Remodeling is not a roofing contractor; our work is focused on bathroom remodeling for homeowners in Chandler and throughout Arizona.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/bathroom-remodeling-chandler-az/">
                    View Chandler Bathroom Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${siteConfig.phoneClean}`}>
                    <Phone className="mr-2 h-4 w-4" /> Call ARZ Home Remodeling
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-background p-7 shadow-sm sm:p-9">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Home className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                A clear answer for a mixed-intent search
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                ARZ does not provide roofing, roof inspections, roof repair, or roof replacement. If the project you are planning is actually a bathroom update, use the service paths below to find a more relevant starting point.
              </p>
              <p className="mt-5 border-l-2 border-primary pl-4 text-sm font-medium leading-relaxed text-foreground">
                Bathroom remodeling is the focus. The right next step depends on the room, the problem, and the improvement you want to make.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                If a roofing project and a bathroom project are both on your list, keep the scopes separate when you contact each trade. For ARZ, begin with the bathroom’s condition, the people who use it, and the changes that would make the room work better.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Find the relevant service
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Bathroom remodeling paths for Chandler homeowners
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                A roofing search is not the same as a bathroom-remodeling request. If your home project includes a bathroom, these existing ARZ service pages can help you move from a general idea to a more focused conversation.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceCards.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                    <h3 className="mt-5 font-serif text-xl font-semibold text-foreground group-hover:text-primary">
                      {service.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-secondary/35 py-16 sm:py-20">
          <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Choose a useful starting point
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Is the bathroom need focused or room-wide?
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Homeowners sometimes arrive through a broad home-improvement search when the practical issue is inside one room. Clarifying the bathroom scope helps avoid an unfocused request and makes it easier to choose the right service page.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <h3 className="font-serif text-xl font-semibold text-foreground">Focused update</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Start with a focused page when one feature is the clear priority, such as a shower, tub, tile, flooring, vanity, or lighting concern.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <h3 className="font-serif text-xl font-semibold text-foreground">Room-wide plan</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Visit the complete bathroom-remodeling path when several elements need to be considered together for function, storage, finish choices, or accessibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Prepare for the next conversation
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                What to share about a Chandler bathroom project
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-border p-6">
                <Ruler className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">Describe the room</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Note the bathroom type, the features that are not working well, and whether the concern is related to layout, storage, surfaces, bathing, or daily use.
                </p>
              </div>
              <div className="rounded-2xl border border-border p-6">
                <Sparkles className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">Name the direction</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Share whether you are considering a shower update, tub conversion, tile or flooring change, vanity improvement, lighting adjustment, or a broader remodel.
                </p>
              </div>
              <div className="rounded-2xl border border-border p-6">
                <Home className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">Add local context</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Include your Chandler neighborhood or ZIP code and mention any access, household-use, or layout considerations that may shape the discussion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/35 py-16 sm:py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Questions homeowners ask</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Roofing search or bathroom project?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                These answers make the service boundary clear and point mixed-intent visitors toward the most relevant bathroom next step.
              </p>
            </div>
            <div className="mt-10 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-border bg-background px-6 py-5">
                  <summary className="cursor-pointer list-none pr-8 font-serif text-lg font-semibold text-foreground marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-90" />
                    </span>
                  </summary>
                  <p className="pt-4 leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">A bathroom-specific next step</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Need help planning the bathroom portion of your Chandler project?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              Start with the Chandler bathroom remodeling service page or contact ARZ Home Remodeling with the room details, the change you are considering, and your local context.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact/">Contact ARZ Home Remodeling <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${siteConfig.phoneClean}`}><Phone className="mr-2 h-4 w-4" /> (520) 569-3339</a>
              </Button>
              <Link href="/" className="mt-4 inline-flex items-center justify-center text-sm font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline">
                Return to ARZ Home Remodeling <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
