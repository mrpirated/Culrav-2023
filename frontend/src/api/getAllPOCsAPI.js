import axios from "axios";
import config from "../config";

const getAllPOCsAPI = async () => {
	return await axios
		.get(config.baseUrl + config.getAllPOCs)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			return { success: false, message: err.message };
		});
};
export default getAllPOCsAPI;
