import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
// import './test.css';
import exp from 'constants';
import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

type ButtonState = 'PRESSED' | 'NOT_PRESSED';

interface ExternalButton {
    getState: () => ButtonState;
}

interface Floor {
    getButtonExternalList: () => ExternalButton[];
}

interface InternalButton {
    getState: () => ButtonState;
}
interface LiftDisplayProps {
    floor: number;
    direction: 'UPWARDS' | 'DOWNWARDS' | 'NEUTRAL';
}

function LiftDisplay({ floor, direction }: LiftDisplayProps) {
    return (
        <div className="md:w-36 md:h-36 w-28 h-24 mx-auto mt-6 relative rounded-2xl bg-gradient-to-br from-yellow-50 to-white shadow-[0_0_25px_rgba(255,230,150,0.4)] border border-yellow-200 ring-1 ring-inset ring-yellow-100 overflow-hidden backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,221,0,0.5)] hover:scale-[1.01] flex flex-col items-center justify-center text-center animate-fade-in">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/40 to-transparent blur-md opacity-50 group-hover:opacity-100 animate-glow-sweep pointer-events-none" />
            {direction === 'UPWARDS' && (
                <div className="md:text-4xl text-lg font-bold text-yellow-500 animate-bounce drop-shadow-sm z-10">▲</div>
            )}
            {direction === 'DOWNWARDS' && (
                <div className="md:text-4xl text-md font-bold text-yellow-500 animate-bounce drop-shadow-sm z-10">▼</div>
            )}
            <div className="md:text-5xl text-md font-extrabold tracking-widest text-gray-900 font-[Orbitron] mt-1 z-10">
                {floor}
            </div>
            <div className="md:text-sm text-xs uppercase text-yellow-700 tracking-widest mt-1 z-10 font-semibold">
                {direction === 'NEUTRAL' ? 'IDLE' : direction.toLowerCase()}
            </div>
        </div>
    );
}
function FloorSelector({ onSubmit }: { onSubmit: (floors: number) => void }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const num = parseInt(value);
        if (!isNaN(num) && num > 0) {
            onSubmit(num);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-end gap-2 md:gap-4 md:p-6 p-2 rounded-xl bg-white/60 border border-yellow-200 backdrop-blur-md shadow-lg w-max mx-auto mt-10 transform transition-all duration-500 hover:scale-[1.01]"
        >
            <div className="flex flex-row gap-3 items-center">
                <label className="md:text-sm text-xs text-gray-700 font-semibold tracking-wide">Number of floors</label>
                <input
                    type="number"
                    min="2"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="e.g. 8"
                    className="w-28 md:px-4 px-2 py-2 text-center text-gray-800 font-medium rounded-md border border-gray-300 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
                />
            </div>
            <button
                type="submit"
                className="md:px-5 px-3 py-2 bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold rounded-md shadow-md transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-yellow-300"
            >
                Set
            </button>
        </form>
    );
}



type LiftWasmExports = {
    memory: WebAssembly.Memory;
    init: (floors: number) => void;
    pressExternalButton: (floor: number, up: boolean) => void;
    pressInternalButton: (floor: number) => void;
    getCurrentFloor: () => number;
    tick: () => void;
    getExternalButtonStates: () => number;
    getInternalButtonStates: () => number;
    getDisplayInfo: () => void;
};
const FLOOR_HEIGHT = 120;

