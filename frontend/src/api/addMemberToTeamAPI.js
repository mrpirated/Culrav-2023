import axios from "axios";
import config from "../config";

const addMemberToTeamAPI = async (data) => {
	const { token, team_id, user_id } = data;
	return await axios
		.post(
			`${config.baseUrl}${config.addMemberToTeam}`,
			{ team_id, user_id },
			{ headers: { Authorization: "Bearer " + token } }
		)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return { success: false, message: err.message };
		});
};
export default addMemberToTeamAPI;
