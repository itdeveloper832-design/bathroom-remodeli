import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileQuestion,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

const pageUrl = `${siteConfig.url}/team/alex-rivers/`;
const pageTitle = "Alex Rivers Page | ARZ Home Remodeling Team Chandler AZ";
const pageDescription =
  "Looking for Alex Rivers at ARZ Home Remodeling? Start with verified company information, project questions, bathroom services, and Chandler contact options.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/hero/luxury-shower-remodel-chandler-640.avif`,
        width: 640,
        height: 480,
        alt: "Bathroom remodeling project in Chandler, Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${siteConfig.url}/images/hero/luxury-shower-remodel-chandler-640.avif`],
  },
  alternates: {
    canonical: pageUrl,
  },
};

const supportCards = [
  {
    icon: MessageCircle,
    title: "Ask who your main contact will be",
    description:
      "If you arrived here looking for Alex Rivers, ask ARZ who will be your day-to-day project contact and how questions or updates should be shared.",
  },
  {
    icon: ClipboardList,
    title: "Clarify the project scope",
    description:
      "Before work begins, confirm the rooms, features, selections, and decisions included in the conversation so you know what is being discussed.",
  },
  {
    icon: FileQuestion,
    title: "Document important questions",
    description:
      "Write down questions about layout, shower or tub choices, vanity storage, tile, lighting, flooring, access, and the next decision point.",
  },
  {
    icon: ShieldCheck,
    title: "Use verified company information",
    description:
      "Review ARZ’s Team, About, service, gallery, and Contact pages, then ask the company directly about any person-specific detail that matters to your project.",
  },
];

