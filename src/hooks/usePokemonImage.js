import { useState, useEffect } from "react";
import POKE_API_URL from "../config/basePokeAPI";

const usePokemonImage = () => {
  const [pokemonsImage, setPokemonImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const POKE_API_IMG = `${POKE_API_URL}?offset=150`;

  useEffect(() => {
    setLoading(true);
    fetch(POKE_API_IMG)
      .then((res) => res.json())
      .then((data) => {
        return Promise.all(
          data.result.map((poke) => fetch(poke.url).then((res) => res.json()))
        );
      })
      .then((data) => {
        setPokemonImage(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
        console.log(error);
      });
  }, []);

  return { pokemonsImage, loading, error };
};

export default usePokemonImage;
