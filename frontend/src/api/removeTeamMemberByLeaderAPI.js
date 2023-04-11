import axios from "axios";
import config from "../config";

const removeTeamMemberByLeaderAPI = async (data) => {
	const { token, team_id, user_id } = data;
	return await axios
		.post(
			`${config.baseUrl}${config.removeTeamMemberByLeader}`,
			{ team_id, member_id: user_id },
			{ headers: { Authorization: "Bearer " + token } }
		)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return { success: false, message: err.message };
		});
};
export default removeTeamMemberByLeaderAPI;
