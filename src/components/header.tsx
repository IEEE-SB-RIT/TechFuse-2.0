import React from 'react';
import Link from "next/link";

function Header() {
    return (
        <div className="flex flex-row items-center justify-center p-4 bg-yellow-300 rounded-lg shadow-md space-x-8 text-lg font-medium">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition duration-300">
                Home
            </Link>
            <Link href="/about-us" className="text-gray-700 hover:text-blue-600 transition duration-300">
                About Us
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-blue-600 transition duration-300">
                Gallery
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-blue-600 transition duration-300">
                Events
            </Link>
        </div>
    );
}

export default Header;