import React from "react";
import { useState, useEffect } from "react";
import { sha256 } from "js-sha256";

const levelOneHash =
  "99067765597bffcb439fb27e2c9ae198cf82140322c157a6c9efaacef0149875";

function Level1({ handleClick }) {
  useEffect(() => {
    const interval = setInterval(() => {
      // console.clear();
      console.log("Egg Hunt Code: youjustneededtolookaround");
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    const inputHash = sha256(inputValue);

    if (inputHash === levelOneHash) {
      handleClick(2, true); // Move to level 2
    } else {
      setErrorMessage("Incorrect code. Please try again.");
    }
  };

  return (
    <div className="space-x-4 space-y-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 text-center">
        Egg Hunt Event
        <p className="text-blue-600 py-2">Level 1</p>
      </h1>
      <p>
        Search for the code by exploring your surroundings, then enter it in the
        input field below to advance to the next level.
      </p>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border rounded py-2 px-4"
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

export default Level1;
