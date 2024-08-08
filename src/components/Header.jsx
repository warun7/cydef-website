import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-green-400 px-4 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">CyDef</div>
      <nav>
        <ul className="flex gap-4">
          <li className="cursor-pointer hover:text-green-300">Home</li>
          <li className="cursor-pointer hover:text-green-300">About</li>
          <li className="cursor-pointer hover:text-green-300">Events</li>
          <li className="cursor-pointer hover:text-green-300">Resources</li>
          <li className="cursor-pointer hover:text-green-300">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
