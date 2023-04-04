import axios from "axios";
import config from "../config";

const getTeamDetailsAPI = async (data) => {
  const { token, team_id } = data;
  return await axios
    .get(config.baseUrl + config.getTeamDetails + "?team_id=" + team_id, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return { success: false, message: err.message };
    });
};
export default getTeamDetailsAPI;
