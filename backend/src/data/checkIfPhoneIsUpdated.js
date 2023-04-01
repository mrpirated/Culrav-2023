import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:checkIfPhoneIsUpdated");

const checkIfPhoneIsUpdated = async (user_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT phone FROM user WHERE user_id = ?`,
			[user_id],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else {
					resolve({
						success: true,
						message: "Status fetched",
						data: result[0],
					});
				}
			}
		);
	});
};
export default checkIfPhoneIsUpdated;
