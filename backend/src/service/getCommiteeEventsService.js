import dbg from "debug";
const debug = dbg("service:getCommiteeEvents");
import checkTokenService from "./checkTokenService";
import getCommiteeEvents from "../data/getCommiteeEvents";

const getCommiteeEventsService = async (token, { commitee_id }) => {
	return await checkTokenService(token)
		.then(() => {
			return getCommiteeEvents({ commitee_id });
		})
		.catch((error) => {
			debug(error);
			return error;
		});
};
export default getCommiteeEventsService;
