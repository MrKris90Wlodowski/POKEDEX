import { useState } from "react";
import BASE_API_URL from "../config/baseAPI";

const useFavouritePoke = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const FAVOR_API_URL = `${BASE_API_URL}/pokemons`;

  const favouritePoke = (pokeID, userID) => {

    setError(null);
    setLoading(true);
    fetch(`${FAVOR_API_URL}/${pokeID}-${userID.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.id === `${pokeID}-${userID.id}`) {
          const boolenIsFavor = data.isFavor === true ? false : true;

          fetch(`${FAVOR_API_URL}/${pokeID}-${userID.id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              isFavor: boolenIsFavor,
            }),
          }).catch((error) => {
            setError(error);
            console.log(error);
          });
        } else {
          fetch(FAVOR_API_URL, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              id: `${pokeID}-${userID.id}`,
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
            setError(error);
            console.log(error);
          });
        }
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      })
      .finally(() => setLoading(false));
  };
  return { error, loading, favouritePoke };
};

export default useFavouritePoke;

