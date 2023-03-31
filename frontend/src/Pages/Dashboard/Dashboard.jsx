import DashboardNavbar from "./DashboardNavbar";
import { useSelector } from "react-redux";
import DashboardAdmin from "./DashboardAdmin";
import DashboardPOC from "./DashboardPOC";
import DashboardEC from "./DashboardEC";
import DashboardUser from "./DashboardUser";
import { useState } from "react";

function Dashboard() {
	const auth = useSelector((state) => state.auth);
	const [option, setOption] = useState("profile");
	return (
		<>
			<div className='bg-[#fffbed]'>
				<DashboardNavbar
					user={auth.user}
					option={option}
					setOption={setOption}
				/>
				{auth.user.type == "FS" && (
					<DashboardAdmin type={option} setType={setOption} />
				)}
				{auth.user.type == "ADMI" && (
					<DashboardPOC type={option} setType={setOption} />
				)}
				{auth.user.type == "ADMI" && (
					<DashboardEC type={option} setType={setOption} />
				)}
				{auth.user.type == "NONE" ||
					(auth.user.type == null && (
						<DashboardUser type={option} setType={setOption} />
					))}
				{/* {auth.user.type=="FS" && <DashboardPoc />} */}
				{/* {auth.user.type=="EC" && <DashboardEc />} */}
				{/* {auth.user.type=="FS" && <DashboardUser />} */}
			</div>
		</>
	);
}

export default Dashboard;
