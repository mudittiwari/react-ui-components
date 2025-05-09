import React, { useRef } from "react";

const RippleBurstButton: React.FC<{
  label: string;
  onClick?: () => void;
  backgroundColor?: string;
  color?: string;
  rippleColor?: string;
  borderRadius?: string;
}> = ({
  label,
  onClick,
  backgroundColor = "#1e1b4b",
  color = "#facc15",
  rippleColor = "#818cf8",
  borderRadius = "12px",
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createRipple = (event: React.MouseEvent) => {
    const button = buttonRef.current;
    if (!button) return;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - diameter / 2}px`;
    circle.style.top = `${event.clientY - rect.top - diameter / 2}px`;
    circle.className = "ripple";
    circle.style.background = rippleColor;

    button.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  };

  return (
    <>
      <style>{`
        .ripple-button {
          position: relative;
          overflow: hidden;
          padding: 0.75rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: ${borderRadius};
          background-color: ${backgroundColor};
          color: ${color};
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .ripple-button:hover {
          transform: scale(1.03);
        }

        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple-effect 0.6s linear;
          opacity: 0.6;
          pointer-events: none;
        }

        @keyframes ripple-effect {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
      <button
        ref={buttonRef}
        className="ripple-button"
        onClick={(e) => {
          createRipple(e);
          onClick?.();
        }}
      >
        {label}
      </button>
    </>
  );
};

export default RippleBurstButton;
