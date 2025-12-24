import React from "react";
import Image from "next/image";
import SubHeading from "@/app/components/subHeading";

interface Data {
  heading: string | string[];
  src: string;
  description: string | string[];
  align?: "flex-row" | "flex-row-reverse";
  animation?: { className: string; style?: React.CSSProperties };
  className?: string;
}

function AboutTemplate(Data: Data) {
  const layout = Data.align || "flex-row";

  // Ensure headings and descriptions are arrays
  const headings = Array.isArray(Data.heading) ? Data.heading : [Data.heading];
  const descriptions = Array.isArray(Data.description)
    ? Data.description
    : [Data.description];

  // Determine the complete responsive layout classes
  const layoutClasses =
    layout === "flex-row-reverse"
      ? "flex-col-reverse lg:flex-row-reverse"
      : "flex-col-reverse lg:flex-row";

  return (
    // Added 'relative' to allow for background accents if you add them later
    <div className="flex flex-col items-center w-full py-12 px-6 relative">
      {/* HEADER SECTION */}
      <div
        className={`w-full text-left px-5 md:px-8 py-2 mb-4 ${Data.animation?.className}`}
        style={Data.animation?.style}
      >
        {headings.map((title, idx) => (
          <SubHeading key={idx} title={title} />
        ))}
      </div>

      {/* CONTENT GRID */}
      <div
        className={`flex ${layoutClasses}
                items-center 
                justify-between 
                gap-12 md:gap-20 
                w-full py-8 px-4 md:px-8`}
      >
        {/* TEXT CONTAINER */}
        {/* UPGRADE 1: Added border-l-2 (The Data Stream Line) */}
        <div
          className={`max-w-[600px] space-y-6 ${
            layout === "flex-row-reverse"
              ? "md:pl-10 border-l-2 border-[#66FFFF]/30 pl-6" // Left border for visual anchor
              : "md:pr-10 border-l-2 md:border-l-0 md:border-r-2 border-[#66FFFF]/30 pl-6 md:pl-0 md:pr-6" // Right border logic
          } ${Data.animation?.className}`}
          style={Data.animation?.style}
        >
          {descriptions.map((desc, idx) => (
            <p
              key={idx}
              // UPGRADE 2: Improved Typography (Lighter text, taller line-height)
              className="font-sans text-base md:text-lg font-normal leading-loose
                               text-zinc-400 tracking-wide text-justify"
            >
              {desc}
            </p>
          ))}
        </div>

        {/* IMAGE CONTAINER */}
        <div
          className={`flex justify-center w-full md:w-auto shrink-0 ${Data.animation?.className}`}
          style={Data.animation?.style}
        >
          {/* UPGRADE 3: The "Tech Fuse" Glow & Border */}
          <div
            className="relative overflow-hidden rounded-2xl 
                        border border-[#66FFFF]/20 bg-zinc-900/50
                        shadow-[0_0_30px_-10px_rgba(102,255,255,0.15)] 
                        hover:shadow-[0_0_50px_-10px_rgba(102,255,255,0.3)]
                        transition-all duration-500
                        hover:scale-[1.02] w-full max-w-[520px]"
          >
            <Image
              src={Data.src}
              width={520}
              height={320}
              alt={headings.join(" / ")}
              loading="eager"
              className={`w-full min-h-60 h-auto opacity-90 hover:opacity-100 transition-opacity duration-500 ${
                Data.className || "object-cover"
              }`}
            />

            {/* Optional: A subtle gradient overlay on the image to blend it with dark mode */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C143B]/60 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTemplate;
