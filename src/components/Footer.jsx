import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/30 py-8 mt-24 relative z-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#/" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms</a>
          <a href="#/" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy</a>
          <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 flex items-center">
            <span className="mr-2">🚀 Powered by</span>
            <span className="font-bold">ZAPT</span>
          </a>
        </div>
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} MEMECOIN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;