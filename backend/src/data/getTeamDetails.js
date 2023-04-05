import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:getTeamDetails");

const getTeamDetails = async (team_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT t.team_id, t.team_name, e.event_id, 
            e.name AS 'event_name', e.commitee_id, 
            c.name AS 'commitee_name', t.link AS 'link',
			(SELECT COUNT(*) FROM team_member tm1 WHERE tm1.team_id = ?) AS team_size
			FROM team t 
            JOIN event e ON t.event_id = e.event_id
            JOIN commitee c ON e.commitee_id = c.commitee_id
            WHERE t.team_id = ?`,
			[team_id, team_id],
			(err, result) => {
				debug(result);
				if (err) {
					reject({ success: false, message: err });
				} else
					resolve({
						success: true,
						message: "Teams Fetched",
						data: result[0],
					});
			}
		);
	});
};
export default getTeamDetails;
