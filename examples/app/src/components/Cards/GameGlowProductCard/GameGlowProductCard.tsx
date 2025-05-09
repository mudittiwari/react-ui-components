import React, { useRef, useEffect } from "react";

interface GameGlowProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  onBuyClick?: () => void;
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundGradient?: string;
  titleColor?: string;
  descriptionColor?: string;
  priceColor?: string;
  buttonText?: string;
  buttonGradient?: string;
  buttonTextColor?: string;
  buttonShadowColor?: string;
  particlePrimaryColor?: string;
  particleSecondaryColor?: string;
  particleCount?: number;
}

const GameGlowProductCard: React.FC<GameGlowProductCardProps> = ({
  image,
  title,
  description,
  price,
  onBuyClick,
  width = "680px",
  height = "300px",
  borderRadius = "22px",
  backgroundGradient = "linear-gradient(135deg, #0e0f17, #1f2937)",
  titleColor = "#a855f7",
  descriptionColor = "#cbd5e1",
  priceColor = "#22c55e",
  buttonText = "Buy Now",
  buttonGradient = "linear-gradient(to right, #9333ea, #06b6d4)",
  buttonTextColor = "#f0fdfa",
  buttonShadowColor = "#06b6d4",
  particlePrimaryColor = "#a855f7",
  particleSecondaryColor = "#06b6d4",
  particleCount = 16,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        .game-card {
          width: 100%;
          max-width: ${width};
          border-radius: ${borderRadius};
          background: ${backgroundGradient};
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.05);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          animation: slideInFade 0.7s ease-out;
        }

        @media (min-width: 768px) {
          .game-card {
            flex-direction: row;
            height: ${height};
          }
        }

        .game-card:hover {
          transform: scale(1.015);
          box-shadow: 0 0 50px ${buttonShadowColor}55;
        }

        @keyframes slideInFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .game-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(0,255,255,0.08), transparent 60%);
          pointer-events: none;
          transition: all 0.2s ease;
        }

        .game-card::after {
          content: "";
          position: absolute;
          top: -60%;
          left: -40%;
          width: 200%;
          height: 200%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.05), transparent);
          transform: rotate(25deg);
          animation: shine 6s ease-in-out infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-150%) rotate(25deg); }
          50% { transform: translateX(150%) rotate(25deg); }
          100% { transform: translateX(150%) rotate(25deg); }
        }

        .card-left {
          flex: 1 1 45%;
          background-image: url('${image}');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: flex-end;
          padding: 1rem;
          position: relative;
          border-bottom: 2px solid ${buttonShadowColor};
        }

        @media (min-width: 768px) {
          .card-left {
            border-bottom: none;
            border-right: 2px solid ${buttonShadowColor};
          }
        }

        .glow-tag {
          background: ${buttonShadowColor};
          padding: 0.35rem 0.7rem;
          border-radius: 8px;
          font-size: 0.75rem;
          color: #000;
          box-shadow: 0 0 12px ${buttonShadowColor};
          animation: flickPulse 2.5s ease-in-out infinite alternate;
        }

        @keyframes flickPulse {
          0% { box-shadow: 0 0 8px ${buttonShadowColor}; opacity: 0.85; }
          100% { box-shadow: 0 0 14px ${buttonShadowColor}; opacity: 1; }
        }

        .card-right {
          flex: 1 1 55%;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 1;
        }

        .game-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: ${titleColor};
          text-shadow: 0 0 4px ${titleColor}55;
        }

        @media (min-width: 640px) {
          .game-title {
            font-size: 1.6rem;
          }
        }

        .game-description {
          margin-top: 0.5rem;
          font-size: 0.85rem;
          color: ${descriptionColor};
        }

        @media (min-width: 640px) {
          .game-description {
            font-size: 0.95rem;
          }
        }

        .game-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.5rem;
        }

        .game-price {
          font-size: 1.1rem;
          font-weight: bold;
          color: ${priceColor};
          text-shadow: 0 0 4px ${priceColor}55;
        }

        @media (min-width: 640px) {
          .game-price {
            font-size: 1.25rem;
          }
        }

        .buy-button {
          padding: 0.6rem 1.2rem;
          font-size: 0.9rem;
          font-weight: bold;
          background: ${buttonGradient};
          color: ${buttonTextColor};
          border-radius: 14px;
          box-shadow: 0 0 14px ${buttonShadowColor};
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .buy-button {
            font-size: 1rem;
          }
        }

        .buy-button::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          transform: skewX(-20deg);
          transition: left 0.5s ease;
        }

        .buy-button:hover::after {
          left: 120%;
        }

        .buy-button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 24px ${buttonShadowColor};
        }

        .spark {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${particlePrimaryColor};
          animation: flicker 4s ease-in-out infinite;
          opacity: 0.12;
        }

        @keyframes flicker {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.1; }
          50% { transform: translateY(-10px) scale(1.3); opacity: 0.4; }
        }
      `}</style>

      <div className="game-card" ref={cardRef}>
        <div className="card-left">
          <div className="glow-tag">🎮 PC / Steam</div>
        </div>
        <div className="card-right">
          <div>
            <div className="game-title">{title}</div>
            <div className="game-description">{description}</div>
          </div>
          <div className="game-footer">
            <div className="game-price">{price}</div>
            <button className="buy-button" onClick={onBuyClick}>
              {buttonText}
            </button>
          </div>
        </div>
        {[...Array(particleCount)].map((_, i) => (
          <span
            key={i}
            className="spark"
            style={{
              top: `${Math.random() * 95 + 1}%`,
              left: `${Math.random() * 95 + 1}%`,
              background: i % 2 === 0 ? particlePrimaryColor : particleSecondaryColor,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default GameGlowProductCard;
