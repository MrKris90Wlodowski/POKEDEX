// IMPORTS
import { useState } from "react";
import BASE_API_URL from "../config/baseAPI";
import useAuth from "../hooks/useAuth";

// VARIABLES / STATE
const useBattlePoke = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setPokemonData } = useAuth();

  const BATTLE_API_URL = `${BASE_API_URL}/pokemons`;

  // FUNCTIONS
  const getAddNewCreate = (newPoke) => {
    setPokemonData((prev) => [...prev, newPoke]);
  };

  const getUpdateNewEdit = (editPoke) => {
    setPokemonData((prev) =>
      prev.map((p) => (p.id === editPoke.id ? { ...p, ...editPoke } : p))
    );
  };

  const battlePoke = async (pokeID, userID, pokeArray) => {
    setError(null);
    setLoading(true);

    try {
      const pokeRecord = pokeArray.find((poke) => Number(pokeID) === poke.id);
      const res = await fetch(`${BATTLE_API_URL}/${pokeID}-${userID.id}`);

      if (!res.ok && res.status !== 404) {
        throw new Error(`Unexpected response: ${res.status}`);
      }

      const data = res.status === 404 ? null : await res.json();

      if (data) {
        await fetch(`${BATTLE_API_URL}/${pokeID}-${userID.id}`, {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ isBattle: true }),
        });
        getUpdateNewEdit({ ...data, isBattle: true });
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
          isFavor: false,
          isBattle: true,
          winBattle: 0,
          lossBattle: 0,
          isEdit: false,
        };

        await fetch(BATTLE_API_URL, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(newPoke),
        });
        getAddNewCreate(newPoke);
      }
    } catch (err) {
      console.error("Battle error:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const surrenderPoke = async (pokeID) => {
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${BATTLE_API_URL}/${pokeID.id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ isBattle: false }),
      });

      if (!res.ok) throw new Error(`Unexpected response: ${res.status}`);

      const data = await res.json();
      getUpdateNewEdit({ ...data, isBattle: false });
    } catch (err) {
      console.error("Surrender error:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // RETURN
  return { error, loading, battlePoke, surrenderPoke };
};

// EXPORT
export default useBattlePoke;
