import pool from "../dbconn/db";
import dbg from "debug";
const debug = dbg("data:TeamSize");

const checkTeamSize = async (team_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT COUNT(*) as team_size FROM team_member WHERE team_id = ?`,
			[team_id],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else {
					resolve({
						success: true,
						message: "Team Size Fetched",
						data: result[0],
					});
				}
			}
		);
	});
};
export default checkTeamSize;
