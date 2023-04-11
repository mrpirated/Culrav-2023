import axios from "axios";
import config from "../config";

const deactivateTeamLinkAPI = async (data) => {
	const { token, team_id } = data;
	return await axios
		.post(
			`${config.baseUrl}${config.deactivateTeamLink}`,
			{ team_id },
			{ headers: { Authorization: "Bearer " + token } }
		)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return { success: false, message: err.message };
		});
};
export default deactivateTeamLinkAPI;
