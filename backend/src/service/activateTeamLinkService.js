import dbg from "debug";
import checkTokenService from "./checkTokenService";
const debug = dbg("service:activateTeamLink");
import checkIfTeamLeader from "../data/checkIfTeamLeader";
import activateTeamLink from "../data/activateTeamLink";
import checkLinkStatus from "../data/checkLinkStatus";
import getAllLinks from "../data/getAllLinks";
import randomstring from "randomstring";
const activateTeamLinkService = async (token, { team_id }) => {
	var user_id;
	return await checkTokenService(token)
		.then((response) => {
			debug(response);
			user_id = response.data.decoded.user_id;
			return checkIfTeamLeader(user_id, team_id);
		})
		.then((response) => {
			if (response.success) {
				return checkLinkStatus(team_id);
			} else return Promise.reject(response);
		})
		.then((response) => {
			if (!response.success) {
				return getAllLinks();
			} else {
				return Promise.reject(response);
			}
		})
		.then((response) => {
			var link;
			do {
				link = randomstring.generate(6);
			} while (response.data.map((e) => e.link).includes(link));
			return activateTeamLink(team_id, link);
		})
		.catch((error) => {
			return error;
		});
};
export default activateTeamLinkService;
