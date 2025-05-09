import React from "react";

interface GlowPulseButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  backgroundColor?: string;
  color?: string;
  glowColor?: string;
  borderRadius?: string;
}

const GlowPulseButton: React.FC<GlowPulseButtonProps> = ({
  label,
  onClick,
  className,
  backgroundColor = "#1f2937", // gray-800
  color = "#ffffff", // white
  glowColor = "linear-gradient(45deg, #60a5fa, #818cf8)", // blue-violet
  borderRadius = "12px",
}) => {
  return (
    <>
      <style>{`
        .glow-pulse-wrapper {
          position: relative;
          display: inline-block;
          border-radius: ${borderRadius};
        }

        .glow-pulse-wrapper::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 130%;
          height: 130%;
          background: ${glowColor};
          border-radius: ${borderRadius};
          filter: blur(20px);
          opacity: 0.6;
          z-index: 0;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .glow-pulse-button {
          position: relative;
          padding: 0.75rem 1.75rem;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          background-color: ${backgroundColor};
          color: ${color};
          border-radius: ${borderRadius};
          z-index: 1;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .glow-pulse-button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 10px ${color};
        }

        @keyframes pulse-glow {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
        }
      `}</style>

      <div className="glow-pulse-wrapper">
        <button onClick={onClick} className={`glow-pulse-button ${className || ""}`}>
          {label}
        </button>
      </div>
    </>
  );
};

export default GlowPulseButton;
