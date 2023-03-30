import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
export default function ProtectedRoute(props) {
	const auth = useSelector((state) => state.auth);
	const navigate = useNavigate();
	useEffect(() => {
		//if(auth.checkToken )
		if (auth.checkToken && !auth.isauth) {
			navigate("/login");
		}
	}, [auth]);
	return <div>{props.children}</div>;
}
