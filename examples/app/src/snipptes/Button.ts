export const ButtonCodeSnippets: Record<
    "MovingBeforeLeftRightButton" | "MovingBorderButton" | "MovingCornerBorderButton" | "GlowPulseButton" | "FlipRevealButton" | "BulletHoverButton" | "RippleBurstButton" | "WaveGlowButton" | "TrailStreakButton" | "MagnetOrbitButton" | "ShockWaveButton" | "QuantumBlobButton" | "CyberGlitchButton" | "StarPulseButton" | "CometTrailButton",
    { component: string; css: string; usage: string }
> = {
    MovingBeforeLeftRightButton: {
        component: `interface MovingBeforeLeftRightButtonProps {
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
  return (
    <div className="moving-before-left-right-button-container">
      <button
        onClick={onClick}
        className={\`moving-before-left-right-button \${className}\`}
        style={{
          backgroundColor,
          color,
          borderRadius,
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default MovingBeforeLeftRightButton;
`,
        css: `.moving-before-left-right-button-container {
  position: relative;
  display: inline-flex;
  align-items: center;
  z-index: 100;
  overflow: hidden;
  border-radius: 8px; /* use a default or match runtime style */
}

.moving-before-left-right-button-container::before {
  content: "";
  position: absolute;
  width: 0;
  height: 100%;
  background: green;
  z-index: 1;
  transition: width 500ms;
  border-radius: 8px;
  left: 0;
}

.moving-before-left-right-button-container:hover::before {
  width: 100%;
}

.moving-before-left-right-button {
  position: relative;
  color: white;
  border-radius: 8px;
  overflow: hidden;
  z-index: 2;
  padding: 0.75rem 1.5rem;
}

.moving-before-left-right-button::after {
  content: "Hover me!";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: transparent;
  z-index: 3;
  transition: color 0.5s ease;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.moving-before-left-right-button-container:hover .moving-before-left-right-button::after {
  color: black;
}`,
        usage: `import { MovingBeforeLeftRightButton } from "react-ui-components-mudittiwari13";

<MovingBeforeLeftRightButton label='Subscribe!' onClick={() => { console.log("button clicked") }} className='px-8 py-4' backgroundColor='#F26B0F' color='white' beforeColor='#FCC737' borderRadius='30px' hoverTextColor='#7E1891' />`,
    },
    MovingBorderButton: {
        component: `interface MovingBorderButtonProps {
        label: string;
        onClick?: () => void;
        className?: string;
        backgroundColor?: string;
        color?: string;
        borderRadius?: string;
        linearGradient?: string;
      }
      
      const MovingBorderButton: React.FC<MovingBorderButtonProps> = ({
        label,
        onClick,
        className,
        backgroundColor,
        color,
        borderRadius,
        linearGradient
      }) => {
        return (
          <div className="p-1 overflow-hidden w-max" style={{ borderRadius }}>
            <div
              className="moving-border-button-container"
              style={
                {
                  "--dynamic-gradient": linearGradient
                    ? linearGradient
                    : "linear-gradient(to right, #1565C0, #b92b27)"
                } as React.CSSProperties
              }
            >
              <button
                onClick={onClick}
                style={{
                  backgroundColor,
                  color,
                  borderRadius
                }}
                className={\`moving-border-button \${className}\`}
              >
                {label}
              </button>
            </div>
          </div>
        );
      };
      
      export default MovingBorderButton;`,
        css: `.moving-border-button-container {
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
        background: var(--dynamic-gradient);
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
        position: relative;
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
      }`,
        usage: `import { MovingBorderButton } from "react-ui-components-mudittiwari13";
      
      <MovingBorderButton
        label="Click me!"
        onClick={() => console.log("Button clicked")}
        className="px-2 py-2"
        backgroundColor="white"
        color="black"
        borderRadius="8px"
        linearGradient="linear-gradient(to right, #cac531, #f3f9a7)"
      />;`
    },
    MovingCornerBorderButton: {
        component: `import React, { useRef, useEffect, useState } from "react";
      
      interface MovingCornerBorderButtonProps {
        label: string;
        onClick?: () => void;
        className?: string;
        backgroundColor?: string;
        color?: string;
        borderRadius?: string;
        linearGradient?: string;
      }
      
      const MovingCornerBorderButton: React.FC<MovingCornerBorderButtonProps> = ({
        label,
        onClick,
        className,
        backgroundColor,
        color,
        borderRadius,
        linearGradient,
      }) => {
        const buttonContainerRef = useRef<HTMLDivElement>(null);
        const [buttonWidth, setButtonWidth] = useState<number>(0);
      
        useEffect(() => {
          if (buttonContainerRef.current) {
            const buttonElement = buttonContainerRef.current.querySelector("button");
            if (buttonElement) {
              const width = buttonElement.offsetWidth;
              buttonContainerRef.current.style.setProperty("--button-width", \`\${width}px\`);
            }
          }
        }, []);
      
        return (
          <>
            <style>{\`
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
                background: var(--dynamic-gradient);
                z-index: 0;
                animation: spin 5s linear infinite;
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
                background: var(--dynamic-gradient);
                z-index: 0;
                animation: spin 5s linear infinite;
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
      
              @keyframes spin {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
            \`}</style>
            <div
              className="p-1 overflow-hidden w-max"
              style={{ borderRadius }}
            >
              <div
                ref={buttonContainerRef}
                className="moving-corner-border-button-container"
                style={
                  {
                    "--dynamic-gradient": linearGradient
                      ? linearGradient
                      : "linear-gradient(to right, #1565C0, #b92b27)",
                  } as React.CSSProperties
                }
              >
                <button
                  onClick={onClick}
                  style={{ backgroundColor, color, borderRadius }}
                  className={\`moving-corner-border-button \${className}\`}
                >
                  {label}
                </button>
              </div>
            </div>
          </>
        );
      };
      
      export default MovingCornerBorderButton;`,
        css: `.moving-corner-border-button-container {
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
        background: var(--dynamic-gradient);
        z-index: 0;
        animation: spin 5s linear infinite;
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
        background: var(--dynamic-gradient);
        z-index: 0;
        animation: spin 5s linear infinite;
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
      
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }`,
        usage: `import { MovingCornerBorderButton } from "react-ui-components-mudittiwari13";
      
      <MovingCornerBorderButton
        label="Click me!"
        onClick={() => console.log("button clicked")}
        className="px-2 py-2"
        backgroundColor="white"
        color="black"
        borderRadius="8px"
        linearGradient="linear-gradient(to right, #0f0c29, #302b63, #24243e)"
      />;`
    },
    GlowPulseButton: {
        component: `import React from "react";
      
      interface GlowPulseButtonProps {
        label: string;
        onClick?: () => void;
        className?: string;
        backgroundColor?: string;
        color?: string;
        glowColor?: string;
        borderRadius?: string;
      }
      
      const GlowPulseButton: React.FC<GlowPulseButtonProps> = ({
        label,
        onClick,
        className,
        backgroundColor = "#1f2937", // dark indigo
        color = "#ffffff", // white
        glowColor = "linear-gradient(45deg, #60a5fa, #818cf8)", // default blue-violet
        borderRadius = "12px",
      }) => {
        return (
          <>
            <style>{\`
              .glow-pulse-wrapper {
                position: relative;
                display: inline-block;
                border-radius: \${borderRadius};
              }
      
              .glow-pulse-wrapper::before {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 130%;
                height: 130%;
                background: \${glowColor};
                border-radius: \${borderRadius};
                filter: blur(20px);
                opacity: 0.6;
                z-index: 0;
                animation: pulse-glow 2s ease-in-out infinite;
              }
      
              .glow-pulse-button {
                position: relative;
                padding: 0.75rem 1.75rem;
                font-size: 1rem;
                font-weight: 600;
                border: none;
                cursor: pointer;
                background-color: \${backgroundColor};
                color: \${color};
                border-radius: \${borderRadius};
                z-index: 1;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
              }
      
              .glow-pulse-button:hover {
                transform: scale(1.05);
                box-shadow: 0 0 10px \${color};
              }
      
              @keyframes pulse-glow {
                0% {
                  transform: translate(-50%, -50%) scale(1);
                  opacity: 0.6;
                }
                50% {
                  transform: translate(-50%, -50%) scale(1.2);
                  opacity: 0.8;
                }
                100% {
                  transform: translate(-50%, -50%) scale(1);
                  opacity: 0.6;
                }
              }
            \`}</style>
      
            <div className="glow-pulse-wrapper">
              <button onClick={onClick} className={\`glow-pulse-button \${className || ""}\`}>
                {label}
              </button>
            </div>
          </>
        );
      };
      
      export default GlowPulseButton;`,

        css: `.glow-pulse-wrapper {
        position: relative;
        display: inline-block;
        border-radius: 16px;
      }
      
      .glow-pulse-wrapper::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 130%;
        height: 130%;
        background: linear-gradient(135deg, #6366f1, #a78bfa, #f472b6);
        border-radius: 16px;
        filter: blur(20px);
        opacity: 0.6;
        z-index: 0;
        animation: pulse-glow 2s ease-in-out infinite;
      }
      
      .glow-pulse-button {
        position: relative;
        padding: 0.75rem 1.75rem;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        cursor: pointer;
        background-color: #1e1b4b;
        color: #facc15;
        border-radius: 16px;
        z-index: 1;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .glow-pulse-button:hover {
        transform: scale(1.05);
        box-shadow: 0 0 10px #facc15;
      }
      
      @keyframes pulse-glow {
        0% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.6;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.2);
          opacity: 0.8;
        }
        100% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.6;
        }
      }`,

        usage: `import { GlowPulseButton } from "react-ui-components-mudittiwari13";
      
      <GlowPulseButton
        label="Click Me"
        onClick={() => console.log("Glow clicked")}
        backgroundColor="#1e1b4b"
        color="#facc15"
        glowColor="linear-gradient(135deg, #6366f1, #a78bfa, #f472b6)"
        borderRadius="16px"
      />;`
    },
    FlipRevealButton: {
        component: `import React from "react";
      
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
            <style>{\`
              .flip-btn-wrapper {
                perspective: 1400px;
                display: inline-block;
                transition: transform 0.4s ease;
                border-radius: \${borderRadius};
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
                border-radius: \${borderRadius};
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
                border-radius: \${borderRadius};
                font-weight: 700;
                font-size: 1.05rem;
                letter-spacing: 0.5px;
                cursor: pointer;
                padding: 0 1.5rem;
                box-shadow: 0 0 12px \${glowColor};
                transition: box-shadow 0.4s ease, background 0.4s ease;
              }
      
              .flip-front {
                background: \${frontColor};
                color: \${textColor};
              }
      
              .flip-back {
                background: \${backColor};
                color: \${textColor};
                transform: rotateY(180deg);
              }
            \`}</style>
      
            <div className="flip-btn-wrapper" onClick={onClick}>
              <div className="flip-btn-inner">
                <div className="flip-btn-face flip-front">{labelFront}</div>
                <div className="flip-btn-face flip-back">{labelBack}</div>
              </div>
            </div>
          </>
        );
      };
      
      export default FlipRevealButton;`,

        css: `.flip-btn-wrapper {
        perspective: 1400px;
        display: inline-block;
        transition: transform 0.4s ease;
        border-radius: 16px;
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
        border-radius: 16px;
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
        border-radius: 16px;
        font-weight: 700;
        font-size: 1.05rem;
        letter-spacing: 0.5px;
        cursor: pointer;
        padding: 0 1.5rem;
        box-shadow: 0 0 12px #ec4899;
        transition: box-shadow 0.4s ease, background 0.4s ease;
      }
      
      .flip-front {
        background: linear-gradient(135deg, #1e3a8a, #6366f1);
        color: #ffffff;
      }
      
      .flip-back {
        background: linear-gradient(135deg, #ec4899, #f43f5e);
        color: #ffffff;
        transform: rotateY(180deg);
      }`,

        usage: `import { FlipRevealButton } from "react-ui-components-mudittiwari13";
      
      <FlipRevealButton
        labelFront="Purchase"
        labelBack="Confirm Order"
        onClick={() => console.log("Confirmed")}
        frontColor="linear-gradient(135deg, #1e3a8a, #6366f1)"
        backColor="linear-gradient(135deg, #ec4899, #f43f5e)"
        textColor="#ffffff"
        borderRadius="16px"
        glowColor="#ec4899"
      />;`
    },
    BulletHoverButton: {
        component: `import React from "react";
      
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
            <style>{\`
              .bullet-hover-button {
                position: relative;
                display: inline-flex;
                align-items: center;
                padding: 0.75rem 2.2rem;
                font-size: 1rem;
                font-weight: 600;
                border: none;
                border-radius: \${borderRadius};
                background: \${backgroundGradient};
                color: \${textColor};
                cursor: pointer;
                overflow: hidden;
                transition: color 0.4s ease, box-shadow 0.4s ease;
                z-index: 1;
              }
      
              .bullet-hover-button:hover {
                color: \${hoverTextColor};
                box-shadow: 0 0 15px \${bulletColor}66;
              }
      
              .bullet-hover-button::before {
                content: "";
                position: absolute;
                left: 1rem;
                top: 50%;
                width: 12px;
                height: 12px;
                background-color: \${bulletColor};
                border-radius: 50%;
                box-shadow: 0 0 8px \${bulletColor}, 0 0 14px \${bulletColor};
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
                background: \${bulletColor}33;
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
            \`}</style>
            <button className="bullet-hover-button" onClick={onClick}>
              <span>{label}</span>
            </button>
          </>
        );
      };
      
      export default BulletHoverButton;`,

        css: `.bullet-hover-button {
        position: relative;
        display: inline-flex;
        align-items: center;
        padding: 0.75rem 2.2rem;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        border-radius: 16px;
        background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
        color: #facc15;
        cursor: pointer;
        overflow: hidden;
        transition: color 0.4s ease, box-shadow 0.4s ease;
        z-index: 1;
      }
      
      .bullet-hover-button:hover {
        color: #ffffff;
        box-shadow: 0 0 15px #a855f766;
      }
      
      .bullet-hover-button::before {
        content: "";
        position: absolute;
        left: 1rem;
        top: 50%;
        width: 12px;
        height: 12px;
        background-color: #a855f7;
        border-radius: 50%;
        box-shadow: 0 0 8px #a855f7, 0 0 14px #a855f7;
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
        background: #a855f733;
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
      }`,

        usage: `import { BulletHoverButton } from "react-ui-components-mudittiwari13";
      
      <BulletHoverButton
        label="Get Started"
        onClick={() => console.log("Bullet clicked")}
        backgroundGradient="linear-gradient(135deg, #0f0c29, #302b63, #24243e)"
        textColor="#facc15"
        bulletColor="#a855f7"
        hoverTextColor="#ffffff"
        borderRadius="16px"
      />;`
    },
    RippleBurstButton: {
        component: `import React, { useRef } from "react";
      
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
          circle.style.width = circle.style.height = \`\${diameter}px\`;
          circle.style.left = \`\${event.clientX - rect.left - diameter / 2}px\`;
          circle.style.top = \`\${event.clientY - rect.top - diameter / 2}px\`;
          circle.className = "ripple";
          circle.style.background = rippleColor;
      
          button.appendChild(circle);
          setTimeout(() => circle.remove(), 600);
        };
      
        return (
          <>
            <style>{\`
              .ripple-button {
                position: relative;
                overflow: hidden;
                padding: 0.75rem 2rem;
                font-size: 1rem;
                font-weight: 600;
                border: none;
                border-radius: \${borderRadius};
                background-color: \${backgroundColor};
                color: \${color};
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
            \`}</style>
      
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
      
      export default RippleBurstButton;`,

        css: `.ripple-button {
        position: relative;
        overflow: hidden;
        padding: 0.75rem 2rem;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        border-radius: 14px;
        background-color: #1e3a8a;
        color: #facc15;
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
        background: #a855f7;
      }
      
      @keyframes ripple-effect {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }`,

        usage: `import { RippleBurstButton } from "react-ui-components-mudittiwari13";
      
      <RippleBurstButton
        label="Join Now"
        onClick={() => console.log("Ripple Clicked")}
        backgroundColor="#1e3a8a"
        color="#facc15"
        rippleColor="#a855f7"
        borderRadius="14px"
      />;`
    },
    WaveGlowButton: {
        component: `import React from "react";
      
      const WaveGlowButton: React.FC<{
        label: string;
        onClick?: () => void;
        textColor?: string;
        borderRadius?: string;
      }> = ({
        label,
        onClick,
        textColor = "#ffffff",
        borderRadius = "18px",
      }) => {
        return (
          <>
            <style>{\`
              .wave-glow-button {
                position: relative;
                padding: 0.9rem 2.6rem;
                font-size: 1rem;
                font-weight: 700;
                color: \${textColor};
                border: none;
                border-radius: \${borderRadius};
                background: linear-gradient(145deg, #1e1b4b, #111827);
                cursor: pointer;
                overflow: hidden;
                z-index: 1;
                transition: transform 0.3s ease;
              }
      
              .wave-glow-button:hover {
                transform: scale(1.06);
              }
      
              .wave-glow-button::before {
                content: "";
                position: absolute;
                top: 0;
                left: -60%;
                width: 200%;
                height: 100%;
                background: linear-gradient(
                  120deg,
                  transparent,
                  rgba(255, 255, 255, 0.2),
                  transparent
                );
                transform: skewX(-20deg);
                animation: shimmer-wave 2.8s infinite ease-in-out;
                filter: blur(3px);
                z-index: 0;
              }
      
              .wave-glow-button::after {
                content: "";
                position: absolute;
                inset: 0;
                border-radius: \${borderRadius};
                box-shadow: 0 0 15px #a855f766, 0 0 25px #a855f733;
                z-index: -1;
                animation: pulse-glow 3.5s ease-in-out infinite;
              }
      
              .wave-glow-button span {
                position: relative;
                z-index: 2;
              }
      
              @keyframes shimmer-wave {
                0% {
                  left: -60%;
                  opacity: 0;
                }
                50% {
                  opacity: 1;
                }
                100% {
                  left: 120%;
                  opacity: 0;
                }
              }
      
              @keyframes pulse-glow {
                0%, 100% {
                  box-shadow: 0 0 15px #a855f766, 0 0 25px #a855f733;
                }
                50% {
                  box-shadow: 0 0 22px #a855f7aa, 0 0 35px #a855f755;
                }
              }
            \`}</style>
      
            <button className="wave-glow-button" onClick={onClick}>
              <span>{label}</span>
            </button>
          </>
        );
      };
      
      export default WaveGlowButton;`,

        css: `.wave-glow-button {
        position: relative;
        padding: 0.9rem 2.6rem;
        font-size: 1rem;
        font-weight: 700;
        color: #fef9c3;
        border: none;
        border-radius: 20px;
        background: linear-gradient(145deg, #1e1b4b, #111827);
        cursor: pointer;
        overflow: hidden;
        z-index: 1;
        transition: transform 0.3s ease;
      }
      
      .wave-glow-button:hover {
        transform: scale(1.06);
      }
      
      .wave-glow-button::before {
        content: "";
        position: absolute;
        top: 0;
        left: -60%;
        width: 200%;
        height: 100%;
        background: linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent);
        transform: skewX(-20deg);
        animation: shimmer-wave 2.8s infinite ease-in-out;
        filter: blur(3px);
        z-index: 0;
      }
      
      .wave-glow-button::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 20px;
        box-shadow: 0 0 15px #a855f766, 0 0 25px #a855f733;
        z-index: -1;
        animation: pulse-glow 3.5s ease-in-out infinite;
      }
      
      .wave-glow-button span {
        position: relative;
        z-index: 2;
      }
      
      @keyframes shimmer-wave {
        0% {
          left: -60%;
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          left: 120%;
          opacity: 0;
        }
      }
      
      @keyframes pulse-glow {
        0%, 100% {
          box-shadow: 0 0 15px #a855f766, 0 0 25px #a855f733;
        }
        50% {
          box-shadow: 0 0 22px #a855f7aa, 0 0 35px #a855f755;
        }
      }`,

        usage: `import { WaveGlowButton } from "react-ui-components-mudittiwari13";
      
      <WaveGlowButton
        label="Enter the Vault"
        onClick={() => console.log("Wave button clicked")}
        textColor="#fef9c3"
        borderRadius="20px"
      />;`
    },
    TrailStreakButton: {
        component: `import React from "react";
      
      const TrailStreakButton: React.FC<{
        label: string;
        onClick?: () => void;
        background?: string;
        textColor?: string;
      }> = ({
        label,
        onClick,
        background = "#1e1b4b",
        textColor = "#facc15",
      }) => {
        return (
          <>
            <style>{\`
              .trail-button {
                position: relative;
                padding: 0.75rem 2rem;
                font-size: 1rem;
                font-weight: 600;
                background: \${background};
                color: \${textColor};
                border: none;
                border-radius: 12px;
                overflow: hidden;
                cursor: pointer;
              }
      
              .trail-button::before {
                content: "";
                position: absolute;
                top: 0;
                left: -75%;
                width: 50%;
                height: 100%;
                background: linear-gradient(
                  120deg,
                  transparent,
                  rgba(255, 255, 255, 0.3),
                  transparent
                );
                transform: skewX(-20deg);
                animation: streak 2.5s infinite;
              }
      
              @keyframes streak {
                0% {
                  left: -75%;
                }
                100% {
                  left: 125%;
                }
              }
            \`}</style>
            <button className="trail-button" onClick={onClick}>
              {label}
            </button>
          </>
        );
      };
      
      export default TrailStreakButton;`,
      
        css: `.trail-button {
        position: relative;
        padding: 0.75rem 2rem;
        font-size: 1rem;
        font-weight: 600;
        background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
        color: #facc15;
        border: none;
        border-radius: 12px;
        overflow: hidden;
        cursor: pointer;
      }
      
      .trail-button::before {
        content: "";
        position: absolute;
        top: 0;
        left: -75%;
        width: 50%;
        height: 100%;
        background: linear-gradient(
          120deg,
          transparent,
          rgba(255, 255, 255, 0.3),
          transparent
        );
        transform: skewX(-20deg);
        animation: streak 2.5s infinite;
      }
      
      @keyframes streak {
        0% {
          left: -75%;
        }
        100% {
          left: 125%;
        }
      }`,
      
        usage: `import { TrailStreakButton } from "react-ui-components-mudittiwari13";
      
      <TrailStreakButton
        label="Explore More"
        onClick={() => console.log("Streak trail")}
        background="linear-gradient(135deg, #0f0c29, #302b63, #24243e)"
        textColor="#facc15"
      />;`
    },
    MagnetOrbitButton: {
        component: `
      import React, { useRef, useEffect } from "react";
      
      interface MagnetOrbitButtonProps {
        label: string;
        onClick?: () => void;
        textColor?: string;
        backgroundColor?: string;
        orbitColor?: string;
        borderRadius?: string;
        fontSize?: string;
        fontWeight?: string;
        padding?: string;
        shadowColor?: string;
        particleCount?: number;
      }
      
      const MagnetOrbitButton: React.FC<MagnetOrbitButtonProps> = ({
        label,
        onClick,
        textColor = "#fefce8",
        backgroundColor = "#1e1b4b",
        orbitColor = "#38bdf8",
        borderRadius = "18px",
        fontSize = "1.05rem",
        fontWeight = "700",
        padding = "1rem 2.8rem",
        shadowColor = "#38bdf8",
        particleCount = 18,
      }) => {
        const buttonRef = useRef<HTMLButtonElement>(null);
      
        useEffect(() => {
          const button = buttonRef.current;
          if (!button) return;
      
          const handleMouseMove = (e: MouseEvent) => {
            const rect = button.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / 10;
            const y = (e.clientY - rect.top - rect.height / 2) / 10;
            button.style.transform = \`rotateX(\${-y}deg) rotateY(\${x}deg)\`;
          };
      
          const reset = () => {
            if (button) {
              button.style.transform = "rotateX(0deg) rotateY(0deg)";
            }
          };
      
          button.addEventListener("mousemove", handleMouseMove);
          button.addEventListener("mouseleave", reset);
      
          return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", reset);
          };
        }, []);
      
        return (
          <>
            <style>{\`
              .orbit-button {
                position: relative;
                overflow: hidden;
                border: none;
                cursor: pointer;
                transform-style: preserve-3d;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                box-shadow: 0 0 25px var(--shadow-color, #a855f755);
                animation: glowPulse 4s ease-in-out infinite;
                z-index: 1;
              }
      
              .orbit-button:hover {
                transform: scale(1.03);
                box-shadow: 0 0 40px var(--shadow-color, #a855f7aa);
              }
      
              .particle {
                position: absolute;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: var(--orbit-color, #38bdf8);
                opacity: 0.8;
                animation: randomMove 3s ease-in-out infinite alternate;
                z-index: 2;
                transition: transform 0.4s ease, box-shadow 0.4s ease;
              }
      
              .orbit-button:hover .particle {
                transform: scale(1.4);
                box-shadow: 0 0 8px var(--orbit-color, #38bdf8);
              }
      
              @keyframes glowPulse {
                0%, 100% { box-shadow: 0 0 20px var(--shadow-color, #a855f733); }
                50% { box-shadow: 0 0 35px var(--shadow-color, #a855f766); }
              }
      
              @keyframes randomMove {
                0% { transform: translate(0, 0); }
                100% { transform: translate(var(--x), var(--y)); }
              }
            \`}</style>
      
            <button
              ref={buttonRef}
              className="orbit-button"
              onClick={onClick}
              style={{
                color: textColor,
                backgroundColor,
                borderRadius,
                fontSize,
                fontWeight,
                padding,
                ["--orbit-color" as any]: orbitColor,
                ["--shadow-color" as any]: shadowColor,
              }}
            >
              {label}
              {Array.from({ length: particleCount }).map((_, i) => (
                <span
                  key={i}
                  className="particle"
                  style={{
                    top: \`\${Math.random() * 80 + 10}%\`,
                    left: \`\${Math.random() * 80 + 10}%\`,
                    animationDelay: \`\${Math.random() * 2}s\`,
                    animationDuration: \`\${2.5 + Math.random()}s\`,
                    ["--x" as any]: \`\${Math.random() * 100 - 50}px\`,
                    ["--y" as any]: \`\${Math.random() * 100 - 50}px\`,
                  }}
                />
              ))}
            </button>
          </>
        );
      };
      
      export default MagnetOrbitButton;
      `,
        css: `/* No external CSS needed. All styles are scoped within the component */`,
        usage: `<MagnetOrbitButton
        label="Solar Flare"
        onClick={() => console.log("🌞 Flare ignited")}
        textColor="#fef9c3"
        backgroundColor="#111827"
        orbitColor="#facc15"
        shadowColor="#facc15"
        borderRadius="26px"
        fontSize="1.2rem"
        fontWeight="800"
        padding="1.2rem 3.2rem"
        particleCount={24}
      />`,
    },
    ShockWaveButton: {
        component: `
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
          <style>{\`
            .shockwave-button {
              position: relative;
              overflow: hidden;
              border: none;
              cursor: pointer;
              color: \${textColor};
              background-color: \${backgroundColor};
              border-radius: \${borderRadius};
              font-size: \${fontSize};
              font-weight: \${fontWeight};
              padding: \${padding};
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
              background: radial-gradient(circle, \${waveColor}CC 0%, transparent 70%);
              animation: wave-pulse 2.4s ease-in-out infinite;
              opacity: 0.7;
            }
    
            .shockwave-button::after {
              background: radial-gradient(circle, \${waveColor}AA 0%, transparent 60%);
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
          \`}</style>
    
          <button className="shockwave-button" onClick={onClick}>
            {label}
          </button>
        </>
      );
    };
    
    export default ShockWaveButton;
    `,
        css: `/* No external CSS required; scoped <style> is included within the component */`,
        usage: `<ShockWaveButton
      label="Blast Wave"
      onClick={() => console.log("💥 Shockwave activated")}
      textColor="#fefce8"
      backgroundColor="#0f172a"
      waveColor="#38bdf8"
      borderRadius="18px"
      fontSize="1.1rem"
      fontWeight="800"
      padding="1.1rem 2.8rem"
    />`,
    },
    QuantumBlobButton: {
        component: `
    import React from "react";
    
    const QuantumBlobButton: React.FC<{
      label: string;
      onClick?: () => void;
      textColor?: string;
      backgroundColor?: string;
      glowColor?: string;
      borderRadius?: string;
      fontSize?: string;
      fontWeight?: string;
      padding?: string;
    }> = ({
      label,
      onClick,
      textColor = "#ffffff",
      backgroundColor = "#0f172a",
      glowColor = "#a855f7",
      borderRadius = "20px",
      fontSize = "1.05rem",
      fontWeight = "700",
      padding = "1rem 2.6rem",
    }) => {
      return (
        <>
          <style>{\`
            .quantum-button {
              position: relative;
              border: none;
              cursor: pointer;
              overflow: hidden;
              z-index: 1;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
    
            .quantum-button:hover {
              transform: scale(1.05);
              box-shadow: 0 0 25px \${glowColor}33;
            }
    
            .quantum-button::before {
              content: '';
              position: absolute;
              top: -30%;
              left: -30%;
              width: 200%;
              height: 200%;
              background: radial-gradient(circle, \${glowColor} 30%, transparent 70%);
              animation: blob-float 6s ease-in-out infinite;
              filter: blur(60px);
              opacity: 0.5;
              z-index: -2;
            }
    
            .quantum-button::after {
              content: '';
              position: absolute;
              inset: 0;
              background: linear-gradient(135deg, \${glowColor}22 0%, transparent 100%);
              z-index: -1;
              border-radius: \${borderRadius};
              backdrop-filter: blur(8px);
            }
    
            @keyframes blob-float {
              0% {
                transform: translate(0, 0) scale(1);
              }
              33% {
                transform: translate(15px, -10px) scale(1.1);
              }
              66% {
                transform: translate(-10px, 10px) scale(1.2);
              }
              100% {
                transform: translate(0, 0) scale(1);
              }
            }
          \`}</style>
    
          <button
            className="quantum-button"
            onClick={onClick}
            style={{
              color: textColor,
              backgroundColor,
              borderRadius,
              fontSize,
              fontWeight,
              padding,
            }}
          >
            {label}
          </button>
        </>
      );
    };
    
    export default QuantumBlobButton;
    `,
        css: `/* No external CSS required. All styles are scoped within the component */`,
        usage: `<QuantumBlobButton
      label="Start Simulation"
      onClick={() => console.log("Quantum Fired")}
      textColor="#e0f2fe"
      backgroundColor="#0f0c29"
      glowColor="#38bdf8"
      borderRadius="22px"
      fontSize="1.1rem"
      fontWeight="800"
      padding="1.1rem 2.8rem"
    />`,
    },
    CyberGlitchButton: {
        component: `
    import React from "react";
    
    const CyberGlitchButton: React.FC<{
      label: string;
      onClick?: () => void;
    }> = ({ label, onClick }) => {
      return (
        <>
          <style>{\`
            .cyber-button {
              position: relative;
              padding: 0.85rem 2.5rem;
              font-size: 1rem;
              font-weight: bold;
              color: #0ff;
              background: #000;
              border: 2px solid #0ff;
              text-transform: uppercase;
              overflow: hidden;
              border-radius: 10px;
              cursor: pointer;
            }
    
            .cyber-button::before,
            .cyber-button::after {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background: repeating-linear-gradient(
                0deg,
                rgba(255, 255, 255, 0.05),
                rgba(255, 255, 255, 0.05) 2px,
                transparent 2px,
                transparent 4px
              );
              pointer-events: none;
            }
    
            .cyber-button::after {
              mix-blend-mode: color-dodge;
              animation: glitch-jump 0.5s infinite alternate-reverse;
            }
    
            .cyber-button:hover {
              box-shadow: 0 0 20px #0ff, inset 0 0 20px #0ff;
              animation: glitch-text 0.2s steps(2, end) infinite;
            }
    
            @keyframes glitch-jump {
              0% {
                transform: translate(0);
              }
              100% {
                transform: translate(2px, -2px);
              }
            }
    
            @keyframes glitch-text {
              0% {
                text-shadow: 2px 0 red;
              }
              50% {
                text-shadow: -2px 0 blue;
              }
              100% {
                text-shadow: 2px 0 red;
              }
            }
          \`}</style>
          <button className="cyber-button" onClick={onClick}>
            {label}
          </button>
        </>
      );
    };
    
    export default CyberGlitchButton;
    `,
        css: `/* No external CSS required; all styles are scoped inside the <style> tag */`,
        usage: `<CyberGlitchButton
      label="Initiate Hack"
      onClick={() => console.log("🧠 Cyber command triggered")}
    />`,
    },
    StarPulseButton: {
        component: `
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
          <style>{\`
            .star-button {
              position: relative;
              overflow: hidden;
              border: none;
              color: \${textColor};
              background-color: \${backgroundColor};
              border-radius: \${borderRadius};
              font-size: \${fontSize};
              font-weight: \${fontWeight};
              padding: \${padding};
              cursor: pointer;
              z-index: 1;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
    
            .star-button:hover {
              transform: scale(1.05);
              box-shadow: 0 0 25px \${starColor}55;
            }
    
            .star-pulse {
              position: absolute;
              width: 5px;
              height: 5px;
              border-radius: 50%;
              background: \${starColor};
              opacity: 0.6;
              animation: star-burst 2.5s ease-in-out infinite;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
    
            .star-button:hover .star-pulse {
              transform: scale(1.3);
              box-shadow: 0 0 8px \${starColor};
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
          \`}</style>
    
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
                  animationDelay: \`\${Math.random() * 2}s\`,
                  ["--x" as any]: \`\${Math.random() * 80 - 40}px\`,
                  ["--y" as any]: \`\${Math.random() * 80 - 40}px\`,
                }}
              />
            ))}
          </button>
        </>
      );
    };
    `,
        css: `/* No external CSS needed — all styles are encapsulated in the component */`,
        usage: `<StarPulseButton
      label="Activate Pulse"
      onClick={() => console.log("Pulse activated")}
      textColor="#fff7ed"
      backgroundColor="#1a202c"
      starColor="#facc15"
      borderRadius="22px"
      fontSize="1.1rem"
      fontWeight="800"
      padding="1.2rem 3rem"
      particleCount={20}
    />`,
    },
    CometTrailButton: {
        component: `
    import React, { useRef } from "react";
    
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
          <style>{\`
            .comet-button {
              position: relative;
              overflow: hidden;
              border: 2px solid \${cometColor};
              color: \${textColor};
              background-color: \${backgroundColor};
              border-radius: \${borderRadius};
              font-size: \${fontSize};
              font-weight: \${fontWeight};
              padding: \${padding};
              cursor: pointer;
              z-index: 1;
              transition: box-shadow 0.4s ease, transform 0.3s ease;
            }
    
            .comet-button:hover {
              box-shadow: 0 0 20px \${cometColor}88, 0 0 40px \${cometColor}44;
              transform: scale(1.03);
            }
    
            .comet-particle {
              position: absolute;
              width: 2px;
              height: 10px;
              background: \${cometColor};
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
          \`}</style>
    
          <button className="comet-button" onClick={onClick} ref={btnRef}>
            {label}
            {Array.from({ length: particleCount }).map((_, i) => (
              <span
                key={i}
                className="comet-particle"
                style={{
                  top: \`\${Math.random() * 100}%\`,
                  left: \`\${Math.random() * 100}%\`,
                  animationDelay: \`\${Math.random() * 2}s\`,
                }}
              />
            ))}
          </button>
        </>
      );
    };
    `,
        css: `/* All styles are included within the component's <style> block. */`,
        usage: `<CometTrailButton
      label="Engage Engine"
      onClick={() => console.log("Engine engaged")}
      textColor="#e0f2fe"
      backgroundColor="#0f172a"
      cometColor="#0ea5e9"
      borderRadius="20px"
      fontSize="1.1rem"
      fontWeight="800"
      padding="1rem 2.6rem"
      particleCount={20}
    />`,
      },

};
