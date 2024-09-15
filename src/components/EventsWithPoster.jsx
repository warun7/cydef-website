import React, { useEffect, useState } from "react";

const EventsWithPoster = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("events.json")
      .then((response) => response.json())
      .then((data) => setEvents(data.upcomingEvents))
      .catch((error) => console.error("Error loading events data:", error));
  }, []);

  return (
    <section className="bg-black text-green-400 py-8 sm:py-16">
      <div className="container mx-auto px-4">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8"
            >
              {/* Text Section (Left on large screens, below poster on mobile) */}
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-800">
                  {event.title}
                </h2>
                <p className="text-lg sm:text-xl">{event.description}</p>
                <p className="font-bold text-green-300">Date: {event.date}</p>
                <a
                  href={event.registrationLink}
                  className="inline-block bg-blue-800 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-500 transition-colors"
                >
                  Register Now
                </a>
              </div>

              {/* Poster Section (Right on large screens, above text on mobile) */}
              <div className="w-full h-full">
                <img
                  src={event.poster}
                  alt={event.title}
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-lg sm:text-xl font-bold text-center text-blue-600">
            We&apos;re working on our next event.
          </p>
        )}
      </div>
    </section>
  );
};

export default EventsWithPoster;
