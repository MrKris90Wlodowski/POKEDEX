// IMPORTS
import { useState, useEffect } from "react";
import POKE_API_URL from "../config/basePokeAPI";

const POKE_API_150 = `${POKE_API_URL}?limit=150`;

// HOOK
const usePokemonAPI = () => {
  // STATE
  const [pokemonsList, setPokemonsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // EFFECT
  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      try {
        const res = await fetch(POKE_API_150);
        const data = await res.json();

        const allData = await Promise.all(
          data.results.map((poke) =>
            fetch(poke.url).then((res) => res.json())
          )
        );

        setPokemonsList(allData);
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false); 
      }
    };

    fetchPokemons();
  }, []);

  // RETURN STATE
  return { error, pokemonsList, loading };
};

// EXPORT
export default usePokemonAPI;
