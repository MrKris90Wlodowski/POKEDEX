import { useEffect, useState } from "react";
import BASE_API_URL from "../config/baseAPI";

const useCreatePoke = (userID) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [counter, setCounter] = useState(0)

  const USER_API_URL = `${BASE_API_URL}/users`;
  const USER_RECORD_URL = `${USER_API_URL}/${userID.id}`;
  const FAVOR_API_URL = `${BASE_API_URL}/pokemons`;
  const baseCreatePokeID = 151;

   const counterCreate = async () => {
      try {
        const res = await fetch(`${USER_API_URL}/${userID.id}`);
        if (!res.ok) throw new Error (`FETCH FAILED: ${res.status}`);
        const data = await res.json();
        const counterNewPoke = data.counterEditPoke;
        setCounter(counterNewPoke);
      }  catch (err) {
        console.error("ERROR IS ",err);
        throw err;
      } finally {
        setLoading(false);
      }
    }

  useEffect(() => {
    counterCreate();
  },[userID.id]) 

  const createPoke = async(userID, dataForm) => {
    setLoading(true);
    try {
     await fetch(FAVOR_API_URL, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
           id: `${baseCreatePokeID + counter}-${userID.id}`,
        idUser: userID.id,
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
        })
      })
    } catch(err) {
      setLoading(false)
      setError(err)
    } finally {
      setLoading(false)
      counterCreate();
    }
  }
  return { error, loading, createPoke };
};

export default useCreatePoke;
