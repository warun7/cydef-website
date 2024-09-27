import React, { useState } from "react";
import { sha256 } from "js-sha256";

const levelTwoHash =
  "817a625f4f1882c19a81a4ba91447039a3e67bd77dd4d17a3eb61dd91db4ee33";

function Level2({ handleClick }) {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    const inputHash = sha256(inputValue.toUpperCase());

    if (inputHash === levelTwoHash) {
      handleClick(3, true); // Move to level 3
    } else {
      setErrorMessage("Incorrect code. Please try again.");
    }
  };

  return (
    <div className="space-x-4 space-y-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 text-center">
        Egg Hunt Event
        <p className="text-blue-600 py-2">Level 2</p>
      </h1>
      <div>
        <p className="text-center py-4 px-5">
          I can be dashed but not broken. My secret lies in the simplest code of
          two, where 1 walks long and 0 steps short. Then what is the value of:
          <p className="text-blue-600">1010 1011 100001 100 0 0010</p>
        </p>
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

export default Level2;
