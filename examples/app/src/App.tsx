import React from "react";
import "./App.css";
import Card1 from "./components/Cards/Card1/Card1";
import "./App.css";
// import {
//   MovingCornerBorderButton,
//   MovingBorderButton,
//   MovingBeforeLeftRightButton, Card1, Card2, Card3
// } from "react-ui-components-mudittiwari13";
// import { Card4 } from "react-ui-components-mudittiwari13";
// import card2bg from "./assets/cardbg.jpg";
// import Card2 from "./components/Cards/Card2/Card2";
// import Card3 from "./components/Cards/Card3/Card3";
// import card3bg from "./assets/ecommercecard.png";
// import card1bg from "./assets/Card1bg.webp";
// import Card4 from "./components/Cards/Card4/Card4";
// import testimonialImage from "./assets/testimonial.jpg";
// import testimonialImage2 from "./assets/testimonial.png";
// import Accordion1 from "./components/Accordions/Accordion1/Accordion1";
// import Accordion2 from "./components/Accordions/Accordion2/Accordion2";
import { Accordion1, Accordion2, Accordion3, Accordion4 } from "react-ui-components-mudittiwari13";
import "react-ui-components-mudittiwari13/dist/index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AccordionsPage from "./pages/AccordionsPage";
import ButtonsPage from "./pages/ButtonsPage";
import CardsPage from "./pages/CardsPage";
import HomePage from "./pages/HomePage";
// import Accordion3 from "./components/Accordions/Accordion3/Accordion3";
// import Accordion4 from "./components/Accordions/Accordion4/Accordion4";
// import MovingBeforeLeftRightButton from './components/Buttons/MovingBeforeLeftRightButton/MovingBeforeLeftRightButton';

