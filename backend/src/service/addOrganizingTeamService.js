import dbg from "debug";
import changeUserType from "../data/changeUserType";
import getUserType from "../data/getUserType";
import checkTokenService from "./checkTokenService";
const debug = dbg("service:addOrganizingTeam");
const addOrganizingTeamService = async (token, { team_member_id, type }) => {
	var user_id;
	var user_type;
	return await checkTokenService(token)
		.then((response) => {
			user_id = response.data.decoded.user_id;
			return getUserType(user_id);
		})
		.then((response) => {
			user_type = response.data.type;
			if (
				user_type === "ADMIN" ||
				(user_type === "FS" &&
					(type === "POC" || type === "COCO" || type === "PR"))
			) {
				return changeUserType(team_member_id, type);
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
