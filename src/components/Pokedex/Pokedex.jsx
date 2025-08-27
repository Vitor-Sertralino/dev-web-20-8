import { useState, useEffect } from "react";
import './pokedex.css'

export default function Pokedex() {
    const [pokemons, setPokemons] = useState([])

    async function buscarPokemon() {
        const resposta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025')
        const dados = await resposta.json()
        setPokemons(dados.results)
    }

    useEffect(() => {
        buscarPokemon()
    }, [])

    return (
        <>
        <h2 className="poke__title">Lista de Pokémon (API)</h2>
        <div className="poke__grid">
            {pokemons.map((pokemon, index) => (
            <div key={index} className="poke__card">
                <h3>{pokemon.name}</h3>
                <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemon.name}
                />
            </div>
            ))}
        </div>
        </>
    )
}