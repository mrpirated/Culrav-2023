import pool from "../dbconn/db";
import dbg from "debug";
const debug = dbg("data:getTeamWithLink");

const getTeamWithLink = async (link) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT team_id,event_id,min_team_members,max_team_members FROM team WHERE link = ?`,
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
