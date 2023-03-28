import dbg from "debug";
const debug = dbg("service:getImage");
import checkTokenService from "./checkTokenService";
import fs from "fs";
import path from "path";
const getImageService = async (query) => {
	return new Promise((resolve, reject) => {
		debug(query);
		var filename = "uploads/";
		var defFilename = "uploads/";
		if (query.type === "commitee") {
			filename += `posters/commitee/${query.commitee_id}`;
			defFilename += `posters/default`;
		} else if (query.type === "event") {
			defFilename += `posters/event/${query.event_id}`;
			defFilename += `posters/default`;
		} else if (query.type === "user") {
			defFilename += `profiles/${query.user_id}`;
			defFilename += `profiles/default`;
		}
		filename += ".jpg";
		defFilename += ".jpg";
		debug(filename);
		debug(defFilename);
		debug(fs.existsSync(path.resolve(filename)));
		if (fs.existsSync(path.resolve(filename))) {
			resolve({
				success: true,
				data: {
					image: fs.readFileSync(path.resolve(filename)),
				},
			});
		} else {
			resolve({
				success: true,
				data: {
					image: fs.readFileSync(path.resolve(defFilename)),
				},
			});
		}
	});
};
export default getImageService;
