// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Footer() {
//   const [mailStatus, setMailStatus] = useState(false);
//   const currentYear = new Date().getFullYear();

//   const handleMail = () => setMailStatus((prev) => !prev);

//   return (
//     <footer className="relative bg-[#0C143B] border-t border-white/10 overflow-hidden">
//       {/* Background Decor */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#162A6B] opacity-40 blur-[80px] rounded-full pointer-events-none" />

//       <div className="relative z-10  mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
//           {/* --- BRANDING COLUMN (Span 4) --- */}
//           <div className="md:col-span-4 flex flex-col items-center md:items-start gap-6">
//             <Link href="/" className="group block mb-4">
//               <div className="flex items-center gap-3">
//                 <Image
//                   src="/techfuselogo.webp"
//                   alt="TechFuse 2.0 Logo"
//                   width={200}
//                   height={80}
//                   unoptimized
//                   className="w-48 md:w-56 h-auto object-contain"
//                   priority
//                 />
//               </div>
//             </Link>
//             <p className="font-sans text-zinc-100 text-sm leading-relaxed text-center md:text-left max-w-xs">
//               IEEE SPS SBC RIT presents a saga of signals. Innovating the future
//               through robotics, automation, and technology.
//             </p>

//             {/* Social Icons Row */}
//             <div className="flex items-center gap-4 mt-2">
//               <SocialLink
//                 href="https://instagram.com/ieeesbrit"
//                 icon="instagram"
//               />
//               <SocialLink
//                 href="https://www.linkedin.com/company/ieee-sb-rit/"
//                 icon="linkedin"
//               />

//               {/* Interactive Email Toggle */}
//               <div className="relative flex items-center">
//                 <button
//                   onClick={handleMail}
//                   className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-100 hover:text-[#66FFFF] hover:border-[#66FFFF] transition-all duration-300"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <rect width="20" height="16" x="2" y="4" rx="2" />
//                     <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//                   </svg>
//                 </button>

//                 {/* Reveal Animation */}
//                 <div
//                   className={`absolute left-12 top-1/2 -translate-y-1/2 overflow-hidden transition-all duration-500 ease-out ${
//                     mailStatus ? "w-64 opacity-100" : "w-0 opacity-0"
//                   }`}
//                 >
//                   <a
//                     href="mailto:ieeesb.ritk@gmail.com"
//                     className="font-mono text-sm text-[#66FFFF] whitespace-nowrap hover:underline px-2"
//                   >
//                     ieeesb.ritk@gmail.com
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* --- NAVIGATION (Span 2) --- */}
//           <div className="md:col-span-2 flex flex-col items-center md:items-start">
//             <h3 className="font-mono text-[#66FFFF] text-xs uppercase tracking-widest mb-6">
//               Menu
//             </h3>
//             <ul className="space-y-3 font-sans text-sm text-zinc-100">
//               <li>
//                 <Link href="/" className="hover:text-white transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/about"
//                   className="hover:text-white transition-colors"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/events"
//                   className="hover:text-white transition-colors"
//                 >
//                   Schedule
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/gallery"
//                   className="hover:text-white transition-colors"
//                 >
//                   Gallery
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* --- CONTACT (Span 3) --- */}
//           <div className="md:col-span-3 flex flex-col items-center md:items-start">
//             <h3 className="font-mono text-[#66FFFF] text-xs uppercase tracking-widest mb-6">
//               Contact
//             </h3>
//             <ul className="space-y-4 font-sans text-sm text-zinc-100">
//               <ContactItem name="Bijila Anna Thomas" phone="+91 62384 64655" />
//               <ContactItem name="R Harikrishnan" phone="+91 96569 90468" />
//             </ul>
//           </div>

