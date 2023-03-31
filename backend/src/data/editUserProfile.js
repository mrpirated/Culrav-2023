import pool from "../dbconn/db";
import dbg from "debug";
const debug = dbg("data:editUserProfile");

const editUserProfile = async (user_id, name, phone) => {
	return new Promise((resolve, reject) => {
		var values = {
			name,
			phone,
		};
		pool.query(
			`UPDATE user SET ? WHERE user_id = ?`,
			[values, user_id],
			(err, result) => {
				if (err) {
					debug(err);
					reject({ success: false, message: err });
				} else {
					resolve({
						success: true,
						message: "User updated successfully.",
					});
				}
			}
		);
	});
};

export default editUserProfile;
