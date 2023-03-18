import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:createTeam");
import createTeamService from "../service/createTeamService";
router.post("/createTeam", async (req, res) => {
	await createTeamService(req.headers.authorization, req.body)
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
