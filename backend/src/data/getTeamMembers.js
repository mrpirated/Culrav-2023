import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:getTeamMembers");

const getTeamMembers = async (team_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT u.name AS 'user_name', tm.member_id AS 'user_id', 
            IF(t.team_leader = u.user_id, true, false) AS 'is_leader',
			u.phone as phone,u.mnnit_id as mnnit_id,u.college as college
            FROM team t 
            JOIN team_member tm ON tm.team_id = t.team_id 
            JOIN user u ON u.user_id = tm.member_id
            WHERE t.team_id = ?`,
			[team_id],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else
					resolve({
						success: true,
						message: "Teams Fetched",
						data: result,
					});
			}
		);
	});
};
export default getTeamMembers;
