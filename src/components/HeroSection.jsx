import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const HeroSection = () => {
  return (
    <header className="container mx-auto px-4 py-24 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Royal Master
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          El memecoin definitivo que combina el humor real con las finanzas descentralizadas
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400">
              <CountUp end={10000} duration={3} separator="," />
            </div>
            <span className="text-gray-400">Holders</span>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400">
              $<CountUp end={0.0005} duration={3} decimals={4} />
            </div>
            <span className="text-gray-400">Precio Actual</span>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400">
              <CountUp end={24} duration={3} />h
            </div>
            <span className="text-gray-400">Trending</span>
          </div>
        </div>

        <div className="relative pt-4">
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 animate-progress"
              style={{ width: '75%' }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;