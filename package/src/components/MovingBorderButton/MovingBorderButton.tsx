import React from "react";

interface MovingBorderButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  backgroundColor?: string;
  color?: string;
  borderRadius?: string;
  linearGradient?: string;
}

const MovingBorderButton: React.FC<MovingBorderButtonProps> = ({ label, onClick, className, backgroundColor, color, borderRadius, linearGradient }) => {
  return (
    <>
      <style>{`
        .moving-border-button-container {
          position: relative;
          display: inline-flex;
          align-items: center;
          z-index: 100;
      }

      .moving-border-button-container::before {
          content: "";
          position: absolute;
          transform: translateY(-50%);
          width: 180%;
          aspect-ratio: 1;
          left: -20px;
          background:  var(--dynamic-gradient);
          z-index: 0;
          animation: gradient-rotate 3s infinite, spin 2s linear infinite;
      }

      .moving-border-button {
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s;
          z-index: 100;

      }

      @keyframes gradient-rotate {
          0% {
              background-position: 0% 50%;
          }

          50% {
              background-position: 100% 50%;
          }

          100% {
              background-position: 0% 50%;
          }
      }

      @keyframes spin {
          0% {
              transform: rotate(0deg);
          }

          100% {
              transform: rotate(360deg);
          }
      }
      `}</style>
      <div className="p-1 overflow-hidden w-max" style={{
        borderRadius: borderRadius
      }}>
        <div className="moving-border-button-container" style={
          {
            "--dynamic-gradient": linearGradient ? linearGradient : "linear-gradient(to right, #1565C0, #b92b27)"
          } as React.CSSProperties

        }>
          <button
            onClick={onClick}
            style={{
              backgroundColor: backgroundColor,
              color: color,
              borderRadius: borderRadius
            }}
            className={`moving-border-button ${className}`}
          >
            {label}
          </button>
        </div>
      </div>
    </>
  );
};

export default MovingBorderButton;