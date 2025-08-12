import React, { useState, useEffect } from 'react';
import { useIdleTimer } from "./UseIdleTimer";
import CodeBlock from '../../../components/CodeBlock';
import { FaCode } from 'react-icons/fa';

const codeString = `import React, { useEffect } from 'react';
import { useIdleTimer } from "./UseIdleTimer";

export function InactivityDetector() {
  const handleIdle = () => {
    console.log("User is idle!")
  };

  const handleActive = () => {
    console.log('Welcome back!');
  };

  const { isIdle } = useIdleTimer({
    timeout: 5 * 1000,
    onIdle: handleIdle,
    onActive: handleActive,
  });

  useEffect(() => {
    document.title = isIdle
      ? 'Come Back! You are inactive'
      : 'Welcome Back!';
  }, [isIdle]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: isIdle
        ? 'linear-gradient(120deg,#f3e7e9 0%,#e3eeff 100%)'
        : 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
      transition: 'background 0.5s',
    }}>
      <div style={{
        background: 'white',
        borderRadius: 20,
        padding: '44px 40px',
        textAlign: 'center',
        minWidth: 350,
        transition: 'box-shadow 0.4s',
        ...(isIdle
          ? { border: '2px solid #e57373', boxShadow: '0 12px 32px rgba(229,115,115,0.18)' }
          : { border: '2px solid #81c784', boxShadow: '0 12px 32px rgba(129,199,132,0.12)' })
      }}>
        <h2 style={{
          color: isIdle ? '#e53935' : '#388e3c',
          margin: '0 0 18px 0',
          fontWeight: 700,
        }}>
          {isIdle ? "You're Inactive" : "Active!"}
        </h2>
        <p style={{ fontSize: 18, color: isIdle ? '#d84315' : '#333', fontWeight: 500 }}>
          {isIdle
            ? "Looks like you've stepped away. 👋"
            : "Feel free to continue using the app!"}
        </p>
        {isIdle && (
          <div style={{
            marginTop: 28,
            padding: '18px 28px',
            background: '#fff3e0',
            border: '1px solid #ffe0b2',
            borderRadius: 12,
            fontSize: 18,
            color: '#d84315',
            fontWeight: 500,
            boxShadow: '0 2px 12px rgba(255,152,0,0.07)',
            textAlign: 'center'
          }}>
            <span role="img" aria-label="wave">✋</span> Please come back to continue your session.
          </div>
        )}
        {!isIdle && (
          <div style={{ marginTop: 26, color: '#888', fontSize: 15 }}>
            You are interacting. Tab title: "Welcome Back!"
          </div>
        )}
        {isIdle && (
          <div style={{ marginTop: 16, color: '#e53935', fontSize: 15, fontStyle: 'italic' }}>
            Tab title: "Come Back! You are inactive"
          </div>
        )}
      </div>
    </div>
  );
}`;

export function InactivityDetectorWithCode() {
  const [showCode, setShowCode] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      <button
        className="fixed md:absolute top-8 right-4 md:top-12 md:right-6 px-4 py-2 flex items-center space-x-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition z-20 justify-center"
        onClick={() => setShowCode(!showCode)}
      >
        <FaCode className="text-lg" />
        <span className="hidden sm:inline">{showCode ? "Show Demo" : "Show Code"}</span>
      </button>

      {!showCode ? (
        <InactivityDetector />
      ) : (
        <CodeBlock code={codeString} />
      )}
    </div>
  );
}

// The original InactivityDetector component (unchanged)
function InactivityDetector() {
  const handleIdle = () => {
    console.log("User is idle!");
  };

  const handleActive = () => {
    console.log("Welcome back!");
  };

  const { isIdle } = useIdleTimer({
    timeout: 3 * 1000,
    onIdle: handleIdle,
    onActive: handleActive,
  });

  useEffect(() => {
    document.title = isIdle
      ? "Come Back! You are inactive"
      : "Welcome Back!";
  }, [isIdle]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: isIdle
        ? 'linear-gradient(120deg,#f3e7e9 0%,#e3eeff 100%)'
        : 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
      transition: 'background 0.5s',
    }}>
      <div style={{
        background: 'white',
        borderRadius: 20,
        padding: '44px 40px',
        textAlign: 'center',
        minWidth: 350,
        transition: 'box-shadow 0.4s',
        ...(isIdle
          ? { border: '2px solid #e57373', boxShadow: '0 12px 32px rgba(229,115,115,0.18)' }
          : { border: '2px solid #81c784', boxShadow: '0 12px 32px rgba(129,199,132,0.12)' })
      }}>
        <h2 style={{
          color: isIdle ? '#e53935' : '#388e3c',
          margin: '0 0 18px 0',
          fontWeight: 700,
        }}>
          Current Timeout limit is: 3sec
        </h2>
        <h2 style={{
          color: isIdle ? '#e53935' : '#388e3c',
          margin: '0 0 18px 0',
          fontWeight: 700,
        }}>
          {isIdle ? "You're Inactive" : "Active!"}
        </h2>
        <p style={{ fontSize: 18, color: isIdle ? '#d84315' : '#333', fontWeight: 500 }}>
          {isIdle
            ? "Looks like you've stepped away. 👋"
            : "Feel free to continue using the app!"}
        </p>
        {isIdle && (
          <div style={{
            marginTop: 28,
            padding: '18px 28px',
            background: '#fff3e0',
            border: '1px solid #ffe0b2',
            borderRadius: 12,
            fontSize: 18,
            color: '#d84315',
            fontWeight: 500,
            boxShadow: '0 2px 12px rgba(255,152,0,0.07)',
            textAlign: 'center'
          }}>
            <span role="img" aria-label="wave">✋</span> Please come back to continue your session.
          </div>
        )}
        {!isIdle && (
          <div style={{ marginTop: 26, color: '#888', fontSize: 15 }}>
            You are interacting. Tab title: "Welcome Back!"
          </div>
        )}
        {isIdle && (
          <div style={{ marginTop: 16, color: '#e53935', fontSize: 15, fontStyle: 'italic' }}>
            Tab title: "Come Back! You are inactive"
          </div>
        )}
      </div>
    </div>
  );
}
