import React from "react";
import { FaClipboard } from "react-icons/fa";

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="relative bg-gray-800 text-white p-4 rounded-lg max-h-[600px] overflow-scroll">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
      >
        <FaClipboard />
      </button>
      <pre className="whitespace-pre-wrap overflow-x-auto">{code}</pre>
    </div>
  );
};

export default CodeBlock;
