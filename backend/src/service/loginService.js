import dbg from "debug";
const debug = dbg("service:login");
import checkIfUserExists from "../data/checkIfUserExists";
import checkPassword from "../controllers/checkPassword";
import getToken from "../controllers/getToken";
import getCulravId from "../controllers/getCulravId";
const loginService = async ({ email, password }) => {
	var user_id;
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
			// debug(response);
			user_id = response.data.user.user_id;
			userDetails = {
				user_id: user_id,
				name: response.data.user.name,
				email: response.data.user.email,
				type: response.data.user.type,
				mnnit_id: response.data.user.mnnit_id,
				college: response.data.user.college,
				phone: response.data.user.phone,
				culrav_id: getCulravId(user_id),
			};
			return {
				user_password: password,
				password: response.data.user.password,
			};
		})
		.then((details) => {
			return checkPassword(details);
		})
		.then((response) => {
			return {
				success: true,
				message: "Successfully logged In",
				data: {
					token: getToken({ user_id: user_id, name: userDetails.name }, "30d"),
					user: userDetails,
				},
			};
		})
		.catch((err) => {
			debug(err);
			return err;
		});
};
export default loginService;
