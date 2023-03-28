import { createContext, useReducer, useEffect } from "react";
import getUserDataAPI from "../api/getUserDataAPI";
export const AuthContext = createContext();

export const authReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			return { user: action.payload };
		case "LOGOUT":
			return { user: null };
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
	});

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem("token"));
		if (token) {
			getUserDataAPI({ token: token }).then((response) => {
				console.log(response);
				dispatch({ type: "LOGIN", payload: response.data });
			});
		}
	}, []);

	console.log("AuthContext state: ", state);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
