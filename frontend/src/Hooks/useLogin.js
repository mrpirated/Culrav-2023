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
		// const response = await fetch(process.env.REACT_APP_LOGIN, {
		// 	method: "POST",
		// 	headers: { "Content-Type": "application/json" },
		// 	body: JSON.stringify({ email, password }),
		// });
		await loginAPI({ email, password })
			.then((response) => {
				console.log(response);
				localStorage.setItem("token", JSON.stringify(response.data.token));
				response.data.user.token = response.data.token;
				dispatch({ type: "LOGIN", payload: response.data.user });
				toast.success(response.message);
			})
			.catch((error) => {
				toast.error(error.message);
			});
		// const json = await response.json();
		// if (!response.ok) {
		// 	setIsLoading(false);
		// 	toast.error("some ,error occured, please try again");
		// } else {
		// 	if (!json.success) {
		// 		setError(json.message);
		// 		toast.error(json.message);
		// 	} else {
		// 		localStorage.setItem("user", JSON.stringify(json));
		// 		dispatch({ type: "LOGIN", payload: json });
		// 		setIsLoading(false);
		// 		toast.success(json.message);
		// 	}
		// }

		// try {
		//   const response = await axios.post("http://culrav.online:5008/api/login", {
		//     body: JSON.stringify({ email, password }),
		//     headers: { "Content-Type": "application/json" },
		//   });
		//   const json = await response.json();
		//   setError(response.message);

		//   if (response.success) {
		//     localStorage.setItem("user", JSON.stringify(response));

		//     dispatch({ type: "LOGIN", payload: response });

		//     setIsLoading(false);
		//   }
		// } catch (error) {
		//   setIsLoading(false);
		// }
	};

	return { login, isLoading, error };
};
