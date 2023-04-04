import dbg from "debug";
import removePOCs from "../data/removePOCs";
import getUserType from "../data/getUserType";
import checkTokenService from "./checkTokenService";
import checkIfUserIdExists from "../data/checkIfUserIdExists";
const debug = dbg("service:removePOCs");
const removePOCsService = async (token, { poc_id, commitee_id }) => {
	var user_id;
	var user_type;
	return await checkTokenService(token)
		.then((response) => {
			user_id = response.data.decoded.user_id;
			return getUserType(user_id);
		})
		.then((response) => {
			user_type = response.data.type;
			if (
				user_type === "ADMIN" ||
				user_type === "FS" ||
				user_type === "TECHLEAD"
			) {
				return checkIfUserIdExists(poc_id);
			} else {
				return Promise.reject({
					success: false,
					message: "User not authorized for adding this team member",
				});
			}
		})
		.then((response) => {
			return removePOCs(poc_id, commitee_id);
		})
		.catch((error) => {
			return error;
		});
};
export default removePOCsService;
