import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:addECs");
import addECsService from "../service/addECsService";
router.post("/addECs", async (req, res) => {
	await addECsService(req.headers.authorization, req.body)
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
