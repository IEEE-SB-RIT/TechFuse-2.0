"use client";

import Heading from "@/app/components/heading";
import AboutTemplate from "@/app/components/aboutTemplate";
import aboutData from "@/app/lib/aboutData";
import useLoadingAnimation from "@/hooks/loadingAnimation";

function AboutUs() {
    const animate= useLoadingAnimation()
    return (
        <div className="pt-28 pb-20 px-6">
            <div
                className={`mb-12 text-center ${animate().className}`}
                style={animate().style}
            >
                <Heading text="About Us"/>
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

export default AboutUs;
