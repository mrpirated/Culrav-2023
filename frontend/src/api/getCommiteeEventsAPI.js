import axios from "axios";
import config from "../config";

const getCommiteeEventsAPI = async (data) => {
	const { commitee_id } = data;
	return await axios
		.get(
			`${config.baseUrl}${config.getCommiteeEvents}?commitee_id=${commitee_id}`
		)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			return { success: false, message: err.message };
		});
};
export default getCommiteeEventsAPI;
