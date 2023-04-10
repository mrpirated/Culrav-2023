import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:checkIfRegistrationIsActive");

const checkIfRegistrationIsActive = async (event_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT reg_active FROM event WHERE event_id = ?`,
			[event_id],
			(err, result) => {
				if (err) {
					debug(err);
					reject({ success: false, message: err });
				} else {
					resolve({
						success: true,
						message: "User is Team leader",
						data: result[0],
					});
				}
			}
		);
	});
};
export default checkIfRegistrationIsActive;
