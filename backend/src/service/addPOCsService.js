import dbg from "debug";
import addPOCs from "../data/addPOCs";
import changeUserType from "../data/changeUserType";
import getUserType from "../data/getUserType";
import checkTokenService from "./checkTokenService";
const debug = dbg("service:addPOCs");
const addPOCsService = async (token, { poc_id, commitee_id }) => {
	var user_id;
	var user_type;
	return await checkTokenService(token)
		.then((response) => {
			user_id = response.data.decoded.user_id;
			return getUserType(user_id);
		})
		.then((response) => {
			user_type = response.data.type;
			debug(user_type);
			if (user_type === "ADMIN" || user_type === "FS") {
				return changeUserType(poc_id, "POC");
			} else {
				return {
					success: false,
					message: "User not authorized for adding this team member",
				};
			}
		})
		.then((response) => {
			if (response.success) {
				return addPOCs(poc_id, commitee_id);
			} else return response;
		})
		.catch((error) => {
			return error;
		});
};
export default addPOCsService;
