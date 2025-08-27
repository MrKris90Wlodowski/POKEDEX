import { useState, useEffect } from "react";
const POKE_URL="https://pokeapi.co/api/v2/pokemon";

const usePokemon = (id) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`${POKE_URL}/${id}`)
        .then(res => res.json())
        .then(data => setPokemon(data))
        .catch(error => console.error(error))
    },[id]);

    return {pokemon }
}

export default usePokemon