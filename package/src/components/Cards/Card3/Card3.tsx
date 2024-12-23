import React from 'react';

interface Card3Props {
    image: string;
    title: string;
    description: string;
    price: string;
    sizes?: string[];
    initialQuantity?: number;
    maxQuantity?: number;
    rating?: number;
    totalReviews?: number;
    buttonText?: string;
    onAddToCart?: (quantity: number, size: string | null) => void;
    width?: string;
    height?: string;
    backgroundColor?: string;
}

const Card3: React.FC<Card3Props> = ({
    image,
    title,
    description,
    price,
    sizes = ["S", "M", "L", "XL"],
    initialQuantity = 1,
    maxQuantity = 10,
    rating = 4,
    totalReviews = 120,
    buttonText = "Add to Cart",
    onAddToCart,
    width = "w-96",
    height = "h-96",
    backgroundColor = "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
}) => {
    const [selectedSize, setSelectedSize] = React.useState<string | null>(null);
    const [quantity, setQuantity] = React.useState(initialQuantity);

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart(quantity, selectedSize);
        } else {
            alert(`Added ${quantity} item(s) of size ${selectedSize || "N/A"} to cart.`);
        }
    };
    return (
        <div
            className={`relative overflow-hidden shadow-2xl rounded-3xl group ${width} ${height} ${backgroundColor}`}
        >
            <img
                src={image}
                alt={title}
                className="absolute w-full h-full object-cover rounded-3xl transition-transform duration-500 ease-in-out group-hover:scale-50 group-hover:translate-x-28 group-hover:translate-y-28"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 ease-in-out rounded-3xl"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-0 group-hover:bg-opacity-25 transition-all duration-500 ease-in-out rounded-3xl px-6 py-4">
                <h3 className="text-3xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 ease-in-out">
                    {title}
                </h3>
                <p className="text-base text-pink-200 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 ease-in-out">
                    {description}
                </p>
                <p className="text-2xl font-semibold text-yellow-400 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400 ease-in-out">
                    {price}
                </p>
                <div className="mt-6 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500 ease-in-out">
                    <p className="text-sm text-white mb-2">Select Size:</p>
                    <div className="flex space-x-2">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                className={`px-4 py-2 rounded-full border border-white text-white ${
                                    selectedSize === size
                                        ? "bg-white text-purple-600"
                                        : "hover:bg-white hover:text-purple-600"
                                } transition-all duration-300 ease-in-out`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mt-4 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-600 ease-in-out">
                    {[...Array(5)].map((_, i) => (
                        <span
                            key={i}
                            className={`${
                                i < rating ? "text-yellow-400" : "text-gray-400"
                            } text-lg`}
                        >
                            ★
                        </span>
                    ))}
                    <span className="text-sm text-white">({totalReviews} reviews)</span>
                </div>
                <div className="mt-6 flex items-center justify-between w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-700 ease-in-out">
                    <div className="flex items-center space-x-2">
                        <button
                            className="px-3 py-1 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 ease-in-out"
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                            -
                        </button>
                        <span className="text-white text-lg">{quantity}</span>
                        <button
                            className="px-3 py-1 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 ease-in-out"
                            onClick={() => setQuantity(Math.min(maxQuantity, quantity + 1))}
                        >
                            +
                        </button>
                    </div>
                    <button
                        className="px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm font-medium rounded-lg shadow-md hover:from-pink-600 hover:to-red-600 hover:shadow-xl transition-all duration-300 ease-in-out"
                        onClick={handleAddToCart}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card3;
