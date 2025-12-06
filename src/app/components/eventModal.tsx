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
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-4">
            <div className="">
                <Image
                    src={data.src}
                    alt={data.name}
                    width={400}
                    height={300}
                    className="object-cover rounded-xl"
                />

                <div>
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
