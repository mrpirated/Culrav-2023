import pool from "../dbconn/db";
import dbg from "debug";
const debug = dbg("data:getEventCommitees");

const getEventCommitee = async (event_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			"SELECT commitee_id FROM event WHERE event_id = ?",
			[event_id],
			(err, result) => {
				if (err) {
					debug(err);
					reject({ success: false, message: err });
				} else {
					resolve({
						success: true,
						message: "Commitee ID fetched",
						data: result[0],
					});
				}
			}
		);
	});
};

export default getEventCommitee;
