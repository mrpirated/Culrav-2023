import dbg from "debug";
const debug = dbg("service:getCommitees");
import checkTokenService from "./checkTokenService";
import getCommitees from "../data/getCommitees";
const getCommiteesService = async (token) => {
	return await checkTokenService(token)
		.then(() => {
			return getCommitees();
		})
		.catch((error) => {
			debug(error);
			return error;
		});
};

export default getCommiteesService;
