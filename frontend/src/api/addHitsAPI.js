import axios from "axios";
import config from "../config";

const addHitsAPI = async () => {
	return await axios.get(`${config.baseUrl}${config.addHits}`).catch((err) => {
		return { success: false, message: err.message };
	});
};
export default addHitsAPI;
