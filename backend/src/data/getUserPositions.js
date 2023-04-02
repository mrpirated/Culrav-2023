import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:getUserPOCs");
const getUserPositions = async (user_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT commitee_id FROM pocs WHERE poc_id = ?;
			SELECT e.event_id FROM event e
			JOIN pocs p ON e.commitee_id = p.commitee_id WHERE p.poc_id = ?;
			SELECT ec.event_id, e.commitee_id FROM ecs ec
			JOIN event e ON e.event_id = ec.event_id
			WHERE ec.ec_id = ?;`,
			[user_id, user_id, user_id],
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
