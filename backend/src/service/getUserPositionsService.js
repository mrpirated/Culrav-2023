import dbg from "debug";
const debug = dbg("service:getUserTeams");
import checkTokenService from "./checkTokenService";

import getUserPositions from "../data/getUserPositions";
const getUserPositionsService = async (token) => {
	return await checkTokenService(token)
		.then((response) => {
			return getUserPositions(response.data.decoded.user_id);
		})
		.then((response) => {
			return {
				success: true,
				message: response.message,
				data: {
					pocs: response.data[0].map((e) => e.commitee_id),
					ecs: response.data[1].map((e) => e.event_id),
				},
			};
		})
		.catch((error) => {
			debug(error);
			return error;
		});
};

export default getUserPositionsService;
