import React from "react";

const CyberGlitchButton: React.FC<{
  label: string;
  onClick?: () => void;
}> = ({ label, onClick }) => {
  return (
    <>
      <style>{`
        .cyber-button {
          position: relative;
          padding: 0.85rem 2.5rem;
          font-size: 1rem;
          font-weight: bold;
          color: #0ff;
          background: #000;
          border: 2px solid #0ff;
          text-transform: uppercase;
          overflow: hidden;
          border-radius: 10px;
          cursor: pointer;
        }

        .cyber-button::before,
        .cyber-button::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.05) 2px,
            transparent 2px,
            transparent 4px
          );
          pointer-events: none;
        }

        .cyber-button::after {
          mix-blend-mode: color-dodge;
          animation: glitch-jump 0.5s infinite alternate-reverse;
        }

        .cyber-button:hover {
          box-shadow: 0 0 20px #0ff, inset 0 0 20px #0ff;
          animation: glitch-text 0.2s steps(2, end) infinite;
        }

        @keyframes glitch-jump {
          0% {
            transform: translate(0);
          }
          100% {
            transform: translate(2px, -2px);
          }
        }

        @keyframes glitch-text {
          0% {
            text-shadow: 2px 0 red;
          }
          50% {
            text-shadow: -2px 0 blue;
          }
          100% {
            text-shadow: 2px 0 red;
          }
        }
      `}</style>
      <button className="cyber-button" onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default CyberGlitchButton;
