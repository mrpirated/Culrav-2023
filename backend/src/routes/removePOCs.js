import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:removePOCs");
import removePOCsService from "../service/removePOCsService";
router.post("/removePOCs", async (req, res) => {
	await removePOCsService(req.headers.authorization, req.body)
		.then((response) => {
			debug(response);
			res.send(response);
		})
		.catch((err) => {
			debug(err);
			res.status(500).send({ message: err.msg });
		});
});
export default router;
