import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import "./test.css";
import { FaInfo } from 'react-icons/fa';
type TaskType =
    | 'promise'
    | 'mutation'
    | 'queueMicrotask'
    | 'microtaskCustom'
    | 'setTimeout'
    | 'setInterval'
    | 'setImmediate'
    | 'io'
    | 'raf'
    | 'fetch'
    | 'websocket'
    | 'domEvent'
    | 'clickHandler'
    | 'animationFrame'
    | 'idleCallback';
type QueueType = 'microtask' | 'macrotask' | 'callStack';

type Task = {
    id: string;
    type: TaskType;
    queue: QueueType;
    label: string;
};

const InfoButton: React.FC<{ section: string }> = ({ section }) => {
    const [showInfo, setShowInfo] = useState(false);

    const infoText: Record<string, string> = {
        'Call Stack': 'The Call Stack keeps track of function calls in JavaScript. It follows LIFO: Last In, First Out.',
        'Microtasks': 'Microtasks are higher-priority tasks like Promises, MutationObservers, and queueMicrotask(). They execute after the current JavaScript stack is cleared.',
        'Macrotasks': 'Macrotasks include setTimeout, setInterval, I/O events, and other scheduled tasks. They run after microtasks are processed.'
    };

    return (
        <div className="relative">
            <button
                onClick={() => setShowInfo(!showInfo)}
                className="flex items-center justify-center w-6 h-6 text-xs text-white/80 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md hover:scale-110 transition transform duration-300 ease-out shadow-md hover:shadow-pink-400/30 animate-pulse-slow"
            >
                <FaInfo size={14} className="text-white/80" />
            </button>

            {showInfo && (
                <div
                    className="absolute z-50 top-8 left-1/2 -translate-x-1/2 transition-all max-w-[80vw] sm:max-w-64 p-3 rounded-xl text-sm text-white 
    bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-white/10 shadow-xl backdrop-blur-lg 
    animate-fadeIn"
                    style={{ wordWrap: 'break-word' }}
                >
                    {infoText[section] || 'No information available.'}
                </div>
            )}
        </div>
    );
};


