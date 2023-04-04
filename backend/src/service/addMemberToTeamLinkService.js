import dbg from "debug";
import checkTokenService from "./checkTokenService";
const debug = dbg("service:addMemberToTeamLink");
import getTeamWithLink from "../data/getTeamWithLink";
import checkIfEventRegistered from "../data/checkIfEventRegistered";
import addMemberToTeam from "../data/addMemberToTeam";
import checkTeamSize from "../data/checkTeamSize";
const addMemberToTeamLinkService = async (token, { link }) => {
	var user_id;
	var team_id, event_id;
	return await checkTokenService(token)
		.then((response) => {
			debug(response);
			user_id = response.data.decoded.user_id;
			return getTeamWithLink(link);
		})
		.then((response) => {
			(event_id = response.data.event_id), (team_id = response.data.team_id);
			return checkIfEventRegistered(user_id, event_id);
		})
		.then((response) => {
			if (!response.success) return checkTeamSize(team_id);
			else {
				return Promise.reject({
					success: false,
					message: "User Already Registered in the Event",
				});
			}
		})
		.then((response) => {
			team_size = response.data.team_size;
			if (team_size < max_team_members) {
				return addMemberToTeam(user_id, team_id);
			} else {
				return Promise.reject({
					success: false,
					message: "Team is full",
				});
			}
		})
		.catch((error) => {
			return error;
		});
};
export default addMemberToTeamLinkService;
