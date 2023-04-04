import dbg from "debug";
import checkTokenService from "./checkTokenService";
const debug = dbg("service:activateTeamLink");
import checkIfTeamLeader from "../data/checkIfTeamLeader";
import deactivateTeamLink from "../data/deactivateTeamLink";
const deactivateTeamLinkService = async (token, { team_id }) => {
	var user_id;
	return await checkTokenService(token)
		.then((response) => {
			debug(response);
			user_id = response.data.decoded.user_id;
			return checkIfTeamLeader(user_id, team_id);
		})
		.then((response) => {
			if (response.success) {
				return deactivateTeamLink(team_id);
			} else return Promise.reject(response);
		})

		.catch((error) => {
			return error;
		});
};
export default deactivateTeamLinkService;
