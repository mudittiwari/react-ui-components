import React from "react";

const WaveGlowButton: React.FC<{
  label: string;
  onClick?: () => void;
  textColor?: string;
  borderRadius?: string;
}> = ({
  label,
  onClick,
  textColor = "#ffffff",
  borderRadius = "18px",
}) => {
  return (
    <>
      <style>{`
        .wave-glow-button {
          position: relative;
          padding: 0.9rem 2.6rem;
          font-size: 1rem;
          font-weight: 700;
          color: ${textColor};
          border: none;
          border-radius: ${borderRadius};
          background: linear-gradient(145deg, #1e1b4b, #111827);
          cursor: pointer;
          overflow: hidden;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .wave-glow-button:hover {
          transform: scale(1.06);
        }

        .wave-glow-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -60%;
          width: 200%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transform: skewX(-20deg);
          animation: shimmer-wave 2.8s infinite ease-in-out;
          filter: blur(3px);
          z-index: 0;
        }

        .wave-glow-button::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: ${borderRadius};
          box-shadow: 0 0 15px #a855f766, 0 0 25px #a855f733;
          z-index: -1;
          animation: pulse-glow 3.5s ease-in-out infinite;
        }

        .wave-glow-button span {
          position: relative;
          z-index: 2;
        }

        @keyframes shimmer-wave {
          0% {
            left: -60%;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            left: 120%;
            opacity: 0;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 15px #a855f766, 0 0 25px #a855f733;
          }
          50% {
            box-shadow: 0 0 22px #a855f7aa, 0 0 35px #a855f755;
          }
        }
      `}</style>

      <button className="wave-glow-button" onClick={onClick}>
        <span>{label}</span>
      </button>
    </>
  );
};

export default WaveGlowButton;
