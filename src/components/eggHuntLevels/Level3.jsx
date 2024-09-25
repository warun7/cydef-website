import React, { useState } from "react";
import { sha256 } from "js-sha256";

const levelThreeHash =
  "306fa5dbb2a1b1ea9754154b420298ac9fd8cd2a0ed5f44f302c9ea53f8d0b07";

function Level3({ handleClick }) {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    const inputHash = sha256(inputValue);

    if (inputHash === levelThreeHash) {
      alert("Congratulations! You've completed the Egg Hunt!");
      handleClick(0); // Move back to intro
    } else {
      setErrorMessage("Incorrect code. Please try again.");
    }
  };

  return (
    <div className="space-x-4 space-y-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 text-center">
        Egg Hunt Event
        <p className="text-blue-600 py-2">Level 3</p>
      </h1>
      <p>
        Examine the file closely. Use colors and formatting to help highlight
        the code and spot any hidden details.
      </p>
      <div className="py-4">
        <a
          href="/eggHuntFiles/level3.txt"
          download="level3.txt"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download .txt File
        </a>
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border rounded py-2 px-4 ml-2"
          placeholder="Enter code here"
        />
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Submit
        </button>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}

export default Level3;
