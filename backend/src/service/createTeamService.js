import dbg from "debug";
import checkTokenService from "./checkTokenService";
const debug = dbg("service:createTeam");
import createTeam from "../data/createTeam";
import checkIfEventRegistered from "../data/checkIfEventRegistered";
import addMemberToTeam from "../data/addMemberToTeam";
const createTeamService = async (token, { event_id, team_name }) => {
	var user_id;
	return await checkTokenService(token)
		.then((response) => {
			debug(response);
			user_id = response.data.decoded.user_id;
			return checkIfEventRegistered(user_id, event_id);
		})
		.then(() => {
			return createTeam(user_id, event_id, team_name);
		})
		.then((response) => {
			return addMemberToTeam(user_id, response.data.insertId);
		})
		.catch((error) => {
			return error;
		});
};
export default createTeamService;
