import React from "react";
import "./index.css";

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
      <div className="p-1 overflow-hidden w-max" style={{
        borderRadius: borderRadius
      }}>
        <div className="button-container" style={
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
            className={`custom-button ${className}`}
          >
            {label}
          </button>
        </div>
      </div>
    </>
  );
};

export default MovingBorderButton;