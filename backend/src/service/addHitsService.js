import dbg from "debug";
import addHits from "../data/addHits";
const debug = dbg("service:addHits");
const addHitsService = async () => {
	return await addHits().catch((error) => {
		return error;
	});
};
export default addHitsService;
