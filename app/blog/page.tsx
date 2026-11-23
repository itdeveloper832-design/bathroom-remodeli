import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { ArrowRight, BookOpen, CheckCircle2, Clock, Mail, Phone } from "lucide-react"
import { BreadcrumbSchema } from "@/components/seo/json-ld"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { getPublishedPosts } from "@/lib/actions/blog"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Bathroom Remodeling Ideas & Guides for Chandler AZ",
  description:
    "Explore Chandler bathroom remodeling ideas, cost guides, shower and tub advice, tile tips, accessibility planning, permits, and next steps.",
  openGraph: {
    title: "Bathroom Remodeling Ideas & Guides for Chandler AZ",
    description:
      "Explore Chandler bathroom remodeling ideas, cost guides, shower and tub advice, tile tips, accessibility planning, permits, and next steps.",
    url: `${siteConfig.url}/blog/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-blog-index.png`,
        width: 1200,
        height: 630,
        alt: "Bathroom remodeling ideas and planning guides from ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Ideas & Guides for Chandler AZ",
    description:
      "Explore Chandler bathroom remodeling ideas, cost guides, shower and tub advice, tile tips, accessibility planning, permits, and next steps.",
    images: [`${siteConfig.url}/images/og-blog-index.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog/`,
  },
}

type TopicPathway = {
  eyebrow: string
  title: string
  description: string
  href: string
  linkLabel: string
  icon: string
}

const topicPathways: TopicPathway[] = [
  {
    eyebrow: "Start here",
    title: "Plan a bathroom remodel",
    description:
      "Clarify the room’s problems, project scope, preparation questions, and the information to gather before speaking with a remodeling company.",
    href: "/blog/bathroom-remodeling-checklist-preparation/",
    linkLabel: "Read the preparation checklist",
    icon: "01",
  },
  {
    eyebrow: "Showers and tubs",
    title: "Compare wet-area options",
    description:
      "Explore shower remodeling, tub-to-shower conversions, walk-in designs, and the decisions that affect entry, storage, and daily use.",
    href: "/shower-remodeling/",
    linkLabel: "Explore shower remodeling",
    icon: "02",
  },
  {
    eyebrow: "Surfaces and fixtures",
    title: "Choose materials with a reason",
    description:
      "Use practical guidance about tile, grout, flooring, vanities, and lighting to balance appearance, cleaning, traction, and maintenance.",
    href: "/bathroom-tile-installation/",
    linkLabel: "Review material services",
    icon: "03",
  },
  {
    eyebrow: "Budget and planning",
    title: "Understand cost drivers",
    description:
      "Learn which scope decisions can influence a bathroom remodel and where to find Chandler cost, financing, and project-planning resources.",
    href: "/bathroom-remodeling-cost-chandler-az/",
    linkLabel: "See Chandler cost guidance",
    icon: "04",
  },
  {
    eyebrow: "Safety and comfort",
    title: "Plan for accessibility",
    description:
      "Consider thresholds, controls, seating, backing, clearances, lighting, and reach ranges for a safer or more adaptable bathroom.",
    href: "/handicap-accessible-bathroom/",
    linkLabel: "Explore accessible bathrooms",
    icon: "05",
  },
  {
    eyebrow: "Local guidance",
    title: "Use Chandler-specific resources",
    description:
      "Find local remodeling context, permit guidance, service-area pages, and neighborhood resources before you request project information.",
    href: "/bathroom-remodeling-chandler-az/",
    linkLabel: "Open Chandler remodeling guidance",
    icon: "06",
  },
]

const nextStepLinks = [
  {
    href: "/bathroom-remodeling-chandler-az/",
    title: "You are defining the overall project",
    description: "Start with Chandler bathroom-remodeling services and broad scope guidance.",
  },
  {
    href: "/bathroom-remodeling-permits-chandler/",
    title: "Your scope may affect permits",
    description: "Review the Chandler permit resource and verify current requirements for your proposed work.",
  },
  {
    href: "/bathroom-remodeling-financing/",
    title: "You are planning the budget",
    description: "Use the financing resource to explore payment-planning questions without assuming a particular approval or offer.",
  },
  {
    href: "/contact/",
    title: "You know what you want to discuss",
    description: "Contact ARZ with your room, scope, material, or accessibility questions.",
  },
]

