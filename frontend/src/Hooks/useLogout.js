import { useDispatch } from "react-redux";
import { loggedOut } from "../store/auth";
export const useLogout = () => {
	const dispatch = useDispatch();

	const logout = () => {
		localStorage.removeItem("token");
		dispatch(loggedOut());
	};

	return { logout };
};
