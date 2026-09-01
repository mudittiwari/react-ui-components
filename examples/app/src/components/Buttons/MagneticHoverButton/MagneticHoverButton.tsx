import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './MagneticHoverButton.css';

interface MagneticHoverButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  padding?: string;
  fontSize?: string;
  borderRadius?: string;
  glowColor?: string;
  elasticity?: number;
}

const MagneticHoverButton: React.FC<MagneticHoverButtonProps> = ({
  label,
  onClick,
  className = '',
  backgroundColor = 'rgba(10, 10, 10, 0.8)',
  textColor = '#ffffff',
  padding = '1.2rem 3rem',
  fontSize = '1.15rem',
  borderRadius = '999px',
  glowColor = 'rgba(168, 85, 247, 0.6)',
  elasticity = 0.2, // How strongly it pulls towards mouse
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values for smooth spring physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configuration for the magnetic pull
  const springConfig = { damping: 15, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Rotation based on movement to create 3D parallax
  const rotateX = useTransform(smoothY, [-50, 50], [15, -15]);
  const rotateY = useTransform(smoothX, [-50, 50], [-15, 15]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Move the button towards the mouse (magnetic pull)
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    x.set(distanceX * elasticity);
    y.set(distanceY * elasticity);
    
    // Set raw mouse values for the glow effect (centered on cursor)
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Spring back to center
    x.set(0);
    y.set(0);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`magnetic-hover-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        perspective: '800px', // Enhanced 3D effect
      }}
    >
      {/* Outer Aura Glow (follows cursor but outside the button) */}
      {isHovered && (
        <motion.div
          className="magnetic-outer-aura"
          style={{
            x: mouseX,
            y: mouseY,
            background: `radial-gradient(circle 80px at center, ${glowColor}, transparent 70%)`,
          }}
        />
      )}

      <motion.div
        className="magnetic-hover-button"
        style={{
          x: smoothX,
          y: smoothY,
          rotateX,
          rotateY,
          borderRadius,
        }}
      >
        {/* Cursor tracking inner flashlight effect */}
        {isHovered && (
          <motion.div
            className="magnetic-hover-glow"
            style={{
              x: mouseX,
              y: mouseY,
              background: `radial-gradient(circle 60px at center, ${glowColor}, transparent 80%)`,
            }}
          />
        )}
        
        {/* The Glassy Inner Button Content */}
        <div 
          className="magnetic-hover-inner"
          style={{
            backgroundColor,
            padding,
            fontSize,
            borderRadius,
            color: textColor,
          }}
        >
          <span className="magnetic-text relative z-10 font-bold tracking-widest uppercase" style={{ pointerEvents: 'none' }}>
            {label}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MagneticHoverButton;
