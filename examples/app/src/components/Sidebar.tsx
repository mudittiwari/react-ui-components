import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Sidebar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/accordions", label: "📂 Accordions" },
    { to: "/buttons", label: "🔘 Buttons" },
    { to: "/cards", label: "🃏 Cards" },
  ];

  return (
    <>
      {/* Toggle Button (mobile only) */}
      <div className="md:hidden fixed top-16 left-4 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white bg-gray-800 p-2 rounded-md shadow-md focus:outline-none"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Sidebar (desktop) */}
      <div className="hidden md:block fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-6 pt-20 shadow-lg z-40">
        <h2 className="text-2xl font-bold mb-6 text-blue-400">UI Components</h2>
        <nav className="space-y-3">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `block p-3 text-lg rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-blue-500 text-white font-semibold"
                    : "hover:bg-gray-700 text-gray-300"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Sidebar Overlay (mobile only) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 pt-20 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-6 text-blue-400 mt-10 text-center">UI Components</h2>
            <nav className="space-y-3">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block p-3 text-sm rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-blue-500 text-white font-semibold"
                        : "hover:bg-gray-700 text-gray-300"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
