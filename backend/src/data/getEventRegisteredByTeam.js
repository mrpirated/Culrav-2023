import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:getEventRegisteredByTeam");

const getEventRegisteredByTeam = async (team_id) => {
	debug(team_id);
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT t.event_id, e.min_team_members, e.max_team_members FROM team t
			JOIN event e ON t.event_id = e.event_id
			WHERE t.team_id = ?`,
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
