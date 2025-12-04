import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navBar";
import { spaceGrotesk, inter, jetbrainsMono } from "@/app/fonts";

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
