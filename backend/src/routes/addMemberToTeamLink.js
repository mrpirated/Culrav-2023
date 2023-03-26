import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:addMemberToTeam");
import addMemberToTeamLinkService from "../service/addMemberToTeamLinkService";
router.post("/addMemberToTeamLink", async (req, res) => {
	await addMemberToTeamLinkService(req.headers.authorization, req.body)
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
