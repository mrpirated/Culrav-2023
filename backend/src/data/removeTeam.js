import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:removeTeam");

const removeTeam = async (team_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`DELETE FROM team_member WHERE team_id = ?;
            DELETE FROM team WHERE team_id = ?;`,
			[team_id, team_id],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else
					resolve({
						success: true,
						message: "Team removed Successfully",
						data: result,
					});
			}
		);
	});
};
export default removeTeam;
