import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:removeMemberFromTeam");
import removeMemberFromTeamService from "../service/removeMemberFromTeamService";
router.post("/removeMemberFromTeam", async (req, res) => {
	await removeMemberFromTeamService(req.headers.authorization, req.body)
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
