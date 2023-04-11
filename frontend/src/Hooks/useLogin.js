import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import toast from "react-hot-toast";
import loginAPI from "../api/loginAPI";
import { loggedIn } from "../store/auth";
export const useLogin = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const dispatch = useDispatch();
	const login = async (email, password) => {
		setIsLoading(true);
		setError(null);
		await loginAPI({ email, password })
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
	};

	return { login, isLoading, error };
};
