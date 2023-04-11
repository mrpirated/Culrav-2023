import axios from "axios";
import config from "../config";

const getOrganizingTeamAPI = async () => {
	return await axios
		.get(config.baseUrl + config.getOrganizingTeam)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return { success: false, message: err.message };
		});
};
export default getOrganizingTeamAPI;
