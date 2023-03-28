import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:editEventDetails");
import editEventDetailsService from "../service/editEventDetailsService";
router.post("/editEventDetails", async (req, res) => {
	await editEventDetailsService(req.headers.authorization, req.body)
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
