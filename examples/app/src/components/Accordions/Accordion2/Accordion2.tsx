import React, { useState, useEffect, useRef } from "react";

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
        <div className="relative w-[80%]" style={{ height: `${imageHeight}px` }}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-${animationDuration} rounded-lg overflow-hidden shadow-xl border`}
              style={{
                borderColor: borderColor,
                top: `${index * stackOffsetY}px`,
                transform: openIndex === index
                  ? `translateY(-5px) translateX(0px) scale(1.1)`
                  : `translateY(${index * stackOffsetY}px) translateX(${index * stackOffsetX}px) scale(0.95)`,
                opacity: openIndex === index ? 1 : 0.8,
                zIndex: openIndex === index ? 30 : 20 - index,
                boxShadow: openIndex === index ? `0px 4px 10px ${shadowColor}` : "none",
              }}
            >
              <img
                src={item.image}
                alt="Accordion Image"
                className={`w-full ${height} object-cover rounded-lg`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative transition-all duration-${animationDuration} transform rounded-xl overflow-hidden shadow-lg`}
            style={{
              backgroundColor: openIndex === index ? activeHeaderColor : headerColor,
              color: openIndex === index ? activeTextColor : textColor,
              border: `1px solid ${borderColor}`,
              boxShadow: openIndex === index ? `0px 4px 10px ${shadowColor}` : "none",
            }}
          >
            <button
              className="w-full flex justify-between items-center p-5 font-semibold text-lg rounded-lg transition-all duration-300 hover:shadow-xl"
              onClick={() => toggleAccordion(index)}
            >
              <span className="flex items-center gap-2">
                <span
                  className={`text-2xl transition-transform duration-500 ${
                    openIndex === index && iconRotate ? "rotate-180 scale-125" : "scale-100"
                  }`}
                >
                  {item.icon}
                </span>
                {item.title}
              </span>

              <span
                className={`text-xl transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                ⌵
              </span>
            </button>
            <div
              className={`relative overflow-hidden transition-all duration-${animationDuration} rounded-lg ${
                openIndex === index
                  ? "max-h-96 opacity-100 p-5 border"
                  : "max-h-0 opacity-0"
              }`}
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
