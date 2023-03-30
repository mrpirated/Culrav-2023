import pool from "../dbconn/db";
import dbg from "debug";
import getCulravId from "../controllers/getCulravId";

const debug = dbg("data:removeECs");

const removeECs = async (user_id, event_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`DELETE FROM ecs WHERE ec_id = ? AND event_id = ?`,
			[user_id, event_id],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else
					resolve({
						success: true,
						message:
							result.affectedRows > 0
								? "EC removed successfully"
								: `Culrav Id ${getCulravId(user_id)} is not an EC`,
					});
			}
		);
	});
};
export default removeECs;
