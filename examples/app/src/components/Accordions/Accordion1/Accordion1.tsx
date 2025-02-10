import React, { useState } from "react";

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
          className={`border ${borderColor} rounded-xl overflow-hidden shadow-xl transition-all duration-500 ${
            openIndexes.includes(index) ? activeBgColor : bgColor
          }`}
        >
          {/* Accordion Header with Improved Hover Effect */}
          <button
            className={`w-full flex justify-between items-center p-5 text-lg font-semibold transition-all duration-300 rounded-xl ${hoverBgColor}`}
            onClick={() => toggleAccordion(index)}
          >
            <span className={`${textColor}`}>{item.title}</span>
            <span
              className={`text-xl transform transition-transform duration-300 ${
                openIndexes.includes(index) ? "rotate-180 scale-110" : "rotate-0"
              }`}
            >
              {icon}
            </span>
          </button>

          {/* Accordion Content with Animation */}
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              openIndexes.includes(index) ? "grid-rows-[1fr] max-h-96 opacity-100 scale-y-100" : "grid-rows-[0fr] max-h-0 opacity-0 scale-y-0"
            }`}
          >
            <div className={`overflow-hidden px-5 pb-4 ${textColor} transition-opacity duration-500`}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion1;
