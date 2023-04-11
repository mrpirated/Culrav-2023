import axios from "axios";
import config from "../config";

const getRegisterdTeamAPI = async (data) => {
	const { token, event_id } = data;
	return await axios
		.get(config.baseUrl + config.getRegisteredTeams + "?event_id=" + event_id, {
			headers: { Authorization: "Bearer " + token },
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return { success: false, message: err.message };
		});
};
export default getRegisterdTeamAPI;
