import { BreadcrumbSchema } from "@/components/seo/json-ld"
import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/lib/site-config"
import { ArrowRight, Check, ClipboardList, FileText, Home, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Bathroom Financing in Chandler AZ | ARZ Home Remodeling",
  description:
    "Explore bathroom remodel financing considerations in Chandler, AZ. Compare common funding paths, questions to ask, and contact ARZ about your project scope.",
  openGraph: {
    title: "Bathroom Financing in Chandler AZ | ARZ Home Remodeling",
    description:
      "Understand bathroom remodel financing questions, project-scope preparation, and practical next steps for Chandler homeowners.",
    url: `${siteConfig.url}/financing/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/hero-bathroom.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom remodeling financing guidance in Chandler, Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Financing in Chandler AZ | ARZ Home Remodeling",
    description:
      "Understand bathroom remodel financing questions, project-scope preparation, and practical next steps for Chandler homeowners.",
    images: [`${siteConfig.url}/images/hero-bathroom.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/financing/`,
  },
}

const fundingPaths = [
  {
    icon: Home,
    title: "Savings or a partial cash contribution",
    description:
      "Some homeowners use savings for all or part of a project. Consider how a contribution affects your available emergency reserve before committing funds.",
  },
  {
    icon: FileText,
    title: "Personal-loan products",
    description:
      "An unsecured personal loan may be one option a homeowner compares. Eligibility, APR, fees, term, and total repayment depend on the lender and applicant.",
  },
  {
    icon: ShieldCheck,
    title: "Home-equity products",
    description:
      "A home-equity loan or HELOC may be considered for some projects. These products can involve collateral and different rate structures, so review the official agreement carefully.",
  },
  {
    icon: ClipboardList,
    title: "Cards or contractor-linked programs",
    description:
      "Credit cards, store programs, or financing introduced through a contractor may be relevant for some homeowners. Promotional terms, fees, and repayment rules vary.",
  },
]

const projectExamples = [
  {
    title: "Focused shower or vanity update",
    description:
      "A smaller scope may involve a shower, tub surround, vanity, lighting, flooring, or another defined finish package. Clarify which items are included before comparing funding needs.",
    links: [
      { label: "shower remodeling", href: "/shower-remodeling/" },
      { label: "vanity installation", href: "/bathroom-vanity-installation/" },
    ],
  },
  {
    title: "Tub-to-shower conversion",
    description:
      "Converting a tub area can involve demolition, waterproofing, fixtures, glass, tile, and possible plumbing decisions. A written scope helps separate project questions from financing questions.",
    links: [{ label: "tub-to-shower conversion", href: "/tub-to-shower-conversion/" }],
  },
  {
    title: "Accessible bathroom planning",
    description:
      "Low-threshold entries, seating, grab bars, lighting, and clearances may affect the design discussion. Confirm the desired features and any site-specific requirements before budgeting.",
    links: [{ label: "accessible bathroom planning", href: "/handicap-accessible-bathroom/" }],
  },
  {
    title: "Primary or complete bathroom remodel",
    description:
      "A larger renovation may combine layout, plumbing, electrical, tile, flooring, cabinetry, lighting, and finish selections. Break priorities into must-haves and nice-to-haves before reviewing funding options.",
    links: [
      { label: "primary bathroom remodel", href: "/master-bathroom-remodel/" },
      { label: "complete bathroom remodeling", href: "/bathroom-remodeling-chandler-az/" },
    ],
  },
]

const comparisonQuestions = [
  "Who is the lender or financing provider, and what agreement will I be signing?",
  "Is the rate fixed or variable, and what is the APR after any promotional period?",
  "What fees, application costs, origination charges, or account fees apply?",
  "What is the repayment term, expected monthly payment, and total amount repaid?",
  "Is the home used as collateral, and what happens if a payment is late?",
  "Does a promotional or deferred-interest offer have a deadline or special payoff rule?",
  "Will the application involve a credit inquiry, and what information is required?",
  "How does the financing agreement relate to the separate remodeling contract?",
]

const faqs = [
  {
    question: "Can I finance a bathroom remodel in Chandler?",
    answer:
      "Some Chandler homeowners explore financing for bathroom remodeling, but availability, eligibility, rates, fees, and terms are determined by the lender or provider. ARZ can discuss the remodeling scope; review the actual financing disclosures before making a financial decision.",
  },
  {
    question: "What information should I gather before discussing financing?",
    answer:
      "Start with the bathroom location, the changes you want, the project priorities, and any known layout, plumbing, electrical, accessibility, tile, flooring, vanity, or lighting considerations. A clearer remodeling scope makes it easier to discuss the amount you may need to fund.",
  },
  {
    question: "Which financing options might homeowners compare?",
    answer:
      "Depending on their circumstances, homeowners may compare savings, personal-loan products, home-equity loans, HELOCs, credit cards, store programs, or contractor-linked financing. Each has different eligibility rules, costs, collateral considerations, and repayment structures.",
  },
  {
    question: "Is contractor-linked financing the same as a remodeling contract?",
    answer:
      "No. A financing agreement and a remodeling contract are separate documents with different terms and responsibilities. Read each agreement carefully, confirm the parties involved, and ask questions about how payment, cancellation, changes, and project completion are handled.",
  },
  {
    question: "What should I compare besides the monthly payment?",
    answer:
      "Compare the APR, fees, rate structure, promotional period, repayment term, total repayment, collateral, late-payment consequences, credit inquiry, and prepayment terms. A monthly payment by itself does not show the full cost of borrowing.",
  },
  {
    question: "Can financing cover a shower, vanity, or tub-to-shower project?",
    answer:
      "A lender or provider may allow funds to be used for different project scopes, but that decision is not made by this page. Discuss the remodeling scope with ARZ and confirm with the provider what the financing agreement permits before signing.",
  },
  {
    question: "Does financing affect bathroom-remodel permit requirements?",
    answer:
      "Financing does not determine whether a project needs permits or inspections. Questions involving layout, plumbing, electrical, structural work, or other regulated scope should be discussed with the remodeling professional and confirmed with the relevant Chandler authority when appropriate.",
  },
  {
    question: "Where should I start if I am considering a financed remodel?",
    answer:
      "Begin by describing the bathroom and your priorities, then ask for a clear discussion of the remodeling scope. After you understand the project, compare any financing agreement using the provider's official disclosures and decide whether the terms fit your situation.",
  },
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bathroom Remodel Financing Guidance",
  serviceType: "Bathroom remodeling project financing guidance",
  description:
    "Homeowner-oriented guidance for discussing bathroom remodeling scope and reviewing possible financing questions in Chandler, Arizona.",
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
  },
  areaServed: {
    "@type": "City",
    name: "Chandler",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chandler",
      addressRegion: "AZ",
      addressCountry: "US",
    },
  },
  url: `${siteConfig.url}/financing/`,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function FinancingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Services", url: `${siteConfig.url}/services/` },
          { name: "Financing", url: `${siteConfig.url}/financing/` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 bg-secondary">
          <div className="container mx-auto px-4 mt-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Chandler project-planning guidance
              </span>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground text-balance leading-tight">
                Bathroom Remodel Financing in Chandler, AZ
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                For Chandler, Arizona homeowners, financing questions are easier to evaluate after you understand the bathroom project itself. Use this guide to organize your scope, compare the questions that matter, and speak with ARZ Home Remodeling about the work you are considering.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact/">Share your project details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border">
                  <a href={`tel:${siteConfig.phoneClean}`}>Call {siteConfig.phone}</a>
                </Button>
              </div>
              <p className="mt-5 text-sm text-muted-foreground max-w-2xl mx-auto">
                This page is general project-planning information, not individualized financial advice. Lenders and providers set their own eligibility rules, rates, fees, and terms.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                Start With the Remodeling Scope
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Before comparing funding options, define what you want to change. Note the bathroom location, the reason for the remodel, the features that matter most, and whether the work may involve layout, plumbing, electrical, accessibility, or finish selections. The <Link className="text-primary underline underline-offset-4" href="/bathroom-remodeling-chandler-az/">Chandler bathroom remodeling hub</Link> can help you review the broader service scope.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: "Define the outcome", text: "Decide whether the priority is safer access, easier maintenance, more storage, better lighting, a new shower, or a complete renovation." },
                { title: "Separate must-haves", text: "List essential work separately from finish upgrades so you can discuss priorities if the scope changes during planning." },
                { title: "Record open questions", text: "Write down questions about layout, permits, materials, installation, and financing before the project conversation." },
              ].map((item) => (
                <Card key={item.title} className="border-border">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                Financing Paths Homeowners May Compare
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                There is no single financing path that fits every homeowner. The options below are broad categories to research, not recommendations. Eligibility, rates, fees, collateral, promotional periods, and repayment terms vary by provider and agreement.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {fundingPaths.map((path) => {
                const Icon = path.icon
                return (
                  <Card key={path.title} className="border-border bg-background h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>
                      <CardTitle className="font-serif text-xl">{path.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{path.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                  Questions to Ask Before Choosing an Option
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Look beyond the advertised monthly payment. Ask for the official disclosures and make sure you understand the cost, risk, and responsibilities of the agreement before signing.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {comparisonQuestions.map((question) => (
                  <div key={question} className="flex items-start gap-3 rounded-lg border border-border p-5 bg-card">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-foreground leading-relaxed">{question}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact/">Discuss your remodeling scope <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary/60">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                Match the Funding Discussion to the Project
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A defined project makes the conversation more useful. These examples show how the scope may differ from one bathroom to another; they do not determine which financing product is right for you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {projectExamples.map((project) => (
                <Card key={project.title} className="border-border bg-background h-full">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      {project.links.map((link) => (
                        <Link key={link.href} href={link.href} className="inline-flex items-center text-primary font-medium underline underline-offset-4">
                          {link.label} <ArrowRight className="ml-1.5 h-4 w-4" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                  A Practical Remodeling-and-Financing Conversation
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Financing is one part of a larger project decision. Keep the remodeling discussion and the financing agreement clear and separate as you move through these steps.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  "Describe the bathroom and your goals.",
                  "Clarify the desired scope and priorities.",
                  "Review the project discussion or estimate when available.",
                  "Compare the provider's actual disclosures and agreement.",
                  "Decide whether and how to proceed for your situation.",
                ].map((step, index) => (
                  <div key={step} className="text-center">
                    <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-semibold mb-4">
                      {index + 1}
                    </div>
                    <p className="text-foreground leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 rounded-xl border border-border bg-card p-6 md:p-8">
                <h3 className="text-2xl font-serif font-semibold text-foreground">Chandler planning note</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Financing does not determine whether permits or inspections are required. For questions involving layout, plumbing, electrical, structural work, or other regulated scope, review the project with the remodeling professional and consult <Link className="text-primary underline underline-offset-4" href="/bathroom-remodeling-permits-chandler/">Chandler permit guidance</Link> or the appropriate city authority when needed. For broader planning context, see the <Link className="text-primary underline underline-offset-4" href="/bathroom-remodeling-cost-chandler-az/">Chandler bathroom-remodel planning guide</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                Financing FAQs
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                These answers are general planning information. Review the official terms from the lender or provider and consider professional advice for your own financial circumstances.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-lg border border-border bg-background p-5">
                  <summary className="cursor-pointer list-none pr-8 text-lg font-serif font-semibold text-foreground marker:hidden">
                    <span className="group-open:text-primary">{faq.question}</span>
                  </summary>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground">
                Discuss the Bathroom Project You Are Considering
              </h2>
              <p className="mt-4 text-primary-foreground/85 text-lg leading-relaxed">
                Share the room, the improvements you have in mind, and the questions you want answered. ARZ Home Remodeling can discuss the remodeling scope so you can make a more informed project decision.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact/">Contact ARZ Home Remodeling <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <a href={`tel:${siteConfig.phoneClean}`}>Call {siteConfig.phone}</a>
                </Button>
              </div>
              <p className="mt-6 text-primary-foreground/75">
                Explore <Link className="underline underline-offset-4" href="/bathroom-remodeling-chandler-az/">bathroom remodeling in Chandler</Link> or return to the <Link className="underline underline-offset-4" href="/">ARZ home page</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
