// IMPORTS
import { useState } from "react";
import BASE_API_URL from "../config/baseAPI";

// HOOK / VARIABLES / STATE
const useRegister = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const REGISTER_URL = `${BASE_API_URL}/users`;

  // FUNCTIONS
  const registerRecord = (data) => {
    setLoading(true);
    fetch(`${REGISTER_URL}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: data.nameRegister,
        email: data.emailRegister,
        password: data.passwordRegister,
        counterEditPoke: 0
      })
    }).catch((error) => {
      setLoading(false);
      setError(error);
      console.log(error);
    });
  };

  // RETURN
  return { loading, error, registerRecord };
};

// EXPORT
export default useRegister;
