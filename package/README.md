# React UI Components


## Installation
```
npm i react-ui-components-mudittiwari13
```


## Table of Contents
- [Buttons](#buttons)

## Buttons
- [MovingBorderButton](#movingBorderButton)

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
import MovingBorderButton from 'your-package-name';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      {/* Example of the MovingBorderButton component */}
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
