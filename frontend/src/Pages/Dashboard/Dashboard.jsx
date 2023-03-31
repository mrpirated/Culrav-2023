import DashboardNavbar from "./DashboardNavbar";
import { useSelector } from "react-redux";
import DashboardAdmin from "./DashboardAdmin";
import DashboardPOC from "./DashboardPOC";
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
				{auth.user.type == "ADMIN" && (
					<DashboardPOC type={option} setType={setOption} />
				)}
				{/* {auth.user.type=="FS" && <DashboardPoc />} */}
				{/* {auth.user.type=="EC" && <DashboardEc />} */}
				{/* {auth.user.type=="FS" && <DashboardUser />} */}
			</div>
		</>
	);
}

export default Dashboard;
