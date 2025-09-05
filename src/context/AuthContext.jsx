import BASE_API_URL from "../config/baseAPI";
// import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [log, setLog] = useState("logout");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const REGISTER_URL = `${BASE_API_URL}/users`;

  const handleSetLog = () => {
    setLog((prev) => (prev === "logout" ? "login" : "logout"));
  };
  

  const useLogut = () => {
    setUserData(null);
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
            setUserData(rercordsFilteredPassword[0]);
            console.log(rercordsFilteredPassword[0]);
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
        // setUserData(dataRecords);
        handleSetLog();
        // handleNavigate();
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider value={{ log, handleSetLog, loginRecords, useLogut, userData, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
