import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Briefcase, CheckCircle2, Clock3, MapPin, Phone, Wrench } from "lucide-react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Careers in Chandler, AZ | ARZ Team",
  description:
    "Explore remodeling career opportunities with ARZ Home Remodeling in Chandler, AZ. Review trade roles, requirements, and how to ask about openings.",
  openGraph: {
    title: "Bathroom Remodeling Careers in Chandler, AZ | ARZ Team",
    description:
      "Explore remodeling career opportunities with ARZ Home Remodeling in Chandler, AZ. Review trade roles, requirements, and how to ask about openings.",
    url: `${siteConfig.url}/careers/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/hero-bathroom.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom remodeling careers with ARZ Home Remodeling in Chandler, Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Careers in Chandler, AZ | ARZ Team",
    images: [`${siteConfig.url}/images/hero-bathroom.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/careers/`,
  },
};

const roleProfiles = [
  {
    title: "Bathroom Remodeling Specialist",
    icon: Wrench,
    summary:
      "A trade-focused role for someone who can contribute to residential bathroom and shower remodeling work and communicate professionally in a homeowner’s space.",
    discuss: [
      "Experience with bathroom remodeling and general residential renovation work",
      "Familiarity with tile installation, waterproofing, and related finish work",
      "Ability to discuss project details, work carefully, and maintain an organized site",
      "Valid driver’s license and reliable transportation for local project work",
    ],
  },
  {
    title: "Tile Installation Technician",
    icon: Wrench,
    summary:
      "A detail-oriented role centered on tile layouts and installation for bathroom and shower projects. Current needs may vary, so contact ARZ to confirm whether this profile is relevant.",
    discuss: [
      "Experience installing bathroom tile and working with waterproofing systems",
      "Ability to read or follow layout plans and maintain accurate alignment",
      "Reliable transportation and the ability to work independently when assigned",
      "A careful approach to finish quality, protection, and homeowner communication",
    ],
  },
];

const faqs = [
  {
    question: "Is ARZ currently accepting applications?",
    answer:
      "Opportunities and staffing needs can change. Call ARZ Home Remodeling at (520) 569-3339 to ask about current openings and which trade profiles are most relevant.",
  },
  {
    question: "What types of remodeling roles can I ask about?",
    answer:
      "The role profiles on this page cover bathroom remodeling and tile installation. You can also explain your experience in shower installation, finish work, or related residential remodeling when you contact the team.",
  },
  {
    question: "What experience is useful for a bathroom remodeling role?",
    answer:
      "Relevant experience may include bathroom remodeling, tile installation, waterproofing, finish work, and working respectfully in occupied homes. Describe the work you have actually performed so the team can assess fit.",
  },
  {
    question: "What should I include when I inquire?",
    answer:
      "Be ready to share the role that interests you, the remodeling or tile work you have done, your general availability, your service-area transportation, and the best way to follow up. ARZ can provide the next instructions if a current opportunity is available.",
  },
  {
    question: "Are these roles based in Chandler, Arizona?",
    answer:
      "The Careers page is for opportunities connected with ARZ Home Remodeling’s Chandler-area work. Ask about the current project area and travel expectations when you call.",
  },
  {
    question: "Can I contact ARZ if my experience is related but not listed?",
    answer:
      "Yes. If your background includes another residential remodeling trade, explain your experience and the type of work you are seeking. The team can let you know whether it matches a current need.",
  },
];

export default function CareersPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/careers/#webpage`,
        url: `${siteConfig.url}/careers/`,
        name: "Bathroom Remodeling Careers in Chandler, AZ | ARZ Team",
        description:
          "Explore remodeling career opportunities with ARZ Home Remodeling in Chandler, AZ. Review trade roles, requirements, and how to ask about openings.",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        breadcrumb: { "@id": `${siteConfig.url}/careers/#breadcrumb` },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/careers/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Careers", url: `${siteConfig.url}/careers/` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <main className="pt-24 md:pt-28 lg:pt-32">
        <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                ARZ Home Remodeling · Chandler, Arizona
              </p>
              <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
                Bathroom Remodeling Careers in Chandler, AZ
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Looking for your next opportunity in residential remodeling? Use this page to review the trade profiles ARZ may need and learn how to ask about current opportunities.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a href={`tel:${siteConfig.phoneClean}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Ask About Opportunities
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#roles">Review Role Profiles</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-12">
          <div className="container mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-3 lg:px-8">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h2 className="font-semibold text-foreground">Chandler-area work</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Ask about the current project area and travel expectations.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Briefcase className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h2 className="font-semibold text-foreground">Trade-specific roles</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Review bathroom remodeling and tile installation profiles.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h2 className="font-semibold text-foreground">Confirm current needs</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Staffing needs can change, so contact ARZ before preparing an application.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="roles" className="py-20 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Role profiles</p>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Roles to discuss with the ARZ team</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                These profiles describe the kind of experience that may be relevant to ARZ’s residential remodeling work. They are not a promise that every role is open today; call to confirm current needs.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {roleProfiles.map((role) => {
                const Icon = role.icon;
                return (
                  <article key={role.title} className="rounded-xl border border-border bg-card p-8 shadow-sm">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div>
                        <div className="mb-4 inline-flex rounded-full bg-secondary p-3 text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-serif text-2xl font-semibold text-foreground">{role.title}</h3>
                      </div>
                      <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">Ask about current needs</span>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">{role.summary}</p>
                    <h4 className="mt-7 font-semibold text-foreground">Useful experience to discuss</h4>
                    <ul className="mt-4 space-y-3">
                      {role.discuss.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
                      <a href={`tel:${siteConfig.phoneClean}`}>Discuss This Role</a>
                    </Button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-20 md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:px-8">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Before you call</p>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Make the first conversation useful</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                A short, specific introduction helps the team understand where your experience may fit. Explain the remodeling work you have completed, the tools or trade skills you use, and the type of residential work you want to discuss.
              </p>
              <div className="mt-8 rounded-xl border border-border bg-background p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">A practical inquiry can include:</h3>
                <ul className="mt-5 space-y-4">
                  <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>Your primary trade and the kinds of bathroom or residential projects you have worked on.</span></li>
                  <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>Your experience with tile, waterproofing, layout, finish work, or related remodeling tasks.</span></li>
                  <li className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>Your general availability, transportation situation, and the best way to follow up.</span></li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl bg-primary p-8 text-primary-foreground shadow-sm md:p-10">
              <h3 className="font-serif text-2xl font-semibold">How to ask about an opportunity</h3>
              <ol className="mt-6 space-y-6">
                <li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15 font-semibold">1</span><span>Choose the role profile that best matches your experience.</span></li>
                <li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15 font-semibold">2</span><span>Call ARZ Home Remodeling at <a className="underline underline-offset-4" href={`tel:${siteConfig.phoneClean}`}>{siteConfig.phone}</a>.</span></li>
                <li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15 font-semibold">3</span><span>Describe your trade experience and the work you are seeking.</span></li>
                <li className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15 font-semibold">4</span><span>Follow the team’s instructions if a current opportunity is a possible fit.</span></li>
              </ol>
              <Button asChild variant="secondary" className="mt-8 w-full"><a href={`tel:${siteConfig.phoneClean}`}>Call {siteConfig.phone}</a></Button>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Understand the work</p>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">A remodeling background is easier to discuss when it is specific</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Bathroom projects bring together demolition, surface preparation, waterproofing, tile, fixtures, finish details, and homeowner communication. When you contact ARZ, focus on the parts you know best and be clear about the responsibilities you want to take on.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {["Bathroom and shower work", "Tile and waterproofing", "Layout and finish details", "Respectful homeowner service"].map((item) => (
                <div key={item} className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
                  <CheckCircle2 className="mx-auto h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">{item}</h3>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-3xl text-center text-muted-foreground">
              To understand the type of work represented by these profiles, you can also review ARZ’s pages about <a className="font-medium text-primary underline underline-offset-4" href="/bathroom-tile-installation/">bathroom tile installation</a>, <a className="font-medium text-primary underline underline-offset-4" href="/shower-remodeling/">shower remodeling</a>, and <a className="font-medium text-primary underline underline-offset-4" href="/bathroom-vanity-installation/">bathroom vanity installation</a>.
            </p>
          </div>
        </section>

        <section className="bg-secondary py-20 md:py-24">
          <div className="container mx-auto max-w-4xl px-4 lg:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Candidate questions</p>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Careers FAQ</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-xl border border-border bg-background p-6">
                  <summary className="cursor-pointer list-none pr-8 font-semibold text-foreground marker:hidden group-open:text-primary">{faq.question}</summary>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container mx-auto max-w-4xl px-4 text-center lg:px-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Next step</p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Want to ask about remodeling work in Chandler?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Call ARZ Home Remodeling, explain your experience, and ask which opportunities are current. If you are contacting ARZ about a homeowner project instead, use the <a className="font-medium text-primary underline underline-offset-4" href="/contact/">contact page</a> for project inquiries.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild className="bg-primary hover:bg-primary/90"><a href={`tel:${siteConfig.phoneClean}`}><Phone className="mr-2 h-4 w-4" />Call {siteConfig.phone}</a></Button>
              <Button asChild variant="outline"><a href="/">Return to ARZ Home Remodeling</a></Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
