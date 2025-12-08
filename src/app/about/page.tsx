import Heading from "@/app/components/heading";
import AboutTemplate from "@/app/components/aboutTemplate";
import aboutData from "@/app/lib/aboutData";

function AboutUs() {
    return (
        <div>
            <Heading text={"About Us"}/>
            <div className="flex flex-col gap-6">
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
