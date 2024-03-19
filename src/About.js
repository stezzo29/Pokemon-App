import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function About() {
    const { pokemonId } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [similarPokemons, setSimilarPokemons] = useState([]);

    useEffect(() => {
        if (pokemonId) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
                .then((res) => res.json())
                .then((data) => {
                    setPokemon(data);
                });
        }
    }, [pokemonId]);

    useEffect(() => {
        if (pokemon && pokemon.types.length > 0) {
            const type = pokemon.types[0].type.name; 
            fetch(`https://pokeapi.co/api/v2/type/${type}/`)
                .then((res) => res.json())
                .then((data) => {
                    const similarPokemons = data.pokemon.slice(0, 5).map(pokemon => {
                        const id = pokemon.pokemon.url.split("/").slice(-2)[0];
                        return { id, name: pokemon.pokemon.name };
                    });
                    setSimilarPokemons(similarPokemons);
                });
        }
    }, [pokemon]);

    return (
        <div>
            <div className="absolute top-0 left-0 m-4 text-white text-md bg-customBlue rounded-md py-1 px-2">
                <Link to="/main">Back</Link>
            </div>
            {pokemon && (
                <div className="w-6/12 m-auto bg-purple-100 mt-4 shadow-2xl p-4">
                    <h3 className="text-2xl text-green-900 uppercase text-center">{pokemon.name}</h3>
                    <div className="flex justify-center items-center">
                        <img className="w-48" src={pokemon.sprites["front_default"]} alt="" />
                    </div>
                    <div className="text-center mt-4">
                        <p><strong>Type:</strong> {pokemon.types.map(type => type.type.name).join(", ")}</p>
                        <p><strong>HP:</strong> {pokemon.stats.find(stat => stat.stat.name === "hp").base_stat}</p>
                        <p><strong>Attack:</strong> {pokemon.stats.find(stat => stat.stat.name === "attack").base_stat}</p>
                        <p><strong>Defense:</strong> {pokemon.stats.find(stat => stat.stat.name === "defense").base_stat}</p>
                    </div>
                </div>
            )}
            <div className="w-6/12 m-auto bg-purple-100 mt-4 shadow-2xl p-4">
                <h3 className="text-lg font-semibold mb-4 mt-6 text-center">You might also be interested in...</h3>
                <div className="flex justify-center overflow-hidden">
                    <div className="flex space-x-4">
                        {similarPokemons.map(similarPokemon => (
                            <Link key={similarPokemon.id} to={`/about/${similarPokemon.id}`}>
                                <div className="text-center">
                                    <img className="w-20 h-20 rounded-full" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${similarPokemon.id}.png`} alt={similarPokemon.name} />
                                    <p className="mt-2">{similarPokemon.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
