import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:deactivateTeamLink");
import deactivateTeamLinkService from "../service/deactivateTeamLinkService";
router.post("/deactivateTeamLink", async (req, res) => {
	await deactivateTeamLinkService(req.headers.authorization, req.body)
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
