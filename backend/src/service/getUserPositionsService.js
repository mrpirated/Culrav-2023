import dbg from "debug";
const debug = dbg("service:getUserTeams");
import checkTokenService from "./checkTokenService";

import getUserPositions from "../data/getUserPositions";
const getUserPositionsService = async (token) => {
	var pocs, ecs;
	return await checkTokenService(token)
		.then((response) => {
			return getUserPositions(response.data.decoded.user_id);
		})
		.then((response) => {
			debug(response.data[0]);
			var data = {
				isPOC: false,
				isEC: false,
				commitees: [],
				events: [],
				poc: [],
			};
			pocs = response.data[0].map((e) => e.commitee_id);
			ecs = response.data[2].map((e) => e.event_id);
			if (pocs.length > 0) {
				data.isPOC = true;
				data.commitees.push(...response.data[0].map((e) => e.commitee_id));
				data.events.push(...response.data[1].map((e) => e.event_id));
				data.poc = response.data[0].map((e) => e.commitee_id);
			}
			if (ecs.length > 0) {
				data.isEC = true;
				data.commitees.push(...response.data[2].map((e) => e.commitee_id));
				data.events.push(...response.data[2].map((e) => e.event_id));
			}
			return {
				success: true,
				message: response.message,
				data: data,
			};

			// return {
			// 	success: true,
			// 	message: response.message,
			// 	data: {
			// 		pocs: response.data[0].map((e) => e.commitee_id),
			// 		ecs: response.data[1].map((e) => e.event_id),
			// 	},
			// };
		})
		.catch((error) => {
			debug(error);
			return error;
		});
};

export default getUserPositionsService;