//           {/* --- LOCATION (Span 3) --- */}
//           <div className="md:col-span-3 flex flex-col items-center md:items-start">
//             <h3 className="font-mono text-[#66FFFF] text-xs uppercase tracking-widest mb-6">
//               Location
//             </h3>
//             <a
//               href="https://maps.google.com/?q=Rajiv+Gandhi+Institute+of+Technology+Kottayam"
//               target="_blank"
//               rel="noreferrer"
//               className="group block text-center md:text-left"
//             >
//               <p className="font-sans text-sm text-zinc-400 leading-relaxed group-hover:text-white transition-colors">
//                 IEEE SPS SBC RIT
//                 <br />
//                 Rajiv Gandhi Institute of Technology
//                 <br />
//                 Kottayam, Kerala – 686501
//               </p>
//               <div className="mt-3 flex items-center justify-center md:justify-start gap-2 text-[#66FFFF] text-xs font-bold uppercase tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
//                 <span>Get Directions</span>
//                 <svg
//                   className="w-4 h-4 group-hover:translate-x-1 transition-transform"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   ></path>
//                 </svg>
//               </div>
//             </a>
//           </div>
//         </div>

//         {/* --- BOTTOM BAR --- */}
//         <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="font-mono text-xs text-zinc-600 uppercase tracking-widest text-center">
//             © {currentYear} IEEE SPS SBC RIT.
//           </p>

//           <div className="flex items-center gap-6 text-zinc-400">
//             <span className="font-mono text-xs uppercase tracking-widest">
//               Built by
//             </span>
//             <div className="flex gap-4">
//               <DeveloperLink
//                 name="Dhananjay R"
//                 link="https://devcard.link/hP9V2t"
//               />
//               <span className="text-zinc-470">/</span>
//               <DeveloperLink
//                 name="Farzan RS"
//                 link="https://devcard.link/OFNHWZ"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // --- SUBCOMPONENTS ---

// const SocialLink = ({
//   href,
//   icon,
// }: {
//   href: string;
//   icon: "instagram" | "linkedin";
// }) => (
//   <a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-100 hover:text-[#66FFFF] hover:border-[#66FFFF] hover:bg-[#66FFFF]/10 transition-all duration-300"
//   >
//     {icon === "instagram" ? (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="18"
//         height="18"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//         <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//       </svg>
//     ) : (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="18"
//         height="18"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//         <rect width="4" height="12" x="2" y="9" />
//         <circle cx="4" cy="4" r="2" />
//       </svg>
//     )}
//   </a>
// );

// // UPDATED: Brightened the name color to zinc-300 and added font-medium
// const ContactItem = ({ name, phone }: { name: string; phone: string }) => (
//   <li className="flex flex-col">
//     <span className="text-zinc-300 font-medium text-xs uppercase tracking-wider mb-1">
//       {name}
//     </span>
//     <a
//       href={`tel:${phone.replace(/\s/g, "")}`}
//       className="hover:text-[#66FFFF] transition-colors"
//     >
//       {phone}
//     </a>
//   </li>
// );

// const DeveloperLink = ({ name, link }: { name: string; link: string }) => (
//   <a
//     href={link}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="font-mono text-xs text-zinc-300 hover:text-[#66FFFF] transition-colors"
//   >
//     {name}
//   </a>
// );



