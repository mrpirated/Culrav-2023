import axios from "axios";
import config from "../config";

const generateLinkAPI = async (data) => {
  const { token, team_id } = data;
  return await axios
    .post(
      `${config.baseUrl}${config.activateTeamLink}`,
      { team_id },
      { headers: { Authorization: "Bearer " + token } }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return { success: false, message: err.message };
    });
};
export default generateLinkAPI;
