import dbg from "debug";
import checkTokenService from "./checkTokenService";
const debug = dbg("service:editEventDetails");
import editUserProfile from "../data/editUserProfile";
import getUserData from "../data/getUserData";
const editUserProfileService = async (token, { name, phone, college }) => {
	var user_id;
	return await checkTokenService(token)
		.then((response) => {
			debug(response);
			user_id = response.data.decoded.user_id;
			return editUserProfile(user_id, name, phone, college);
		})
		.then((response) => {
			return getUserData(user_id);
		})
		.catch((error) => {
			return error;
		});
};
export default editUserProfileService;
