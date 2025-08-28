import { useState, useEffect } from "react";
const POKE_URL = "https://pokeapi.co/api/v2/pokemon?limit=200";

const usePokemon = (id) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setPokemon(dataPoke);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return { pokemon, loading };
};

export default usePokemon;
