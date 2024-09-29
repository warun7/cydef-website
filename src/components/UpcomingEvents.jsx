import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("events.json")
      .then((response) => response.json())
      .then((data) => setEvents(data.upcomingEvents))
      .catch((error) => console.error("Error loading events data:", error));
  }, []);

  return (
    <section
      id="upcoming-events"
      className="bg-black text-green-400 py-8 sm:py-16"
    >
      <SectionTitle command="ls">events/</SectionTitle>
      <div className="container mx-auto px-2 sm:px-4">
        <Link to="/events">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-blue-800">
            Upcoming Events
          </h2>
        </Link>
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-green-950 p-4 sm:p-6 rounded-md">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-blue-600">
                  {event.title}
                </h3>
                <p className="mb-2 sm:mb-4">{event.description}</p>
                <p className="font-bold">Date: {event.date}</p>
                <button className="bg-blue-800 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md font-bold hover:bg-blue-500 transition-colors mt-2 sm:mt-4">
                  <Link to="/events">More Info</Link>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg sm:text-xl font-bold text-green-400">
            We&apos;re working on our next event.
          </p>
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
