import dbg from "debug";
const debug = dbg("service:getOrganizingTeam");
import getOrganizingTeam from "../data/getOrganizingTeam";

const getTeamDetailsService = async () => {
	return await getOrganizingTeam().catch((error) => {
		debug(error);
		return error;
	});
};

export default getTeamDetailsService;
