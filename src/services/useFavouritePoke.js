// IMPORTS
import { useState } from "react";
import BASE_API_URL from "../config/baseAPI";
import useAuth from "../hooks/useAuth";

// HOOK / VARIABLES / STATE
const useFavouritePoke = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setPokemonData } = useAuth();

  const FAVOR_API_URL = `${BASE_API_URL}/pokemons`;

  // FUNCTIONS
  const getAddNewCreate = (newPoke) => {
    setPokemonData((prev) => [...prev, newPoke]);
  };

  const getUpdateNewEdit = (editPoke) => {
    setPokemonData((prev) =>
      prev.map((p) => (p.id === editPoke.id ? { ...p, ...editPoke } : p))
    );
  };

  const favouritePoke = async (pokeID, userID, pokeArray) => {
    setError(null);
    setLoading(true);

    try {
      const pokeRecord = pokeArray.find((poke) => Number(pokeID) === poke.id);
      const res = await fetch(`${FAVOR_API_URL}/${pokeID}-${userID.id}`);

      if (!res.ok && res.status !== 404) {
        throw new Error(`Unexpected response: ${res.status}`);
      }

      const data = res.status === 404 ? null : await res.json();

      if (data) {
        const newIsFavor = !data.isFavor;
        await fetch(`${FAVOR_API_URL}/${pokeID}-${userID.id}`, {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ isFavor: newIsFavor }),
        });
        getUpdateNewEdit({ ...data, isFavor: newIsFavor });
      } else {
        const newPoke = {
          id: `${pokeID}-${userID.id}`,
          idUser: userID.id,
          name: pokeRecord.name,
          exp: pokeRecord.base_experience,
          weight: pokeRecord.weight,
          height: pokeRecord.height,
          ability: pokeRecord.abilities[0].ability.name,
          image: pokeRecord.sprites.other["official-artwork"].front_default,
          isFavor: true,
          isBattle: false,
          winBattle: 0,
          lossBattle: 0,
          isEdit: false,
        };
        await fetch(FAVOR_API_URL, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(newPoke),
        });
        getAddNewCreate(newPoke);
      }
    } catch (err) {
      console.error("Favourite error:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // RETURN
  return { error, loading, favouritePoke };
};

// EXPORT
export default useFavouritePoke;
