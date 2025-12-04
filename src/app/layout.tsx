import type { Metadata } from "next";
import "./globals.css";

// 1. Fix the empty Footer import (Assuming it lives in components)
import Footer from "@/app/components/Footer";

// 2. Point to the correct component location (PascalCase is standard)
import Navbar from "@/app/components/NavBar";

// 3. Point to the file created in app/fonts.ts
import { spaceGrotesk, inter, jetbrainsMono } from "./fonts";

export const metadata: Metadata = {
  title: "TechFuse 2.0 ",
  description: "An IEEE SPS RIT EVENT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={` antialiased bg-tf-radial-pattern ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
