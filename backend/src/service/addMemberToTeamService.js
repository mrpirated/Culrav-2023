import dbg from "debug";
import checkTokenService from "./checkTokenService";
const debug = dbg("service:addMemberToTeam");
import checkIfEventRegistered from "../data/checkIfEventRegistered";
import addMemberToTeam from "../data/addMemberToTeam";
import getEventRegisteredByTeam from "../data/getEventRegisteredByTeam";
import checkIfTeamLeader from "../data/checkIfTeamLeader";
import checkTeamSize from "../data/checkTeamSize";
import checkIfPhoneIsUpdated from "../data/checkIfPhoneIsUpdated";
const addMemberToTeamService = async (token, { team_id, user_id }) => {
	var leader_id;
	var event_id;
	var min_team_members, max_team_members;
	var team_size;
	return await checkTokenService(token)
		.then((response) => {
			debug(response);
			leader_id = response.data.decoded.user_id;
			return getEventRegisteredByTeam(team_id);
		})
		.then((response) => {
			event_id = response.data.event_id;
			min_team_members = response.data.min_team_members;
			max_team_members = response.data.max_team_members;
			return checkIfTeamLeader(leader_id, team_id);
		})
		.then((response) => {
			if (response.success) return checkIfEventRegistered(user_id, event_id);
			else return Promise.reject(response);
		})
		.then((response) => {
			if (!response.success) return checkIfPhoneIsUpdated(user_id);
			else {
				return Promise.reject({
					success: false,
					message: "User Already Registered in the Event",
				});
			}
		})
		.then((response) => {
			debug(response);
			if (response.data.phone == null) {
				return Promise.reject({
					success: false,
					message: "User had not updated the phone number",
				});
			} else return checkTeamSize(team_id);
		})
		.then((response) => {
			team_size = response.data.team_size;
			debug(team_size);
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
export default addMemberToTeamService;
