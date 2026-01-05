import type { Metadata } from "next";
import { spaceGrotesk, inter, jetbrainsMono } from "./fonts";
import "./globals.css";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import GridBackground from "./components/gridBackground";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://techfuse20.ieeesbrit.com"),

  title: {
    default: "TechFuse 2.0 - IEEE SPS SBC RIT",
    template: "%s | TechFuse 2.0",
  },

  description:
    "Join us at TechFuse 2.0, an IEEE SPS SBC RIT flagship event featuring workshops, hackathons, and tech talks. Jan 30 - Feb 01.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "TechFuse 2.0 - IEEE SPS SBC RIT",
    description: "The ultimate technical convergence. Jan 30 - Feb 01.",
    url: "https://techfuse20.ieeesbrit.com", // Placeholder URL
    siteName: "TechFuse 2.0",
    images: [
      {
        url: "https://techfuse20.ieeesbrit.com/icon.png",
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
    images: ["https://techfuse20.ieeesbrit.com/icon.png"],
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
        <GridBackground />
        <Navbar />
        <main>{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
