import React from "react";

interface CardProps {
    image: string;
    title: string;
    description: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    titleFontSize?: string;
    descriptionFontSize?: string;
    titleAnimationDelay?: number;
    descriptionAnimationDelay?: number;
}

const Card2: React.FC<CardProps> = ({
    image,
    title,
    description,
    width = "max-w-sm",
    height = "h-96",
    backgroundColor = "bg-black",
    hoverBackgroundColor = "bg-opacity-70",
    titleFontSize = "text-xl",
    descriptionFontSize = "text-sm",
    titleAnimationDelay = 500,
    descriptionAnimationDelay = 700,
}) => {
    return (
        <div className={`relative ${width} ${height} group overflow-hidden`}>
            {/* Top Half of Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:-translate-y-32"
                style={{
                    backgroundImage: `url(${image})`,
                    clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
                }}
            ></div>

            {/* Bottom Half of Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:translate-y-32"
                style={{
                    backgroundImage: `url(${image})`,
                    clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
                }}
            ></div>

            {/* Content Overlay */}
            <div
                className={`absolute inset-0 flex flex-col items-center justify-center ${backgroundColor} bg-opacity-0 group-hover:${hoverBackgroundColor} text-white transition-all duration-500 ease-in-out`}
            >
                <h3
                    className={`${titleFontSize} font-semibold px-3 opacity-0 translate-y-4 transition-all duration-500 ease-in-out delay-[${titleAnimationDelay}ms] group-hover:opacity-100 group-hover:translate-y-0`}
                >
                    {title}
                </h3>
                <p
                    className={`${descriptionFontSize} mt-2 px-3 text-center opacity-0 translate-y-4 transition-all duration-500 ease-in-out delay-[${descriptionAnimationDelay}ms] group-hover:opacity-100 group-hover:translate-y-0`}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card2;
