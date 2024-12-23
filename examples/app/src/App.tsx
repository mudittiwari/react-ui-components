import React from 'react';
import './App.css';
import { MovingCornerBorderButton, MovingBorderButton, MovingBeforeLeftRightButton } from 'react-ui-components-mudittiwari13';
import cardbg from "./assets/cardbg.jpg"
import Card2 from './components/Cards/Card2/Card2';
import Card3 from './components/Cards/Card3/Card3';
import ecommercebg from "./assets/ecommercecard.png";
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

      <div className='flex h-full w-full mt-20 items-center justify-center'>
        {/* <MovingBeforeLeftRightButton label='Subscribe!' onClick={() => { console.log("button clicked") }} className='px-8 py-4' backgroundColor='#F26B0F' color='white' beforeColor='#FCC737' borderRadius='30px' hoverTextColor='#7E1891' /> */}
        {/* <Card2
        image={cardbg} // Replace with your tour destination image URL
        title="Explore Paris"
        description="Discover the charm of the Eiffel Tower and more. Discover the charm of the Eiffel Tower and more. Discover the charm of the Eiffel Tower and more. Discover the charm of the Eiffel Tower and more."
      /> */}

<Card3
                image={ecommercebg}
                title="Running Shoes"
                description="Lightweight and comfortable running shoes."
                price="$120"
            />
      </div>
    </>
  );
}

export default App;
