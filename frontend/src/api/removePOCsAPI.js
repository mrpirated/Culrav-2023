import axios from "axios";
import config from "../config";

const removePOCsAPI = async (data) => {
	const { token, poc_id, commitee_id } = data;
	return await axios
		.post(
			`${config.baseUrl}${config.removePOCs}`,
			{ poc_id, commitee_id },
			{ headers: { Authorization: "Bearer " + token } }
		)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			return { success: false, message: err.message };
		});
};
export default removePOCsAPI;
