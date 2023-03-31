import dbg from "debug";
const debug = dbg("service:getStats");
import getStats from "../data/getStats";

const getStatsService = async () => {
	return await getStats().catch((error) => {
		debug(error);
		return error;
	});
};

export default getStatsService;
