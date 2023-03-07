import pool from "../dbconn/db";
import dbg from "debug";
const debug = dbg("data:getCommitees");

const getCommitees = async () => {
	return new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			if (err) {
				reject({ success: false, message: "Error In connection", error: err });
			}
			connection.query("SELECT * FROM commitee", (err, result) => {
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
	});
};

export default getCommitees;
