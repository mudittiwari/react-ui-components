import React, { useRef, useEffect } from "react";

interface MagnetOrbitButtonProps {
  label: string;
  onClick?: () => void;
  textColor?: string;
  backgroundColor?: string;
  orbitColor?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  shadowColor?: string;
  particleCount?: number;
}

const MagnetOrbitButton: React.FC<MagnetOrbitButtonProps> = ({
  label,
  onClick,
  textColor = "#fefce8",
  backgroundColor = "#1e1b4b",
  orbitColor = "#38bdf8",
  borderRadius = "18px",
  fontSize = "1.05rem",
  fontWeight = "700",
  padding = "1rem 2.8rem",
  shadowColor = "#38bdf8",
  particleCount = 18,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 10;
      const y = (e.clientY - rect.top - rect.height / 2) / 10;
      button.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
    };

    const reset = () => {
      button.style.transform = `rotateX(0deg) rotateY(0deg)`;
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", reset);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <>
      <style>{`
        .orbit-button {
          position: relative;
          overflow: hidden;
          border: none;
          cursor: pointer;
          transform-style: preserve-3d;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 0 25px var(--shadow-color, #a855f755);
          animation: glowPulse 4s ease-in-out infinite;
          z-index: 1;
        }

        .orbit-button:hover {
        transform: scale(1.03);
        box-shadow: 0 0 40px var(--shadow-color, #a855f7aa);
        animation-duration: 2s;
      }

      .particle {
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--orbit-color, #38bdf8);
      opacity: 0.8;
      animation: randomMove 3s ease-in-out infinite alternate;
      z-index: 2;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }

    .orbit-button:hover .particle {
      transform: scale(1.4);
      box-shadow: 0 0 8px var(--orbit-color, #38bdf8);
    }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px var(--shadow-color, #a855f733); }
          50% { box-shadow: 0 0 35px var(--shadow-color, #a855f766); }
        }

        @keyframes randomMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(var(--x), var(--y));
          }
        }
      `}</style>

      <button
        ref={buttonRef}
        className="orbit-button"
        onClick={onClick}
        style={{
          color: textColor,
          backgroundColor,
          borderRadius,
          fontSize,
          fontWeight,
          padding,
          ['--orbit-color' as any]: orbitColor,
          ['--shadow-color' as any]: shadowColor,
        }}
      >
        {label}
        {Array.from({ length: particleCount }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2.5 + Math.random()}s`,
              ['--x' as any]: `${Math.random() * 100 - 50}px`,
              ['--y' as any]: `${Math.random() * 100 - 50}px`,
            }}
          />
        ))}
      </button>
    </>
  );
};

export default MagnetOrbitButton;
