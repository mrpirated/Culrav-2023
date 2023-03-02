import config from "../config";
import mysql from "mysql";
import dbg from "debug";
const debug = dbg("database");
const pool = mysql.createPool({
	host: config.DB_HOSTNAME,
	user: config.DB_USERNAME,
	password: config.DB_PASSWORD,
	port: config.DB_PORT,
	database: config.DB_NAME,
	connectionLimit: 10,
});
debug("mysql pool created");
pool.on("connection", function (connection) {
	//connection.query("SET SESSION auto_increment_increment=1");
	debug("database pool connected");
});
pool.on("enqueue", function () {
	debug("Waiting for available connection slot");
});
pool.on("release", function (connection) {
	debug("Connection %d released", connection.threadId);
});
pool.on("acquire", function (connection) {
	debug("Connection %d acquired", connection.threadId);
});
export default pool;
