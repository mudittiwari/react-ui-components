import React, { useEffect, useRef, useState } from "react";
import "./index.css";

// const Test = () => {
//     const canvasRef = useRef<HTMLCanvasElement>(null);

//     useEffect(() => {
//         const canvas = canvasRef.current!;
//         const ctx = canvas.getContext("2d")!;
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         ctx.fillStyle = "black";
//         ctx.fillRect(0, 0, canvas.width, canvas.height);

//         const drawCircle = (x: number, y: number) => {
//             const radius = 120;
//             const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
//             gradient.addColorStop(0, "rgba(0,0,0,0)");
//             gradient.addColorStop(1, "rgba(0,0,0,1)");

//             ctx.globalCompositeOperation = "destination-out";
//             ctx.fillStyle = gradient;
//             ctx.beginPath();
//             ctx.arc(x, y, radius, 0, 2 * Math.PI);
//             ctx.fill();
//         };

//         const handleMouseMove = (e: MouseEvent) => {
//             drawCircle(e.clientX, e.clientY);
//         };

//         window.addEventListener("mousemove", handleMouseMove);
//         return () => window.removeEventListener("mousemove", handleMouseMove);
//     }, []);

//     useEffect(() => {
//         const cursor = document.getElementById("eraser-cursor");
//         let mouseX = 0, mouseY = 0;
//         let currentX = 0, currentY = 0;

//         const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

//         const update = () => {
//             currentX = lerp(currentX, mouseX, 0.12);
//             currentY = lerp(currentY, mouseY, 0.12);
//             if (cursor) {
//                 cursor.style.left = `${currentX}px`;
//                 cursor.style.top = `${currentY}px`;
//             }
//             requestAnimationFrame(update);
//         };

//         window.addEventListener("mousemove", (e) => {
//             mouseX = e.clientX;
//             mouseY = e.clientY;
//         });

//         update();

//         return () => window.removeEventListener("mousemove", () => { });
//     }, []);

//     return (
//         <div className="reveal-container">
//             <div className="background-glow"></div>
//             <div className="floating-particles"></div>
//             <div className="eraser-cursor" id="eraser-cursor"></div>
//             <div className="content">
//                 <h1 className="headline">Access Restricted: Top-Secret Intel 🔒</h1>

//                 <section className="info-grid">
//                     <div className="info-card">
//                         <img
//                             src="https://images.unsplash.com/photo-1631632286519-cb83e10e3d98?q=80&w=1850&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                             alt="Encrypted Archives"
//                             className="info-card-image"
//                         />
//                         <div className="info-card-content">
//                             <h2>🗝️ Encrypted Archives</h2>
//                             <p>Access restricted files containing cutting-edge research, confidential blueprints, and insider strategies for tomorrow's breakthroughs.</p>
//                         </div>
//                     </div>

//                     <div className="info-card">
//                         <img
//                             src="https://images.unsplash.com/photo-1634979149798-e9a118734e93?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                             alt="Project Blackout"
//                             className="info-card-image"
//                         />
//                         <div className="info-card-content">
//                             <h2>🕵️‍♂️ Project Blackout</h2>
//                             <p>An undisclosed initiative designed to push the boundaries of AI, security, and digital privacy. The details remain classified.</p>
//                         </div>
//                     </div>

//                     <div className="info-card">
//                         <img
//                             src="https://images.unsplash.com/photo-1550527882-b71dea5f8089?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                             alt="Access Logs"
//                             className="info-card-image"
//                         />
//                         <div className="info-card-content">
//                             <h2>🔍 Access Logs</h2>
//                             <p>Trace the footprints of innovators, visionaries, and pioneers who shaped the platform’s secret roadmap and future milestones.</p>
//                         </div>
//                     </div>


//                 </section>

//                 <section className="cta-final">
//                     <h2>Are You Ready to See More?</h2>
//                     <button className="cta-button">Request Access</button>
//                 </section>
//             </div>

//             <canvas ref={canvasRef} className="reveal-canvas"></canvas>
//         </div>
//     );
// };





const RevealContentOnScroll = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const drawCircle = (x: number, y: number) => {
            const radius = 120;
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
            gradient.addColorStop(0, "rgba(0,0,0,0)");
            gradient.addColorStop(1, "rgba(0,0,0,1)");

            ctx.globalCompositeOperation = "destination-out";
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.fill();
        };

        const handleMouseMove = (e: MouseEvent) => {
            drawCircle(e.clientX, e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(()=>{
        const cursor = document.getElementById("eraser-cursor");
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;
        const lerp = (a:number,b:number,n:number)=>(1-n)*a+n*b;
        const update = () =>{
            currentX = lerp(currentX,mouseX,0.12);
            currentY = lerp(currentY,mouseY,0.12);
            if(cursor){
                cursor.style.left = `${currentX}px`;
                cursor.style.top = `${currentY}px`;
            }
            requestAnimationFrame(update);
        }
        window.addEventListener("mousemove",(e)=>{
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        update();

        return () => window.removeEventListener("mousemove",()=>{});
    },[])
    return (
            <div className="reveal-container">
                <div className="background-glow"></div>
                <div className="floating-particles"></div>
                <div className="eraser-cursor" id="eraser-cursor"></div>
                <div className="content">
                    <h1 className="headline">Access Restricted: Top-Secret Intel 🔒</h1>



                    <section className="info-grid">
                        <div className="info-card">
                            <img
                                src="https://images.unsplash.com/photo-1631632286519-cb83e10e3d98?q=80&w=1850&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Encrypted Archives"
                                className="info-card-image"
                            />
                            <div className="info-card-content">
                                <h2>🗝️ Encrypted Archives</h2>
                                <p>
                                    Access restricted files containing cutting-edge research, confidential
                                    blueprints, and insider strategies for tomorrow's breakthroughs.
                                </p>
                            </div>
                        </div>
                        <div className="info-card">
                            <img
                                src="https://images.unsplash.com/photo-1634979149798-e9a118734e93?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Project Blackout"
                                className="info-card-image"
                            />
                            <div className="info-card-content">
                                <h2>🕵️‍♂️ Project Blackout</h2>
                                <p>
                                    An undisclosed initiative designed to push the boundaries of AI,
                                    security, and digital privacy. The details remain classified.
                                </p>
                            </div>
                        </div>
                        <div className="info-card">
                            <img
                                src="https://images.unsplash.com/photo-1550527882-b71dea5f8089?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Access Logs"
                                className="info-card-image"
                            />
                            <div className="info-card-content">
                                <h2>🔍 Access Logs</h2>
                                <p>
                                    Trace the footprints of innovators, visionaries, and pioneers who shaped
                                    the platform’s secret roadmap and future milestones.
                                </p>
                            </div>
                        </div>
                    </section>


                    <section className="cta-final mx-auto w-max">
                        <h2>Are you ready to See More?</h2>
                        <button className="cta-button mx-auto w-max block">Request Access</button>
                    </section>
                </div>

                <canvas ref={canvasRef} className="reveal-canvas" />
            </div>
    );
}


export default RevealContentOnScroll;
