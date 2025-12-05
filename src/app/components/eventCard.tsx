import Image from "next/image";
import EventData from "@/app/lib/eventData";
import {Calendar, MapPin, Tag} from "lucide-react";


interface EventCardProps {
    // @ts-ignore
    data: EventData,
}

export default function EventCard({data}: EventCardProps) {
    return (

        <div className="flex flex-col bg-gradient-to-br from-white/10 via-white/10 to-white/10 backdrop-blur-xl  rounded-t-xl rounded-b-xl max-w-sm mx-auto shadow-2xl ">
            <div className="relative rounded-t-xl overflow-hidden">

                <div
                    className="absolute top-2 right-2 flex items-center gap-1 bg-white/30 backdrop-blur-md text-[10px] text-white px-2 py-1 rounded-full shadow">
                    <span>{data.eventType}</span>
                </div>

                <Image
                    src={data.src}
                    alt="Event Image"
                    width={300}
                    height={200}
                    className="rounded-t-xl object-cover"
                />
            </div>

            <div>
                <div
                    className=" flex justify-around w-full items-center font-extrabold mb-3 leading-tight tracking-wide">
                    <div className="flex items-center gap-2 text-sm opacity-80">
                        <MapPin size={16}/>
                        <span>{data.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm opacity-80">
                        <Calendar size={16}/>
                        <span>{data.date}</span>
                    </div>
                </div>
                <div>
                    {data.eventName}
                </div>
            </div>
        </div>
    )

}