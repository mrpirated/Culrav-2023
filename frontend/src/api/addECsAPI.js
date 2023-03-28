import axios from "axios";
import config from "../config";

const addECsAPI = async (data) => {
	const { token, ec_id, event_id } = data;
	return await axios
		.post(
			`${config.baseUrl}${config.addECs}`,
			{ ec_id, event_id },
			{ headers: { Authorization: token } }
		)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			return { success: false, message: err.message };
		});
};
export default addECsAPI;
