import React, { useState } from "react";
import { MovingBorderButton, MovingBeforeLeftRightButton, MovingCornerBorderButton } from "react-ui-components-mudittiwari13";
import CodeBlock from "../components/CodeBlock";
import { FaCode } from "react-icons/fa";
import { ButtonCodeSnippets } from "../snipptes/Button";
import GlowPulseButton from "../components/Buttons/GlowPulseButton/GlowPulseButton";
import FlipRevealButton from "../components/Buttons/FlipRevealButton/FlipRevealButton";
import BulletHoverButton from "../components/Buttons/BulletHoverButton/BulletHoverButton";
import RippleBurstButton from "../components/Buttons/RippleBurstButton/RippleBurstButton";
import WaveGlowButton from "../components/Buttons/WaveGlowButton/WaveGlowButton";
import TrailStreakButton from "../components/Buttons/TrailStreakButton/TrailStreakButton";
import CyberGlitchButton from "../components/Buttons/CyberGlitchButton/CyberGlitchButton";
import ShockWaveButton from "../components/Buttons/ShockWaveButton/ShockWaveButton";
import QuantumBlobButton from "../components/Buttons/QuantumBlobButton/QuantumBlobButton";
import MagnetOrbitButton from "../components/Buttons/MagnetOrbitButton/MagnetOrbitButton";
import { CometTrailButton } from "../components/Buttons/CometTrailButton/CometTrailButton";
import { StarPulseButton } from "../components/Buttons/StarPulseButton/StarPulseButton";

