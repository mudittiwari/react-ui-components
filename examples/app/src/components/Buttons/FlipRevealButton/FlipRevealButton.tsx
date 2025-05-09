import React from "react";

interface FlipRevealButtonProps {
  labelFront: string;
  labelBack?: string;
  onClick?: () => void;
  frontColor?: string;
  backColor?: string;
  textColor?: string;
  borderRadius?: string;
  glowColor?: string;
}

const FlipRevealButton: React.FC<FlipRevealButtonProps> = ({
  labelFront,
  labelBack = labelFront,
  onClick,
  frontColor = "linear-gradient(135deg, #1e1b4b, #111827)",
  backColor = "linear-gradient(135deg, #6366f1, #8b5cf6)",
  textColor = "#facc15",
  borderRadius = "14px",
  glowColor = "#8b5cf6",
}) => {
  return (
    <>
      <style>{`
        .flip-btn-wrapper {
          perspective: 1400px;
          display: inline-block;
          transition: transform 0.4s ease;
          border-radius: ${borderRadius};
        }

        .flip-btn-wrapper:hover {
          transform: scale(1.05);
        }

        .flip-btn-inner {
          width: 220px;
          height: 60px;
          transition: transform 0.8s ease;
          transform-style: preserve-3d;
          position: relative;
          border-radius: ${borderRadius};
        }

        .flip-btn-wrapper:hover .flip-btn-inner {
          transform: rotateY(180deg);
        }

        .flip-btn-face {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          backface-visibility: hidden;
          border-radius: ${borderRadius};
          font-weight: 700;
          font-size: 1.05rem;
          letter-spacing: 0.5px;
          cursor: pointer;
          padding: 0 1.5rem;
          box-shadow: 0 0 12px ${glowColor};
          transition: box-shadow 0.4s ease, background 0.4s ease;
        }

        .flip-front {
          background: ${frontColor};
          color: ${textColor};
        }

        .flip-back {
          background: ${backColor};
          color: ${textColor};
          transform: rotateY(180deg);
        }
      `}</style>

      <div className="flip-btn-wrapper" onClick={onClick}>
        <div className="flip-btn-inner">
          <div className="flip-btn-face flip-front">{labelFront}</div>
          <div className="flip-btn-face flip-back">{labelBack}</div>
        </div>
      </div>
    </>
  );
};

export default FlipRevealButton;
