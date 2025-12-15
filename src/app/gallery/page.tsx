import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";
import { galleryImages } from "@/app/lib/gallery-data";

export const metadata: Metadata = {
  title: "Gallery | TechFuse 2.0",
  description:
    "Explore the visual journey of TechFuse 2.0. View photos from our past events, workshops, and hackathons organized by IEEE SPS SBC RIT.",
  keywords: [
    "TechFuse Gallery",
    "IEEE SPS SBC RIT Photos",
    "RIT Kottayam TechFest",
    "Robotics Workshop Gallery",
    "TechFuse Event Photos",
    "SBC RIT Events",
  ],
  alternates: {
    canonical: "https://techfuse20.ieeesbrit.com/gallery",
  },
  openGraph: {
    title: "Gallery | TechFuse 2.0",
    description: "Explore the visual journey of TechFuse 2.0. Moments of innovation and collaboration.",
    url: "https://techfuse20.ieeesbrit.com/gallery",
    siteName: "TechFuse 2.0",
    type: "website",
    images: [
      {
        url: galleryImages[0]?.src || "https://techfuse20.ieeesbrit.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechFuse 2.0 Gallery Highlight",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | TechFuse 2.0",
    description: "Explore the visual journey of TechFuse 2.0. Moments of innovation and collaboration.",
    images: [galleryImages[0]?.src || "https://techfuse20.ieeesbrit.com/og-image.jpg"],
  },
};

export default function GalleryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "TechFuse 2.0 Gallery",
    description: "Photos from TechFuse 2.0 events and workshops.",
    url: "https://techfuse20.ieeesbrit.com/gallery",
    provider: {
      "@type": "Organization",
      name: "IEEE SPS SBC RIT",
      url: "https://ieeesbrit.com",
    },
    image: galleryImages.map((img) => ({
      "@type": "ImageObject",
      contentUrl: `https://techfuse20.ieeesbrit.com${img.src}`,
      name: img.alt,
      description: img.alt, // Fallback if no separate description
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalleryContent />
    </>
  );
}
