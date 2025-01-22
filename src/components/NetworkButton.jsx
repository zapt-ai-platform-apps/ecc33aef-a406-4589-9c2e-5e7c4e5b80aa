import React from 'react';
import { motion } from 'framer-motion';

const NetworkButton = ({ network, selected, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`p-6 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 ${
        selected 
          ? 'bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg shadow-yellow-500/30'
          : 'bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/70 border border-gray-700/30'
      }`}
    >
      <div className={`w-16 h-16 mb-4 flex items-center justify-center rounded-xl ${
        selected ? 'bg-black/20' : 'bg-gray-700/30'
      }`}>
        <span className="text-3xl">
          {network.name === 'TRC20' ? '🌐' : 
           network.name === 'BEP20' ? '⚡' : 
           '🔷'}
        </span>
      </div>
      <span className="font-semibold text-lg">{network.name}</span>
      <span className="text-sm text-gray-300 mt-1">{network.currency}</span>
    </motion.button>
  );
};

export default NetworkButton;