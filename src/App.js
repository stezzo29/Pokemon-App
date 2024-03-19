import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About';
import HomePage from './Homepage'; 
import './App.css';
import Logo from './Logo'; 
import React, { useEffect, useState } from "react";
import Home from './Home'; 
import Footer from './Footer'; 

function App() {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [inputSearch, setInputSearch] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=300")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((pokemonDetails, index) => {
          return { ...pokemonDetails, index: index + 1 };
        });
        setPokemonsData({ ...data, results })
      });

  }, []);

  useEffect(() => {
    if (!inputSearch) {
      setFilteredPokemon([]);
      return;
    }

    setFilteredPokemon(() =>
      pokemonsData.results?.filter((pokemon) => pokemon.name.includes(inputSearch))
    );
  }, [pokemonsData.results, inputSearch]);

  return (
    <BrowserRouter>
      <div className="p-14">
        <div className="flex flex-col items-center">
          <Logo />
        </div>
        <div className="w-full flex justify-center">
          <input
            onChange={(e) => setInputSearch(e.target.value)}
            placeholder="Search Pokemon"
            type="text"
            className="w-80 mt-4 p-2 border-white border rounded-md" 
          />
        </div>
      </div>

      <Routes>
        <Route path="/about/:pokemonId" element={<About />} />
        <Route path="/" element={<HomePage />} /> 
        {filteredPokemon && (
          <Route path="/main" element={<Home pokemonProp={filteredPokemon} />} />
        )}
      </Routes>
      
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
