import React, { useRef, useEffect } from "react";

interface AuroraGlowProductCardProps {
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

const AuroraGlowProductCard: React.FC<AuroraGlowProductCardProps> = ({
  image,
  title,
  description,
  price,
  onBuyClick,
  backgroundGradient = "linear-gradient(135deg, #0f0c29, #302b63, #1a1a2e)",
  titleColor = "#ffffff",
  descriptionColor = "#cbd5e1",
  priceColor = "#60a5fa",
  cardShadowColor = "rgba(99, 102, 241, 0.25)",
  particlePrimaryColor = "#60a5fa",
  particleSecondaryColor = "#22d3ee",
  buttonGradient = "linear-gradient(to right, #6366f1, #a855f7)",
  buttonShadowColor = "#7c3aed",
  borderRadius = "24px",
  particleCount = 12,
  width = "360px",
  height = "540px",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
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
.aurora-card {
width: ${width};
height: ${height};
background: ${backgroundGradient};
border-radius: ${borderRadius};
overflow: hidden;
position: relative;
color: ${titleColor};
box-shadow: 0 0 30px ${cardShadowColor};
transform-style: preserve-3d;
animation: floatBounce 5s ease-in-out infinite alternate;
}

    @keyframes floatBounce {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-4px); }
      100% { transform: translateY(0px); }
    }

    .aura-trail {
      position: absolute;
      top: 0;
      left: -50%;
      width: 200%;
      height: 200%;
      background: repeating-conic-gradient(from 0deg, ${particlePrimaryColor} 0deg, ${particlePrimaryColor} 30deg, transparent 30deg, transparent 60deg);
      animation: rotateTrail 12s linear infinite;
      mix-blend-mode: screen;
      opacity: 0.1;
      z-index: 0;
    }

    @keyframes rotateTrail {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .wave-particle {
      position: absolute;
      width: 6px;
      height: 6px;
      background: radial-gradient(circle, ${particlePrimaryColor} 0%, ${particleSecondaryColor} 100%);
      border-radius: 50%;
      filter: blur(3px);
      opacity: 0.4;
      animation: zigZagWave 8s ease-in-out infinite;
    }

    @keyframes zigZagWave {
      0% { transform: translate(0, 0); opacity: 0.3; }
      25% { transform: translate(15px, -20px); opacity: 0.6; }
      50% { transform: translate(-10px, -40px); opacity: 0.8; }
      75% { transform: translate(8px, -60px); opacity: 0.5; }
      100% { transform: translate(-5px, -90px); opacity: 0; }
    }

    .aurora-content {
      position: relative;
      z-index: 2;
      padding: 1.75rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .aurora-image {
      width: 100%;
      height: 220px;
      object-fit: cover;
      border-radius: 1rem;
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
      transition: transform 0.5s ease;
      animation: pulseImage 4s ease-in-out infinite alternate;
    }

    @keyframes pulseImage {
      0% { filter: brightness(1); }
      100% { filter: brightness(1.1); }
    }

    .aurora-card:hover .aurora-image {
      transform: scale(1.06);
    }

    .aurora-details {
      margin-top: 1.5rem;
    }

    .aurora-title {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .aurora-description {
      font-size: 0.95rem;
      color: ${descriptionColor};
      margin-top: 0.4rem;
    }

    .aurora-price {
      font-size: 1.2rem;
      color: ${priceColor};
      font-weight: 600;
      margin-top: 1rem;
    }

    .buy-button-aurora {
      margin-top: 1.5rem;
      background: ${buttonGradient};
      color: white;
      font-weight: bold;
      padding: 0.75rem 1.5rem;
      border-radius: 14px;
      font-size: 1rem;
      box-shadow: 0 0 16px ${buttonShadowColor}66;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .buy-button-aurora:hover {
      transform: scale(1.07);
      box-shadow: 0 0 30px ${buttonShadowColor}aa;
    }
  `}</style>

      <div className="aurora-card" ref={cardRef}>
        <div className="aura-trail" />
        {[...Array(particleCount)].map((_, i) => (
          <span
            key={i}
            className="wave-particle"
            style={{
              top: `${Math.random() * 90 + 5}%`,
              left: `${Math.random() * 90 + 5}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          />
        ))}
        <div className="aurora-content">
          <img src={image} alt={title} className="aurora-image" />
          <div className="aurora-details">
            <h2 className="aurora-title">{title}</h2>
            <p className="aurora-description">{description}</p>
            <p className="aurora-price">{price}</p>
            <button className="buy-button-aurora" onClick={onBuyClick}>Buy Now</button>
          </div>
        </div>
      </div>
    </>

  );
};

export default AuroraGlowProductCard;