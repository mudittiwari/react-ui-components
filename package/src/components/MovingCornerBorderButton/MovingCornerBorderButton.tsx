import React, { useEffect, useRef, useState } from "react";

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
    const buttonContainerRef = useRef<HTMLDivElement>(null);
    const [buttonWidth, setButtonWidth] = useState<number>(0);

    useEffect(() => {
        if (buttonContainerRef.current) {
            const buttonElement = buttonContainerRef.current.querySelector("button");
            if (buttonElement) {
              const width = buttonElement.offsetWidth;
              buttonContainerRef.current.style.setProperty("--button-width", `${width}px`);
            }
          }
    }, []);
    return (
        <>
            <style>{`
        .moving-corner-border-button-container {
            position: relative;
            display: inline-flex;
            align-items: center;
            z-index: 100;
        }

        .moving-corner-border-button-container::before {
            content: "";
            position: absolute;
            transform: translateY(-50%);
            width: var(--button-width);
            aspect-ratio: 1;
            left: calc(-0.75 * var(--button-width));
            background:  var(--dynamic-gradient);
            z-index: 0;
            animation:  spin 5s linear infinite;
            bottom: 30px;
            transform-origin: center; 
        }
        .moving-corner-border-button-container::after {
            content: "";
            position: absolute;
            transform: translateY(-50%);
            width: var(--button-width);
            aspect-ratio: 1;
            left: calc(0.7 * var(--button-width));
            background:  var(--dynamic-gradient);
            z-index: 0;
            animation:  spin 5s linear infinite;
            top: 30px;
        }

        .moving-corner-border-button {
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
                <div ref={buttonContainerRef} className="moving-corner-border-button-container" style={
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
                        className={`moving-corner-border-button ${className}`}
                    >
                        {label}
                    </button>
                </div>
            </div>
        </>
    );
};

export default MovingBorderButton;