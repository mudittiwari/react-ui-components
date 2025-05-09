import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-900 text-white shadow-lg py-4 px-6 fixed w-full top-0 z-50 mb-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="md:text-2xl text:md font-bold tracking-wide">
        React UI Snippets by Mudit Tiwari
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/accordions" label="Accordions" location={location} />
          <NavLink to="/buttons" label="Buttons" location={location} />
          <NavLink to="/cards" label="Cards" location={location} />
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; label: string; location: any }> = ({
  to,
  label,
  location,
}) => {
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-lg font-medium ${
        isActive ? "text-blue-400 border-b-2 border-blue-400" : "hover:text-blue-300"
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;
