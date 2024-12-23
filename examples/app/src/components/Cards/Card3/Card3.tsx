import React from 'react';

interface Card3Props {
    image: string;
    title: string;
    description: string;
    price: string;
}

const Card3: React.FC<Card3Props> = ({ image, title, description, price }) => {
    return (
        <div className="relative overflow-hidden shadow-2xl w-96 h-96 rounded-3xl group bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            {/* Product Image */}
            <img
                src={image}
                alt={title}
                className="absolute w-full h-full object-cover rounded-3xl transition-transform duration-500 ease-in-out group-hover:scale-50 group-hover:translate-x-28 group-hover:translate-y-28"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 ease-in-out rounded-3xl"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-0 group-hover:bg-opacity-25 transition-all duration-500 ease-in-out rounded-3xl px-6 py-4">
                {/* Title */}
                <h3 className="text-3xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 ease-in-out">
                    {title}
                </h3>
                {/* Description */}
                <p className="text-base text-pink-200 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 ease-in-out">
                    {description}
                </p>
                {/* Price */}
                <p className="text-2xl font-semibold text-yellow-400 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400 ease-in-out">
                    {price}
                </p>

                {/* Size Selection */}
                <div className="mt-6 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500 ease-in-out">
                    <p className="text-sm text-white mb-2">Select Size:</p>
                    <div className="flex space-x-2">
                        {["S", "M", "L", "XL"].map((size) => (
                            <button
                                key={size}
                                className="px-4 py-2 rounded-full border border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300 ease-in-out"
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Ratings */}
                <div className="mt-4 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-600 ease-in-out">
                    <span className="text-yellow-400 text-lg">★</span>
                    <span className="text-yellow-400 text-lg">★</span>
                    <span className="text-yellow-400 text-lg">★</span>
                    <span className="text-yellow-400 text-lg">★</span>
                    <span className="text-gray-400 text-lg">☆</span>
                    <span className="text-sm text-white">(120 reviews)</span>
                </div>

                {/* Quantity Selector */}
                <div className="mt-6 flex items-center justify-between w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-700 ease-in-out">
                    <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 ease-in-out">
                            -
                        </button>
                        <span className="text-white text-lg">1</span>
                        <button className="px-3 py-1 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 ease-in-out">
                            +
                        </button>
                    </div>
                    {/* Add to Cart Button */}
                    <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm font-medium rounded-lg shadow-md hover:from-pink-600 hover:to-red-600 hover:shadow-xl transition-all duration-300 ease-in-out">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};





export default Card3;
