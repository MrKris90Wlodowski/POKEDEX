// IMPORTS
import { useState, useEffect } from "react";
import POKE_API_URL from "../config/basePokeAPI";

// VARIABLES
const max = 7;
const POKE_URL_ARRAY = Array.from(
  { length: max },
  (_, i) => `${POKE_API_URL}?offset=${150 + 125 * i}&limit=125`
);

// HOOK
const usePokemonImage = () => {
  // STATE
  const [pokemonsImage, setPokemonImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // EFFECT
  useEffect(() => {
    setLoading(true);

    // FETCH POKEMON DATA
    fetch(POKE_URL_ARRAY[0])
      .then((res) => res.json()) 
      .then((data) => {
        return Promise.all(
          data.results.map((poke) => fetch(poke.url).then((res) => res.json()))
        );
      })
      .then((data) => {
        const pokemonPicture = data.map(
          (pokemon) => pokemon.sprites.other["official-artwork"].front_default
        );
        setPokemonImage(pokemonPicture);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
        console.log(error);
      });
  }, []);

  // RETURN STATE
  return { pokemonsImage, loading, error };
};

// EXPORT
export default usePokemonImage;
