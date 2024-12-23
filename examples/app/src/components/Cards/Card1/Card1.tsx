import React from "react";

interface Card1Props {
    title: string;
    description: string;
    image: string;
    width?: string;
    height?: string;
    rotationDirection?: "X" | "Y";
    overlayColor?: string;
    overlayOpacity?: number;
}

const Card1: React.FC<Card1Props> = ({
    title,
    description,
    image,
    width = "20rem",
    height = "20rem",
    rotationDirection = "X",
    overlayColor = "rgba(45, 55, 72, 0.8)",
    overlayOpacity = 0.8,
}) => {
    return (
        <>
            <style>
                {`
                .card-container {
                    perspective: 1000px;
                }
                .card {
                    position: relative;
                    width: ${width};
                    height: ${height};
                    transform-style: preserve-3d;
                    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
                }
                .card:hover {
                    transform: rotate${rotationDirection}(180deg);
                }
                .card-face {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 0.5rem;
                    backface-visibility: hidden;
                    overflow: hidden;
                    background-size: cover;
                    background-position: center;
                }
                .card-front {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    font-size: 1.25rem;
                    font-weight: bold;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                }
                .card-back {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    background-color: ${overlayColor};
                    color: white;
                    text-align: center;
                    padding: 1.25rem;
                    transform: rotate${rotationDirection}(180deg);
                }
                .card-back-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                    filter: brightness(50%);
                    z-index: 0;
                    opacity: ${overlayOpacity};
                }
                .card-content {
                    z-index: 10;
                }
                .card-title {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: white;
                }
                .card-description {
                    margin-top: 1rem;
                    font-size: 0.875rem;
                    line-height: 1.5;
                    color: white;
                }
                `}
            </style>
            <div className="card-container">
                <div className="card">
                    <div
                        className="card-face card-front"
                        style={{ backgroundImage: `url(${image})` }}
                    >
                        <div className="card-text">{title}</div>
                    </div>
                    <div className="card-face card-back">
                        <div
                            className="card-back-image"
                            style={{ backgroundImage: `url(${image})` }}
                        ></div>
                        <div className="card-content">
                            <h3 className="card-title">{title}</h3>
                            <p className="card-description">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card1;
