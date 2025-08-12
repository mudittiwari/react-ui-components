import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";

const Sidebar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hooksDropdownOpen, setHooksDropdownOpen] = useState(false);

  const links = [
    { to: "/accordions", label: "📂 Accordions" },
    { to: "/buttons", label: "🔘 Buttons" },
    { to: "/cards", label: "🃏 Cards" },
  ];

  const demos = [
    { to: "/standalone/callStackOneDemo", label: "Call Stack Demo 1" },
    { to: "/standalone/callStackTwoDemo", label: "Call Stack Demo 2" },
    { to: "/standalone/revealCenter", label: "Reveal Center" },
    { to: "/standalone/revealContentOnScroll", label: "Reveal on Scroll" },
    { to: "/standalone/themeChangeIcon", label: "Theme Change" },
    { to: "/standalone/eventLoopOne", label: "Event Loop Demo" },
    { to: "/standalone/elevator", label: "Elevator LLD" },
    { to: "/standalone/parkingSystem", label: "Parking System" },
  ];

  const hooks = [
    { to: "/hooks/useDeferredValue", label: "useDeferredValue" },
    { to: "/hooks/custom/UseIdleTimer", label: "Idle Timer(Custom)" },
    { to: "/hooks/custom/UseUndoRedoWithHistory", label: "Undo Remo Hook(Custom)" },
  ]

  return (
    <>
      <div className="md:hidden fixed top-16 left-4 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white bg-gray-800 p-2 rounded-md shadow-md focus:outline-none"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      <div className="hidden md:block fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-6 pt-20 shadow-lg z-40">
        <h2 className="text-2xl font-bold mb-6 text-blue-400">UI Components</h2>
        <nav className="space-y-2 text-sm">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `block p-2 rounded-md transition-all duration-300 ${isActive
                  ? "bg-blue-500 text-white font-semibold"
                  : "hover:bg-gray-700 text-gray-300"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-between w-full p-2 rounded-md text-gray-300 hover:bg-gray-700 transition-all duration-300"
          >
            <span>📦 Standalone Demos</span>
            <HiChevronDown
              className={`transform transition-transform ${dropdownOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          {dropdownOpen && (
            <div className="ml-4 mt-2 space-y-2">
              {demos.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `block p-2 rounded-md text-xs transition-all duration-300 ${isActive
                      ? "bg-blue-500 text-white font-semibold"
                      : "hover:bg-gray-700 text-gray-300"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          )}

          <button
            onClick={() => setHooksDropdownOpen(!hooksDropdownOpen)}
            className="flex items-center justify-between w-full p-2 rounded-md text-gray-300 hover:bg-gray-700 transition-all duration-300"
          >
            <span>📦 React Hooks</span>
            <HiChevronDown
              className={`transform transition-transform ${hooksDropdownOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          {hooksDropdownOpen && (
            <div className="ml-4 mt-2 space-y-2">
              {hooks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `block p-2 rounded-md text-xs transition-all duration-300 ${isActive
                      ? "bg-blue-500 text-white font-semibold"
                      : "hover:bg-gray-700 text-gray-300"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          )}


        </nav>
      </div>

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
            <nav className="space-y-2 text-sm">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block p-2 rounded-md transition-all duration-300 ${isActive
                      ? "bg-blue-500 text-white font-semibold"
                      : "hover:bg-gray-700 text-gray-300"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}

              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full p-2 rounded-md text-gray-300 hover:bg-gray-700 transition-all duration-300"
              >
                <span>📦 Standalone Demos</span>
                <HiChevronDown
                  className={`transform transition-transform ${dropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {dropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {demos.map(({ to, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block p-2 rounded-md text-xs transition-all duration-300 ${isActive
                          ? "bg-blue-500 text-white font-semibold"
                          : "hover:bg-gray-700 text-gray-300"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              )}



              <button
                onClick={() => setHooksDropdownOpen(!hooksDropdownOpen)}
                className="flex items-center justify-between w-full p-2 rounded-md text-gray-300 hover:bg-gray-700 transition-all duration-300"
              >
                <span>📦 React Hooks</span>
                <HiChevronDown
                  className={`transform transition-transform ${hooksDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {hooksDropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {hooks.map(({ to, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      className={({ isActive }) =>
                        `block p-2 rounded-md text-xs transition-all duration-300 ${isActive
                          ? "bg-blue-500 text-white font-semibold"
                          : "hover:bg-gray-700 text-gray-300"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
