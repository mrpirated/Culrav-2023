import { Router } from "express";
const router = Router();
import dbg from "debug";
const debug = dbg("api:getTeamDetails");
import getOrganizingTeamService from "../service/getOrganizingTeamService";
router.get("/getOrganizingTeam", async (req, res) => {
	await getOrganizingTeamService()
		.then((response) => {
			res.send(response);
		})
		.catch((error) => {
			res.status(500).send({ success: false, message: error });
		});
});
export default router;
