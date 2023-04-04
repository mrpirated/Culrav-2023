import pool from "../dbconn/db";
import dbg from "debug";
const debug = dbg("data:checkLinkStatus");

const checkLinkStatus = async (team_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT link FROM team WHERE team_id = ?`,
			[team_id],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else {
					if (result[0].link === null) {
						resolve({
							success: false,
							message: "Link Inactive",
							// data: { link: link },
						});
					}
					resolve({
						success: true,
						message: "Link Active",
						data: result[0],
					});
				}
			}
		);
	});
};
export default checkLinkStatus;
