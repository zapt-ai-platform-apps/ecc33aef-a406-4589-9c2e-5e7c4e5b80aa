import React, { useState } from 'react';
import PackageModal from './components/PackageModal';
import { packages, networks, tokenomics, roadmap } from './data/data';

const App = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in-down">
          Welcome to <span className="text-yellow-400">MEMECOIN</span> Revolution
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          The most meme-tastic cryptocurrency of 2024 - Join the madness!
        </p>
      </header>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Package</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl transition-transform duration-300 hover:scale-105 ${
                pkg.popular 
                  ? 'bg-gradient-to-br from-yellow-500 to-orange-500 transform -translate-y-4' 
                  : 'bg-gray-800/50'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
              <div className="text-4xl font-bold mb-4">{pkg.tokens}</div>
              <div className="text-2xl mb-6">{pkg.price}</div>
              <div className="text-yellow-400 mb-8">{pkg.bonus}</div>
              <button
                onClick={() => {
                  setSelectedPackage(pkg);
                  setShowModal(true);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Tokenomics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {tokenomics.map((item, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl">
              <div className="text-2xl font-bold text-yellow-400 mb-2">{item.percentage}%</div>
              <div className="text-gray-300">{item.label}</div>
              <div className="mt-4 h-2 bg-gray-700 rounded-full">
                <div 
                  className="h-full bg-yellow-500 rounded-full transition-all duration-1000"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Roadmap</h2>
        <div className="relative">
          <div className="absolute left-1/2 w-1 bg-gray-700 h-full transform -translate-x-1/2"></div>
          {roadmap.map((phase, index) => (
            <div 
              key={index}
              className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
            >
              <div className="w-1/2 p-4">
                <div className={`p-6 rounded-xl ${
                  phase.status === 'completed' ? 'bg-green-500/20' :
                  phase.status === 'current' ? 'bg-blue-500/20' : 'bg-gray-800/50'
                }`}>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-gray-300">{phase.content}</p>
                </div>
              </div>
              <div className="w-1/2 flex justify-center">
                <div className={`w-8 h-8 rounded-full ${
                  phase.status === 'completed' ? 'bg-green-500' :
                  phase.status === 'current' ? 'bg-blue-500 animate-pulse' : 'bg-gray-500'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PackageModal
        show={showModal}
        onClose={() => setShowModal(false)}
        package={selectedPackage}
        networks={networks}
        selectedNetwork={selectedNetwork}
        setSelectedNetwork={setSelectedNetwork}
      />

      <footer className="bg-black/30 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="mb-4">
            © 2024 MEMECOIN. All rights reserved. 
            <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-yellow-400 ml-2">
              Made on ZAPT
            </a>
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#/" className="hover:text-yellow-400">Terms of Service</a>
            <a href="#/" className="hover:text-yellow-400">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;