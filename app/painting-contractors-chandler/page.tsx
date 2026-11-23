import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bath, HelpCircle, ShowerHead } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const faqs = [
  {
    question: "Does ARZ provide painting services in Chandler?",
    answer:
      "ARZ Home Remodeling focuses on bathroom remodeling rather than standalone interior or exterior painting. If the project is primarily about changing a bathroom’s shower, tub, tile, floor, vanity, lighting, or accessibility, the bathroom scope may be a better place to start.",
  },
  {
    question: "What bathroom work can ARZ help with instead?",
    answer:
      "ARZ’s bathroom services include room-wide remodeling, shower remodeling, tub-to-shower conversion, tile and flooring installation, vanity installation, lighting updates, and accessibility-focused bathroom planning. Each service addresses a different type of bathroom decision.",
  },
  {
    question: "Can a bathroom remodel be planned as part of a larger home project?",
    answer:
      "A bathroom can often be defined as its own project scope even when a homeowner is planning changes elsewhere in the home. Contact ARZ with the broader context and the bathroom priorities so the team can clarify whether the bathroom portion fits its service focus.",
  },
  {
    question: "How do I know whether I need a focused service or a room-wide remodel?",
    answer:
      "A focused service may make sense when one feature—such as a shower, tub, floor, vanity, or lighting—is the main concern. A room-wide bathroom remodel is worth discussing when several elements need to be coordinated together.",
  },
  {
    question: "What should I include when contacting ARZ about a Chandler bathroom project?",
    answer:
      "Share the Chandler neighborhood or ZIP code, the bathroom’s current problem, the features you want to change, and any accessibility or maintenance concerns. Photos or inspiration examples can also help explain the direction you are considering.",
  },
  {
    question: "What is the next step if my project is bathroom-related?",
    answer:
      "Use the contact page or call ARZ Home Remodeling at (520) 569-3339. Describe the bathroom work you are considering, and the next conversation can focus on the appropriate service path rather than a standalone painting request.",
  },
];

