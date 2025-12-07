"use client";

import Heading from "@/app/components/heading";
import EventCard from "@/app/components/eventCard";
import eventData from "@/app/lib/eventData";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/app/components/button";
import EventModal from "@/app/components/eventModal";

function Events() {
  // @ts-ignore
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  // const [clicked,isClicked] =useState(false);
  // const [open,isOpen] =useState(false);

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedEvent]);

  return (
    <div className="min-h-screen px-4 py-10">
      <Heading text="Events" />
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {eventData.map((event) => (
          // @ts-ignore
          <div key={event.id} className="">
            <EventCard data={event} onClick={() => setSelectedEvent(event)} />
          </div>
        ))}
      </div>
      {selectedEvent && (
        <EventModal
          data={{
            src: selectedEvent.src,
            name: selectedEvent.eventName,
            description: selectedEvent.eventDescription,
            free: selectedEvent.form, //if form is true-> not ticket ,free
          }}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}

export default Events;
