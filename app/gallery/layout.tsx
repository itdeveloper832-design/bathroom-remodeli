import { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {title: "Bathroom Remodeling Project Gallery Chandler AZ | ARZ",description: "Browse bathroom remodeling ideas and before-and-after project examples from ARZ Home Remodeling in Chandler, AZ. Explore showers, tile, vanities, and more.",
  openGraph: {title: "Bathroom Remodeling Project Gallery Chandler AZ | ARZ",description: "Browse bathroom remodeling ideas and before-and-after project examples from ARZ Home Remodeling in Chandler, AZ. Explore showers, tile, vanities, and more.",
    url: `${siteConfig.url}/gallery/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/hero-bathroom.jpg`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Project Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",title: "Bathroom Remodeling Project Gallery Chandler AZ | ARZ",description: "Browse bathroom remodeling ideas and before-and-after project examples from ARZ Home Remodeling in Chandler, AZ. Explore showers, tile, vanities, and more.",
    images: [`${siteConfig.url}/images/hero-bathroom.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/gallery/`,
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

