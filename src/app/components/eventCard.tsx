import Image from "next/image";
import { Calendar, MapPin, Tag } from "lucide-react";

interface EventCardProps {
  // @ts-ignore
  data: EventData;
  onClick?: () => void;
}

export default function EventCard({ data, onClick }: EventCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col bg-linear-to-br cursor-pointer from-white/10 via-white/10 to-white/10 backdrop-blur-xl  rounded-t-xl rounded-b-xl max-w-sm mx-auto shadow-2xl "
    >
      <div className="relative rounded-t-xl overflow-hidden ">
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/30 backdrop-blur-md text-[10px] text-white px-2 py-1 rounded-full shadow">
          <span>{data.type}</span>
        </div>

        <Image
          src={data.src}
          alt="Event Image"
          width={300}
          height={200}
          className="rounded-t-xl object-cover h-[300px] "
        />
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-lg font-bold text-white tracking-wide border-b border-white/10 pb-2">
          <Tag size={20} className="text-tf-accent min-w-[20px]" />
          <span className="truncate">{data.eventName}</span>
        </div>

        <div className="flex justify-between items-start md:flex-row flex-col w-full text-xs gap-2 font-medium leading-tight opacity-75">
          <div className="flex items-center gap-1.5 text-yellow-300">
            <MapPin size={14} />
            <span className="truncate">{data.location}</span>
          </div>

          <div className="flex items-center gap-1.5 text-green-300">
            <Calendar size={14} />
            <span className="whitespace-nowrap">{data.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