const TaskCard: React.FC<{ task: Task, floatingTask: string }> = ({ task, floatingTask }) => {
    const baseGradient =
        task.queue === 'microtask'
            ? 'from-pink-500/40 via-pink-700/30 to-purple-800/20'
            : task.queue === 'macrotask'
                ? 'from-cyan-500/40 via-blue-700/30 to-blue-900/20'
                : 'from-violet-500/40 via-violet-700/30 to-purple-800/20';

    const borderColor =
        task.queue === 'microtask' ? 'border-pink-400/30' :
            task.queue === 'macrotask' ? 'border-cyan-400/30' :
                'border-violet-400/30';

    const shadowColor =
        task.queue === 'microtask' ? '#ec4899' :
            task.queue === 'macrotask' ? '#06b6d4' :
                '#8b5cf6';


    return (
        <motion.div
            data-task-id={task.id}
            className={`relative p-3 w-28 md:w-48 truncate md:h-10 h-max text-center rounded-xl text-sm font-semibold text-white 
          bg-gradient-to-br ${baseGradient} border ${borderColor} 
          shadow-[inset_0_0_15px_#ffffff22,_0_0_30px_5px] backdrop-blur-xl
          hover:scale-105 transition-transform duration-500 ease-out ${task.id === floatingTask ? 'opacity-0' : ''}`}
            style={{
                boxShadow: `inset 0 0 20px rgba(255,255,255,0.1), 0 0 40px 10px ${shadowColor}55`,
                zIndex: 10,
            }}

            whileHover={{ scale: 1.08, rotate: 1 }}
            animate={{ y: [0, -4, 0], boxShadow: [`0 0 30px 10px ${shadowColor}33`, `0 0 40px 15px ${shadowColor}66`, `0 0 30px 10px ${shadowColor}33`] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent blur-lg opacity-20 pointer-events-none z-0"></div>

            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none mix-blend-soft-light z-0"></div>

            <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent opacity-10 blur-lg pointer-events-none"></div>

            <div className="relative z-10 text-xs truncate w-full">{task.label}</div>
        </motion.div>
    );
};

const FloatingTask: React.FC<{ task: { id: string; label: string; from: DOMRect; to: DOMRect }; onComplete: () => void }> = ({ task, onComplete }) => {
    const { from, to } = task;
    const screenWidth = window.innerWidth;
    let deltaX = (to.left + to.width / 2) - (from.left + from.width / 2) - 60;
    let deltaY = to.bottom - from.bottom;


    return (
        <motion.div
            className="fixed w-28 md:w-48 truncate md:h-10 h-max p-3 text-center rounded-xl text-xs font-semibold text-white bg-gradient-to-br from-pink-500/40 via-pink-700/30 to-purple-800/20 border border-pink-400/30 shadow-[inset_0_0_15px_#ffffff22,_0_0_30px_5px] backdrop-blur-xl z-50"
            style={{
                top: from.top - 40,
                left: from.left + 55,
            }}
            initial={{ x: -55, y: 20 }}
            animate={{ x: deltaX, y: deltaY }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            onAnimationComplete={onComplete}
        >
            {task.label}
        </motion.div>
    );
};

const taskDefinitions: { [K in TaskType]: { label: string; queue: QueueType } } = {
    promise: { label: 'Promise.then()', queue: 'microtask' },
    mutation: { label: 'MutationObserver', queue: 'microtask' },
    queueMicrotask: { label: 'queueMicrotask()', queue: 'microtask' },
    microtaskCustom: { label: 'Custom Microtask', queue: 'microtask' },

    setTimeout: { label: 'setTimeout()', queue: 'macrotask' },
    setInterval: { label: 'setInterval()', queue: 'macrotask' },
    setImmediate: { label: 'setImmediate()', queue: 'macrotask' },
    io: { label: 'I/O Task', queue: 'macrotask' },
    raf: { label: 'requestAnimationFrame()', queue: 'macrotask' },
    fetch: { label: 'fetch() API', queue: 'macrotask' },
    websocket: { label: 'WebSocket Message', queue: 'macrotask' },
    domEvent: { label: 'DOM Event', queue: 'macrotask' },
    clickHandler: { label: 'Click Handler', queue: 'macrotask' },
    animationFrame: { label: 'Animation Frame', queue: 'macrotask' },
    idleCallback: { label: 'requestIdleCallback()', queue: 'macrotask' },
};
const EventLoopOne: React.FC = () => {
    const [renderCounter, setRenderCounter] = useState(0);
    const callStackRef = useRef<Task[]>([]);
    const microtasksRef = useRef<Task[]>([]);
    const macrotasksRef = useRef<Task[]>([]);
    const taskIdRef = useRef(1);

    const rerender = () => setRenderCounter((c) => c + 1);

    const [floatingTask, setFloatingTask] = useState<{
        id: string;
        label: string;
        from: DOMRect;
        to: DOMRect;
    } | null>(null);


    const moveTaskToCallStack = (source: 'microtasks' | 'macrotasks') => {
        const task = (source === 'microtasks' ? microtasksRef.current[0] : macrotasksRef.current[0]);
        const fromEl = document.querySelector(`[data-task-id="${task.id}"]`) as HTMLElement;
        const toEl = document.querySelector('#callstack-container') as HTMLElement;

        if (fromEl && toEl) {
            const fromRect = fromEl.getBoundingClientRect();
            const toRect = toEl.getBoundingClientRect();
            setFloatingTask({ id: task.id, label: task.label, from: fromRect, to: toRect });
        }
        setTimeout(() => {
            if (source === 'microtasks') microtasksRef.current.shift();
            else macrotasksRef.current.shift();
        }, 1000);

        rerender();
    };

    const pushTask = (task: Task, target: 'callStack' | 'microtasks' | 'macrotasks') => {
        if (target === 'callStack') callStackRef.current.push(task);
        if (target === 'microtasks') microtasksRef.current.push(task);
        if (target === 'macrotasks') macrotasksRef.current.push(task);
        rerender();
    };

    const popTask = (target: 'callStack' | 'microtasks' | 'macrotasks') => {
        if (target === 'callStack') {
            callStackRef.current.shift();
            callStackRef.current.shift();
        };
        if (target === 'microtasks') microtasksRef.current.shift();
        if (target === 'macrotasks') macrotasksRef.current.shift();
        rerender();
    };

    const randomTask = (): Task => {
        const keys = Object.keys(taskDefinitions) as TaskType[];
        const type = keys[Math.floor(Math.random() * keys.length)];
        const def = taskDefinitions[type];
        return { id: `t${taskIdRef.current++}`, type, queue: def.queue, label: def.label };
    };

    const scheduleRandomTasks = () => {
        const tasksToPush = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < tasksToPush; i++) {
            const task = randomTask();
            const delay = i * 2000;
            setTimeout(() => {
                pushTask(task, task.queue === 'microtask' ? 'microtasks' : 'macrotasks');
            }, delay);
        }
    };

    useEffect(() => {
        const processLoop = () => {
            if (callStackRef.current.length === 0) {
                if (microtasksRef.current.length > 0) {
                    const task = microtasksRef.current[0];
                    moveTaskToCallStack('microtasks');
                    pushTask(task, 'callStack');
                    // scheduleRandomTasks();
                    setTimeout(() => scheduleRandomTasks(), 6000);
                    setTimeout(() => popTask('callStack'), 1500);
                } else if (macrotasksRef.current.length > 0) {
                    const task = macrotasksRef.current[0];
                    moveTaskToCallStack('macrotasks');
                    pushTask(task, 'callStack');
                    // scheduleRandomTasks();
                    setTimeout(() => scheduleRandomTasks(), 6000);
                    setTimeout(() => popTask('callStack'), 1500);
                } else {
                    scheduleRandomTasks();
                }
            }
            setTimeout(() => processLoop(), 3000);
        };
        setTimeout(() => processLoop(), 3000);
    }, []);


    return (
        <div className="relative w-full min-h-screen text-white flex flex-col items-center justify-start p-3 md:p-10 space-y-14 font-sans">
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute w-[300vw] h-[300vw] bg-gradient-radial from-fuchsia-500/90 via-purple-500/80 to-transparent rounded-full blur-[200px] opacity-90 animate-pulse-slow animate-blob-drift-1 left-1/4 top-1/4 mix-blend-screen"></div>

                <div className="absolute w-[300vw] h-[300vw] bg-gradient-radial from-cyan-400/90 via-blue-500/80 to-transparent rounded-full blur-[200px] opacity-90 animate-pulse-slow animate-blob-drift-2 right-1/4 bottom-1/4 mix-blend-screen"></div>

                <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,0,255,0.4),rgba(0,255,255,0.4),transparent)] animate-rotate-slow blur-[150px] opacity-60 mix-blend-overlay"></div>

                <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.4)_2px,transparent_2px)] bg-[size:16px_16px] animate-grid-drift opacity-25 pointer-events-none mix-blend-overlay"></div>

                <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.25)_1.5px,transparent_1.5px)] bg-[size:12px_12px] animate-particles opacity-25 pointer-events-none mix-blend-soft-light"></div>

                <div className="absolute inset-0 bg-gradient-conic from-fuchsia-500/50 via-purple-500/40 to-cyan-500/40 animate-rotate-very-slow blur-[200px] opacity-60 mix-blend-overlay"></div>
            </div>

            <h1
                className="relative text-3xl md:text-6xl font-extrabold tracking-widest text-center bg-clip-text text-transparent 
    bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 
    animate-gradient-x pulse-slow drop-shadow-xl"
            >
                JavaScript Event Loop Simulator
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 blur-2xl opacity-20 animate-shimmer pointer-events-none"></span>
            </h1>
            <div className="flex items-start flex-col md:flex-row justify-center gap-12 w-full max-w-7xl z-10">
                <div id='callstack-container' className="w-full flex mx-auto md:mx-0 mt-2 md:mt-0 flex-col items-center space-y-6 order-2 md:order-1">
                    <div className="flex items-center gap-2">
                        <h2 className="text-xl font-bold tracking-widest uppercase text-violet-300 drop-shadow-lg">Call Stack</h2>
                        <InfoButton section="Call Stack" />
                    </div>

                    <div
                        className="relative w-4/5 md:w-80 md:h-[500px] h-[250px] flex flex-col p-5 rounded-3xl items-center justify-end gap-4
      bg-gradient-to-br from-violet-700/30 via-purple-800/20 to-violet-900/10
      border border-violet-400/20 shadow-[0_0_50px_15px_#8b5cf644] hover:shadow-violet-500/40
      backdrop-blur-2xl transition-all duration-500 ease-out overflow-visible group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent blur-2xl opacity-20 pointer-events-none"></div>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-soft-light pointer-events-none"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:12px_12px] animate-particles opacity-10 pointer-events-none"></div>
                        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(138,43,226,0.2),rgba(75,0,130,0.2),transparent)] animate-rotate-very-slow blur-2xl opacity-10 pointer-events-none"></div>
                    </div>

                    {floatingTask && (
                        <FloatingTask
                            task={floatingTask}
                            onComplete={() => {
                                callStackRef.current.push({
                                    id: floatingTask.id,
                                    label: floatingTask.label,
                                    type: 'setTimeout',
                                    queue: 'callStack',
                                });
                                setTimeout(() => {
                                    setFloatingTask(null);
                                    rerender();
                                }, 1000);
                            }}
                        />
                    )}
                </div>

                <div className="w-full flex flex-col items-center justify-start gap-6 order-1 md:order-2">
                    {['Microtasks', 'Macrotasks'].map((section, index) => (
                        <><div className="flex items-center gap-2">
                            <h2 className="text-xl font-bold tracking-widest uppercase text-violet-300 drop-shadow-lg">{section}</h2>
                            <InfoButton section={section} />
                        </div>
                            <div
                                className={`relative w-4/5 md:w-[700px] h-32 md:h-52 flex flex-row p-5 rounded-3xl items-start justify-start gap-4 flex-wrap
    ${section === 'Microtasks'
                                        ? 'bg-gradient-to-br from-pink-700/30 via-pink-800/20 to-purple-900/10 border border-pink-400/20 shadow-[0_0_40px_10px_#ec489933] hover:shadow-pink-500/40'
                                        : 'bg-gradient-to-br from-cyan-700/30 via-blue-800/20 to-blue-900/10 border border-cyan-400/20 shadow-[0_0_40px_10px_#06b6d433] hover:shadow-cyan-500/40'
                                    }
    backdrop-blur-2xl transition-all duration-500 ease-out overflow-y-auto overflow-x-hidden group scrollbar-thin scrollbar-track-transparent scrollbar-thumb-pink-400/40
  `}
                            >

                                <AnimatePresence mode="popLayout">
                                    {(section === 'Microtasks'
                                        ? microtasksRef.current
                                        : macrotasksRef.current
                                    ).map((task) => (
                                        <TaskCard key={task.id} floatingTask={floatingTask?.id || ""} task={task} />
                                    ))}
                                </AnimatePresence>

                                <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-transparent blur-lg opacity-30 pointer-events-none"></div>
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-soft-light pointer-events-none"></div>
                                <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:12px_12px] animate-particles opacity-10 pointer-events-none"></div>
                                <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,0,255,0.2),rgba(0,255,255,0.2),transparent)] animate-rotate-very-slow blur-2xl opacity-15 pointer-events-none"></div>

                            </div>
                        </>
                    ))}
                </div>
            </div>


        </div>

    );
};

export default EventLoopOne;