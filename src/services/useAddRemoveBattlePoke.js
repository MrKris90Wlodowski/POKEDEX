import { useState } from "react";
import BASE_API_URL from "../config/baseAPI";

const useAddRemoveBattlePoke = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BATTLE_API_URL = `${BASE_API_URL}/pokemons`;

  const addRemoveBattlePoke = (data, invidualID, pokemonArray, boolenState) => {
    setLoading(true);
    if (boolenState === false) {
      fetch(`${BASE_API_URL}`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: {
          id: `${data.id}-${invidualID.id}`,
          idUser: invidualID.id,
          name: data.name,
          exp: data.base_experience,
          weight: data.weight,
          height: data.height,
          ability: data.abilities[0].ability.name,
          image: data.sprites.other["official-artwork"].front_default,
          isFavor: true,
          isBattle: false,
          // winBattle: null,
          // lossBattle: null,
          // isEdit: false
        },
      }).catch(() => {
        setLoading(false);
        setError(error);
        console.log(error);
      });
    } else {
      const uniqeID = pokemonArray.find(
        (poke) => poke.id === `${data.id}-${invidualID.id}`
      );
      fetch(`${BATTLE_API_URL}/${uniqeID.id}`, {
        method: "DELETE",
      }).catch((error) => {
        setLoading(false);
        setError(error);
        console.log(error);
      });
    }
  }; 
  return { error, loading, addRemoveBattlePoke }
};

export default useAddRemoveBattlePoke;
