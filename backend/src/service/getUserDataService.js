import dbg from "debug";
const debug = dbg("service:getUserTeams");
import checkTokenService from "./checkTokenService";
import getUserData from "../data/getUserData";

const getUserDataService = async (token) => {
	return await checkTokenService(token)
		.then((response) => {
			return getUserData(response.data.decoded.user_id);
		})
		.catch((error) => {
			debug(error);
			return error;
		});
};

export default getUserDataService;
