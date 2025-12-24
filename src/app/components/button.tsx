import Link from "next/link";

interface ButtonProps {
    text: string;
    isExternalLink?: boolean;
    link?: string;
}

const buttonStyle =
    "inline-flex  items-center justify-center px-5 py-2 rounded-xl font-semibold " +
    "cursor-pointer bg-[#00e0e0] text-[#162A6B] border border-transparent " +
    "transition-all duration-300 ease-in-out whitespace-nowrap " +
    "hover:bg-[#FAFAFA] hover:text-[#00e0e0] hover:border-[#00e0e0] hover:shadow-lg";
export default function Button({text, isExternalLink, link}: ButtonProps) {
    if (isExternalLink && link) {
        return (
            <Link href={link} className={buttonStyle} target={"_blank"} rel="noopener noreferrer">
                {text}
            </Link>
        );
    }

    return <button className={buttonStyle}> {text} </button>;
}