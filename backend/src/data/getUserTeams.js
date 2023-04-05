import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:getUserTeams");

const getUserTeams = async (user_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT t.team_id, t.team_name, e.event_id, e.name AS 'event_name', 
            e.commitee_id, c.name AS 'commitee_name', 
            IF(t.team_leader = ?, true, false) as 'is_leader',
			(SELECT COUNT(*) FROM team_member tm1 WHERE tm1.team_id = t.team_id) AS team_count
			FROM team t 
            JOIN team_member tm ON tm.team_id = t.team_id 
            JOIN event e ON t.event_id = e.event_id
            JOIN commitee c ON e.commitee_id = c.commitee_id
            WHERE tm.member_id = ?`,
			[user_id, user_id],
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
export default getUserTeams;
