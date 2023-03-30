import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:removeECs");
import removeECsService from "../service/removeECsService";
router.post("/removeECs", async (req, res) => {
	await removeECsService(req.headers.authorization, req.body)
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
