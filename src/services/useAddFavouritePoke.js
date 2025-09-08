import { useState } from "react";
import BASE_API_URL from "../config/baseAPI";

const useAddFavouritePoke = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const FAVOR_API_URL = `${BASE_API_URL}/pokemons`

  const addFavorPoke = (data, invidualID) => {
    setLoading(true);
    fetch(`${FAVOR_API_URL}`, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            id: data.id,
            idUser: invidualID.id,
            name: data.name,
            exp: data.base_experience,
            weight: data.weight,
            height: data.height,
            ability: data.abilities[0].ability.name,
            image: data.sprites.other["official-artwork"].front_default,
            isFavor: true,
        })
    }).catch((error) => {
        setLoading(false);
        setError(error);
        console.log(error);
    })
  }
  return {error, loading, addFavorPoke}
};

export default useAddFavouritePoke