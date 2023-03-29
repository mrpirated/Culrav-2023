import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
// import axios from "axios";
import toast from "react-hot-toast";
import loginAPI from "../api/loginAPI";

export const useLogin = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { dispatch } = useAuthContext();

	const login = async (email, password) => {
		setIsLoading(true);
		setError(null);
		await loginAPI({ email, password })
			.then((response) => {
				console.log(response);
				if (response.success) {
					localStorage.setItem("token", JSON.stringify(response.data.token));
					response.data.user.token = response.data.token;
					dispatch({ type: "LOGIN", payload: response.data.user });
					toast.success(response.message);
				} else {
					toast.error(response.message);
				}
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	return { login, isLoading, error };
};
