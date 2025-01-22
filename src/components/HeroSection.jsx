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
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
          MEME REVOLUTION
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join the viral movement reshaping decentralized finance. Secure your tokens now and ride the meme wave to the moon!
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
            <div className="text-4xl font-bold text-pink-400">
              $<CountUp end={50} duration={3} />M
            </div>
            <span className="text-gray-400">Liquidity</span>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400">
              <CountUp end={24} duration={3} />h
            </div>
            <span className="text-gray-400">Launch</span>
          </div>
        </div>

        <div className="relative pt-4">
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-500 to-pink-500 animate-progress"
              style={{ width: '75%' }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>75% Sold</span>
            <span>1,000,000 MEME</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;