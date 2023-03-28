import pool from "../dbconn/db";
import dbg from "debug";
const debug = dbg("data:checkIfUserIsPOC");

const checkIfUserIsPOC = async (user_id, commitee_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT * FROM pocs WHERE poc_id = ? AND commitee_id = ?`,
			[user_id, commitee_id],
			(err, result) => {
				if (err) {
					debug(err);
					reject({ success: false, message: err });
				} else {
					//debug(result);

					if (result.length > 0) {
						resolve({
							success: true,
							message: "User is POC Found",
						});
					} else {
						resolve({
							success: false,
							message: "User is not poc",
						});
					}
				}
			}
		);
	});
};
export default checkIfUserIsPOC;
