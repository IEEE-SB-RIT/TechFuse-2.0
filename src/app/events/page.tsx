"use client"

import Heading from "@/app/components/heading";
import EventCard from "@/app/components/eventCard";
import eventData from "@/app/lib/eventData";
import {useState} from "react";
import Image from "next/image";
import Button from "@/app/components/button";
import EventModal from "@/app/components/eventModal";

function Events() {
    // @ts-ignore
    const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
    // const [clicked,isClicked] =useState(false);
    // const [open,isOpen] =useState(false);


    return (
    <div className="p-4">
      <Heading text="Events" />
      <div className="flex flex-row flex-wrap justify-center gap-5 items-center">
        {eventData.map((event) => (
          // @ts-ignore
          <EventCard key={event.eventId} data={event} onClick={() => setSelectedEvent(event)} />
        ))}
      </div>
        {selectedEvent && (
            <EventModal data={{
                src: selectedEvent.src,
                name: selectedEvent.eventName,
                description: selectedEvent.description,
                free: selectedEvent.free,
            }} onClose={() => setSelectedEvent(null)} />
        )}
    </div>
    );
}

export default Events;
