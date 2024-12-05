import React from 'react';
import './App.css';
import { MovingCornerBorderButton, MovingBorderButton } from 'react-ui-components-mudittiwari13';

// import MovingCornerBorderButton from './components/Buttons/MovingCornerBorderButton/MovingCornerBorderButton';
// import MovingBorderButton from './components/Buttons/MovingBorderButton/MovingBorderButton';
function App() {
  return (
    <>
      <div className=' h-40 w-80 flex items-center justify-center'>
        <MovingCornerBorderButton label='click me!' onClick={() => { console.log("button clicked") }} className='px-2 py-2' backgroundColor='white' color='black' linearGradient='linear-gradient(to right, #0f0c29, #302b63, #24243e)'></MovingCornerBorderButton>
        
      </div>


      <div className=' h-40 w-80 flex items-center justify-center'>
        <MovingBorderButton label='click me!' onClick={() => { console.log("button clicked") }} className='px-2 py-2' backgroundColor='white' color='black' linearGradient='linear-gradient(to right, #cac531, #f3f9a7)'></MovingBorderButton>
        
      </div>
    </>
  );
}

export default App;
