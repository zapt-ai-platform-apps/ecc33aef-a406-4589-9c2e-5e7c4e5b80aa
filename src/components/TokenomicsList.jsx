import React from 'react';
import { motion } from 'framer-motion';

const TokenomicsList = ({ tokenomics }) => (
  <div className="space-y-6">
    {tokenomics.map((item, index) => (
      <motion.div 
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all"
      >
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">{item.label}</span>
          <span className="text-purple-400 font-mono">{item.percentage}%</span>
        </div>
        <div className="mt-2 h-2 bg-gray-700 rounded-full">
          <div 
            className={`h-full rounded-full bg-gradient-to-r ${[
              'from-purple-500 to-blue-500',
              'from-blue-500 to-cyan-500',
              'from-pink-500 to-purple-500',
              'from-yellow-500 to-orange-500'
            ][index % 4]}`}
            style={{ width: `${item.percentage}%` }}
          />
        </div>
      </motion.div>
    ))}
  </div>
);

export default TokenomicsList;