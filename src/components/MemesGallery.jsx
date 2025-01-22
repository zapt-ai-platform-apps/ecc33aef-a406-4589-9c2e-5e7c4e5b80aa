import React from 'react';
import { motion } from 'framer-motion';
import useMemes from '../hooks/useMemes';
import MemeCard from './MemeCard';

const MemesGallery = () => {
  const { memes, loading, handleVote } = useMemes();

  return (
    <section className="container mx-auto px-4 py-16 relative z-10">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
        Galería de Memes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {loading ? (
          Array(6).fill(0).map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-800/50 h-64 rounded-2xl" />
          ))
        ) : memes.map((meme) => (
          <MemeCard 
            key={meme.id}
            meme={meme}
            handleVote={handleVote}
          />
        ))}
      </div>
    </section>
  );
};

export default MemesGallery;