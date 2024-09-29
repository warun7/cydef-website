import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function ResourcePage() {
  const [resourcesData, setResourcesData] = useState([]);

  useEffect(() => {
    fetch("resources.json")
      .then((response) => response.json())
      .then((data) => setResourcesData(data))
      .catch((error) => console.error("Error loading resources data:", error));
  }, []);

  const categories = Object.keys(resourcesData);

  return (
    <div className="min-h-screen bg-black text-green-400 py-12 px-4 sm:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-blue-800">
        Resources
      </h1>

      {categories.map((category) => (
        <div key={category} className="mb-12">
          {resourcesData[category].map((resource, index) => (
            <div
              key={index}
              className="bg-green-950 p-4 sm:p-6 rounded-md mb-4"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-600">
                {resource.title}
              </h3>
              <p className="mb-2 sm:mb-4">
                {resource.description || "No description available."}
              </p>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 font-bold hover:text-green-300"
              >
                Visit Site
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

ResourcePage.propTypes = {
  category: PropTypes.string,
};

export default ResourcePage;
