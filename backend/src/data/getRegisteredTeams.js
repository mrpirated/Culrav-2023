import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:getRegisteredTeams");

const getRegisteredTeams = async (event_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT t.team_id, t.team_name, t.team_leader AS leader_id,
            u.name as leader_name, u.mnnit_id as leader_mnnit_id,
            u.phone AS leader_phone
			FROM team t 
            JOIN user u ON u.user_id = t.team_leader
            WHERE t.event_id = ?`,
			[event_id],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else
					resolve({
						success: true,
						message: "Registered Teams Fetched",
						data: result,
					});
			}
		);
	});
};
export default getRegisteredTeams;
