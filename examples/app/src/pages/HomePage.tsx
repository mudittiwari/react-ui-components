import React from "react";
import { Link } from "react-router-dom";
import { FaReact, FaTools, FaPalette, FaBolt, FaBookOpen } from "react-icons/fa";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Welcome to the React UI Components Library 🚀
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          A collection of **beautiful, reusable, and fully customizable** UI components for React.  
          Supercharge your web apps with interactive UI elements.
        </p>
        <div className="mt-8">
          <Link
            to="/accordions"
            className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 rounded-lg shadow-lg transition-all"
          >
            Explore Components →
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <FeatureCard
          icon={<FaReact className="text-blue-400 text-4xl" />}
          title="Built for React"
          description="Designed specifically for React with easy integration."
        />
        <FeatureCard
          icon={<FaTools className="text-yellow-400 text-4xl" />}
          title="Fully Customizable"
          description="Change colors, sizes, and behavior with simple props."
        />
        <FeatureCard
          icon={<FaPalette className="text-pink-400 text-4xl" />}
          title="Modern UI/UX"
          description="Crafted with modern design principles and animations."
        />
        <FeatureCard
          icon={<FaBolt className="text-green-400 text-4xl" />}
          title="Fast & Performant"
          description="Optimized for speed and best performance."
        />
        <FeatureCard
          icon={<FaBookOpen className="text-purple-400 text-4xl" />}
          title="Easy Documentation"
          description="Well-structured documentation with examples and code snippets."
        />
      </div>
    </div>
  );
};
const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
      {icon}
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
};

export default HomePage;
