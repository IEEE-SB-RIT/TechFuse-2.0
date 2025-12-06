import React from "react";
import Image from "next/image";
import Button from "@/app/components/button";

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
    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex justify-center items-center p-4">
            <div className="flex flex-row bg-red-500 gap-5 ">
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

                    {onClose && (
                        <button onClick={onClose} className="mt-4 p-2 bg-gray-200 rounded">
                            Close
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
