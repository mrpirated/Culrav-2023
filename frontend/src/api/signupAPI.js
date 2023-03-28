import axios from "axios";
import config from "../config";

const signupAPI = async (data) => {
	const { name, email, password, mnnit_id } = data;
	return await axios
		.post(config.baseUrl + config.signup, {
			name: name,
			email: email,
			password: password,
			mnnit_id: mnnit_id,
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			return { success: false, message: err.message };
		});
};
export default signupAPI;
