import React, { useEffect, useRef, useState } from "react";
// import "./index.css";


// const accordionData = [
//     {
//         title: "Photography",
//         content: "Explore the beauty of nature with high-resolution photography.",
//         image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800",
//         icon: "📸",
//     },
//     {
//         title: "Design",
//         content: "Discover modern UI/UX techniques and creative design strategies.",
//         image: "https://images.unsplash.com/photo-1684262483735-1101bcb10f0d?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         icon: "🎨",
//     },
//     {
//         title: "Technology",
//         content: "Stay updated with the latest trends in AI, Web3, and development.",
//         image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
//         icon: "🚀",
//     },
//     {
//         title: "Nature",
//         content: "Explore the beauty of nature with high-resolution photography.",
//         image: "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         icon: "🌿",
//     },
// ];


const RevealCenter = () => {
    return (
        // <div className="page-container">
        //     <div className="page-content">
        //         <section className="hero">
        //             <h1>Unleash Your Creativity</h1>
        //             <p>Build stunning web experiences with React, CSS, and imagination.</p>
        //             <button className="cta-button">Get Started</button>
        //         </section>

        //         <section className="features">
        //             <div className="feature-card">
        //                 <div className="feature-image">
        //                     <img
        //                         src="https://images.unsplash.com/photo-1747549721349-9a2643a44340?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        //                         alt="Smooth Animations"
        //                     />
        //                 </div>

        //                 <div className="feature-content">
        //                     <span className="feature-tag">Animation</span>
        //                     <h2>✨ Smooth Animations</h2>
        //                     <p>Enhance your UI with subtle motion, transitions, and interactive feedback that captivates your users and elevates your design.</p>
        //                     <button className="feature-button">Learn More</button>
        //                 </div>
        //             </div>
        //             <div className="feature-card">
        //                 <div className="feature-image">
        //                     <img
        //                         src="https://images.unsplash.com/photo-1662016745909-1554d716b8b2?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        //                         alt="Smooth Animations"
        //                     />
        //                 </div>

        //                 <div className="feature-content">
        //                     <span className="feature-tag">Animation</span>
        //                     <h2>✨ Smooth Animations</h2>
        //                     <p>Enhance your UI with subtle motion, transitions, and interactive feedback that captivates your users and elevates your design.</p>
        //                     <button className="feature-button">Learn More</button>
        //                 </div>
        //             </div>
        //             <div className="feature-card">
        //                 <div className="feature-image">
        //                     <img
        //                         src="https://images.unsplash.com/photo-1669040501450-982e2c643358?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        //                         alt="Smooth Animations"
        //                     />
        //                 </div>

        //                 <div className="feature-content">
        //                     <span className="feature-tag">Animation</span>
        //                     <h2>✨ Smooth Animations</h2>
        //                     <p>Enhance your UI with subtle motion, transitions, and interactive feedback that captivates your users and elevates your design.</p>
        //                     <button className="feature-button">Learn More</button>
        //                 </div>
        //             </div>

        //         </section>

        //         <section className="cta-final mt-16">
        //             <h2>Ready to Explore?</h2>
        //             <button className="cta-button">Let’s Go!</button>
        //         </section>
        //     </div>
        // </div>

          <div className="page-container">
            <div className="page-content">
                <section className="hero">
                    <h1>Unleash Your Creativity</h1>
                    <p>Build stunnin web experiences with react, css and imagination</p>
                    <button className="cta-button">Get Started</button>
                </section>

                <section className="features">
                    <div className="feature-card">
                        <div className="feature-image">
                            <img src="https://images.unsplash.com/photo-1747549721349-9a2643a44340?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className="feature-content">
                            <span className="feature-tag">
                                Animation
                            </span>
                            <h2>Smooth Animations</h2>
                            <p>
                            Enhance your UI with subtle motion, transitions, and interactive
                            feedback that captivates your users and elevates your design.
                            
                            </p>
                            <button className="feature-button">Learn More</button>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-image">
                            <img src="https://images.unsplash.com/photo-1669040501450-982e2c643358?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className="feature-content">
                            <span className="feature-tag">
                                Animation
                            </span>
                            <h2>Smooth Animations</h2>
                            <p>
                            Enhance your UI with subtle motion, transitions, and interactive
                            feedback that captivates your users and elevates your design.
                            
                            </p>
                            <button className="feature-button">Learn More</button>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="feature-image">
                            <img src="https://images.unsplash.com/photo-1747549721349-9a2643a44340?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className="feature-content">
                            <span className="feature-tag">
                                Animation
                            </span>
                            <h2>Smooth Animations</h2>
                            <p>
                            Enhance your UI with subtle motion, transitions, and interactive
                            feedback that captivates your users and elevates your design.
                            
                            </p>
                            <button className="feature-button">Learn More</button>
                        </div>
                    </div>
                </section>
                <section className="cta-final mt-16">
        <h2>Ready to Explore?</h2>
        <button className="cta-button">Let's Go!</button>
                </section>
            </div>
          </div>  


        






    );
};












export default RevealCenter;