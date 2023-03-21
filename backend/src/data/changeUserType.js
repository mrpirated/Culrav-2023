import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:changeUserType");

const changeUserType = async (user_id, type) => {
	return new Promise((resolve, reject) => {
		pool.query(
			"UPDATE user SET type = ? WHERE user_id = ?",
			[type, user_id],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else {
					resolve({
						success: true,
						message: "User Type Updated",
					});
				}
			}
		);
	});
};

export default changeUserType;
