import clsx from 'clsx';
import { AnimatePresence, motion, MotionValue, number } from 'framer-motion';
import { JSXElementConstructor, Key, ReactElement, ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import ErrorToast from '../../pages/ErrorToast';
import SuccessToast from '../../pages/SuccessToast';


const VEHICLE_NUM_OFFSET = 1024;
const VEHICLE_TYPE_OFFSET = 2048;
const GRID_SIZE = 100;

type VehicleType = 'TWO_WHEELER' | 'FOUR_WHEELER';

interface ParkingWasmExports {
  memory: WebAssembly.Memory;
  initParkingSystem: (tw: number, fw: number) => void;
  parkVehicle: (vehicleNumber: bigint, vehicleType: number) => void;
  releaseVehicle: (numPtr: bigint) => void;
  getTicketInfo: (numPtr: number) => void;
  getParkingSlotsState: (type: number) => void;
}
interface Slot {
  x: number;
  y: number;
  occupied: boolean;
  vehicleNumber?: string;
}

function ParkingSystemLLD() {
  const [twCount, setTwCount] = useState(0);
  const [fwCount, setFwCount] = useState(0);
  const [wasm, setWasm] = useState<ParkingWasmExports | null>(null);
  const [memory, setMemory] = useState<WebAssembly.Memory | null>(null);
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [vehicleType, setVehicleType] = useState<VehicleType>('TWO_WHEELER');
  const [slotsTwoWheelers, setSlotsTwoWheelers] = useState<Slot[]>([]);
  const previousSlotsRef = useRef<{ x: number, y: number, occupied: boolean }[]>([]);
  const [slotsFourWheelers, setSlotsFourWheelers] = useState<Slot[]>([]);
  const previousFourSlotsRef = useRef<{ x: number, y: number, occupied: boolean }[]>([]);
  const [animatingVehicle, setAnimatingVehicle] = useState<null | { id: string, x: number, y: number }>(null);
  const [animatingVehicleFour, setAnimatingVehicleFour] = useState<null | { id: string, x: number, y: number }>(null);


  const [animatingVehicleExit, setAnimatingVehicleExit] = useState<null | { id: string, x: number, y: number }>(null);
  const [animatingVehicleFourExit, setAnimatingVehicleFourExit] = useState<null | { id: string, x: number, y: number }>(null);
  const [twoWheelersRows, setTwoWheelersRows] = useState<number>(0);
  const [twoWheelersCols, setTwoWheelersCols] = useState<number>(0);
  const [fourWheelersRows, setFourWheelersRows] = useState<number>(0);
  const [fourWheelersCols, setFourWheelers] = useState<number>(0);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [success, setSuccess] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [confirmReleaseOpen, setConfirmReleaseOpen] = useState(false);
  const gateRef = useRef<HTMLDivElement>(null);
  const gateRef2 = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const gridRef2 = useRef<HTMLDivElement>(null);
  const [entryPos, setEntryPos] = useState({ x: 0, y: 0 });
  const [entryPos2, setEntryPos2] = useState({ x: 0, y: 0 });
  const [exitPos, setExitPos] = useState({ x: 0, y: 0 });
  const [exitPos2, setExitPos2] = useState({ x: 0, y: 0 });
  const [initialized, setInitialized] = useState(false);



  const handleSlotSetup = () => {
    if (!isNaN(twCount) && !isNaN(fwCount) && twCount > 0 && fwCount > 0) {
      wasm?.initParkingSystem(twCount, fwCount);
      wasm?.getParkingSlotsState(0);
      wasm?.getParkingSlotsState(1);
    //   console.log("Parking system initialized with TW:", twCount, "FW:", fwCount);
      setInitialized(true);
    } else {
      setShowError(true);
      setError("Please enter valid slot counts for both vehicle types.");
    }
  };


  const encoder = new TextEncoder();

  const toWasmString = (str: string): number => {
    if (!memory) throw new Error("WASM memory not initialized");

    const utf8 = new TextEncoder().encode(str + '\0');
    const buffer = new Uint8Array(memory.buffer);
    const ptr = 1024 + Math.floor(Math.random() * 10000);
    if (ptr + utf8.length >= buffer.length) {
      throw new Error("String write would overflow WASM memory");
    }
    buffer.set(utf8, ptr);
    return ptr;
  };
  function readUTF8(memory: WebAssembly.Memory, addr: number, len: number): string {
    const bytes = new Uint8Array(memory.buffer, addr, len);
    const decoder = new TextDecoder("utf-8");
    return decoder.decode(bytes);
  }
  function encodeNumberPlate(str: string) {
    // Remove any disallowed characters
    const base36 = str.toUpperCase().replace(/[^0-9A-Z]/g, '');
    return BigInt('0x' + BigInt(parseInt(base36, 36)).toString(16));
  }

  const getGridMatrix = (slots: Slot[], typeOfParking: number) => {
    if (typeOfParking == 0) {
      const maxX = Math.max(...slots.map(s => s.x));
      const maxY = Math.max(...slots.map(s => s.y));
      setTwoWheelersRows(maxX + 1);
      setTwoWheelersCols(maxY + 1);
    }
    else {
      const maxX = Math.max(...slots.map(s => s.x));
      const maxY = Math.max(...slots.map(s => s.y));
      setFourWheelersRows(maxX + 1);
      setFourWheelers(maxY + 1);
    }
  };


  const sanitizeJson = (str: string) =>
    str
      .replace(/,\s*}/g, '}')
      .replace(/,\s*]/g, ']');

  const handleSlotClick = (slot: any) => {
    // console.log(slot)
    if (slot.occupied && slot.vehicleNumber) {
      setSelectedVehicle(slot.vehicleNumber);
      setConfirmReleaseOpen(true);
    }
  };

  useEffect(() => {
    previousSlotsRef.current = slotsTwoWheelers;
  }, [slotsTwoWheelers]);

  useEffect(() => {
    previousFourSlotsRef.current = slotsFourWheelers;
  }, [slotsFourWheelers]);

