import dbg from "debug";
import checkTokenService from "./checkTokenService";
const debug = dbg("service:editEventDetails");
import checkIfUserIsPOC from "../data/checkIfUserIsPOC";
import getEventCommitee from "../data/getEventCommitee";
import editEventDetails from "../data/editEventDetails";
const editEventDetailsService = async (
	token,
	{
		event_id,
		event_description,
		event_tagline,
		min_team_members,
		max_team_members,
		rules,
	}
) => {
	var user_id;
	return await checkTokenService(token)
		.then((response) => {
			debug(response);
			user_id = response.data.decoded.user_id;
			return getEventCommitee(event_id);
		})
		.then((response) => {
			return checkIfUserIsPOC(user_id, response.data.commitee_id);
		})
		.then((response) => {
			if (response.success) {
			} else {
				return Promise.reject(response);
			}
		})
		.then((response) => {
			return editEventDetails(
				event_id,
				event_description,
				event_tagline,
				min_team_members,
				max_team_members,
				rules
			);
		})
		.catch((error) => {
			return error;
		});
};
export default editEventDetailsService;
