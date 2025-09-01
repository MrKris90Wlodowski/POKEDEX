import { useState } from "react";
import BASE_API_URL from "../config/baseAPI";

const useRegister = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const REGISTER_URL = `${BASE_API_URL}/users`;
  const registerRecord = (data) => {
    setLoading(true);
    fetch(`${REGISTER_URL}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: data.nameRegister,
        email: data.emailRegister,
        password: data.passwordRegister,
      }),
    }).catch((error) => {
      setLoading(false);
      setError(error);
      console.log(error);
    });
  };

  return { loading, error, registerRecord };
};

export default useRegister;
