import React from "react";
import "./App.css";
import {
  MovingCornerBorderButton,
  MovingBorderButton,
  MovingBeforeLeftRightButton,
} from "react-ui-components-mudittiwari13";
import Card1 from "./components/Cards/Card1";
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

      {/* <div className=' h-40 w-80 flex items-center justify-center'>
        <MovingBeforeLeftRightButton label='Subscribe!' onClick={() => { console.log("button clicked") }} className='px-8 py-4' backgroundColor='#F26B0F' color='white' beforeColor='#FCC737' borderRadius='30px' hoverTextColor='#7E1891' />

      </div> */}

      <div className="w-max h-max p-10">
        <Card1 />
      </div>
      
    </>
  );
}

export default App;
