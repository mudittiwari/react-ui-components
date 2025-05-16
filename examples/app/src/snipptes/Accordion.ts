export const AccordionCodeSnippets: Record<"Accordion1" | "Accordion2" | "Accordion3" | "Accordion4" | "Accordion5" | "Accordion6" | "Accordion7" | "Accordion8" , { component: string; css: string; usage: string }> = {
    Accordion1: {
        component: `import React, { useState } from "react";
    
    interface AccordionItem {
      title: string;
      content: string;
    }
    
    interface AccordionProps {
      items: AccordionItem[];
      multipleOpen?: boolean; // Allow multiple open accordions
      bgColor?: string; // Background color
      textColor?: string; // Text color
      borderColor?: string; // Border color
      hoverBgColor?: string; // Hover background color for header
      activeBgColor?: string; // Active item background color
      icon?: string; // Custom icon
    }
    
    const Accordion1: React.FC<AccordionProps> = ({
      items,
      multipleOpen = false,
      bgColor = "bg-[#F8FAFC] dark:bg-[#1E293B]",
      textColor = "text-gray-900 dark:text-gray-200",
      borderColor = "border-[#4F46E5] dark:border-[#A78BFA]",
      hoverBgColor = "hover:bg-gradient-to-r hover:from-[#FF5733] hover:to-[#FF8C00] dark:hover:from-[#8E44AD] dark:hover:to-[#3498DB]",
      activeBgColor = "bg-gradient-to-r from-[#FF8C00] to-[#FF2D55] text-white shadow-lg",
      icon = "🔽",
    }) => {
      const [openIndexes, setOpenIndexes] = useState<number[]>([]);
    
      const toggleAccordion = (index: number) => {
        if (multipleOpen) {
          setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
          );
        } else {
          setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
        }
      };
    
      return (
        <div className="w-full max-w-2xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={\`border \${borderColor} rounded-xl overflow-hidden shadow-xl transition-all duration-500 \${openIndexes.includes(index) ? activeBgColor : bgColor}\`}
            >
              {/* Accordion Header with Improved Hover Effect */}
              <button
                className={\`w-full flex justify-between items-center p-5 text-lg font-semibold transition-all duration-300 rounded-xl \${hoverBgColor}\`}
                onClick={() => toggleAccordion(index)}
              >
                <span className={\`\${textColor}\`}>{item.title}</span>
                <span
                  className={\`text-xl transform transition-transform duration-300 \${openIndexes.includes(index) ? "rotate-180 scale-110" : "rotate-0"}\`}
                >
                  {icon}
                </span>
              </button>
    
              {/* Accordion Content with Animation */}
              <div
                className={\`grid transition-all duration-500 ease-in-out \${openIndexes.includes(index) ? "grid-rows-[1fr] max-h-96 opacity-100 scale-y-100" : "grid-rows-[0fr] max-h-0 opacity-0 scale-y-0"}\`}
              >
                <div className={\`overflow-hidden px-5 pb-4 \${textColor} transition-opacity duration-500\`}>
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    };
    
    export default Accordion1;
    `,
        css: ``,
        usage: `{/* <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-10">
          <Accordion1 
        items={accordionData}
        multipleOpen={true} 
        bgColor="bg-[#F1F5F9] dark:bg-[#111827]"
        textColor="text-gray-900 dark:text-gray-200"
        borderColor="border-[#EC4899] dark:border-[#A855F7]"
        hoverBgColor="hover:bg-gradient-to-r hover:from-[#FF5733] hover:to-[#FF8C00] dark:hover:from-[#8E44AD] dark:hover:to-[#3498DB]"
        activeBgColor="bg-gradient-to-r from-[#06B6D4] to-[#9333EA] text-white shadow-lg"
        icon="✨"
      />
        </div> */}`,
    },

    Accordion2: {
        component: `import React, { useState, useEffect, useRef } from "react";

interface AccordionItem {
  title: string;
  content: string;
  image: string;
  icon: string;
}

interface StackAccordionProps {
  items: AccordionItem[];
  bgColor?: string;
  headerColor?: string;
  textColor?: string;
  borderColor?: string;
  activeHeaderColor?: string;
  activeTextColor?: string;
  iconRotate?: boolean;
  stackOffsetX?: number;
  stackOffsetY?: number;
  animationDuration?: number;
  shadowColor?: string;
  height?: string;
}

const Accordion2: React.FC<StackAccordionProps> = ({
  items,
  bgColor = "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  headerColor = "#ff4b2b",
  textColor = "#fff",
  borderColor = "#ff6b6b",
  activeHeaderColor = "#ffcc00",
  activeTextColor = "#222",
  iconRotate = true,
  stackOffsetX = -6,
  stackOffsetY = 10,
  animationDuration = 700,
  shadowColor = "#ffeb3b",
  height = "h-[500px]"
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState(220);

  useEffect(() => {
    if (imageContainerRef.current) {
      const newHeight = 180 + items.length * 20;
      setImageHeight(newHeight);
    }
  }, [items.length]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start p-6 rounded-lg shadow-2xl"
      style={{ background: bgColor }}
    >
      <div
        className="relative w-full md:w-1/2 flex justify-center items-center"
        ref={imageContainerRef}
      >
        <div className="relative w-[80%]" style={{ height: \`\${imageHeight}px\` }}>
          {items.map((item, index) => (
            <div
              key={index}
              className={\`absolute w-full transition-all duration-\${animationDuration} rounded-lg overflow-hidden shadow-xl border\`}
              style={{
                borderColor: borderColor,
                top: \`\${index * stackOffsetY}px\`,
                transform: openIndex === index
                  ? \`translateY(-5px) translateX(0px) scale(1.1)\`
                  : \`translateY(\${index * stackOffsetY}px) translateX(\${index * stackOffsetX}px) scale(0.95)\`,
                opacity: openIndex === index ? 1 : 0.8,
                zIndex: openIndex === index ? 30 : 20 - index,
                boxShadow: openIndex === index ? \`0px 4px 10px \${shadowColor}\` : "none",
              }}
            >
              <img
                src={item.image}
                alt="Accordion Image"
                className={\`w-full \${height} object-cover rounded-lg\`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={\`relative transition-all duration-\${animationDuration} transform rounded-xl overflow-hidden shadow-lg\`}
            style={{
              backgroundColor: openIndex === index ? activeHeaderColor : headerColor,
              color: openIndex === index ? activeTextColor : textColor,
              border: \`1px solid \${borderColor}\`,
              boxShadow: openIndex === index ? \`0px 4px 10px \${shadowColor}\` : "none",
            }}
          >
            <button
              className="w-full flex justify-between items-center p-5 font-semibold text-lg rounded-lg transition-all duration-300 hover:shadow-xl"
              onClick={() => toggleAccordion(index)}
            >
              <span className="flex items-center gap-2">
                <span
                  className={\`text-2xl transition-transform duration-500 \${openIndex === index && iconRotate ? "rotate-180 scale-125" : "scale-100"}\`}
                >
                  {item.icon}
                </span>
                {item.title}
              </span>

              <span
                className={\`text-xl transform transition-transform duration-300 \${openIndex === index ? "rotate-180" : "rotate-0"}\`}
              >
                ⌵
              </span>
            </button>
            <div
              className={\`relative overflow-hidden transition-all duration-\${animationDuration} rounded-lg \${openIndex === index ? "max-h-96 opacity-100 p-5 border" : "max-h-0 opacity-0"}\`}
              style={{
                backgroundColor: bgColor,
                borderColor: borderColor,
                color: textColor,
              }}
            >
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion2;
`,
        css: `/* No css for this component */`,
        usage: `<div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 p-10">
          <Accordion2
            items={accordionData}
            bgColor="linear-gradient(135deg, #1E3A8A, #3B82F6)"
            headerColor="#2563EB"
            textColor="#F3F4F6"
            borderColor="#93C5FD"
            activeHeaderColor="#60A5FA"
            activeTextColor="#222"
            iconRotate={true}
            animationDuration={500}
            shadowColor="#2563EB"
            height="h-72"
          />
        </div>`,
    },

    Accordion3: {
        component: `import React, { useState } from "react";
import "./style.css";

interface AccordionItem {
    title: string;
    content: string;
    image: string;
    icon: string;
}

interface StackAccordionProps {
    items: AccordionItem[];
    bgColor?: string;
    headerColor?: string;
    textColor?: string;
    borderColor?: string;
    activeHeaderColor?: string;
    activeTextColor?: string;
    iconRotate?: boolean;
    animationDuration?: number;
    shadowColor?: string;
    height?: string;
}

const Accordion3: React.FC<StackAccordionProps> = ({
    items,
    bgColor = "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    headerColor = "#ff4b2b",
    textColor = "#fff",
    borderColor = "#ff6b6b",
    activeHeaderColor = "#ffcc00",
    activeTextColor = "#222",
    iconRotate = true,
    animationDuration = 700,
    shadowColor = "#ffeb3b",
    height = "h-[500px]"
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [rotation, setRotation] = useState(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
        setRotation(index * -90);
    };

    return (
        <div className={\`relative w-full max-w-6xl flex flex-col md:flex-row gap-10 items-center p-6 rounded-lg shadow-2xl \${height}\`} style={{ background: bgColor }}>
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
                <div className="image-container" style={{ perspective: "1200px", transformStyle: "preserve-3d" }}>
                    <div className="image-rotator" style={{ transform: \`rotateY(\${rotation}deg)\`, transition: "transform 1s ease-in-out", position: "absolute", top: "50%", left: "50%", transformOrigin: "center", transformStyle: "preserve-3d", translate: "-50% -50%" }}>
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="image-card"
                                style={{ transform: \`rotateY(\${index * (360 / items.length)}deg) translateZ(200px)\`, transition: "transform 1s ease-in-out", position: "absolute", top: "50%", left: "50%", transformOrigin: "center", translate: "-50% -50%" }}
                            >
                                <img src={item.image} alt="Accordion Image" className="object-cover w-[300px] h-[300px] rounded-lg shadow-2xl" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="relative transition-all rounded-xl overflow-hidden shadow-lg"
                        style={{
                            backgroundColor: openIndex === index ? activeHeaderColor : headerColor,
                            color: openIndex === index ? activeTextColor : textColor,
                            border: \`1px solid \${borderColor}\`,
                            boxShadow: openIndex === index ? \`0px 4px 10px \${shadowColor}\` : "none",
                        }}
                    >
                        <button
                            className="w-full flex justify-between items-center p-5 font-semibold text-lg rounded-lg transition-all duration-300 hover:shadow-xl"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="flex items-center gap-2">
                                <span className={\`text-2xl transition-transform duration-500 \${openIndex === index && iconRotate ? "rotate-180 scale-125" : "scale-100"}\`}>
                                    {item.icon}
                                </span>
                                {item.title}
                            </span>
                            <span className={\`text-xl transform transition-transform duration-300 \${openIndex === index ? "rotate-180" : "rotate-0"}\`}>⌵</span>
                        </button>
                        <div
                            className={\`relative overflow-hidden transition-all rounded-lg \${openIndex === index ? "max-h-96 opacity-100 p-5 border" : "max-h-0 opacity-0"}\`}
                            style={{
                                backgroundColor: bgColor,
                                borderColor: borderColor,
                                color: textColor,
                            }}
                        >
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion3;
`,
        css: `/* Accordion3 Styles */
  .image-container {
    width: 350px;
    height: 350px;
    position: relative;
    perspective: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
  }
  .image-rotator {
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: transform 1s ease-in-out;
  }
  .image-card {
    width: 300px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center;
    transform-style: preserve-3d;
    transition: transform 1s ease-in-out, opacity 0.5s ease-in-out;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
    translate: -50% -50%;
  }
  .image-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  }
  .image-card:nth-child(1) { transform: rotateY(0deg) translateZ(180px); }
  .image-card:nth-child(2) { transform: rotateY(90deg) translateZ(180px); }
  .image-card:nth-child(3) { transform: rotateY(180deg) translateZ(180px); }
  .image-card:nth-child(4) { transform: rotateY(270deg) translateZ(180px); }

  .image-container .image-rotator {
    transform-origin: center center;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
  }

  
  .image-container.active .image-rotator {
    transform: rotateY(var(--rotation-angle));
  }
  `,
        usage: `<div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 p-10">
          <Accordion3
            items={accordionData}
            bgColor="linear-gradient(135deg, #1E3A8A, #3B82F6)"
            headerColor="#2563EB"
            textColor="#F3F4F6"
            borderColor="#93C5FD"
            activeHeaderColor="#60A5FA"
            activeTextColor="#222"
            iconRotate={true}
            animationDuration={500}
            shadowColor="#2563EB"
            height="h-[500px]"
          />
        </div>`,
    },

    Accordion4: {
        component: `import React, { useState } from "react";
import "./style.css";

interface AccordionItem {
    title: string;
    content: string;
    image: string;
    icon: string;
}

interface StackAccordionProps {
    items: AccordionItem[];
    bgColor?: string;
    headerColor?: string;
    textColor?: string;
    borderColor?: string;
    activeHeaderColor?: string;
    activeTextColor?: string;
    iconRotate?: boolean;
    animationDuration?: number;
    shadowColor?: string;
    height?: string;
}

const Accordion4: React.FC<StackAccordionProps> = ({
    items,
    bgColor = "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    headerColor = "#ff4b2b",
    textColor = "#fff",
    borderColor = "#ff6b6b",
    activeHeaderColor = "#ffcc00",
    activeTextColor = "#222",
    iconRotate = true,
    animationDuration = 700,
    shadowColor = "#ffeb3b",
    height = "h-[500px]"
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [rotation, setRotation] = useState(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
        setRotation(index * -90);
    };

    return (
        <div className={\`relative w-full max-w-6xl flex flex-col md:flex-row gap-10 items-center p-6 rounded-lg shadow-2xl \${height}\`} style={{ background: bgColor }}>
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
                <div className="image-container">
                    <div className="image-rotator" style={{ transform: \`rotateX(\${rotation}deg)\`, transition: "transform 1s ease-in-out" }}>
                        {items.map((item, index) => (
                            <div key={index} className="image-card" style={{ transform: \`rotateX(\${index * (360 / items.length)}deg) translateZ(200px)\` }}>
                                <img src={item.image} alt="Accordion Image" className="object-cover w-[300px] h-[300px] rounded-lg shadow-2xl" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="relative transition-all rounded-xl overflow-hidden shadow-lg"
                        style={{
                            backgroundColor: openIndex === index ? activeHeaderColor : headerColor,
                            color: openIndex === index ? activeTextColor : textColor,
                            border: \`1px solid \${borderColor}\`,
                            boxShadow: openIndex === index ? \`0px 4px 10px \${shadowColor}\` : "none",
                        }}
                    >
                        <button
                            className="w-full flex justify-between items-center p-5 font-semibold text-lg rounded-lg transition-all duration-300 hover:shadow-xl"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="flex items-center gap-2">
                                <span className={\`text-2xl transition-transform duration-500 \${openIndex === index && iconRotate ? "rotate-180 scale-125" : "scale-100"}\`}>
                                    {item.icon}
                                </span>
                                {item.title}
                            </span>
                            <span className={\`text-xl transform transition-transform duration-300 \${openIndex === index ? "rotate-180" : "rotate-0"}\`}>⌵</span>
                        </button>
                        <div
                            className={\`relative overflow-hidden transition-all rounded-lg \${openIndex === index ? "max-h-96 opacity-100 p-5 border" : "max-h-0 opacity-0"}\`}
                            style={{
                                backgroundColor: bgColor,
                                borderColor: borderColor,
                                color: textColor,
                            }}
                        >
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion4;
`,
        css: `.image-container {
    width: 350px;
    height: 350px;
    position: relative;
    perspective: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
}
.image-rotator {
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: transform 1s ease-in-out;
}
.image-card {
    width: 300px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center;
    transform-style: preserve-3d;
    transition: transform 1s ease-in-out, opacity 0.5s ease-in-out;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
    translate: -50% -50%;
}
.image-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}

/* Adjust Transform for Vertical Rotation */
.image-card:nth-child(1) { transform: rotateX(0deg) translateZ(180px); }
.image-card:nth-child(2) { transform: rotateX(90deg) translateZ(180px); }
.image-card:nth-child(3) { transform: rotateX(180deg) translateZ(180px); }
.image-card:nth-child(4) { transform: rotateX(270deg) translateZ(180px); }

/* Ensuring the Container Rotates in Vertical 3D */
.image-container .image-rotator {
    transform-origin: center center;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
}
.image-container.active .image-rotator {
    transform: rotateX(var(--rotation-angle));
}
`,
        usage: `<div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 p-10">
          <Accordion4
            items={accordionData}
            bgColor="linear-gradient(135deg, #1E3A8A, #3B82F6)"
            headerColor="#2563EB"
            textColor="#F3F4F6"
            borderColor="#93C5FD"
            activeHeaderColor="#60A5FA"
            activeTextColor="#222"
            iconRotate={true}
            animationDuration={500}
            shadowColor="#2563EB"
            height="h-[500px]"
          />
        </div>`,
    },

    Accordion5: {
      component: `import React, { useState } from "react";
    
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
        const base = \`transition-all duration-\${transitionDuration} ease-in-out overflow-hidden px-4 sm:px-5 pb-4\`;
        const animations = {
          slide: isOpen ? \`\${maxContentHeight} opacity-100 scale-100\` : "max-h-0 opacity-0 scale-90",
          fade: isOpen ? "opacity-100 max-h-full scale-100" : "opacity-0 max-h-0 scale-95",
          translate: isOpen ? \`\${maxContentHeight} opacity-100 translate-y-0 scale-100\` : "max-h-0 opacity-0 translate-y-4 scale-95",
        };
        return \`\${base} \${animations[contentAnimation]}\`;
      };
    
      return (
        <div
          className={\`w-full max-w-4xl mx-auto pt-6 pb-4 px-4 md:px-6 \${height} \${rounded} \${blur ? "backdrop-blur-md" : ""}\`}
          style={{ backgroundColor: bgColor }}
        >
          {items.map((item, index) => {
            const isOpen = activeIndex === index;
    
            return (
              <div
                key={index}
                className={\`\${spacing} transition-all duration-\${transitionDuration} overflow-hidden \${rounded} shadow-xl group transform-gpu hover:scale-[1.015] hover:rotate-[0.3deg]\`}
                style={{
                  backgroundColor: isOpen ? activeColor : bgColor,
                  color: isOpen ? activeTextColor : textColor,
                  boxShadow: isOpen
                    ? \`0 0 18px 4px \${activeShadowColor}\`
                    : \`0 4px 12px \${shadowColor}\`,
                  transitionDelay: \`\${index * 80}ms\`,
                }}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className={\`w-full flex items-center justify-between \${padding} \${fontSize} font-semibold transition-all duration-500 relative z-10\`}
                  style={{ color: isOpen ? activeTextColor : textColor }}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={\`text-2xl transition-all duration-700 transform relative \${isOpen && iconRotation ? "rotate-[360deg]" : ""} \${isOpen && iconScale ? "scale-[1.25]" : "scale-100"}\`}
                      style={{ color: iconColor }}
                    >
                      <span
                        className={\`absolute -inset-1 rounded-full blur-md opacity-60 transition-opacity duration-700 \${isOpen ? "bg-cyan-400 opacity-60" : "opacity-0"}\`}
                      ></span>
                      <span className="relative z-10">{item.icon}</span>
                    </span>
                    {item.title}
                  </span>
    
                  <span
                    className={\`transition-all duration-500 transform relative \${isOpen ? "rotate-180" : "rotate-0"}\`}
                    style={{ color: toggleIconColor }}
                  >
                    <span
                      className={\`absolute inset-0 rounded-full blur-sm opacity-40 \${isOpen ? "bg-gradient-to-r from-pink-500 to-yellow-500" : ""}\`}
                    ></span>
                    <span className="relative z-10">{toggleIcon}</span>
                  </span>
                </button>
    
                <div className={\`\${getContentClasses(isOpen)} transition-transform origin-top\`}>
                  <p className="text-sm md:text-base leading-relaxed">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    };
    
    export default Accordion5;
    `,
      css: `/* No external CSS needed – fully Tailwind utility-based */`,
      usage: `<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4">
      <Accordion5
        items={accordionData}
        bgColor="rgba(255,255,255,0.02)"
        activeColor="#0ff"
        textColor="#00f7ff"
        activeTextColor="#111827"
        iconColor="#00ffe1"
        toggleIcon="▾"
        toggleIconColor="#0ff"
        height="h-auto"
        rounded="rounded-xl"
        blur={true}
        shadowColor="#00fff066"
        activeShadowColor="#00ffe1"
        transitionDuration={800}
        maxContentHeight="max-h-96"
        iconRotation={true}
        iconScale={true}
        contentAnimation="fade"
        padding="p-4"
        fontSize="text-lg"
        spacing="mb-5"
      />
    </div>`
    },

    Accordion6: {
      component: `import React, { useState } from "react";
    
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
          setVisibleIndex(null);
          setTimeout(() => setActiveIndex(null), 100);
        } else {
          setActiveIndex(index);
          setTimeout(() => setVisibleIndex(index), transitionDuration - 100);
        }
      };
    
      return (
        <div className={\`flex w-full max-w-7xl mx-auto md:gap-4 gap-6 md:px-4 px-6 \${height}\`}>
          <style>{\`
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
          \`}</style>
    
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            const isVisible = index === visibleIndex;
    
            return (
              <div
                key={index}
                onClick={() => handleToggle(index)}
                className={\`relative group cursor-pointer overflow-hidden transform-gpu transition-all \${rounded} \${isActive ? "flex-[20] scale-[1.03] z-20" : "flex-[1] hover:scale-[1.01]"}\`}
                style={{
                  boxShadow: isActive
                    ? \`0 0 40px \${activeGlowColor}\`
                    : "0 8px 25px rgba(0, 0, 0, 0.1)",
                  transition: \`all \${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)\`,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={\`absolute inset-0 w-full h-full object-cover object-center transition-all duration-\${transitionDuration} \${isActive ? "brightness-75 scale-110" : "brightness-95"}\`}
                />
                <div
                  className={\`absolute inset-0 z-10 transition-all duration-\${transitionDuration} \${isActive ? "bg-black/40 backdrop-blur-sm" : "bg-gradient-to-t from-black/20 to-transparent"}\`}
                />
                <div
                  className="absolute bottom-0 z-20 w-full md:px-4 px-6 md:pb-4 pb-6 md:pt-3 pt-4"
                  style={{
                    color: isActive ? activeTextColor : textColor,
                    transition: \`all \${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)\`,
                  }}
                >
                  <div
                    className={\`transition-all duration-\${transitionDuration} ease-in-out \${isActive ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-8 pointer-events-none"}\`}
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
                      boxShadow: \`inset 0 0 30px \${activeGlowColor}\`,
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
    `,
      css: `/* Fully styled with Tailwind. No external CSS needed */`,
      usage: `<div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black px-4">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_left,_#00ffe1_10%,_transparent_70%)] opacity-20 animate-pulse absolute" />
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_#1e90ff_10%,_transparent_70%)] opacity-20 animate-pulse delay-1000 absolute" />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black opacity-80" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto rounded-[2rem] border border-cyan-400/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_#00ffe180] transition-all duration-700 px-6 py-10 sm:px-10 sm:py-14">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-200 drop-shadow-[0_0_8px_#00ffe1] tracking-tight animate-fade-slide">
            Explore the Future
          </h1>
          <p className="text-cyan-100/80 mt-3 text-sm sm:text-base tracking-wide">
            Tap on a panel to unveil more
          </p>
        </div>
        <Accordion6
          items={accordionData}
          height="h-[520px]"
          rounded="rounded-3xl"
          textColor="#d2faff"
          activeTextColor="#ffffff"
          overlayColor="rgba(0, 0, 0, 0.4)"
          activeGlowColor="#00ffe1"
          transitionDuration={800}
        />
      </div>
    </div>`
    },

    Accordion7: {
      component: `import React, { useState } from "react";
    
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
        <div className={\`w-full max-w-5xl mx-auto space-y-6 px-4 \${containerClassName}\`}>
          <style>{\`
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
          \`}</style>
    
          {items.map((item, index) => {
            const isActive = index === activeIndex;
    
            return (
              <div
                key={index}
                className={\`relative overflow-hidden group \${rounded} transition-all transform-gpu duration-\${transitionDuration} cursor-pointer perspective-1000\`}
                onClick={() => setActiveIndex(isActive ? null : index)}
                style={{
                  transform: isActive ? \`scale(\${cardScale})\` : "scale(1)",
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
                    backdropFilter: \`blur(\${blurAmount}px)\`,
                    WebkitBackdropFilter: \`blur(\${blurAmount}px)\`,
                  }}
                />
    
                {isActive && (
                  <div
                    className="absolute -inset-1 z-0 pointer-events-none rounded-[inherit]"
                    style={{
                      background: \`radial-gradient(circle at top left, \${glowColor}33 0%, transparent 80%)\`,
                      boxShadow: \`0 0 30px \${glowColor}aa, inset 0 0 20px \${glowColor}33\`,
                      filter: "blur(3px)",
                      borderRadius: "inherit",
                    }}
                  />
                )}
    
                <div className={\`relative z-10 \${contentPadding}\`}>
                  <div
                    className={\`flex items-center gap-3 font-bold tracking-tight mb-2 sm:mb-3 transition-all duration-500 \${titleFontSize} \${titleGradient && isActive ? "text-gradient" : ""} \${titleClassName}\`}
                    style={{ color: isActive ? activeTextColor : textColor }}
                  >
                    {item.icon && <span className="text-xl animate-pulse">{item.icon}</span>}
                    <span className="truncate">{item.title}</span>
                  </div>
    
                  <div
                    className={\`transition-all duration-\${transitionDuration} ease-in-out \${isActive ? "max-h-[320px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-3"} \${contentClassName}\`}
                  >
                    <p className={\`text-white/90 leading-relaxed \${contentFontSize} animate-fade-slide\`}>
                      {item.content}
                    </p>
                  </div>
                </div>
    
                {isActive && (
                  <div
                    className="absolute inset-0 pointer-events-none rounded-[inherit]"
                    style={{
                      boxShadow: \`inset 0 0 30px \${glowColor}40, 0 0 60px \${glowColor}30\`,
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
    `,
      css: `/* Fully styled using Tailwind. No external CSS required */`,
      usage: `<div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0a0020] via-[#14002e] to-[#050011] px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,_#ff00d4_0%,_transparent_70%)] top-[-150px] left-[-180px] opacity-30 blur-3xl animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,_#8a2be2_0%,_transparent_70%)] bottom-[-150px] right-[-160px] opacity-25 blur-2xl animate-pulse delay-1000" />
      </div>
      <div className="relative z-10 w-full max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(255,0,200,0.08)] md:px-6 md:py-10 px-2 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-400 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_14px_#ff00d4cc]">
            Unlock the Future of Intelligence
          </h1>
          <p className="mt-2 text-pink-200/80 text-sm sm:text-base tracking-wide">
            Dive into next-gen healthcare and AI breakthroughs.
          </p>
        </div>
        <Accordion7
          items={accordionData}
          textColor="#f5d9ff"
          activeTextColor="#ffffff"
          overlayColor="rgba(10, 0, 30, 0.5)"
          glowColor="#ff00d4"
          transitionDuration={700}
          rounded="rounded-3xl"
          titleFontSize="md:text-3xl text-xl"
          contentFontSize="md:text-base text-sm"
          contentPadding="p-8 sm:p-10"
          blurAmount={4}
          titleGradient={true}
        />
      </div>
    </div>`
    },

    Accordion8: {
      component: `import React, { useState } from "react";
    
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
          <style>{\`
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
          \`}</style>
    
          {items.map((item, index) => {
            const isActive = index === activeIndex;
    
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={\`relative group flex flex-col sm:flex-row transition-all transform-gpu border \${rounded} overflow-hidden hover:scale-[1.01]\`}
                style={{
                  background: backgroundColor,
                  borderColor,
                  backdropFilter: \`blur(\${blurAmount}px)\`,
                  WebkitBackdropFilter: \`blur(\${blurAmount}px)\`,
                  boxShadow: isActive
                    ? \`0 0 40px \${glowColor}, inset 0 0 12px \${glowColor}55\`
                    : "0 6px 20px rgba(0,0,0,0.3)",
                  transition: \`all \${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)\`,
                }}
              >
                <div className={\`relative w-full sm:w-48 \${imageHeight} shrink-0\`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={\`w-full h-full object-cover transition-all duration-700 \${isActive ? "brightness-110 scale-105" : "brightness-[.6] blur-[1px]"}\`}
                  />
                  <div className="absolute inset-0" style={{ background: overlayColor }} />
                </div>
                <div
                  className={\`flex-1 flex flex-col \${isActive ? "justify-start" : "justify-center"} transition-all duration-500 \${contentPadding}\`}
                >
                  <div
                    className={\`font-bold tracking-normal flex items-center gap-2 \${titleFontSize} \${titleGradient && isActive ? "text-gradient" : ""}\`}
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
                    className={\`h-[2px] w-20 rounded-full my-3 transition-all \${isActive ? "bg-gradient-to-r from-pink-500 to-purple-400 scale-x-100" : "bg-white/10 scale-x-0"} origin-left duration-500\`}
                  />
                  <div
                    className={\`transition-all ease-in-out overflow-hidden \${isActive ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0"}\`}
                    style={{
                      transform: isActive ? "translateY(0)" : "translateY(-10px)",
                    }}
                  >
                    <div className="fade-slide-up bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-inner text-white/90 space-y-4 p-4 sm:p-6 mt-2">
                      <h3 className="text-lg font-semibold text-gradient">Key Features</h3>
                      <ul className={\`space-y-2 \${contentFontSize} leading-relaxed\`}>
                        {item.content.split("\\n").map((line, idx) => {
                          if (line.trim().startsWith("- ")) {
                            return (
                              <li
                                key={idx}
                                className="flex items-start gap-3 fade-slide-up"
                                style={{ animationDelay: \`\${0.1 * idx}s\` }}
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
    `,
      css: `/* Fully styled using Tailwind. No external CSS needed */`,
      usage: `<div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0a0015] via-[#120021] to-[#050011] px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,_#ff00d466_0%,_transparent_70%)] top-[-180px] left-[-200px] opacity-30 blur-3xl animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,_#8a2be2_0%,_transparent_70%)] bottom-[-140px] right-[-160px] opacity-25 blur-2xl animate-pulse delay-1000" />
      </div>
      <div className="relative z-10 w-full max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(255,0,200,0.1)] md:px-6 md:py-12 px-0 py-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-400 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_18px_#ff00d4cc]">
            Explore the Future of Care
          </h1>
          <p className="mt-3 text-pink-200/80 text-sm sm:text-base tracking-wide max-w-2xl mx-auto">
            Interactive intelligence layers designed for diagnostics, decision-making, and deep insights.
          </p>
        </div>
        <Accordion8
          items={accordionData}
          textColor="#ffe5f8"
          activeTextColor="#ffffff"
          glowColor="#ff00d4"
          overlayColor="rgba(20,0,40,0.4)"
          backgroundColor="rgba(255, 255, 255, 0.03)"
          borderColor="#ffffff22"
          transitionDuration={600}
          rounded="rounded-3xl"
          titleFontSize="text-base sm:text-lg md:text-xl"
          contentFontSize="text-xs sm:text-sm md:text-base"
          contentPadding="p-6 sm:p-10"
          blurAmount={16}
          titleGradient={true}
        />
      </div>
    </div>`
    }
    
    

    
    
};