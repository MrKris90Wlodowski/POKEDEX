import BASE_API_URL from "../config/baseAPI";
import { createContext, useEffect, useState } from "react";
import usePokemonsArrayAPI from "../hooks/usePokemonsArrayAPI";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [log, setLog] = useState(() => {
    return localStorage.getItem("log") || "logout"
  });

  const [userData, setUserData] = useState(() => {
    const userFile = localStorage.getItem("userData");
    return userFile ? JSON.parse(userFile) : null;
  });

  const [pokemonData, setPokemonData] = useState(() => {
    const pokemonFile = localStorage.getItem("pokemonData");
    return pokemonFile ? JSON.parse(pokemonFile) : null;
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
    localStorage.setItem("log",log);
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("pokemonData", JSON.stringify(pokemonData))
  },[log, userData, pokemonData])

  const USER_URL = `${BASE_API_URL}/users`;
  const POKE_URL = `${BASE_API_URL}/pokemons`

  const handleSetLog = () => {
    setLog((prev) => (prev === "logout" ? "login" : "logout"));
  };

  const userPokemonArray = (data) => {
    setLoading(true);
    fetch(`${POKE_URL}?idUser=${data.id}`)
    .then(res => res.json())
    .then(dataRecords => setPokemonData(dataRecords))
    .catch((error) => {
      setLoading(false);
      setError(error);
      console.log(error);
    })
  }
  

  const logoutRecords = () => {
    setPokemonData(null);
    setUserData(null);
    localStorage.removeItem("log");
    localStorage.removeItem("userData");
    localStorage.removeItem("pokemonData");
  };

  const loginRecords = (data) => {
    setLoading(true);
    return (
    fetch(`${USER_URL}`)
      .then((res) => res.json())
      .then((dataRecords) => {
        const records = dataRecords;
        const recordsFilteredEmail = records.filter(
          (user) => user.email === data.emailLogin
        );
        const rercordsFilteredPassword = recordsFilteredEmail.filter(
          (user) => user.password === data.passwordLogin
        );
        if (recordsFilteredEmail && recordsFilteredEmail.length > 0) {
          if (rercordsFilteredPassword && rercordsFilteredPassword.length > 0) {
            setUserData(rercordsFilteredPassword[0]);
            console.log(rercordsFilteredPassword[0]);
            userPokemonArray(rercordsFilteredPassword[0])
            handleSetLog();
            return {message: "LOGIN SUCCESSFUL", success: true};
            // check condition
          } else {
            // in near future place for notistack message invalid password
            console.log("NO MATCH PASSWORD");
            return {message: "LOGIN FAILED", success: false}
          }
        } else {
          // in near future place for notistack message invalid email
          console.log("NO MATCH EMAIL");
          return {message: "LOGIN FAILED", success: false}
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
        console.log(error);
      }));
  };

  return (
    <AuthContext.Provider value={{ log, handleSetLog, loginRecords, logoutRecords, userData, pokemonData, loading, error, setPokemonData }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
