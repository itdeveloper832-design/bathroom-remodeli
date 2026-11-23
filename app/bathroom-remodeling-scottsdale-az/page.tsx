import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema, PriceSchema , BreadcrumbSchema, LocalBusinessSchema } from "@/components/seo/json-ld";
import AreaBenefits from "@/components/area-benefits";
import Link from "next/link";
import {
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  DollarSign,
  Droplets,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {title: "Bathroom Remodeling in Scottsdale, AZ | ARZ Home Remodeling",description: "Bathroom remodeling in Scottsdale, AZ for showers, tubs, tile, vanities, flooring and complete bathroom updates. Request a free project estimate.",
  openGraph: {title: "Bathroom Remodeling in Scottsdale, AZ | ARZ Home Remodeling",description: "Bathroom remodeling in Scottsdale, AZ for showers, tubs, tile, vanities, flooring and complete bathroom updates. Request a free project estimate.",
    url: `${siteConfig.url}/bathroom-remodeling-scottsdale-az/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-scottsdale-az/`,
  },
};

const scottsdaleFaqs = [
  {
    question: "How much does a bathroom remodel cost in Scottsdale, AZ?",
    answer:
      "Bathroom remodeling costs in Scottsdale depend entirely on the scope of the project, including structural changes, luxury material selections, and fixture upgrades. We offer free design consultations and prepare a detailed, line-item written estimate before any work begins, ensuring a fixed-price guarantee. Contact us today to schedule your quote."
  },
  {
    question: "Do you handle permits for Scottsdale bathroom projects?",
    answer:
      "Yes. We handle all required permitting through the City of Scottsdale for structural, plumbing, and electrical modifications. We ensure your project meets all local building codes."
  },
  {
    question: "Do you offer custom 3D designs for Scottsdale homes?",
    answer:
      "Absolutely. Our Scottsdale projects include professional design consultations and 3D renderings to help you visualize your new luxury space before construction begins."
  },
  {
    question: "Do you work in North Scottsdale and DC Ranch?",
    answer:
      "Yes. We serve Scottsdale across 85250, 85251, 85255, 85258, and 85260, including Old Town, Gainey Ranch, McCormick Ranch, DC Ranch, and North Scottsdale. Call (520) 569-3339 to confirm your neighborhood and book a free on-site evaluation."
  },
  {
    question: "How long does a Scottsdale master bathroom remodel take?",
    answer:
      "A standard guest bathroom takes about ten to fourteen days of active construction. A larger master suite remodel typically takes three to four weeks. We provide a complete itemized schedule before any demolition starts, so you know exactly what happens each week."
  }
];

export default function ScottsdalePage() {
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Remodeling Scottsdale Az", url: "https://arzhomeremodeling.com/bathroom-remodeling-scottsdale-az/" } ]} />
<ServiceSchema
        serviceName="Luxury Bathroom Remodeling in Scottsdale, Arizona"
        serviceDescription="expert bathroom remodeling team specializing in high-end renovations in Scottsdale, AZ. Custom showers, luxury master baths, and premium stone installation."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-scottsdale-az/`}
      />
      <LocalBusinessSchema />
      <FAQSchema faqs={scottsdaleFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling Scottsdale"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-scottsdale-az/`}
      />
      <Header />
      <main>
        <ServiceHero
          title="Scottsdale’s Premier Luxury Bathroom Remodeling"
          subtitle="Custom Design & Master Suite Transformations"
          description="Elevate your Scottsdale home with a world-class bathroom renovation. We specialize in high-end materials, spa-inspired features, and museum-quality craftsmanship for Scottsdale's most prestigious zip codes."
          image="/images/hero/luxury-shower-remodel-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Scottsdale", url: `${siteConfig.url}/bathroom-remodeling-scottsdale-az/` },
          ]}
        />

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6">Expert Bathroom Renovations in Scottsdale</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Scottsdale homeowners demand the best in design and execution. Whether you are updating a modern condo in 
              Old Town or transforming a sprawling master suite in North Scottsdale, we bring the expertise and 
              attention to detail required for high-end home improvements.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We specialize in <strong>luxury bathroom remodeling in Scottsdale, AZ</strong>, focusing on premium materials 
              like Carrara marble, custom cabinetry, and state-of-the-art shower systems. As a professional Arizona 
              contractor, we serve communities across <strong>85250, 85251, 85255, 85258, and 85260</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href={`tel:${siteConfig.phoneClean}`}>Speak to a Project Supervisor</a>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href={`tel:${siteConfig.phoneClean}`}>Call Now</a>
              </Button>
            </div>
          </div>
        </section>

        {/* WHAT WE BUILD IN SCOTTSDALE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Bathroom Services We Bring to Scottsdale
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A Scottsdale remodel typically includes Carrara marble or large-format porcelain tile,
              custom cabinetry, a spa-style walk-in shower with frameless glass, digital shower
              valves, floating double vanities, and backlit mirrors. Every project starts with a
              free design consultation and 3D renderings, so you see the finished bathroom before
              construction begins.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/shower-remodeling/" className="bg-secondary border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary">Shower Remodeling</p>
                  <p className="text-muted-foreground text-sm">Walk-in showers, frameless glass, and digital valves.</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0" />
              </Link>
              <Link href="/tub-to-shower-conversion/" className="bg-secondary border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary">Tub-to-Shower Conversion</p>
                  <p className="text-muted-foreground text-sm">Replace an unused tub with a curbless walk-in shower.</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0" />
              </Link>
              <Link href="/master-bathroom-remodel/" className="bg-secondary border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary">Master Bathroom Remodel</p>
                  <p className="text-muted-foreground text-sm">Full master suite transformations with double vanities.</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0" />
              </Link>
              <Link href="/bathroom-tile-installation/" className="bg-secondary border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary">Tile Installation</p>
                  <p className="text-muted-foreground text-sm">Marble, porcelain, and large-format tile with epoxy grout.</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0" />
              </Link>
              <Link href="/bathroom-vanity-installation/" className="bg-secondary border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary">Vanity Installation</p>
                  <p className="text-muted-foreground text-sm">Custom and floating vanities with quartz countertops.</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0" />
              </Link>
              <Link href="/bathroom-flooring-installation/" className="bg-secondary border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary">Bathroom Flooring</p>
                  <p className="text-muted-foreground text-sm">Tile flooring with heated-floor options for master baths.</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0" />
              </Link>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mt-8">
              Every Scottsdale project includes a fixed, itemized written quote and our 2-year
              workmanship warranty. Call{" "}
              <a href={`tel:${siteConfig.phoneClean}`} className="text-primary hover:underline font-medium">
                {siteConfig.phone}
              </a>{" "}
              to schedule your free on-site evaluation.
            </p>
          </div>
        </section>

        {/* LOCAL COMMUNITY & PERMIT HIGHLIGHTS */}
        <section className="py-16 lg:py-24 bg-secondary border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Scottsdale Landmarks & Local Remodeling Projects
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Scottsdale is a world-renowned destination famous for its spectacular <strong>McCormick-Stillman Railroad Park</strong>, the upscale <strong>Scottsdale Fashion Square</strong>, and the historic cultural hubs of <strong>Old Town Scottsdale</strong>. When we execute bathroom makeovers here, we deliver premium, bespoke craftsmanship. In communities like <strong>Gainey Ranch</strong> or <strong>McCormick Ranch</strong>, we prioritize custom marble and high-end tile.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Recent Scottsdale Remodeling Example:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A recent project completed near the <strong>DC Ranch</strong> area involved a custom master bathroom renovation. We replaced an oversized unused tub with a large curbless walk-in shower with premium Carrara marble tile, digital Moen U shower valves, floating double-sink vanities, and elegant backlit mirrors.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Scottsdale Permitting & Building Safety Guidelines:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              If your Scottsdale bathroom upgrade involves structural reconfigurations, partition wall removals, or electrical modifications, we coordinate the complete permitting process with the <strong>City of Scottsdale Planning & Development Department</strong> (located at 7447 E Indian School Rd). We manage all planning, blueprint submissions, and municipal inspections directly.
            </p>
          </div>
        </section>

        <AreaBenefits 
          benefits={[
            "Custom 3D Bathroom Design",
            "Premium Stone & Tile Installation",
            "Spa-Inspired Walk-in Showers",
            "Freestanding Soaking Tubs",
            "High-End Vanity & Cabinetry",
            "fully insured Execution"
          ]} 
          cityName="Scottsdale" 
        />
        
        <ServiceFAQ faqs={scottsdaleFaqs} />
        <Testimonials />
        <ContactSection />
        
        <ServiceCTA
          title="Ready to Start Your Scottsdale Project?"
          description="Contact our luxury design team today for a free on-site evaluation and personalized quote."
        />
      </main>
      <Footer />
    </>
  );
}
