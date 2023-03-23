import dbg from "debug";
const debug = dbg("service:getUserTeams");
import checkTokenService from "./checkTokenService";
import getUserTeams from "../data/getUserTeams";

const getUserTeamsService = async (token) => {
	return await checkTokenService(token)
		.then((response) => {
			return getUserTeams(response.data.decoded.user_id);
		})
		.catch((error) => {
			debug(error);
			return error;
		});
};

export default getUserTeamsService;
