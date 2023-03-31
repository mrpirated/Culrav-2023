import pool from "../dbconn/db";
import dbg from "debug";
const debug = dbg("data:checkIfUserIsEC");

const checkIfUserIsEC = async (user_id, event_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT * FROM ecs WHERE ec_id = ? AND event_id = ?`,
			[user_id, event_id],
			(err, result) => {
				if (err) {
					debug(err);
					reject({ success: false, message: err });
				} else {
					//debug(result);

					if (result.length > 0) {
						resolve({
							success: true,
							message: "User is EC Found",
						});
					} else {
						resolve({
							success: false,
							message: "User is not EC",
						});
					}
				}
			}
		);
	});
};
export default checkIfUserIsEC;
