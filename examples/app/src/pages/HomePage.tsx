import React from "react";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaTools,
  FaPalette,
  FaBolt,
  FaBookOpen,
} from "react-icons/fa";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-20 w-[85%] ml-auto relative overflow-hidden">
      {/* Floating Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight drop-shadow-md">
            Welcome to the React UI Components Library 🚀
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            A collection of <strong className="text-white">beautiful, reusable</strong>, and <strong className="text-white">fully customizable</strong> UI components for React.<br />
            Supercharge your web apps with interactive UI elements.
          </p>
          <div className="mt-8">
            <Link
              to="/accordions"
              className="inline-block px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">🚀 Explore Components →</span>
              <span className="absolute inset-0 bg-white opacity-10 blur-sm group-hover:scale-110 transition-transform duration-500"></span>
            </Link>
          </div>
        </div>
        {/* Shimmering Glow Ball */}
        <div className="hidden md:block w-72 h-72 bg-gradient-to-tr from-indigo-500 to-pink-500 opacity-25 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Features Section */}
      <div className="mt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto z-10 relative">
        {featureData.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => {
  return (
    <div
      className="bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-indigo-500 hover:shadow-indigo-500/20 transform transition duration-500 ease-in-out hover:-translate-y-1 opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}s`, animationFillMode: "forwards" }}
    >
      <div className="flex justify-center">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
};

const featureData = [
  {
    icon: <FaReact className="text-blue-400 text-4xl" />,
    title: "Built for React",
    description: "Designed specifically for React with easy integration.",
  },
  {
    icon: <FaTools className="text-yellow-400 text-4xl" />,
    title: "Fully Customizable",
    description: "Change colors, sizes, and behavior with simple props.",
  },
  {
    icon: <FaPalette className="text-pink-400 text-4xl" />,
    title: "Modern UI/UX",
    description: "Crafted with modern design principles and animations.",
  },
  {
    icon: <FaBolt className="text-green-400 text-4xl" />,
    title: "Fast & Performant",
    description: "Optimized for speed and best performance.",
  },
  {
    icon: <FaBookOpen className="text-purple-400 text-4xl" />,
    title: "Easy Documentation",
    description: "Well-structured documentation with examples and code snippets.",
  },
];

export default HomePage;
