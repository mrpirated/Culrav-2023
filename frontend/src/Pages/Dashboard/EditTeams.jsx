import React from "react";
import CreateTeam from "./CreateTeam";
import AddTeamMembers from "./AddTeamMembers";

const EditTeams = () => {
  return (
    <div className="w-[95%] md:w-[60%] lg:w-1/2">
      <AddTeamMembers />
      <CreateTeam />
    </div>
  );
};

export default EditTeams;
