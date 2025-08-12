import React, { useEffect, useState, useRef } from 'react';
import { UseUndoRedoWithHistory } from './UseUndoRedoWithHistory';

interface Point {
    x: number;
    y: number;
}


// DrawingCanvas component
export function DrawingCanvas() {
    const {
        state: strokes,
        set: setStrokes,
        undo,
        redo,
        clear,
        canUndo,
        canRedo,
    } = UseUndoRedoWithHistory<Point[][]>({ initialPresent: [] });

    const [currentStroke, setCurrentStroke] = useState<Point[]>([]);
    const drawingRef = useRef(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && canUndo) {
                e.preventDefault();
                undo();
            }
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y' && canRedo) {
                e.preventDefault();
                redo();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [canUndo, canRedo, undo, redo]);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        drawingRef.current = true;
        const rect = e.currentTarget.getBoundingClientRect();
        const point = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        setCurrentStroke([point]);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!drawingRef.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const point = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        setCurrentStroke(prev => [...prev, point]);
    };

    const endStroke = () => {
        if (!drawingRef.current) return;
        drawingRef.current = false;
        if (currentStroke.length === 0) return;
        setStrokes([...strokes, currentStroke]);
        setCurrentStroke([]);
    };

    const handleMouseUp = () => endStroke();
    const handleMouseLeave = () => endStroke();

    const pathFromPoints = (points: Point[]) =>
        points.length === 0 ? '' : 'M ' + points.map(p => `${p.x} ${p.y}`).join(' L ');

    return (
        <div style={{ flex: 1, minWidth: 0 }}>
            <h2 style={{ textAlign: 'center', color: '#1976d2', marginBottom: 20 }}>
                🎨 Drawing Canvas with Undo/Redo
            </h2>
            <div
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                role="presentation"
                style={{
                    border: '2px solid #1976d2',
                    height: 400,
                    borderRadius: 16,
                    position: 'relative',
                    cursor: 'crosshair',
                    backgroundColor: '#f9fbfd',
                    backgroundImage:
                        'linear-gradient(0deg, transparent 24%, #d0e3fa 25%, #d0e3fa 26%, transparent 27%, transparent 74%, #d0e3fa 75%, #d0e3fa 76%, transparent 77%, transparent),linear-gradient(90deg, transparent 24%, #d0e3fa 25%, #d0e3fa 26%, transparent 27%, transparent 74%, #d0e3fa 75%, #d0e3fa 76%, transparent 77%, transparent)',
                    backgroundSize: '50px 50px',
                    boxShadow: '0 8px 20px rgba(25, 118, 210, 0.12)',
                    userSelect: 'none',
                }}
            >
                <svg style={{ width: '100%', height: '100%', display: 'block' }} xmlns="http://www.w3.org/2000/svg">
                    {strokes.map((stroke, i) => (
                        <path
                            key={i}
                            d={pathFromPoints(stroke)}
                            stroke="#1976d2"
                            strokeWidth={3}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    ))}
                    {currentStroke.length > 0 && (
                        <path
                            d={pathFromPoints(currentStroke)}
                            stroke="#90caf9"
                            strokeWidth={3}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    )}
                </svg>
            </div>
            <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', gap: 15 }}>
                <ActionButton onClick={undo} disabled={!canUndo}>
                    Undo (Ctrl+Z)
                </ActionButton>
                <ActionButton onClick={redo} disabled={!canRedo}>
                    Redo (Ctrl+Y)
                </ActionButton>
                <ActionButton onClick={clear} disabled={strokes.length === 0}>
                    Clear
                </ActionButton>
            </div>

        </div>
    );
}


// Shared styles
const buttonStyle: React.CSSProperties = {
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    padding: '10px 18px',
    borderRadius: 8,
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: 15,
    minWidth: 100,
    userSelect: 'none',
    transition: 'background-color 0.3s ease',
};


const ActionButton = ({
    onClick,
    disabled,
    children,
    color = '#1976d2',
}: {
    onClick: () => void;
    disabled: boolean;
    children: React.ReactNode;
    color?: string;
}) => {
    const [hovered, setHovered] = useState(false);

    const backgroundColor = disabled
        ? '#bbb'
        : hovered
            ? shadeColor(color, -15)
            : color;

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundColor,
                color: 'white',
                border: 'none',
                padding: '10px 18px',
                borderRadius: 8,
                fontWeight: '600',
                cursor: disabled ? 'not-allowed' : 'pointer',
                fontSize: 15,
                minWidth: 100,
                userSelect: 'none',
                transition: 'background-color 0.3s ease',
            }}
        >
            {children}
        </button>
    );
};

// Utility to darken color
function shadeColor(color: string, percent: number) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = ((num >> 8) & 0x00ff) + amt;
    const B = (num & 0x0000ff) + amt;
    return (
        '#' +
        (
            0x1000000 +
            (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
            (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
            (B < 255 ? (B < 1 ? 0 : B) : 255)
        )
            .toString(16)
            .slice(1)
    );
}
