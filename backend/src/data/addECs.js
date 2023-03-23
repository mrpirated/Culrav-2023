import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:addPOCs");

const addECs = async (user_id, event_id) => {
	return new Promise((resolve, reject) => {
		var values = {
			ec_id: user_id,
			event_id: event_id,
		};
		pool.query(`INSERT INTO ecs  SET ?`, [values], (err, result) => {
			if (err) {
				reject({ success: false, message: err });
			} else resolve({ success: true, message: "EC updated successfully" });
		});
	});
};
export default addECs;
