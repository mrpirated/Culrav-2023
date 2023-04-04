import dbg from "debug";
import checkTokenService from "./checkTokenService";
const debug = dbg("service:removeMemberFromTeam");
import removeMemberFromTeam from "../data/removeMemberFromTeam";
import checkIfTeamLeader from "../data/checkIfTeamLeader";
const removeTeamMemberByLeaderService = async (
	token,
	{ team_id, member_id }
) => {
	var user_id;
	return await checkTokenService(token)
		.then((response) => {
			debug(response);
			user_id = response.data.decoded.user_id;
			return checkIfTeamLeader(user_id, team_id);
		})
		.then((response) => {
			if (response.success) return removeMemberFromTeam(member_id, team_id);
			else return Promise.reject(response);
		})
		.catch((error) => {
			return error;
		});
};
export default removeTeamMemberByLeaderService;
