import React from "react";
import { MovingBorderButton, MovingBeforeLeftRightButton } from "react-ui-components-mudittiwari13";
import CodeBlock from "../components/CodeBlock";

const ButtonsPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Buttons</h1>

      <div className="bg-white p-4 shadow-lg rounded-lg">
        <MovingBorderButton label="Click me!" onClick={() => alert("Button clicked!")} />
      </div>
      <CodeBlock code={`<MovingBorderButton label="Click me!" onClick={() => alert("Button clicked!")} />`} />
      
      <div className="bg-white p-4 shadow-lg rounded-lg mt-6">
        <MovingBeforeLeftRightButton label="Hover me!" onClick={() => alert("Hovered!")} />
      </div>
      <CodeBlock code={`<MovingBeforeLeftRightButton label="Hover me!" onClick={() => alert("Hovered!")} />`} />
    </div>
  );
};

export default ButtonsPage;