const faqItems = [
  {
    question: "Where should I start when planning a bathroom remodel in Chandler?",
    answer:
      "Start by identifying the room’s main problem, deciding whether the work is focused or complete, and listing must-have functions such as storage, easier entry, ventilation, or lighting. The preparation checklist and Chandler remodeling guide can help organize those questions before you contact a contractor.",
  },
  {
    question: "Does the ARZ blog include local Chandler bathroom remodeling guidance?",
    answer:
      "Yes. The hub includes Chandler-focused articles about remodeling decisions, costs, permits, hard-water maintenance, materials, accessibility, neighborhoods, and related Arizona considerations. Nearby-city articles are kept as regional references when their topic is useful to a Chandler homeowner.",
  },
  {
    question: "When should I read an article versus visiting a service page?",
    answer:
      "Use an article when you are comparing options or learning about a decision. Visit a service page when you already know the type of work you want to discuss, such as shower remodeling, a tub-to-shower conversion, tile, flooring, a vanity, or an accessible bathroom.",
  },
  {
    question: "Where can I find bathroom remodel cost and permit information for Chandler?",
    answer:
      "The blog links to the Chandler cost and financing resources as well as the bathroom-remodeling permits page. Cost depends on the proposed scope and selections, while permit needs depend on the work involved, so verify the details for your project rather than relying on a universal number or rule.",
  },
  {
    question: "What should I prepare before contacting ARZ Home Remodeling?",
    answer:
      "Prepare the room’s approximate dimensions, photos if available, the problems you want to solve, your preferred project type, any accessibility or storage needs, and questions about materials or timing. A clear starting brief makes the initial project conversation more useful without requiring you to have every design decision finished.",
  },
]

