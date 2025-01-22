import React from 'react';

const PackagesSection = ({ packages, setSelectedPackage, setShowModal }) => {
  return (
    <section className="container mx-auto px-4 py-12 relative z-10">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
        Investment Packages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div 
            key={index}
            className={`relative p-8 rounded-3xl transition-all duration-300 hover:transform hover:scale-105 ${
              pkg.popular 
                ? 'bg-gradient-to-br from-yellow-500 to-orange-500 shadow-2xl shadow-orange-500/30'
                : 'bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70'
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-1 rounded-full text-sm font-bold animate-bounce">
                🔥 MOST POPULAR
              </div>
            )}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
              <div className="text-5xl font-bold mb-4">{pkg.tokens}</div>
              <div className="text-2xl mb-6 font-mono">{pkg.price}</div>
              <div className="text-yellow-300 mb-8 text-lg">{pkg.bonus}</div>
              <button
                onClick={() => {
                  setSelectedPackage(pkg);
                  setShowModal(true);
                }}
                className="w-full py-4 px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackagesSection;