import React from 'react';
import Link from "next/link";

function Header() {
    return (
        <div className="flex flex-row items-center justify-center p-4 bg-tf-primary rounded-lg shadow-md space-x-8 text-lg font-medium">
            <Link href="/" className="text-[#66FFFF] hover:text-white transition duration-300">
                Home
            </Link>
            <Link href="/about-us" className="text-[#66FFFF] hover:text-white transition duration-300">
                About Us
            </Link>
            <Link href="/gallery" className="text-[#66FFFF] hover:text-white transition duration-300">
                Gallery
            </Link>
            <Link href="/events" className="text-[#66FFFF] hover:text-white transition duration-300">
                Events
            </Link>
        </div>
    );
}

export default Header;