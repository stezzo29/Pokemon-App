import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home({ pokemonProp: results }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === results.length - 1 ? 0 : prevIndex + 1));
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? results.length - 1 : prevIndex - 1));
    };

    return (
        <div>
            <div className="absolute top-0 left-0 m-4 text-white text-md bg-red-600 rounded-md py-1 px-2">
                <Link to="/">Exit Game</Link>
            </div>
            <div className="mt-4 p-2 flex justify-center items-center relative">
                <button
                    onClick={goToPrev}
                    className="left-4 top-1/2 transform -translate-y-1/2 text-black font-bold py-2 px-10 rounded-full z-10 hover:text-white hover:bg-customBlue focus:outline-none"
                >
                    {"<"}
                </button>
                {results && results.length > 0 && (
                    <div className="w-90 h-90 relative overflow-hidden flex justify-center items-center">
                        <Link to={`/about/${results[currentIndex].index}`}>
                            <div className="shadow-2xl border p-10 bg-yellow-300 w-96 h-96">
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${results[currentIndex].index}.png`}
                                    alt={results[currentIndex].name}
                                    className="w-60 h-60 rounded-full mx-auto"
                                />
                                <div className="text-center mt-4 text-2xl font-semibold">{results[currentIndex].name}</div>
                            </div>
                        </Link>
                    </div>
                )}
                <button
                    onClick={goToNext}
                    className="right-4 top-1/2 transform -translate-y-1/2 text-black font-bold py-2 px-10 rounded-full z-10 hover:text-white hover:bg-customBlue focus:outline-none"
                >
                    {">"}
                </button>
            </div>
        </div>
    );
}
