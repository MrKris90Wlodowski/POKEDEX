import { useState, useEffect } from "react";
const POKE_URL = "https://pokeapi.co/api/v2/pokemon?limit=150";

const usePokemon = (id) => {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${POKE_URL}`)
      .then((res) => res.json())
      .then((data) => {
        return Promise.all(
          data.results.map((poke) => fetch(poke.url).then((res) => res.json()))
        );
      })
      .then((dataPoke) => {
        setPokemonsList(dataPoke);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
        console.error(error);
      });
  }, []);

  return { error, pokemonsList, loading };
};

export default usePokemon;
