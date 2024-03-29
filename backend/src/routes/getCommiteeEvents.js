import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:getCommiteeEvents");
import getCommiteeEventsService from "../service/getCommiteeEventsService";
router.get("/getCommiteeEvents", async (req, res) => {
	await getCommiteeEventsService(req.query)
		.then((response) => {
			res.send(response);
		})
		.catch((error) => {
			res.status(500).send({ success: false, message: error });
		});
});

export default router;
