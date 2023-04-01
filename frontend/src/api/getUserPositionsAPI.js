import axios from "axios";
import config from "../config";

const getUserPositionsAPI = async (data) => {
	const { token } = data;
	return await axios
		.get(config.baseUrl + config.getUserPositions, {
			headers: { Authorization: "Bearer " + token },
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			return { success: false, message: err.message };
		});
};
export default getUserPositionsAPI;
