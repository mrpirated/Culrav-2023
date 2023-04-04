import React from "react";
import CreateTeam from "./CreateTeam";
import AddTeamMembers from "./AddTeamMembers";

const EditTeams = (props) => {
  const { commitee_id, event_id } = props;
  return (
    <div className="w-[95%] md:w-[60%] lg:w-1/2">
      <AddTeamMembers />
      <CreateTeam
        commitee_id={commitee_id ? commitee_id : null}
        event_id={event_id ? event_id : null}
      />
    </div>
  );
};

export default EditTeams;
