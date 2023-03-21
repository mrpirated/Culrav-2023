import express from "express";
import cors from "cors";
import http from "http";
import dbg from "debug";
import dotenv from "dotenv";

import login from "./routes/login";
import signup from "./routes/signup";
import getCommitees from "./routes/getCommitees";
import getCommiteeEvents from "./routes/getCommiteeEvents";
import createTeam from "./routes/createTeam";
import addMemberToTeam from "./routes/addMemberToTeam";
import addOrganizingTeam from "./routes/addOrganizingTeam";
import config from "./config";
dotenv.config();

const PORT = config.PORT;
const HOST_NAME = config.HOST_NAME;
const debug = dbg("http");
const { json } = express;
const app = express();
app.use(express.json());

app.use(cors());

app.use(json({ extended: false }));

app.use(
	"/api",
	login,
	signup,
	getCommitees,
	getCommiteeEvents,
	createTeam,
	addMemberToTeam,
	addOrganizingTeam
);
app.use("/", (req, res) => {
	res.send("Server is Running");
});
const server = http.createServer(app);
server.listen(PORT, HOST_NAME, () => {
	debug(`✨✨ Server running at http://${HOST_NAME}:${PORT}:`);
});
