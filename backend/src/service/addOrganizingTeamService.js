import dbg from "debug";
import addPOCs from "../data/addPOCs";
import changeUserType from "../data/changeUserType";
import getUserType from "../data/getUserType";
import checkTokenService from "./checkTokenService";
import addOrganizingTeam from "../data/addOrganizingTeam";
const debug = dbg("service:addOrganizingTeam");
const addOrganizingTeamService = async (
	token,
	{ org_id, type, name, linkedin_id, insta_id }
) => {
	var user_id;
	var user_type;
	return await checkTokenService(token)
		.then((response) => {
			user_id = response.data.decoded.user_id;
			return getUserType(user_id);
		})
		.then((response) => {
			user_type = response.data.type;
			debug(user_type);
			if (user_type === "ADMIN") {
				return addOrganizingTeam(org_id, type, name, linkedin_id, insta_id);
			} else {
				return {
					success: false,
					message: "User not authorized for adding this team member",
				};
			}
		})
		.catch((error) => {
			return error;
		});
};
export default addOrganizingTeamService;
