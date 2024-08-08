// Resources Section
import React from "react";

const Resources = () => {
  return (
    <section className="bg-black text-green-400 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-green-950 p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Cybersecurity Blogs</h3>
            <p className="mb-4">
              Check out our curated list of the best cybersecurity blogs to stay
              up-to-date with the latest trends, techniques, and news in the
              field.
            </p>
            <a
              href="#"
              className="text-green-400 font-bold hover:text-green-300"
            >
              Explore
            </a>
          </div>
          {/* Add more resource cards here */}
        </div>
      </div>
    </section>
  );
};

export default Resources;
