import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:getEventRegisteredByTeam");

const getEventRegisteredByTeam = async (team_id) => {
	debug(team_id);
	return new Promise((resolve, reject) => {
		pool.query(
			"SELECT event_id FROM team WHERE team_id = ?",
			[team_id],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else {
					debug(result);
					resolve({
						success: true,
						message: "Event Fetched",
						data: result[0],
					});
				}
			}
		);
	});
};
export default getEventRegisteredByTeam;
