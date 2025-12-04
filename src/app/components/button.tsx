import Link from "next/link";

interface ButtonProps {
    text: string;
    isRoute?: boolean;
    link?: string;
}

const buttonStyle="px-5 py-2 rounded-xl font-semibold cursor-pointer bg-[#00e0e0] text-[#162A6B] border border-transparent transition-all duration-300 ease-in-out hover:bg-[#162A6B] hover:text-[#00e0e0] hover:border-[#00e0e0] hover:shadow-lg"

export default function Button({text, isRoute, link}: ButtonProps) {
    if (isRoute && link) {
        return (
            <Link href={link} className={buttonStyle}>
                {text}
            </Link>
        );
    }

    return <button className={buttonStyle}> {text} </button>;
}