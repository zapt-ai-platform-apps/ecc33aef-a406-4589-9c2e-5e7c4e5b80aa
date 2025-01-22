import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { title: 'Descarga MetaMask', description: 'Instala la wallet en tu dispositivo móvil o extensión de navegador' },
  { title: 'Conecta a Polygon', description: 'Selecciona la red Polygon en tu wallet y añade fondos' },
  { title: 'Compra $RoyalM', description: 'Visita QuickSwap y busca el par USDT/RoyalM para realizar el swap' }
];

const HowToBuy = () => {
  return (
    <section className="container mx-auto px-4 py-16 relative z-10">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        Cómo Comprar
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20"
          >
            <div className="text-3xl mb-4 text-yellow-400">0{index + 1}</div>
            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://quickswap.exchange"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
        >
          Comprar en QuickSwap
        </a>
      </div>
    </section>
  );
};

export default HowToBuy;