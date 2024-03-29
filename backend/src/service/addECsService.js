import dbg from "debug";
import addECs from "../data/addECs";
import changeUserType from "../data/changeUserType";
import getUserType from "../data/getUserType";
import checkTokenService from "./checkTokenService";
import checkIfUserIdExists from "../data/checkIfUserIdExists";
import checkIfUserIsEC from "../data/checkIfUserIsEC";
import checkIfPhoneIsUpdated from "../data/checkIfPhoneIsUpdated";
import checkIfUserIsPOC from "../data/checkIfUserIsPOC";
const debug = dbg("service:addECs");
const addECsService = async (token, { ec_id, event_id, commitee_id }) => {
	var user_id;
	var user_type;
	return await checkTokenService(token)
		.then((response) => {
			user_id = response.data.decoded.user_id;
			return getUserType(user_id);
		})
		.then((response) => {
			user_type = response.data.type;
			return checkIfUserIsPOC(user_id, commitee_id);
		})
		.then((response) => {
			if (
				response.success ||
				user_type === "ADMIN" ||
				user_type === "FS" ||
				user_type === "TECHLEAD"
			) {
				return checkIfUserIdExists(ec_id);
			} else {
				return Promise.reject({
					success: false,
					message: "User not authorized for adding this team member",
				});
			}
		})
		.then((response) => {
			return checkIfUserIsEC(ec_id, event_id);
		})
		.then((response) => {
			if (response.success) {
				return Promise.reject({
					success: false,
					message: "User is already EC of the event",
				});
			} else return checkIfPhoneIsUpdated(ec_id);
		})
		.then((response) => {
			if (response.data.phone == null || response.data.phone === "") {
				return Promise.reject({
					success: false,
					message: "User has not updated their phone number.",
				});
			} else return addECs(ec_id, event_id);
		})
		.catch((error) => {
			return error;
		});
};
export default addECsService;
