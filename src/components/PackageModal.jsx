import React, { useState, useEffect } from 'react';
import { networkAddresses } from '../constants/networkAddresses';
import useClipboard from '../hooks/useClipboard';
import PurchaseSteps from './PurchaseSteps';
import NetworkSelector from './NetworkSelector';
import AddressDisplay from './PackageModal/AddressDisplay';

const PackageModal = ({ show, onClose, package: pkg, networks, selectedNetwork, setSelectedNetwork }) => {
  const [loading, setLoading] = useState(true);
  const [walletAddress, setWalletAddress] = useState('');
  const { copied, copyToClipboard } = useClipboard(walletAddress);

  useEffect(() => {
    if (show) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 max-w-2xl w-full relative border-2 border-yellow-500/20">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-yellow-400 transition-colors text-2xl"
        >
          ✕
        </button>

        <PurchaseSteps currentStep={selectedNetwork ? 2 : 1} />

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            {pkg?.title}
          </h2>
          <p className="text-xl text-gray-300 mt-2">{pkg?.tokens} Tokens</p>
        </div>

        <NetworkSelector
          networks={networks}
          selectedNetwork={selectedNetwork}
          onSelectNetwork={(network) => {
            setSelectedNetwork(network);
            setWalletAddress(networkAddresses[network]);
          }}
        />

        {selectedNetwork && (
          <AddressDisplay
            loading={loading}
            walletAddress={walletAddress}
            pkg={pkg}
            selectedNetwork={selectedNetwork}
            copied={copied}
            copyToClipboard={copyToClipboard}
          />
        )}

        <p className="text-center text-gray-400 mt-8 text-sm">
          After payment verification, tokens will be automatically deposited to your wallet within 15 minutes.
        </p>
      </div>
    </div>
  );
};

export default PackageModal;