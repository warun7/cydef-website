function TerminalHeader() {
  return (
    <div className="flex justify-between items-center mb-4 border-b border-green-400 pb-2">
      <div className="flex space-x-2 items-center">
        <i className="fa-solid fa-terminal"></i>
      </div>
      <div className="flex justify-between items-center">~:zsh</div>
      <div>
        <i className="fa-solid fa-chevron-down"></i>
        <i className="fa-solid fa-chevron-up px-2"></i>
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
}

export default TerminalHeader;
