import Image from "next/image";
import EventData from "@/data/eventData";


interface EventCardProps {
    // @ts-ignore
    data: EventData,
}

export default function EventCard({data}: EventCardProps) {
    return (

        <div>
            <Image
                src={data.src}
                alt="Event Image"
                width={300}
                height={200}
                className="rounded-lg object-cover"
            />
        </div>
    )

}