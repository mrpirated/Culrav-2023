import dbg from "debug";
import checkTokenService from "./checkTokenService";
const debug = dbg("service:removeMemberFromTeam");
import checkIfEventRegistered from "../data/checkIfEventRegistered";
import removeMemberFromTeam from "../data/removeMemberFromTeam";
import getEventRegisteredByTeam from "../data/getEventRegisteredByTeam";
import checkIfTeamLeader from "../data/checkIfTeamLeader";
import removeTeam from "../data/removeTeam";
const removeMemberFromTeamService = async (token, { team_id }) => {
	var user_id;
	return await checkTokenService(token)
		.then((response) => {
			debug(response);
			user_id = response.data.decoded.user_id;
			return getEventRegisteredByTeam(team_id);
		})
		.then((response) => {
			return checkIfEventRegistered(user_id, response.data.event_id);
		})
		.then((response) => {
			if (response.success) return checkIfTeamLeader(user_id, team_id);
			else {
				return Promise.reject({
					success: false,
					message: "User Not Registered in the Event",
				});
			}
		})
		.then((response) => {
			if (response.success) {
				return removeTeam(team_id);
			} else {
				return removeMemberFromTeam(user_id, team_id);
			}
		})
		.catch((error) => {
			return error;
		});
};
export default removeMemberFromTeamService;
