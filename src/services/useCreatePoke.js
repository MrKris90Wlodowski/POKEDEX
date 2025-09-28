// IMPORTS
import { useState } from "react";
import BASE_API_URL from "../config/baseAPI";
import useAuth from "../hooks/useAuth";

// VARIABLES / STATE
const useCreatePoke = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setPokemonData } = useAuth();

  const USER_API_URL = `${BASE_API_URL}/users`;
  const FAVOR_API_URL = `${BASE_API_URL}/pokemons`;
  const baseCreatePokeID = 151;

  // FUNCTIONS

  const getAddNewCreate = (newPoke) => {
    setPokemonData((prev) => [...prev, newPoke]);
  };

  const getUpdateNewEdit = (editPoke) => {
    setPokemonData((prev) =>
      prev.map((p) => (p.id === editPoke.id ? { ...p, ...editPoke } : p))
    );
  };

  const getCounter = async (userData) => {
    const res = await fetch(`${USER_API_URL}/${userData.id}`);
    if (!res.ok) throw new Error(`FETCH FAILED: ${res.status}`);
    const data = await res.json();
    return data.counterEditPoke ?? 0;
  };

  const getAddCounter = async (userData) => {
    const counter = await getCounter(userData);
    await fetch(`${USER_API_URL}/${userData.id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        counterEditPoke: counter + 1,
      }),
    });
  };

  const createPokemon = async (userData, dataForm, notifyMessage) => {
    setLoading(true);
    try {
      const counter = await getCounter(userData);

      const newPokemon = {
        id: `${baseCreatePokeID + counter}-${userData.id}`,
        idUser: userData.id,
        name: dataForm.nameCreatePoke,
        exp: dataForm.expCreatePoke,
        weight: dataForm.weightCreatePoke,
        height: dataForm.heightCreatePoke,
        ability: "none",
        image: dataForm.imageCreatePoke,
        isFavor: false,
        isBattle: false,
        winBattle: 0,
        lossBattle: 0,
        isEdit: true,
      };

      await fetch(FAVOR_API_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newPokemon),
      });

      await getAddCounter(userData);
      getAddNewCreate(newPokemon);

      if (notifyMessage) {
        notifyMessage(`Pokemon ${newPokemon.name} created!`, {
          variant: "success",
        });
      }
    } catch (err) {
      console.error("ERROR IS ", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const editPokemon = async (pokemonData, dataForm, notifyMessage) => {
    setLoading(true);
    try {
      const editPokemon = {
        id: pokemonData.id,
        exp: dataForm.expCreatePoke,
        weight: dataForm.weightCreatePoke,
        height: dataForm.heightCreatePoke,
      };

      await fetch(`${FAVOR_API_URL}/${pokemonData.id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(editPokemon),
      });

      getUpdateNewEdit(editPokemon);

      if (notifyMessage) {
        notifyMessage(`Updated pokemon ${pokemonData.name} attributes`, {
          variant: "success",
        });
      }
    } catch (err) {
      console.error("ERROR IS ", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // RETURN
  return { error, loading, createPokemon, editPokemon };
};

// EXPORT
export default useCreatePoke;
