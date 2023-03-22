import pool from "../dbconn/db";
import dbg from "debug";
const debug = dbg("data:getCommitees");

const getCommitees = async () => {
	return new Promise((resolve, reject) => {
		pool.query("SELECT * FROM commitee", (err, result) => {
			if (err) {
				debug(err);
				reject({ success: false, message: err });
			} else {
				resolve({
					success: true,
					message: "Commitees fetched",
					data: result,
				});
			}
		});
	});
};

export default getCommitees;
