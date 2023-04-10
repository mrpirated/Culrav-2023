import pool from "../dbconn/db";
import dbg from "debug";
const debug = dbg("data:editEventDetails");

const editEventDetails = async (
	event_id,
	event_description,
	event_tagline,
	min_team_members,
	max_team_members,
	rules,
	reg_active
) => {
	return new Promise((resolve, reject) => {
		var values = {
			event_description,
			event_tagline,
			min_team_members,
			max_team_members,
			rules,
			reg_active,
		};
		pool.query(
			`UPDATE event SET ? WHERE event_id = ?`,
			[values, event_id],
			(err, result) => {
				if (err) {
					debug(err);
					reject({ success: false, message: err });
				} else {
					resolve({
						success: true,
						message: "Event details updated",
					});
				}
			}
		);
	});
};

export default editEventDetails;
