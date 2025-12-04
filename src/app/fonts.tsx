// app/fonts.ts
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

// 1. Heading/Display Font (Futuristic, Tech)
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"], // Load specific weights to save bytes
});

// 2. Body Font (Clean, Readable)
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 3. Accent/Code Font (Technical detail)
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
