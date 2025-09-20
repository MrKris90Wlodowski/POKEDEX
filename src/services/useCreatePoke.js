import { useState } from "react";
import BASE_API_URL from "../config/baseAPI";
import useAuth from "../hooks/useAuth";


const useCreatePoke = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setPokemonData } = useAuth();

  const USER_API_URL = `${BASE_API_URL}/users`;
  const FAVOR_API_URL = `${BASE_API_URL}/pokemons`;
  const baseCreatePokeID = 151;

    const getAddNewCreate = (newPoke) => {
    setPokemonData(prev => [...prev, newPoke])
  }

  const getCounter = async (userData) => {
    const res = await fetch(`${USER_API_URL}/${userData.id}`);
    if (!res.ok) throw new Error(`FETCH FAILED: ${res.status}`);
    const data = await res.json();
    return data.counterEditPoke ?? 0;
  };

  const getAddCounter = async(userData) => {
    const counter = await getCounter(userData)
    const res = await fetch(`${USER_API_URL}/${userData.id}`,{
      method: "PATCH",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({
        counterEditPoke: counter + 1
      })
    });
  }

  const createPoke = async (userData, dataForm) => {
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
          image: dataForm.imageCreatePoke,
          isFavor: false,
          isBattle: false,
          winBattle: null,
          lossBattle: null,
          isEdit: true,
      }
      await fetch(FAVOR_API_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newPokemon),
      })
      const addConterPoke = await getAddCounter(userData);
      const addNewEdit = getAddNewCreate(newPokemon)
      ;

      // IN FUTURE (PUT/PATCH  /users/:id)
    } catch (err) {
      console.error("ERROR IS ", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, createPoke };
};

export default useCreatePoke;
