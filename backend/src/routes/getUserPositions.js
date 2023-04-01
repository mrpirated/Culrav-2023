import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:getUserPOCs");
import getUserPositionsService from "../service/getUserPositionsService";
router.get("/getUserPositions", async (req, res) => {
	await getUserPositionsService(req.headers.authorization)
		.then((response) => {
			res.send(response);
		})
		.catch((error) => {
			res.status(500).send({ success: false, message: error });
		});
});
export default router;
