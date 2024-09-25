const SectionTitle = ({ children, command = "cat" }) => {
  return (
    <h2 className="text-2xl font-bold mb-4 flex items-center">
      <span className="text-green-600 mr-2">$</span>
      <span className="text-yellow-400 mr-2">{command}</span>
      <span className="text-green-400">{children}</span>
      <span className="ml-2 animate-blink">▊</span>
    </h2>
  );
};

export default SectionTitle;
