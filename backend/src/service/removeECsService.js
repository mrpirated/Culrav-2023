import dbg from "debug";
import removeECs from "../data/removeECs";
import getUserType from "../data/getUserType";
import checkTokenService from "./checkTokenService";
import checkIfUserIdExists from "../data/checkIfUserIdExists";
const debug = dbg("service:removeECs");
const removeECsService = async (token, { ec_id, event_id }) => {
	var user_id;
	var user_type;
	return await checkTokenService(token)
		.then((response) => {
			user_id = response.data.decoded.user_id;
			return getUserType(user_id);
		})
		.then((response) => {
			user_type = response.data.type;
			if (user_type === "ADMIN" || user_type === "FS" || user_type === "POC") {
				return checkIfUserIdExists(ec_id);
			} else {
				return Promise.reject({
					success: false,
					message: "User not authorized for adding this team member",
				});
			}
		})
		.then((response) => {
			return removeECs(ec_id, event_id);
		})
		.catch((error) => {
			return error;
		});
};
export default removeECsService;
