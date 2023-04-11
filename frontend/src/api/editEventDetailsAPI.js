import axios from "axios";
import config from "../config";

const editEventDetailsAPI = async (data) => {
	const {
		token,
		event_id,
		event_description,
		event_tagline,
		min_team_members,
		max_team_members,
		rules,
		reg_active,
	} = data;
	return await axios
		.post(
			`${config.baseUrl}${config.editEventDetails}`,
			{
				event_id,
				event_description,
				event_tagline,
				min_team_members,
				max_team_members,
				rules,
				reg_active,
			},
			{ headers: { Authorization: "Bearer " + token } }
		)
		.then((response) => response.data)
		.catch((err) => {
			return { success: false, message: err.message };
		});
};
export default editEventDetailsAPI;
