import React from "react";

const Hero = () => {
  return (
    <section className="bg-black text-green-400 py-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to <span className="text-blue-900 bold">CyDef</span></h1>
      <p className="text-lg mb-8 max-w-2xl text-center">
        We're a group of passionate cybersecurity enthusiasts dedicated to
        honing our skills and pushing the boundaries of what's possible in the
        digital world.
      </p>
      <button className="bg-blue-800 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-500 transition-colors">
        Join Our Next CTF Event
      </button>
    </section>
  );
};

export default Hero;
