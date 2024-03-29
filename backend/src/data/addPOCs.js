import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:addPOCs");

const addPOCs = async (user_id, commitee_id) => {
	return new Promise((resolve, reject) => {
		var values = {
			poc_id: user_id,
			commitee_id: commitee_id,
		};
		pool.query(`INSERT INTO pocs SET ?`, [values], (err, result) => {
			if (err) {
				reject({ success: false, message: err });
			} else resolve({ success: true, message: "POC updated successfully" });
		});
	});
};
export default addPOCs;
