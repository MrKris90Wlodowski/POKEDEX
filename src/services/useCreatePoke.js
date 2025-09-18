import { useState } from "react";
import BASE_API_URL from "../config/baseAPI";

const useCreatePoke = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const USER_API_URL = `${BASE_API_URL}/users`;
  const FAVOR_API_URL = `${BASE_API_URL}/pokemons`;
  const baseCreatePokeID = 151;

  const getCounter = async (userID) => {
    const res = await fetch(`${USER_API_URL}/${userID}`);
    if (!res.ok) throw new Error(`FETCH FAILED: ${res.status}`);
    const data = await res.json();
    return data.counterEditPoke ?? 0;
  };

  const createPoke = async (userData, dataForm) => {
    setLoading(true);
    try {
      const counter = await getCounter(userData.id); 

      await fetch(FAVOR_API_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
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
        }),
      });

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
