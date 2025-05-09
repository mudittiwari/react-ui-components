import React from "react";

const TrailStreakButton: React.FC<{
  label: string;
  onClick?: () => void;
  background?: string;
  textColor?: string;
}> = ({
  label,
  onClick,
  background = "#1e1b4b",
  textColor = "#facc15",
}) => {
  return (
    <>
      <style>{`
        .trail-button {
          position: relative;
          padding: 0.75rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          background: ${background};
          color: ${textColor};
          border: none;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
        }

        .trail-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transform: skewX(-20deg);
          animation: streak 2.5s infinite;
        }

        @keyframes streak {
          0% {
            left: -75%;
          }
          100% {
            left: 125%;
          }
        }
      `}</style>
      <button className="trail-button" onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default TrailStreakButton;
