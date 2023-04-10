import dbg from "debug";
import checkTokenService from "./checkTokenService";
const debug = dbg("service:editEventDetails");
import checkIfUserIsPOC from "../data/checkIfUserIsPOC";
import getEventCommitee from "../data/getEventCommitee";
import editEventDetails from "../data/editEventDetails";
import checkIfUserIsEC from "../data/checkIfUserIsEC";
import getUserType from "../data/getUserType";
const editEventDetailsService = async (
	token,
	{
		event_id,
		event_description,
		event_tagline,
		min_team_members,
		max_team_members,
		rules,
		reg_active,
	}
) => {
	var user_id;
	var user_type;
	return await checkTokenService(token)
		.then((response) => {
			debug(response);
			user_id = response.data.decoded.user_id;
			return getUserType(user_id);
		})
		.then((response) => {
			user_type = response.data.type;
			return getEventCommitee(event_id);
		})
		.then((response) => {
			return checkIfUserIsPOC(user_id, response.data.commitee_id);
		})
		.then((response) => {
			if (!response.success) return checkIfUserIsEC(user_id, event_id);
			else return response;
		})
		.then((response) => {
			if (
				response.success ||
				user_type === "ADMIN" ||
				user_type === "FS" ||
				user_type === "TECHLEAD"
			) {
				return editEventDetails(
					event_id,
					event_description,
					event_tagline,
					min_team_members,
					max_team_members,
					rules,
					reg_active
				);
			} else {
				return Promise.reject({
					success: false,
					message: "User not authorized for edit this event",
				});
			}
		})
		.catch((error) => {
			return error;
		});
};
export default editEventDetailsService;
