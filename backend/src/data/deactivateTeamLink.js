import pool from "../dbconn/db";
import dbg from "debug";
const debug = dbg("data:deactivateTeamLink");

const deactivateTeamLink = async (team_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`UPDATE team SET link = NULL WHERE team_id = ?`,
			[team_id],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else
					resolve({
						success: true,
						message: "Link Deactivated Successfully",
					});
			}
		);
	});
};
export default deactivateTeamLink;
