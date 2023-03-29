import axios from "axios";
import config from "../config";

const addPOCsAPI = async (data) => {
	const { token, poc_id, commitee_id } = data;
	return await axios
		.post(
			`${config.baseUrl}${config.addPOCs}`,
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
export default addPOCsAPI;
