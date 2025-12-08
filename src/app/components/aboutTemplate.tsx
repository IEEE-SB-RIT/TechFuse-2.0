import React from 'react';
import Image from "next/image";
import SubHeading from "@/app/components/subHeading";

interface Data {
    heading: string;
    src: string;
    description: string;
    align?: string;
}

function AboutTemplate(Data: Data) {
    return (
        <div className={`flex ${Data.align} items-center gap-6 justify-center`}>
            <div className="flex flex-col items-start justify-center gap-4">
                <SubHeading title={Data.heading}/>

                <Image
                    src={Data.src}
                    width={300}
                    height={300}
                    alt="About Image"
                    className="rounded-lg object-cover"
                />
            </div>

            <p className="max-w-[400px] leading-relaxed">{Data.description}</p>
        </div>
    );
}

export default AboutTemplate;