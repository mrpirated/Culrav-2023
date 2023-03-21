import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:addOrganizingTeam");
import addOrganizingteamService from "../service/addOrganizingTeamService";
router.post("/addOrganizingTeam", async (req, res) => {
	await addOrganizingteamService(req.headers.authorization, req.body)
		.then((response) => {
			debug(response);
			res.send(response);
		})
		.catch((err) => {
			debug(err);
			res.status(500).send({ message: err.msg });
		});
});
export default router;
