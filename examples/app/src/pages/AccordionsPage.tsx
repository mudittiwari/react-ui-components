import React, { useState } from "react";
// import { Accordion1, Accordion2, Accordion3, Accordion4 } from "react-ui-components-mudittiwari13";
import Accordion1 from "../components/Accordions/Accordion1/Accordion1";
import CodeBlock from "../components/CodeBlock";
import { FaCode } from "react-icons/fa";
import { AccordionCodeSnippets } from "../snipptes/Accordion";
import Accordion2 from "../components/Accordions/Accordion2/Accordion2";
import Accordion3 from "../components/Accordions/Accordion3/Accordion3";
import Accordion4 from "../components/Accordions/Accordion4/Accordion4";

const accordionData = [
  {
    title: "Photography",
    content: "Explore the beauty of nature with high-resolution photography.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800",
    icon: "📸",
  },
  {
    title: "Design",
    content: "Discover modern UI/UX techniques and creative design strategies.",
    image: "https://images.unsplash.com/photo-1684262483735-1101bcb10f0d?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "🎨",
  },
  {
    title: "Technology",
    content: "Stay updated with the latest trends in AI, Web3, and development.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    icon: "🚀",
  },
  {
    title: "Nature",
    content: "Explore the beauty of nature with high-resolution photography.",
    image: "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "🌿",
  },
];
const AccordionsPage: React.FC = () => {
  const [selectedAccordion, setSelectedAccordion] = useState<keyof typeof AccordionCodeSnippets>("Accordion1");
  const [showCode, setShowCode] = useState(false);
  const [activeTab, setActiveTab] = useState<"component" | "css" | "usage">("component");

  // Mapping components dynamically
  const Accordions = {
    Accordion1: <Accordion1
      items={accordionData}
      multipleOpen={true}
      bgColor="bg-[#F1F5F9] dark:bg-[#111827]"
      textColor="text-gray-900 dark:text-gray-200"
      borderColor="border-[#EC4899] dark:border-[#A855F7]"
      hoverBgColor="hover:bg-gradient-to-r hover:from-[#FF5733] hover:to-[#FF8C00] dark:hover:from-[#8E44AD] dark:hover:to-[#3498DB]"
      activeBgColor="bg-gradient-to-r from-[#06B6D4] to-[#9333EA] text-white shadow-lg"
      icon="✨"
    />,
    Accordion2: <Accordion2
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
    />,
    Accordion3: <Accordion3
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
      height="h-[850px]"
    />,
    Accordion4: <Accordion4
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
      height="h-[950px]"
    />,
  };
  return (
    <div className="p-4 sm:p-6 w-full md:w-[calc(100%-16rem)] ml-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 mt-16 md:mt-0">Accordions</h1>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        {Object.keys(Accordions).map((acc) => (
          <button
            key={acc}
            onClick={() => setSelectedAccordion(acc as keyof typeof Accordions)}
            className={`px-4 py-2 rounded-lg transition ${selectedAccordion === acc
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
          >
            {acc}
          </button>
        ))}
      </div>

      {/* Toggle Code View Button */}
      <button
        className="fixed md:absolute top-16 right-4 md:top-20 md:right-6 px-4 py-2 flex items-center space-x-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition z-20"
        onClick={() => setShowCode(!showCode)}
      >
        <FaCode className="text-lg" />
        <span className="hidden sm:inline">{showCode ? "Show Demo" : "Show Code"}</span>
      </button>
      {/* Content Display */}
      <div className="w-full bg-gray-100 p-1 md:p-6 rounded-lg shadow-lg">
        {!showCode ? (
          <div className="flex justify-center w-full">{Accordions[selectedAccordion]}</div>
        ) : (
          <div className="w-full bg-gray-900 text-white p-4 sm:p-6 rounded-lg shadow-lg">
            {/* Tabs */}
            <div className="flex flex-wrap gap-4 mb-4">
              {["component", "css", "usage"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as "component" | "css" | "usage")}
                  className={`px-4 py-2 rounded-lg transition ${activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 hover:bg-gray-600"
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Code
                </button>
              ))}
            </div>
            {/* Code Viewer */}
            <CodeBlock code={AccordionCodeSnippets[selectedAccordion][activeTab]} />
          </div>
        )}
      </div>
    </div>

  );
};

export default AccordionsPage;
