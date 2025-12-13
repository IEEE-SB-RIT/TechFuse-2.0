

import Image from "next/image";
import Link from "next/link";
import GridBackground from "./components/gridBackground";
import SignalDetected from "./components/SignalDetected";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <GridBackground />

      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Status Badge */}
        <SignalDetected />

        {/* LOGO (With float animation) */}
        <div className="relative mb-8 animate-fade-in-scale">
          <div className="animate-float">
            <Image
              src="/techfuselogo.webp"
              width={600}
              height={375}
              priority
              alt="Techfuse 2.0 Logo"
              className="drop-shadow-[0_0_35px_rgba(102,255,255,0.3)]" // Neon glow effect around logo
            />
          </div>
        </div>

        {/* EVENT DATES */}
        {/* Replaced 'Saga of Signals' with stylized dates */}
        <h2
          className="font-mono flex items-center justify-center gap-3 text-lg md:text-2xl text-white font-semibold tracking-[0.1em] mb-12 animate-fade-in-up delay-200"
        >
          <span className="text-techFuseBlue">JAN</span> 30, 31
          <span className="text-zinc-600 mx-1">|</span>
          <span className="text-techFuseBlue">FEB</span> 01
        </h2>

        {/* CALL TO ACTION BUTTON */}
        <div
          className="animate-fade-in-up delay-300"
        >
          <Link
            href="/register"
            className="group relative inline-flex items-center justify-center px-7 py-4 font-bold text-white transition-all duration-200 bg-transparent rounded-2xl border border-[#66FFFF] hover:bg-[#66FFFF] hover:text-[#0C143B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#66FFFF]"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-linear-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative text-sm tracking-[0.2em] uppercase">
              Grab your tickets
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
    </section>
  );
}