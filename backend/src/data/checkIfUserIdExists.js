import pool from "../dbconn/db";
import dbg from "debug";
import getCulravId from "../controllers/getCulravId";
const debug = dbg("data:checkIfUserExists");
const checkIfUserIdExists = async (user_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			"SELECT name FROM user WHERE user_id = ?",
			[user_id],
			(err, result) => {
				if (err) {
					debug(err);
					reject({ success: false, message: err });
				} else {
					//debug(result);

					if (result.length > 0) {
						resolve({
							success: true,
							message: "User Found",
						});
					} else {
						reject({
							success: false,
							message: `No Account found with ${getCulravId(user_id)}`,
						});
					}
				}
			}
		);
	});
};
export default checkIfUserIdExists;
