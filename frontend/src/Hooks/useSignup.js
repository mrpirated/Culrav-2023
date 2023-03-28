import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { toast } from "react-toastify";
import signupAPI from "../api/signupAPI";

export const useSignup = () => {
	const [errorSignup, setErrorSignup] = useState(null);
	const [isLoadingSignup, setIsLoadingSignup] = useState(null);
	const { dispatch } = useAuthContext();

	const signup = async (name, email, password, mnnit_id) => {
		setIsLoadingSignup(true);
		setErrorSignup(null);
		await signupAPI({ name, email, password, mnnit_id })
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
		// if (!response.ok) {
		// 	setIsLoadingSignup(false);
		// 	toast.error("some ,error occured, please try again");
		// }
		// if (response.ok) {
		// 	if (!json.success) {
		// 		setErrorSignup(json.message);
		// 		toast.error(json.message);
		// 	} else {
		// 		localStorage.setItem("user", JSON.stringify(json));
		// 		dispatch({ type: "LOGIN", payload: json });
		// 		setIsLoadingSignup(false);
		// 		toast.success(json.message);
		// 	}
		// }
	};

	return { signup, isLoadingSignup, errorSignup };
};
