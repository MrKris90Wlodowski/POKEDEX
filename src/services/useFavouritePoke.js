import { useState } from "react";
import BASE_API_URL from "../config/baseAPI";

const useFavouritePoke = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
//   const [pokeRecord, setPokeRecord] = useState(null);


  const FAVOR_API_URL = `${BASE_API_URL}/pokemons`;

  const favouritePoke = (pokeID, userID) => {
    // const [pokeRecord, setPokeRecord] = useState(null);

    const recordPokeID = () => {
      setLoading(true);
      fetch(`${FAVOR_API_URL}/${pokeID.id}`)
        .then((res) => res.json())
        // .then(data => setPokeRecord(data))
        .catch((error) => {
          setLoading(false);
          setError(error);
          console.log(error);
        });
    };

    if (recordPokeID.id === pokeID.id) {
      setLoading(true);
      fetch(FAVOR_API_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          id: `${pokeID.id}-${userID.id}`,
          idUser: userID.id,
          name: pokeID.name,
          exp: pokeID.base_experience,
          weight: pokeID.weight,
          height: pokeID.height,
          ability: pokeID.abilities[0].ability.name,
          image: pokeID.sprites.other["official-artwork"].front_default,
          isFavor: true,
          isBattle: false,
          winBattle: null,
          lossBattle: null,
          isEdit: false,
        }),
      }).catch((error) => {
        setLoading(false);
        setError(error);
        console.log(error);
      });
    } else {
      if (pokeID.isFavor === true) {
        setLoading(true);
        fetch(`${FAVOR_API_URL}/${pokeID.id}-${userID.id}`, {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            isFavor: false,
          }),
        }).catch((error) => {
          setLoading(false);
          setError(error);
          console.log(error);
        });
      } else {
        setLoading(true);
        fetch(`${FAVOR_API_URL}/${pokeID.id}-${userID.id}`, {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            isFavor: true,
          }),
        }).catch((error) => {
          setLoading(false);
          setError(error);
          console.log(error);
        });
      }
    }
  };
  return {error, loading, favouritePoke}
};

export default useFavouritePoke