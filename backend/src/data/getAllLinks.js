import pool from "../dbconn/db";
import dbg from "debug";
const debug = dbg("data:getAllLinks");

const getAllLinks = async () => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT link FROM team WHERE link IS NOT NULL`,
			(err, result) => {
				if (err) {
					debug(err);
					reject({ success: false, message: err });
				} else {
					resolve({
						success: true,
						message: "Links fetched",
						data: result,
					});
				}
			}
		);
	});
};

export default getAllLinks;
