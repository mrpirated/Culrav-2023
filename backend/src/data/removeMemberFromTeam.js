import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:removeMemberFromTeam");

const removeMemberFromTeam = async (user_id, team_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			"DELETE FROM team_member WHERE member_id = ? AND team_id = ?",
			[user_id, team_id],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else
					resolve({
						success: true,
						message: "Member removed Successfully",
						data: result,
					});
			}
		);
	});
};
export default removeMemberFromTeam;
