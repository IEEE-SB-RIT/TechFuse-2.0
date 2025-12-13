"use client";

import EventCard from "@/app/components/eventCard";
import eventData from "@/app/lib/eventData";
import { useEffect, useState } from "react";
import EventModal from "@/app/components/eventModal";
import useLoadingAnimation from "@/hooks/loadingAnimation";
import GridBackground from "@/app/components/gridBackground";
import SubHeading from "@/app/components/subHeading";

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
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <GridBackground />
      {eventData.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <SubHeading title={"Events Coming Soon"} />
          <p className="mt-3 text-gray-500 max-w-md">
            Our featured events will be live soon. Stay tuned!
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-10 md:gap-12 max-w-7xl mx-auto">
            {eventData.map((event, index) => (
              <div key={event.id} {...animate(index)}>
                <EventCard
                  data={event}
                  onClick={() => setSelectedEvent(event)}
                />
              </div>
            ))}
          </div>
        </>
      )}
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
