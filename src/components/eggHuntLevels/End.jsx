import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function End() {
  const [name, setName] = useState("");
  const [redirect, setRedirect] = useState(false);

  function handleSubmit() {
    if (name === "") {
      alert("Please enter your full name.");
      return;
    }

    alert(
      "Thank you for participating. Your position on the leaderboard will be displayed shortly."
    );

    // Make API call here

    // Set redirect state to true
    setRedirect(true);
  }

  // Redirect when redirect state is true
  if (redirect) {
    return <Navigate replace={true} to="/" />;
  }

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 text-center">
          Congratulations! You have completed the egg hunt!
        </h1>
        <p className="text-lg sm:text-xl text-green-400 text-center">
          You have found all the 3 eggs and completed the challenge!
        </p>
      </div>
      <div className="mt-4 text-center">
        <label
          htmlFor="name"
          className="block text-lg sm:text-xl text-gray-700"
        >
          Enter your full name to see your position on the leaderboard:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-2 p-2 border border-gray-300 rounded-md"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default End;
