# React UI Components Library

A lightweight and customizable React component library for modern web applications. Built with **React**, **TypeScript**, and **Tailwind CSS**, it offers reusable and responsive UI components with smooth animations and full TypeScript support.

### Features
- Customizable and reusable components.
- Lightweight and performance-optimized.
- Compatible with React 17 and 18.

Quickly integrate beautiful UI elements into your projects and save development time!

![Demo](https://github.com/mudittiwari/react-ui-components/blob/master/examples/app/demo/MovingBorderButton.gif)&nbsp;&nbsp;&nbsp;&nbsp;![Demo](https://github.com/mudittiwari/react-ui-components/blob/master/examples/app/demo/MovingCornerBorderButton.gif)![Demo](https://github.com/mudittiwari/react-ui-components/blob/master/examples/app/demo/MovingBeforeLeftRightButton.gif)




## Installation
```
npm i react-ui-components-mudittiwari13
```


## Table of Contents
- [Buttons](#buttons)

## Buttons
- [MovingBorderButton](#movingBorderButton)
- [MovingCornerBorderButton](#movingCornerBorderButton)
- [MovingBeforeLeftRightButton](#movingBeforeLeftRightButton)

## MovingBorderButton

## Demo
![Demo](https://github.com/mudittiwari/react-ui-components/blob/master/examples/app/demo/MovingBorderButton.gif)

### MovingBorderButton Props and Usage

## Props:

| Prop              | Type                | Description                                                       | Required |
|-------------------|---------------------|-------------------------------------------------------------------|----------|
| `label`           | `string`            | The label to display on the button.                               | Yes      |
| `onClick`         | `() => void`        | Optional click handler function.                                  | No       |
| `className`       | `string`            | Optional tailwind css class name for custom styling.                           | No       |
| `backgroundColor` | `string`            | Background color of the button. Default is transparent.          | No       |
| `color`           | `string`            | Text color for the button. Default is `#000`.                     | No       |
| `borderRadius`    | `string`            | Border radius of the button (e.g., `5px`, `50%`, `8px`).          | No       |
| `linearGradient`  | `string`            | Optional linear gradient for the dynamic background.              | No       |

## Sample Usage:

```tsx
import React from 'react';
import MovingBorderButton from 'react-ui-components-mudittiwari13';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className=' h-40 w-80 flex items-center justify-center'>
        <MovingBorderButton label='click me!' onClick={() => { console.log("button clicked") }} className='px-2 py-2' backgroundColor='white' color='black' linearGradient='linear-gradient(to right, #cac531, #f3f9a7)'></MovingBorderButton>
      </div>
  );
};

export default App;
```


## MovingCornerBorderButton

## Demo
![Demo](https://github.com/mudittiwari/react-ui-components/blob/master/examples/app/demo/MovingCornerBorderButton.gif)

### MovingCornerBorderButton Props and Usage

## Props:

| Prop              | Type                | Description                                                       | Required |
|-------------------|---------------------|-------------------------------------------------------------------|----------|
| `label`           | `string`            | The label to display on the button.                               | Yes      |
| `onClick`         | `() => void`        | Optional click handler function.                                  | No       |
| `className`       | `string`            | Optional tailwind css class name for custom styling.                           | No       |
| `backgroundColor` | `string`            | Background color of the button. Default is transparent.          | No       |
| `color`           | `string`            | Text color for the button. Default is `#000`.                     | No       |
| `borderRadius`    | `string`            | Border radius of the button (e.g., `5px`, `50%`, `8px`).          | No       |
| `linearGradient`  | `string`            | Optional linear gradient for the dynamic background.              | No       |

## Sample Usage:

```tsx
import React from 'react';
import MovingCornerBorderButton from 'react-ui-components-mudittiwari13';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className=' h-40 w-80 flex items-center justify-center'>
        <MovingCornerBorderButton label='click me!' onClick={() => { console.log("button clicked") }} className='px-2 py-2' backgroundColor='white' color='black' linearGradient='linear-gradient(to right, #0f0c29, #302b63, #24243e)'></MovingCornerBorderButton>
        
      </div>
  );
};

export default App;
```

## MovingBeforeLeftRightButton

## Demo
![Demo](https://github.com/mudittiwari/react-ui-components/blob/master/examples/app/demo/MovingBeforeLeftRightButton.gif)

### MovingBeforeLeftRightButton Props and Usage

## Props:

| Prop              | Type                | Description                                                       | Required |
|-------------------|---------------------|-------------------------------------------------------------------|----------|
| `label`           | `string`            | The label to display on the button.                               | Yes      |
| `onClick`         | `() => void`        | Optional click handler function.                                  | No       |
| `className`       | `string`            | Optional tailwind CSS class name for custom styling.              | No       |
| `backgroundColor` | `string`            | Background color of the button. Default is `blue`.                | No       |
| `color`           | `string`            | Text color for the button. Default is `white`.                     | No       |
| `borderRadius`    | `string`            | Border radius of the button (e.g., `5px`, `50%`, `8px`).          | No       |
| `beforeColor`     | `string`            | Background color for the moving effect before the button.         | No       |
| `hoverTextColor`  | `string`            | Text color on hover. Default is `black`.                          | No       |

## Sample Usage:

```tsx
import React from 'react';
import MovingBeforeLeftRightButton from 'react-ui-components-mudittiwari13';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className='h-40 w-80 flex items-center justify-center'>
      <MovingBeforeLeftRightButton 
        label='Click Me!' 
        onClick={handleClick} 
        className='px-4 py-2' 
        backgroundColor='red' 
        color='white' 
        beforeColor='yellow' 
        hoverTextColor='green' 
      />
    </div>
  );
};

export default App;
```
