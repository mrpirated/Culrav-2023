import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:getUserTeams");
const getUserData = async (user_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT user_id, name, email, mnnit_id ,college, phone, type FROM user WHERE user_id = ?`,
			[user_id],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else
					resolve({
						success: true,
						message: "User Fetched",
						data: result[0],
					});
			}
		);
	});
};
export default getUserData;
