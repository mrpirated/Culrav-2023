import dbg from "debug";
const debug = dbg("service:getImage");
const getImageService = async (query) => {
	return new Promise((resolve, reject) => {
		debug(query);
		var imageUrl = `https://images.culrav.online/${query.type}_`;
		if (query.type === "commitee") {
			imageUrl += query.commitee_id;
		} else if (query.type === "event") {
			imageUrl += query.event_id;
		} else if (query.type === "user") {
			imageUrl += query.user_id;
		}
		imageUrl += ".jpg";
		resolve({
			success: true,
			data: {
				imageUrl: imageUrl,
			},
		});
	});
};
export default getImageService;
