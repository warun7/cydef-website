import React from "react";
import Intro from "./eggHuntLevels/Intro";
import Level1 from "./eggHuntLevels/Level1";
import Level2 from "./eggHuntLevels/Level2";
import Level3 from "./eggHuntLevels/Level3";
import End from "./eggHuntLevels/End";
import { useState } from "react";

function EggHuntPage() {
  const [level, setLevel] = useState(0);
  const [hello, setHello] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  function handleClick(lvl, hello1) {
    setLevel(lvl);
    setHello(hello1);
  }

  return (
    <>
      <div className="text-center py-4">
        {level === 0 && (
          <Intro handleClick={handleClick} setStartTime={setStartTime} />
        )}
        {level === 1 && <Level1 handleClick={handleClick} />}
        {level === 2 && <Level2 handleClick={handleClick} />}
        {level === 3 && (
          <Level3 handleClick={handleClick} setEndTime={setEndTime} />
        )}
        {level === 4 && (
          <End hello={hello} duration={(endTime - startTime) / 1000} />
        )}
      </div>
    </>
  );
}

export default EggHuntPage;
