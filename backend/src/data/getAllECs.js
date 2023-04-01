import pool from "../dbconn/db";
import dbg from "debug";
const debug = dbg("data:getAllECs");

const getAllECs = async () => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT u.user_id as ec_id, u.name as ec_name, u.phone as ec_phone,
            c.commitee_id, c.name as commitee_name, e.event_id,
            e.name as event_name
            FROM user u 
            JOIN ecs ec ON ec.ec_id = u.user_id
            JOIN event e ON e.event_id = ec.event_id
            JOIN commitee c ON c.commitee_id = e.commitee_id`,
			(err, result) => {
				if (err) {
					debug(err);
					reject({ success: false, message: err });
				} else {
					resolve({
						success: true,
						message: "ECs fetched",
						data: result,
					});
				}
			}
		);
	});
};

export default getAllECs;
