import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, Droplets, Layers3, Ruler, ShieldCheck } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Bathroom Flooring Installation Chandler AZ | ARZ Remodeling",
  description:
    "Plan bathroom flooring installation in Chandler, AZ with guidance on tile, LVP, stone, subfloor prep, grout, maintenance, and project next steps.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/flooring-installation-chandler/`,
  },
  openGraph: {
    title: "Bathroom Flooring Installation Chandler AZ | ARZ Remodeling",
    description:
      "Plan bathroom flooring installation in Chandler, AZ with guidance on tile, LVP, stone, subfloor prep, grout, maintenance, and project next steps.",
    url: `${siteConfig.url}/flooring-installation-chandler/`,
    type: "website",
  },
}

const materials = [
  {
    icon: Layers3,
    title: "Porcelain tile",
    text: "Porcelain is a popular bathroom-floor option because it is available in many sizes, colors, textures, and patterns, with water-resistance characteristics that suit many wet-area designs. Product selection, preparation, grout, and installation details still need to match the specific room.",
  },
  {
    icon: Ruler,
    title: "Ceramic tile",
    text: "Ceramic tile gives homeowners broad design flexibility for a bathroom floor. Compare the product’s intended use, surface texture, size, layout, and care requirements rather than choosing by appearance alone.",
  },
  {
    icon: Droplets,
    title: "LVP and bathroom-appropriate vinyl",
    text: "Some homeowners compare LVP or other vinyl products when they want a different look and feel from tile. The product specifications and manufacturer instructions should determine whether a particular option is appropriate for the bathroom and its water exposure.",
  },
  {
    icon: ShieldCheck,
    title: "Natural stone",
    text: "Natural stone can bring variation and texture to a bathroom, but porosity, surface feel, sealing, and ongoing care deserve careful attention. It may be a good fit for homeowners who value the material’s character and are comfortable with its maintenance needs.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Review the room and the goal",
    text: "Start with the bathroom’s current condition, the reason for replacing the floor, the look you want, and whether the shower, tub, vanity, lighting, or layout will change at the same time.",
  },
  {
    number: "02",
    title: "Identify preparation questions",
    text: "Existing flooring, subfloor condition, floor height, transitions, prior repairs, and nearby plumbing can all affect the plan. These conditions should be understood before the finish material is finalized.",
  },
  {
    number: "03",
    title: "Plan the layout and details",
    text: "Discuss tile or plank direction, cut placement, grout color, thresholds, fixture relationships, and how the floor will meet the shower, vanity, doorway, or adjoining room.",
  },
  {
    number: "04",
    title: "Coordinate installation with the remodel",
    text: "When flooring is one part of a larger bathroom project, sequencing matters. The installation plan should account for demolition, preparation, adjacent surfaces, fixtures, and final care instructions.",
  },
]

