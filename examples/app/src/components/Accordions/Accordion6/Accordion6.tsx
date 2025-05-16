import React, { useState } from "react";

interface Accordion6Item {
  title: string;
  content: string;
  image: string;
  icon: string;
}

interface Accordion6Props {
  items: Accordion6Item[];
  height?: string;
  rounded?: string;
  textColor?: string;
  activeTextColor?: string;
  overlayColor?: string;
  activeGlowColor?: string;
  transitionDuration?: number;
}

const Accordion6: React.FC<Accordion6Props> = ({
  items,
  height = "h-[500px] sm:h-[480px] md:h-[500px]",
  rounded = "rounded-3xl",
  textColor = "#eeeeee",
  activeTextColor = "#ffffff",
  overlayColor = "rgba(0, 0, 0, 0.15)",
  activeGlowColor = "#00ffe1",
  transitionDuration = 800,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      setVisibleIndex(null); // hide text and heading first
      setTimeout(() => setActiveIndex(null), 100); // then collapse
    } else {
      setActiveIndex(index); // start expanding
      setTimeout(() => setVisibleIndex(index), transitionDuration - 100); // show after expand
    }
  };

  return (
    <div className={`flex w-full max-w-7xl mx-auto md:gap-4 gap-6 md:px-4 px-6 ${height}`}>
      <style>{`
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
          animation: fade-slide 0.6s ease-out both;
        }
      `}</style>

      {items.map((item, index) => {
        const isActive = index === activeIndex;
        const isVisible = index === visibleIndex;

        return (
          <div
            key={index}
            onClick={() => handleToggle(index)}
            className={`relative group cursor-pointer overflow-hidden transform-gpu transition-all ${rounded} ${
              isActive ? "flex-[20] scale-[1.03] z-20" : "flex-[1] hover:scale-[1.01]"
            }`}
            style={{
              boxShadow: isActive
                ? `0 0 40px ${activeGlowColor}`
                : "0 8px 25px rgba(0, 0, 0, 0.1)",
              transition: `all ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-${transitionDuration} ${
                isActive ? "brightness-75 scale-110" : "brightness-95"
              }`}
            />
            <div
              className={`absolute inset-0 z-10 transition-all duration-${transitionDuration} ${
                isActive
                  ? "bg-black/40 backdrop-blur-sm"
                  : "bg-gradient-to-t from-black/20 to-transparent"
              }`}
            />
            <div
              className="absolute bottom-0 z-20 w-full md:px-4 px-6 md:pb-4 pb-6 md:pt-3 pt-4"
              style={{
                color: isActive ? activeTextColor : textColor,
                transition: `all ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
              }}
            >
              <div
                className={`transition-all duration-${transitionDuration} ease-in-out ${
                  isActive
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-8 pointer-events-none"
                }`}
                style={{ transitionProperty: "opacity, transform" }}
              >
                {isVisible && (
                  <div className="animate-fade-slide">
                    <div className="flex items-center gap-2 md:gap-3 text-sm md:text-3xl font-semibold mb-2">
                      <span className="text-sm md:text-3xl animate-pulse">{item.icon}</span>
                      <h2 className="truncate">{item.title}</h2>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-white/85 leading-relaxed transition-opacity duration-500 ease-in-out">
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            </div>
            {isActive && (
              <div
                className="absolute inset-0 pointer-events-none border-2 border-cyan-300/20 rounded-3xl"
                style={{
                  boxShadow: `inset 0 0 30px ${activeGlowColor}`,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion6;
