import type { Metadata } from "next";
import { spaceGrotesk, inter, jetbrainsMono } from "./fonts";
import "./globals.css";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";

export const metadata: Metadata = {
  title: "TechFuse 2.0 - IEEE SPS SBC RIT - Official Website",
  description: "Join us at TechFuse 2.0, an IEEE SPS SBC RIT flagship event featuring workshops, hackathons, and tech talks. Jan 30 - Feb 01.",
  keywords: ["TechFuse", "IEEE", "RIT", "Technology", "Hackathon", "Workshops"],
  openGraph: {
    title: "TechFuse 2.0 - IEEE SPS SBC RIT",
    description: "The ultimate technical convergence. Jan 30 - Feb 01.",
    url: "https://techfuse.rit.ac.in", // Placeholder URL
    siteName: "TechFuse 2.0",
    images: [
      {
        url: "/og-image.jpg", // We need to ensure this exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "TechFuse 2.0 Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechFuse 2.0 - Return of the Legend",
    description: "Join us at TechFuse 2.0. Jan 30 - Feb 01 at RIT.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behaviour="smooth">
      <body
        className={`antialiased bg-tf-radial-pattern ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
