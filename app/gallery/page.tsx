"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeftRight, ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { getFeaturedGalleryItems } from "@/lib/actions/gallery"
import type { GalleryItem } from "@/lib/types"
import { defaultGalleryItems } from "@/lib/seed-blog"
import { siteConfig } from "@/lib/site-config"

const categories = [
  { value: "all", label: "All Projects" },
  { value: "bathroom", label: "Bathroom" },
  { value: "shower", label: "Shower" },
  { value: "vanity", label: "Vanity" },
]

const faqs = [
  {
    question: "How should I use a bathroom remodeling gallery when planning my project?",
    answer:
      "Use the images to identify patterns you like—such as a walk-in shower, tile layout, vanity style, storage approach, lighting, or color direction. Then compare those ideas with your bathroom’s size, existing conditions, accessibility needs, and the changes you actually want to make.",
  },
  {
    question: "Are the images on this page before-and-after examples?",
    answer:
      "Some gallery items may include both a before image and an after image. When both are available, the lightbox provides a before/after control. Other items may be single visual examples, so the image label and available controls should guide what you are viewing.",
  },
  {
    question: "Can I bring a gallery image or another inspiration photo to ARZ?",
    answer:
      "Yes. Inspiration images can help explain the look, layout, materials, or features you are considering. They are a starting point for a conversation; the final recommendation needs to account for the dimensions, condition, products, and scope of your Chandler bathroom.",
  },
  {
    question: "Does ARZ handle smaller bathroom updates as well as complete remodels?",
    answer:
      "The appropriate scope depends on the room and what you want to change. A project conversation can distinguish a targeted shower, tub, vanity, tile, flooring, lighting, or accessibility update from a broader bathroom renovation.",
  },
  {
    question: "Can bathroom remodeling ideas include accessibility improvements?",
    answer:
      "Yes. Homeowners can discuss features such as easier entry, a walk-in or curbless shower direction, grab-bar planning, seating, reachable storage, and other daily-use considerations. The right features depend on the person, the room, and the agreed scope.",
  },
  {
    question: "What should I include when I contact ARZ about a gallery idea?",
    answer:
      "Share the bathroom location in or around Chandler, a few photos if available, what you want to change, the images or features you like, and whether the shower, tub, vanity, flooring, tile, lighting, or accessibility is part of the same project.",
  },
]

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Bathroom Remodeling Project Gallery in Chandler, AZ",
      description:
        "Bathroom remodeling ideas and visual project examples for Chandler homeowners exploring showers, tile, vanities, flooring, and related updates.",
      url: `${siteConfig.url}/gallery/`,
      isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services/` },
        { "@type": "ListItem", position: 3, name: "Gallery", item: `${siteConfig.url}/gallery/` },
      ],
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

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [showBefore, setShowBefore] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const data = await getFeaturedGalleryItems()
      if (data.length === 0) {
        const defaultItems = defaultGalleryItems.map((item, index) => ({
          ...item,
          id: `default-${index}`,
          createdAt: new Date(),
        })) as GalleryItem[]
        setItems(defaultItems)
      } else {
        setItems(data)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  const visibleItems = items.filter((item) => item.category !== "kitchen")
  const filteredItems = selectedCategory === "all"
    ? visibleItems
    : visibleItems.filter((item) => item.category === selectedCategory)
  const currentIndex = selectedItem ? filteredItems.findIndex((item) => item.id === selectedItem.id) : -1

  function openItem(item: GalleryItem) {
    setSelectedItem(item)
    setShowBefore(false)
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1])
      setShowBefore(false)
    }
  }

  function handleNext() {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1])
      setShowBefore(false)
    }
  }

  return (
    <>
      <title>Bathroom Remodeling Project Gallery Chandler AZ | ARZ</title>
      <meta name="description" content="Browse bathroom remodeling ideas and before-and-after project examples from ARZ Home Remodeling in Chandler, AZ. Explore showers, tile, vanities, and more." />
      <link rel="canonical" href={`${siteConfig.url}/gallery/`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main id="main-content" className="min-h-screen bg-background">
        <section className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 bg-secondary overflow-hidden">
          <div className="container mx-auto px-4 mt-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">Bathroom remodeling ideas in Chandler</span>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground text-balance leading-tight">
                Bathroom Remodeling Project Gallery in Chandler, AZ
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Browse visual directions for showers, tubs, tile, flooring, vanities, lighting, and more. Use the gallery to find details you like, then bring those ideas to a bathroom remodeling conversation for your Chandler, Arizona home.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact/">Share Your Bathroom Idea <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border">
                  <a href={`tel:${siteConfig.phoneClean}`}>Call {siteConfig.phone}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Notice the layout", text: "Look at how the shower, tub, vanity, storage, and doorway relate to one another—not just at the color of the finish." },
                { title: "Compare the details", text: "Save ideas for tile scale, grout contrast, flooring, lighting, glass, hardware, and the features that affect daily use." },
                { title: "Turn inspiration into a brief", text: "Note what you want to keep, what is not working, and whether the project is a targeted update or a broader renovation." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                  <h2 className="font-serif text-2xl text-foreground">{item.title}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 border-y border-border bg-card sticky top-20 z-30 shadow-sm" aria-label="Gallery filters">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="default"
                  className="rounded-full h-10 px-6 font-medium"
                  onClick={() => setSelectedCategory(category.value)}
                  aria-pressed={selectedCategory === category.value}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" aria-labelledby="gallery-grid-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">Explore the visual examples</span>
              <h2 id="gallery-grid-heading" className="mt-3 text-3xl md:text-4xl font-serif font-semibold text-foreground">Find a direction for your bathroom</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Select a category, then open an image for a larger view. Where both images are available, you can switch between before and after. Each room has its own dimensions, products, and existing conditions, so use the gallery as inspiration rather than a promise that a project will look identical.
              </p>
            </div>
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy="true" aria-label="Loading gallery images">
                {[...Array(6)].map((_, i) => <div key={i} className="animate-pulse"><div className="aspect-[4/3] bg-muted rounded-xl" /></div>)}
              </div>
            ) : filteredItems.length === 0 ? (
              <div className="text-center py-16"><p className="text-lg text-muted-foreground font-serif">No projects found in this category.</p></div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="group cursor-pointer animate-in fade-in slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 50}ms`, animationFillMode: "both" }}
                    onClick={() => openItem(item)}
                    onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openItem(item) } }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open gallery image: ${item.title}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300">
                      <Image src={item.imageUrl} alt={item.title} fill className="object-cover transition-transform duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-serif text-xl font-semibold leading-tight">{item.title}</h3>
                        <p className="text-white/80 text-sm capitalize mt-1">{item.category}</p>
                      </div>
                      {item.beforeImage && item.afterImage && (
                        <div className="absolute top-4 right-4 z-10"><span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold rounded-full shadow-sm">Before/After</span></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">Connect the image to the scope</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-serif font-semibold text-foreground">Explore the bathroom work behind the look</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">A photo can show a direction, but the service scope determines what has to be planned. Explore the related pages that match the feature you are considering.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { href: "/shower-remodeling/", title: "Shower remodeling", text: "Compare ideas for a more functional or updated shower area." },
                { href: "/tub-to-shower-conversion/", title: "Tub-to-shower conversion", text: "Explore a different direction when the tub is no longer serving the room." },
                { href: "/bathroom-tile-installation/", title: "Bathroom tile installation", text: "Think through tile scale, texture, grout, and layout." },
                { href: "/bathroom-flooring-installation/", title: "Bathroom flooring", text: "Coordinate the floor with the vanity, shower, tub, and doorway." },
                { href: "/bathroom-vanity-installation/", title: "Bathroom vanity installation", text: "Plan storage, counter space, hardware, and fixture relationships." },
                { href: "/handicap-accessible-bathroom/", title: "Accessible bathroom planning", text: "Consider easier entry, reach, seating, and daily-use needs." },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="group rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/50">
                  <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{item.text}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">Explore service <ArrowRight className="ml-2 h-4 w-4" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">Questions before you reach out</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-serif font-semibold text-foreground">Bathroom remodeling gallery FAQs</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-border bg-card p-6">
                  <summary className="cursor-pointer list-none pr-8 font-serif text-xl font-semibold text-foreground marker:hidden">{faq.question}</summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold">Have a bathroom idea you want to discuss?</h2>
              <p className="mt-4 text-primary-foreground/85 leading-relaxed">Send ARZ Home Remodeling the image, feature, or problem that caught your attention. Include the Chandler area, what you want to change, and whether the project involves a shower, tub, tile, flooring, vanity, lighting, or accessibility.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary"><Link href="/contact/">Share Your Bathroom Project <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"><a href={`tel:${siteConfig.phoneClean}`}>Call {siteConfig.phone}</a></Button>
              </div>
              <p className="mt-6 text-sm text-primary-foreground/75">For the broader local service scope, visit <Link className="underline underline-offset-4" href="/bathroom-remodeling-chandler-az/">Chandler bathroom remodeling</Link> or return to <Link className="underline underline-offset-4" href="/">ARZ Home Remodeling</Link>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {selectedItem && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-in fade-in duration-300" onClick={() => setSelectedItem(null)} role="dialog" aria-modal="true" aria-label={`${selectedItem.title} gallery image`}>
          <button onClick={() => setSelectedItem(null)} className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors z-50 rounded-full bg-white/10 hover:bg-white/20" aria-label="Close lightbox"><X className="h-8 w-8" /></button>
          {currentIndex > 0 && <button onClick={(event) => { event.stopPropagation(); handlePrev() }} className="absolute left-6 p-3 text-white/70 hover:text-white transition-colors z-50 rounded-full bg-white/10 hover:bg-white/20" aria-label="Previous image"><ChevronLeft className="h-10 w-10" /></button>}
          {currentIndex < filteredItems.length - 1 && <button onClick={(event) => { event.stopPropagation(); handleNext() }} className="absolute right-6 p-3 text-white/70 hover:text-white transition-colors z-50 rounded-full bg-white/10 hover:bg-white/20" aria-label="Next image"><ChevronRight className="h-10 w-10" /></button>}
          <div className="relative w-full max-w-5xl max-h-[90vh] mx-4 animate-in fade-in zoom-in-95 duration-300" onClick={(event) => event.stopPropagation()}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted/10 shadow-2xl">
              <Image src={showBefore && selectedItem.beforeImage ? selectedItem.beforeImage : selectedItem.afterImage || selectedItem.imageUrl} alt={selectedItem.title} fill className="object-contain" priority />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div><h3 className="text-white text-2xl font-serif font-semibold">{selectedItem.title}</h3>{selectedItem.description && <p className="text-white/80 mt-2 max-w-2xl leading-relaxed">{selectedItem.description}</p>}</div>
                {selectedItem.beforeImage && selectedItem.afterImage && <Button variant="outline" size="default" className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-full px-6" onClick={() => setShowBefore(!showBefore)} aria-label={showBefore ? "Show After image" : "Show Before image"}><ArrowLeftRight className="mr-2 h-4 w-4" aria-hidden="true" />{showBefore ? "Show After" : "Show Before"}</Button>}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
