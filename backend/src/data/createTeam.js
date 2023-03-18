import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:createTeam");

const createTeam = async (user_id, event_id, team_name) => {
	return new Promise((resolve, reject) => {
		var values = [team_name, user_id, event_id];
		pool.query(
			"INSERT INTO team (team_name,team_leader,event_id) VALUES(?)",
			[values],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else
					resolve({
						success: true,
						message: "Team created Successfully",
						data: result,
					});
			}
		);
	});
};
export default createTeam;
