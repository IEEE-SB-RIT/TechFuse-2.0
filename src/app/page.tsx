"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // Trigger animations on load
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* =========================================
          BACKGROUND LAYERS (The "Signal" Vibe)
      ========================================= */}

      {/* 1. Radar Grid */}
      <div className="absolute inset-0 bg-radar-grid pointer-events-none" />

      {/* 2. Scanning Line (The "Search" for signals) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#66FFFF]/5 to-transparent h-full w-full animate-scanline pointer-events-none" />

      {/* 3. Glowing Core (Behind the logo) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#66FFFF]/10 rounded-full blur-[100px] animate-signal pointer-events-none" />

      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Status Badge */}
        <div
          className={`mb-8 flex items-center gap-3 px-4 py-2 rounded-full border border-[#66FFFF]/30 bg-[#0C143B]/80 backdrop-blur-md transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#66FFFF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#66FFFF]"></span>
          </span>
          <span className="font-mono text-xs text-[#66FFFF] tracking-[0.2em] uppercase">
            Signal Detected
          </span>
        </div>

        {/* LOGO (With float animation) */}
        <div
          className={`relative mb-8 transition-all duration-1000 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="animate-float">
            <Image
              src="/techfuselogo.webp"
              width={600}
              height={375}
              alt="Techfuse 2.0 Logo"
              priority
              className="drop-shadow-[0_0_35px_rgba(102,255,255,0.3)]" // Neon glow effect around logo
            />
          </div>
        </div>

        {/* THEME TITLE */}
        <h2
          className={`font-sans text-xl md:text-2xl text-zinc-400 font-light tracking-[0.2em] mb-12 transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          A SAGA OF{" "}
          <span className="text-white font-medium border-b border-[#66FFFF] pb-1">
            SIGNALS
          </span>
        </h2>

        {/* CALL TO ACTION BUTTON */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href="/register"
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-transparent border border-[#66FFFF] hover:bg-[#66FFFF] hover:text-[#0C143B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#66FFFF]"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative text-sm tracking-[0.2em] uppercase">
              Initialize
            </span>
            <svg
              className="w-4 h-4 ml-2 relative group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>

          <p className="mt-4 font-mono text-xs text-zinc-600">
            TRANSMISSION ID: 2.0 // 2025
          </p>
        </div>
      </div>
    </div>
  );
}
