import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import addMemberToTeamLinkAPI from "../../api/addMemberToTeamLinkAPI";
import { toast } from "react-hot-toast";
import { setLoading, setTeams } from "../../store/auth";
import getUserTeamsAPI from "../../api/getUserTeamsAPI";
const JoinToTeamWithLink = () => {
	const auth = useSelector((state) => state.auth);
	const token = auth.token;
	const { link } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (token !== "") {
			dispatch(setLoading({ loading: true }));
			addMemberToTeamLinkAPI({
				token: token,
				link: link,
			})
				.then((response) => {
					if (response.success) {
						toast.success(response.message);
						navigate("/dashboard");
						return getUserTeamsAPI({ token: auth.token });
					} else {
						toast.error(response.message);
						navigate("/");
						return Promise.reject(response);
					}
				})
				.then((response) => {
					dispatch(setTeams({ teams: response.data }));
				})
				.finally(() => {
					dispatch(setLoading({ loading: false }));
				});
		}
	}, [token]);

	return (
		<>
			<div></div>
		</>
	);
};

export default JoinToTeamWithLink;
