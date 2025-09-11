import BASE_API_URL from "../config/baseAPI";
import { useState } from "react";

const useGetRecordPoke = () => {
//   const [recordPoke, setRecordPoke] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const RECORD_API_URL = `${BASE_API_URL}/pokemons`;

  const pokeRecord = (id) => {
    setLoading(true)
    fetch(`${RECORD_API_URL/id}`,{ method: "GET"})
    .then(res => res.json())
    // .then(data => setRecordPoke(data))
    .catch(error => {
        setLoading(false);
        setError(error);
        console.log(error);
  })
  };
  return { loading, error,pokeRecord}
};

export default useGetRecordPoke
