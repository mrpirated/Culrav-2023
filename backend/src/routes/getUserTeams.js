import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:getUserTeams");
import getUserTeamsService from "../service/getUserTeamsService";
router.get("/getuserTeams", async (req, res) => {
	await getUserTeamsService(req.headers.authorization)
		.then((response) => {
			res.send(response);
		})
		.catch((error) => {
			res.status(500).send({ success: false, message: error });
		});
});
export default router;
