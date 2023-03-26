import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:getPicture");
import getPicture from "../service/getPicture";
router.get("/getPicture", async (req, res) => {
	await getPicture(req.headers.authorization, req.query)
		.then((response) => {
			res.send(response);
		})
		.catch((err) => {
			debug(err);
			res.status(500).send({ message: err.msg });
		});
});
export default router;
