import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the visual journey of TechFuse 2.0. View photos from our past events, workshops, and hackathons organized by IEEE SPS SBC RIT.",
  openGraph: {
    title: "Gallery | TechFuse 2.0",
    description: "Explore the visual journey of TechFuse 2.0.",
    url: "https://techfuse20.ieeesbrit.com/gallery",
    type: "website",
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
