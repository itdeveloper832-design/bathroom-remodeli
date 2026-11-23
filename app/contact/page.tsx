import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GoogleMap } from "@/components/services/google-map"
import { siteConfig } from "@/lib/site-config"
import { Phone, Mail, MapPin, Clock, ClipboardList, MessageSquare, ArrowRight } from "lucide-react"
import { BreadcrumbSchema, FAQSchema, ContactPageSchema } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Contact ARZ for Bathroom Remodeling in Chandler, AZ",
  description:
    "Contact ARZ Home Remodeling in Chandler, AZ about a bathroom remodel, shower, tub conversion, tile, vanity, or accessible project.",
  openGraph: {
    title: "Contact ARZ for Bathroom Remodeling in Chandler, AZ",
    description:
      "Discuss a Chandler bathroom remodel, shower, tub conversion, tile, vanity, or accessible-bathroom project with ARZ Home Remodeling.",
    url: `${siteConfig.url}/contact/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/contact/`,
  },
}

const contactFaqs = [
  {
    question: "What should I include when I contact ARZ about a bathroom remodel?",
    answer:
      "Share the Chandler area or ZIP code, the bathroom you want to update, the problems you are trying to solve, the changes you are considering, and any preferred timing. Photos, rough measurements, and inspiration images can also help explain the project.",
  },
  {
    question: "Can I call or email instead of using the contact form?",
    answer: `Yes. You can call ${siteConfig.phone} or email ${siteConfig.email}. The form is useful when you want to describe the project in writing, while a call may be more convenient for an initial discussion.`,
  },
  {
    question: "How much does a bathroom remodel cost in Chandler?",
    answer:
      "The investment depends on the room, layout, demolition, plumbing or electrical changes, materials, accessibility features, and overall scope. A project discussion can help identify which details need to be reviewed before an estimate is prepared.",
  },
  {
    question: "What bathroom remodeling projects can I ask ARZ about?",
    answer:
      "You can contact ARZ about shower remodeling, tub-to-shower conversions, bathtub remodeling, tile and flooring, vanities and lighting, small bathrooms, master bathrooms, guest bathrooms, and accessibility-focused updates.",
  },
  {
    question: "Does ARZ serve homeowners outside central Chandler?",
    answer:
      "ARZ Home Remodeling is based in Chandler and lists service areas across Chandler and nearby East Valley communities, including Ahwatukee, Sun Lakes, Ocotillo, Gilbert, Queen Creek, and other areas. Contact the team to discuss your location and project scope.",
  },
  {
    question: "Can I ask about financing for a bathroom remodeling project?",
    answer: (
      <>Yes. Financing questions can be discussed during the project conversation. Visit the <Link href="/financing/" className="text-primary underline underline-offset-4">bathroom remodeling financing</Link> page for the information currently provided by ARZ.</>
    ),
  },
  {
    question: "Can I ask about accessible or aging-in-place bathroom features?",
    answer: (
      <>Yes. Mention mobility, entry, bathing, seating, grab-bar, or clearance goals when you contact ARZ. The <Link href="/handicap-accessible-bathroom/" className="text-primary underline underline-offset-4">accessible bathroom remodeling</Link> page provides a focused starting point for that conversation.</>
    ),
  },
  {
    question: "Will my bathroom project require permits in Chandler?",
    answer: (
      <>Permit requirements depend on the work being proposed, especially when a project changes plumbing, electrical systems, layout, or other regulated elements. Review the <Link href="/bathroom-remodeling-permits-chandler/" className="text-primary underline underline-offset-4">Chandler bathroom permit guidance</Link> and confirm requirements for your specific scope with the appropriate professional and city authority.</>
    ),
  },
]

