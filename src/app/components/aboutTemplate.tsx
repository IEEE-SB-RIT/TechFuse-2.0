import React from 'react';
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
    const descriptions = Array.isArray(Data.description) ? Data.description : [Data.description];

    // Determine the complete responsive layout classes
    const layoutClasses = layout === "flex-row-reverse"
        ? "flex-col-reverse lg:flex-row-reverse"
        : "flex-col-reverse lg:flex-row";

    return (
        <div className="flex flex-col items-center w-full py-8 px-6">

            <div
                className={`w-full text-left px-5 md:px-8 py-2 ${Data.animation?.className}`}
                style={Data.animation?.style}
            >
                {headings.map((title, idx) => (
                    <SubHeading key={idx} title={title} />
                ))}
            </div>

            <div className={`flex ${layoutClasses}
    items-start md:items-center 
    justify-start md:justify-between 
    gap-10 md:gap-14
    w-full py-12 px-4 md:px-8`}>

                <div
                    className={`max-w-[550px] space-y-6 min-h-[220px] ${
                        layout === "flex-row-reverse" ? "md:pl-10" : "md:pr-10"
                    } ${Data.animation?.className}`}
                    style={Data.animation?.style}
                >
                    {descriptions.map((desc, idx) => (
                        <p
                            key={idx}
                            className="font-sans text-[14px] md:text-xl font-medium leading-relaxed
                               text-gray-700 dark:text-gray-300 tracking-wide "
                        >
                            {desc}
                        </p>
                    ))}
                </div>

                <div
                    className={`flex justify-center w-full md:w-auto flex-shrink-0 ${Data.animation?.className}`}
                    style={Data.animation?.style}
                >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg
                        hover:shadow-2xl transition-all duration-300
                        hover:scale-[1.02] w-full max-w-[520px]">

                        <Image
                            src={Data.src}
                            width={520}
                            height={320}
                            alt={headings.join(" / ")}
                            className={`w-full h-auto ${Data.className || "object-cover"}`}
                        />

                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutTemplate;