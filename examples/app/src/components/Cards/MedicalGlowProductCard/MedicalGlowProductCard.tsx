import React, { useRef, useEffect } from "react";

interface MedicalGlowProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  onBuyClick?: () => void;
  backgroundGradient?: string;
  titleColor?: string;
  descriptionColor?: string;
  priceColor?: string;
  cardShadowColor?: string;
  particlePrimaryColor?: string;
  particleSecondaryColor?: string;
  buttonGradient?: string;
  buttonShadowColor?: string;
  borderRadius?: string;
  particleCount?: number;
  width?: string;
  height?: string;
}

const MedicalGlowProductCard: React.FC<MedicalGlowProductCardProps> = ({
  image,
  title,
  description,
  price,
  onBuyClick,
  backgroundGradient = "linear-gradient(135deg, #ffffff, #e0f7fa, #c8e6c9)",
  titleColor = "#0d47a1",
  descriptionColor = "#4f5b62",
  priceColor = "#00796b",
  cardShadowColor = "rgba(0, 150, 136, 0.2)",
  particlePrimaryColor = "#81d4fa",
  particleSecondaryColor = "#aed581",
  buttonGradient = "linear-gradient(to right, #26c6da, #66bb6a)",
  buttonShadowColor = "#26a69a",
  borderRadius = "20px",
  particleCount = 10,
  width = "360px",
  height = "540px",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
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
        .medical-card {
          width: ${width};
          height: ${height};
          background: ${backgroundGradient};
          border-radius: ${borderRadius};
          overflow: hidden;
          position: relative;
          color: ${titleColor};
          box-shadow: 0 0 20px ${cardShadowColor};
          transform-style: preserve-3d;
          transition: transform 0.4s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(0, 150, 136, 0.1);
          animation: subtleGlow 6s ease-in-out infinite alternate;
        }

        @keyframes subtleGlow {
          0% { box-shadow: 0 0 20px ${cardShadowColor}; }
          100% { box-shadow: 0 0 30px ${cardShadowColor}; }
        }

        .medical-card:hover {
          transform: scale(1.015) rotateX(0deg) rotateY(0deg);
          box-shadow: 0 0 30px ${cardShadowColor};
        }

        .medical-cross {
          position: absolute;
          width: 12px;
          height: 12px;
          background: ${particlePrimaryColor};
          opacity: 0.4;
          transform: rotate(45deg);
          animation: floatCross 10s ease-in-out infinite;
        }

        @keyframes floatCross {
          0% { transform: translate(0, 0) rotate(45deg); opacity: 0.4; }
          50% { transform: translate(10px, -20px) rotate(90deg); opacity: 0.7; }
          100% { transform: translate(-10px, -40px) rotate(135deg); opacity: 0.3; }
        }

        .medical-content {
          position: relative;
          z-index: 2;
          padding: 1.75rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .medical-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 1rem;
          box-shadow: 0 0 16px rgba(0,0,0,0.1);
          transition: transform 0.5s ease;
          animation: pulseImage 4s ease-in-out infinite alternate;
        }

        @keyframes pulseImage {
          0% { filter: brightness(1) drop-shadow(0 0 0 transparent); }
          100% { filter: brightness(1.08) drop-shadow(0 0 6px ${particleSecondaryColor}); }
        }

        .medical-card:hover .medical-image {
          transform: scale(1.06);
        }

        .medical-details {
          margin-top: 1.5rem;
        }

        .medical-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: ${titleColor};
        }

        .medical-description {
          font-size: 0.95rem;
          color: ${descriptionColor};
          margin-top: 0.5rem;
        }

        .medical-price {
          font-size: 1.2rem;
          color: ${priceColor};
          font-weight: 600;
          margin-top: 1rem;
        }

        .buy-button-medical {
          margin-top: 1.5rem;
          background: ${buttonGradient};
          color: white;
          font-weight: bold;
          padding: 0.75rem 1.5rem;
          border-radius: 14px;
          font-size: 1rem;
          box-shadow: 0 0 16px ${buttonShadowColor}66;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .buy-button-medical::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.15);
          transform: skewX(-20deg);
          transition: left 0.6s ease;
        }

        .buy-button-medical:hover::after {
          left: 120%;
        }

        .buy-button-medical:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px ${buttonShadowColor}aa;
        }
      `}</style>

      <div className="medical-card" ref={cardRef}>
        {[...Array(particleCount)].map((_, i) => (
          <span
            key={i}
            className="medical-cross"
            style={{
              top: `${Math.random() * 90 + 2}%`,
              left: `${Math.random() * 90 + 2}%`,
              background: i % 2 === 0 ? particlePrimaryColor : particleSecondaryColor,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          />
        ))}
        <div className="medical-content">
          <img src={image} alt={title} className="medical-image" />
          <div className="medical-details">
            <h2 className="medical-title">{title}</h2>
            <p className="medical-description">{description}</p>
            <p className="medical-price">{price}</p>
            <button className="buy-button-medical" onClick={onBuyClick}>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalGlowProductCard;
