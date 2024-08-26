import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-green-400 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-right md:text-left">
        <p className="mb-4 md:mb-0">
          &copy; 2023 CyberSec Club. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-blue-600 hover:text-blue-300">
            Twitter
          </a>
          <a
            href="https://github.com/CyDef-Plaksha"
            className="text-blue-600 hover:text-blue-300"
          >
            GitHub
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-300">
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