// import MovingCornerBorderButton from './components/Buttons/MovingCornerBorderButton/MovingCornerBorderButton';
// import MovingBorderButton from './components/Buttons/MovingBorderButton/MovingBorderButton';
function App() {

  const accordionData = [
    {
      title: "Photography",
      content: "Explore the beauty of nature with high-resolution photography.",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800",
      icon: "📸",
    },
    {
      title: "Design",
      content: "Discover modern UI/UX techniques and creative design strategies.",
      image: "https://images.unsplash.com/photo-1684262483735-1101bcb10f0d?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "🎨",
    },
    {
      title: "Technology",
      content: "Stay updated with the latest trends in AI, Web3, and development.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
      icon: "🚀",
    },
    {
      title: "Nature",
      content: "Explore the beauty of nature with high-resolution photography.",
      image: "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "🌿",
    },
  ];


  // const accordionData = [
  //   {
  //     title: "First Section",
  //     content: "This is the content of the first section.",
  //     images: [
  //       "https://via.placeholder.com/200/FF5733/FFFFFF?text=Image1A",
  //       "https://via.placeholder.com/200/33FF57/FFFFFF?text=Image1B",
  //       "https://via.placeholder.com/200/3357FF/FFFFFF?text=Image1C",
  //       "https://via.placeholder.com/200/FF33A1/FFFFFF?text=Image1D",
  //     ],
  //     icon: "📌",
  //   },
  //   {
  //     title: "Second Section",
  //     content: "This is the content of the second section.",
  //     images: [
  //       "https://via.placeholder.com/200/FFAA33/FFFFFF?text=Image2A",
  //       "https://via.placeholder.com/200/AAFF33/FFFFFF?text=Image2B",
  //       "https://via.placeholder.com/200/33AAFF/FFFFFF?text=Image2C",
  //       "https://via.placeholder.com/200/FF33FF/FFFFFF?text=Image2D",
  //     ],
  //     icon: "🔍",
  //   },
  //   {
  //     title: "Third Section",
  //     content: "This is the content of the third section.",
  //     images: [
  //       "https://via.placeholder.com/200/00FFAA/FFFFFF?text=Image3A",
  //       "https://via.placeholder.com/200/AA00FF/FFFFFF?text=Image3B",
  //       "https://via.placeholder.com/200/FFAA00/FFFFFF?text=Image3C",
  //       "https://via.placeholder.com/200/00AAFF/FFFFFF?text=Image3D",
  //     ],
  //     icon: "📷",
  //   },
  //   {
  //     title: "Fourth Section",
  //     content: "This is the content of the fourth section.",
  //     images: [
  //       "https://via.placeholder.com/200/FFCC00/FFFFFF?text=Image4A",
  //       "https://via.placeholder.com/200/00FFCC/FFFFFF?text=Image4B",
  //       "https://via.placeholder.com/200/CC00FF/FFFFFF?text=Image4C",
  //       "https://via.placeholder.com/200/FF0000/FFFFFF?text=Image4D",
  //     ],
  //     icon: "🌍",
  //   },
  // ];



  return (
    <>
      {/* <div className=' h-40 w-80 flex items-center justify-center'>
        <MovingCornerBorderButton label='click me!' onClick={() => { console.log("button clicked") }} className='px-2 py-2' backgroundColor='white' color='black' linearGradient='linear-gradient(to right, #0f0c29, #302b63, #24243e)'></MovingCornerBorderButton>
        
      </div>


      <div className=' h-40 w-80 flex items-center justify-center'>
        <MovingBorderButton label='click me!' onClick={() => { console.log("button clicked") }} className='px-2 py-2' backgroundColor='white' color='black' linearGradient='linear-gradient(to right, #cac531, #f3f9a7)'></MovingBorderButton>
        
      </div> */}

      {/* <div className="flex flex-col h-full w-full items-center justify-around"> */}
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

      {/* <div className="relative min-h-screen w-full bg-[#1e1e1e] py-16 px-6 overflow-hidden">
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
          <h1 className="text-4xl font-bold text-[#f4e8c1] text-center mb-12 relative z-10">
            Meet Our Team
          </h1>
          <div className="flex justify-around flex-wrap gap-10 relative z-10">
            <Card4
              image={testimonialImage}
              name="John Doe"
              designation="CEO, Example Corp"
              message="This is the best service I have ever used! The attention to detail
        and customer support are exceptional. Highly recommend to everyone."
            />
            <Card4
              image={testimonialImage2}
              name="John Doe"
              designation="CEO, Example Corp"
              message="This is the best service I have ever used! The attention to detail
        and customer support are exceptional. Highly recommend to everyone."
            />
            <Card4
              image={testimonialImage2}
              name="John Doe"
              designation="CEO, Example Corp"
              message="This is the best service I have ever used! The attention to detail
        and customer support are exceptional. Highly recommend to everyone."
            />
            <Card4
              image={testimonialImage}
              name="John Doe"
              designation="CEO, Example Corp"
              message="This is the best service I have ever used! The attention to detail
        and customer support are exceptional. Highly recommend to everyone."
            />
            <Card4
              image={testimonialImage2}
              name="John Doe"
              designation="CEO, Example Corp"
              message="This is the best service I have ever used! The attention to detail
        and customer support are exceptional. Highly recommend to everyone."
            />
            <Card4
              image={testimonialImage}
              name="John Doe"
              designation="CEO, Example Corp"
              message="This is the best service I have ever used! The attention to detail
        and customer support are exceptional. Highly recommend to everyone."
            />
          </div>
        </div> */}

      {/* Accordion 1 */}
      {/* <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-10">
          <Accordion1 
        items={accordionData}
        multipleOpen={true} 
        bgColor="bg-[#F1F5F9] dark:bg-[#111827]"
        textColor="text-gray-900 dark:text-gray-200"
        borderColor="border-[#EC4899] dark:border-[#A855F7]"
        hoverBgColor="hover:bg-gradient-to-r hover:from-[#FF5733] hover:to-[#FF8C00] dark:hover:from-[#8E44AD] dark:hover:to-[#3498DB]"
        activeBgColor="bg-gradient-to-r from-[#06B6D4] to-[#9333EA] text-white shadow-lg"
        icon="✨"
      />
        </div> */}


      {/* <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 p-10">
          <Accordion2
            items={accordionData}
            bgColor="linear-gradient(135deg, #1E3A8A, #3B82F6)"
            headerColor="#2563EB"
            textColor="#F3F4F6"
            borderColor="#93C5FD"
            activeHeaderColor="#60A5FA"
            activeTextColor="#222"
            iconRotate={true}
            animationDuration={500}
            shadowColor="#2563EB"
            height="h-72"
          />
        </div> */}




      {/* Accordion 3 */}
      {/* <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 p-10">
          <Accordion3
            items={accordionData}
            bgColor="linear-gradient(135deg, #1E3A8A, #3B82F6)"
            headerColor="#2563EB"
            textColor="#F3F4F6"
            borderColor="#93C5FD"
            activeHeaderColor="#60A5FA"
            activeTextColor="#222"
            iconRotate={true}
            animationDuration={500}
            shadowColor="#2563EB"
            height="h-[500px]"
          />
        </div> */}

      {/* Accordion 4 */}
      {/* <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 p-10">
          <Accordion4
            items={accordionData}
            bgColor="linear-gradient(135deg, #1E3A8A, #3B82F6)"
            headerColor="#2563EB"
            textColor="#F3F4F6"
            borderColor="#93C5FD"
            activeHeaderColor="#60A5FA"
            activeTextColor="#222"
            iconRotate={true}
            animationDuration={500}
            shadowColor="#2563EB"
            height="h-[500px]"
          />



        </div>
      </div> */}



      <BrowserRouter>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="w-full pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/react-ui-components" element={<HomePage />} />
              <Route path="/accordions" element={<AccordionsPage />} />
              <Route path="/buttons" element={<ButtonsPage />} />
              <Route path="/cards" element={<CardsPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>






    </>
  );
}

export default App;
