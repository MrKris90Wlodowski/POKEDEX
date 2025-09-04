import { useState } from "react";
import useAuth from "../hooks/useAuth";
import BASE_API_URL from "../config/baseAPI";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const { handleSetLog } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const REGISTER_URL = `${BASE_API_URL}/users`;

  //   function allow navigate
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/pokemons");
  };

  const loginRecords = (data) => {
    setLoading(true);
    fetch(`${REGISTER_URL}`)
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
            // check condition
          } else {
            // in near future place for notistack message invalid password
            console.log("NO MATCH PASSWORD");
            return;
          }
        } else {
          // in near future place for notistack message invalid email
          console.log("NO MATCH EMAIL");
          return;
        }
         handleSetLog();
         handleNavigate()
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
        console.log(error);
      });
  };

  return { error, loading, loginRecords };
};

export default useLogin;
