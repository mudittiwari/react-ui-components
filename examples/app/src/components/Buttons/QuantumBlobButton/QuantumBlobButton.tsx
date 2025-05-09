import React from "react";

const QuantumBlobButton: React.FC<{
  label: string;
  onClick?: () => void;
  textColor?: string;
  backgroundColor?: string;
  glowColor?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
}> = ({
  label,
  onClick,
  textColor = "#ffffff",
  backgroundColor = "#0f172a",
  glowColor = "#a855f7",
  borderRadius = "20px",
  fontSize = "1.05rem",
  fontWeight = "700",
  padding = "1rem 2.6rem",
}) => {
  return (
    <>
      <style>{`
        .quantum-button {
          position: relative;
          border: none;
          cursor: pointer;
          overflow: hidden;
          z-index: 1;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .quantum-button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px ${glowColor}33;
        }

        .quantum-button::before {
          content: '';
          position: absolute;
          top: -30%;
          left: -30%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, ${glowColor} 30%, transparent 70%);
          animation: blob-float 6s ease-in-out infinite;
          filter: blur(60px);
          opacity: 0.5;
          z-index: -2;
        }

        .quantum-button::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, ${glowColor}22 0%, transparent 100%);
          z-index: -1;
          border-radius: ${borderRadius};
          backdrop-filter: blur(8px);
        }

        @keyframes blob-float {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(15px, -10px) scale(1.1);
          }
          66% {
            transform: translate(-10px, 10px) scale(1.2);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
      `}</style>

      <button
        className="quantum-button"
        onClick={onClick}
        style={{
          color: textColor,
          backgroundColor,
          borderRadius,
          fontSize,
          fontWeight,
          padding,
        }}
      >
        {label}
      </button>
    </>
  );
};

export default QuantumBlobButton;