const services = [
  {
    title: "Chandler Bathroom Remodeling",
    description: "Start with a room-wide bathroom scope when several updates need to work together.",
    href: "/bathroom-remodeling-chandler-az/",
    icon: Bath,
  },
  {
    title: "Complete Bathroom Remodeling",
    description: "Coordinate the main decisions for a bathroom renovation instead of treating each feature in isolation.",
    href: "/bathroom-remodeling/",
    icon: Bath,
  },
  {
    title: "Shower Remodeling",
    description: "A focused path for changing the wet area, surfaces, storage, or everyday shower experience.",
    href: "/shower-remodeling/",
    icon: ShowerHead,
  },
  {
    title: "Tub-to-Shower Conversion",
    description: "Explore a different bathing layout when the existing tub no longer suits the room or routine.",
    href: "/tub-to-shower-conversion/",
    icon: ArrowRight,
  },
  {
    title: "Bathroom Tile Installation",
    description: "Update bathroom wall or floor surfaces when tile is part of the remodeling plan.",
    href: "/bathroom-tile-installation/",
    icon: ArrowRight,
  },
  {
    title: "Bathroom Flooring Installation",
    description: "Choose a bathroom-specific flooring path for a surface that sees regular moisture and foot traffic.",
    href: "/bathroom-flooring-installation/",
    icon: ArrowRight,
  },
  {
    title: "Bathroom Vanity Installation",
    description: "Improve the sink, counter, storage, and daily-use area with a dedicated vanity scope.",
    href: "/bathroom-vanity-installation/",
    icon: Bath,
  },
  {
    title: "Bathroom Lighting Installation",
    description: "Plan task, mirror, and ambient lighting changes as part of a bathroom update.",
    href: "/bathroom-lighting-installation/",
    icon: ArrowRight,
  },
  {
    title: "Accessible Bathroom Planning",
    description: "Discuss accessibility-oriented features when safer movement and easier daily use are priorities.",
    href: "/handicap-accessible-bathroom/",
    icon: ArrowRight,
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/painting-contractors-chandler/#webpage`,
      url: `${siteConfig.url}/painting-contractors-chandler/`,
      name: "Painting Contractors Chandler | Bathroom Remodeling",
      description:
        "A transparent scope guide for Chandler visitors searching for painting contractors who may instead need bathroom remodeling services.",
      inLanguage: "en-US",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@type": "Thing", name: "Bathroom remodeling in Chandler, Arizona" },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/painting-contractors-chandler/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteConfig.url}/painting-contractors-chandler/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Painting Contractors Chandler",
          item: `${siteConfig.url}/painting-contractors-chandler/`,
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: {
    absolute: "Painting Contractors Chandler AZ | Bathroom Remodeling",
  },
  description:
    "Looking for painting contractors in Chandler? ARZ focuses on bathroom remodeling, including showers, tile, flooring, vanities, lighting, and accessibility.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${siteConfig.url}/painting-contractors-chandler/` },
  openGraph: {
    title: "Painting Contractors Chandler AZ | Bathroom Remodeling",
    description:
      "Looking for painting contractors in Chandler? ARZ focuses on bathroom remodeling, including showers, tile, flooring, vanities, lighting, and accessibility.",
    url: `${siteConfig.url}/painting-contractors-chandler/`,
    type: "website",
  },
};

export default function PaintingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main>
        <section className="bg-secondary/40 py-20 sm:py-24">
          <div className="container grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Chandler, Arizona bathroom remodeling
              </p>
              <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                Looking for Painting Contractors in Chandler? Start With the Bathroom Scope
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                If you searched for painting because a bathroom feels dated, difficult to maintain, or no longer works for your routine, the right project may involve more than a new wall color. ARZ Home Remodeling focuses on bathroom remodeling in Chandler rather than standalone painting or general home carpentry.
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                We can help you think through the bathroom portion of a larger home plan, then point you toward the service that best matches the room’s priorities. The first step is a clear description of what you want to change.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/bathroom-remodeling-chandler-az/">Explore Chandler Bathroom Remodeling</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-background">
                  <a href={`tel:${siteConfig.phoneClean}`}>Call {siteConfig.phone}</a>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-background p-7 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <HelpCircle className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">A clear answer for a mixed-intent search</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                ARZ is not a painting contractor. Its service focus is bathroom remodeling, including the fixtures, surfaces, storage, lighting, and accessibility decisions that shape how a bathroom works.
              </p>
              <Link href="/contact/" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                Ask about your bathroom scope <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Choose the useful next path</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">Bathroom services for the problem behind the paint search</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Paint can be one part of a refresh, but it may not solve a worn shower, an outdated tub layout, damaged tile, limited storage, poor lighting, or an accessibility concern. These existing ARZ service paths help you start with the part of the bathroom that matters most.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary hover:bg-secondary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                    <h3 className="mt-7 font-serif text-xl font-semibold text-foreground group-hover:text-primary">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-secondary/40 py-20 sm:py-24">
          <div className="container grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Plan the right scope</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">Focused bathroom change or room-wide remodel?</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                A Chandler homeowner may arrive at a painting search because the room looks tired. The more useful question is what is creating the frustration. If the concern is concentrated in one feature, a focused service may be the simplest starting point. If several elements need to coordinate, a room-wide bathroom scope may make more sense.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                You do not need to settle every design decision before reaching out. Describe the current bathroom, the change you want, and the features that need attention. ARZ can then keep the conversation centered on bathroom remodeling rather than a service it does not provide.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">Start with one concern</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Use a focused path when the shower, tub, tile, floor, vanity, lighting, or accessibility feature is the main reason for the project.</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">Coordinate the room</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Discuss a complete bathroom scope when layout, surfaces, storage, fixtures, and daily use all need to be considered together.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Before you contact ARZ</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">Bring the bathroom problem into focus</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">A few practical details can make the first conversation more useful for a Chandler, Arizona bathroom project.</p>
              <Button asChild className="mt-7" size="lg">
                <Link href="/contact/">Describe Your Bathroom Project</Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border p-6">
                <p className="text-sm font-semibold text-primary">01</p>
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">Name the problem</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Explain what is not working, what looks dated, or what has become harder to use.</p>
              </div>
              <div className="rounded-2xl border border-border p-6">
                <p className="text-sm font-semibold text-primary">02</p>
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">Share room context</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Include the Chandler neighborhood or ZIP code, bathroom type, and any relevant access or maintenance concerns.</p>
              </div>
              <div className="rounded-2xl border border-border p-6">
                <p className="text-sm font-semibold text-primary">03</p>
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">Describe the direction</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Mention desired features, inspiration, and whether you are considering a focused update or a broader remodel.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/40 py-20 sm:py-24">
          <div className="container max-w-4xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Questions homeowners ask</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">Painting search or bathroom remodeling project?</h2>
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">These answers clarify what ARZ does, what it does not provide, and how to choose a useful next step.</p>
            </div>
            <div className="mt-10 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-border bg-background px-6 py-5">
                  <summary className="cursor-pointer list-none pr-8 font-serif text-lg font-semibold text-foreground marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="text-2xl font-normal text-primary transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                    </span>
                  </summary>
                  <p className="max-w-3xl pt-4 leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="container">
            <div className="rounded-3xl bg-primary px-7 py-12 text-center text-primary-foreground sm:px-12">
              <h2 className="font-serif text-3xl font-bold sm:text-4xl">Have a bathroom project in Chandler?</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-primary-foreground/85">Tell ARZ Home Remodeling what you want to change. The conversation can begin with the bathroom scope that fits your home and routine.</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact/">Contact ARZ Home Remodeling</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <a href={`tel:${siteConfig.phoneClean}`}>Call {siteConfig.phone}</a>
                </Button>
              </div>
              <Link href="/" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/85 hover:text-primary-foreground hover:underline">
                Return to the ARZ Home Remodeling home page <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
