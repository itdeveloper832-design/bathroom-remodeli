import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Hammer,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
} from "lucide-react";

const pageUrl = `${siteConfig.url}/team/`;
const pageTitle = "ARZ Home Remodeling Team | Chandler Bathroom Remodel";
const pageDescription =
  "Meet the ARZ Home Remodeling team serving Chandler, Arizona. Learn how we guide bathroom projects from the first conversation through the final details.";

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
    title: "Listen to the way you use the room",
    description:
      "The first conversation should clarify what is not working, what you want to change, and which improvements matter most in your daily routine.",
  },
  {
    icon: ClipboardList,
    title: "Clarify the project scope",
    description:
      "A bathroom remodel can involve different combinations of layout, shower, tub, tile, vanity, lighting, flooring, and accessibility decisions. We help organize those choices around your goals.",
  },
  {
    icon: Ruler,
    title: "Coordinate the details",
    description:
      "Measurements, materials, finish selections, and the order of work all affect the final plan. Asking the right questions early helps keep expectations clear.",
  },
  {
    icon: Hammer,
    title: "Keep the next step visible",
    description:
      "Whether you are comparing a focused shower update with a broader renovation, the team can help direct you to the service information and contact path that fit your project.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Start with your priorities",
    description:
      "Tell us what you want to improve, what you would keep, and what you hope the finished bathroom will do better.",
  },
  {
    number: "02",
    title: "Discuss scope and options",
    description:
      "Use the conversation to compare service paths, materials, layout questions, accessibility needs, and practical maintenance considerations.",
  },
  {
    number: "03",
    title: "Plan the work",
    description:
      "The project details, selections, and next actions should be clear before work begins. Ask questions whenever a decision needs more explanation.",
  },
  {
    number: "04",
    title: "Review the finished details",
    description:
      "At the end of the project, walk through the completed bathroom and raise any questions about the installed features or their care.",
  },
];

