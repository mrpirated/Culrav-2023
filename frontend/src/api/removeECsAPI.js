import axios from "axios";
import config from "../config";

const removeECsAPI = async (data) => {
	const { token, ec_id, event_id, commitee_id } = data;
	return await axios
		.post(
			`${config.baseUrl}${config.removeECs}`,
			{ ec_id, event_id, commitee_id },
			{ headers: { Authorization: "Bearer " + token } }
		)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return { success: false, message: err.message };
		});
};
export default removeECsAPI;