"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [mailStatus, setMailStatus] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleMail = () => setMailStatus((prev) => !prev);

  return (
    <footer className="relative bg-[#0C143B] border-t border-white/10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#162A6B] opacity-40 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10  mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* --- BRANDING COLUMN (Span 4) --- */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-6">
            <Link href="/" className="group block mb-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/techfuselogo.webp"
                  alt="TechFuse 2.0 Logo"
                  width={200}
                  height={80}
                  unoptimized
                  className="w-48 md:w-56 h-auto object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="font-sans text-zinc-100 text-sm leading-relaxed text-center md:text-left max-w-xs">
              IEEE SPS SBC RIT presents a saga of signals. Innovating the future
              through robotics, automation, and technology.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-4 mt-2">
              <SocialLink
                href="https://instagram.com/ieeesbrit"
                icon="instagram"
              />
              <SocialLink
                href="https://www.linkedin.com/company/ieee-sb-rit/"
                icon="linkedin"
              />

              {/* Interactive Email Toggle */}
              <div className="relative flex items-center">
                <button
                  onClick={handleMail}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-100 hover:text-[#66FFFF] hover:border-[#66FFFF] transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </button>

                {/* Reveal Animation */}
                <div
                  className={`absolute left-12 top-1/2 -translate-y-1/2 overflow-hidden transition-all duration-500 ease-out ${
                    mailStatus ? "w-64 opacity-100" : "w-0 opacity-0"
                  }`}
                >
                  <a
                    href="mailto:ieeesb.ritk@gmail.com"
                    className="font-mono text-sm text-[#66FFFF] whitespace-nowrap hover:underline px-2"
                  >
                    ieeesb.ritk@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* --- NAVIGATION (Span 2) --- */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <h3 className="font-mono text-[#66FFFF] text-xs uppercase tracking-widest mb-6">
              Menu
            </h3>
            <ul className="space-y-3 font-sans text-sm text-zinc-100">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-white transition-colors"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* --- CONTACT (Span 3) --- */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="font-mono text-[#66FFFF] text-xs uppercase tracking-widest mb-6">
              Contact
            </h3>
            <ul className="space-y-4 font-sans text-sm">
              <ContactItem name="Bijila Anna Thomas" phone="+91 62384 64655" />
              <ContactItem name="R Harikrishnan" phone="+91 96569 90468" />
            </ul>
          </div>

          {/* --- LOCATION (Span 3) --- */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="font-mono text-[#66FFFF] text-xs uppercase tracking-widest mb-6">
              Location
            </h3>
            <a
              href="https://maps.google.com/?q=Rajiv+Gandhi+Institute+of+Technology+Kottayam"
              target="_blank"
              rel="noreferrer"
              className="group block text-center md:text-left cursor-pointer"
            >
              <p className="font-sans text-sm text-zinc-300 leading-relaxed group-hover:text-white group-hover:underline decoration-zinc-500 underline-offset-4 transition-all">
                IEEE SPS SBC RIT
                <br />
                Rajiv Gandhi Institute of Technology
                <br />
                Kottayam, Kerala – 686501
              </p>
              <div className="mt-3 flex items-center justify-center md:justify-start gap-2 text-[#66FFFF] text-xs font-bold uppercase tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                <span>Get Directions</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-zinc-600 uppercase tracking-widest text-center">
            © {currentYear} IEEE SPS SBC RIT.
          </p>

          <div className="flex items-center gap-6 text-zinc-400">
            <span className="font-mono text-xs uppercase tracking-widest">
              Built by
            </span>
            <div className="flex gap-4">
              <DeveloperLink
                name="Dhananjay R"
                link="https://devcard.link/hP9V2t"
              />
              <span className="text-zinc-470">/</span>
              <DeveloperLink
                name="Farzan RS"
                link="https://devcard.link/OFNHWZ"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- SUBCOMPONENTS ---

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: "instagram" | "linkedin";
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-100 hover:text-[#66FFFF] hover:border-[#66FFFF] hover:bg-[#66FFFF]/10 transition-all duration-300"
  >
    {icon === "instagram" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )}
  </a>
);

// UPDATED: Name is now White/Semibold, Phone is now Zinc-400 (dimmer)
const ContactItem = ({ name, phone }: { name: string; phone: string }) => (
  <li className="flex flex-col">
    <span className="text-white font-semibold text-xs uppercase tracking-wider mb-1">
      {name}
    </span>
    <a
      href={`tel:${phone.replace(/\s/g, "")}`}
      className="text-zinc-400 text-sm hover:text-[#66FFFF] transition-colors"
    >
      {phone}
    </a>
  </li>
);

const DeveloperLink = ({ name, link }: { name: string; link: string }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="font-mono text-xs text-zinc-300 hover:text-[#66FFFF] transition-all underline decoration-zinc-600 underline-offset-4 hover:decoration-[#66FFFF]"
  >
    {name}
  </a>
);