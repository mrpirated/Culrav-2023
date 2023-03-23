import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:addPOCs");
import addPOCsService from "../service/addPOCsService";
router.post("/addPOCs", async (req, res) => {
	await addPOCsService(req.headers.authorization, req.body)
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