function Elevator() {
    const [floor, setFloor] = useState<number>(0);
    const [lift, setLift] = useState<LiftWasmExports | null>(null);
    const [externalButtons, setExternalButtons] = useState<ButtonState[][]>([]);
    const [internalButtons, setInternalButtons] = useState<ButtonState[]>([]);
    const [direction, setDirection] = useState<'UPWARDS' | 'DOWNWARDS' | 'NEUTRAL'>('NEUTRAL');
    const [floors, setFloors] = useState(0);
    const triggerExternal = (f: number, upwards: boolean) => lift?.pressExternalButton(f, upwards);
    const triggerInternal = (f: number) => lift?.pressInternalButton(f);
    const shaftRef = useRef<HTMLDivElement>(null);
    const floorsRef = useRef<HTMLDivElement>(null);

    function readUTF8(memory: WebAssembly.Memory, addr: number, len: number): string {
        const bytes = new Uint8Array(memory.buffer, addr, len);
        const decoder = new TextDecoder("utf-8");
        return decoder.decode(bytes);
    }


    useEffect(() => {
        let interval: NodeJS.Timeout;
        let interval2: NodeJS.Timeout;
        let interval3: NodeJS.Timeout;

        const loadWasm = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/classes.wasm`);
                if (!response.ok) {
                    console.error("WASM file failed to load");
                    return;
                }

                const buffer = await response.arrayBuffer();
                let memory: WebAssembly.Memory;


                const importObject = {
                    teavm: {
                        currentTimeMillis: () => Date.now(),
                        nanoTime: () => performance.now() * 1_000_000,

                        putwchars: (addr: number, len: number) => {
                            const str = readUTF8(memory, addr, len);
                            console.log(`[stdout] ${str}`);
                        },
                        putwcharsOut: (addr: number, len: number) => {
                            const str = readUTF8(memory, addr, len);

                            try {
                                const data = JSON.parse(str);
                                if (data.type === "internal") {
                                    const internalStates = data.states.map((s: number) => s === 1);
                                    // console.log("Internal Button States:", internalStates);
                                    setInternalButtons(internalStates);
                                }
                                if (data.type === "external") {
                                    const externalStates = data.states.map((row: number[]) =>
                                        row.map((s: number) => s === 1)
                                    );
                                    // console.log("External Button States:", externalStates);
                                    setExternalButtons(externalStates);
                                }
                                if (data.type === "displayInfo") {
                                    const direction = data.direction;
                                    // console.log("direction Info:", direction);
                                    setDirection(direction);
                                }
                            } catch (err) {
                                // console.warn("Non-JSON stdout:", str);
                            }
                        },
                        putwcharsErr: (addr: number, len: number) => {
                            const str = readUTF8(memory, addr, len);
                            console.error(`[stderr] ${str}`);
                        },
                        putwchar: (code: number) => {
                            console.log(`[char] ${String.fromCharCode(code)}`);
                        },
                        putwcharErr: (code: number) => {
                            console.error(`[char err] ${String.fromCharCode(code)}`);
                        },
                        logString: (addr: number) => {
                            const str = readUTF8(memory, addr, 0xFFFF);
                            console.log(`[logString] ${str}`);

                            try {
                                const data = JSON.parse(str);

                                if (data.type === "internal") {
                                    const internalStates = data.states.map((s: number) => s === 1);
                                    console.log("✅ Internal Button States:", internalStates);
                                    // Optionally update your state here
                                }

                                if (data.type === "external") {
                                    const externalStates = data.states.map((row: number[]) =>
                                        row.map((s: number) => s === 1)
                                    );
                                    console.log("✅ External Button States:", externalStates);
                                    setExternalButtons(externalStates);
                                    // Optionally update your state here
                                }
                            } catch (e) {
                                console.warn("Could not parse logString as JSON:", str);
                            }
                        },
                        logInt: (val: number) => {
                            console.log(`[logInt] ${val}`);
                        },
                        logOutOfMemory: () => {
                            console.error("[TeaVM] Out of memory");
                        },
                        teavm_interrupt: () => { }
                    }
                };



                const { instance } = await WebAssembly.instantiate(buffer, importObject);
                const exports = instance.exports as unknown as LiftWasmExports;
                memory = (instance.exports.memory as WebAssembly.Memory);

                console.log("WASM loaded:", exports);
                exports.init(floors);
                setLift(exports);

                interval = setInterval(() => {
                    const current = exports.getCurrentFloor();
                    // console.log("Lift at:", current);
                    setFloor(current);
                }, 500);
                interval2 = setInterval(() => {
                    exports.tick();
                }, 500);
                interval3 = setInterval(() => {
                    exports.getDisplayInfo();
                }, 500);
                return () => {
                    clearInterval(interval);
                    clearInterval(interval2);
                    clearInterval(interval3);
                }
            } catch (err) {
                console.error("Error loading WASM:", err);
            }
        };
        loadWasm();
        if (shaftRef.current) {
            shaftRef.current.style.setProperty('height', `${floors * FLOOR_HEIGHT}px`, 'important');
        }
        if (floorsRef.current) {
            floorsRef.current.style.setProperty('height', `${floors * FLOOR_HEIGHT}px`, 'important');
        }
        return () => {
            if (interval) clearInterval(interval);
            if (interval2) clearInterval(interval2);
            if (interval3) clearInterval(interval3);
        };
    }, [floors]);

    return (
        <div className="elevator-container p-2 md:p-5">
            <motion.h1
                initial={{ opacity: 0, y: -50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="elevator-heading-premium"
            >
                Elevator System LLD
            </motion.h1>
            <FloorSelector onSubmit={(floors) => setFloors(floors)} />
            {floors != 0 ?
                <>
                    <LiftDisplay direction={direction} floor={floor} />
                    <div className="elevator-ui gap-2 p-0 md:p-5 md:gap-2 mt-5">
                        <div className={`relative w-[150px] md:w-[400px]`} ref={floorsRef} style={{
                            height: `${floors * 100}px !important`,
                        }} >
                            {Array.from({ length: floors }, (_, i) => (
                                <div
                                    key={i}
                                    className={`
              absolute left-0 w-full md:px-6 px-2 py-3
              flex items-center justify-between rounded-[16px]
              bg-white/60 backdrop-blur-2xl border border-yellow-300/40
              shadow-[inset_0_0_8px_rgba(255,255,255,0.25),_0_2px_24px_rgba(255,200,0,0.15)]
               overflow-hidden transition-transform duration-500 ease-in-out
              hover:scale-[1.02] group animate-panelFloat
            `}
                                    style={{ bottom: `${i * FLOOR_HEIGHT}px`, height: `${FLOOR_HEIGHT - 10}px` }}
                                >
                                    <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent blur-sm opacity-50 group-hover:opacity-100 animate-shimmer pointer-events-none" />

                                    <div className="absolute inset-1 rounded-[14px] bg-white/30 border border-white/20 shadow-inner z-0" />

                                    <div className="relative z-10 text-yellow-800 font-bold md:font-extrabold text-xs md:text-[0.9rem] tracking-wider uppercase">
                                        Floor {i}
                                    </div>

                                    <div className="relative z-10 flex gap-2">
                                        {i < floors - 1 && (
                                            <button
                                                className={clsx(
                                                    'md:w-10 md:h-10 h-6 w-6 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ease-in-out transform',
                                                    externalButtons[i]?.[0]
                                                        ? 'bg-gradient-to-br from-orange-600 to-yellow-400 text-white shadow-[0_0_20px_rgba(255,150,0,0.6)] ring-4 ring-yellow-400 animate-buttonGlow'
                                                        : 'bg-gradient-to-br from-zinc-200 to-zinc-100 text-gray-600 border border-gray-300 hover:bg-zinc-300 hover:shadow-md'
                                                )}
                                                onClick={() => triggerExternal(i, true)}
                                            >
                                                ▲
                                            </button>
                                        )}

                                        {i > 0 && (
                                            <button
                                                className={clsx(
                                                    'md:w-10 md:h-10 h-6 w-6  rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ease-in-out transform',
                                                    externalButtons[i]?.[externalButtons[i].length - 1]
                                                        ? 'bg-gradient-to-br from-orange-600 to-yellow-400 text-white shadow-[0_0_20px_rgba(255,150,0,0.6)] ring-4 ring-yellow-400 animate-buttonGlow'
                                                        : 'bg-gradient-to-br from-zinc-200 to-zinc-100 text-gray-600 border border-gray-300 hover:bg-zinc-300 hover:shadow-md'
                                                )}
                                                onClick={() => triggerExternal(i, false)}
                                            >
                                                ▼
                                            </button>
                                        )}
                                    </div>
                                </div>

                            ))}
                        </div>
                        <div className={`elevator-shaft w-[200px] md:w-[400px]`} ref={shaftRef} style={{
                            height: `${floors * 100}px !important`,
                        }}>
                            {Array.from({ length: floors }, (_, i) => (
                                <div
                                    key={`floor-line-${i}`}
                                    className="floor-line"
                                    style={{ bottom: `${i * FLOOR_HEIGHT}px` }}
                                />
                            ))}
                            {Array.from({ length: floors }, (_, i) => (
                                <div
                                    key={`shaft-line-${i}`}
                                    className="shaft-line"
                                    style={{ bottom: `${i * FLOOR_HEIGHT}px` }}
                                />
                            ))}
                            <motion.div
                                className={`lift-cabin absolute w-full flex items-center justify-center
rounded-xl bg-white/5 backdrop-blur-xl
border-y-2 border-yellow-300 shadow-[0_0_20px_rgba(255,255,0,0.2)]
hover:shadow-[0_0_30px_rgba(255,255,0,0.4)] transition-all duration-100
`}
                                animate={{ bottom: floor * FLOOR_HEIGHT }}
                                transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
                            >
                                <div className="cabin-interior w-[90%] h-[100%] rounded-xl px-4 py-2
bg-gradient-to-br from-yellow-100/10 to-yellow-200/5
border border-yellow-300/20 shadow-inner
flex flex-col justify-between items-center">
                                    <div className="floor-led-display text-yellow-300 text-[12px] md:text-sm font-mono tracking-wider
bg-black/70 px-4 py-1 rounded-md shadow-inner
border border-yellow-400/30 text-center w-full
">Floor {floor}</div>
                                    <div className="button-grid grid grid-cols-4 gap-2 mt-2 w-full
">
                                        {Array.from({ length: floors }, (_, i) => (
                                            <button
                                                key={i}
                                                className={`internal-btn md:w-8 md:h-8 w-4 h-4 md:rounded-md rounded-full md:text-xs text-[8px] font-bold
text-yellow-200 bg-yellow-700 hover:bg-yellow-600
hover:scale-105 active:scale-95 transition-all duration-200
shadow-[0_0_6px_rgba(255,255,0,0.3)]
 ${internalButtons[i] ? 'pressed' : ''}`}
                                                onClick={() => triggerInternal(i)}
                                            >
                                                {i}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </> : <motion.h1
                    initial={{ opacity: 0, y: -50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                    className="mt-20 text-3xl font-bold text-gray-900 text-center tracking-wide"
                >
                    Please enter number of floors
                </motion.h1>


            }

        </div>
    );
}

export default Elevator;
