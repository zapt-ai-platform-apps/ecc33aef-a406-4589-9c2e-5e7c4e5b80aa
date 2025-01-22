import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: { value: 80 },
          color: { value: "#ffffff" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: "out",
            trail: {
              enable: true,
              length: 10,
              fillColor: "#000000"
            }
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2,
            width: 1
          },
          shape: {
            type: "circle"
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          }
        }
      }}
      className="absolute inset-0 -z-10 opacity-20"
    />
  );
};

export default ParticleBackground;