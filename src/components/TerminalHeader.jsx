function TerminalHeader() {
  return (
    <div className="flex justify-between items-center mb-4 border-b border-green-400 pb-2">
      <div className="text-white flex space-x-2 items-center">
        <i className="fa-solid fa-terminal"></i>
      </div>
      <div className="text-white flex justify-between items-center">~:zsh</div>
      <div>
        <button className="text-white">
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <button className="text-white">
          <i className="fa-solid fa-chevron-up px-2"></i>
        </button>
        <button className="text-white">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}

export default TerminalHeader;
