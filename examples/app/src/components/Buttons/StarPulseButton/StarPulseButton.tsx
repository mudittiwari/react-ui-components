import React, { useRef } from "react";

export const StarPulseButton: React.FC<{
  label: string;
  onClick?: () => void;
  textColor?: string;
  backgroundColor?: string;
  starColor?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  particleCount?: number;
}> = ({
  label,
  onClick,
  textColor = "#fefce8",
  backgroundColor = "#1e1b4b",
  starColor = "#facc15",
  borderRadius = "20px",
  fontSize = "1rem",
  fontWeight = "800",
  padding = "1rem 2.5rem",
  particleCount = 16,
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <style>{`
        .star-button {
          position: relative;
          overflow: hidden;
          border: none;
          color: ${textColor};
          background-color: ${backgroundColor};
          border-radius: ${borderRadius};
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          padding: ${padding};
          cursor: pointer;
          z-index: 1;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .star-button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px ${starColor}55;
        }

        .star-pulse {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: ${starColor};
          opacity: 0.6;
          animation: star-burst 2.5s ease-in-out infinite;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .star-button:hover .star-pulse {
          transform: scale(1.3);
          box-shadow: 0 0 8px ${starColor};
        }

        @keyframes star-burst {
          0% {
            transform: scale(0) translate(0, 0);
            opacity: 1;
          }
          50% {
            transform: scale(1.5) translate(var(--x), var(--y));
            opacity: 0.8;
          }
          100% {
            transform: scale(0) translate(0, 0);
            opacity: 0;
          }
        }
      `}</style>

      <button className="star-button" onClick={onClick} ref={btnRef}>
        {label}
        {Array.from({ length: particleCount }).map((_, i) => (
          <span
            key={i}
            className="star-pulse"
            style={{
              top: "50%",
              left: "50%",
              transformOrigin: "center",
              animationDelay: `${Math.random() * 2}s`,
              ["--x" as any]: `${Math.random() * 80 - 40}px`,
              ["--y" as any]: `${Math.random() * 80 - 40}px`,
            }}
          />
        ))}
      </button>
    </>
  );
};
