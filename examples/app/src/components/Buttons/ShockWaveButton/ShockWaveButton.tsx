import React from "react";

interface ShockWaveButtonProps {
  label: string;
  onClick?: () => void;
  textColor?: string;
  backgroundColor?: string;
  waveColor?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
}

const ShockWaveButton: React.FC<ShockWaveButtonProps> = ({
  label,
  onClick,
  textColor = "#fefce8",
  backgroundColor = "#111827",
  waveColor = "#22d3ee", // cyan
  borderRadius = "16px",
  fontSize = "1rem",
  fontWeight = "700",
  padding = "1rem 2.6rem",
}) => {
  return (
    <>
      <style>{`
  .shockwave-button {
    position: relative;
    overflow: hidden;
    border: none;
    cursor: pointer;
    color: ${textColor};
    background-color: ${backgroundColor};
    border-radius: ${borderRadius};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    padding: ${padding};
    z-index: 1;
  }

  .shockwave-button::before,
  .shockwave-button::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 250%;
    height: 250%;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    pointer-events: none;
  }

  .shockwave-button::before {
    background: radial-gradient(circle, ${waveColor}CC 0%, transparent 70%);
    animation: wave-pulse 2.4s ease-in-out infinite;
    opacity: 0.7;
  }

  .shockwave-button::after {
    background: radial-gradient(circle, ${waveColor}AA 0%, transparent 60%);
    animation: wave-ring 1.8s ease-in-out infinite;
    opacity: 0.4;
  }

  @keyframes wave-pulse {
    0% {
      transform: translate(-50%, -50%) scale(0.3);
      opacity: 0.8;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(3.5);
      opacity: 0;
    }
  }

  @keyframes wave-ring {
    0% {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 0.5;
    }
    100% {
      transform: translate(-50%, -50%) scale(3);
      opacity: 0;
    }
  }
`}</style>

      <button className="shockwave-button" onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default ShockWaveButton;
