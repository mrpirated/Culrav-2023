import axios from "axios";
import config from "../config";

const createTeamAPI = async (data) => {
	const { token, event_id, team_name } = data;
	return await axios
		.post(
			`${config.baseUrl}${config.createTeam}`,
			{ event_id, team_name },
			{ headers: { Authorization: "Bearer " + token } }
		)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return { success: false, message: err.message };
		});
};
export default createTeamAPI;
