"use client";

import Heading from "@/app/components/heading";
import EventCard from "@/app/components/eventCard";
import eventData from "@/app/lib/eventData";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/app/components/button";
import EventModal from "@/app/components/eventModal";
import loadingAnimation from "@/hooks/loadingAnimation";
import useLoadingAnimation from "@/hooks/loadingAnimation";
import SectionHeading from "../components/SectionHeading";

function Events() {
  // @ts-ignore
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  // const [clicked,isClicked] =useState(false);
  // const [open,isOpen] =useState(false);

  const animate = useLoadingAnimation();

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
    <div className="min-h-screen pt-32 pb-20 px-6 gap-5">
      <div className={`mb-10`} {...loadingAnimation()}>
        <SectionHeading text1="Featured" text2="Events" />
      </div>

      <div className="flex flex-wrap justify-center gap-10 md:gap-12 max-w-7xl mx-auto">
        {eventData.map((event, index) => (
          <div key={event.id} {...animate(index)}>
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
            speakers: selectedEvent.speakers,
            // price:selectedEvent.price
          }}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}

export default Events;
