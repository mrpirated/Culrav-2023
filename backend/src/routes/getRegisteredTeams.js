import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:getRegistered");
import getRegisteredTeamsService from "../service/getRegisteredTeamsService";
router.get("/getRegisteredTeams", async (req, res) => {
	await getRegisteredTeamsService(req.headers.authorization, req.query)
		.then((response) => {
			res.send(response);
		})
		.catch((error) => {
			res.status(500).send({ success: false, message: error });
		});
});
export default router;
