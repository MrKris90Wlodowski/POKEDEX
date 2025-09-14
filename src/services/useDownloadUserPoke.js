import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import BASE_API_URL from "../config/baseAPI";

const useDownloadUserPoke = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userPokemons, setUserPokemons] = useState([]);
  const { userData } = useAuth();
  const BASE_API_USER = `${BASE_API_URL}/pokemons?idUser=${userData.id}`;

  useEffect(() => {
    setLoading(true);
    fetch(BASE_API_USER)
      .then((res) => res.json())
      .then((data) => setUserPokemons(data))
      .catch((error) => {
        setLoading(false);
        setError(error);
        console.log(error);
      });
  }, [userData]);

  return { loading, error, userPokemons };
};

export default useDownloadUserPoke;
