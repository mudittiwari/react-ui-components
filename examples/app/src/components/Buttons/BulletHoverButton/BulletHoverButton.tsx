import React from "react";

const BulletHoverButton: React.FC<{
  label: string;
  onClick?: () => void;
  backgroundGradient?: string;
  textColor?: string;
  bulletColor?: string;
  hoverTextColor?: string;
  borderRadius?: string;
}> = ({
  label,
  onClick,
  backgroundGradient = "linear-gradient(135deg, #1e3a8a, #6366f1)",
  textColor = "#facc15",
  bulletColor = "#ec4899",
  hoverTextColor = "#ffffff",
  borderRadius = "12px",
}) => {
  return (
    <>
      <style>{`
        .bullet-hover-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 2.2rem;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: ${borderRadius};
          background: ${backgroundGradient};
          color: ${textColor};
          cursor: pointer;
          overflow: hidden;
          transition: color 0.4s ease, box-shadow 0.4s ease;
          z-index: 1;
        }

        .bullet-hover-button:hover {
          color: ${hoverTextColor};
          box-shadow: 0 0 15px ${bulletColor}66;
        }

        .bullet-hover-button::before {
          content: "";
          position: absolute;
          left: 1rem;
          top: 50%;
          width: 12px;
          height: 12px;
          background-color: ${bulletColor};
          border-radius: 50%;
          box-shadow: 0 0 8px ${bulletColor}, 0 0 14px ${bulletColor};
          transform: translateY(-50%) scale(0);
          transition: transform 0.35s ease-out;
          z-index: 2;
        }

        .bullet-hover-button:hover::before {
          transform: translateY(-50%) scale(1);
        }

        .bullet-hover-button::after {
          content: "";
          position: absolute;
          left: 1rem;
          top: 50%;
          width: 60px;
          height: 4px;
          background: ${bulletColor}33;
          border-radius: 100px;
          transform: translateY(-50%) translateX(-100%);
          opacity: 0;
          transition: transform 0.5s ease-out, opacity 0.4s;
          z-index: 1;
        }

        .bullet-hover-button:hover::after {
          transform: translateY(-50%) translateX(20px);
          opacity: 1;
        }

        .bullet-hover-button span {
          margin-left: 1.3rem;
          transition: margin-left 0.4s ease;
          z-index: 3;
        }

        .bullet-hover-button:hover span {
          margin-left: 2rem;
        }
      `}</style>
      <button className="bullet-hover-button" onClick={onClick}>
        <span>{label}</span>
      </button>
    </>
  );
};

export default BulletHoverButton;
