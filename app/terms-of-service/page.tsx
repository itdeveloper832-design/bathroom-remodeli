import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { siteConfig } from "@/lib/site-config"
import { ObscuredEmail } from "@/components/ui/obscured-email"
import "@/app/prose.css"

const pageUrl = `${siteConfig.url}/terms-of-service/`
const pageTitle = "Terms of Service for ARZ Home Remodeling Chandler AZ"
const pageDescription = "Review ARZ Home Remodeling website terms, service inquiries, estimates, project agreements, payments, warranties, and contact information in Chandler, AZ."

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
        url: `${siteConfig.url}/images/hero-bathroom.jpg`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${siteConfig.url}/images/hero-bathroom.jpg`],
  },
  alternates: {
    canonical: pageUrl,
  },
}

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      inLanguage: "en-US",
      dateModified: "2026-08-22",
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
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
          name: "Terms of Service",
          item: pageUrl,
        },
      ],
    },
  ],
}

export default function TermsOfServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-background pt-24 md:pt-28 lg:pt-32">
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                ARZ Home Remodeling
              </p>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                Terms of Service
              </h1>
              <p className="mt-5 text-muted-foreground">
                Last reviewed: August 2026
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <article className="max-w-3xl mx-auto prose prose-lg">
              <div className="not-prose rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-7 mb-10">
                <h2 className="text-xl md:text-2xl font-serif font-semibold text-foreground mt-0 mb-3">
                  Please read this distinction first
                </h2>
                <p className="text-muted-foreground mb-0">
                  These terms describe use of the ARZ Home Remodeling website and the handling of service inquiries. A website visit, form submission, phone call, or consultation request does not by itself create a remodeling contract, confirm a price, establish a schedule, or guarantee a particular project result. Project-specific obligations are established only in the applicable written agreement.
                </p>
              </div>

              <h2>1. Agreement to these website terms</h2>
              <p>
                By accessing or using this website, you agree to use it lawfully and to respect these Terms of Service. If you do not agree with these terms, please discontinue use of the website. These website terms are separate from any estimate, proposal, scope of work, or contract that may be prepared for a remodeling project.
              </p>

              <h2>2. Services and website content</h2>
              <p>
                ARZ Home Remodeling provides bathroom remodeling services in and around Chandler, Arizona. Website descriptions may discuss complete bathroom renovations, shower remodeling, tub-to-shower conversions, walk-in showers, tile and flooring, vanities, countertops, lighting, and accessibility-focused bathroom improvements. These descriptions are general information, not a promise that every service, product, material, or installation method will be available for every property.
              </p>
              <p>
                The appropriate scope depends on the existing space, homeowner goals, selections, site conditions, applicable requirements, and the written project documents. Information on this website may change as services, materials, and business practices change.
              </p>

              <h2>3. Consultation requests and estimates</h2>
              <p>
                A request submitted through the website, email, or telephone is an inquiry for communication. It is not a binding offer or acceptance of a construction project. Information supplied by a homeowner should be accurate and complete enough for ARZ to understand the request and determine whether a conversation is appropriate.
              </p>
              <p>
                Any estimate or proposal is based on the information available when it is prepared. Existing conditions, requested changes, selections, access, permit or approval requirements, and other project factors may affect the final scope. The written estimate, proposal, and signed project agreement control if they differ from general website descriptions.
              </p>

              <h2>4. Project agreements, changes, and homeowner responsibilities</h2>
              <p>
                Before work begins, the parties should review the applicable written agreement carefully. It may address the scope of work, materials, payment milestones, schedule assumptions, change requests, access, preparation, cleanup, permits, and responsibilities for the particular project. A change to the work should be handled through the process stated in the project agreement rather than through an assumption based on this website.
              </p>
              <p>
                Homeowners are responsible for providing information that is reasonably needed to evaluate the project and for providing access in accordance with the applicable agreement. Permit, inspection, HOA, and other approval requirements can vary by project and jurisdiction; the project documents and the responsible parties should address what applies.
              </p>

              <h2>5. Payments, cancellation, and refunds</h2>
              <p>
                Payment amounts, due dates, deposits, milestones, accepted payment methods, cancellation rights, material orders, and any refund or credit process are governed by the applicable written project agreement and applicable law. This website does not establish a universal payment schedule, cancellation window, fee, or refund promise.
              </p>
              <p>
                If you have a question about a specific invoice, deposit, change, cancellation, or refund, contact ARZ using the information below and refer to the documents provided for that project.
              </p>

              <h2>6. Materials, warranties, and project information</h2>
              <p>
                Product availability, colors, dimensions, finishes, and manufacturer requirements can affect material selections. Any product warranty is provided by the applicable manufacturer when one exists and is subject to that manufacturer’s terms. Any workmanship warranty or service remedy offered by ARZ applies only if it is stated in the applicable written project agreement.
              </p>
              <p>
                Website information is intended to help homeowners begin a conversation. It is not a substitute for a property-specific assessment, a written scope, product documentation, or professional advice appropriate to a particular project.
              </p>

              <h2>7. Website use and intellectual property</h2>
              <p>
                Text, branding, photographs, graphics, page layouts, and other materials on this website may belong to ARZ Home Remodeling or their respective owners. You may view the website for personal, non-commercial purposes, but you may not copy, republish, modify, distribute, or use website materials in a way that violates applicable law or the rights of the owner.
              </p>
              <p>
                You agree not to knowingly submit false information, interfere with the website, attempt to access restricted areas, introduce malicious code, or use the website for an unlawful or harmful purpose.
              </p>

              <h2>8. Third-party links and information</h2>
              <p>
                The website may reference or link to third-party websites, manufacturers, public agencies, or other resources for convenience. ARZ does not control every third-party site and is not responsible for its content, availability, security, or privacy practices. Review the terms and policies of an outside website before relying on information or submitting information there.
              </p>

              <h2>9. Website disclaimers and limitations</h2>
              <p>
                ARZ aims to keep website information useful, but no website can guarantee that every page is complete, current, uninterrupted, or free from error. Website content is provided for general informational purposes. To the extent permitted by applicable law, ARZ is not responsible for decisions made solely from general website information without considering the applicable project documents and property-specific facts.
              </p>
              <p>
                Any limitation of liability, dispute process, warranty, remedy, or other legal term that applies to a remodeling project should be reviewed in the applicable written agreement. Nothing on this page is intended to waive rights that cannot lawfully be waived.
              </p>

              <h2>10. Changes to these terms</h2>
              <p>
                ARZ may update this page when website practices or business information change. The “Last reviewed” date identifies when this page was most recently checked for publication. A project’s signed agreement remains the document to review for project-specific terms.
              </p>

              <h2>11. Questions and contact information</h2>
              <p>
                For questions about these website terms, a service inquiry, or the documents associated with a remodeling project, contact ARZ Home Remodeling directly. Please do not send confidential information through a general website form unless ARZ has requested it through an appropriate channel.
              </p>
              <div className="not-prose rounded-xl bg-secondary p-6 md:p-7 my-8">
                <p className="text-foreground font-semibold mb-1">{siteConfig.name}</p>
                <p className="text-muted-foreground mb-1">{siteConfig.address.full}</p>
                <p className="text-muted-foreground mb-1">
                  <ObscuredEmail className="hover:text-primary transition-colors" />
                </p>
                <a
                  className="text-muted-foreground hover:text-primary transition-colors"
                  href={`tel:${siteConfig.phoneClean}`}
                >
                  {siteConfig.phone}
                </a>
                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 text-sm font-medium">
                  <a className="text-primary hover:underline" href="/contact/">Contact ARZ</a>
                  <a className="text-primary hover:underline" href="/privacy-policy/">Privacy Policy</a>
                  <a className="text-primary hover:underline" href="/">Return to homepage</a>
                </div>
              </div>

              <div className="not-prose border-t border-border pt-6 mt-10">
                <p className="text-sm text-muted-foreground mb-0">
                  This page is a working website-terms draft and is not legal advice. Have a qualified attorney review it before publication or reliance, especially after confirming ARZ’s current business practices and project-contract language.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
