import React, { useState } from "react";

interface Accordion7Item {
  title: string;
  content: string;
  image: string;
  icon?: React.ReactNode;
}

interface Accordion7Props {
  items: Accordion7Item[];
  textColor?: string;
  activeTextColor?: string;
  overlayColor?: string;
  glowColor?: string;
  transitionDuration?: number;
  rounded?: string;
  titleFontSize?: string;
  contentFontSize?: string;
  titleGradient?: boolean;
  contentPadding?: string;
  cardScale?: number;
  hoverScale?: number;
  blurAmount?: number;
  titleClassName?: string;
  contentClassName?: string;
  containerClassName?: string;
}

const Accordion7: React.FC<Accordion7Props> = ({
  items,
  textColor = "#d0f0ff",
  activeTextColor = "#ffffff",
  overlayColor = "rgba(0,0,0,0.4)",
  glowColor = "#00ffe1",
  transitionDuration = 700,
  rounded = "rounded-3xl",
  titleFontSize = "text-base sm:text-lg md:text-2xl",
  contentFontSize = "text-xs sm:text-sm md:text-base",
  titleGradient = true,
  contentPadding = "p-4 sm:p-6 md:p-8",
  cardScale = 1.02,
  hoverScale = 1.01,
  blurAmount = 10,
  titleClassName = "",
  contentClassName = "",
  containerClassName = "",
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={`w-full max-w-5xl mx-auto space-y-6 px-4 ${containerClassName}`}>
      <style>
        {`
          @keyframes fade-slide {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-slide {
            animation: fade-slide 0.5s ease-out both;
          }
          .text-gradient {
            background: linear-gradient(to right, #00ffe1, #8ef9ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>

      {items.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            className={`relative overflow-hidden group ${rounded} transition-all transform-gpu duration-${transitionDuration} cursor-pointer perspective-1000`}
            onClick={() => setActiveIndex(isActive ? null : index)}
            style={{
              transform: isActive ? `scale(${cardScale})` : `scale(1)`,
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-700 group-hover:scale-110"
            />

            <div
              className="absolute inset-0 transition-all duration-700"
              style={{
                background: overlayColor,
                backdropFilter: `blur(${blurAmount}px)`,
                WebkitBackdropFilter: `blur(${blurAmount}px)`,
              }}
            />

            {isActive && (
              <div
                className="absolute -inset-1 z-0 pointer-events-none rounded-[inherit]"
                style={{
                  background: `radial-gradient(circle at top left, ${glowColor}33 0%, transparent 80%)`,
                  boxShadow: `0 0 30px ${glowColor}aa, inset 0 0 20px ${glowColor}33`,
                  filter: "blur(3px)",
                  borderRadius: "inherit",
                }}
              />
            )}

            <div className={`relative z-10 ${contentPadding}`}>
              <div
                className={`flex items-center gap-3 font-bold tracking-tight mb-2 sm:mb-3 transition-all duration-500 ${titleFontSize} ${titleGradient && isActive ? "text-gradient" : ""} ${titleClassName}`}
                style={{ color: isActive ? activeTextColor : textColor }}
              >
                {item.icon && <span className="text-xl animate-pulse">{item.icon}</span>}
                <span className="truncate">{item.title}</span>
              </div>

              <div
                className={`transition-all duration-${transitionDuration} ease-in-out ${isActive ? "max-h-[320px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-3"} ${contentClassName}`}
              >
                <p className={`text-white/90 leading-relaxed ${contentFontSize} animate-fade-slide`}>
                  {item.content}
                </p>
              </div>
            </div>

            {isActive && (
              <div
                className="absolute inset-0 pointer-events-none rounded-[inherit]"
                style={{
                  boxShadow: `inset 0 0 30px ${glowColor}40, 0 0 60px ${glowColor}30`,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion7;
