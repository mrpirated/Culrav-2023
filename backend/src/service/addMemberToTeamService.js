import dbg from "debug";
import checkTokenService from "./checkTokenService";
const debug = dbg("service:addMemberToTeam");
import checkIfEventRegistered from "../data/checkIfEventRegistered";
import addMemberToTeam from "../data/addMemberToTeam";
import getEventRegisteredByTeam from "../data/getEventRegisteredByTeam";
import checkIfTeamLeader from "../data/checkIfTeamLeader";
const addMemberToTeamService = async (token, { team_id, user_id }) => {
	var leader_id;
	var event_id;
	return await checkTokenService(token)
		.then((response) => {
			debug(response);
			leader_id = response.data.decoded.user_id;
			return getEventRegisteredByTeam(team_id);
		})
		.then((response) => {
			event_id = response.data.event_id;
			return checkIfTeamLeader(leader_id, team_id);
		})
		.then((response) => {
			if (response.success) return checkIfEventRegistered(user_id, event_id);
			else return Promise.reject(response);
		})
		.then((response) => {
			if (!response.success) return addMemberToTeam(user_id, team_id);
			else {
				return Promise.reject({
					success: false,
					message: "User Already Registered in the Event",
				});
			}
		})
		.catch((error) => {
			return error;
		});
};
export default addMemberToTeamService;
