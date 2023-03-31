import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:getStats");

const getStats = async () => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT COUNT(*) as registered_users FROM user;
            SELECT COUNT(*) as outside_users FROM user WHERE mnnit_id IS NULL;
            SELECT views FROM hits WHERE type = "website";`,
			(err, result) => {
				if (err) {
					reject({ success: false, message: err });
				} else
					resolve({
						success: true,
						message: "Stats Fetched",
						data: {
							registered_users: result[0][0].registered_users,
							outside_users: result[1][0].outside_users,
							website_views: result[2][0].views,
						},
					});
			}
		);
	});
};
export default getStats;
