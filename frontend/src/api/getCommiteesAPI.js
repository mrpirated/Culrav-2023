import axios from "axios";
import config from "../config";

const getCommiteesAPI = async () => {
	return await axios
		.get(`${config.baseUrl}${config.getCommitees}`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return { success: false, message: err.message };
		});
};
export default getCommiteesAPI;
