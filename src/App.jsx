import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import PackageModal from './components/PackageModal';
import ParticleBackground from './components/ParticleBackground';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import MemesGallery from './components/MemesGallery';
import PriceChart from './components/PriceChart';
import HowToBuy from './components/HowToBuy';
import { packages, networks } from './data/data';
import Auth from './components/Auth';

const App = () => {
  const [session, setSession] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      <ParticleBackground />
      
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center relative z-50">
        <div className="flex items-center space-x-4">
          <img 
            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=40&height=40" 
            alt="RoyalM Logo" 
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            $RoyalM
          </h1>
        </div>
        <Auth session={session} />
      </nav>

      <HeroSection />
      <MemesGallery />
      <PriceChart />
      <HowToBuy />

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