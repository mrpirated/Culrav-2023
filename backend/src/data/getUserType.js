import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:getUserType");

const getUserType = async (user_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			"SELECT type FROM user WHERE user_id = ?",
			[user_id],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else
					resolve({
						success: true,
						message: "User Type Fetched",
						data: result[0],
					});
			}
		);
	});
};
export default getUserType;
