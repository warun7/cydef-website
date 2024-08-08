// Upcoming Events Section
import React from "react";

const UpcomingEvents = () => {
  return (
    <section className="bg-black text-green-400 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-green-950 p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4 text-blue-600">
              CTF: Hacking Fundamentals
            </h3>
            <p className="mb-4">
              Join us for a hands-on Capture the Flag event focused on building
              a strong foundation in hacking techniques and cybersecurity
              principles.
            </p>
            <p className="font-bold">Date: September 15, 2023</p>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-500 transition-colors mt-4">
              Register Now
            </button>
          </div>
          {/* Add more upcoming event cards here */}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
