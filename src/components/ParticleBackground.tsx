import { useEffect, useRef } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

interface ParticleBackgroundProps {
  className?: string;
}

const ParticleBackground = ({ className = "" }: ParticleBackgroundProps) => {
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current) return;
    initRef.current = true;

    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <Particles
      id="tsparticles"
      className={`fixed inset-0 -z-10 ${className}`}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#3b82f6", "#06b6d4", "#8b5cf6"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#3b82f6",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
            attract: {
              enable: false,
            },
          },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;

