import React from 'react';
import SubHeading from "@/components/subHeading";
import Link from "next/link";
import FooterComponent from "@/components/footerComponent";

interface PageData {
    href: string;
    title: string;
}

const pageData: PageData[] = [
    { href: "/", title: "Home" },
    { href: "/about-us", title: "About Us" },
    { href: "/gallery", title: "Gallery" },
    { href: "/events", title: "Events" },
];


function Footer() {
    return (
        <div className="w-full flex flex-col justify-center items-center
bg-tf-radial-pattern border border-white/10
rounded-t-2xl shadow-lg text-white">

            <div className="flex justify-between p-10 w-full">
                <div className="w-1/3 pr-6 gap-2">
                    <SubHeading title="TechFuse-2.0"/>
                    <p className="mt-2 text-sm leading-relaxed">
                        TECHFUSE is a flagship technical event organized by the IEEE Student Branch of RIT.
                        Designed to empower students with hands-on skills and industry-oriented knowledge.
                    </p>
                </div>


                <div className="w-1/4 gap-2">
                    <SubHeading title="Pages"/>
                    <ul className="flex flex-row flex-wrap items-center justify-start max-w-[250px] gap-4">
                        {pageData.map((page) => (
                            <li key={page.href}>
                                <Link href={page.href}>
                                    <FooterComponent page={page.title}/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="w-1/4 gap-2">
                    <SubHeading title="Contact Us"/>
                    <ul className="mt-2 text-sm space-y-1">
                        <li>Email: farza@rit.ac</li>
                        <li>Phone: +240704422</li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} TECHFUSE - IEEE Student Branch RIT. All rights reserved.</p>
            </div>
        </div>
    )
        ;
}

export default Footer;
