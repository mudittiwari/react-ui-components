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
import { BrowserRouter, HashRouter, Route, Router, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AccordionsPage from "./pages/AccordionsPage";
import ButtonsPage from "./pages/ButtonsPage";
import CardsPage from "./pages/CardsPage";
import HomePage from "./pages/HomePage";
import Test from "./pages/TestPage";
import CallStackDemoOne from "./standalone/callStackDemoOne/CallStackDemoOne";
import CallStackDemoTwo from "./standalone/callStackDemoTwo/CallStackDemoTwo";
import RevealCenter from "./standalone/revelCenter/RevealCenter";
import RevealContentOnScroll from "./standalone/revelContentOnScroll/RevealContentOnScroll";
import ThemeChangeIcon from "./standalone/themeChangeIcon/ThemeChangeIcon";
import EventLoopOne from "./standalone/EventLoopOne/EventLoopOne";
// import Accordion3 from "./components/Accordions/Accordion3/Accordion3";
// import Accordion4 from "./components/Accordions/Accordion4/Accordion4";
// import MovingBeforeLeftRightButton from './components/Buttons/MovingBeforeLeftRightButton/MovingBeforeLeftRightButton';

// import MovingCornerBorderButton from './components/Buttons/MovingCornerBorderButton/MovingCornerBorderButton';
// import MovingBorderButton from './components/Buttons/MovingBorderButton/MovingBorderButton';


const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isStandalone = location.pathname.startsWith("/standalone");

  return (
    <div className="flex">
      {!isStandalone && <Navbar />}
      <div className="flex w-full">
        {!isStandalone && <Sidebar />}
        <div className={`w-full ${!isStandalone ? "pt-10 md:pt-16" : ""}`}>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};


function App() {

  return (
    <>

      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/react-ui-components" element={<HomePage />} />
            <Route path="/standalone/callStackOneDemo" element={<CallStackDemoOne />} />
            <Route path="/standalone/callStackTwoDemo" element={<CallStackDemoTwo />} />
            <Route path="/standalone/revealCenter" element={<RevealCenter />} />
            <Route path="/standalone/revealContentOnScroll" element={<RevealContentOnScroll />} />
            <Route path="/standalone/themeChangeIcon" element={<ThemeChangeIcon />} />
            <Route path="/standalone/eventLoopOne" element={<EventLoopOne />} />
            <Route path="/accordions" element={<AccordionsPage />} />
            <Route path="/buttons" element={<ButtonsPage />} />
            <Route path="/cards" element={<CardsPage />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Layout>
      </HashRouter>







    </>
  );
}

export default App;
