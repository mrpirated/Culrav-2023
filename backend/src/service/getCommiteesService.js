import dbg from "debug";
const debug = dbg("service:getCommitees");
import checkTokenService from "./checkTokenService";
import getCommitees from "../data/getCommitees";
const getCommiteesService = async () => {
	return await getCommitees().catch((error) => {
		debug(error);
		return error;
	});
};

export default getCommiteesService;
