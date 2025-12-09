import Heading from "@/app/components/heading";
import AboutTemplate from "@/app/components/aboutTemplate";
import aboutData from "@/app/lib/aboutData";

function AboutUs() {
    return (
        <div className="pt-28 pb-20 px-6">
            {/* Same heading spacing + alignment */}
            <div className="mb-12 text-center">
                <Heading text="About Us" />
            </div>

            <div className="flex flex-col gap-10 md:gap-16 max-w-7xl mx-auto">
                {aboutData.map((data, index) => (
                    <AboutTemplate
                        key={index}
                        // @ts-ignore
                        heading={data.heading}
                        src={data.src}
                        description={data.description}
                        align={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
                    />
                ))}
            </div>

        </div>
    );
}

export default AboutUs;
