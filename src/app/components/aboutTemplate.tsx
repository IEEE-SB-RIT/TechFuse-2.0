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
        <div className={`flex ${Data.align || 'flex-row'} items-center gap-8 lg:gap-12 justify-center py-12 px-4 md:px-6`}>
            <div className="flex flex-col items-start justify-center gap-6 group">
                <SubHeading title={Data.heading}/>

                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                    <Image
                        src={Data.src}
                        width={400}
                        height={400}
                        alt={Data.heading}
                        className="rounded-2xl object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            </div>

            <div className={`max-w-[500px] ${Data.align ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    {Data.description}
                </p>
            </div>
        </div>
    );
}

export default AboutTemplate;