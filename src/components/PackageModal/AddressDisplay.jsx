import React from 'react';
import QRCode from 'react-qr-code';

const AddressDisplay = ({ loading, walletAddress, pkg, selectedNetwork, copied, copyToClipboard }) => {
  return (
    <div className="bg-gray-900/50 p-6 rounded-xl border border-yellow-500/20">
      {loading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto"></div>
          <div className="h-32 bg-gray-700 rounded"></div>
        </div>
      ) : (
        <>
          <div className="text-center mb-6">
            <p className="text-lg font-semibold text-yellow-400 mb-2">
              Send {pkg?.price} {selectedNetwork}
            </p>
            <div className="inline-block bg-white p-4 rounded-lg mb-4">
              <QRCode 
                value={walletAddress} 
                size={128}
                className="mx-auto"
              />
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg relative">
            <div className="flex items-center justify-between">
              <span className="truncate font-mono text-sm">{walletAddress}</span>
              <button
                onClick={copyToClipboard}
                className="ml-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg transition-colors flex items-center"
              >
                {copied ? (
                  <>
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                    Copied
                  </>
                ) : 'Copy Address'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AddressDisplay;