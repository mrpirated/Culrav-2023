import dbg from "debug";
import addPOCs from "../data/addPOCs";
import getUserType from "../data/getUserType";
import checkTokenService from "./checkTokenService";
import checkIfUserIsPOC from "../data/checkIfUserIsPOC";
import getRegisteredTeams from "../data/getRegisteredTeams";
import getEventCommitee from "../data/getEventCommitee";
import checkIfUserIsEC from "../data/checkIfUserIsEC";
const debug = dbg("service:");
const getRegisteredTeamsService = async (token, { event_id }) => {
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
				return Promise.reject(getRegisteredTeams(event_id));
			} else {
				return checkIfUserIsEC(user_id, event_id);
			}
		})
		.then((response) => {
			if (response.success) {
				return Promise.reject(getRegisteredTeams(event_id));
			} else return getEventCommitee(event_id);
		})
		.then((response) => {
			return checkIfUserIsPOC(user_id, response.data.commitee_id);
		})
		.then((response) => {
			if (response.success) {
				return Promise.reject(getRegisteredTeams(event_id));
			} else {
				return Promise.reject({
					success: false,
					message: "User not authorized",
				});
			}
		})
		.then((response) => {
			if (response.success) {
				return getRegisteredTeams(event_id);
			} else {
			}
		})
		.catch((error) => {
			return error;
		});
};
export default getRegisteredTeamsService;
