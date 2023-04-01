import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:getUserPOCs");
const getUserPositions = async (user_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT commitee_id FROM pocs WHERE poc_id = ?;
			 SELECT event_id FROM ecs WHERE ec_id = ?;`,
			[user_id, user_id],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else
					resolve({
						success: true,
						message: "Positions Fetched",
						data: result,
					});
			}
		);
	});
};
export default getUserPositions;
