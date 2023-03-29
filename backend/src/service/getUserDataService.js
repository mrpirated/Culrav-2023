import dbg from "debug";
const debug = dbg("service:getUserTeams");
import checkTokenService from "./checkTokenService";
import getUserData from "../data/getUserData";
import getCulravId from "../controllers/getCulravId";

const getUserDataService = async (token) => {
	return await checkTokenService(token)
		.then((response) => {
			return getUserData(response.data.decoded.user_id);
		})
		.then((response) => {
			response.data.culrav_id = getCulravId(response.data.user_id);
			return response;
		})
		.catch((error) => {
			debug(error);
			return error;
		});
};

export default getUserDataService;
