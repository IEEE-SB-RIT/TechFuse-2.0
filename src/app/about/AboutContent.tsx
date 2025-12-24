"use client";

import AboutTemplate from "@/app/components/aboutTemplate";
import aboutData from "@/app/lib/aboutData";
import useLoadingAnimation from "@/hooks/loadingAnimation";
import SectionHeading from "@/app/components/SectionHeading";

function AboutContent() {
  const animate = useLoadingAnimation();
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 relative overflow-x-hidden">
      <div className={`max-w-7xl mx-auto mb-12 transition-all duration-700  ${animate().className}`} style={animate().style}>
        <SectionHeading text1="About" text2="Us" />
      </div>

      <div className="flex flex-col gap-10 md:gap-16 max-w-7xl mx-auto">
        {aboutData.map((data, index) => {
          const animation = animate(index); // individual animation for each item
          return (
            <AboutTemplate
              key={index}
              // @ts-ignore
              heading={data.heading}
              src={data.src}
              description={data.description}
              align={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
              animation={animation} // pass to template
              className={data.className}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AboutContent;
