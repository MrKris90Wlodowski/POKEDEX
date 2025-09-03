import { useState } from "react";
import useAuth from "../hooks/useAuth";
import BASE_API_URL from "../config/baseAPI";

// casual
import { useNavigate } from "react-router-dom";
// casual

const useLogin = () => {
  const { handleSetLog } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [userList, setUserList] = useState([]);

  const REGISTER_URL = `${BASE_API_URL}/users`;

  //   casual
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  //   casual

  const loginRecords = (data) => {
    setLoading(true);
    fetch(`${REGISTER_URL}`)
      .then((res) => res.json())
      .then((dataRecords) => setUserList(dataRecords))
      .then(userList.map((user) => user.email === data.emailLogin))
      .then(userList.map((user) => user.password === data.passwordLogin))
      .then(() => handleSetLog())
      .then(() => handleNavigate())
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  };

  return { loginRecords };
};

export default useLogin;
