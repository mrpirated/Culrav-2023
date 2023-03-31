import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:editUserProfile");
import editUserProfileService from "../service/editUserProfileService";
router.post("/editUserProfile", async (req, res) => {
	await editUserProfileService(req.headers.authorization, req.body)
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
