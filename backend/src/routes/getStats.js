import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:getStats");
import getStatsService from "../service/getStatsService";
router.get("/getStats", async (req, res) => {
	await getStatsService()
		.then((response) => {
			res.send(response);
		})
		.catch((error) => {
			res.status(500).send({ success: false, message: error });
		});
});
export default router;
