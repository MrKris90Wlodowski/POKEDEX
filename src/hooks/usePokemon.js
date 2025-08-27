import { useState, useEffect } from "react";
const POKE_URL="https://pokeapi.co/api/v2/pokemon";

const usePokemon = (id) => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`${POKE_URL}/${id}`)
        .then(res => res.json())
        .then(data => {
            setPokemon(data);
            setLoading(false);})
        .catch(error => console.error(error))
    },[id]);

    return { pokemon, loading }
}

export default usePokemon