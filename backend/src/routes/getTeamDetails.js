import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:getTeamDetails");
import getTeamDetailsService from "../service/getTeamDetailsService";
router.get("/getTeamDetails", async (req, res) => {
	await getTeamDetailsService(req.headers.authorization, req.query)
		.then((response) => {
			res.send(response);
		})
		.catch((error) => {
			res.status(500).send({ success: false, message: error });
		});
});
export default router;
