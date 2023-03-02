import dbg from "debug";
const debug = dbg("service:login");
import checkIfUserExists from "../data/checkIfUserExists";
import checkPassword from "../controllers/checkPassword";
import getToken from "../controllers/getToken";
const loginService = async ({ email, password }) => {
	var id;
	var userDetails;
	return await checkIfUserExists({ email })
		.then((response) => {
			//debug(type, email, password);
			//debug(response);
			if (response.success) {
				return response;
			}
			return Promise.reject({
				success: false,
				message: "User Dosen't exists",
			});
		})
		.then((response) => {
			//debug(user);
			id = response.data.user.id;
			userDetails = (({ name, email }) => ({
				name,
				email,
			}))(response.data.user);
			return {
				user_password: password,
				password: response.data.user.password,
			};
		})
		.then((details) => {
			return checkPassword(details);
		})
		.then((response) => {
			const token = getToken({ id: id }, "30d");
			return {
				success: true,
				message: "Successfully logged In",
				data: { token, user: userDetails },
			};
		})
		.catch((err) => {
			debug(err);
			return err;
		});
};
export default loginService;
