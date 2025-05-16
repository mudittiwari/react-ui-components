import React, { useState } from "react";
// import { Accordion1, Accordion2, Accordion3, Accordion4 } from "react-ui-components-mudittiwari13";
import Accordion1 from "../components/Accordions/Accordion1/Accordion1";
import CodeBlock from "../components/CodeBlock";
import { FaCode } from "react-icons/fa";
import { AccordionCodeSnippets } from "../snipptes/Accordion";
import Accordion2 from "../components/Accordions/Accordion2/Accordion2";
import Accordion3 from "../components/Accordions/Accordion3/Accordion3";
import Accordion4 from "../components/Accordions/Accordion4/Accordion4";
import Accordion5 from "../components/Accordions/Accordion5/Accordion5";
import Accordion6 from "../components/Accordions/Accordion6/Accordion6";
import Accordion7 from "../components/Accordions/Accordion7/Accordion7";
import Accordion8 from "../components/Accordions/Accordion8/Accordion8";

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
    Accordion5: (
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4">
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
      </div>
    ),
    Accordion6: (
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black px-4">
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
      </div>
    ),
    Accordion7: (
      <div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0a0020] via-[#14002e] to-[#050011] px-4 py-20 overflow-hidden">
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
            overlayColor="rgba(20, 0, 50, 0.25)"
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
      </div>

    ),
    Accordion8: (
      <div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0a0015] via-[#120021] to-[#050011] px-4 py-20 overflow-hidden">
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
      </div>
    )
  };
  return (
    <div className="p-4 md:p-6 w-full md:w-[calc(100%-16rem)] ml-auto">


      {/* <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top_left,_#00ffe1,_#00bfff,_transparent_70%)] opacity-30 animate-pulse blur-3xl" />
          <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_#d946ef,_#9333ea,_transparent_70%)] opacity-25 animate-pulse blur-2xl delay-1000" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#050d17] via-[#0a0a2f] to-[#050011] opacity-90" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto rounded-[2rem] border border-cyan-300/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_#00fff088] transition-all duration-700 px-6 py-10 sm:px-10 sm:py-14">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 via-teal-200 to-white text-transparent bg-clip-text drop-shadow-[0_0_12px_#00fff0cc] tracking-tight animate-fade-slide">
              Explore the Future
            </h1>
            <p className="text-cyan-100/80 mt-3 text-sm sm:text-base tracking-wide max-w-xl mx-auto">
              Tap on a panel to unveil more
            </p>
          </div>
          <Accordion6
            items={accordionData}
            height="h-[520px]"
            rounded="rounded-3xl"
            textColor="#d2faff"
            activeTextColor="#ffffff"
            overlayColor="rgba(0, 20, 40, 0.4)"
            activeGlowColor="#00ffe1"
            transitionDuration={800}
          />
        </div>
      </div> */}












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
