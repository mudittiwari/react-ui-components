import React, { useState } from "react";
import { Card1, Card2, Card3, Card4 } from "react-ui-components-mudittiwari13";
import CodeBlock from "../components/CodeBlock";
import { FaCode } from "react-icons/fa";
import { CardCodeSnippets } from "../snipptes/Card";
import card2bg from "../assets/card1background.jpg";
import card3bg from "../assets/ecommercecard.png";
import card1bg from "../assets/Card1bg.webp";
import VortexMorphProductCard from "../components/Cards/VortexMorphProductCard/VortexMorphProductCard";
import NovaBurstProductCard from "../components/Cards/NovaBurstProductCard/NovaBurstProductCard";
import AuroraGlowProductCard from "../components/Cards/AuroraGlowProductCard/AuroraGlowProductCard";
import MedicalGlowProductCard from "../components/Cards/MedicalGlowProductCard/MedicalGlowProductCard";
import GameGlowProductCard from "../components/Cards/GameGlowProductCard/GameGlowProductCard";

const CardsPage: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<keyof typeof CardCodeSnippets>("Card1");
  const [showCode, setShowCode] = useState(false);
  const [activeTab, setActiveTab] = useState<"component" | "css" | "usage">("component");

  // Mapping components dynamically
  const Cards = {
    Card1: (
      <div className="w-full flex justify-center px-4 sm:px-8 py-10">
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
      </div>
    ),

    Card2: (
      <div className="w-full flex justify-center px-4 sm:px-8 py-10">
        <Card2
          image={card2bg}
          title="Dynamic Card"
          description="This card is fully configurable and reusable."
          width="w-96"
          height="h-96"
          titleFontSize="text-2xl"
          descriptionFontSize="text-base"
        />
      </div>
    ),

    Card3: (
      <div className="w-full flex justify-center px-4 sm:px-8 py-10">
        <Card3
          image={card3bg}
          title="Luxury Sneakers"
          description="Step into the ultimate comfort and style."
          price="$250"
          sizes={["S", "M", "L", "XL", "XXL"]}
          initialQuantity={1}
          maxQuantity={5}
          rating={4}
          totalReviews={300}
          buttonText="Buy Now"
          width="w-96"
          height="h-96"
          backgroundColor="bg-gradient-to-l from-green-400 via-blue-500 to-purple-600"
          onAddToCart={() => {
            alert("hello world");
          }}
        />
      </div>
    ),

    Card4: (
      <div className="w-full flex justify-center px-4 sm:px-8 py-10">
        <Card4
          image="https://via.placeholder.com/300"
          name="John Doe"
          designation="CEO, TechCorp"
          message="Great product!"
        />
      </div>
    ),

    NovaBurstProductCard: (
      <div
        className="w-full px-4 sm:px-8 py-20 flex justify-center items-center"
        style={{
          background: "radial-gradient(circle at center, #0f0c29, #1a1a2e, #000)",
        }}
      >
        <NovaBurstProductCard
          image="https://images.unsplash.com/photo-1594991523303-a54f2722dc3c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Nova Speaker Max"
          description="A 360° immersive audio system with reactive RGB flare and spatial clarity."
          price="$299"
          glowColor="#f472b6"
          backgroundColor="#0f172a"
          titleColor="#fefce8"
          descriptionColor="#fbcfe8"
          priceColor="#fb7185"
          buttonGradient="linear-gradient(to right, #ec4899, #db2777)"
          buttonShadowColor="#f472b6"
          borderRadius="24px"
          width="380px"
          height="560px"
          particleCount={20}
          onBuyClick={() => alert("added to cart!")}
        />
      </div>
    ),

    MedicalGlowProductCard: (
      <div
        className="w-full px-4 sm:px-8 py-20 flex justify-center items-center"
        style={{
          background:
            "linear-gradient(135deg, #e0f2f1 0%, #ffffff 40%, #c8e6c9 100%)",
        }}
      >
        <MedicalGlowProductCard
          image="https://images.unsplash.com/photo-1585207693488-a903901c1274?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRoZXJtb21ldGVyfGVufDB8fDB8fHww"
          title="Smart Health Thermometer"
          description="Accurately track body temperature in real-time. Bluetooth-enabled with mobile sync, alerts and real time updates."
          price="$89.99"
          backgroundGradient="linear-gradient(135deg, #ffffff, #e0f7fa, #c8e6c9)"
          titleColor="#0d47a1"
          descriptionColor="#4f5b62"
          priceColor="#00796b"
          cardShadowColor="rgba(0, 150, 136, 0.2)"
          particlePrimaryColor="#81d4fa"
          particleSecondaryColor="#aed581"
          buttonGradient="linear-gradient(to right, #26c6da, #66bb6a)"
          buttonShadowColor="#26a69a"
          borderRadius="24px"
          particleCount={20}
          width="400px"
          height="560px"
          onBuyClick={() => alert("added to cart!")}
        />
      </div>
    ),

    GameGlowProductCard: (
      <div
        className="w-full px-4 sm:px-8 py-32 flex justify-center items-center"
        style={{
          background:
            "linear-gradient(135deg, #0d0d0d 0%, #1a1f2b 50%, #101018 100%)",
        }}
      >
        <GameGlowProductCard
          image="https://images.unsplash.com/photo-1543622748-5ee7237e8565?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Neon Strike: Override"
          description="Hack the grid, race through neon-lit tunnels, and battle rogue AI in this electrifying cyberpunk shooter."
          price="$49.99"
          buttonText="Download Now"
          onBuyClick={() => alert("added to cart")}
          width="680px"
          height="300px"
          borderRadius="24px"
          particleCount={18}
        />
      </div>
    ),

    AuroraGlowProductCard: (
      <div
        className="w-full px-4 sm:px-8 py-20 flex justify-center items-center"
        style={{
          background: "linear-gradient(135deg, #fff7ed, #fde68a, #f97316)",
          boxShadow: "inset 0 0 80px rgba(0,0,0,0.05)",
        }}
      >
        <AuroraGlowProductCard
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Aurora Beam Headphones"
          description="Experience golden-hour listening — crisp, balanced, and elegant music with this headphone at a very low price."
          price="$349"
          backgroundGradient="linear-gradient(135deg, #fef3c7, #fcd34d, #fb923c)"
          titleColor="#78350f"
          descriptionColor="#92400e"
          priceColor="#b45309"
          cardShadowColor="rgba(234, 88, 12, 0.25)"
          particlePrimaryColor="#ffffff"
          particleSecondaryColor="#b45309"
          buttonGradient="linear-gradient(to right, #fbbf24, #f97316)"
          buttonShadowColor="#f59e0b"
          borderRadius="24px"
          particleCount={14}
          width="400px"
          height="560px"
          onBuyClick={() => alert("added to cart")}
        />
      </div>
    ),

    VortexMorphProductCard: (
      <div
        className="w-full px-4 sm:px-8 py-20 flex justify-center items-center"
        style={{
          background: "radial-gradient(circle at center, #030712, #0f172a, #1e293b)",
        }}
      >
        <VortexMorphProductCard
          image="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Nebula X Drone"
          description="AI-enhanced aerial drone with 4K streaming and autonomous navigation  and some other security features available at a very low price."
          price="$999"
          onBuyClick={() => alert("added to cart!")}
          glowColor="#60a5fa"
          backgroundColor="#0f172a"
          borderRadius="1.75rem"
          titleColor="#e0f2fe"
          descriptionColor="#cbd5e1"
          priceColor="#3b82f6"
          buttonGradient="linear-gradient(to right, #3b82f6, #06b6d4)"
          buttonShadowColor="#60a5fa"
          width="380px"
          height="520px"
        />
      </div>
    ),
  };


  return (
    <div className="md:p-4 p-1 sm:py-6 w-full md:w-[calc(100%-16rem)] md:ml-64">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 mt-16 md:mt-0">Cards</h1>

      {/* Navigation for Selecting Cards */}
      <div className="flex flex-wrap gap-4 sm:gap-6 mb-6">
        {Object.keys(Cards).map((card) => (
          <button
            key={card}
            onClick={() => setSelectedCard(card as keyof typeof Cards)}
            className={`px-4 py-2 rounded-lg text-sm sm:text-base transition ${selectedCard === card
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
          >
            {card}
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

      {/* Content (Either Demo or Code) */}
      <div className="w-full flex justify-center bg-gray-100 p-4 sm:p-10 rounded-lg shadow-lg overflow-x-auto">
        {!showCode ? (
          // Display the component demo
          Cards[selectedCard]
        ) : (
          // Display the code block with tabs
          <div className="w-full max-w-5xl bg-gray-900 text-white p-4 sm:p-6 rounded-lg shadow-lg">
            {/* Tabs for switching between code sections */}
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
              {["component", "css", "usage"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as "component" | "css" | "usage")}
                  className={`px-4 py-2 rounded-lg text-sm sm:text-base transition ${activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 hover:bg-gray-600"
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Code
                </button>
              ))}
            </div>

            {/* Show Correct Code for the Selected Card */}
            <CodeBlock code={CardCodeSnippets[selectedCard][activeTab]} />
          </div>
        )}
      </div>
    </div>

  );
};

export default CardsPage;
