import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:getImage");
import getImageService from "../service/getImageService";
router.get("/getImage", async (req, res) => {
	await getImageService(req.query)
		.then((response) => {
			res.send(response);
		})
		.catch((error) => {
			res.status(500).send({ success: false, message: error });
		});
});
export default router;
