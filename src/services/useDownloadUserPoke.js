// IMPORTS
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import BASE_API_URL from "../config/baseAPI";

// HOOK / VARIABLES / STATE
const useDownloadUserPoke = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userPokemons, setUserPokemons] = useState([]);
  const { userData } = useAuth();

  // FUNCTIONS
  useEffect(() => {
    const BASE_API_USER = `${BASE_API_URL}/pokemons?idUser=${userData.id}`;
    setLoading(true);

    const fetchUserPokemons = async () => {
      try {
        const res = await fetch(BASE_API_USER);
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const data = await res.json();
        setUserPokemons(data);
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPokemons();
  }, [userData]);

  // RETURN
  return { loading, error, userPokemons };
};

// EXPORT
export default useDownloadUserPoke;
