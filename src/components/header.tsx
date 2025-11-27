import React from 'react';
import Link from "next/link";

function Header() {
    return (
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <Link href="/public">Home</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/events">Events</Link>
        </div>
    );
}

export default Header;