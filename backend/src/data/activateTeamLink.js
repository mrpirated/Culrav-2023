import pool from "../dbconn/db";
import dbg from "debug";
import randomstring from "randomstring";
const debug = dbg("data:activateTeamLink");

const activateTeamLink = async (team_id) => {
	return new Promise((resolve, reject) => {
		var link = randomstring.generate();
		pool.query(
			`UPDATE team SET link = ? WHERE team_id = ?`,
			[link, team_id],
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else
					resolve({
						success: true,
						message: "Link Activated Successfully",
						data: { link: link },
					});
			}
		);
	});
};
export default activateTeamLink;
