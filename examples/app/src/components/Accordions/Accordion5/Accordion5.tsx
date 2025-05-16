import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
  icon: string;
}

interface Accordion5Props {
  items: AccordionItem[];
  bgColor?: string;
  activeColor?: string;
  textColor?: string;
  activeTextColor?: string;
  iconColor?: string;
  toggleIcon?: string;
  toggleIconColor?: string;
  height?: string;
  rounded?: string;
  blur?: boolean;
  shadowColor?: string;
  activeShadowColor?: string;
  transitionDuration?: number;
  maxContentHeight?: string;
  iconRotation?: boolean;
  iconScale?: boolean;
  contentAnimation?: "slide" | "fade" | "translate";
  padding?: string;
  fontSize?: string;
  spacing?: string;
}

const Accordion5: React.FC<Accordion5Props> = ({
  items,
  bgColor = "rgba(255, 255, 255, 0.1)",
  activeColor = "#d1f1ff",
  textColor = "#fff",
  activeTextColor = "#fff",
  iconColor = "#fff",
  toggleIcon = "▼",
  toggleIconColor = "#fff",
  height = "h-auto",
  rounded = "rounded-xl",
  blur = true,
  shadowColor = "#00000030",
  activeShadowColor = "#00bcd4",
  transitionDuration = 700,
  maxContentHeight = "max-h-96",
  iconRotation = true,
  iconScale = true,
  contentAnimation = "translate",
  padding = "p-4 md:p-5",
  fontSize = "text-base sm:text-lg",
  spacing = "mb-4"
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const getContentClasses = (isOpen: boolean) => {
    const base = `transition-all duration-${transitionDuration} ease-in-out overflow-hidden px-4 sm:px-5 pb-4`;
    const animations = {
      slide: isOpen ? `${maxContentHeight} opacity-100 scale-100` : "max-h-0 opacity-0 scale-90",
      fade: isOpen ? "opacity-100 max-h-full scale-100" : "opacity-0 max-h-0 scale-95",
      translate: isOpen ? `${maxContentHeight} opacity-100 translate-y-0 scale-100` : "max-h-0 opacity-0 translate-y-4 scale-95",
    };
    return `${base} ${animations[contentAnimation]}`;
  };

  return (
    <div
      className={`w-full max-w-4xl mx-auto pt-6 pb-4 px-4 md:px-6 ${height} ${rounded} ${
        blur ? "backdrop-blur-md" : ""
      }`}
      style={{ backgroundColor: bgColor }}
    >
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className={`${spacing} transition-all duration-${transitionDuration} overflow-hidden ${rounded} shadow-xl group transform-gpu hover:scale-[1.015] hover:rotate-[0.3deg]`}
            style={{
              backgroundColor: isOpen ? activeColor : bgColor,
              color: isOpen ? activeTextColor : textColor,
              boxShadow: isOpen
                ? `0 0 18px 4px ${activeShadowColor}`
                : `0 4px 12px ${shadowColor}`,
              transitionDelay: `${index * 80}ms`,
            }}
          >
            <button
              onClick={() => setActiveIndex(isOpen ? null : index)}
              className={`w-full flex items-center justify-between ${padding} ${fontSize} font-semibold transition-all duration-500 relative z-10`}
              style={{ color: isOpen ? activeTextColor : textColor }}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`text-2xl transition-all duration-700 transform relative ${
                    isOpen && iconRotation ? "rotate-[360deg]" : ""
                  } ${isOpen && iconScale ? "scale-[1.25]" : "scale-100"}`}
                  style={{ color: iconColor }}
                >
                  <span
                    className={`absolute -inset-1 rounded-full blur-md opacity-60 transition-opacity duration-700 ${
                      isOpen ? "bg-cyan-400 opacity-60" : "opacity-0"
                    }`}
                  ></span>
                  <span className="relative z-10">{item.icon}</span>
                </span>
                {item.title}
              </span>

              <span
                className={`transition-all duration-500 transform relative ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                style={{ color: toggleIconColor }}
              >
                <span
                  className={`absolute inset-0 rounded-full blur-sm opacity-40 ${
                    isOpen ? "bg-gradient-to-r from-pink-500 to-yellow-500" : ""
                  }`}
                ></span>
                <span className="relative z-10">{toggleIcon}</span>
              </span>
            </button>

            <div className={`${getContentClasses(isOpen)} transition-transform origin-top`}>
              <p className="text-sm md:text-base leading-relaxed">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion5;
