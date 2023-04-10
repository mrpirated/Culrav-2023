import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:getUserType");

const getUserWithoutPhone = async () => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT * FROM user WHERE phone IS NULL OR phone = ""`,
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else
					resolve({
						success: true,
						message: "User Type Fetched",
						data: result,
					});
			}
		);
	});
};
export default getUserWithoutPhone;
