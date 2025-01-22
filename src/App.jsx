import React, { useState } from 'react';
import PackageModal from './components/PackageModal';
import ParticleBackground from './components/ParticleBackground';
import PackagesSection from './components/PackagesSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import TokenomicsSection from './components/TokenomicsSection';
import RoadmapSection from './components/RoadmapSection';
import { packages, networks } from './data/data';

const App = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <ParticleBackground />
      
      <HeroSection />

      <PackagesSection 
        packages={packages}
        setSelectedPackage={setSelectedPackage}
        setShowModal={setShowModal}
      />

      <TokenomicsSection />
      <RoadmapSection />

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