import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:createTeam");
import addMemberToTeamService from "../service/addMemberToTeamService";
router.post("/addMemberToTeam", async (req, res) => {
	await addMemberToTeamService(req.headers.authorization, req.body)
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
