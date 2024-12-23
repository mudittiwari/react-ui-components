import React from 'react';

interface CardProps {
    image: string;
    title: string;
    description: string;
}

const Card2: React.FC<CardProps> = ({ image, title, description }) => {
    return (
        <div className="relative w-full max-w-sm h-96 group overflow-hidden">
            {/* Top Half */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:-translate-y-32"
                style={{
                    backgroundImage: `url(${image})`,
                    clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
                }}
            ></div>

            {/* Bottom Half */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:translate-y-32"
                style={{
                    backgroundImage: `url(${image})`,
                    clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
                }}
            ></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-70  text-white">
                {/* Title Animation */}
                <h3 className="text-xl font-semibold px-3 opacity-0 translate-y-4 transition-all duration-500 delay-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                    {title}
                </h3>

                {/* Description Animation */}
                <p className="text-sm mt-2 px-3 text-center opacity-0 translate-y-4 transition-all duration-500 delay-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                    {description}
                </p>
            </div>
        </div>
    );
};








export default Card2;
