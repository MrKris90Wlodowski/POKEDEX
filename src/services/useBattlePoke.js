import { useState } from "react";
import BASE_API_URL from "../config/baseAPI";

const useBattlePoke = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BATTLE_API_URL = `${BASE_API_URL}/pokemons`;

  const battlePoke = (pokeID, userID, pokeArray) => {
    const pokeRecord = pokeArray.find(poke => Number(pokeID) === poke.id)
    setError(null);
    setLoading(true);
    fetch(`${BATTLE_API_URL}/${pokeID}-${userID.id}`)
      .then((res) => {
        if (res.status === 404) {
          return null;
        } else if (!res.ok) {
          throw new Error(`Unexpected response: ${res.status}`);
        } else {
          return res.json(); 
        }
      })
      .then((data) => {
        console.log(data);
        if ((data?.id ?? false) === `${pokeID}-${userID.id}`) {
          // const boolenIsBattle = data?.isBattle === true ? false : true;

          fetch(`${BATTLE_API_URL}/${pokeID}-${userID.id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              isBattle: true
            }),
          }).catch((error) => {
            setError(error);
            console.log(error);
          });
        } else {
          fetch(BATTLE_API_URL, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              id: `${pokeID}-${userID.id}`,
              idUser: userID.id,
              name: pokeRecord.name,
              exp: pokeRecord.base_experience,
              weight: pokeRecord.weight,
              height: pokeRecord.height,
              ability: pokeRecord.abilities[0].ability.name,
              image: pokeRecord.sprites.other["official-artwork"].front_default,
              isFavor: false,
              isBattle: true,
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
  const surrenderPoke = async(pokeID, userID, pokeArray) => {

    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`${BATTLE_API_URL}/${pokeID}-${userID.id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              isBattle: false
            })})
    } catch(err) {
      console.log("ERROR IS ",err);
      setError(err)
    } finally {
      setLoading(false)
    }
  }
  return { error, loading, battlePoke, surrenderPoke };
};

export default useBattlePoke;
