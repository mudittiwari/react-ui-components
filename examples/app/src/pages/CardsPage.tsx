import React, { useState } from "react";
import { Card1, Card2, Card3, Card4 } from "react-ui-components-mudittiwari13";
import CodeBlock from "../components/CodeBlock";
import { FaCode } from "react-icons/fa";
import { CardCodeSnippets } from "../snipptes/Card";
import card2bg from "../assets/card1background.jpg";
import card3bg from "../assets/ecommercecard.png";
import card1bg from "../assets/Card1bg.webp";

const CardsPage: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<keyof typeof CardCodeSnippets>("Card1");
  const [showCode, setShowCode] = useState(false);
  const [activeTab, setActiveTab] = useState<"component" | "css" | "usage">("component");

  // Mapping components dynamically
  const Cards = {
    Card1: <Card1
    title="Explore China"
    description="China is a beautiful country with a rich history, vibrant culture, and stunning landscapes. From the Great Wall to the bustling city of Shanghai, there is much to discover."
    image={card1bg}
    width="25rem"
    height="25rem"
    rotationDirection="Y"
    overlayColor="rgba(0, 0, 0, 0.8)"
    overlayOpacity={0.9}
  />,
    Card2: <Card2
    image={card2bg}
    title="Dynamic Card"
    description="This card is fully configurable and reusable."
    width="w-96"
    height="h-96"
    titleFontSize="text-2xl"
    descriptionFontSize="text-base"
  />,
    Card3: <Card3
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
  />,
    Card4: <Card4 image="https://via.placeholder.com/300" name="John Doe" designation="CEO, TechCorp" message="Great product!" />,
  };

  return (
    <div className="p-6 w-[85%] ml-auto">
      <h1 className="text-3xl font-bold mb-4">Cards</h1>

      {/* Navigation for Selecting Cards */}
      <div className="flex space-x-4 mb-6">
        {Object.keys(Cards).map((card) => (
          <button
            key={card}
            onClick={() => setSelectedCard(card as keyof typeof Cards)}
            className={`px-4 py-2 rounded-lg ${
              selectedCard === card ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {card}
          </button>
        ))}
      </div>

      {/* Toggle Code View Button */}
      <button
        className="absolute top-24 right-6 px-4 py-2 flex items-center space-x-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
        onClick={() => setShowCode(!showCode)}
      >
        <FaCode className="text-lg" />
        <span>{showCode ? "Show Demo" : "Show Code"}</span>
      </button>

      {/* Content (Either Demo or Code) */}
      <div className="w-full flex justify-center bg-gray-100 p-10 rounded-lg shadow-lg">
        {!showCode ? (
          // Display the component demo
          Cards[selectedCard]
        ) : (
          // Display the code block with tabs
          <div className="w-full bg-gray-900 text-white p-6 rounded-lg shadow-lg">
            {/* Tabs for switching between code sections */}
            <div className="flex space-x-4 mb-4">
              {["component", "css", "usage"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as "component" | "css" | "usage")}
                  className={`px-4 py-2 rounded-lg ${
                    activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-700 hover:bg-gray-600"
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
