import React from 'react';

const NetworkButton = ({ network, selected, onClick }) => {
  const getNetworkIcon = (name) => {
    switch(name) {
      case 'TRC20': return '/tron-icon.svg';
      case 'BEP20': return '/binance-icon.svg';
      case 'Polygon': return '/polygon-icon.svg';
      default: return '';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${
        selected 
          ? 'bg-gradient-to-br from-yellow-400 to-orange-500 scale-105 shadow-glow'
          : 'bg-gray-800 hover:bg-gray-700'
      }`}
    >
      <img 
        src={getNetworkIcon(network.name)} 
        alt={network.name} 
        className="w-12 h-12 mb-2 object-contain"
      />
      <span className="font-semibold">{network.name}</span>
      <span className="text-sm text-gray-300 mt-1">{network.currency}</span>
    </button>
  );
};

export default NetworkButton;