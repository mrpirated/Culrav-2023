import dbg from "debug";
const debug = dbg("service:getTeamDetails");
import checkTokenService from "./checkTokenService";
import getTeamDetails from "../data/getTeamDetails";
import getTeamMembers from "../data/getTeamMembers";

const getTeamDetailsService = async (token, { team_id }) => {
	var team_details;
	return await checkTokenService(token)
		.then((response) => {
			return getTeamDetails(team_id);
		})
		.then((response) => {
			team_details = response.data;
			return getTeamMembers(team_id);
		})
		.then((response) => {
			return {
				success: true,
				message: "Team Details fetched successfully",
				data: { team_details: team_details, team_members: response.data },
			};
		})
		.catch((error) => {
			debug(error);
			return error;
		});
};

export default getTeamDetailsService;
