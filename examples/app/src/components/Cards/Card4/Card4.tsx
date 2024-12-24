import React, { useState } from "react";
import testimonial from "../../../assets/testimonial.png";

const Card4: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 50, y: 50 });
  };

  return (
    <>
      <div
        className="relative w-96 h-auto bg-[#ffffff]/10 backdrop-blur-md rounded-2xl overflow-hidden border border-[#ffffff]/20 shadow-lg"
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${(mousePosition.y - 50) / 5}deg) rotateY(${(mousePosition.x - 50) / 5}deg)`
            : undefined,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && (
          <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.15), transparent 60%)`,
            }}
          ></div>
        )}
        <div className="relative z-10 p-6">
          <div className="flex flex-col items-center justify-center mb-4">
            <img
              src={testimonial}
              alt="Person"
              className="w-40 h-40 object-cover rounded-full border border-[#ffffff]/20"
            />
            <div className="ml-4 text-center mt-5">
              <h3 className="text-lg font-semibold text-[#f4e8c1]">John Doe</h3>
              <p className="text-sm text-[#d9d6cf]">CEO, Example Corp</p>
            </div>
          </div>
          <p className="text-[#d9d6cf] text-sm leading-relaxed text-center">
            "This is the best service I have ever used! The attention to detail
            and customer support are exceptional. Highly recommend to everyone."
          </p>
        </div>
      </div>
    </>
  );
};

export default Card4;
