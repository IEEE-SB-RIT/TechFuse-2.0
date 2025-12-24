import type { Metadata } from "next";
import EventsContent from "./EventsContent";

export const metadata: Metadata = {
  title: "Events | TechFuse 2.0",
  description:
    "Discover the lineup of workshops, hackathons, and technical talks at TechFuse 2.0. Join us for an immersive learning experience.",
  openGraph: {
    title: "Events | TechFuse 2.0",
    description:
      "Discover the lineup of workshops, hackathons, and technical talks at TechFuse 2.0.",
    url: "https://techfuse20.ieeesbrit.com/events",
    type: "website",
  },
};

export default function EventsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    name: "TechFuse 2.0 Events",
    description: "A series of workshops and hackathons.",
    url: "https://techfuse20.ieeesbrit.com/events",
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
      <EventsContent />
    </>
  );
}