const serviceLinks = [
  { href: "/shower-remodeling/", label: "Shower remodeling", description: "Update the shower footprint, surfaces, storage, and daily usability." },
  { href: "/tub-to-shower-conversion/", label: "Tub-to-shower conversion", description: "Discuss replacing an underused tub with a shower configuration." },
  { href: "/bathtub-remodeling/", label: "Bathtub remodeling", description: "Explore tub-focused updates for primary, guest, or hall bathrooms." },
  { href: "/handicap-accessible-bathroom/", label: "Accessible bathroom remodeling", description: "Plan entry, bathing, support, and clearance considerations." },
  { href: "/bathroom-tile-installation/", label: "Bathroom tile installation", description: "Review tile applications for walls, showers, floors, and accents." },
  { href: "/bathroom-flooring-installation/", label: "Bathroom flooring installation", description: "Discuss flooring choices for moisture, maintenance, and appearance." },
  { href: "/bathroom-vanity-installation/", label: "Bathroom vanity installation", description: "Plan storage, countertop, sink, and finish decisions." },
  { href: "/bathroom-lighting-installation/", label: "Bathroom lighting installation", description: "Consider task, ambient, and mirror-area lighting needs." },
  { href: "/small-bathroom-remodeling/", label: "Small bathroom remodeling", description: "Make a compact bathroom work harder without unnecessary scope." },
  { href: "/master-bathroom-remodel/", label: "Master bathroom remodeling", description: "Discuss a larger primary-bath layout and finish plan." },
  { href: "/guest-bathroom-remodeling/", label: "Guest bathroom remodeling", description: "Plan a practical update for a guest, hall, or secondary bath." },
]

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Contact", url: `${siteConfig.url}/contact/` },
        ]}
      />
      <FAQSchema faqs={contactFaqs} />
      <ContactPageSchema />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 bg-secondary">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12 mt-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">Start the conversation</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground text-balance leading-tight">
                Contact ARZ for Bathroom Remodeling in Chandler
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Have a bathroom that no longer fits the way you live? Contact ARZ Home Remodeling to discuss the room, the changes you are considering, and the questions you want answered before deciding on the next step.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <a href={`tel:${siteConfig.phoneClean}`} className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                  <Phone className="h-4 w-4" /> Call {siteConfig.phone}
                </a>
                <a href="#project-form" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary/10 transition-colors">
                  Send project details <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Phone className="h-6 w-6 text-primary" /></div>
                <h2 className="font-serif font-semibold text-foreground text-lg mb-2">Call to talk it through</h2>
                <a href={`tel:${siteConfig.phoneClean}`} className="text-muted-foreground hover:text-primary transition-colors">{siteConfig.phone}</a>
                <p className="mt-2 text-sm text-muted-foreground">Useful when you want to explain the project conversationally.</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Mail className="h-6 w-6 text-primary" /></div>
                <h2 className="font-serif font-semibold text-foreground text-lg mb-2">Email project notes</h2>
                <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-primary transition-colors text-sm font-semibold">{siteConfig.email}</a>
                <p className="mt-2 text-sm text-muted-foreground">Useful for sending written details, photos, or inspiration.</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><ClipboardList className="h-6 w-6 text-primary" /></div>
                <h2 className="font-serif font-semibold text-foreground text-lg mb-2">Use the project form</h2>
                <p className="text-muted-foreground">Describe the room, goals, and service you want to discuss.</p>
                <a href="#project-form" className="inline-flex items-center gap-1 mt-3 text-primary font-semibold hover:underline">Go to the form <ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-secondary/60">
          <div className="w-full max-w-[1100px] mx-auto px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">Prepare your message</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground">A few details make the first conversation more useful</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">You do not need a finished design before reaching out. Start with what is not working and what you would like the bathroom to do better.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6"><MessageSquare className="h-6 w-6 text-primary mb-4" /><h3 className="font-serif font-semibold text-xl text-foreground mb-3">Describe the current room</h3><p className="text-muted-foreground leading-relaxed">Mention whether it is a primary, guest, hall, or small bathroom. Note issues such as an outdated layout, limited storage, difficult entry, worn surfaces, or lighting that does not work well for the space.</p></div>
              <div className="bg-card border border-border rounded-xl p-6"><ClipboardList className="h-6 w-6 text-primary mb-4" /><h3 className="font-serif font-semibold text-xl text-foreground mb-3">Explain the change you want</h3><p className="text-muted-foreground leading-relaxed">Tell ARZ whether you are considering a shower update, tub conversion, new vanity, tile or flooring, lighting, accessibility features, or a more complete remodel.</p></div>
              <div className="bg-card border border-border rounded-xl p-6"><MapPin className="h-6 w-6 text-primary mb-4" /><h3 className="font-serif font-semibold text-xl text-foreground mb-3">Share your Chandler location</h3><p className="text-muted-foreground leading-relaxed">Include your neighborhood or ZIP code and whether the home is in Chandler or a nearby East Valley community. This helps keep the conversation grounded in the actual property location.</p></div>
              <div className="bg-card border border-border rounded-xl p-6"><Clock className="h-6 w-6 text-primary mb-4" /><h3 className="font-serif font-semibold text-xl text-foreground mb-3">Mention planning constraints</h3><p className="text-muted-foreground leading-relaxed">If you have a preferred season, household access concern, HOA question, or permit question, include it. Timing and requirements depend on the project scope and property circumstances.</p></div>
            </div>
          </div>
        </section>

        <section id="project-form" className="py-12 lg:py-20 bg-secondary overflow-hidden">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
              <div className="lg:col-span-6 flex flex-col justify-center">
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">Project inquiry</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 text-foreground leading-tight">Share the details you already know</h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">Use the inquiry form to describe your bathroom, the changes you are considering, and the best way to continue the conversation. You can also call {siteConfig.phone} if you would rather talk through the project.</p>
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl shadow-sm hover:border-primary/50 transition-colors group max-w-md">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-300"><Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" aria-hidden="true" /></div>
                  <div><h3 className="font-bold text-foreground text-sm mb-0.5">Call the Chandler office</h3><span className="text-primary hover:underline text-lg font-bold block leading-none">{siteConfig.phone}</span></div>
                </a>
              </div>
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-[600px] bg-card border border-border rounded-2xl shadow-xl overflow-hidden p-2 min-h-[545px]">
                  <iframe src="https://leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=momran1&funnel=4&category=23&step=1&buttons=btn-warning" width="100%" height="545" frameBorder="0" loading="eager" title="Bathroom remodeling project inquiry form" className="w-full rounded-xl min-h-[545px]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">Choose the right path</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground">Bathroom projects to discuss with ARZ</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">If you are still narrowing down the scope, these service pages can help you describe the project more clearly before you call or submit the form.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceLinks.map((service) => (
                <Link key={service.href} href={service.href} className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-sm transition-all">
                  <h3 className="font-serif font-semibold text-xl text-foreground group-hover:text-primary transition-colors">{service.label}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-semibold">Review this service <ArrowRight className="h-4 w-4" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-secondary/60">
          <div className="w-full max-w-[1100px] mx-auto px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">What happens next</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground">A straightforward way to begin</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center"><div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-semibold">1</div><h3 className="font-serif font-semibold text-lg text-foreground">Reach out</h3><p className="mt-2 text-sm text-muted-foreground">Call, email, or send the form with the project details you already know.</p></div>
              <div className="text-center"><div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-semibold">2</div><h3 className="font-serif font-semibold text-lg text-foreground">Discuss scope</h3><p className="mt-2 text-sm text-muted-foreground">Talk through the room, the problem, desired changes, and relevant constraints.</p></div>
              <div className="text-center"><div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-semibold">3</div><h3 className="font-serif font-semibold text-lg text-foreground">Clarify decisions</h3><p className="mt-2 text-sm text-muted-foreground">Identify the materials, layout questions, and project details that need further review.</p></div>
              <div className="text-center"><div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-semibold">4</div><h3 className="font-serif font-semibold text-lg text-foreground">Choose the next step</h3><p className="mt-2 text-sm text-muted-foreground">Move forward with the appropriate planning step for your goals and scope.</p></div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sm font-medium tracking-widest text-primary uppercase">Chandler location</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground">Contact information and service-area context</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">ARZ Home Remodeling is based in Chandler, Arizona. Use the contact details below, then confirm that your project location and scope are a good fit for the conversation.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="text-center"><MapPin className="w-6 h-6 text-primary mx-auto mb-4" /><h3 className="font-serif font-semibold text-foreground mb-2">Address</h3><p className="text-muted-foreground text-sm">{siteConfig.address.full}</p></div>
                <div className="text-center"><Phone className="w-6 h-6 text-primary mx-auto mb-4" /><h3 className="font-serif font-semibold text-foreground mb-2">Phone</h3><a href={`tel:${siteConfig.phoneClean}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">{siteConfig.phone}</a></div>
                <div className="text-center"><Mail className="w-6 h-6 text-primary mx-auto mb-4" /><h3 className="font-serif font-semibold text-foreground mb-2">Email</h3><a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-primary transition-colors text-sm break-words">{siteConfig.email}</a></div>
                <div className="text-center"><Clock className="w-6 h-6 text-primary mx-auto mb-4" /><h3 className="font-serif font-semibold text-foreground mb-2">Hours</h3><p className="text-muted-foreground text-sm">Mon–Fri: {siteConfig.hours.weekdays}<br />Sat: {siteConfig.hours.saturday}<br />Sun: {siteConfig.hours.sunday}</p></div>
              </div>
              <GoogleMap lat={siteConfig.address.coordinates.lat} lng={siteConfig.address.coordinates.lng} zoom={15} title={siteConfig.name} address={siteConfig.address.full} />
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary border-t border-border">
          <div className="w-full max-w-[1200px] mx-auto px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-10"><span className="text-sm font-medium tracking-widest text-primary uppercase">Local planning</span><h2 className="mt-4 text-3xl font-serif font-semibold text-foreground">Chandler and East Valley service areas</h2><p className="mt-3 text-muted-foreground leading-relaxed">ARZ lists Chandler, nearby communities, and several Chandler neighborhoods among its service areas. If you do not see your location, contact the team rather than assuming the project is outside the service area.</p></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-xl p-6"><h3 className="font-serif font-bold text-foreground text-lg mb-3 text-primary">Chandler resources</h3><p className="text-muted-foreground text-sm leading-relaxed">Start with the <Link href="/bathroom-remodeling-chandler-az/" className="text-primary underline underline-offset-4">Chandler bathroom remodeling hub</Link>, then explore the <Link href="/chandler-az-85224/" className="text-primary underline underline-offset-4">85224</Link>, <Link href="/chandler-az-85225/" className="text-primary underline underline-offset-4">85225</Link>, and <Link href="/chandler-az-85226/" className="text-primary underline underline-offset-4">85226</Link> pages where relevant.</p></div>
              <div className="bg-card border border-border rounded-xl p-6"><h3 className="font-serif font-bold text-foreground text-lg mb-3 text-primary">Nearby communities</h3><p className="text-muted-foreground text-sm leading-relaxed">ARZ also lists <Link href="/bathroom-remodeling-gilbert-az/" className="text-primary underline underline-offset-4">Gilbert</Link>, <Link href="/bathroom-remodeling-queen-creek-az/" className="text-primary underline underline-offset-4">Queen Creek</Link>, <Link href="/bathroom-remodeling-sun-lakes/" className="text-primary underline underline-offset-4">Sun Lakes</Link>, and <Link href="/bathroom-remodeling-phoenix-az/" className="text-primary underline underline-offset-4">Phoenix</Link> among its location resources.</p></div>
              <div className="bg-card border border-border rounded-xl p-6"><h3 className="font-serif font-bold text-foreground text-lg mb-3 text-primary">Permit questions</h3><p className="text-muted-foreground text-sm leading-relaxed">When layout, plumbing, electrical, or other regulated work is involved, review the <Link href="/bathroom-remodeling-permits-chandler/" className="text-primary underline underline-offset-4">Chandler permit guidance</Link> and confirm requirements for the specific scope.</p></div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="w-full max-w-[1000px] mx-auto px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-12"><span className="text-sm font-medium tracking-widest text-primary uppercase">Questions before you reach out</span><h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground">Contact and project-planning FAQs</h2><p className="mt-4 text-muted-foreground">These answers help you prepare for a useful first conversation without requiring a finished design.</p></div>
            <div className="space-y-4">
              {contactFaqs.map((faq) => (
                <details key={faq.question} className="group border border-border rounded-lg bg-card p-5">
                  <summary className="cursor-pointer list-none pr-8 font-serif font-semibold text-lg text-foreground group-open:text-primary">{faq.question}</summary>
                  <div className="mt-3 text-muted-foreground leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="w-full max-w-[1000px] mx-auto px-8 lg:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">Ready to discuss your Chandler bathroom?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/85 leading-relaxed">Call, email, or send the project form with the details you already know. If you are still comparing options, start with the <Link href="/" className="underline underline-offset-4">ARZ Home Remodeling homepage</Link> or review the <Link href="/bathroom-remodeling-chandler-az/" className="underline underline-offset-4">Chandler bathroom remodeling hub</Link>.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4"><a href={`tel:${siteConfig.phoneClean}`} className="inline-flex items-center justify-center gap-2 rounded-md bg-background px-6 py-3 font-semibold text-foreground hover:bg-background/90 transition-colors"><Phone className="h-4 w-4" /> Call {siteConfig.phone}</a><a href="#project-form" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/60 px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors">Send project details <ArrowRight className="h-4 w-4" /></a></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
