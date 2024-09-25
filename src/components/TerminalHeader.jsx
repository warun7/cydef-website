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
        <i className="fa-solid fa-terminal text-lg md:text-xl sm:text-2xl"></i>
      </div>
      <div
        onClick={handleZshClick}
        className="text-white flex justify-between items-center cursor-pointer text-lg md:text-xl sm:text-2xl"
      >
        ~:zsh
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleDownClick}
          className="text-white text-lg md:text-xl sm:text-2xl"
        >
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <button
          onClick={handleUpClick}
          className="text-white text-lg md:text-xl sm:text-2xl"
        >
          <i className="fa-solid fa-chevron-up px-2"></i>
        </button>
        <button
          onClick={handleXmarkClick}
          className="text-white text-lg md:text-xl sm:text-2xl"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default TerminalHeader;
