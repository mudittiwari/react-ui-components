import React from "react";
import "./App.css";
import Card1 from "./components/Cards/Card1/Card1";
import "./App.css";
// import {
//   MovingCornerBorderButton,
//   MovingBorderButton,
//   MovingBeforeLeftRightButton, Card1, Card2, Card3
// } from "react-ui-components-mudittiwari13";
import card2bg from "./assets/cardbg.jpg";
import Card2 from "./components/Cards/Card2/Card2";
import Card3 from "./components/Cards/Card3/Card3";
import card3bg from "./assets/ecommercecard.png";
import card1bg from "./assets/Card1bg.webp";
import Card4 from "./components/Cards/Card4/Card4";
// import MovingBeforeLeftRightButton from './components/Buttons/MovingBeforeLeftRightButton/MovingBeforeLeftRightButton';

// import MovingCornerBorderButton from './components/Buttons/MovingCornerBorderButton/MovingCornerBorderButton';
// import MovingBorderButton from './components/Buttons/MovingBorderButton/MovingBorderButton';
function App() {
  return (
    <>
      {/* <div className=' h-40 w-80 flex items-center justify-center'>
        <MovingCornerBorderButton label='click me!' onClick={() => { console.log("button clicked") }} className='px-2 py-2' backgroundColor='white' color='black' linearGradient='linear-gradient(to right, #0f0c29, #302b63, #24243e)'></MovingCornerBorderButton>
        
      </div>


      <div className=' h-40 w-80 flex items-center justify-center'>
        <MovingBorderButton label='click me!' onClick={() => { console.log("button clicked") }} className='px-2 py-2' backgroundColor='white' color='black' linearGradient='linear-gradient(to right, #cac531, #f3f9a7)'></MovingBorderButton>
        
      </div> */}

      <div className="flex h-full w-full items-center justify-around">
        {/* <MovingBeforeLeftRightButton label='Subscribe!' onClick={() => { console.log("button clicked") }} className='px-8 py-4' backgroundColor='#F26B0F' color='white' beforeColor='#FCC737' borderRadius='30px' hoverTextColor='#7E1891' /> */}
        {/* <Card2
        image={cardbg} // Replace with your tour destination image URL
        title="Explore Paris"
        description="Discover the charm of the Eiffel Tower and more. Discover the charm of the Eiffel Tower and more. Discover the charm of the Eiffel Tower and more. Discover the charm of the Eiffel Tower and more."
      /> */}

        {/* <Card1
          title="Explore China"
          description="China is a beautiful country with a rich history, vibrant culture, and stunning landscapes. From the Great Wall to the bustling city of Shanghai, there is much to discover."
          image={card1bg}
          width="25rem"
          height="25rem"
          rotationDirection="Y"
          overlayColor="rgba(0, 0, 0, 0.8)"
          overlayOpacity={0.9}
        />

        <Card2
          image={card2bg}
          title="Dynamic Card"
          description="This card is fully configurable and reusable."
          width="w-96"
          height="h-96"
          titleFontSize="text-2xl"
          descriptionFontSize="text-base"
        />

        <Card3
          image={card3bg}
          title="Luxury Sneakers"
          description="Step into the ultimate comfort and style."
          price="$250"
          sizes={["S", "M", "L", "XL", "XXL"]}
          initialQuantity={1}
          maxQuantity={5}
          rating={4}
          totalReviews={300}
          buttonText="Buy Now"
          width="w-96"
          height="h-96"
          backgroundColor="bg-gradient-to-l from-green-400 via-blue-500 to-purple-600"
          onAddToCart={() => {
            alert("hello world");
          }}
        /> */}

        <div className="relative min-h-screen w-full bg-[#1e1e1e] py-16 px-6 overflow-hidden">
          {/* Colorful Frosted Glass Circles */}
          <div
            className="absolute w-72 h-72 bg-[#ff7eb3]/30 rounded-full blur-3xl top-10 left-10"
          ></div>
          <div
            className="absolute w-96 h-96 bg-[#7ef9ff]/30 rounded-full blur-3xl top-40 left-1/4"
          ></div>
          <div
            className="absolute w-64 h-64 bg-[#ffd700]/30 rounded-full blur-3xl top-80 right-20"
          ></div>
          <div
            className="absolute w-80 h-80 bg-[#ff9671]/30 rounded-full blur-3xl bottom-10 left-10"
          ></div>
          <div
            className="absolute w-96 h-96 bg-[#88d498]/30 rounded-full blur-3xl bottom-20 right-1/4"
          ></div>

          {/* Section Content */}
          <h1 className="text-4xl font-bold text-[#f4e8c1] text-center mb-12 relative z-10">
            Meet Our Team
          </h1>
          <div className="flex justify-around flex-wrap gap-10 relative z-10">
            <Card4 />
            <Card4 />
            <Card4 />
            <Card4 />
            <Card4 />
            <Card4 />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
