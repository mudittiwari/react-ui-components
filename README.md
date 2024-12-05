# React UI Components Library

A lightweight and customizable React component library for modern web applications. Built with **React**, **TypeScript**, and **Tailwind CSS**, it offers reusable and responsive UI components with smooth animations and full TypeScript support.

### Features
- Customizable and reusable components.
- Lightweight and performance-optimized.
- Compatible with React 17 and 18.

Quickly integrate beautiful UI elements into your projects and save development time!

![Demo](https://github.com/mudittiwari/react-ui-components/blob/master/examples/app/demo/MovingBorderButton.gif)&nbsp;&nbsp;&nbsp;&nbsp;![Demo](https://github.com/mudittiwari/react-ui-components/blob/master/examples/app/demo/MovingCornerBorderButton.gif)



## Installation
```
npm i react-ui-components-mudittiwari13
```


## Table of Contents
- [Buttons](#buttons)

## Buttons
- [MovingBorderButton](#movingBorderButton)
- [MovingCornerBorderButton](#movingCornerBorderButton)

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
    <div>
      <MovingBorderButton 
        label="Click Me" 
        onClick={handleClick}
        backgroundColor="#000" 
        color="#fff" 
        borderRadius="8px" 
        linearGradient="linear-gradient(to right, #ff7e5f, #feb47b)"
      />
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
    <div>
      <MovingCornerBorderButton 
        label="Click Me" 
        onClick={handleClick}
        backgroundColor="#000" 
        color="#fff" 
        borderRadius="8px" 
        linearGradient="linear-gradient(to right, #ff7e5f, #feb47b)"
      />
    </div>
  );
};

export default App;
```