//   useEffect(() => {
//     console.log("📦 animatingVehicle state changed:", animatingVehicle);
//   }, [animatingVehicle]);

//   useEffect(() => {
//     console.log("📦 animatingVehicleFour state changed:", animatingVehicle);
//   }, [animatingVehicleFour]);

  function getRelativeCenter(
    fromRef: RefObject<HTMLDivElement>,
    toRef: RefObject<HTMLDivElement>
  ) {
    if (!fromRef.current || !toRef.current) return { x: 0, y: 0 };

    const fromRect = fromRef.current.getBoundingClientRect();
    const toRect = toRef.current.getBoundingClientRect();

    const relativeX = fromRect.left + fromRect.width / 2 - toRect.left - 75;
    const relativeY = fromRect.top + fromRect.height / 2 - toRect.top - 50;

    return {
      x: relativeX,
      y: relativeY,
    };
  }
  useEffect(() => {
    const updatePositions = () => {
      if (gateRef.current && gridRef.current) {
        setEntryPos(getRelativeCenter(gateRef, gridRef));
      }

      if (gateRef.current && gridRef2.current) {
        setEntryPos2(getRelativeCenter(gateRef, gridRef2));
      }

      if (gateRef2.current && gridRef.current) {
        setExitPos(getRelativeCenter(gateRef2, gridRef));
      }

      if (gateRef2.current && gridRef2.current) {
        setExitPos2(getRelativeCenter(gateRef2, gridRef2));
      }
    };

    requestAnimationFrame(() => {
      updatePositions();
      window.addEventListener("resize", updatePositions);
    })
    return () => window.removeEventListener("resize", updatePositions);
  }, [slotsTwoWheelers, slotsFourWheelers]);



  useEffect(() => {
    const loadWasm = async () => {
      const response = await fetch(`${process.env.PUBLIC_URL}/parking.wasm`);
      const buffer = await response.arrayBuffer();
      let memory: WebAssembly.Memory;
      const importObject = {
        env: {
          readString: () => "",
        },
        teavm: {
          currentTimeMillis: () => Date.now(),
          nanoTime: () => performance.now() * 1_000_000,

          putwchars: (addr: number, len: number) => {
            const str = readUTF8(memory, addr, len);
            // console.log(`[stdout] ${str}`);
          },
          putwcharsOut: (addr: number, len: number) => {
            const str = readUTF8(memory, addr, len);
            // console.log(addr);
            // console.log(`[stdout] ${str}`);
            const sanitizedStr = sanitizeJson(str);
            try {
              // console.log("Parsing JSON from stdout:", sanitizedStr);
              const data = JSON.parse(sanitizedStr);
              // console.log(data);
              if (data.type === "parkingLots") {
                // console.log(previousSlots)
                if (data.vehicleType === "TWO_WHEELER") {
                  const previousSnapshot = previousSlotsRef.current;
                  const newSlots = data.lots.map((slot: Slot) => ({
                    x: slot.x,
                    y: slot.y,
                    occupied: slot.occupied,
                    vehicleNumber: slot.vehicleNumber
                  }));
                  const diff = newSlots.find((ns: { x: number; y: number; occupied: any; }) => {
                    const prev = previousSnapshot.find(ps => ps.x === ns.x && ps.y === ns.y);
                    return prev && !prev.occupied && ns.occupied;
                  });
                  const diff2 = newSlots.find((ns: { x: number; y: number; occupied: any; }) => {
                    const prev = previousSnapshot.find(ps => ps.x === ns.x && ps.y === ns.y);
                    return prev && prev.occupied && !ns.occupied;
                  });
                  if (diff) {
                    // console.log("Animating vehicle:", vehicleNumber, "to position:", diff.x, diff.y);
                    setAnimatingVehicle({ id: vehicleNumber, x: diff.y, y: diff.x });
                    setTimeout(() => {
                      setSlotsTwoWheelers(newSlots);
                      getGridMatrix(newSlots, 0);
                      setAnimatingVehicle(null);
                    }, 1500);
                  } else {
                    setSlotsTwoWheelers(newSlots);
                    getGridMatrix(newSlots, 0);
                    setAnimatingVehicle(null);
                  }

                  if (diff2) {
                    // console.log("Animating vehicle exit:", vehicleNumber, "from position:", diff2.x, diff2.y);
                    setAnimatingVehicleExit({ id: vehicleNumber, x: diff2.y, y: diff2.x });
                    setTimeout(() => {
                      setSlotsTwoWheelers(newSlots);
                      getGridMatrix(newSlots, 0);
                      setAnimatingVehicleExit(null);
                    }, 1500);
                  }
                }

                else if (data.vehicleType === "FOUR_WHEELER") {
                  const previousSnapshot = previousFourSlotsRef.current;
                  const newSlots = data.lots.map((slot: Slot) => ({
                    x: slot.x,
                    y: slot.y,
                    occupied: slot.occupied,
                    vehicleNumber: slot.vehicleNumber
                  }));
                  const diff = newSlots.find((ns: { x: number; y: number; occupied: any; }) => {
                    const prev = previousSnapshot.find(ps => ps.x === ns.x && ps.y === ns.y);
                    return prev && !prev.occupied && ns.occupied;
                  });
                  const diff2 = newSlots.find((ns: { x: number; y: number; occupied: any; }) => {
                    const prev = previousSnapshot.find(ps => ps.x === ns.x && ps.y === ns.y);
                    return prev && prev.occupied && !ns.occupied;
                  });
                  if (diff) {
                    // console.log("Animating vehicle:", vehicleNumber, "to position:", diff.x, diff.y);
                    setAnimatingVehicleFour({ id: vehicleNumber, x: diff.y, y: diff.x });
                    setTimeout(() => {
                      setSlotsFourWheelers(newSlots);
                      getGridMatrix(newSlots, 1);
                      setAnimatingVehicleFour(null);
                    }, 1500);
                  } else {
                    setSlotsFourWheelers(newSlots);
                    getGridMatrix(newSlots, 1);
                    setAnimatingVehicleFour(null);
                  }
                  if (diff2) {
                    // console.log("Animating vehicle exit:", vehicleNumber, "from position:", diff2.x, diff2.y);
                    setAnimatingVehicleFourExit({ id: vehicleNumber, x: diff2.y, y: diff2.x });
                    setTimeout(() => {
                      setSlotsFourWheelers(newSlots);
                      getGridMatrix(newSlots, 1);
                      setAnimatingVehicleFourExit(null);
                    }, 1500);
                  }
                }
              }
              else if (data.type === "park") {
                if (data.status === "success") {
                  // console.warn("Vehicle Parked successfully");
                  setShowSuccess(true);
                  setSuccess("Vehicle Parked Successfully");
                }
                else if (data.status === "full") {
                  setShowError(true);
                  setError("No Parking Slot Available");
                }
              }
              else if (data.type === "release") {
                // console.log("Release data:", data);
                if (data.status === "success") {
                  // console.warn("Vehicle released successfully");
                  setShowSuccess(true);
                  setSuccess("Vehicle Released Successfully");
                } else {
                  console.error("Release failed");
                  setShowError(true);
                  setError("Release Failed");
                }
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
                // setExternalButtons(externalStates);
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
        },
        teavmMath: {
          sin: Math.sin,
          cos: Math.cos,
          tan: Math.tan,
          asin: Math.asin,
          acos: Math.acos,
          atan: Math.atan,
          atan2: Math.atan2,
          pow: Math.pow,
          exp: Math.exp,
          log: Math.log,
          sqrt: Math.sqrt,
          ceil: Math.ceil,
          floor: Math.floor,
          random: Math.random,
          abs: Math.abs
        }
      };



      const { instance } = await WebAssembly.instantiate(buffer, importObject);
      console.log("WASM instance created");
      const exports = instance.exports as unknown as ParkingWasmExports;
      memory = (instance.exports.memory as WebAssembly.Memory);
      console.log("WASM loaded:", exports);
      setWasm(exports);
      setMemory(memory);
    };
    loadWasm();
  }, []);

  const handlePark = () => {
    if (!wasm) return;
    console.log("Parking vehicle:", vehicleNumber, vehicleType);
    const len1 = encodeNumberPlate(vehicleNumber);
    if (vehicleType === 'TWO_WHEELER') {
      wasm.parkVehicle(len1, 0);
      wasm.getParkingSlotsState(0);
    }
    else if (vehicleType === 'FOUR_WHEELER') {
      wasm.parkVehicle(len1, 1);
      wasm.getParkingSlotsState(1);
    }
    // wasm.getParkingSlotsState(1);
  };

  const handleRelease = (selectedVehicle: string) => {
    if (!wasm) return;
    const len1 = encodeNumberPlate(selectedVehicle.toUpperCase());
    // console.log("Releasing vehicle:", selectedVehicle);
    wasm.releaseVehicle(len1);
    setSelectedVehicle(null);
    setConfirmReleaseOpen(false);
    wasm.getParkingSlotsState(0);
    wasm.getParkingSlotsState(1);
  };

  return (
    <>
      <ErrorToast
        message={error}
        visible={showError}
        onClose={() => setShowError(false)}
      />
      <SuccessToast
        message={success}
        visible={showSuccess}
        onClose={() => setShowSuccess(false)}
      />

      {!initialized && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-gray-800 text-white p-6">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-8 w-full max-w-md space-y-6">
            <h2 className="text-2xl font-bold text-center text-green-300">🅿️ Configure Parking System</h2>

            <div className="space-y-2">
              <label className="text-sm font-medium text-green-200">Two-Wheeler Slots</label>
              <input
                type="number"
                value={twCount}
                min={1}
                max={30}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val <= 30) {
                    setTwCount(val);
                  }
                }}
                placeholder="e.g. 10"
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-green-200">Four-Wheeler Slots</label>
              <input
                type="number"
                value={fwCount}
                min={1}
                max={30}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val <= 30) {
                    setFwCount(val);
                  }
                }}
                placeholder="e.g. 6"
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <button
              onClick={handleSlotSetup}
              className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-md hover:scale-[1.02] transition-all"
            >
              🚀 Initialize Parking System
            </button>
          </div>
        </div>
      )}

      {initialized && (
        <div className="relative min-h-screen flex items-center justify-center px-6 py-12 bg-[#0a0f1c] overflow-hidden">
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] rounded-full z-0 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600/20 blur-[140px] rounded-full z-0 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/0 to-white/5 z-0 pointer-events-none" />
          <div
            className="grid grid-cols-1 gap-8 py-6 pl-[25px] md:p-6 w-full mx-auto min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white rounded-3xl shadow-inner shadow-black/20 border border-white/10 overflow-hidden relative"
            style={{
              backgroundImage: "radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 70%)",
            }}
          >
            <div className="w-full md:w-3/5 mx-auto bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-4 md:p-8 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-3xl z-0" />

              <div className="relative z-10 space-y-8 w-full">
                <h2 className="text-3xl font-bold text-white flex items-center gap-4 tracking-tight justify-center">
                  <span className="animate-bounce">🚗</span> Vehicle Entry
                </h2>
                <div className="relative">
                  <input
                    value={vehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value)}
                    type="text"
                    id="vehicle-number"
                    placeholder=" "
                    className="peer w-full px-4 pt-8 pb-2 text-white bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition placeholder-transparent"
                  />
                  <label
                    htmlFor="vehicle-number"
                    className="absolute left-4 top-2 text-sm text-white/60 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400 transition-all"
                  >
                    Vehicle Number
                  </label>
                </div>
                <div className="relative">
                  <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value as VehicleType)}
                    className="w-full px-4 pt-8 pb-2 text-white bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
                  >
                    <option value="TWO_WHEELER">🛵 Two Wheeler</option>
                    <option value="FOUR_WHEELER">🚙 Four Wheeler</option>
                  </select>
                  <label className="absolute left-4 top-2 text-sm text-white/60">Vehicle Type</label>
                </div>
                <button
                  onClick={handlePark}
                  className="w-full relative px-6 py-3 font-semibold text-white bg-gradient-to-r from-green-500 via-emerald-600 to-teal-500 rounded-xl shadow-lg transition-all duration-300 hover:shadow-green-400/40 overflow-hidden hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🚗 Park Vehicle
                  </span>
                  <span className="absolute inset-0 bg-white/10 blur-[3px] opacity-10 pointer-events-none animate-pulse" />
                </button>
              </div>
            </div>



            <div className="col-span-2 flex flex-col gap-6">
              <div className="w-full flex flex-col items-start gap-10 p-8 max-w-6xl mx-auto">
                <div className="w-full flex flex-col items-center gap-6">
                  <div className="relative w-full md:w-3/4 h-[120px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(0,255,100,0.2)] overflow-hidden backdrop-blur-md flex items-center justify-center px-6">
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[sweep_3s_linear_infinite]" />
                    </div>
                    <div className="text-green-400 font-bold text-xl flex items-center gap-3 z-10">
                      <span className="text-2xl animate-pulse">🟢</span> ENTRY GATE ACTIVE
                    </div>
                    <div
                      ref={gateRef}
                      className="absolute bottom-4 w-1/2 h-1 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_2px_rgba(34,197,94,0.5)]"
                    />
                  </div>
                  <div className="text-sm tracking-wide text-green-200 font-medium opacity-90">Vehicles will enter from this gate</div>
                </div>


                <div className='flex justify-center flex-col items-center w-full'>
                  <h2 className="text-xl font-bold tracking-wide text-green-200">Two-Wheeler Parking</h2>
                  <div
                    className="relative mt-6"
                    style={{
                      width: twoWheelersCols * GRID_SIZE,
                      height: twoWheelersRows * GRID_SIZE,
                      overflow: "visible"
                    }} ref={gridRef}
                  >
                    {slotsTwoWheelers.map((slot) => (
                      <div
                        key={`${slot.x}-${slot.y}`}
                        onClick={() => handleSlotClick(slot)}
                        className={clsx(
                          "absolute w-[70px] h-[70px] cursor-pointer rounded-xl flex items-center justify-center text-sm font-semibold shadow-md transition-all duration-300",
                          slot.occupied
                            ? "bg-gradient-to-br from-red-500 via-red-400 to-red-600 text-white border-2 border-red-700 shadow-[0_0_15px_rgba(239,68,68,0.6)] hover:scale-105"
                            : "bg-gradient-to-br from-green-100 via-green-200 to-green-300 text-green-800 border border-green-400 hover:scale-105 hover:shadow-[0_0_10px_rgba(34,197,94,0.4)]"
                        )}
                        style={{
                          top: slot.x * GRID_SIZE,
                          left: slot.y * GRID_SIZE,
                        }}
                      >
                        {slot.occupied ? (
                          <div className="text-4xl">🛵</div>
                        ) : (
                          <></>
                        )}
                      </div>

                    ))}
                    <AnimatePresence>
                      {animatingVehicle && (
                        <motion.div
                          key={animatingVehicle.id}
                          initial={{
                            x: entryPos.x,
                            y: entryPos.y,
                          }}
                          animate={{
                            x: ((animatingVehicle.x) * twoWheelersRows * (GRID_SIZE / twoWheelersRows)) - 14,
                            y: ((animatingVehicle.y) * twoWheelersCols * (GRID_SIZE / twoWheelersCols)) - 14,
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                          className="absolute w-[100px] h-[100px] text-white flex items-center justify-center"
                        >
                          <div className="text-4xl">🛵</div>
                        </motion.div>
                      )}
                    </AnimatePresence>


                    <AnimatePresence>
                      {animatingVehicleExit && (
                        <motion.div
                          key={animatingVehicleExit.id}
                          initial={{
                            x: ((animatingVehicleExit.x) * twoWheelersRows * (GRID_SIZE / twoWheelersRows)) - 14,
                            y: ((animatingVehicleExit.y) * twoWheelersCols * (GRID_SIZE / twoWheelersCols)) - 14,
                          }}
                          animate={{
                            x: exitPos.x,
                            y: exitPos.y - 20,
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                          className="absolute w-[100px] h-[100px] text-white flex items-center justify-center z-50"
                        >
                          <div className="text-4xl">🛵</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className='flex justify-center flex-col items-center w-full'>
                  <h2 className="text-xl font-bold tracking-wide text-green-200">Four-Wheeler Parking</h2>
                  <div
                    className="relative mt-6"
                    style={{
                      width: fourWheelersCols * GRID_SIZE,
                      height: fourWheelersRows * GRID_SIZE,
                    }}
                    ref={gridRef2}
                  >
                    {slotsFourWheelers.map((slot) => (
                      <div
                        key={`${slot.x}-${slot.y}`}
                        onClick={() => handleSlotClick(slot)}
                        className={clsx(
                          "absolute w-[70px] h-[70px] rounded-xl cursor-pointer flex items-center justify-center text-sm font-semibold transition-all duration-300 shadow-md group",
                          slot.occupied
                            ? "bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 border-2 border-yellow-700 text-white shadow-[0_0_15px_rgba(234,179,8,0.6)] hover:scale-105"
                            : "bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 border border-yellow-300 text-yellow-700 hover:scale-105 hover:shadow-[0_0_10px_rgba(253,224,71,0.4)]"
                        )}
                        style={{
                          top: slot.x * GRID_SIZE,
                          left: slot.y * GRID_SIZE,
                        }}
                      >
                        {slot.occupied ? (
                          <div className="text-4xl group-hover:scale-110 transition-transform duration-300">🚙</div>
                        ) : (
                          <></>
                        )}
                      </div>

                    ))}
                    <AnimatePresence>
                      {animatingVehicleFour && (
                        <motion.div
                          key={animatingVehicleFour.id}
                          initial={{
                            x: entryPos2.x,
                            y: entryPos2.y,
                          }}
                          animate={{
                            x: ((animatingVehicleFour.x) * fourWheelersRows * (GRID_SIZE / fourWheelersRows)) - 14,
                            y: ((animatingVehicleFour.y) * fourWheelersCols * (GRID_SIZE / fourWheelersCols)) - 14,
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                          className="absolute w-[100px] h-[100px] text-white flex items-center justify-center"
                        >
                          <div className="text-4xl">🚙</div>
                        </motion.div>
                      )}
                    </AnimatePresence>


                    <AnimatePresence>
                      {animatingVehicleFourExit && (
                        <motion.div
                          key={animatingVehicleFourExit.id}
                          initial={{
                            x: ((animatingVehicleFourExit.x) * fourWheelersRows * (GRID_SIZE / fourWheelersRows)) - 14,
                            y: ((animatingVehicleFourExit.y) * fourWheelersCols * (GRID_SIZE / fourWheelersCols)) - 14,
                          }}
                          animate={{
                            x: exitPos2.x,
                            y: exitPos2.y - 20,
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                          className="absolute w-[100px] h-[100px] text-white flex items-center justify-center z-50"
                        >
                          <div className="text-4xl">🚙</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="w-full flex flex-col items-center gap-6">
                  <div className="relative w-full md:w-3/4 h-[120px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(0,255,100,0.2)] overflow-hidden backdrop-blur-md flex items-center justify-center px-6">
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[sweep_3s_linear_infinite]" />
                    </div>
                    <div className="text-green-400 font-bold text-xl flex items-center gap-3 z-10">
                      <span className="text-2xl animate-pulse">🟢</span> EXIT GATE ACTIVE
                    </div>
                    <div
                      ref={gateRef2}
                      className="absolute bottom-4 w-1/2 h-1 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_2px_rgba(34,197,94,0.5)]"
                    />
                  </div>
                  <div className="text-sm tracking-wide text-green-200 font-medium opacity-90">Vehicles will exit from this gate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}



      {confirmReleaseOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full space-y-4 text-center">
            <h2 className="text-lg font-bold text-gray-800">Release Vehicle?</h2>
            <p className="text-sm text-gray-600">
              Are you sure you want to release the vehicle <br />
              <span className="font-semibold text-red-600">{selectedVehicle}</span>?
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <button
                onClick={() => {
                  if (selectedVehicle) {
                    handleRelease(selectedVehicle);
                  }
                  setConfirmReleaseOpen(false);
                  setSelectedVehicle(null);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Confirm
              </button>
              <button
                onClick={() => setConfirmReleaseOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ParkingSystemLLD;
