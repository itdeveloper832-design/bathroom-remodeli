import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BreadcrumbSchema } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"
import { ObscuredEmail } from "@/components/ui/obscured-email"
import "@/app/prose.css"

const pageUrl = `${siteConfig.url}/privacy-policy/`
const lastUpdated = "August 22, 2026"

export const metadata: Metadata = {
  title: "Privacy Policy | ARZ Home Remodeling in Chandler AZ",
  description:
    "Read ARZ Home Remodeling’s privacy policy for website data collection, contact inquiries, cookies, communications, and privacy questions.",
  openGraph: {
    title: "Privacy Policy | ARZ Home Remodeling in Chandler AZ",
    description:
      "Read ARZ Home Remodeling’s privacy policy for website data collection, contact inquiries, cookies, communications, and privacy questions.",
    url: pageUrl,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | ARZ Home Remodeling in Chandler AZ",
    description:
      "Read ARZ Home Remodeling’s privacy policy for website data collection, contact inquiries, cookies, communications, and privacy questions.",
  },
  alternates: {
    canonical: pageUrl,
  },
}

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: "Privacy Policy | ARZ Home Remodeling in Chandler AZ",
  description:
    "Privacy policy for the ARZ Home Remodeling website, contact inquiries, cookies, communications, and privacy questions.",
  dateModified: "2026-08-22",
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Privacy Policy", url: pageUrl },
        ]}
      />
      <Header />
      <main className="min-h-screen bg-background pt-24 md:pt-28 lg:pt-32">
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                ARZ Home Remodeling · Chandler, Arizona
              </p>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                Privacy Policy
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                This page explains what information ARZ Home Remodeling may receive through
                this website and direct inquiries, how it may be used, and how to contact us
                with a privacy question. You can also return to the
                <Link href="/">ARZ Home Remodeling homepage</Link> at any time.
              </p>
              <p className="mt-5 text-sm text-muted-foreground">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80">
              <div className="not-prose mb-10 rounded-xl border border-primary/20 bg-primary/5 p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  A plain-language overview
                </p>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  ARZ Home Remodeling uses information submitted through the website or shared
                  during a project inquiry to respond, understand the requested bathroom work,
                  and operate the business. The specific information handled depends on the
                  form, message, call, or other interaction you choose to use.
                </p>
              </div>

              <h2>Information We May Collect</h2>
              <p>
                When you contact ARZ Home Remodeling about bathroom remodeling in Chandler or
                another Arizona service area, you may choose to provide information such as your
                name, email address, phone number, property or project details, preferred
                services, and the contents of your message. We may also retain records of
                communications needed to respond to your inquiry and coordinate a requested
                service conversation.
              </p>
              <p>
                Like many websites, this site may also receive limited technical or usage
                information depending on its hosting, security, analytics, embedded content, and
                other active technologies. This can include information such as a browser or
                device type, pages visited, referring page, approximate location, or the date
                and time of a visit. The exact information collected depends on the tools that
                are active when you use the site.
              </p>

              <h2>How We Use Information</h2>
              <p>
                Information may be used to respond to questions, discuss a bathroom remodeling
                project, communicate about a requested service, maintain business records,
                operate and improve the website, help protect the website from misuse, and meet
                applicable business or legal obligations.
              </p>
              <p>
                If you voluntarily contact ARZ, we may use the contact details you provide to
                reply to that specific inquiry. Any promotional communication should be handled
                in accordance with the choices and requests you communicate to us and the tools
                available through the relevant message.
              </p>

              <h2>How Information May Be Shared</h2>
              <p>
                ARZ Home Remodeling may share information with service providers that help host,
                secure, maintain, communicate through, or otherwise operate the website or
                business, but only as appropriate for the service they provide. Those providers
                may handle information under their own terms and privacy practices.
              </p>
              <p>
                Information may also be disclosed when reasonably necessary to comply with a
                legal process, protect the rights or safety of a person or business, investigate
                misuse, or support a business transfer. This page should be updated if the
                website begins using additional vendors, advertising tools, forms, or other
                services that materially change how information is handled.
              </p>

              <h2>Cookies and Similar Technologies</h2>
              <p>
                A browser or a service used on the website may store cookies or use similar
                technologies. Depending on the site configuration, these technologies may help
                the website function, remember preferences, support security, measure general
                site use, or provide embedded features. Some third-party services may have their
                own privacy notices and controls.
              </p>
              <p>
                You can review cookie and privacy controls in your browser. Disabling some
                technologies may affect portions of a website, such as embedded media, saved
                preferences, analytics features, or other interactive functions. ARZ should keep
                this section aligned with the actual tools active on the site.
              </p>

              <h2>Communications and Your Choices</h2>
              <p>
                You can choose what information to include when contacting ARZ Home Remodeling.
                If information in an inquiry needs to be corrected or you have a question about
                a communication, contact us using the details below or through the
                <Link href="/contact/"> ARZ contact page</Link>. We will review the request in
                light of the information we have, the purpose for which it was collected, and
                any applicable requirements.
              </p>
              <p>
                If you receive a promotional communication from ARZ and no longer want to receive
                that type of message, follow any available preference or opt-out instruction in
                the message or contact us directly. A request to stop promotional communication
                does not necessarily stop service-related or inquiry-related messages needed to
                respond to you.
              </p>

              <h2>Data Security and Retention</h2>
              <p>
                ARZ Home Remodeling may use administrative, technical, and organizational
                measures intended to protect information appropriate to the way it is handled.
                No method of sending or storing information over the internet can be guaranteed to be completely secure, and no method is completely secure. Please avoid including sensitive information that is not needed for a remodeling inquiry.
              </p>
              <p>
                Information may be retained for as long as reasonably needed for the purpose for
                which it was collected, to maintain business and project records, to resolve
                disputes, to protect the website or business, or to meet applicable obligations.
                Actual retention depends on the type of information and ARZ’s current business
                practices.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                This website is intended for people seeking home-improvement information or
                services, not for children. Please do not submit information about a child
                through the website unless you are authorized to do so and the information is
                necessary for the inquiry.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                ARZ Home Remodeling may revise this Privacy Policy when the website, business
                practices, service providers, or applicable requirements change. When the policy
                is revised, the date at the top of this page should be updated so visitors can
                identify the current version. Continued use of the website after a revision does
                not replace any notice or choice that may be required in a particular situation.
              </p>

              <h2>Contact Us About Privacy</h2>
              <p>
                If you have a question about this policy, the information you submitted, or a
                privacy-related request, contact ARZ Home Remodeling through the details below.
              </p>
              <div className="not-prose rounded-xl bg-secondary p-6 md:p-8">
                <p className="font-serif text-xl font-semibold text-foreground">
                  {siteConfig.name}
                </p>
                <p className="mt-3 text-muted-foreground">{siteConfig.address.full}</p>
                <p className="mt-1 text-muted-foreground">
                  <ObscuredEmail className="text-primary hover:underline" />
                </p>
                <p className="mt-1 text-muted-foreground">{siteConfig.phone}</p>
                <Link
                  href="/contact/"
                  className="mt-5 inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Contact ARZ Home Remodeling
                </Link>
              </div>

              <div className="not-prose mt-10 border-t border-border pt-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Review note:</strong> This page is a
                  website disclosure, not legal advice. ARZ Home Remodeling should review it
                  with qualified counsel against its current forms, hosting, analytics,
                  communications, vendors, and applicable law before relying on it as a final
                  legal policy.
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
