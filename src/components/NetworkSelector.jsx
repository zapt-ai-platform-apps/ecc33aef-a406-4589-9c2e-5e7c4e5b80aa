import React from 'react';
import NetworkButton from './NetworkButton';

const NetworkSelector = ({ networks, selectedNetwork, onSelectNetwork }) => {
  return (
    <div className="mb-8">
      <label className="block text-lg font-medium mb-4 text-center">Select Network</label>
      <div className="grid grid-cols-3 gap-4">
        {networks.map((network) => (
          <NetworkButton
            key={network.name}
            network={network}
            selected={selectedNetwork === network.name}
            onClick={() => onSelectNetwork(network.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default NetworkSelector;