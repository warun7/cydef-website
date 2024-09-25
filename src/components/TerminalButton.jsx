const TerminalButton = ({ children, onClick, command = "./execute" }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-green-400 px-4 py-2 rounded font-bold border border-green-400 hover:bg-green-400 hover:text-black transition-colors duration-300 flex items-center"
    >
      <span className="text-yellow-400 mr-2">$</span>
      <span className="mr-2">{command}</span>
      <span>{children}</span>
    </button>
  );
};

export default TerminalButton;
