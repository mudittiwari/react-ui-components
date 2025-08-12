import React, { useState } from 'react';
import { DrawingCanvas } from './DrawingCanvas';
import { FormEditor } from './FormEditor';
import CodeBlock from '../../../components/CodeBlock';
import { FaCode } from 'react-icons/fa';


const codeString = `import { useState, useCallback } from 'react';

interface UseUndoRedoOptions<T> {
  initialPresent: T;
}

export function UseUndoRedoWithHistory<T>({ initialPresent }: UseUndoRedoOptions<T>) {
  const [history, setHistory] = useState<{
    past: T[];
    present: T;
    future: T[];
  }>({
    past: [],
    present: initialPresent,
    future: [],
  });

  // Set new present and clear future
  const set = useCallback((newPresent: T) => {
    setHistory(({ past, present }) => ({
      past: [...past, present],
      present: newPresent,
      future: [],
    }));
  }, []);

  // Undo last change
  const undo = useCallback(() => {
    setHistory(({ past, present, future }) => {
      if (past.length === 0) return { past, present, future };
      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);
      return {
        past: newPast,
        present: previous,
        future: [present, ...future],
      };
    });
  }, []);

  // Redo undone change
  const redo = useCallback(() => {
    setHistory(({ past, present, future }) => {
      if (future.length === 0) return { past, present, future };
      const next = future[0];
      const newFuture = future.slice(1);
      return {
        past: [...past, present],
        present: next,
        future: newFuture,
      };
    });
  }, []);

  // Clear history but keep current state
  const clear = useCallback(() => {
    setHistory(({ present }) => ({
      past: [],
      present,
      future: [],
    }));
  }, []);

  const canUndo = history.past.length > 0;
  const canRedo = history.future.length > 0;

  return {
    state: history.present,
    set,
    undo,
    redo,
    clear,
    canUndo,
    canRedo,
  };
}
`;

export function UndoRedoDemo() {
    const [showCode, setShowCode] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState<'drawing' | 'form'>('drawing');






    return (

        <>
            <button
                className="fixed md:absolute top-8 right-4 md:top-12 md:right-6 px-4 py-2 flex items-center space-x-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition z-20 justify-center"
                onClick={() => setShowCode(!showCode)}
            >
                <FaCode className="text-lg" />
                <span className="hidden sm:inline">{showCode ? "Show Demo" : "Show Code"}</span>
            </button>

            {
                !showCode ? (
                    <div
                        style={{
                            maxWidth: "100%",
                            margin: '3rem auto',
                            padding: '0 24px 48px',
                            fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                            textAlign: 'center',
                            color: '#2c3e50',
                            backgroundColor: '#f7f9fc',
                            borderRadius: 20,
                            boxShadow: '0 16px 48px rgba(34, 60, 80, 0.15)',
                        }}
                    >
                        <h1
                            style={{
                                marginBottom: 32,
                                fontWeight: 700,
                                fontSize: '2.5rem',
                                letterSpacing: '0.04em',
                                color: '#34495e',
                                userSelect: 'none',
                                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            }}
                        >
                            Undo/Redo Demo
                        </h1>

                        {/* Radio buttons container */}
                        <div
                            role="radiogroup"
                            aria-label="Select component to display"
                            style={{
                                display: 'inline-flex',
                                borderRadius: 30,
                                background: 'linear-gradient(135deg, #6fb1fc, #4364f7)',
                                boxShadow: '0 8px 20px rgba(67, 100, 247, 0.5)',
                                padding: 4,
                                userSelect: 'none',
                                marginBottom: 48,
                                cursor: 'pointer',
                            }}
                        >
                            {[
                                { id: 'drawing', label: '🎨 Drawing Canvas' },
                                { id: 'form', label: '📝 Form Editor' },
                            ].map(({ id, label }) => {
                                const active = selectedComponent === id;
                                return (
                                    <label
                                        key={id}
                                        htmlFor={id}
                                        style={{
                                            flex: 1,
                                            padding: '10px 30px',
                                            borderRadius: 28,
                                            fontWeight: 600,
                                            fontSize: 14,
                                            color: active ? '#fff' : 'rgba(255, 255, 255, 0.7)',
                                            backgroundColor: active ? 'rgba(255, 255, 255, 0.25)' : 'transparent',
                                            boxShadow: active ? '0 8px 20px rgba(255,255,255,0.35)' : 'none',
                                            transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            userSelect: 'none',
                                            cursor: 'pointer',
                                            border: active ? '1.5px solid rgba(255,255,255,0.6)' : '1.5px solid transparent',
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            id={id}
                                            name="componentToggle"
                                            value={id}
                                            checked={active}
                                            onChange={() => setSelectedComponent(id as 'drawing' | 'form')}
                                            style={{ display: 'none' }}
                                        />
                                        {label}
                                    </label>
                                );
                            })}
                        </div>

                        {/* Display selected component */}
                        <div
                            style={{
                                textAlign: 'left',
                                borderRadius: 20,
                                backgroundColor: '#ffffff',
                                padding: 24,
                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.07)',
                                minHeight: 480,
                                userSelect: 'none',
                                transition: 'all 0.4s ease',
                            }}
                        >
                            {selectedComponent === 'drawing' && <DrawingCanvas />}
                            {selectedComponent === 'form' && <FormEditor />}
                        </div>
                    </div>
                ) :
                    <CodeBlock code={codeString} />
            }
        </>
    );

}

