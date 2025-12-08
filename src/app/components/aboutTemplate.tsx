import React from 'react';
import Image from "next/image";

interface Data{
    heading:string;
    src:string;
    description:string;
    align?:string;
}

function AboutTemplate(Data:Data) {
    return (
        <div className={`flex ${Data.align} items-center gap-6 justify-center`}>
            {Data.heading}
            <Image
            src={Data.src}
            width={300}
            height={300}
            alt="About Image"
            className="rounded-lg object-cover "
            />
            <p>
                {Data.description}
            </p>
        </div>
    );
}

export default AboutTemplate;