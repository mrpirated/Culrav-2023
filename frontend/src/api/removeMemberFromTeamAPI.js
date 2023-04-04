import axios from "axios";
import config from "../config";

const removeMemberFromTeamAPI = async (data) => {
	const { token,team_id } = data;
	return await axios
		.post(
			`${config.baseUrl}${config.removeMemberFromTeam}`,
			{ team_id },
			{ headers: { Authorization: "Bearer " + token } }
		)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			return { success: false, message: err.message };
		});
};
export default removeMemberFromTeamAPI;