// IMPORTS
import { useState } from "react";
import BASE_API_URL from "../config/baseAPI";
import useAuth from "../hooks/useAuth";

// HOOK / VARIABLES / STATE
const useFight = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setPokemonData } = useAuth();

  const BATTLE_API_URL = `${BASE_API_URL}/pokemons`;

  // FUNCTIONS
  const updatePokemonData = (editPoke) => {
    setPokemonData((prev) =>
      prev.map((p) => (p.id === editPoke.id ? { ...p, ...editPoke } : p))
    );
  };

  const getCounter = async (pokeData, keySearch) => {
    const res = await fetch(`${BATTLE_API_URL}/${pokeData.id}`);
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    const data = await res.json();
    return data[keySearch] ?? 0;
  };

  const updateBattleStats = async (pokeData, fightResult) => {
    try {
      const currentWin = await getCounter(pokeData, "winBattle");
      const currentLoss = await getCounter(pokeData, "lossBattle");
      const currentExp = await getCounter(pokeData, "exp");

      let variantFight = {};
      if (fightResult === true) {
        variantFight.winBattle = currentWin + 1;
        variantFight.exp = currentExp + 10;
      } else {
        variantFight.lossBattle = currentLoss + 1;
      }

      const res = await fetch(`${BATTLE_API_URL}/${pokeData.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(variantFight),
      });

      if (!res.ok) throw new Error(`Update failed: ${res.status}`);

      const updatedPoke = await res.json();
      updatePokemonData({ ...updatedPoke, isBattle: false });
      return updatedPoke;
    } catch (err) {
      console.error("Error updating battle stats:", err);
      setError(err);
      throw err;
    }
  };

  const fightResultPoke = async (pokeData, notifyMessage, fightResult) => {
    setLoading(true);
    setError(null);
    try {
      const updatedPoke = await updateBattleStats(pokeData, fightResult);
      if (notifyMessage) {
        notifyMessage(
          `Pokemon ${updatedPoke.name} ${fightResult ? "wins" : "loses"} the fight!`,
          { variant: "success" }
        );
      }
      return updatedPoke;
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // RETURN
  return { fightResultPoke, loading, error };
};

// EXPORT
export default useFight;
