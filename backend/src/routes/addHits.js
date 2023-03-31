import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:addHits");
import addHitsService from "../service/addHitsService";
router.get("/addHits", async (req, res) => {
	await addHitsService()
		.then((response) => {
			res.send(response);
		})
		.catch((err) => {
			debug(err);
			res.status(500).send({ message: err.msg });
		});
});
export default router;
