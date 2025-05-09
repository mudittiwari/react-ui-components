export const CardCodeSnippets: Record<"Card1" | "Card2" | "Card3" | "Card4" | "NovaBurstProductCard" | "MedicalGlowProductCard" | "GameGlowProductCard" | "AuroraGlowProductCard" | "VortexMorphProductCard" | "VortexMorphProductCard", { component: string; css: string; usage: string }> = {
  Card1: {
    component: `import React from "react";
    
    interface Card1Props {
        title: string;
        description: string;
        image: string;
        width?: string;
        height?: string;
        rotationDirection?: "X" | "Y";
        overlayColor?: string;
        overlayOpacity?: number;
    }
    
    const Card1: React.FC<Card1Props> = ({
        title,
        description,
        image,
        width = "20rem",
        height = "20rem",
        rotationDirection = "X",
        overlayColor = "rgba(45, 55, 72, 0.8)",
        overlayOpacity = 0.8,
    }) => {
        return (
            <>
                <style>
                    {\`
                    .card-container {
                        perspective: 1000px;
                    }
                    .card {
                        position: relative;
                        width: \${width};
                        height: \${height};
                        transform-style: preserve-3d;
                        transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
                    }
                    .card:hover {
                        transform: rotate\${rotationDirection}(180deg);
                    }
                    .card-face {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        border-radius: 0.5rem;
                        backface-visibility: hidden;
                        overflow: hidden;
                        background-size: cover;
                        background-position: center;
                    }
                    .card-front {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: white;
                        font-size: 1.25rem;
                        font-weight: bold;
                        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                    }
                    .card-back {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        background-color: \${overlayColor};
                        color: white;
                        text-align: center;
                        padding: 1.25rem;
                        transform: rotate\${rotationDirection}(180deg);
                    }
                    .card-back-image {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-size: cover;
                        background-position: center;
                        filter: brightness(50%);
                        z-index: 0;
                        opacity: \${overlayOpacity};
                    }
                    .card-content {
                        z-index: 10;
                    }
                    .card-title {
                        font-size: 1.5rem;
                        font-weight: bold;
                        color: white;
                    }
                    .card-description {
                        margin-top: 1rem;
                        font-size: 0.875rem;
                        line-height: 1.5;
                        color: white;
                    }
                    \`}
                </style>
                <div className="card-container">
                    <div className="card">
                        <div
                            className="card-face card-front"
                            style={{ backgroundImage: \`url(\${image})\` }}
                        >
                            <div className="card-text">{title}</div>
                        </div>
                        <div className="card-face card-back">
                            <div
                                className="card-back-image"
                                style={{ backgroundImage: \`url(\${image})\` }}
                            ></div>
                            <div className="card-content">
                                <h3 className="card-title">{title}</h3>
                                <p className="card-description">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
    
    export default Card1;
    `,
    css: `/* Card1 Styles */
    .card-container {
      perspective: 1000px;
    }
    .card {
      position: relative;
      width: 20rem;
      height: 20rem;
      transform-style: preserve-3d;
      transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    }
    .card:hover {
      transform: rotateX(180deg);
    }
    .card-face {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      backface-visibility: hidden;
      overflow: hidden;
      background-size: cover;
      background-position: center;
    }
    .card-front {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 1.25rem;
      font-weight: bold;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }
    .card-back {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: rgba(45, 55, 72, 0.8);
      color: white;
      text-align: center;
      padding: 1.25rem;
      transform: rotateX(180deg);
    }
    .card-title {
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
    }
    .card-description {
      margin-top: 1rem;
      font-size: 0.875rem;
      line-height: 1.5;
      color: white;
    }`,
    usage: `import { Card1 } from "react-ui-components-mudittiwari13";
    
    const App = () => {
      return (
        <Card1
          title="Explore China"
          description="China is a beautiful country with a rich history, vibrant culture, and stunning landscapes. From the Great Wall to the bustling city of Shanghai, there is much to discover."
          image={card1bg}
          width="25rem"
          height="25rem"
          rotationDirection="Y"
          overlayColor="rgba(0, 0, 0, 0.8)"
          overlayOpacity={0.9}
        />
      );
    };
    
    export default App;`,
  },

  Card2: {
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

  Card3: {
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

  Card4: {
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

  NovaBurstProductCard: {
    component: `import React, { useRef, useEffect } from "react";

interface NovaBurstProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  onBuyClick?: () => void;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: string;
  titleColor?: string;
  descriptionColor?: string;
  priceColor?: string;
  buttonGradient?: string;
  buttonShadowColor?: string;
  width?: string;
  height?: string;
  particleCount?: number;
}

const NovaBurstProductCard: React.FC<NovaBurstProductCardProps> = ({
  image,
  title,
  description,
  price,
  onBuyClick,
  glowColor = "#f472b6",
  backgroundColor = "#0f172a",
  borderRadius = "1.5rem",
  titleColor = "#ffffff",
  descriptionColor = "#d1d5db",
  priceColor = "#f472b6",
  buttonGradient = "linear-gradient(to right, #f472b6, #db2777)",
  buttonShadowColor = "#f472b6",
  width = "360px",
  height = "540px",
  particleCount = 14,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      card.style.transform = \`rotateX(\${-y}deg) rotateY(\${x}deg)\`;
    };

    const resetTilt = () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", resetTilt);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", resetTilt);
    };
  }, []);

  return (
    <>
      <style>{\`
        .nova-card {
          width: \${width};
          height: \${height};
          border-radius: \${borderRadius};
          background: \${backgroundColor};
          overflow: hidden;
          position: relative;
          box-shadow: 0 0 35px \${glowColor}22;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          transform-style: preserve-3d;
          animation: softRise 6s ease-in-out infinite alternate;
        }

        @keyframes softRise {
          0% { transform: translateY(0); }
          100% { transform: translateY(-6px); }
        }

        .nova-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .nova-particle {
          position: absolute;
          width: 5px;
          height: 5px;
          background: \${glowColor};
          opacity: 0.3;
          border-radius: 50%;
          animation: floatDrift 8s linear infinite;
          filter: blur(1px);
        }

        @keyframes floatDrift {
          0% { transform: translate(0, 0); }
          25% { transform: translate(10px, -20px); opacity: 0.6; }
          50% { transform: translate(-10px, -40px); opacity: 0.4; }
          75% { transform: translate(15px, -60px); opacity: 0.7; }
          100% { transform: translate(0, -80px); opacity: 0; }
        }

        .nova-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.75rem;
          transform-style: preserve-3d;
        }

        .nova-image-container {
          width: 100%;
          height: 240px;
          overflow: hidden;
          border-radius: 1rem;
          background: #1e1b4b;
          box-shadow: 0 0 20px \${glowColor}22;
          transform: translateZ(20px);
        }

        .nova-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .nova-card:hover .nova-image-container img {
          transform: scale(1.06);
        }

        .nova-details {
          margin-top: 1.25rem;
          color: \${titleColor};
          transform: translateZ(10px);
        }

        .nova-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: \${titleColor};
        }

        .nova-description {
          font-size: 0.92rem;
          color: \${descriptionColor};
          margin-top: 0.4rem;
        }

        .nova-price {
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: 1rem;
          color: \${priceColor};
        }

        .buy-button-novaburst {
          background: \${buttonGradient};
          color: white;
          font-weight: bold;
          padding: 0.8rem 1.5rem;
          border-radius: 14px;
          font-size: 1rem;
          margin-top: 1.4rem;
          transition: all 0.3s ease;
          box-shadow: 0 0 12px \${buttonShadowColor}55;
        }

        .buy-button-novaburst:hover {
          transform: scale(1.07);
          box-shadow: 0 0 25px \${buttonShadowColor}aa;
        }
      \`}</style>

      <div className="nova-card" ref={cardRef}>
        <div className="nova-particles">
          {Array.from({ length: particleCount }).map((_, i) => (
            <span
              key={i}
              className="nova-particle"
              style={{
                top: \`\${Math.random() * 100}%\`,
                left: \`\${Math.random() * 100}%\`,
                animationDelay: \`\${Math.random() * 4}s\`,
              }}
            />
          ))}
        </div>
        <div className="nova-content">
          <div className="nova-image-container">
            <img src={image} alt={title} />
          </div>
          <div className="nova-details">
            <h2 className="nova-title">{title}</h2>
            <p className="nova-description">{description}</p>
            <p className="nova-price">{price}</p>
            <button className="buy-button-novaburst" onClick={onBuyClick}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NovaBurstProductCard;
`,
    css: "/* Uses inline styles – no external CSS needed */",
    usage: `import { NovaBurstProductCard } from "react-ui-components-mudittiwari13";

const App = () => {
  return (
    <NovaBurstProductCard
      image="https://images.unsplash.com/photo-1611078489935-2b6553d1dfcb"
      title="Nova Sneakers"
      description="Futuristic design with adaptive cushioning and glow-reactive soles."
      price="$129.99"
      glowColor="#f472b6"
      backgroundColor="#0f172a"
      buttonGradient="linear-gradient(to right, #f472b6, #db2777)"
      onBuyClick={() => alert("🛒 Nova Sneakers added to cart!")}
    />
  );
};`
  },

  MedicalGlowProductCard: {
    component: `import React, { useRef, useEffect } from "react";

interface MedicalGlowProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  onBuyClick?: () => void;
  backgroundGradient?: string;
  titleColor?: string;
  descriptionColor?: string;
  priceColor?: string;
  cardShadowColor?: string;
  particlePrimaryColor?: string;
  particleSecondaryColor?: string;
  buttonGradient?: string;
  buttonShadowColor?: string;
  borderRadius?: string;
  particleCount?: number;
  width?: string;
  height?: string;
}

const MedicalGlowProductCard: React.FC<MedicalGlowProductCardProps> = ({
  image,
  title,
  description,
  price,
  onBuyClick,
  backgroundGradient = "linear-gradient(135deg, #ffffff, #e0f7fa, #c8e6c9)",
  titleColor = "#0d47a1",
  descriptionColor = "#4f5b62",
  priceColor = "#00796b",
  cardShadowColor = "rgba(0, 150, 136, 0.2)",
  particlePrimaryColor = "#81d4fa",
  particleSecondaryColor = "#aed581",
  buttonGradient = "linear-gradient(to right, #26c6da, #66bb6a)",
  buttonShadowColor = "#26a69a",
  borderRadius = "20px",
  particleCount = 10,
  width = "360px",
  height = "540px",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
      card.style.transform = \`rotateX(\${-y}deg) rotateY(\${x}deg)\`;
    };

    const resetTilt = () => {
      card.style.transform = \`rotateX(0deg) rotateY(0deg)\`;
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", resetTilt);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", resetTilt);
    };
  }, []);

  return (
    <>
      <style>{\`
        .medical-card {
          width: \${width};
          height: \${height};
          background: \${backgroundGradient};
          border-radius: \${borderRadius};
          overflow: hidden;
          position: relative;
          color: \${titleColor};
          box-shadow: 0 0 20px \${cardShadowColor};
          transform-style: preserve-3d;
          transition: transform 0.4s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(0, 150, 136, 0.1);
          animation: subtleGlow 6s ease-in-out infinite alternate;
        }

        @keyframes subtleGlow {
          0% { box-shadow: 0 0 20px \${cardShadowColor}; }
          100% { box-shadow: 0 0 30px \${cardShadowColor}; }
        }

        .medical-card:hover {
          transform: scale(1.015);
          box-shadow: 0 0 30px \${cardShadowColor};
        }

        .medical-cross {
          position: absolute;
          width: 12px;
          height: 12px;
          background: \${particlePrimaryColor};
          opacity: 0.3;
          transform: rotate(45deg);
          animation: floatCross 10s ease-in-out infinite;
        }

        @keyframes floatCross {
          0% { transform: translate(0, 0) rotate(45deg); opacity: 0.3; }
          50% { transform: translate(10px, -20px) rotate(90deg); opacity: 0.6; }
          100% { transform: translate(-10px, -40px) rotate(135deg); opacity: 0.2; }
        }

        .medical-content {
          position: relative;
          z-index: 2;
          padding: 1.75rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .medical-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 1rem;
          box-shadow: 0 0 16px rgba(0,0,0,0.1);
          transition: transform 0.5s ease;
          animation: pulseImage 4s ease-in-out infinite alternate;
        }

        @keyframes pulseImage {
          0% { filter: brightness(1); }
          100% { filter: brightness(1.08) drop-shadow(0 0 6px \${particleSecondaryColor}); }
        }

        .medical-card:hover .medical-image {
          transform: scale(1.06);
        }

        .medical-details {
          margin-top: 1.5rem;
        }

        .medical-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: \${titleColor};
        }

        .medical-description {
          font-size: 0.95rem;
          color: \${descriptionColor};
          margin-top: 0.5rem;
        }

        .medical-price {
          font-size: 1.2rem;
          color: \${priceColor};
          font-weight: 600;
          margin-top: 1rem;
        }

        .buy-button-medical {
          margin-top: 1.5rem;
          background: \${buttonGradient};
          color: white;
          font-weight: bold;
          padding: 0.75rem 1.5rem;
          border-radius: 14px;
          font-size: 1rem;
          box-shadow: 0 0 16px \${buttonShadowColor}66;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .buy-button-medical::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.15);
          transform: skewX(-20deg);
          transition: left 0.6s ease;
        }

        .buy-button-medical:hover::after {
          left: 120%;
        }

        .buy-button-medical:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px \${buttonShadowColor}aa;
        }
      \`}</style>

      <div className="medical-card" ref={cardRef}>
        {[...Array(particleCount)].map((_, i) => (
          <span
            key={i}
            className="medical-cross"
            style={{
              top: \`\${Math.random() * 90 + 2}%\`,
              left: \`\${Math.random() * 90 + 2}%\`,
              background: i % 2 === 0 ? particlePrimaryColor : particleSecondaryColor,
              animationDelay: \`\${Math.random() * 3}s\`,
              animationDuration: \`\${6 + Math.random() * 6}s\`,
            }}
          />
        ))}
        <div className="medical-content">
          <img src={image} alt={title} className="medical-image" />
          <div className="medical-details">
            <h2 className="medical-title">{title}</h2>
            <p className="medical-description">{description}</p>
            <p className="medical-price">{price}</p>
            <button className="buy-button-medical" onClick={onBuyClick}>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalGlowProductCard;
`,
    css: "/* No external CSS required – styles are inline via <style> */",
    usage: `import { MedicalGlowProductCard } from "react-ui-components-mudittiwari13";

const App = () => {
  return (
    <MedicalGlowProductCard
      image="https://images.unsplash.com/photo-1560977501-7cb367eccebe?q=80"
      title="Smart Thermometer"
      description="Measure temperature with accuracy and instant sync to your health app."
      price="$89.99"
      backgroundGradient="linear-gradient(135deg, #ffffff, #e0f7fa, #c8e6c9)"
      onBuyClick={() => alert("🛒 Added to cart")}
    />
  );
};`
  },

  GameGlowProductCard: {
    component: `import React, { useRef, useEffect } from "react";

interface GameGlowProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  onBuyClick?: () => void;
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundGradient?: string;
  titleColor?: string;
  descriptionColor?: string;
  priceColor?: string;
  buttonText?: string;
  buttonGradient?: string;
  buttonTextColor?: string;
  buttonShadowColor?: string;
  particlePrimaryColor?: string;
  particleSecondaryColor?: string;
  particleCount?: number;
}

const GameGlowProductCard: React.FC<GameGlowProductCardProps> = ({
  image,
  title,
  description,
  price,
  onBuyClick,
  width = "680px",
  height = "300px",
  borderRadius = "22px",
  backgroundGradient = "linear-gradient(135deg, #0e0f17, #1f2937)",
  titleColor = "#a855f7",
  descriptionColor = "#cbd5e1",
  priceColor = "#22c55e",
  buttonText = "Buy Now",
  buttonGradient = "linear-gradient(to right, #9333ea, #06b6d4)",
  buttonTextColor = "#f0fdfa",
  buttonShadowColor = "#06b6d4",
  particlePrimaryColor = "#a855f7",
  particleSecondaryColor = "#06b6d4",
  particleCount = 16,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", \`\${x}px\`);
      card.style.setProperty("--mouse-y", \`\${y}px\`);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style>{\`/* styles omitted for brevity - copy from full component */\`}</style>

      <div className="game-card" ref={cardRef}>
        <div className="card-left">
          <div className="glow-tag">🎮 PC / Steam</div>
        </div>
        <div className="card-right">
          <div>
            <div className="game-title">{title}</div>
            <div className="game-description">{description}</div>
          </div>
          <div className="game-footer">
            <div className="game-price">{price}</div>
            <button className="buy-button" onClick={onBuyClick}>
              {buttonText}
            </button>
          </div>
        </div>
        {[...Array(particleCount)].map((_, i) => (
          <span
            key={i}
            className="spark"
            style={{
              top: \`\${Math.random() * 95 + 1}%\`,
              left: \`\${Math.random() * 95 + 1}%\`,
              background: i % 2 === 0 ? particlePrimaryColor : particleSecondaryColor,
              animationDelay: \`\${Math.random() * 3}s\`,
              animationDuration: \`\${4 + Math.random() * 4}s\`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default GameGlowProductCard;
`,
    css: "/* Inline CSS via <style> tag; no external stylesheet needed */",
    usage: `import { GameGlowProductCard } from "react-ui-components-mudittiwari13";

const App = () => {
  return (
    <GameGlowProductCard
      image="https://images.unsplash.com/photo-1605902711622-cfb43c4437d2?q=80"
      title="Neon Drift: Overdrive"
      description="Blast through cyber tunnels and master gravity-defying stunts in this arcade racer."
      price="$39.99"
      onBuyClick={() => alert("🎮 Game added to cart")}
      particleCount={20}
    />
  );
};`

  },

  AuroraGlowProductCard: {
    component: `import React, { useRef, useEffect } from "react";

interface AuroraGlowProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  onBuyClick?: () => void;
  backgroundGradient?: string;
  titleColor?: string;
  descriptionColor?: string;
  priceColor?: string;
  cardShadowColor?: string;
  particlePrimaryColor?: string;
  particleSecondaryColor?: string;
  buttonGradient?: string;
  buttonShadowColor?: string;
  borderRadius?: string;
  particleCount?: number;
  width?: string;
  height?: string;
}

const AuroraGlowProductCard: React.FC<AuroraGlowProductCardProps> = ({
  image,
  title,
  description,
  price,
  onBuyClick,
  backgroundGradient = "linear-gradient(135deg, #0f0c29, #302b63, #1a1a2e)",
  titleColor = "#ffffff",
  descriptionColor = "#cbd5e1",
  priceColor = "#60a5fa",
  cardShadowColor = "rgba(99, 102, 241, 0.25)",
  particlePrimaryColor = "#60a5fa",
  particleSecondaryColor = "#22d3ee",
  buttonGradient = "linear-gradient(to right, #6366f1, #a855f7)",
  buttonShadowColor = "#7c3aed",
  borderRadius = "24px",
  particleCount = 12,
  width = "360px",
  height = "540px",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      card.style.transform = \`rotateX(\${-y}deg) rotateY(\${x}deg)\`;
    };

    const resetTilt = () => {
      card.style.transform = \`rotateX(0deg) rotateY(0deg)\`;
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", resetTilt);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", resetTilt);
    };
  }, []);

  return (
    <>
      <style>{\`
        .aurora-card {
          width: \${width};
          height: \${height};
          background: \${backgroundGradient};
          border-radius: \${borderRadius};
          overflow: hidden;
          position: relative;
          color: \${titleColor};
          box-shadow: 0 0 30px \${cardShadowColor};
          transform-style: preserve-3d;
          animation: floatBounce 5s ease-in-out infinite alternate;
        }

        @keyframes floatBounce {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0px); }
        }

        .aura-trail {
          position: absolute;
          top: 0;
          left: -50%;
          width: 200%;
          height: 200%;
          background: repeating-conic-gradient(from 0deg, \${particlePrimaryColor} 0deg, \${particlePrimaryColor} 30deg, transparent 30deg, transparent 60deg);
          animation: rotateTrail 12s linear infinite;
          mix-blend-mode: screen;
          opacity: 0.05;
          z-index: 0;
        }

        @keyframes rotateTrail {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .wave-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: radial-gradient(circle, \${particlePrimaryColor} 0%, \${particleSecondaryColor} 100%);
          border-radius: 50%;
          filter: blur(3px);
          opacity: 0.4;
          animation: zigZagWave 8s ease-in-out infinite;
        }

        @keyframes zigZagWave {
          0% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(15px, -20px); opacity: 0.6; }
          50% { transform: translate(-10px, -40px); opacity: 0.8; }
          75% { transform: translate(8px, -60px); opacity: 0.5; }
          100% { transform: translate(-5px, -90px); opacity: 0; }
        }

        .aurora-content {
          position: relative;
          z-index: 2;
          padding: 1.75rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .aurora-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 1rem;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          transition: transform 0.5s ease;
          animation: pulseImage 4s ease-in-out infinite alternate;
        }

        @keyframes pulseImage {
          0% { filter: brightness(1); }
          100% { filter: brightness(1.1); }
        }

        .aurora-card:hover .aurora-image {
          transform: scale(1.06);
        }

        .aurora-details {
          margin-top: 1.5rem;
        }

        .aurora-title {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .aurora-description {
          font-size: 0.95rem;
          color: \${descriptionColor};
          margin-top: 0.4rem;
        }

        .aurora-price {
          font-size: 1.2rem;
          color: \${priceColor};
          font-weight: 600;
          margin-top: 1rem;
        }

        .buy-button-aurora {
          margin-top: 1.5rem;
          background: \${buttonGradient};
          color: white;
          font-weight: bold;
          padding: 0.75rem 1.5rem;
          border-radius: 14px;
          font-size: 1rem;
          box-shadow: 0 0 16px \${buttonShadowColor}66;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .buy-button-aurora:hover {
          transform: scale(1.07);
          box-shadow: 0 0 30px \${buttonShadowColor}aa;
        }
      \`}</style>

      <div className="aurora-card" ref={cardRef}>
        <div className="aura-trail" />
        {[...Array(particleCount)].map((_, i) => (
          <span
            key={i}
            className="wave-particle"
            style={{
              top: \`\${Math.random() * 90 + 5}%\`,
              left: \`\${Math.random() * 90 + 5}%\`,
              animationDelay: \`\${Math.random() * 4}s\`,
              animationDuration: \`\${6 + Math.random() * 6}s\`,
            }}
          />
        ))}
        <div className="aurora-content">
          <img src={image} alt={title} className="aurora-image" />
          <div className="aurora-details">
            <h2 className="aurora-title">{title}</h2>
            <p className="aurora-description">{description}</p>
            <p className="aurora-price">{price}</p>
            <button className="buy-button-aurora" onClick={onBuyClick}>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuroraGlowProductCard;
`,
    css: "/* All styles are inlined with <style>; no external CSS required */",
    usage: `import { AuroraGlowProductCard } from "react-ui-components-mudittiwari13";

const App = () => {
  return (
    <AuroraGlowProductCard
      image="https://images.unsplash.com/photo-1632803227975-b6a5688c9c46"
      title="Aurora Beam Headphones"
      description="Immersive sound powered by spatial acoustics and reactive aurora visuals."
      price="$349"
      onBuyClick={() => alert("🛒 Aurora Beam Headphones added to cart!")}
    />
  );
};`
  },

  VortexMorphProductCard: {
    component: `import React, { useRef } from "react";

interface VortexMorphProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  onBuyClick?: () => void;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: string;
  titleColor?: string;
  descriptionColor?: string;
  priceColor?: string;
  buttonGradient?: string;
  buttonShadowColor?: string;
  width?: string;
  height?: string;
}

const VortexMorphProductCard: React.FC<VortexMorphProductCardProps> = ({
  image,
  title,
  description,
  price,
  onBuyClick,
  glowColor = "#8b5cf6",
  backgroundColor = "#0f172a",
  borderRadius = "1.5rem",
  titleColor = "#ffffff",
  descriptionColor = "#cbd5e1",
  priceColor = "#f472b6",
  buttonGradient = "linear-gradient(135deg, #8b5cf6, #9333ea)",
  buttonShadowColor = "#8b5cf6",
  width = "340px",
  height = "520px",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    card.style.transform = \`rotateX(\${-y}deg) rotateY(\${x}deg) scale(1.02)\`;
  };

  const resetTilt = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = \`rotateX(0deg) rotateY(0deg) scale(1)\`;
    }
  };

  return (
    <>
      <style>{\`
        .vortex-card {
          perspective: 1200px;
          width: \${width};
          height: \${height};
          border-radius: \${borderRadius};
          background: \${backgroundColor};
          overflow: hidden;
          transition: box-shadow 0.4s ease, transform 0.4s ease;
          box-shadow: 0 0 35px \${glowColor}44 inset;
          animation: cardFadeIn 0.8s ease-out;
          position: relative;
          transform-style: preserve-3d;
        }

        .vortex-layer {
          position: absolute;
          inset: -35%;
          border-radius: 50%;
          background: radial-gradient(circle, \${glowColor}55 0%, transparent 70%);
          filter: blur(60px);
          z-index: 0;
        }

        .vortex-layer:nth-child(1) {
          animation: spinClockwise 18s linear infinite;
          opacity: 0.45;
        }

        .vortex-layer:nth-child(2) {
          animation: spinCounter 24s linear infinite;
          opacity: 0.35;
        }

        .card-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.6rem;
          backdrop-filter: blur(4px);
        }

        .product-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 1rem;
          box-shadow: 0 0 18px \${glowColor}33;
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }

        .vortex-card:hover .product-image {
          transform: scale(1.05) translateY(-4px);
          box-shadow: 0 0 30px \${glowColor}aa;
        }

        .buy-button-vortex {
          background: \${buttonGradient};
          color: white;
          font-weight: bold;
          padding: 0.75rem 1.5rem;
          border-radius: 14px;
          cursor: pointer;
          margin-top: 1.5rem;
          font-size: 0.95rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 0 10px \${buttonShadowColor}66;
        }

        .buy-button-vortex:hover {
          transform: scale(1.06);
          box-shadow: 0 0 20px \${buttonShadowColor}aa;
        }

        @keyframes spinClockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes spinCounter {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }

        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(30px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      \`}</style>

      <div
        className="vortex-card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
      >
        <div className="vortex-layer" />
        <div className="vortex-layer" />
        <div className="card-content">
          <img src={image} alt={title} className="product-image" />
          <div className="mt-4">
            <h2 className="text-2xl font-semibold" style={{ color: titleColor }}>{title}</h2>
            <p className="text-sm mt-1" style={{ color: descriptionColor }}>{description}</p>
            <p className="text-xl mt-3 font-bold" style={{ color: priceColor }}>{price}</p>
            <button className="buy-button-vortex" onClick={onBuyClick}>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VortexMorphProductCard;
`,
    css: "/* No external stylesheet – all styles are scoped inline via <style> */",
    usage: `import { VortexMorphProductCard } from "react-ui-components-mudittiwari13";

const App = () => {
  return (
    <VortexMorphProductCard
      image="https://images.unsplash.com/photo-1611078489935-2b6553d1dfcb"
      title="Morph Sneakers"
      description="Reactive LED-sole sneakers that adjust glow intensity to your movement."
      price="$149.00"
      onBuyClick={() => alert("🛒 Morph Sneakers added to cart!")}
    />
  );
};`
  }

};