import { useState } from "react";
import { User } from "../../User/User";

const AddTeamMembers = () => {
  const [teamLink, setTeamLink] = useState(null);
  const { user } = User();

  const handleClick = async () => {
    // process.env.REACT_APP_ADDMEMBERTOTEAMLINK
    const response = await fetch(process.env.REACT_APP_ADDMEMBERTOTEAMLINK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.data.token}`,
      },
      body: JSON.stringify({ team_id: teamLink }),
    });
    const json = await response.json();

    if (response.ok) {
      console.log("Successful");
      console.log(JSON.stringify(json));
      if (json.success) {
        window.location.reload(false);
        window.alert(json.message);
      } else {
        window.location.reload(false);
        if (json.message === undefined) {
          window.alert("Team does not exist");
        } else {
          window.alert(json.message);
        }
      }
    }

    setTeamLink(null);
  };

  return (
    <div className="bg-light my-2 w-full rounded-md mx-1 box-border p-4">
      <div>
        <p className="text-2xl font-medium">JOIN TEAM</p>
      </div>
      <div className="mt-4">
        <label
          htmlFor="selectCommitee"
          className="block mb-2 font-medium text-black"
        >
          Enter Team Link
        </label>
        <input
          type="string"
          onChange={(e) => setTeamLink(e.target.value)}
          value={teamLink}
          id="teamName"
          className="w-full  rounded-lg p-2 focus:ring-red focus:border-red"
          required
        />
      </div>

      <button
        onClick={handleClick}
        className="mt-6 hover:shadow-md hover:bg-dark"
      >
        JOIN
      </button>
    </div>
  );
};

export default AddTeamMembers;
