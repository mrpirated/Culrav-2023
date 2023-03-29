import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:addOrganizingTeam");

const addOrganizingTeam = async (user_id, type, linkedin_id, insta_id) => {
	return new Promise((resolve, reject) => {
		var insta = { user_id: user_id, insta_id: insta_id };
		var linkedin = { user_id: user_id, linkedin_id: linkedin_id };
		pool.query(
			`UPDATE user SET type = ? WHERE user_id = ?;
            INSERT INTO linkedin SET ?;
            INSERT INTO insta SET ?;`,
			[type, user_id, linkedin, insta],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else resolve({ success: true, message: "Organizing Team updated" });
			}
		);
	});
};
export default addOrganizingTeam;
