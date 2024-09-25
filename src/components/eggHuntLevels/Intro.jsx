import React from "react";

function Intro({ handleClick }) {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 text-center">
        Egg Hunt Event
      </h1>
      <div className="text-center py-4">
        <div>
          <p>
            Welcome to the Egg Hunt event! There are 3 levels in this event.
          </p>
          <p>
            You need to find the hidden eggs in each level to proceed to the
            next level.
          </p>
          <p>Good luck!</p>
        </div>
        <div className="space-x-4 space-y-4 py-4">
          <button
            onClick={() => handleClick(1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Start Egg Hunt
          </button>
        </div>
      </div>
    </>
  );
}

export default Intro;
