import { useState } from "react";
import BASE_API_URL from "../config/baseAPI";

const useCreatePoke = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const FAVOR_API_URL = `${BASE_API_URL}/pokemons`;

  const createPoke = (countEdit, userID, dataForm) => {
    setLoading(true);
    fetch(FAVOR_API_URL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id: `${countEdit}-${userID.id}`,
        idUser: userID.id,
        name: dataForm.nameCreatePoke,
        exp: dataForm.expCreatePoke,
        weight: dataForm.weightCreatePoke,
        height: dataForm.heightCreatePoke,
        // ability: dataForm.abilities[0].ability.name,
        image: dataForm.sprites.other["official-artwork"].front_default,
        isFavor: false,
        isBattle: false,
        winBattle: null,
        lossBattle: null,
        isEdit: true,
      }),
    })
      .catch((error) => {
        setError(error);
        console.log(error);
      })
      .finally(() => setLoading(false));
  };
  return { error, loading, createPoke };
};

export default useCreatePoke;
