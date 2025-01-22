import React, { useState, useEffect } from 'react';
import { networkAddresses } from '../constants/networkAddresses';
import useClipboard from '../hooks/useClipboard';

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
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">Purchase {pkg?.title}</h2>
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Select Network</label>
          <div className="grid grid-cols-3 gap-3">
            {networks.map((network) => (
              <button
                key={network.name}
                onClick={() => {
                  setSelectedNetwork(network.name);
                  setWalletAddress(networkAddresses[network.name]);
                }}
                className={`p-3 rounded-lg transition-colors ${
                  selectedNetwork === network.name
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                {network.name}
              </button>
            ))}
          </div>
        </div>

        {selectedNetwork && (
          <div className="bg-gray-900/50 p-4 rounded-xl">
            {loading ? (
              <div className="animate-pulse">
                <div className="h-4 bg-gray-700 rounded mb-2 w-1/2"></div>
                <div className="h-8 bg-gray-700 rounded"></div>
              </div>
            ) : (
              <>
                <p className="text-sm text-gray-400 mb-2">Send {pkg?.price} to:</p>
                <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                  <span className="truncate">{walletAddress}</span>
                  <button
                    onClick={copyToClipboard}
                    className="ml-2 text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    {copied ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        <p className="text-sm text-gray-400 mt-6">
          After payment, send transaction hash to our support email for verification.
        </p>
      </div>
    </div>
  );
};

export default PackageModal;