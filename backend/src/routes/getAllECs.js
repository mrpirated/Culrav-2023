import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:getAllECs");
import getAllECsService from "../service/getAllECsService";
router.get("/getAllECs", async (req, res) => {
	await getAllECsService(req.query)
		.then((response) => {
			res.send(response);
		})
		.catch((error) => {
			res.status(500).send({ success: false, message: error });
		});
});

export default router;
