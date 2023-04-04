import React from "react";
import CreateTeam from "./CreateTeam";
import DashboardNavbar from "./DashboardNavbar";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const RegisterEvent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const data = location.state;
  return (
    <div>
      <DashboardNavbar user={auth.user} />
      <CreateTeam
        commitee_id={data ? data.commitee_id : null}
        event_id={data ? data.event_id : null}
      />
    </div>
  );
};

export default RegisterEvent;
