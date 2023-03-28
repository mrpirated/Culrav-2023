import axios from "axios";
import config from "../config";

const loginAPI = async (data) => {
	const { email, password } = data;
	return await axios
		.post(config.baseUrl + config.login, {
			email: email,
			password: password,
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			return { success: false, message: err.message };
		});
};
export default loginAPI;
