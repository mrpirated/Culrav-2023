import pool from "../dbconn/db";
import dbg from "debug";
import getCulravId from "../controllers/getCulravId";

const debug = dbg("data:removePOCs");

const removePOCs = async (user_id, commitee_id) => {
	return new Promise((resolve, reject) => {
		pool.query(
			`DELETE FROM pocs WHERE poc_id = ? AND commitee_id = ?`,
			[user_id, commitee_id],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else
					resolve({
						success: true,
						message:
							result.affectedRows > 0
								? "POC removed successfully"
								: `Culrav Id ${getCulravId(user_id)} is not a POC`,
					});
			}
		);
	});
};
export default removePOCs;
