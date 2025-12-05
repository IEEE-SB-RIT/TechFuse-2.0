import Heading from "@/app/components/heading";
import EventCard from "@/app/components/eventCard";
import eventData from "@/app/lib/eventData";

function events() {
  return (
    <div className="p-4">
      <Heading text="Events" />
      <div className="flex flex-row flex-wrap justify-center gap-5 items-center">
        {eventData.map((event) => (
          // @ts-ignore
          <EventCard key={event.eventId} data={event} />
        ))}
      </div>
    </div>
  );
}

export default events;
