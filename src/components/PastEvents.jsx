import React from "react";

const PastEvents = () => {
  return (
    <section id="past-events" className="bg-black text-green-400 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-green-950 p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4 text-blue-600">
              CTF: Cryptography Challenge
            </h3>
            <p className="mb-4">
              Our recent CTF event focused on challenging participants to solve
              complex cryptography puzzles and demonstrate their skills in this
              crucial cybersecurity domain.
            </p>
            <a
              href="#"
              className="text-green-400 font-bold hover:text-green-300"
            >
              Read More
            </a>
          </div>
          {/* Add New Past Events */}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
