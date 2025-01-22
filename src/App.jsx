import React, { useState } from 'react';
import PackageModal from './components/PackageModal';
import ParticleBackground from './components/ParticleBackground';
import PackagesSection from './components/PackagesSection';
import Footer from './components/Footer';
import { packages, networks } from './data/data';

const App = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <ParticleBackground />
      
      <header className="container mx-auto px-4 py-16 text-center relative z-10">
        <h1 className="text-6xl font-bold mb-6 animate-fade-in-down bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          MEMECOIN REVOLUTION
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join the most explosive cryptocurrency launch of the decade. Secure your tokens now and ride the meme wave to financial freedom!
        </p>
      </header>

      <PackagesSection 
        packages={packages}
        setSelectedPackage={setSelectedPackage}
        setShowModal={setShowModal}
      />

      <PackageModal
        show={showModal}
        onClose={() => setShowModal(false)}
        package={selectedPackage}
        networks={networks}
        selectedNetwork={selectedNetwork}
        setSelectedNetwork={setSelectedNetwork}
      />

      <Footer />
    </div>
  );
};

export default App;