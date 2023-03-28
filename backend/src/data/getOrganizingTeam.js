import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:getOrganizingTeam");

const getOrganizingTeam = async () => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT user_id, name, type FROM user WHERE type = "TECHLEAD"
            OR type = "FS"
            OR type = "COCO"
            OR type = "PR"`,
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else
					resolve({
						success: true,
						message: "Organizing Teams Fetched",
						data: result,
					});
			}
		);
	});
};
export default getOrganizingTeam;
