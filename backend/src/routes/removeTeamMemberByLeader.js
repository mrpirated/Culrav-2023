import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:removeTeamMemberByLeader");
import removeTeamMemberByLeaderService from "../service/removeTeamMemberByLeaderService";
router.post("/removeTeamMemberByLeader", async (req, res) => {
	await removeTeamMemberByLeaderService(req.headers.authorization, req.body)
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
