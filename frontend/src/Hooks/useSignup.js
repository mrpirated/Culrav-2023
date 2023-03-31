import { useState } from "react";
import toast from "react-hot-toast";
import signupAPI from "../api/signupAPI";
import { useDispatch } from "react-redux";
import { loggedIn } from "../store/auth";
export const useSignup = () => {
	const [errorSignup, setErrorSignup] = useState(null);
	const [isLoadingSignup, setIsLoadingSignup] = useState(null);
	const dispatch = useDispatch();
	const signup = async (name, email, password, mnnit_id, college, reg) => {
		setIsLoadingSignup(true);
		setErrorSignup(null);
		await signupAPI({
			name,
			email,
			password,
			mnnit_id: reg ? mnnit_id : null,
			college: reg ? null : college,
		})
			.then((response) => {
				if (response.success) {
					localStorage.setItem("token", JSON.stringify(response.data.token));
					// response.data.user.token = response.data.token;
					dispatch(
						loggedIn({ user: response.data.user, token: response.data.token })
					);
					toast.success(response.message);
				} else {
					toast.error(response.message);
				}
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
