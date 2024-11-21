import Introduction from "@/app/events/sections/Introduction";
import EventCard from "@/components/card/EventCard";

const Events = () => {
    return (
        <>
            <Introduction imageURL="events/events-bg.png">
                <h2 className="text-5xl 2xl:text-6xl font-title font-bold my-8 text-white/85">Upcoming Events</h2>
            </Introduction>
            <div className="xy-pad bg-footer_bg flex justify-center">
                <div className="flex flex-col gap-6 w-full max-w-[1200px] text-white/85">
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </div>
        </>
    );
}

export default Events;

// left - max-width = 3/4, right max-width= 370px height= auto