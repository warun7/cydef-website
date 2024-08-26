import React from "react";
import { useNavigate } from "react-router-dom";

const TerminalHeader = () => {
  const navigate = useNavigate();

  const handleUpClick = () => {
    navigate("/up");
  };

  const handleDownClick = () => {
    navigate("/down");
  };

  const handleXmarkClick = () => {
    alert("Nice try! You can't close this terminal sucker");
  };

  const handleZshClick = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center mb-4 border-b border-green-400 pb-2">
      <div className="text-white flex space-x-2 items-center">
        <i className="fa-solid fa-terminal"></i>
      </div>
      <div
        onClick={handleZshClick}
        className="text-white flex justify-between items-center cursor-pointer"
      >
        ~:zsh
      </div>
      <div>
        <button onClick={handleDownClick} className="text-white">
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <button onClick={handleUpClick} className="text-white">
          <i className="fa-solid fa-chevron-up px-2"></i>
        </button>
        <button onClick={handleXmarkClick} className="text-white">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default TerminalHeader;
