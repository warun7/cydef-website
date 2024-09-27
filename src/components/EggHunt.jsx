import React from "react";
import Intro from "./eggHuntLevels/Intro";
import Level1 from "./eggHuntLevels/Level1";
import Level2 from "./eggHuntLevels/Level2";
import Level3 from "./eggHuntLevels/Level3";
import End from "./eggHuntLevels/End";
import { useState } from "react";

function EggHuntPage() {
  const [level, setLevel] = useState(0);

  function handleClick(lvl) {
    setLevel(lvl);
  }

  return (
    <>
      <div className="text-center py-4">
        {level === 0 && <Intro handleClick={handleClick} />}
        {level === 1 && <Level1 handleClick={handleClick} />}
        {level === 2 && <Level2 handleClick={handleClick} />}
        {level === 3 && <Level3 handleClick={handleClick} />}
        {level === 4 && <End />}
      </div>
    </>
  );
}

export default EggHuntPage;
