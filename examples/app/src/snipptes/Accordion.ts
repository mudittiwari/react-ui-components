export const AccordionCodeSnippets: Record<"Accordion1" | "Accordion2" | "Accordion3" | "Accordion4", { component: string; css: string; usage: string }> = {
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
};