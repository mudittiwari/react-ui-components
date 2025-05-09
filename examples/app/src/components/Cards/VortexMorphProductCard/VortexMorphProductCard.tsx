import React, { useRef } from "react";

interface VortexMorphProductCardProps {
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
}

const VortexMorphProductCard: React.FC<VortexMorphProductCardProps> = ({
  image,
  title,
  description,
  price,
  onBuyClick,
  glowColor = "#8b5cf6",
  backgroundColor = "#0f172a",
  borderRadius = "1.5rem",
  titleColor = "#ffffff",
  descriptionColor = "#cbd5e1",
  priceColor = "#f472b6",
  buttonGradient = "linear-gradient(135deg, #8b5cf6, #9333ea)",
  buttonShadowColor = "#8b5cf6",
  width = "340px",
  height = "520px",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    card.style.transform = `rotateX(${-y}deg) rotateY(${x}deg) scale(1.02)`;
  };

  const resetTilt = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    }
  };

  return (
    <>
      <style>{`
        .vortex-card {
          perspective: 1200px;
          width: ${width};
          height: ${height};
          border-radius: ${borderRadius};
          background: ${backgroundColor};
          overflow: hidden;
          transition: box-shadow 0.4s ease, transform 0.4s ease;
          box-shadow: 0 0 35px ${glowColor}44 inset;
          animation: cardFadeIn 0.8s ease-out;
          position: relative;
          transform-style: preserve-3d;
        }

        .vortex-layer {
          position: absolute;
          inset: -35%;
          border-radius: 50%;
          background: radial-gradient(circle, ${glowColor}55 0%, transparent 70%);
          filter: blur(60px);
          z-index: 0;
        }

        .vortex-layer:nth-child(1) {
          animation: spinClockwise 18s linear infinite;
          opacity: 0.45;
        }

        .vortex-layer:nth-child(2) {
          animation: spinCounter 24s linear infinite;
          opacity: 0.35;
        }

        .card-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.6rem;
          backdrop-filter: blur(4px);
        }

        .product-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 1rem;
          box-shadow: 0 0 18px ${glowColor}33;
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }

        .vortex-card:hover .product-image {
          transform: scale(1.05) translateY(-4px);
          box-shadow: 0 0 30px ${glowColor}aa;
        }

        .buy-button-vortex {
          background: ${buttonGradient};
          color: white;
          font-weight: bold;
          padding: 0.75rem 1.5rem;
          border-radius: 14px;
          cursor: pointer;
          margin-top: 1.5rem;
          font-size: 0.95rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 0 10px ${buttonShadowColor}66;
        }

        .buy-button-vortex:hover {
          transform: scale(1.06);
          box-shadow: 0 0 20px ${buttonShadowColor}aa;
        }

        @keyframes spinClockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes spinCounter {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }

        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(30px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>

      <div
        className="vortex-card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
      >
        <div className="vortex-layer" />
        <div className="vortex-layer" />
        <div className="card-content">
          <img src={image} alt={title} className="product-image" />
          <div className="mt-4">
            <h2 className="text-2xl font-semibold" style={{ color: titleColor }}>{title}</h2>
            <p className="text-sm mt-1" style={{ color: descriptionColor }}>{description}</p>
            <p className="text-xl mt-3 font-bold" style={{ color: priceColor }}>{price}</p>
            <button className="buy-button-vortex" onClick={onBuyClick}>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VortexMorphProductCard;
