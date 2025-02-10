import React, { useState } from "react";
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
    height = "h-72"
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [rotation, setRotation] = useState(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
        setRotation(index * -90);
    };

    return (
        <div className={`relative w-full max-w-6xl flex flex-col md:flex-row gap-10 items-center p-6 rounded-lg shadow-2xl ${height}`} style={{ background: bgColor }}>
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
                <div className="image-container" style={{ perspective: "1200px", transformStyle: "preserve-3d" }}>
                    <div className="image-rotator" style={{ transform: `rotateY(${rotation}deg)`, transition: "transform 1s ease-in-out", position: "absolute", top: "50%", left: "50%", transformOrigin: "center", transformStyle: "preserve-3d", translate: "-50% -50%" }}>
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="image-card"
                                style={{ transform: `rotateY(${index * (360 / items.length)}deg) translateZ(200px)`, transition: "transform 1s ease-in-out", position: "absolute", top: "50%", left: "50%", transformOrigin: "center", translate: "-50% -50%" }}
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
                            border: `1px solid ${borderColor}`,
                            boxShadow: openIndex === index ? `0px 4px 10px ${shadowColor}` : "none",
                        }}
                    >
                        <button
                            className="w-full flex justify-between items-center p-5 font-semibold text-lg rounded-lg transition-all duration-300 hover:shadow-xl"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="flex items-center gap-2">
                                <span className={`text-2xl transition-transform duration-500 ${openIndex === index && iconRotate ? "rotate-180 scale-125" : "scale-100"}`}>
                                    {item.icon}
                                </span>
                                {item.title}
                            </span>
                            <span className={`text-xl transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`}>⌵</span>
                        </button>
                        <div
                            className={`relative overflow-hidden transition-all rounded-lg ${openIndex === index ? "max-h-96 opacity-100 p-5 border" : "max-h-0 opacity-0"}`}
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