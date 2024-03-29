import pool from "../dbconn/db";
import dbg from "debug";
const debug = dbg("data:getCommiteeEvents");

const getCommiteeEvents = async ({ commitee_id }) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT * FROM event WHERE commitee_id=?`,
			[commitee_id],
			(err, result) => {
				if (err) {
					debug(err);
					reject({ success: false, message: err });
				} else {
					resolve({
						success: true,
						message: "Events fetched",
						data: result,
					});
				}
			}
		);
	});
};

export default getCommiteeEvents;
