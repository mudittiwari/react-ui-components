import React, { useState } from "react";

interface AccordionItem {
    title: string;
    content: string;
    image: string;
    icon?: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
    textColor?: string;
    activeTextColor?: string;
    glowColor?: string;
    overlayColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    transitionDuration?: number;
    rounded?: string;
    titleFontSize?: string;
    contentFontSize?: string;
    contentPadding?: string;
    imageHeight?: string;
    blurAmount?: number;
    titleGradient?: boolean;
}

const Accordion8: React.FC<AccordionProps> = ({
    items,
    textColor = "#e0d0ff",
    activeTextColor = "#ffffff",
    glowColor = "#ff00d4",
    overlayColor = "rgba(10, 0, 30, 0.4)",
    backgroundColor = "rgba(255,255,255,0.03)",
    borderColor = "#ffffff22",
    transitionDuration = 600,
    rounded = "rounded-3xl",
    titleFontSize = "text-xl sm:text-2xl md:text-3xl",
    contentFontSize = "text-sm sm:text-base",
    contentPadding = "p-5 sm:p-8",
    imageHeight = "h-48 sm:h-auto",
    blurAmount = 14,
    titleGradient = true,
}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="w-full max-w-6xl mx-auto space-y-6 px-4">
            <style>
                {`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-slide-up {
          animation: fadeSlideUp 0.6s ease-in-out both;
        }
        .text-gradient {
          background: linear-gradient(to right, #ff00d4, #c500ff);
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
                        onClick={() => setActiveIndex(isActive ? null : index)}
                        className={`relative group flex flex-col sm:flex-row transition-all transform-gpu border ${rounded} overflow-hidden hover:scale-[1.01]`}
                        style={{
                            background: backgroundColor,
                            borderColor,
                            backdropFilter: `blur(${blurAmount}px)`,
                            WebkitBackdropFilter: `blur(${blurAmount}px)`,
                            boxShadow: isActive
                                ? `0 0 40px ${glowColor}, inset 0 0 12px ${glowColor}55`
                                : "0 6px 20px rgba(0,0,0,0.3)",
                            transition: `all ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                        }}
                    >
                        <div className={`relative w-full sm:w-48 ${imageHeight} shrink-0`}>
                            <img
                                src={item.image}
                                alt={item.title}
                                className={`w-full h-full object-cover transition-all duration-700 ${isActive ? "brightness-110 scale-105" : "brightness-[.6] blur-[1px]"
                                    }`}
                            />
                            <div className="absolute inset-0" style={{ background: overlayColor }} />
                        </div>
                        <div
                            className={`flex-1 flex flex-col ${isActive ? "justify-start" : "justify-center"
                                } transition-all duration-500 ${contentPadding}`}
                        >
                            <div
                                className={`font-bold tracking-normal flex items-center gap-2 ${titleFontSize} ${titleGradient && isActive ? "text-gradient" : ""
                                    }`}
                                style={{
                                    color: isActive ? activeTextColor : textColor,
                                    lineHeight: "1.2",
                                    wordBreak: "break-word",
                                }}
                            >
                                {item.icon && <span className="text-xl animate-pulse">{item.icon}</span>}
                                {item.title}
                            </div>
                            <div
                                className={`h-[2px] w-20 rounded-full my-3 transition-all ${isActive
                                        ? "bg-gradient-to-r from-pink-500 to-purple-400 scale-x-100"
                                        : "bg-white/10 scale-x-0"
                                    } origin-left duration-500`}
                            />
                            <div
                                className={`transition-all ease-in-out overflow-hidden ${isActive ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0"
                                    }`}
                                style={{
                                    transform: isActive ? "translateY(0)" : "translateY(-10px)",
                                }}
                            >
                                <div className="fade-slide-up bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-inner text-white/90 space-y-4 p-4 sm:p-6 mt-2">
                                    <h3 className="text-lg font-semibold text-gradient">Key Features</h3>
                                    <ul className={`space-y-2 ${contentFontSize} leading-relaxed`}>
                                        {item.content.split("\n").map((line, idx) => {
                                            if (line.trim().startsWith("- ")) {
                                                return (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-3 fade-slide-up"
                                                        style={{ animationDelay: `${0.1 * idx}s` }}
                                                    >
                                                        <span className="mt-1 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 shadow-sm" />
                                                        <span>{line.replace("- ", "")}</span>
                                                    </li>
                                                );
                                            }
                                            return (
                                                <p key={idx} className="text-white/80 fade-slide-up">
                                                    {line}
                                                </p>
                                            );
                                        })}
                                    </ul>
                                    <p className="text-sm sm:text-base text-white/60 italic fade-slide-up">
                                        Designed for intelligent systems and high-speed clinical workflows.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Accordion8;
