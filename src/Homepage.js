import React from 'react';
import { Link } from 'react-router-dom';
import pokemonPic from './pokemonpic.png'; 

const HomePage = () => {
  return (
    <div
      className="bg-local absolute inset-0"
      style={{
        backgroundImage: `url(${pokemonPic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="flex flex-col justify-center items-center absolute bottom-0 mb-20">
        <Link to="/main">
          <button
            className="bg-customBlue hover:bg-blue-900 text-white border-white border-2 font-bold py-4 px-8 rounded-lg text-2xl"
            style={{ fontFamily: 'Montague Slab' }}
          >
            Start Game
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;