const faqs = [
  {
    question: "Who will I speak with about my bathroom remodeling project?",
    answer:
      "Your first contact is ARZ Home Remodeling through the phone or contact path on this page. Ask who will be your day-to-day project contact and how questions will be handled before you move forward. The specific people involved can depend on the project scope.",
  },
  {
    question: "What should I discuss with the team during the first conversation?",
    answer:
      "Start with the room’s current problems, the changes you want, the features you want to keep, and any timing or access considerations. It is also useful to mention whether you are considering a shower remodel, tub-to-shower conversion, new vanity, updated flooring, or a complete bathroom renovation.",
  },
  {
    question: "Does ARZ Home Remodeling focus on bathrooms?",
    answer:
      "Yes. ARZ Home Remodeling focuses on bathroom remodeling. If you are planning a bathroom project in Chandler or elsewhere in Arizona, the service pages linked below can help you compare the type of work you may need before contacting the team.",
  },
  {
    question: "Can the team discuss accessibility or aging-in-place needs?",
    answer:
      "Yes, accessibility goals are appropriate to discuss during project planning. Share the people who will use the bathroom, the movements that feel difficult today, and the safety features you are considering. The accessible bathroom remodeling page provides a more focused starting point.",
  },
  {
    question: "Where can I review ARZ’s bathroom services before contacting the team?",
    answer:
      "Begin with the bathroom remodeling hub for a broad overview. You can then review focused pages for shower remodeling, tub-to-shower conversions, accessible bathrooms, vanities, and other project decisions. The gallery provides a visual way to explore bathroom-related work and finishes.",
  },
  {
    question: "How do I contact ARZ Home Remodeling in Chandler?",
    answer: `Call ${siteConfig.phone} or use the contact page to describe your project. A clear summary of your goals, room priorities, and questions gives the team a useful starting point for the next conversation.`,
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
        name: "ARZ Home Remodeling team and homeowner project support",
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
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function TeamPage() {
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
                People, process, and clear next steps
              </span>
              <h1 className="mt-5 text-4xl font-serif font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Meet the ARZ Home Remodeling Team
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
                Choosing a bathroom remodeling company is also a decision about communication, accountability, and who will help you make the important choices. ARZ Home Remodeling serves homeowners in Chandler, Arizona, with a focused bathroom-remodeling approach.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <a href="/contact/">
                    Talk with ARZ <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <a href="/about/">Learn about ARZ</a>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
              <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl">
                <picture>
                  <source srcSet="/images/hero/luxury-shower-remodel-chandler-640.avif" type="image/avif" />
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
                <p className="font-serif text-lg font-semibold">Bathroom-focused support</p>
                <p className="mt-1 text-sm text-muted-foreground">Chandler, Arizona</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                A useful introduction
              </span>
              <h2 className="mt-4 text-3xl font-serif font-semibold leading-tight text-foreground md:text-4xl">
                A team page should help you know what happens next
              </h2>
            </div>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                ARZ Home Remodeling focuses on bathroom remodeling rather than trying to make this page a directory of unsupported biographies. That means the useful questions are practical: who helps define the scope, how are selections discussed, where should you look for service details, and what should you bring to the first conversation?
              </p>
              <p>
                The people involved in a project can depend on its size and requirements. Before moving forward, ask who your primary contact will be, how updates will be shared, and which decisions need to be made first. Clear answers help you compare options and decide whether the project is a good fit for your home.
              </p>
              <p>
                For homeowners in Chandler and throughout Arizona, this page is a starting point. Use the service links below to narrow your project, then contact ARZ with the room priorities and questions you want to discuss.
              </p>
              <a href="/" className="mt-4 inline-flex items-center font-medium text-primary hover:underline">
                Return to the ARZ Home Remodeling homepage <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1400px] px-8 lg:px-12">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                How we support homeowners
              </span>
              <h2 className="mt-4 text-3xl font-serif font-semibold text-foreground md:text-4xl">
                Clear responsibilities make remodeling easier to navigate
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Every bathroom is different. These are the homeowner-facing conversations that help turn a broad idea into a more useful project discussion.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {supportCards.map((card) => (
                <article key={card.title} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-12">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">What to expect</span>
              <h2 className="mt-4 text-3xl font-serif font-semibold leading-tight text-foreground md:text-4xl">
                A straightforward path from questions to a defined plan
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                A first conversation is not a substitute for project-specific planning. It is a chance to make your project priorities visible, identify the right service path, and understand which details need to be resolved before work begins.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {processSteps.map((step) => (
                <article key={step.number} className="rounded-2xl border border-border bg-background p-6">
                  <span className="text-sm font-semibold tracking-widest text-primary">{step.number}</span>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/60 py-20 md:py-28">
          <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-8 lg:grid-cols-[1fr_0.9fr] lg:px-12">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Before you reach out</span>
              <h2 className="mt-4 text-3xl font-serif font-semibold text-foreground md:text-4xl">Bring the questions that matter to your household</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                You do not need a finished design before contacting ARZ. A short list of observations is enough to make the first conversation more productive.
              </p>
              <ul className="mt-7 space-y-4">
                {[
                  "What feels outdated, difficult to use, or hard to maintain?",
                  "Which features matter most: shower access, storage, lighting, flooring, tile, or vanity space?",
                  "Who uses the bathroom, and are there accessibility or aging-in-place concerns?",
                  "Are you considering a focused update or a broader bathroom renovation?",
                  "Which materials, colors, or finished examples have caught your attention?",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">Review the details before deciding</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Ask about scope, selections, communication, site access, and the next decision point. If an answer is important to your household, include it in the project conversation rather than relying on a general website statement.
              </p>
              <a href="/contact/" className="mt-6 inline-flex items-center font-medium text-primary hover:underline">
                Contact ARZ Home Remodeling <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1400px] px-8 lg:px-12">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Explore the work</span>
              <h2 className="mt-4 text-3xl font-serif font-semibold text-foreground md:text-4xl">Start with the bathroom question you are trying to solve</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                These pages provide more focused information before you call or send a project message.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Bathroom Remodeling in Chandler", href: "/bathroom-remodeling-chandler-az/", text: "Begin with a local overview of bathroom remodeling services and planning considerations." },
                { title: "Shower Remodeling", href: "/shower-remodeling/", text: "Review shower-focused options when access, comfort, or daily use is the main concern." },
                { title: "Tub-to-Shower Conversion", href: "/tub-to-shower-conversion/", text: "Explore a focused path for replacing a tub with a more accessible shower layout." },
                { title: "Accessible Bathroom Remodeling", href: "/handicap-accessible-bathroom/", text: "Use this page to organize safety, access, and aging-in-place questions." },
                { title: "Bathroom Vanity Installation", href: "/bathroom-vanity-installation/", text: "Consider storage, counter space, lighting, and the way the vanity serves the room." },
                { title: "Bathroom Project Gallery", href: "/gallery/", text: "Browse visual examples to identify finishes, layouts, and details worth discussing." },
              ].map((link) => (
                <a key={link.href} href={link.href} className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/50">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl font-semibold text-foreground">{link.title}</h3>
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{link.text}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-20 md:py-28">
          <div className="mx-auto w-full max-w-4xl px-8 lg:px-12">
            <div className="mb-12 text-center">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Questions homeowners ask</span>
              <h2 className="mt-4 text-3xl font-serif font-semibold text-foreground md:text-4xl">Before you choose a remodeling team</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-xl border border-border bg-card px-6 py-5">
                  <summary className="cursor-pointer list-none pr-8 font-serif text-lg font-semibold text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                    <span className="relative block">{faq.question}<span className="absolute right-0 top-0 text-primary transition-transform group-open:rotate-45">+</span></span>
                  </summary>
                  <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-20 text-white md:py-24">
          <div className="mx-auto flex w-full max-w-[1100px] flex-col items-start justify-between gap-8 px-8 md:flex-row md:items-center lg:px-12">
            <div className="max-w-2xl">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/75">Ready for a clearer next step?</span>
              <h2 className="mt-4 text-3xl font-serif font-semibold text-white md:text-4xl">Talk through your Chandler bathroom project with ARZ</h2>
              <p className="mt-4 leading-relaxed text-white/80">Call or send a message with your room priorities, questions, and the type of bathroom update you are considering.</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
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
