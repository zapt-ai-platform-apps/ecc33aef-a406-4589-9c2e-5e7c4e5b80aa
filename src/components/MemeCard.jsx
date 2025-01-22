import React from 'react';
import { motion } from 'framer-motion';

const MemeCard = ({ meme, handleVote }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20"
    >
      <img 
        src={meme.image_url} 
        alt={meme.title} 
        className="w-full h-64 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">{meme.title}</h3>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => handleVote(meme.id, true)}
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              ↑
            </button>
            <span className="text-yellow-400">{meme.votes}</span>
            <button 
              onClick={() => handleVote(meme.id, false)}
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              ↓
            </button>
          </div>
        </div>
        <div className="flex justify-between space-x-4">
          <button className="flex-1 py-2 bg-purple-600/50 hover:bg-purple-600 rounded-lg transition-colors">
            Compartir
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MemeCard;