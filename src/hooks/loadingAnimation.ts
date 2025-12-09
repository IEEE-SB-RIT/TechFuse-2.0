"use client"

import {useState, useEffect} from "react";


export default function useLoadingAnimation()
{
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        // Trigger animation after mount
        const timeout = setTimeout(() => setIsLoaded(true), 50);
        return () => clearTimeout(timeout);
    }, []); //only render in the first loading

    const animate = (index?: number) => ({
        className: `transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`,
        style:
            index !== undefined
                ? { transitionDelay: `${index * 120}ms` }
                : undefined,
    });

    return animate;
}