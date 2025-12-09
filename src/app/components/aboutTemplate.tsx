import React from "react";
import Image from "next/image";
import SubHeading from "@/app/components/subHeading";

interface Data {
  heading: string;
  src: string;
  description: string;
  align?: "flex-row" | "flex-row-reverse";
  animation?: { className: string; style?: React.CSSProperties };
}

function AboutTemplate(Data: Data) {
  const layout = Data.align || "flex-row";

  return (
    <div className="flex flex-col items-center w-full py-8 px-6">
      <div
        className={`w-full text-left px-5 md:px-8 py-2 ${Data.animation?.className}`}
        style={Data.animation?.style}
      >
        <SubHeading title={Data.heading} />
      </div>

      <div
        className={`flex ${layout} flex-col-reverse md:${layout} 
                items-center justify-between gap-10 md:gap-14 
                w-full py-12 px-4 md:px-8`}
      >
        <div
          className={`max-w-[550px] space-y-4 min-h-[220px] ${
            layout === "flex-row-reverse" ? "md:pl-10" : "md:pr-10"
          } ${Data.animation?.className}`}
          style={Data.animation?.style}
        >
          <p
            className="font-sans text-lg md:text-xl font-medium leading-relaxed
                        text-gray-700 dark:text-gray-300 tracking-wide"
          >
            {Data.description}
          </p>
        </div>

        <div
          className={`flex justify-center ${Data.animation?.className}`}
          style={Data.animation?.style}
        >
          <div
            className="relative overflow-hidden rounded-2xl shadow-lg
                        hover:shadow-2xl transition-all duration-300
                        hover:scale-[1.02]"
          >
            <Image
              src={Data.src}
              width={520}
              height={320}
              alt={Data.heading}
              className="rounded-2xl object-cover h-[320px] w-[520px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTemplate;
