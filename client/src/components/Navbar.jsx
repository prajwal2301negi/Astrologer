import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-[#212121] p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-semibold">Astrology App</div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          {/* <Link to="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
