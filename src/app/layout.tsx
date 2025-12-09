import type { Metadata } from "next";
import { spaceGrotesk, inter, jetbrainsMono } from "./fonts";
import "./globals.css";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";

export const metadata: Metadata = {
  title: "TechFuse 2.0 - IEEE SPS SBC RIT - Official Website",
  description: "An IEEE SPS SBC RIT EVENT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
