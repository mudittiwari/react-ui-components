# React UI Components Library

A lightweight and customizable React component library for modern web applications. Built with **React**, **TypeScript**, and **Tailwind CSS**, it offers reusable and responsive UI components with smooth animations and full TypeScript support.

### Features
- Customizable and reusable components.
- Lightweight and performance-optimized.
- Compatible with React 17 and 18.

Quickly integrate beautiful UI elements into your projects and save development time!

## Installation
```
npm i react-ui-components-mudittiwari13
```

## Visit Website
[webiste](https://mudittiwari.github.io/react-ui-components/)


<!-- ## Table of Contents
- [Buttons](#buttons)
- [Cards](#cards)
- [Accordions](#accordions)

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

## Cards
- [Card1](#card1)
- [Card2](#card2)
- [Card3](#card3)
- [Card4](#card4)

## Card1

### Demo
![Demo](https://github.com/mudittiwari/react-ui-components/blob/master/examples/app/demo/card1.gif)

### Props and Usage

| Prop              | Type                | Description                                                       | Required |
|-------------------|---------------------|-------------------------------------------------------------------|----------|
| `title`           | `string`            | The title displayed on the card.                                  | Yes      |
| `description`     | `string`            | The description displayed on the back of the card.                | Yes      |
| `image`           | `string`            | The background image of the card.                                 | Yes      |
| `width`           | `string`            | Width of the card. Default is `20rem`.                            | No       |
| `height`          | `string`            | Height of the card. Default is `20rem`.                           | No       |
| `rotationDirection` | `X` or `Y`        | Direction of the flip animation. Default is `X`.                  | No       |
| `overlayColor`    | `string`            | Overlay color for the back face. Default is `rgba(45, 55, 72, 0.8)`. | No       |
| `overlayOpacity`  | `number`            | Opacity for the overlay. Default is `0.8`.                        | No       |

### Sample Usage

```tsx
import React from 'react';
import Card1 from 'react-ui-components-mudittiwari13';

const App: React.FC = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <Card1 
        title='Explore China' 
        description='China is a beautiful country with a rich history, vibrant culture, and stunning landscapes.' 
        image='https://via.placeholder.com/400' 
        width='25rem' 
        height='25rem' 
        rotationDirection='Y' 
        overlayColor='rgba(0, 0, 0, 0.8)' 
        overlayOpacity={0.9} 
      />
    </div>
  );
};

export default App;
```


## Card2

### Demo
![Demo](https://github.com/mudittiwari/react-ui-components/blob/master/examples/app/demo/card2.gif)

### Props and Usage

| Prop                     | Type       | Description                                                       | Required |
|--------------------------|------------|-------------------------------------------------------------------|----------|
| `image`                  | `string`   | The background image of the card.                                 | Yes      |
| `title`                  | `string`   | The title displayed in the middle of the card.                    | Yes      |
| `description`            | `string`   | The description displayed in the middle of the card.              | Yes      |
| `width`                  | `string`   | Width of the card. Default is `max-w-sm`.                         | No       |
| `height`                 | `string`   | Height of the card. Default is `h-96`.                            | No       |
| `backgroundColor`        | `string`   | Background color for the overlay. Default is `bg-black`.          | No       |
| `hoverBackgroundColor`   | `string`   | Background color for the overlay on hover. Default is `bg-opacity-70`. | No       |
| `titleFontSize`          | `string`   | Font size for the title. Default is `text-xl`.                    | No       |
| `descriptionFontSize`    | `string`   | Font size for the description. Default is `text-sm`.              | No       |
| `titleAnimationDelay`    | `number`   | Animation delay for the title (in ms). Default is `500`.          | No       |
| `descriptionAnimationDelay` | `number` | Animation delay for the description (in ms). Default is `700`.    | No       |

### Sample Usage

```tsx
import React from 'react';
import Card2 from 'react-ui-components-mudittiwari13';

const App: React.FC = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <Card2 
        image='https://via.placeholder.com/400' 
        title='Dynamic Card' 
        description='This card retains the original split effect with enhanced configurability.' 
        width='max-w-md' 
        height='h-80' 
        backgroundColor='bg-gray-900' 
        hoverBackgroundColor='bg-opacity-80' 
        titleFontSize='text-2xl' 
        descriptionFontSize='text-base' 
        titleAnimationDelay={400} 
        descriptionAnimationDelay={600} 
      />
    </div>
  );
};

export default App;
```
## Card3

### Demo
![Demo](https://github.com/mudittiwari/react-ui-components/blob/master/examples/app/demo/card3.gif)

### Props and Usage

| Prop              | Type                | Description                                                       | Required |
|-------------------|---------------------|-------------------------------------------------------------------|----------|
| `image`           | `string`            | The background image of the product.                              | Yes      |
| `title`           | `string`            | The title displayed in the card.                                  | Yes      |
| `description`     | `string`            | The description displayed in the card.                            | Yes      |
| `price`           | `string`            | The price displayed on the card.                                  | Yes      |
| `sizes`           | `string[]`          | Array of available sizes. Default is `["S", "M", "L", "XL"]`.     | No       |
| `initialQuantity` | `number`            | Initial quantity selected. Default is `1`.                       | No       |
| `maxQuantity`     | `number`            | Maximum quantity allowed. Default is `10`.                       | No       |
| `rating`          | `number`            | Product rating (1-5). Default is `4`.                             | No       |
| `totalReviews`    | `number`            | Total number of reviews. Default is `120`.                        | No       |
| `buttonText`      | `string`            | Text for the CTA button. Default is `Add to Cart`.                | No       |
| `onAddToCart`     | `(quantity: number, size: string | null) => void` | Callback function when adding to the cart.                        | No       |
| `width`           | `string`            | Width of the card. Default is `w-96`.                             | No       |
| `height`          | `string`            | Height of the card. Default is `h-96`.                            | No       |
| `backgroundColor` | `string`            | Background color for the card. Default is a gradient.             | No       |

### Sample Usage

```tsx
import React from 'react';
import Card3 from 'react-ui-components-mudittiwari13';

const App: React.FC = () => {
  const handleAddToCart = (quantity: number, size: string | null) => {
    console.log(`Added ${quantity} items of size ${size || "N/A"} to the cart.`);
  };

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <Card3 
        image='https://via.placeholder.com/400' 
        title='Luxury Sneakers' 
        description='Step into the ultimate comfort and style.' 
        price='$250' 
        sizes={["S", "M", "L", "XL", "XXL"]} 
        initialQuantity={1} 
        maxQuantity={5} 
        rating={4.5} 
        totalReviews={300} 
        buttonText='Buy Now' 
        width='w-80' 
        height='h-96' 
        backgroundColor='bg-gradient-to-l from-green-400 via-blue-500 to-purple-600' 
        onAddToCart={handleAddToCart} 
      />
    </div>
  );
};

export default App;
```


## Card4

### Demo
![Demo](https://github.com/mudittiwari/react-ui-components/blob/master/examples/app/demo/card4.gif)

### Props and Usage

| Prop          | Type      | Description                                                   | Required |
|--------------|----------|---------------------------------------------------------------|----------|
| `image`      | `string`  | The profile image of the person giving the testimonial.       | Yes      |
| `name`       | `string`  | The name of the person displayed on the card.                 | Yes      |
| `designation`| `string`  | The designation or role of the person.                        | Yes      |
| `message`    | `string`  | The testimonial or message displayed on the card.            | Yes      |
| `width`      | `string`  | Width of the card. Default is `w-96`.                         | No       |
| `height`     | `string`  | Height of the card. Default is `auto`.                        | No       |
| `backgroundColor` | `string` | Background color for the card. Default is `bg-[#ffffff]/10`. | No       |

### Sample Usage

```tsx
import React from 'react';
import Card4 from 'react-ui-components-mudittiwari13';
import testimonialImage from '../../../assets/testimonial.png';

const App: React.FC = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <Card4 
        image={testimonialImage} 
        name="John Doe" 
        designation="CEO, Example Corp" 
        message="This is the best service I have ever used! The attention to detail 
                 and customer support are exceptional. Highly recommend to everyone." 
        width="w-80" 
        height="h-auto" 
        backgroundColor="bg-[#ffffff]/10" 
      />
    </div>
  );
};

```
## Accordions
- [Accordion1](#accordion1)
- [Accordion2](#accordion2)
- [Accordion3](#accordion3)
- [Accordion4](#accordion4)



## Accordion1

### Demo
![Demo](https://github.com/mudittiwari/react-ui-components/blob/master/examples/app/demo/Accordion1.gif)

### Props and Usage

| Prop             | Type       | Description                                                    | Required |
|-----------------|-----------|----------------------------------------------------------------|----------|
| `items`         | `AccordionItem[]` | Array of accordion items with `title` and `content`.   | Yes      |
| `multipleOpen`  | `boolean`  | Allows multiple accordion items to be open simultaneously. Default is `false`. | No       |
| `bgColor`       | `string`   | Background color of the accordion. Default is `"bg-[#F8FAFC] dark:bg-[#1E293B]"`. | No       |
| `textColor`     | `string`   | Text color for the accordion items. Default is `"text-gray-900 dark:text-gray-200"`. | No       |
| `borderColor`   | `string`   | Border color of the accordion. Default is `"border-[#4F46E5] dark:border-[#A78BFA]"`. | No       |
| `hoverBgColor`  | `string`   | Background gradient when hovering over an accordion item. Default is `"hover:bg-gradient-to-r hover:from-[#FF5733] hover:to-[#FF8C00] dark:hover:from-[#8E44AD] dark:hover:to-[#3498DB]"`. | No       |
| `activeBgColor` | `string`   | Background color when an accordion item is active/open. Default is `"bg-gradient-to-r from-[#FF8C00] to-[#FF2D55] text-white shadow-lg"`. | No       |
| `icon`          | `string`   | Custom icon to display on the right side of each accordion header. Default is `"🔽"`. | No       |

### Sample Usage

```tsx
import React from 'react';
import {Accordion1} from "react-ui-components-mudittiwari13";
import "react-ui-components-mudittiwari13/dist/index.css";

const App: React.FC = () => {
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
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-10">
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
    </div>
  );
};

```



## Accordion2

### Demo
![Demo](https://github.com/mudittiwari/react-ui-components/blob/master/examples/app/demo/Accordion2.gif)

### Props and Usage

| Prop               | Type       | Description                                                            | Required |
|-------------------|-----------|------------------------------------------------------------------------|----------|
| `items`          | `AccordionItem[]` | Array of accordion items with `title`, `content`, `image`, and `icon`. | Yes      |
| `bgColor`        | `string`   | Background color of the accordion. Default is `"linear-gradient(135deg, #ff9a9e, #fad0c4)"`. | No       |
| `headerColor`    | `string`   | Background color of the accordion headers. Default is `"#ff4b2b"`.     | No       |
| `textColor`      | `string`   | Text color of the accordion. Default is `"#fff"`.                     | No       |
| `borderColor`    | `string`   | Border color of the accordion. Default is `"#ff6b6b"`.                | No       |
| `activeHeaderColor` | `string`   | Background color when an accordion item is active/open. Default is `"#ffcc00"`. | No       |
| `activeTextColor` | `string`   | Text color for an active/open accordion item. Default is `"#222"`.    | No       |
| `iconRotate`     | `boolean`  | Whether the icon should rotate when an item is expanded. Default is `true`. | No       |
| `stackOffsetX`   | `number`   | Horizontal offset between stacked images. Default is `-6`.            | No       |
| `stackOffsetY`   | `number`   | Vertical offset between stacked images. Default is `10`.              | No       |
| `animationDuration` | `number` | Duration of animations (in milliseconds). Default is `700`.           | No       |
| `shadowColor`    | `string`   | Color of the box shadow effect. Default is `"#ffeb3b"`.               | No       |
| `height`         | `string`   | Height of the images inside the accordion. Default is `"h-72"`.       | No       |


### Sample Usage

```tsx
import React from 'react';
import {Accordion2} from "react-ui-components-mudittiwari13";
import "react-ui-components-mudittiwari13/dist/index.css";

const App: React.FC = () => {
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
  return (
   <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 p-10">
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
  </div>
  );
};

```


## Accordion3

### Demo
![Demo](https://github.com/mudittiwari/react-ui-components/blob/master/examples/app/demo/Accordion3.gif)

### Props and Usage

| Prop               | Type       | Description                                                            | Required |
|-------------------|-----------|------------------------------------------------------------------------|----------|
| `items`          | `AccordionItem[]` | Array of accordion items with `title`, `content`, `image`, and `icon`. | Yes      |
| `bgColor`        | `string`   | Background color of the accordion. Default is `"linear-gradient(135deg, #ff9a9e, #fad0c4)"`. | No       |
| `headerColor`    | `string`   | Background color of the accordion headers. Default is `"#ff4b2b"`.     | No       |
| `textColor`      | `string`   | Text color of the accordion. Default is `"#fff"`.                     | No       |
| `borderColor`    | `string`   | Border color of the accordion. Default is `"#ff6b6b"`.                | No       |
| `activeHeaderColor` | `string`   | Background color when an accordion item is active/open. Default is `"#ffcc00"`. | No       |
| `activeTextColor` | `string`   | Text color for an active/open accordion item. Default is `"#222"`.    | No       |
| `iconRotate`     | `boolean`  | Whether the icon should rotate when an item is expanded. Default is `true`. | No       |
| `animationDuration` | `number` | Duration of animations (in milliseconds). Default is `700`.           | No       |
| `shadowColor`    | `string`   | Color of the box shadow effect. Default is `"#ffeb3b"`.               | No       |
| `height`         | `string`   | Height of the images inside the accordion. Default is `"h-72"`.       | No       |


### Sample Usage

```tsx
import React from 'react';
import {Accordion3} from "react-ui-components-mudittiwari13";
import "react-ui-components-mudittiwari13/dist/index.css";

const App: React.FC = () => {
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
  return (
   <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 p-10">
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
  </div>
  );
};

```



## Accordion4

### Demo
![Demo](https://github.com/mudittiwari/react-ui-components/blob/master/examples/app/demo/Accordion4.gif)


### Props and Usage

| Prop               | Type       | Description                                                            | Required |
|-------------------|-----------|------------------------------------------------------------------------|----------|
| `items`          | `AccordionItem[]` | Array of accordion items with `title`, `content`, `image`, and `icon`. | Yes      |
| `bgColor`        | `string`   | Background color of the accordion. Default is `"linear-gradient(135deg, #ff9a9e, #fad0c4)"`. | No       |
| `headerColor`    | `string`   | Background color of the accordion headers. Default is `"#ff4b2b"`.     | No       |
| `textColor`      | `string`   | Text color of the accordion. Default is `"#fff"`.                     | No       |
| `borderColor`    | `string`   | Border color of the accordion. Default is `"#ff6b6b"`.                | No       |
| `activeHeaderColor` | `string`   | Background color when an accordion item is active/open. Default is `"#ffcc00"`. | No       |
| `activeTextColor` | `string`   | Text color for an active/open accordion item. Default is `"#222"`.    | No       |
| `iconRotate`     | `boolean`  | Whether the icon should rotate when an item is expanded. Default is `true`. | No       |
| `animationDuration` | `number` | Duration of animations (in milliseconds). Default is `700`.           | No       |
| `shadowColor`    | `string`   | Color of the box shadow effect. Default is `"#ffeb3b"`.               | No       |
| `height`         | `string`   | Height of the images inside the accordion. Default is `"h-72"`.       | No       |


### Sample Usage

```tsx
import React from 'react';
import {Accordion4} from "react-ui-components-mudittiwari13";
import "react-ui-components-mudittiwari13/dist/index.css";

const App: React.FC = () => {
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
  return (
   <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 p-10">
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
  );
};

``` -->
