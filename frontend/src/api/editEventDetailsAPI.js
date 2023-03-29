import axios from "axios";
import config from "../config";

const editEventDetailsAPI = async (data) => {
  try {
    console.log(data);
    const {
      token,
      event_id,
      event_description,
      event_tagline,
      min_team_members,
      max_team_members,
      rules,
    } = data;
    const response = await axios.post(
      `${config.baseUrl}${config.editEventDetails}`,
      {
        event_id,
        event_description,
        event_tagline,
        min_team_members,
        max_team_members,
        rules,
      },
      { headers: { Authorization: "Bearer "+token } }
    );
    console.log(response);
  } catch (err) {
    console.log(err);
    return { success: false, message: err.message };
  }
};
export default editEventDetailsAPI;
