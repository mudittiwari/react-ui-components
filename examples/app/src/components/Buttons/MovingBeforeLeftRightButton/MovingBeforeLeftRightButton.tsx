import React, { useEffect, useRef, useState } from "react";

interface MovingBeforeLeftRightButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  backgroundColor?: string;
  color?: string;
  borderRadius?: string;
  beforeColor?: string;
  hoverTextColor?: string;
}

const MovingBeforeLeftRightButton: React.FC<MovingBeforeLeftRightButtonProps> = ({
    label,
    onClick,
    className,
    backgroundColor = "blue",
    color = "white",
    borderRadius = "8px",
    beforeColor = "green",
    hoverTextColor = "black"
  }) => {
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <style>{`
        .moving-before-left-right-button-container {
            position: relative;
            display: inline-flex;
            align-items: center;
            z-index: 100;
            overflow: hidden;
            border-radius: ${borderRadius};
        }

        .moving-before-left-right-button-container::before {
            content: "";
            position: absolute;
            width: 0;
            height: 100%;
            background: ${beforeColor};
            z-index: 1;
            transition: width 500ms;
            border-radius: ${borderRadius};
            left: 0;
        }

        .moving-before-left-right-button-container:hover::before {
            width: 100%;
        }

        .moving-before-left-right-button {
            position: relative;
            color: ${color};
            border-radius: ${borderRadius};
            overflow: hidden;
        }

        .moving-before-left-right-button::after {
            content: "${label}";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color: transparent;
            z-index: 1;
            transition: color 0.5s ease;
            border-radius: ${borderRadius};
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .moving-before-left-right-button-container:hover .moving-before-left-right-button::after {
            color: ${hoverTextColor};
        }
      `}</style>
      <div ref={buttonContainerRef} className="moving-before-left-right-button-container">
        <button
          onClick={onClick}
          className={`moving-before-left-right-button ${className}`}
          style={{
            backgroundColor: backgroundColor,
            color: color,
            borderRadius: borderRadius,
          }}
        >
          {label}
        </button>
      </div>
    </>
  );
};

export default MovingBeforeLeftRightButton;
