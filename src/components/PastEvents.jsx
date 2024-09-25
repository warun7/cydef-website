import { useEffect, useState } from "react";

const PastEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("events.json")
      .then(response => response.json())
      .then(data => setEvents(data.pastEvents))
      .catch(error => console.error("Error loading events data:", error));
  }, []);

  return (
    <section id="past-events" className="bg-black text-green-400 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-green-950 p-6 rounded-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">
                {event.title}
              </h3>
              <p className="mb-4">{event.description}</p>
              <a
                href={event.link}
                className="text-green-400 font-bold hover:text-green-300"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
