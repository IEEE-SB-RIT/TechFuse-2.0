"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-linear-to-b from-black to-transparent py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* --- LOGO --- */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="z-50 text-2xl font-bold tracking-tighter text-white uppercase group"
        >
          <Image
            src="/techfuselogo.webp"
            width={400}
            height={400}
            className="w-36"
            alt=""
          />
        </Link>

        {/* --- DESKTOP NAV --- */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium tracking-widest uppercase transition-colors duration-300 hover:text-cyan-400 ${
                pathname === link.href ? "text-cyan-400" : "text-zinc-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/register"
            className="px-6 py-2 bg-white text-black text-xs font-bold tracking-widest uppercase rounded-full hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]"
          >
            Get Tickets!
          </Link>
        </nav>

        {/* --- PREMIUM HAMBURGER BUTTON --- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 relative w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 active:scale-95 hover:bg-white/10 hover:border-white/20"
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">
            {/* Top Line */}
            <span
              className={`h-[2px] w-full bg-white rounded-full transform transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "rotate-45 translate-y-[9px] bg-cyan-400" : ""
              }`}
            />
            {/* Middle Line */}
            <span
              className={`h-[2px] w-full bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "opacity-0 translate-x-2" : "opacity-100"
              }`}
            />
            {/* Bottom Line */}
            <span
              className={`h-[2px] w-full bg-white rounded-full transform transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "-rotate-45 -translate-y-[9px] bg-cyan-400" : ""
              }`}
            />
          </div>
        </button>

        {/* --- MOBILE OVERLAY --- */}
        <div
          className={`fixed inset-0 bg-zinc-950 z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-cyan-500/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
          </div>

          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-light tracking-tight text-white hover:text-cyan-400 transition-all duration-500 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/register"
            onClick={() => setIsOpen(false)}
            className={`mt-6 px-12 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black text-lg font-bold tracking-widest uppercase rounded-full shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Get Tickets
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
