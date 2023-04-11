import axios from "axios";
import config from "../config";

const getUserTeamsAPI = async (data) => {
	const { token } = data;
	return await axios
		.get(config.baseUrl + config.getUserTeams, {
			headers: { Authorization: "Bearer " + token },
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return { success: false, message: err.message };
		});
};
export default getUserTeamsAPI;
