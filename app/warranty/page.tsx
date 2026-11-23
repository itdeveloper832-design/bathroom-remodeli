import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { siteConfig } from "@/lib/site-config"
import { ShieldCheck, FileText, PackageCheck, ClipboardCheck, Phone, ArrowRight, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Bathroom Remodeling Warranty | ARZ Home Remodeling",
  description:
    "Review ARZ Home Remodeling’s bathroom warranty information, coverage questions, and project-document guidance for Chandler, Arizona homeowners.",
  openGraph: {
    title: "Bathroom Remodeling Warranty Information | ARZ",
    description:
      "Understand what to review in a bathroom-remodeling warranty, manufacturer coverage, and project documents before work begins.",
    url: `${siteConfig.url}/warranty/`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bathroom Remodeling Warranty Information | ARZ",
    description:
      "Understand what to review in a bathroom-remodeling warranty, manufacturer coverage, and project documents before work begins.",
  },
  alternates: {
    canonical: `${siteConfig.url}/warranty/`,
  },
}

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/warranty/#webpage`,
      url: `${siteConfig.url}/warranty/`,
      name: "Bathroom Remodeling Warranty | ARZ Home Remodeling",
      description:
        "Information for Chandler, Arizona homeowners about reviewing bathroom-remodeling warranty documents, manufacturer coverage, and project records.",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteConfig.url}/warranty/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services/` },
        { "@type": "ListItem", position: 3, name: "Warranty", item: `${siteConfig.url}/warranty/` },
      ],
    },
  ],
}

const questions = [
  {
    question: "What is the difference between a contractor warranty and a manufacturer warranty?",
    answer:
      "A contractor warranty generally addresses workmanship or installation, while a manufacturer warranty generally addresses a product or component. The documents can have different terms, exclusions, and claim instructions, so review both when they apply to the same bathroom project.",
  },
  {
    question: "Does this page publish ARZ’s exact warranty terms?",
    answer:
      "No. This page is a homeowner-oriented guide to questions and documents. Any warranty offered for a specific ARZ project should be confirmed in the written project agreement or warranty document that applies to that work.",
  },
  {
    question: "What should I review before signing a bathroom-remodeling agreement?",
    answer:
      "Ask what the document covers, how long coverage lasts, when it begins, whether labor and materials are treated differently, what exclusions apply, how an issue is reported, and what remedy is described if a covered issue is confirmed. The signed agreement controls the project relationship.",
  },
  {
    question: "What documents should I keep after a bathroom remodel?",
    answer:
      "Keep the signed scope, selections, change orders, invoices, product manuals, manufacturer warranty documents, maintenance instructions, photographs, and written project communications. Organized records can make a later question easier to explain and review.",
  },
  {
    question: "Who should I contact about a project-specific warranty question?",
    answer:
      "Contact ARZ through the project contact information or the online contact page and ask for the written terms that apply to your project. If a question involves legal rights or a dispute, consider asking a qualified attorney to review the documents.",
  },
]

export default function WarrantyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="min-h-screen bg-background pt-24 md:pt-28 lg:pt-32">
        <section className="relative overflow-hidden bg-slate-900 py-20 text-white md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/50 via-slate-950 to-slate-950" />
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                <ShieldCheck className="h-4 w-4 text-accent" />
                Warranty information
              </div>
              <h1 className="mb-6 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Bathroom Remodeling Warranty Information
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
                Planning a bathroom remodel in Chandler, Arizona? Use this guide to understand which warranty questions to ask, which documents to keep, and where project-specific terms should be confirmed. Last reviewed: August 22, 2026.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-muted/20 py-8">
          <div className="container mx-auto px-4">
            <div className="mx-auto flex max-w-5xl items-start gap-4 rounded-2xl border border-primary/20 bg-background p-6 shadow-sm">
              <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                This page is an informational guide, not a warranty or contract. Coverage, exclusions, timing, and remedies should be confirmed in the written documents for the specific project. It is not a substitute for legal advice; have a qualified attorney review documents when appropriate.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Start with the documents</p>
                <h2 className="mb-5 font-serif text-3xl font-semibold text-foreground md:text-4xl">What a bathroom-remodeling warranty may address</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Warranty language can be easy to skim and difficult to interpret later. Before work begins, look for a clear description of the work covered, the products involved, the period of coverage, homeowner responsibilities, and the steps for reporting a concern. These are review categories—not promises about a particular project or provider.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: FileText, title: "Workmanship", text: "Ask whether the document addresses installation or labor issues and how those issues are evaluated." },
                  { icon: PackageCheck, title: "Products", text: "Identify which fixtures, tile, flooring, cabinetry, and other products have separate manufacturer documents." },
                  { icon: ClipboardCheck, title: "Responsibilities", text: "Review maintenance instructions, exclusions, owner changes, and any conditions that affect coverage." },
                  { icon: ShieldCheck, title: "Remedies", text: "Confirm how to give notice, what records may be useful, and what remedy the written document describes." },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                      <Icon className="mb-5 h-8 w-8 text-primary" />
                      <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Two documents may be involved</p>
                <h2 className="mb-5 font-serif text-3xl font-semibold text-foreground md:text-4xl">Contractor workmanship versus manufacturer coverage</h2>
                <p className="leading-relaxed text-muted-foreground">
                  A bathroom project may involve both installation work and manufactured products. A contractor document may address how work was performed, while a manufacturer document may address a defect in a fixture or material. Their coverage, exclusions, registration requirements, and claim instructions can differ.
                </p>
              </div>
              <div className="space-y-5">
                <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                  <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">Questions worth asking</h3>
                  <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Who is responsible for a product issue versus an installation issue?</li>
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Does the manufacturer require registration or a particular installer?</li>
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Are labor, replacement parts, removal, or reinstallation treated differently?</li>
                    <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Which written document controls if two descriptions do not match?</li>
                  </ul>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Public Arizona workmanship guidance is separate from a private project agreement. Use the signed documents for the actual scope and terms, and ask for clarification before signing if a warranty statement is unclear.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Before you sign</p>
                <h2 className="mb-5 font-serif text-3xl font-semibold text-foreground md:text-4xl">A practical warranty-review checklist</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">Bring these questions to your remodeling consultation so you can compare the written scope and warranty information with the bathroom you are planning.</p>
              </div>
              <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
                {[
                  "What is the coverage period, and when does it begin?",
                  "Does the document cover labor, materials, or both?",
                  "Which fixtures and products are covered by their manufacturers instead?",
                  "What maintenance responsibilities or exclusions should I understand?",
                  "How should an issue be reported, and what documentation is needed?",
                  "What remedy is described if a covered issue is confirmed?",
                  "What happens if another contractor modifies the work?",
                  "Which terms in the signed project agreement control if this page differs?",
                ].map((question) => (
                  <div key={question} className="flex gap-3 rounded-xl border border-border bg-card p-5 shadow-sm">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm leading-relaxed text-foreground">{question}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Keep a project record</p>
                <h2 className="mb-5 font-serif text-3xl font-semibold md:text-4xl">Save the information you may need later</h2>
                <p className="leading-relaxed text-slate-300">
                  Keep the signed scope, selections, change orders, invoices, product manuals, manufacturer documents, maintenance instructions, photographs, and written project communications together. Organized records do not change the terms of a warranty, but they can make a future question easier to explain and review.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-accent">ARZ Home Remodeling</p>
                <h3 className="mb-4 font-serif text-xl font-semibold">Need project-specific information?</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-300">Ask ARZ for the written terms that apply to your bathroom-remodeling project before relying on a general webpage.</p>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a href="tel:+15205693339" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                    <Phone className="h-4 w-4" /> (520) 569-3339
                  </a>
                  <a href="/contact/" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10">
                    Contact ARZ <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-10 text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Common questions</p>
                <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">Bathroom warranty questions, answered plainly</h2>
              </div>
              <div className="space-y-4">
                {questions.map((item) => (
                  <details key={item.question} className="group rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <summary className="cursor-pointer list-none pr-8 font-serif text-lg font-semibold text-foreground marker:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                      <span className="flex items-start justify-between gap-4">{item.question}<span className="text-2xl font-normal text-primary transition-transform group-open:rotate-45">+</span></span>
                    </summary>
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-muted/20 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">Planning a bathroom remodel in Chandler?</h2>
            <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-muted-foreground">Start with the remodeling scope, then ask for the written project documents that apply to your selections and installation.</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a href="/bathroom-remodeling-chandler-az/" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Explore Chandler remodeling <ArrowRight className="h-4 w-4" /></a>
              <a href="/contact/" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3 font-semibold text-foreground transition-colors hover:bg-muted">Contact ARZ <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="mt-8 flex justify-center gap-5 text-sm text-muted-foreground">
              <a href="/privacy-policy/" className="underline-offset-4 hover:text-foreground hover:underline">Privacy policy</a>
              <a href="/terms-of-service/" className="underline-offset-4 hover:text-foreground hover:underline">Website terms</a>
              <a href="/" className="underline-offset-4 hover:text-foreground hover:underline">ARZ home page</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
