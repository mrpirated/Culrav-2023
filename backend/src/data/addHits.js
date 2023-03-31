import pool from "../dbconn/db";
import dbg from "debug";

const debug = dbg("data:addHits");

const addHits = async () => {
	return new Promise((resolve, reject) => {
		pool.query(`UPDATE hits ET views=views+1`, (err, result) => {
			if (err) {
				reject({ success: false, message: err });
			} else resolve({ success: true, message: "Views updated successfully" });
		});
	});
};
export default addHits;
