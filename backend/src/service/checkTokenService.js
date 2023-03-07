import jwt from "jsonwebtoken";
import dbg from "debug";
const debug = dbg("service:checkToken");
import config from "../config";

const checkTokenService = async (bearerToken) => {
	return await new Promise((resolve, reject) => {
		//debug(bearertoken);
		if (!bearerToken) {
			reject({ success: false, message: "No token found" });
		}
		const token = bearerToken.split(" ")[1];
		jwt.verify(token, config.SECRET_KEY, (err, decoded) => {
			if (err) {
				reject({ success: false, message: "Invalid Token" });
			}
			//console.log(decoded);
			resolve({
				success: true,
				message: "Token Verified",
				data: { decoded: decoded },
			});
		});
	});
};

export default checkTokenService;
