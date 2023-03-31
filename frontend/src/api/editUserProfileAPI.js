import axios from "axios";
import config from "../config";

const editUserProfileAPI = async (data) => {
	const { name, phone, college, token } = data;
	return await axios
		.post(
			`${config.baseUrl}${config.editUserProfile}`,
			{
				name,
				phone,
				college,
			},
			{ headers: { Authorization: "Bearer " + token } }
		)
		.catch((err) => {
			console.log(err);
			return { success: false, message: err.message };
		});
};
export default editUserProfileAPI;
