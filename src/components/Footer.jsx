// Footer
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-green-400 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p>&copy; 2023 CyberSec Club. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-blue-600 hover:text-blue-300">
            Twitter
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-300">
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
