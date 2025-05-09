import React, { useEffect, useRef } from "react";

export const CometTrailButton: React.FC<{
    label: string;
    onClick?: () => void;
    textColor?: string;
    backgroundColor?: string;
    cometColor?: string;
    borderRadius?: string;
    fontSize?: string;
    fontWeight?: string;
    padding?: string;
    particleCount?: number;
}> = ({
    label,
    onClick,
    textColor = "#ffffff",
    backgroundColor = "#0f0c29",
    cometColor = "#38bdf8",
    borderRadius = "16px",
    fontSize = "1rem",
    fontWeight = "700",
    padding = "1rem 2.4rem",
    particleCount = 20,
}) => {
        const btnRef = useRef<HTMLButtonElement>(null);

        return (
            <>
                <style>{`
        .comet-button {
        position: relative;
        overflow: hidden;
        border: 2px solid ${cometColor};
        color: ${textColor};
        background-color: ${backgroundColor};
        border-radius: ${borderRadius};
        font-size: ${fontSize};
        font-weight: ${fontWeight};
        padding: ${padding};
        cursor: pointer;
        z-index: 1;
        transition: box-shadow 0.4s ease, transform 0.3s ease;
        }

        .comet-button:hover {
        box-shadow: 0 0 20px ${cometColor}88, 0 0 40px ${cometColor}44;
        transform: scale(1.03);
        }

    
        .comet-particle {
          position: absolute;
          width: 2px;
          height: 10px;
          background: ${cometColor};
          opacity: 0.8;
          transform: rotate(45deg);
          animation: comet-dash 2s linear infinite;
        }
    
        @keyframes comet-dash {
          0% {
            transform: translateY(0) rotate(45deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-80px) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>

                <button className="comet-button" onClick={onClick} ref={btnRef}>
                    {label}
                    {Array.from({ length: particleCount }).map((_, i) => (
                        <span
                            key={i}
                            className="comet-particle"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                            }}
                        />
                    ))}
                </button>
            </>

        );
    };