import React from 'react';
import { motion } from 'framer-motion';
import { tokenomics } from '../data/data';
import PieChart from './PieChart';
import TokenomicsList from './TokenomicsList';

const TokenomicsSection = () => {
  const total = tokenomics.reduce((sum, item) => sum + item.percentage, 0);

  return (
    <section className="container mx-auto px-4 py-16 relative z-10">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
        Token Economy
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <PieChart tokenomics={tokenomics} total={total} />
        <TokenomicsList tokenomics={tokenomics} />
      </div>
    </section>
  );
};

export default TokenomicsSection;