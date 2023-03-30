import dbg from "debug";
const debug = dbg("service:getAllPOCs");
import checkTokenService from "./checkTokenService";
import getAllPOCs from "../data/getAllPOCs";
import getCulravId from "../controllers/getCulravId";

const getAllPOCsService = async () => {
	return await getAllPOCs()
		.then((response) => {
			response.data.forEach((e) => {
				e.poc_culrav_id = getCulravId(e.poc_id);
			});

			return response;
		})
		.catch((error) => {
			debug(error);
			return error;
		});
};
export default getAllPOCsService;
