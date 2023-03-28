import axios from "axios";
import config from "../config";

const getImagesAPI = async (type , id) => {
    console.log(`${config.baseUrl}${config.getImages}?type=${type}&commitee_id=${id}`);
	return await axios
		.get(`${config.baseUrl}${config.getImages}?type=${type}&commitee_id=${id}`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			return { success: false, message: err.message };
		});
};
export default getImagesAPI;