function BlogHubSchema({ posts }: { posts: Awaited<ReturnType<typeof getPublishedPosts>> }) {
  const articleItems = posts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: post.title,
    url: `${siteConfig.url}/blog/${post.slug}/`,
  }))

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteConfig.url}/blog/#webpage`,
        url: `${siteConfig.url}/blog/`,
        name: "Bathroom Remodeling Ideas, Costs & Planning Guides",
        description: metadata.description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: {
          "@type": "Thing",
          name: "Bathroom remodeling planning and design guidance",
        },
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/blog/#article-list`,
        name: "ARZ bathroom remodeling articles",
        numberOfItems: articleItems.length,
        itemListElement: articleItems,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/blog/#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default async function BlogPage() {
  const posts = await getPublishedPosts()
  const featuredPost = posts[0]
  const remainingPosts = posts.slice(1)

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Blog", url: `${siteConfig.url}/blog/` },
        ]}
      />
      <BlogHubSchema posts={posts} />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="relative overflow-hidden bg-secondary pb-16 pt-28 md:pb-24 md:pt-36">
          <div className="absolute inset-0 bg-primary/5 opacity-60 -skew-y-3 origin-top-right pointer-events-none" />
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Chandler homeowner resources
              </span>
              <h1 className="mb-8 text-balance font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Bathroom Remodeling Ideas, Costs &amp; Planning Guides
              </h1>
              <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Use these guides to make better bathroom-remodeling decisions in Chandler, Arizona. Explore project scope, showers and tubs, materials, accessibility, costs, permits, and the questions worth asking before your next remodeling conversation.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/bathroom-remodeling-chandler-az/"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
                >
                  Start with Chandler remodeling guidance <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact/"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-background px-7 font-bold text-foreground transition-colors hover:bg-muted"
                >
                  Discuss a project question
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border/50 bg-background py-16 md:py-24" aria-labelledby="topic-pathways-heading">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Find the useful next answer</p>
              <h2 id="topic-pathways-heading" className="mb-5 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Start with your remodeling question
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                You do not need to make every design decision at once. Choose the path that matches what you are trying to solve, then move to the detailed service or local resource when you are ready.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
              {topicPathways.map((pathway) => (
                <article key={pathway.title} className="group flex flex-col rounded-2xl border border-border/60 bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-3xl font-serif font-bold text-primary/30">{pathway.icon}</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{pathway.eyebrow}</span>
                  </div>
                  <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">{pathway.title}</h3>
                  <p className="mb-7 flex-1 leading-relaxed text-muted-foreground">{pathway.description}</p>
                  <Link href={pathway.href} className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-all group-hover:gap-3">
                    {pathway.linkLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {featuredPost && (
          <section className="bg-secondary/40 py-16 md:py-24" aria-labelledby="featured-guide-heading">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-6xl">
                <div className="mb-8 flex items-end justify-between gap-6">
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">A useful place to begin</p>
                    <h2 id="featured-guide-heading" className="font-serif text-3xl font-bold text-foreground md:text-4xl">Featured planning guide</h2>
                  </div>
                  <span className="hidden items-center gap-2 text-sm text-muted-foreground md:flex"><CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" /> Selected from the published resource library</span>
                </div>
                <Link href={`/blog/${featuredPost.slug}/`} className="group grid overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-xl lg:grid-cols-12">
                  <div className="relative min-h-[280px] lg:col-span-7 lg:min-h-[420px]">
                    <Image
                      src={featuredPost.featuredImage || "/images/blog-placeholder.jpg"}
                      alt={featuredPost.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-12 lg:col-span-5 lg:p-14">
                    <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">{featuredPost.category}</span>
                    <h3 className="mb-5 font-serif text-3xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary">{featuredPost.title}</h3>
                    <p className="mb-7 leading-relaxed text-muted-foreground">{featuredPost.excerpt}</p>
                    <span className="inline-flex items-center gap-2 font-bold text-primary">Read the guide <ArrowRight className="h-5 w-5" aria-hidden="true" /></span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}

        <section className="py-16 md:py-24" aria-labelledby="article-directory-heading">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 flex flex-col gap-4 border-b border-border/60 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Browse the library</p>
                  <h2 id="article-directory-heading" className="font-serif text-3xl font-bold text-foreground md:text-4xl">Latest bathroom remodeling guides</h2>
                </div>
                <p className="text-sm font-medium text-muted-foreground">{posts.length} published resources</p>
              </div>
              <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                {remainingPosts.map((post) => (
                  <article key={post.id} className="group flex flex-col">
                    <Link href={`/blog/${post.slug}/`} className="relative mb-6 block aspect-[16/10] overflow-hidden rounded-2xl bg-muted shadow-sm">
                      <Image
                        src={post.featuredImage || "/images/blog-placeholder.jpg"}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </Link>
                    <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                      <span className="text-primary">{post.category}</span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/40" aria-hidden="true" />
                      <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" aria-hidden="true" /> {post.readTime} min</span>
                    </div>
                    <h3 className="mb-4 font-serif text-2xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                      <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                    </h3>
                    <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}/`} className="inline-flex items-center gap-2 border-t border-border/60 pt-5 text-xs font-bold uppercase tracking-[0.15em] text-foreground transition-colors hover:text-primary">
                      Read article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16 md:py-24" aria-labelledby="next-step-heading">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-3xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Turn research into a plan</p>
                <h2 id="next-step-heading" className="mb-5 font-serif text-3xl font-bold text-foreground md:text-4xl">Choose the next useful step</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">The right next page depends on the question you still have. Use these paths to move from general research to a more specific conversation.</p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {nextStepLinks.map((item) => (
                  <Link key={item.title} href={item.href} className="group flex gap-5 rounded-2xl border border-border/60 bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-md">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <span className="mb-2 block font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary">{item.title}</span>
                      <span className="block leading-relaxed text-muted-foreground">{item.description}</span>
                    </span>
                  </Link>
                ))}
              </div>
              <nav aria-label="Related bathroom remodeling services" className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border/60 pt-6 text-sm font-bold">
                <span className="text-muted-foreground">Related services:</span>
                <Link href="/tub-to-shower-conversion/" className="text-primary hover:underline">Tub-to-shower conversions</Link>
                <Link href="/bathroom-flooring-installation/" className="text-primary hover:underline">Bathroom flooring</Link>
                <Link href="/bathroom-vanity-installation/" className="text-primary hover:underline">Bathroom vanities</Link>
                <Link href="/bathroom-lighting-installation/" className="text-primary hover:underline">Bathroom lighting</Link>
                <Link href="/" className="text-primary hover:underline">ARZ Home Remodeling home</Link>
              </nav>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" aria-labelledby="blog-faq-heading">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-10 text-center">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Quick answers</p>
                <h2 id="blog-faq-heading" className="font-serif text-3xl font-bold text-foreground md:text-4xl">Questions about using these remodeling guides</h2>
              </div>
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <details key={item.question} className="group rounded-2xl border border-border/60 bg-card px-6 py-5 open:shadow-sm">
                    <summary className="cursor-pointer list-none pr-8 font-serif text-xl font-bold text-foreground marker:hidden">{item.question}</summary>
                    <p className="pt-4 leading-relaxed text-muted-foreground">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 text-primary-foreground md:py-24" aria-labelledby="blog-cta-heading">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] opacity-80">Have a project question?</p>
              <h2 id="blog-cta-heading" className="mb-6 font-serif text-3xl font-bold md:text-5xl">Bring your bathroom remodeling questions to the next conversation.</h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed opacity-90">Tell ARZ what you are considering in your Chandler bathroom: a focused shower update, tub conversion, material change, accessibility improvement, or complete renovation. When you are ready for a consultation, you can start with the question that matters most.</p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href={`tel:${siteConfig.phone}`} className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-7 font-bold text-accent-foreground transition-transform hover:-translate-y-0.5 sm:w-auto">
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call {siteConfig.phone}
                </a>
                <Link href="/contact/" className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-7 font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:w-auto">
                  <Mail className="h-4 w-4" aria-hidden="true" /> Contact ARZ Home Remodeling
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
