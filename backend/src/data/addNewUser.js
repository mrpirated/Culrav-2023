import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:addNewUser");
const addNewUser = async (user) => {
	return new Promise((resolve, reject) => {
		var values = {
			name: user.name,
			email: user.email,
			password: user.password,
			college: user.college,
			mnnit_id: user.mnnit_id,
		};

		pool.query("INSERT INTO user set ?", [values], (err, result) => {
			if (err) {
				reject({ success: false, message: err });
			} else resolve({ success: true, message: result, user: user });
		});
	});
};
export default addNewUser;
