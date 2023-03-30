import pool from "../dbconn/db";
import dbg from "debug";
const debug = dbg("data:getAllPOCs");

const getAllPOCs = async () => {
	return new Promise((resolve, reject) => {
		pool.query(
			`SELECT u.user_id as poc_id, u.name as poc_name,
            c.commitee_id, c.name as commitee_name
            FROM user u 
            JOIN pocs p ON p.poc_id = u.user_id
            JOIN commitee c ON c.commitee_id = p.commitee_id
            WHERE u.type = "POC"`,
			(err, result) => {
				if (err) {
					debug(err);
					reject({ success: false, message: err });
				} else {
					resolve({
						success: true,
						message: "POCs fetched",
						data: result,
					});
				}
			}
		);
	});
};

export default getAllPOCs;
