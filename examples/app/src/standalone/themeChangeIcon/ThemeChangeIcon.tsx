import React, { useState } from "react";
// import "./index.css";

type Theme = {
    background: string;
    color: string;
    buttonBg: string;
    buttonText: string;
    cardBorder: string;
};

const emojiThemes: Record<string, Theme> = {
    '🌞': { // Sunshine Vibes
        background: 'linear-gradient(to right, #fcd34d, #fbbf24)',
        color: '#1f2937',
        buttonBg: '#facc15',
        buttonText: '#1f2937',
        cardBorder: '#facc15',
    },
    '🌙': { // Moonlit Night
        background: 'linear-gradient(to right, #0f172a, #334155)',
        color: '#fef9c3',
        buttonBg: '#475569',
        buttonText: '#fef9c3',
        cardBorder: '#fef9c3',
    },
    '🎨': { // Artistic Pop
        background: 'linear-gradient(135deg, #a855f7, #ec4899)',
        color: '#fdf4ff',
        buttonBg: '#d946ef',
        buttonText: '#1f2937',
        cardBorder: '#a855f7',
    },
    '🍎': { // Apple Fresh
        background: 'linear-gradient(135deg, #dc2626, #f87171)',
        color: '#fff1f2',
        buttonBg: '#dc2626',
        buttonText: '#fff1f2',
        cardBorder: '#dc2626',
    },
    '🔥': { // Fire Energy
        background: 'linear-gradient(135deg, #ef4444, #f97316)',
        color: '#fff7ed',
        buttonBg: '#f87171',
        buttonText: '#1c1917',
        cardBorder: '#f97316',
    },
    '🌊': { // Ocean Breeze
        background: 'linear-gradient(135deg, #0ea5e9, #3b82f6)',
        color: '#e0f2fe',
        buttonBg: '#3b82f6',
        buttonText: '#e0f2fe',
        cardBorder: '#0ea5e9',
    },
    '🌿': { // Nature Green
        background: 'linear-gradient(135deg, #22c55e, #16a34a)',
        color: '#f0fdf4',
        buttonBg: '#22c55e',
        buttonText: '#064e3b',
        cardBorder: '#22c55e',
    },
    '⚡': { // Electric Energy
        background: 'linear-gradient(135deg, #facc15, #f97316)',
        color: '#1f2937',
        buttonBg: '#facc15',
        buttonText: '#1f2937',
        cardBorder: '#facc15',
    },
};


const defaultTheme: Theme = {
    background: 'linear-gradient(to right, #fbbf24, #f97316)',
    color: '#1a202c',
    buttonBg: '#fbbf24',
    buttonText: '#1a202c',
    cardBorder: '#fbbf24',
};

// const Test = () => {
//     const [theme, setTheme] = useState<Theme>(defaultTheme);

//     const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//         e.preventDefault();
//         const droppedData = e.dataTransfer.getData('text/plain').trim();
//         const emoji = Array.from(droppedData)[0];
//         const newTheme = emojiThemes[emoji];
//         if (newTheme) {
//             setTheme(newTheme);
//         }
//     };

//     const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//         e.preventDefault();
//     };

//     return (
//         <div
//             className="emoji-theme-container"
//             style={{ background: theme.background, color: theme.color }}
//             onDrop={handleDrop}
//             onDragOver={handleDragOver}
//         >
//             <header className="themed-header">
//                 <h1 style={{ color: theme.color }}>Dynamic Theme Changer 🌈</h1>
//                 <p>Drop an emoji from anywhere to change the vibe of the page!</p>
//             </header>

//             <section className="themed-cards">
//                 <div
//                     className="card"
//                     style={{ borderColor: theme.cardBorder }}
//                 >
//                     <h2>🌟 Stunning Visuals</h2>
//                     <p>Watch the page transform with colors, gradients, and themes—like magic.</p>
//                     <button
//                         style={{
//                             background: theme.buttonBg,
//                             color: theme.buttonText,
//                             border: `2px solid ${theme.cardBorder}`,
//                         }}
//                     >
//                         Explore
//                     </button>
//                 </div>
//                 <div className="card" style={{ borderColor: theme.cardBorder }}>
//                     <h2>🚀 Powered by React</h2>
//                     <p>Built from scratch using React, CSS, and your creative input.</p>
//                     <button style={{
//                         background: theme.buttonBg,
//                         color: theme.buttonText,
//                         border: `2px solid ${theme.cardBorder}`,
//                     }}>Learn More</button>
//                 </div>
//                 <div className="card" style={{ borderColor: theme.cardBorder }}>
//                     <h2>✨ Your Turn</h2>
//                     <p>Try dropping 🌞 🌙 🎨 🍎 🔥 🌊 🌿 ⚡ to explore different themes!</p>
//                     <button style={{
//                         background: theme.buttonBg,
//                         color: theme.buttonText,
//                         border: `2px solid ${theme.cardBorder}`,
//                     }}>Try Now</button>
//                 </div>
//             </section>

//             <footer className="themed-footer">
//                 <p>Made with ❤️ and React | Theme colors powered by emojis!</p>
//             </footer>
//         </div>
//     );
// };

const ThemeChangeIcon = () => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const handleDrop = (e: React.DragEvent<HTMLDivElement>)=>{
        e.preventDefault();
        const droppedData = e.dataTransfer.getData('text/plain').trim();
        const emoji = Array.from(droppedData)[0];
        const newTheme = emojiThemes[emoji];
        if(newTheme) setTheme(newTheme);
    }

    const handleDragOver = (e:React.DragEvent<HTMLDivElement>)=>e.preventDefault();
    return (
        <div className="emoji-theme-container" onDrop={handleDrop} onDragOver={handleDragOver} style={{
            background: theme.background,
            color:theme.color
        }}>
            <header className="themed-header">
                <h1>Dynamic Theme Changer 🌈 </h1>
                <p>Drop an emoji from anywhere to change the vibe of the page!</p>
            </header>



            <section className="themed-cards">

                <div className="card" style={{ borderColor: theme.cardBorder }}>
                    <h2 style={{
                        color: theme.color
                    }}>🌟 Stunning Visuals</h2>
                    <p>Watch the page transform with colors, gradients, and themes-like magic.</p>
                    <button style={{
                        background: theme.buttonBg,
                        color: theme.buttonText,
                        border: `2px solid ${theme.cardBorder}`
                    }}>Explore</button>
                </div>
                <div className="card" style={{ borderColor: theme.cardBorder }}>
                    <h2 style={{
                        color: theme.color
                    }}>🚀 Powered by React</h2>
                    <p>Built from scratch using React, CSS, and your creative input and your creative input.</p>
                    <button style={{
                        background: theme.buttonBg,
                        color: theme.buttonText,
                        border: `2px solid ${theme.cardBorder}`
                    }}>Explore</button>
                </div>

                <div className="card" style={{ borderColor: theme.cardBorder }}>
                    <h2 style={{
                        color: theme.color
                    }}>✨ Your Turn</h2>
                    <p>Try dropping 🌞 🌙 🎨 🍎 🔥 🌊 🌿 ⚡ emojis to explore different themes!</p>
                    <button style={{
                        background: theme.buttonBg,
                        color: theme.buttonText,
                        border: `2px solid ${theme.cardBorder}`
                    }}>Explore</button>
                </div>


            </section>


            <footer className="themed-footer">
                <p>Made with ❤️ and React | Theme Colors powered by emojis!</p>
            </footer>
        </div>
    );
};

export default ThemeChangeIcon;
