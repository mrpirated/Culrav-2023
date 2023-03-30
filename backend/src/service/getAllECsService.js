import dbg from "debug";
const debug = dbg("service:getAllECs");
import getAllECs from "../data/getAllECs";
import getCulravId from "../controllers/getCulravId";

const getAllECsService = async () => {
	return await getAllECs()
		.then((response) => {
			response.data.forEach((e) => {
				e.ec_culrav_id = getCulravId(e.ec_id);
			});

			return response;
		})
		.catch((error) => {
			debug(error);
			return error;
		});
};
export default getAllECsService;
