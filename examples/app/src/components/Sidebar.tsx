import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-6 pt-20 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-400">UI Components</h2>
      <nav className="space-y-3">
        <NavLink
          to="/accordions"
          className={({ isActive }) => 
            `block p-3 text-lg rounded-lg transition-all duration-300 ${
              isActive ? "bg-blue-500 text-white font-semibold" : "hover:bg-gray-700 text-gray-300"
            }`
          }
        >
          📂 Accordions
        </NavLink>
        <NavLink
          to="/buttons"
          className={({ isActive }) => 
            `block p-3 text-lg rounded-lg transition-all duration-300 ${
              isActive ? "bg-blue-500 text-white font-semibold" : "hover:bg-gray-700 text-gray-300"
            }`
          }
        >
          🔘 Buttons
        </NavLink>
        <NavLink
          to="/cards"
          className={({ isActive }) => 
            `block p-3 text-lg rounded-lg transition-all duration-300 ${
              isActive ? "bg-blue-500 text-white font-semibold" : "hover:bg-gray-700 text-gray-300"
            }`
          }
        >
          🃏 Cards
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
