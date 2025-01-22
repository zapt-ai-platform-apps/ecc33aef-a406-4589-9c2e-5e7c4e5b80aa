import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { roadmap } from '../data/data';

const RoadmapSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 relative z-10">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
        Growth Journey
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent transform -translate-x-1/2" />
        
        {roadmap.map((phase, index) => (
          <Parallax key={index} speed={index % 2 === 0 ? 5 : -5}>
            <div className={`mb-12 w-full ${index % 2 === 0 ? 'pr-24 pl-4' : 'pl-24 pr-4'}`}>
              <div className={`p-8 rounded-3xl bg-gradient-to-br ${phase.status === 'completed' 
                ? 'from-green-500/20 to-green-900/30 border border-green-500/30' 
                : phase.status === 'current' 
                ? 'from-yellow-500/20 to-yellow-900/30 border border-yellow-500/30 animate-pulse' 
                : 'from-gray-800/50 to-gray-900/30 border border-gray-700/30'} backdrop-blur-sm`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    phase.status === 'completed' ? 'bg-green-500' 
                    : phase.status === 'current' ? 'bg-yellow-500' 
                    : 'bg-gray-700'
                  }`}>
                    <span className="text-xl">0{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{phase.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{phase.content}</p>
              </div>
            </div>
          </Parallax>
        ))}
      </div>
    </section>
  );
};

export default RoadmapSection;