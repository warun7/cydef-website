import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PastEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events.json")
      .then((response) => response.json())
      .then((data) => setEvents(data.pastEvents))
      .catch((error) => console.error("Error loading events data:", error));
  }, []);

  return (
    <div className="container mx-auto px-4">
      <section id="past-events" className="bg-black text-green-400 py-16">
        <Link to="/events/past">
          <h2 className="text-3xl font-bold mb-8 text-blue-800">Past Events</h2>
        </Link>
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-green-950 p-6 rounded-md">
                <h3 className="text-xl font-bold mb-4 text-blue-600">
                  {event.title}
                </h3>
                <p className="mb-4">{event.description}</p>
                {event.date && (
                  <p className="mb-4">
                    <strong>Event Date:</strong> {event.date}
                  </p>
                )}
                <div className="my-4">
                  {event.playLink && (
                    <Link
                      to={event.playLink}
                      className="bg-blue-800 text-white px-4 sm:px-6 py-6 sm:py-3 rounded-md font-bold hover:bg-blue-500 transition-colors"
                    >
                      Try CTF
                    </Link>
                  )}
                  {event.link && (
                    <Link
                      to={event.link}
                      className="bg-blue-800 text-white px-4 sm:px-6 py-6 sm:py-3 rounded-md font-bold hover:bg-blue-500 transition-colors"
                    >
                      Read More
                    </Link>
                  )}
                </div>
                <div>
                  {event.leaderboard && (
                    <h4 className="text-xl font-bold mb-4 text-blue-600">
                      Leaderboard:
                    </h4>
                  )}
                  {event.leaderboard &&
                    event.leaderboard.map((name, idx) => (
                      <p key={name}>
                        {idx + 1}. {name}
                      </p>
                    ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg sm:text-xl font-bold text-center text-blue-600">
            No past events yet.
          </p>
        )}
      </section>
    </div>
  );
};

export default PastEvents;
