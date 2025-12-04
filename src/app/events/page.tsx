import React from 'react';
import Heading from "@/components/heading";
import EventCard from "@/components/eventCard";
import eventData from "@/data/eventData";

function events() {
    return (
        <div className="p-4">
            <Heading text="Events"/>

            {eventData.map((event) => (
                // @ts-ignore
                <EventCard key={event.eventId} data={event} />
            ))}
        </div>
    );
}

export default events;