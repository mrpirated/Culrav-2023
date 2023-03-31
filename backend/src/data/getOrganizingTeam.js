import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:getOrganizingTeam");

const getOrganizingTeam = async () => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT u.user_id, u.name, u.type, i.insta_id, l.linkedin_id  FROM user u
            LEFT JOIN linkedin l ON l.user_id = u.user_id
            LEFT JOIN insta i ON i.user_id = u.user_id
            WHERE type = "TECHLEAD"
            OR type = "FS"
            OR type = "TECHTEAM"
            OR type = "COCO"
            OR type = "PR"
			OR type = "MEDIALEAD"
			OR type = "DESIGNLEAD"`,
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
