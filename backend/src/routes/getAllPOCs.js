import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:getAllPOCs");
import getAllPOCsService from "../service/getAllPOCsService";
router.get("/getAllPOCs", async (req, res) => {
	await getAllPOCsService(req.query)
		.then((response) => {
			res.send(response);
		})
		.catch((error) => {
			res.status(500).send({ success: false, message: error });
		});
});

export default router;
