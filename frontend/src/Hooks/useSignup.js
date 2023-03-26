import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [errorSignup, setErrorSignup] = useState(null);
  const [isLoadingSignup, setIsLoadingSignup] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (name, email, password) => {
    setIsLoadingSignup(true);
    setErrorSignup(null);

    const response = await fetch(process.env.REACT_APP_SIGNUP, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoadingSignup(false);
      // setError(json.error);
    }
    if (response.ok) {
      setErrorSignup(json.message);

      if (json.success) {
        localStorage.setItem("user", JSON.stringify(json));

        dispatch({ type: "LOGIN", payload: json });

        setIsLoadingSignup(false);
      }
    }
  };

  return { signup, isLoadingSignup, errorSignup };
};
