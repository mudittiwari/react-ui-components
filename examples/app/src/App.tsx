import React from 'react';
import './App.css';
import { MovingBorderButton } from 'react-ui-components-mudittiwari13';
// import Button from './components/Buttons/MovingBorderButton/MovingBorderButton';
function App() {
  return (
    <>
      <div className='mt-10 ml-10'>
        <MovingBorderButton label='Hello world' onClick={() => { console.log("button clicked") }} className='px-2 py-2' backgroundColor='#352323' color='white' linearGradient='linear-gradient(to right, #333333, #dd1818)'></MovingBorderButton>
      </div>
    </>
  );
}

export default App;
