import React from "react";
import SectionTitle from "./SectionTitle";

const UpcomingEvents = () => {
  return (
    <section
      id="upcoming-events"
      className="bg-black text-green-400 py-8 sm:py-16"
    >
      <SectionTitle command="ls">events/</SectionTitle>
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-blue-800">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          <div className="bg-green-950 p-4 sm:p-6 rounded-md">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-blue-600">
              CTF: Hacking Fundamentals
            </h3>
            <p className="mb-2 sm:mb-4">
              Join us for a hands-on Capture the Flag event focused on building
              a strong foundation in hacking techniques and cybersecurity
              principles.
            </p>
            <p className="font-bold">Date: September 15, 2024</p>
            <button className="bg-blue-800 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md font-bold hover:bg-blue-500 transition-colors mt-2 sm:mt-4">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
