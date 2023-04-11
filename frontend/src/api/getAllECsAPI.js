import axios from "axios";
import config from "../config";

const getAllECsAPI = async () => {
	return await axios
		.get(config.baseUrl + config.getAllECs)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return { success: false, message: err.message };
		});
};
export default getAllECsAPI;
