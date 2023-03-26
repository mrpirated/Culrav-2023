import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:checkIfTeamLeader");

const checkIfTeamLeader = async (user_id, team_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT team_name FROM team WHERE team_id = ? AND team_leader = ?`,
			[team_id, user_id],
			(err, result) => {
				if (err) {
					debug(err);
					reject({ success: false, message: err });
				} else {
					if (result.length > 0) {
						resolve({
							success: true,
							message: "User is Team leader",
						});
					} else {
						resolve({
							success: false,
							message: "User is not a team leader",
						});
					}
				}
			}
		);
	});
};
export default checkIfTeamLeader;