const ButtonsPage: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<keyof typeof ButtonCodeSnippets>("MovingBorderButton");
  const [showCode, setShowCode] = useState(false);
  const [activeTab, setActiveTab] = useState<"component" | "css" | "usage">("component");

  const Buttons = {
    MovingBorderButton: (
      <MovingBorderButton label='click me!' onClick={() => { console.log("button clicked") }} className='px-2 py-2' backgroundColor='white' color='black' linearGradient='linear-gradient(to right, #cac531, #f3f9a7)'></MovingBorderButton>
    ),
    MovingBeforeLeftRightButton: (
      <MovingBeforeLeftRightButton label='Subscribe!' onClick={() => { console.log("button clicked") }} className='px-8 py-4' backgroundColor='#F26B0F' color='white' beforeColor='#FCC737' borderRadius='30px' hoverTextColor='#7E1891' />
    ),
    MovingCornerBorderButton: (
      <MovingCornerBorderButton label='click me!' onClick={() => { console.log("button clicked") }} className='px-2 py-2' backgroundColor='white' color='black' linearGradient='linear-gradient(to right, #0f0c29, #302b63, #24243e)'></MovingCornerBorderButton>
    ),
    GlowPulseButton: (
      <GlowPulseButton
        label="Click Me"
        onClick={() => console.log("Glow clicked")}
        backgroundColor="#1e1b4b"
        color="#facc15"
        glowColor="linear-gradient(135deg, #6366f1, #a78bfa, #f472b6)"
        borderRadius="16px"
      />
    ),
    FlipRevealButton: (
      <FlipRevealButton
        labelFront="Purchase"
        labelBack="Confirm Order"
        onClick={() => console.log("Confirmed")}
        frontColor="linear-gradient(135deg, #1e3a8a, #6366f1)"
        backColor="linear-gradient(135deg, #ec4899, #f43f5e)"
        textColor="#ffffff"
        borderRadius="16px"
        glowColor="#ec4899"
      />
    ),
    BulletHoverButton: (
      <BulletHoverButton
        label="Get Started"
        onClick={() => console.log("Bullet clicked")}
        backgroundGradient="linear-gradient(135deg, #0f0c29, #302b63, #24243e)"
        textColor="#facc15"
        bulletColor="#a855f7"
        hoverTextColor="#ffffff"
        borderRadius="16px"
      />
    ),
    RippleBurstButton: (
      <RippleBurstButton
        label="Join Now"
        onClick={() => console.log("Ripple Clicked")}
        backgroundColor="#1e3a8a"
        color="#facc15"
        rippleColor="#a855f7"
        borderRadius="14px"
      />
    ),
    WaveGlowButton: (
      <WaveGlowButton
        label="Enter the Vault"
        onClick={() => console.log("Wave button clicked")}
        textColor="#fef9c3"
        borderRadius="20px"
      />
    ),
    TrailStreakButton: (
      <TrailStreakButton
        label="Explore More"
        onClick={() => console.log("Streak trail")}
        background="linear-gradient(135deg, #0f0c29, #302b63, #24243e)"
        textColor="#facc15"
      />
    ),
    MagnetOrbitButton: (
      <div className="w-full h-full p-16"
        style={{
          background: "linear-gradient(135deg, #0d0b26 0%, #1e1b4b 50%, #111827 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MagnetOrbitButton
          label="Solar Flare"
          onClick={() => console.log("🌞 Flare ignited")}
          textColor="#fef9c3"
          backgroundColor="#111827"
          orbitColor="#facc15"
          shadowColor="#facc15"
          borderRadius="26px"
          fontSize="1.2rem"
          fontWeight="800"
          padding="1.2rem 3.2rem"
          particleCount={24}
        />
      </div>
    ),
    ShockWaveButton: (
      <ShockWaveButton
        label="Activate Portal"
        onClick={() => console.log("⚡ Portal Pulse")}
        textColor="#fdf4ff"
        backgroundColor="#1e1b4b"
        waveColor="#c084fc"
        borderRadius="32px"
        fontSize="1.15rem"
        fontWeight="800"
        padding="1rem 2.8rem"
      />
    ),
    QuantumBlobButton: (
      <div className="w-full p-16"
        style={{
          background: 'radial-gradient(circle at center, #0f0c29, #302b63, #24243e)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <QuantumBlobButton
          label="Start Simulation"
          onClick={() => console.log("Quantum Button Fired")}
          textColor="#e0f2fe"
          backgroundColor="#0f0c29"
          glowColor="#38bdf8"
          borderRadius="28px"
          fontSize="1.15rem"
          fontWeight="800"
          padding="1.1rem 3rem"
        />
      </div>
    ),
    CyberGlitchButton: (
      <div className="w-full p-16"
        style={{
          background: "radial-gradient(circle at center, #000 0%, #0a0a0a 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CyberGlitchButton
          label="Initiate Hack"
          onClick={() => console.log("🧠 Cyber command triggered")}
        />
      </div>
    ),
    StarPulseButton: (
      <div className="w-full p-16"
        style={{
          background: "radial-gradient(circle at center, #0f0c29 0%, #1a1a2e 60%, #000 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StarPulseButton
          label="Activate Pulse"
          onClick={() => console.log("Pulse activated")}
          textColor="#fff7ed"
          backgroundColor="#1a202c"
          starColor="#facc15"
          borderRadius="22px"
          fontSize="1.1rem"
          fontWeight="800"
          padding="1.2rem 3rem"
          particleCount={20}
        />
      </div>
    ),
    CometTrailButton: (
      <div className="w-full p-16"
        style={{
          background: "linear-gradient(145deg, #030712 0%, #0f172a 50%, #1e293b 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CometTrailButton
          label="Engage Engine"
          onClick={() => console.log("Engine engaged")}
          textColor="#e0f2fe"
          backgroundColor="#0f172a"
          cometColor="#0ea5e9"
          borderRadius="20px"
          fontSize="1.1rem"
          fontWeight="800"
          padding="1rem 2.6rem"
          particleCount={20}
        />
      </div>
    )
  };

  return (
    <div className="p-6 w-[85%] ml-auto">
      <h1 className="text-3xl font-bold mb-4">Buttons</h1>
      {/* Button Selector */}
      <div className="flex mb-6 flex-wrap gap-4">
        {Object.keys(Buttons).map((btn) => (
          <button
            key={btn}
            onClick={() => setSelectedButton(btn as keyof typeof Buttons)}
            className={`px-4 py-2 rounded-lg ${selectedButton === btn ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
          >
            {btn}
          </button>
        ))}
      </div>
      <button
        className="absolute top-24 right-6 px-4 py-2 flex items-center space-x-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
        onClick={() => setShowCode(!showCode)}
      >
        <FaCode className="text-lg" />
        <span>{showCode ? "Show Demo" : "Show Code"}</span>
      </button>
      <div className="w-full flex justify-center bg-gray-100 p-10 rounded-lg shadow-lg">
        {!showCode ? (
          Buttons[selectedButton]
        ) : (
          <div className="w-full bg-gray-900 text-white p-6 rounded-lg shadow-lg">
            <div className="flex space-x-4 mb-4">
              {["component", "css", "usage"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as "component" | "css" | "usage")}
                  className={`px-4 py-2 rounded-lg ${activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-700 hover:bg-gray-600"
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Code
                </button>
              ))}
            </div>
            <CodeBlock code={ButtonCodeSnippets[selectedButton][activeTab]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonsPage;
