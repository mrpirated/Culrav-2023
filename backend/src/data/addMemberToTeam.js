import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:addMemberToTeam");

const addMemberToTeam = async (user_id, team_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			"INSERT INTO team_member (team_id,member_id) VALUES (?,?)",
			[team_id, user_id],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else
					resolve({
						success: true,
						message: "Member added Successfully",
					});
			}
		);
	});
};
export default addMemberToTeam;
