import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:checkIfEventRegistered");

const checkIfEventRegistered = async (user_id, event_id) => {
	return new Promise((resolve, reject) => {
		debug(event_id, user_id);
		pool.query(
			`SELECT tm.member_id, t.event_id FROM team t 
        JOIN team_member tm ON t.team_id = tm.team_id WHERE
        t.event_id = ? AND tm.member_id = ?`,
			[event_id, user_id],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else {
					debug(result);
					if (result.length != 0)
						resolve({
							success: true,
							message: "User Already Registered in the Event",
						});
					else resolve({ success: false, message: result });
				}
			}
		);
	});
};
export default checkIfEventRegistered;
