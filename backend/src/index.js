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
import getUserTeams from "./routes/getUserTeams";
import getTeamDetails from "./routes/getTeamDetails";
import addPOCs from "./routes/addPOCs";
import addECs from "./routes/addECs";
import removeMemberFromTeam from "./routes/removeMemberFromTeam";
import activateTeamLink from "./routes/activateTeamLink";
import addMemberToTeamLink from "./routes/addMemberToTeamLink";
import editEventDetails from "./routes/editEventDetails";
import config from "./config";
import getUserData from "./routes/getUserData";
import getImage from "./routes/getImage";
import getOrganizingTeam from "./routes/getOrganizingTeam";
import addOrganizingTeam from "./routes/addOrganizingTeam";
import getAllPOCs from "./routes/getAllPOCs";
import getAllECs from "./routes/getAllECs";
import removePOCs from "./routes/removePOCs";
import removeECs from "./routes/removeECs";
import editUserProfile from "./routes/editUserProfile";
import addHits from "./routes/addHits";
import getStats from "./routes/getStats";
import getUserPositions from "./routes/getUserPositions";
import deactivateTeamLink from "./routes/deactivateTeamLink";
import removeTeamMemberByLeader from "./routes/removeTeamMemberByLeader";
import getRegisteredTeams from "./routes/getRegisteredTeams";
import sendEmail from "./controllers/sendEmail";
import emailNotSent from "./template/emailNotSent";
import getCulravId from "./controllers/getCulravId";
import getUserWithoutPhone from "./data/getUserWithoutPhone";
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
	removeMemberFromTeam,
	getUserTeams,
	getTeamDetails,
	addPOCs,
	addECs,
	activateTeamLink,
	addMemberToTeamLink,
	getUserData,
	getImage,
	editEventDetails,
	getOrganizingTeam,
	addOrganizingTeam,
	getAllPOCs,
	getAllECs,
	removePOCs,
	removeECs,
	editUserProfile,
	addHits,
	getStats,
	getUserPositions,
	deactivateTeamLink,
	removeTeamMemberByLeader,
	getRegisteredTeams
);
// sendEmail({
// 	subject: "Update Your Phone Number",
// 	body: emailNotSent("Deepesh Rathi", getCulravId(17)),
// 	receivers: [
// 		{
// 			address: `<deepeshrathi9@gmail.com>`,
// 			displayName: "Deepesh Rathi",
// 		},
// 	],
// });
// getUserWithoutPhone().then((response) => {
// 	response.data
// 		.filter((member) => member.user_id == 17 || member.user_id == 18)
// 		.forEach((item) => {
// 			debug(item.name);

// 			sendEmail({
// 				subject: "Update Your Phone Number",
// 				body: emailNotSent(item.name, getCulravId(item.user_id)),
// 				receivers: [
// 					{
// 						address: `<${item.email}>`,
// 						displayName: item.name,
// 					},
// 				],
// 			}).then((response) => {
// 				debug(response);
// 			});
// 		});
// });
app.use("/", (req, res) => {
	res.send("Server is Running");
});
const server = http.createServer(app);
server.listen(PORT, HOST_NAME, () => {
	debug(`✨✨ Server running at http://${HOST_NAME}:${PORT}:`);
});
