import bcrypt from "bcrypt";
import getToken from "./getToken";
const checkPassword = async ({ user_password, password }) => {
	return new Promise((resolve, reject) => {
		bcrypt.compare(user_password, password, (bErr, bResult) => {
			if (bResult) {
				//const token = getToken({ user_id: user_id, type: type }, "30d");
				resolve({
					success: true,
					message: "Password is Correct",
				});
			} else {
				reject({
					success: false,
					message: "Password is incorrect!",
				});
			}
		});
	});
};
export default checkPassword;
