import dbg from "debug";
import checkTokenService from "./checkTokenService";
const debug = dbg("service:createTeam");
import createTeam from "../data/createTeam";
import checkIfEventRegistered from "../data/checkIfEventRegistered";
import addMemberToTeam from "../data/addMemberToTeam";
import checkIfPhoneIsUpdated from "../data/checkIfPhoneIsUpdated";
import checkIfRegistrationIsActive from "../data/checkIfRegistrationIsActive";
const createTeamService = async (token, { event_id, team_name }) => {
	var user_id;
	return await checkTokenService(token)
		.then((response) => {
			debug(response);
			user_id = response.data.decoded.user_id;
			return checkIfRegistrationIsActive(event_id);
		})
		.then((response) => {
			if (response.data.reg_active) {
				return checkIfEventRegistered(user_id, event_id);
			} else {
				return Promise.reject({
					success: false,
					message:
						"At this time, the event is not currently accepting any registrations.",
				});
			}
		})
		.then((response) => {
			if (!response.success) {
				return checkIfPhoneIsUpdated(user_id);
			} else {
				return Promise.reject({
					success: false,
					message: "User Already Registered in the Event",
				});
			}
		})
		.then((response) => {
			if (response.data.phone == null) {
				return Promise.reject({
					success: false,
					message: "User had not updated the phone number",
				});
			} else return createTeam(user_id, event_id, team_name);
		})
		.then((response) => {
			return addMemberToTeam(user_id, response.data.insertId);
		})
		.catch((error) => {
			return error;
		});
};
export default createTeamService;
