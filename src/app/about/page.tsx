import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | TechFuse 2.0",
  description:
    "Learn more about TechFuse 2.0 and the IEEE SPS SBC RIT team behind this flagship event. Discover our mission, vision, and the people driving innovation.",
  openGraph: {
    title: "About Us | TechFuse 2.0",
    description:
      "Learn more about TechFuse 2.0 and the IEEE SPS SBC RIT team behind this flagship event.",
    url: "https://techfuse20.ieeesbrit.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "TechFuse 2.0",
    description:
      "TechFuse 2.0 is the flagship event of IEEE SPS SBC RIT, featuring workshops, hackathons, and technical talks.",
    startDate: "2025-01-30",
    endDate: "2025-02-01",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Rajiv Gandhi Institute of Technology",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Velloor",
        addressLocality: "Kottayam",
        postalCode: "686501",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
    },
    organizer: {
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
      <AboutContent />
    </>
  );
}