const faqs = [
  {
    question: "What flooring is best for a Chandler bathroom?",
    answer:
      "There is no single best material for every Chandler bathroom. Porcelain tile, ceramic tile, bathroom-appropriate vinyl, and natural stone may all be considered depending on water exposure, subfloor condition, desired appearance, surface feel, maintenance preferences, and the rest of the remodeling scope.",
  },
  {
    question: "Is porcelain or ceramic tile better for a bathroom floor?",
    answer:
      "Both can work well in different bathroom designs. Compare the specific product, intended use, texture, size, layout, care requirements, and how the tile will coordinate with the shower, vanity, and adjoining finishes. The material alone does not determine the quality of the finished installation.",
  },
  {
    question: "Can LVP or vinyl flooring be used in a bathroom?",
    answer:
      "Some LVP and vinyl products are designed for bathroom use, but homeowners should check the manufacturer’s specifications and installation instructions for the exact product. Water exposure, seams, edges, subfloor condition, and transition details all matter.",
  },
  {
    question: "Does the existing subfloor need to be repaired before installation?",
    answer:
      "It may. Movement, softness, uneven areas, prior water damage, and other conditions can affect the installation plan. The existing floor and subfloor should be assessed so preparation, leveling, underlayment, and any related work can be discussed before installation begins.",
  },
  {
    question: "What is the difference between epoxy and cement-based grout?",
    answer:
      "They have different installation, appearance, and maintenance characteristics. Cement-based grout may call for sealing and routine care depending on the product, while epoxy grout has its own product requirements and installation considerations. Follow the selected manufacturer’s guidance and choose based on the bathroom’s use and maintenance preferences.",
  },
  {
    question: "How should a new bathroom floor be maintained?",
    answer:
      "Use cleaning methods and products that are compatible with the selected tile, vinyl, stone, and grout. Wipe up standing water, pay attention to joints and transitions, and follow the manufacturer’s care instructions. Chandler hard-water deposits may make regular, product-appropriate cleaning especially useful for some homes.",
  },
  {
    question: "Can bathroom flooring be coordinated with a shower, tub, or vanity remodel?",
    answer:
      "Yes. Coordinating the floor with nearby work can help the layout, transitions, colors, textures, and installation sequence make sense as one room. ARZ can discuss bathroom flooring alongside services such as shower remodeling, tile installation, and vanity work.",
  },
  {
    question: "Does bathroom floor work require a permit in Chandler?",
    answer:
      "Permit requirements depend on the work involved. A finish-only change may raise different questions from work involving layout, plumbing, electrical, structural conditions, or other regulated scope. Discuss the project details with the remodeling professional and confirm current requirements with the City of Chandler or the appropriate authority when needed.",
  },
]

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services/` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bathroom Flooring Installation Chandler",
          item: `${siteConfig.url}/flooring-installation-chandler/`,
        },
      ],
    },
    {
      "@type": "Service",
      name: "Bathroom Flooring Installation in Chandler, AZ",
      serviceType: "Bathroom flooring installation",
      description:
        "Bathroom flooring planning and installation as part of bathroom remodeling projects in Chandler, Arizona.",
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
      url: `${siteConfig.url}/flooring-installation-chandler/`,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
}

export default function FlooringInstallationChandlerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 bg-secondary">
          <div className="container mx-auto px-4 mt-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Bathroom remodeling project planning in Chandler
              </span>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground text-balance leading-tight">
                Bathroom Flooring Installation in Chandler, AZ
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                The right bathroom floor has to work with the way the room is used, the water exposure it sees, and the other decisions in your remodel. For homeowners in Chandler, Arizona, ARZ Home Remodeling focuses on bathroom projects, so flooring can be considered alongside the shower, tub, vanity, tile, lighting, and overall room plan.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact/">
                    Share Your Bathroom Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border">
                  <a href={`tel:${siteConfig.phoneClean}`}>Call {siteConfig.phone}</a>
                </Button>
              </div>
              <p className="mt-5 text-sm text-muted-foreground max-w-2xl mx-auto">
                This page focuses on bathroom flooring within a remodeling project, not whole-home flooring installation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">A floor is part of the room</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-serif font-semibold text-foreground">
                Why bathroom flooring deserves a remodeling plan
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A bathroom floor has to meet the doorway, vanity, tub or shower, and sometimes an adjoining room. The visible finish is only one part of the result. Existing flooring, subfloor condition, floor height, transitions, grout, and the sequence of nearby work can all affect the final plan.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Chandler’s dry climate does not remove the need to plan for repeated bathroom water exposure, cleaning, plumbing leaks, and indoor humidity. A project conversation should consider how the room is used today and what you want it to be easier to do tomorrow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: "Start with the condition", text: "Look for movement, softness, staining, uneven areas, prior repairs, or transitions that may need attention before the finish is selected." },
                { title: "Match the material to the room", text: "Compare water exposure, surface texture, care needs, appearance, and how the floor will coordinate with the rest of the bathroom." },
                { title: "Coordinate connected work", text: "A shower, tub, vanity, lighting, or layout change can affect sequencing and the details around the finished floor." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-serif text-2xl text-foreground">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">Compare the right details</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-serif font-semibold text-foreground">
                Bathroom flooring materials to consider
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Material selection is a design decision and a practical one. These options are a starting point for a project conversation; the exact product, installation method, and care plan should fit the room’s conditions and the manufacturer’s requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {materials.map((material) => {
                const Icon = material.icon
                return (
                  <div key={material.title} className="rounded-2xl border border-border bg-background p-6 h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-2xl text-foreground">{material.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{material.text}</p>
                  </div>
                )
              })}
            </div>
            <div className="max-w-3xl mx-auto mt-10 text-center">
              <p className="text-muted-foreground leading-relaxed">
                If your project is centered on tile, see the dedicated <Link className="text-primary underline underline-offset-4" href="/bathroom-tile-installation/">bathroom tile installation</Link> service. For the broader bathroom flooring scope, visit the <Link className="text-primary underline underline-offset-4" href="/bathroom-flooring-installation/">bathroom flooring service</Link> page.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">From planning to final care</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-serif font-semibold text-foreground">
                What to discuss before the floor is installed
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Every bathroom has its own conditions. A useful installation plan starts with the room as it exists, then connects the floor to the remodeling decisions around it.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {processSteps.map((step) => (
                <div key={step.number} className="flex gap-5 rounded-2xl border border-border bg-card p-6">
                  <div className="shrink-0 text-primary font-serif text-2xl font-semibold">{step.number}</div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <span className="text-sm font-medium tracking-widest text-primary uppercase">Details that affect daily use</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-serif font-semibold text-foreground">
                  Think beyond the visible tile or plank
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Subfloor preparation, floor height, thresholds, grout color, joint placement, and the meeting points around fixtures can influence how finished the room feels. If the bathroom has known movement, softness, staining, or evidence of an earlier leak, mention it early in the planning conversation.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Grout also deserves a deliberate choice. Cement-based and epoxy products have different installation and care characteristics. The selected product’s instructions should guide sealing, cleaning, and ongoing maintenance rather than relying on a one-size-fits-all rule.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6">
                <h3 className="font-serif text-2xl text-foreground">Bring these details to the conversation</h3>
                <ul className="mt-5 space-y-4">
                  {[
                    "Approximate bathroom size and photos of the current floor",
                    "The reason for replacing the floor and your preferred look",
                    "Any softness, movement, staining, or prior water damage you have noticed",
                    "Whether the shower, tub, vanity, lighting, or layout will also change",
                    "Your preferred level of cleaning and maintenance",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">Chandler homeowner questions</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-serif font-semibold text-foreground">
                Bathroom flooring FAQs
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The right answer depends on the product and the room. These questions can help you prepare for a more useful remodeling discussion.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-border bg-card p-6">
                  <summary className="cursor-pointer list-none pr-8 font-serif text-xl font-semibold text-foreground marker:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold">Ready to plan the bathroom floor with the rest of the room?</h2>
              <p className="mt-4 text-primary-foreground/85 leading-relaxed">
                Tell ARZ Home Remodeling where the bathroom is in Chandler, what is on the floor now, what you want to change, and whether the shower, tub, vanity, tile, or lighting is part of the same project.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact/">Discuss Your Chandler Bathroom Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                  <a href={`tel:${siteConfig.phoneClean}`}>Call {siteConfig.phone}</a>
                </Button>
              </div>
              <p className="mt-6 text-sm text-primary-foreground/75">
                You can also return to <Link className="underline underline-offset-4" href="/">ARZ Home Remodeling</Link>, review the broader <Link className="underline underline-offset-4" href="/bathroom-remodeling-chandler-az/">Chandler bathroom remodeling</Link> scope, or explore <Link className="underline underline-offset-4" href="/shower-remodeling/">shower remodeling</Link> before reaching out.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
