import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#212121] p-4 mt-8">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <p>&copy; 2024 Astrology App. All rights reserved.</p>
        <div className="space-x-4 mt-2">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
