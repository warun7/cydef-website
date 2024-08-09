function TerminalHeader() {
  return (
    <div className="flex justify-between items-center mb-4 border-b border-green-400 pb-2">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div>cydef@localhost:~</div>
    </div>
  );
}



export default TerminalHeader;
