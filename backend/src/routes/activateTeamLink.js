import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:activateTeamLink");
import activateTeamLinkService from "../service/activateTeamLinkService";
router.post("/activateTeamLink", async (req, res) => {
	await activateTeamLinkService(req.headers.authorization, req.body)
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
