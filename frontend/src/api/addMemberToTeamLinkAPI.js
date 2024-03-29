import axios from "axios";
import config from "../config";

const addMemberToTeamLinkAPI = async (data) => {
	const { token, link } = data;
	return await axios
		.post(
			`${config.baseUrl}${config.addMemberToTeamLink}`,
			{ link },
			{ headers: { Authorization: "Bearer " + token } }
		)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return { success: false, message: err.message };
		});
};
export default addMemberToTeamLinkAPI;
