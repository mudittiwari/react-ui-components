import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import "./index.css";
const functions = [
    {
        name: "main()",
        color: "from-rose-500 to-pink-500",
        emoji: "🧭",
        type: "normal",
        code: "function main() { initApp(); }"
    },
    {
        name: "fetchUserData()",
        color: "from-orange-500 to-yellow-400",
        emoji: "🧑‍💻",
        type: "blocking",
        code: "const user = await fetch('/api/user');"
    },
    {
        name: "processUserData()",
        color: "from-emerald-500 to-teal-400",
        emoji: "🔍",
        type: "normal",
        code: "const summary = analyzeData(user);"
    },
    {
        name: "saveToDatabase()",
        color: "from-purple-500 to-indigo-400",
        emoji: "💾",
        type: "blocking",
        code: "db.save(summary);"
    },
    {
        name: "renderUI()",
        color: "from-sky-500 to-blue-400",
        emoji: "🎨",
        type: "normal",
        code: "updateUI(summary);"
    },
    {
        name: "cleanup()",
        color: "from-fuchsia-600 to-pink-400",
        emoji: "🧹",
        type: "normal",
        code: "closeConnections();"
    },
];



export default function CallStackDemoTwo() {
    const [stack, setStack] = useState<any[]>([]);
    const [active, setActive] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [currentAction, setCurrentAction] = useState<string | null>(null);
    const [showTagline, setShowTagline] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const [currentBlockedFunction, setCurrentBlockedFunction] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextFunction, setNextFunction] = useState<{ name: string; color: string; emoji: string; type: string; code: string } | null>(null);
    const [simulationStarted, setSimulationStarted] = useState(false);

    const sequence = ["main()", "fetchUserData()", "processUserData()", "saveToDatabase()", "renderUI()", "cleanup()"];

    useEffect(() => {
        if (simulationStarted) {
            if (currentIndex >= sequence.length) return;
            if (isBlocked) return;

            const fnName = sequence[currentIndex];
            const f = functions.find((f) => f.name === fnName);
            if (!f) return;

            setStack((prev) => [...prev, { ...f, id: Date.now() }]);
            setCurrentAction(`${fnName} entered the stack.`);


            if (f.type === "blocking") {

                const fnNameNext = sequence[currentIndex + 1];
                const fNext = functions.find((f) => f.name === fnNameNext);
                setTimeout(() => {
                    setIsBlocked(true);
                    setCurrentBlockedFunction(fnName);
                    setCurrentAction(`${fnName} is blocking... Click resume.`);
                    setNextFunction(fNext ?? null);
                    fail(f.name);
                }, 2000);
                return;
            }
            setTimeout(() => {
                highlight(f.name);
            }, 1000);


            const timer = setTimeout(() => {
                pop(fnName);
                setTimeout(() => {
                    setCurrentIndex((prev) => prev + 1);
                    if (currentIndex == sequence.length - 1)
                        setShowTagline(true);
                }, 2000);
            }, 3500);



            return () => clearTimeout(timer);
        }
    }, [currentIndex, isBlocked, simulationStarted]);

    const pop = (name: string) => {
        setStack((prev) => prev.filter((f) => f.name !== name));
        setCurrentAction(`${name} has completed execution.`);
    };

    const resume = () => {
        if (currentBlockedFunction) {
            pop(currentBlockedFunction);
            setCurrentBlockedFunction(null);
            setIsBlocked(false);
            setCurrentAction(`Resuming execution...`);
            setCurrentIndex((prev) => prev + 1);
            setNextFunction(null);
        }
    };

    const highlight = (name: string) => {
        setActive(name);
        setError(null);
    };

    const fail = (name: string) => {
        setError(name);
        setActive(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center px-4 py-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
            <motion.h1
                className="relative md:text-2xl text-lg text-center font-extrabold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-red-500 mb-6 p-4"
                initial={{ scale: 0.95 }}
                animate={{ scale: [0.95, 1.03, 0.95] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="relative z-10 text-transparent text-white bg-clip-text">
                    The Journey of JavaScript Execution
                </span>
                <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                        boxShadow: "0 0 40px rgba(255,0,0,0.4), 0 0 20px rgba(255,255,255,0.2)",
                    }}
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/10 via-white/20 to-white/10 blur-md opacity-30"></div>
            </motion.h1>
            <motion.p
                className="mt-8 text-sm text-emerald-300 font-bold uppercase text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                Sequential execution in a single-threaded environment
            </motion.p>
            <div className="relative w-full h-12 flex items-center justify-center mt-5 md:mt-10">
                <AnimatePresence>
                    {currentAction && (
                        <motion.p
                            key={currentAction}
                            className="absolute text-md md:text-lg text-emerald-300 font-semibold uppercase text-center"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                        >
                            {currentAction}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
            <div className="relative w-80 h-[480px] rounded-3xl p-5 flex flex-col-reverse items-center justify-start gap-3 bg-gradient-to-b from-black/60 via-black/40 to-black/60 backdrop-blur-2xl border-4 border-transparent shadow-[0_0_60px_rgba(255,0,255,0.3)] overflow-hidden mt-5 md:mt-10">
                <div className="absolute inset-0 rounded-3xl pointer-events-none z-10 border-4 border-transparent animate-border-glow"></div>
                <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:20px_20px] animate-grid-shift opacity-10"></div>
                <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-tr from-fuchsia-500/10 via-pink-500/5 to-sky-400/10 blur-3xl opacity-50"></div>
                <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:12px_12px] animate-pulse opacity-15"></div>
                <div className="absolute inset-4 rounded-2xl pointer-events-none z-0 border-2 border-fuchsia-400/30 animate-pulse blur-md opacity-40"></div>
                <LayoutGroup>
                    <AnimatePresence>
                        {stack.map((f) => (
                            <motion.div
                                key={f.id}
                                className={`relative w-72 h-20 rounded-xl font-bold uppercase flex items-center justify-center text-white overflow-hidden shadow-xl ${active === f.name || error === f.name ? "" : "border-4 border-white/20"
                                    }`}
                                initial={{ opacity: 0, scale: 0.8, y: -40 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.6, y: -60 }}
                                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                            >
                                <div className="code-snippet z-10">{f.code}</div>
                                <motion.div
                                    className="absolute inset-0 pointer-events-none z-0"
                                    style={{
                                        background: `linear-gradient(135deg, rgba(255,255,255,0.05), transparent)`,
                                        mixBlendMode: "screen",
                                    }}
                                />
                                {active === f.name && (
                                    <>
                                        <motion.div
                                            className="absolute inset-0 pointer-events-none z-0 rounded-xl"
                                            style={{
                                                background:
                                                    "radial-gradient(circle at center, rgba(0,255,255,0.3) 0%, rgba(255,0,255,0.2) 40%, transparent 80%)",
                                                filter: "blur(28px) saturate(1.2)",
                                                mixBlendMode: "screen",
                                            }}
                                            animate={{
                                                opacity: [0.5, 0.9, 0.5],
                                                scale: [1, 1.1, 1],
                                            }}
                                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                        <motion.div
                                            className="absolute inset-0 rounded-xl pointer-events-none z-0 border-4"
                                            style={{
                                                borderImage: "linear-gradient(90deg, #0ff, #f0f, #0ff) 1",
                                                boxShadow: "0 0 30px rgba(0,255,255,0.4), 0 0 40px rgba(255,0,255,0.3)",
                                            }}
                                            animate={{
                                                borderImageSlice: [1, 1, 1, 1],
                                                borderImageWidth: [1, 1.02, 1],
                                                rotate: [0, 2, -2, 0],
                                                opacity: [0.6, 0.9, 0.6],
                                            }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                        <motion.div
                                            className="absolute inset-0 pointer-events-none z-0 rounded-xl"
                                            style={{
                                                borderWidth: "2px",
                                                borderStyle: "dashed",
                                                borderColor: "rgba(255,255,255,0.1)",
                                                backgroundImage:
                                                    "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 2px, transparent 2px 4px)",
                                                backgroundSize: "6px 6px",
                                            }}
                                            animate={{
                                                backgroundPosition: ["0% 0%", "100% 100%"],
                                                opacity: [0.2, 0.4, 0.2],
                                            }}
                                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                        />
                                    </>
                                )}
                                {error === f.name && (
                                    <>
                                        <motion.div
                                            className="absolute inset-0 pointer-events-none z-0 rounded-xl"
                                            style={{
                                                background:
                                                    "radial-gradient(circle at center, rgba(255,0,0,0.3) 0%, rgba(255,50,0,0.2) 40%, transparent 80%)",
                                                filter: "blur(30px) contrast(1.2)",
                                                mixBlendMode: "screen",
                                            }}
                                            animate={{
                                                opacity: [0.7, 0.3, 0.7],
                                                scale: [1, 1.15, 1],
                                                rotate: [0, 1, -1, 0],
                                            }}
                                            transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                        <motion.div
                                            className="absolute inset-0 pointer-events-none z-0"
                                            style={{
                                                borderWidth: "3px",
                                                borderStyle: "dashed",
                                                borderColor: "#ff3333",
                                                boxShadow: "0 0 25px rgba(255,0,0,0.6), 0 0 40px rgba(255,80,0,0.4)",
                                                backgroundImage: "repeating-linear-gradient(45deg, rgba(255,0,0,0.2) 0 2px, transparent 2px 4px)",
                                                backgroundSize: "4px 4px",
                                            }}
                                            animate={{
                                                backgroundPosition: ["0% 0%", "100% 100%"],
                                                opacity: [0.7, 0.9, 0.7],
                                            }}
                                            transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                                        />
                                    </>
                                )}
                            </motion.div>



                        ))}
                    </AnimatePresence>
                </LayoutGroup>

                {isBlocked && nextFunction && (
                    <div className="">
                        <motion.div
                            className="relative w-72 mt-6 py-5 px-3 rounded-3xl bg-gradient-to-br from-black/60 via-black/30 to-black/60 backdrop-blur-xl border border-cyan-400/30 shadow-[0_0_40px_rgba(0,255,255,0.2)] flex flex-col items-center gap-3 overflow-hidden"
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            {/* Neon Ring */}
                            <motion.div
                                className="absolute inset-0 rounded-3xl pointer-events-none"
                                style={{
                                    boxShadow: "0 0 60px rgba(0,255,255,0.3), 0 0 40px rgba(255,0,255,0.2)",
                                }}
                                animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Floating Particles */}
                            <motion.div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                                    backgroundSize: "10px 10px",
                                }}
                                animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Content */}
                            <p className="text-sm text-cyan-300 uppercase tracking-wide font-semibold animate-pulse">Next in Line</p>
                            <span className="text-4xl">{nextFunction.emoji}</span>
                            <span className="text-lg font-bold text-cyan-100">{nextFunction.name}</span>
                            <pre className="w-full text-left text-xs p-2 bg-white/10 border border-cyan-400/20 rounded-lg text-cyan-100 font-mono shadow-inner backdrop-blur-sm">
                                {nextFunction.code}
                            </pre>
                        </motion.div>
                    </div>
                )}
            </div>
            {isBlocked && (
                <button
                    onClick={resume}
                    className="mt-4 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-400 text-black font-bold rounded-lg shadow-md animate-pulse"
                >
                    Resume Execution
                </button>
            )}
            {!simulationStarted && (
                <button
                    onClick={() => {
                        setSimulationStarted(true);
                    }}
                    className="mt-4 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-400 text-black font-bold rounded-lg shadow-md animate-pulse"
                >
                    Start
                </button>
            )}
            {showTagline && (
                <motion.p
                    className="mt-8 text-sm md:text-2xl text-emerald-300 font-bold uppercase text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    One thread. One stack. This is JavaScript.
                </motion.p>
            )}
        </div>
    );
}
