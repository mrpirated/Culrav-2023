import pool from "../dbconn/db";
import dbg from "debug";
const debug = dbg("data:getTeamWithLink");

const getTeamWithLink = async (link) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT t.team_id, t.event_id, e.min_team_members, e.max_team_members 
			FROM team t
			JOIN event e ON e.event_id = t.event_id
			WHERE t.link = ?`,
			[link],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else {
					if (result.length > 0) {
						resolve({
							success: true,
							message: "Link is active",
							data: result[0],
						});
					}
					reject({
						success: false,
						message: "Link Inactive",
					});
				}
			}
		);
	});
};
export default getTeamWithLink;
