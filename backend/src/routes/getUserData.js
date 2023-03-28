import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:getUserData");
import getUserDataService from "../service/getUserDataService";
router.get("/getUserData", async (req, res) => {
	await getUserDataService(req.headers.authorization)
		.then((response) => {
			res.send(response);
		})
		.catch((error) => {
			res.status(500).send({ success: false, message: error });
		});
});
export default router;
