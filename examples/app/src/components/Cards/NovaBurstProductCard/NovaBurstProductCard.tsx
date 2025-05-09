import React, { useRef, useEffect } from "react";

interface NovaBurstProductCardProps {
image: string;
title: string;
description: string;
price: string;
onBuyClick?: () => void;
glowColor?: string;
backgroundColor?: string;
borderRadius?: string;
titleColor?: string;
descriptionColor?: string;
priceColor?: string;
buttonGradient?: string;
buttonShadowColor?: string;
width?: string;
height?: string;
particleCount?: number;
}

const NovaBurstProductCard: React.FC<NovaBurstProductCardProps> = ({
image,
title,
description,
price,
onBuyClick,
glowColor = "#f472b6",
backgroundColor = "#0f172a",
borderRadius = "1.5rem",
titleColor = "#ffffff",
descriptionColor = "#d1d5db",
priceColor = "#f472b6",
buttonGradient = "linear-gradient(to right, #f472b6, #db2777)",
buttonShadowColor = "#f472b6",
width = "360px",
height = "540px",
particleCount = 14,
}) => {
const cardRef = useRef<HTMLDivElement>(null);

useEffect(() => {
const card = cardRef.current;
if (!card) return;

const handleMouseMove = (e: MouseEvent) => {
  const rect = card.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
  card.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
};

const resetTilt = () => {
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
};

card.addEventListener("mousemove", handleMouseMove);
card.addEventListener("mouseleave", resetTilt);

return () => {
  card.removeEventListener("mousemove", handleMouseMove);
  card.removeEventListener("mouseleave", resetTilt);
};

}, []);

return (
<>
<style>{`
.nova-card {
width: ${width};
height: ${height};
border-radius: ${borderRadius};
background: ${backgroundColor};
overflow: hidden;
position: relative;
box-shadow: 0 0 35px ${glowColor}22;
transition: transform 0.3s ease, box-shadow 0.3s ease;
transform-style: preserve-3d;
animation: softRise 6s ease-in-out infinite alternate;
}

    @keyframes softRise {
      0% { transform: translateY(0); }
      100% { transform: translateY(-6px); }
    }

    .nova-particles {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }

    .nova-particle {
      position: absolute;
      width: 5px;
      height: 5px;
      background: ${glowColor};
      opacity: 0.3;
      border-radius: 50%;
      animation: floatDrift 8s linear infinite;
      filter: blur(1px);
    }

    @keyframes floatDrift {
      0% { transform: translate(0, 0); }
      25% { transform: translate(10px, -20px); opacity: 0.6; }
      50% { transform: translate(-10px, -40px); opacity: 0.4; }
      75% { transform: translate(15px, -60px); opacity: 0.7; }
      100% { transform: translate(0, -80px); opacity: 0; }
    }

    .nova-content {
      position: relative;
      z-index: 2;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1.75rem;
      transform-style: preserve-3d;
    }

    .nova-image-container {
      width: 100%;
      height: 240px;
      overflow: hidden;
      border-radius: 1rem;
      background: #1e1b4b;
      box-shadow: 0 0 20px ${glowColor}22;
      transform: translateZ(20px);
    }

    .nova-image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .nova-card:hover .nova-image-container img {
      transform: scale(1.06);
    }

    .nova-details {
      margin-top: 1.25rem;
      color: ${titleColor};
      transform: translateZ(10px);
    }

    .nova-title {
      font-size: 1.4rem;
      font-weight: 700;
      color: ${titleColor};
    }

    .nova-description {
      font-size: 0.92rem;
      color: ${descriptionColor};
      margin-top: 0.4rem;
    }

    .nova-price {
      font-size: 1.2rem;
      font-weight: 600;
      margin-top: 1rem;
      color: ${priceColor};
    }

    .buy-button-novaburst {
      background: ${buttonGradient};
      color: white;
      font-weight: bold;
      padding: 0.8rem 1.5rem;
      border-radius: 14px;
      font-size: 1rem;
      margin-top: 1.4rem;
      transition: all 0.3s ease;
      box-shadow: 0 0 12px ${buttonShadowColor}55;
    }

    .buy-button-novaburst:hover {
      transform: scale(1.07);
      box-shadow: 0 0 25px ${buttonShadowColor}aa;
    }
  `}</style>

  <div className="nova-card" ref={cardRef}>
    <div className="nova-particles">
      {Array.from({ length: particleCount }).map((_, i) => (
        <span
          key={i}
          className="nova-particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
    <div className="nova-content">
      <div className="nova-image-container">
        <img src={image} alt={title} />
      </div>
      <div className="nova-details">
        <h2 className="nova-title">{title}</h2>
        <p className="nova-description">{description}</p>
        <p className="nova-price">{price}</p>
        <button className="buy-button-novaburst" onClick={onBuyClick}>
          Buy Now
        </button>
      </div>
    </div>
  </div>
</>

);
};

export default NovaBurstProductCard;