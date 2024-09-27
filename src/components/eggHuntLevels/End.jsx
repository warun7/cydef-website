import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function End({ hello, duration }) {
  const [name, setName] = useState("");
  const [redirect, setRedirect] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (name === "") {
      alert("Please enter your full name.");
      return;
    }

    const fm = document.createElement("form");
    fm.method = "POST";
    fm.action = "/vals";

    const inp = document.createElement("input");
    inp.type = "hidden";
    inp.name = "name";
    inp.value = name;

    const inp2 = document.createElement("input");
    inp2.type = "hidden";
    inp2.name = "hello";
    inp2.value = hello;

    const imp3 = document.createElement("input");
    imp3.type = "hidden";
    imp3.name = "duration";
    imp3.value = duration;

    fm.appendChild(inp);
    fm.appendChild(inp2);
    fm.appendChild(imp3);

    document.body.appendChild(fm);

    fm.submit();

    document.body.removeChild(fm);

    console.log(duration);

    setRedirect(true);
  }

  if (redirect) {
    return <Navigate replace={true} to="/leaderboard" />;
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
