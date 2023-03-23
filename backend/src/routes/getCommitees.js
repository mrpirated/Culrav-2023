import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:getCommitees");
import getCommiteesService from "../service/getCommiteesService";
router.get("/getCommitees", async (req, res) => {
	await getCommiteesService()
		.then((response) => {
			res.send(response);
		})
		.catch((error) => {
			res.status(500).send({ success: false, message: error });
		});
});

export default router;
