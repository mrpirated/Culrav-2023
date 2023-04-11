import React from "react";
import CreateTeam from "./CreateTeam";
import DashboardNavbar from "./DashboardNavbar";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import EditTeams from "./EditTeams";

const RegisterEvent = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const auth = useSelector((state) => state.auth);
	const data = location.state;

	return (
		<div className='bg-lightYellow h-screen'>
			{/* <DashboardNavbar user={auth.user} /> */}
			<div className='flex flex-row w-full justify-center h-screen lg:h-auto'>
				<EditTeams
					commitee_id={data ? data.commitee_id : null}
					event_id={data ? data.event_id : null}
				/>
			</div>
		</div>
	);
};

export default RegisterEvent;