const faqs = [
  {
    question: "Is this page a biography of Alex Rivers?",
    answer:
      "No. This page does not publish a verified biography, job title, credentials, or project history for Alex Rivers. ARZ Home Remodeling should confirm any person-specific information directly with you before a project moves forward.",
  },
  {
    question: "Can I confirm Alex Rivers’ role at ARZ Home Remodeling?",
    answer:
      "The website does not provide verified role details on this route. If Alex Rivers’ role is relevant to your project, contact ARZ and ask who will handle your consultation, project communication, selections, and site questions.",
  },
  {
    question: "How do I find out who my day-to-day project contact will be?",
    answer:
      "Ask during the first project conversation who your main contact will be, how updates will be shared, how changes will be documented, and where to direct questions when the work is underway. Ask for those details to be clear before you proceed.",
  },
  {
    question: "What bathroom remodeling questions should I bring to ARZ?",
    answer:
      "Bring the problems you want to solve, the features you want to keep, and the changes you are considering. Useful topics include shower access, tub conversion, vanity storage, tile, flooring, lighting, layout, maintenance, and accessibility or aging-in-place needs.",
  },
  {
    question: "Where can I review ARZ’s bathroom remodeling services?",
    answer:
      "Start with the bathroom remodeling overview, then review the focused pages for shower remodeling, tub-to-shower conversion, accessible bathroom remodeling, bathroom vanity installation, and the project gallery. These pages provide service context without assuming details about an individual team member.",
  },
  {
    question: "How do I contact ARZ Home Remodeling in Chandler?",
    answer: `Call ${siteConfig.phone} or use the Contact ARZ page to describe your bathroom project and ask for the appropriate project contact. A short summary of your goals, current concerns, and preferred next step will make the first conversation more useful.`,
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: `${siteConfig.url}/`,
        name: siteConfig.name,
      },
      about: {
        "@type": "Thing",
        name: "Alex Rivers route clarification and ARZ Home Remodeling project contact guidance",
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
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
          name: "Team",
          item: `${siteConfig.url}/team/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Alex Rivers",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function AlexRiversPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="relative overflow-hidden bg-primary pt-24 text-white md:pt-28 lg:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_38%)]" />
          <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-12 px-8 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-24">
            <div className="max-w-3xl">
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-white/75">
                A clear place to start
              </span>
              <h1 className="mt-5 text-4xl font-serif font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Alex Rivers Team Page: What Homeowners Should Know
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
                Looking for information about Alex Rivers? This route belongs to the ARZ Home Remodeling team section. Because person-specific details should be verified, this page focuses on the project questions you can confirm with ARZ rather than filling gaps with assumptions.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <a href="/contact/">
                    Contact ARZ <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <a href="/team/">View the ARZ team page</a>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
              <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl">
                <picture>
                  <source
                    srcSet="/images/hero/luxury-shower-remodel-chandler-640.avif"
                    type="image/avif"
                  />
                  <img
                    src="/images/hero/luxury-shower-remodel-chandler-640.avif"
                    alt="Bathroom remodeling project in Chandler, Arizona"
                    className="aspect-[4/3] h-full w-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-xl border border-border bg-card px-5 py-4 text-card-foreground shadow-xl sm:left-6">
                <p className="font-serif text-lg font-semibold">Bathroom remodeling guidance</p>
                <p className="mt-1 text-sm text-muted-foreground">Chandler, Arizona</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Transparent information
              </span>
              <h2 className="mt-4 text-3xl font-serif font-semibold leading-tight text-foreground md:text-4xl">
                Start with what can be verified
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                An individual team-member page should help a homeowner understand a person’s verified role, relevant responsibilities, and the best way to communicate during a remodel. The current ARZ website does not publish a verified biography or role description for Alex Rivers, so this page does not invent one.
              </p>
              <p>
                If you reached this page because someone mentioned Alex Rivers, or because you want to know who will be involved in your bathroom project, the most reliable next step is to ask ARZ directly. Confirm your primary contact, how updates will be shared, who will explain selections, and where to send questions.
              </p>
              <p>
                The broader ARZ Team page explains the homeowner-facing support approach, while the <a href="/about/" className="font-medium text-primary hover:underline">About page</a> provides company context. Service pages can then help you prepare for a conversation about the actual bathroom work you are considering.
              </p>
              <a
                href="/team/"
                className="inline-flex items-center font-medium text-primary hover:underline"
              >
                Review the ARZ Home Remodeling team page
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1400px] px-8 lg:px-12">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Before you move forward
              </span>
              <h2 className="mt-4 text-3xl font-serif font-semibold text-foreground md:text-4xl">
                Questions that make the first project conversation clearer
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Whether or not Alex Rivers is the person you need to reach, these questions help connect a name, a role, and a bathroom project without relying on assumptions.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {supportCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-border bg-card p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Choose the right next page
              </span>
              <h2 className="mt-4 text-3xl font-serif font-semibold leading-tight text-foreground md:text-4xl">
                Move from a person-specific question to the bathroom decision
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                A team-member URL should help you reach the right conversation, not replace the service information needed to plan the work. Use the links below to narrow your project before contacting ARZ.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Bathroom Remodeling in Chandler", "/bathroom-remodeling-chandler-az/", "Start with the local bathroom-remodeling overview."],
                ["Shower Remodeling", "/shower-remodeling/", "Explore options when the shower is the main concern."],
                ["Tub-to-Shower Conversion", "/tub-to-shower-conversion/", "Review the focused path for changing a tub layout."],
                ["Accessible Bathroom Remodeling", "/handicap-accessible-bathroom/", "Organize access, safety, and aging-in-place questions."],
                ["Bathroom Vanity Installation", "/bathroom-vanity-installation/", "Consider storage, counter space, and room function."],
                ["Bathroom Project Gallery", "/gallery/", "Use visual examples to discuss finishes and details."],
              ].map(([label, href, description]) => (
                <a
                  key={href}
                  href={href}
                  className="group rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/50 hover:bg-secondary"
                >
                  <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary">
                    {label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                    Explore this page <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/60 py-20 md:py-28">
          <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-8 lg:grid-cols-[1fr_0.9fr] lg:px-12">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                A practical checklist
              </span>
              <h2 className="mt-4 text-3xl font-serif font-semibold text-foreground md:text-4xl">
                What to confirm before you schedule work
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                You do not need a finished design to ask useful questions. Bring a short description of the bathroom, the problems you want to solve, and the decisions you want help making.
              </p>
              <ul className="mt-7 space-y-4">
                {[
                  "Who will be your day-to-day contact, and how should you send questions?",
                  "Which parts of the work are included: layout, shower or tub, tile, vanity, lighting, flooring, or accessibility features?",
                  "How will selections, scope changes, and next decisions be explained?",
                  "What access, household, or daily-routine considerations should the project conversation include?",
                  "Which ARZ service page or project example is the best match for your goals?",
                ].map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-foreground">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Need to identify the right contact?
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Tell ARZ that you arrived through the Alex Rivers page and ask which team contact is appropriate for your bathroom remodeling question. The company can confirm the current point of contact instead of leaving you to infer a role from a URL.
              </p>
              <div className="mt-7 flex flex-col gap-4">
                <Button asChild size="lg">
                  <a href="/contact/">
                    Contact ARZ Home Remodeling <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${siteConfig.phoneClean}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    {siteConfig.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto w-full max-w-4xl px-8 lg:px-12">
            <div className="mb-12 text-center">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Frequently asked questions
              </span>
              <h2 className="mt-4 text-3xl font-serif font-semibold text-foreground md:text-4xl">
                About this Alex Rivers page
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-border bg-background p-6">
                  <summary className="cursor-pointer list-none pr-8 font-serif text-xl font-semibold text-foreground marker:hidden">
                    {faq.question}
                    <span className="float-right text-primary transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 text-white md:py-20">
          <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div className="max-w-3xl">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/75">
                Your next step
              </span>
              <h2 className="mt-4 text-3xl font-serif font-semibold md:text-4xl">
                Ask ARZ for the right project conversation
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                Share what you want to change in your Chandler bathroom, mention any person-specific question, and ask who should guide the next step.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:shrink-0">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href="/contact/">Send a project message <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <a href={`tel:${siteConfig.phoneClean}`}><Phone className="mr-2 h-4 w-4" />{siteConfig.phone}</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
