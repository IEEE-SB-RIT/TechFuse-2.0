import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import Button from "@/app/components/button";
import { X } from "lucide-react";

interface Modal {
    src: string;
    description: string;
    name: string;
    free?: boolean;
}

interface EventModalProps {
    data: Modal;
    onClose?: () => void;
}


export default function EventModal({data, onClose}: EventModalProps) {

    const [show, setShow] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setShow(true), 10);
        return () => clearTimeout(t);
    }, []);

    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function detectOutsideClick(e: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose?.();
            }
        }

        function handleEscape(e: KeyboardEvent) {
            if (e.key === "Escape") {
                onClose?.();
            }
        }

        document.addEventListener("mousedown", detectOutsideClick);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", detectOutsideClick);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <div className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex justify-center items-center p-4 transition-opacity duration-300 ease-in-out ${show ? "opacity-100" : "opacity-0"}` } >
            <div  className={`relative flex flex-row gap-5 w-[48rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl p-6 transition-all duration-300 ease-in-out ${show ? "scale-100 opacity-100" : "scale-95 opacity-0"}`} ref={modalRef}>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center
                               rounded-full  hover:bg-white/30 backdrop-blur-lg
                               border border-white/30 shadow-lg transition cursor-pointer"
                    >
                        <X size={20} className="text-white" />
                    </button>
                )}
                <Image
                    src={data.src}
                    alt={data.name}
                    width={400}
                    height={300}
                    className="object-cover rounded-xl"
                />

                <div className="flex flex-col justify-start gap-3 p-5">
                    <h1>{data.name}</h1>
                    <p>{data.description}</p>

                    {data.free ? (
                        <Button text="Register Now" link="$"/>
                    ) : (
                        <Button text="Get Tickets" link="#"/>
                    )}

                </div>
            </div>
        </div>
    );
}
