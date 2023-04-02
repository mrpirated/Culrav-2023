import DashboardNavbar from "./DashboardNavbar";
import { useSelector } from "react-redux";
import DashboardAdmin from "./DashboardAdmin";
import DashboardPositions from "./DashboardPositions";
import DashboardUser from "./DashboardUser";
import { useState } from "react";
import { useEffect } from "react";
function Dashboard() {
	const auth = useSelector((state) => state.auth);
	const [option, setOption] = useState("profile");
	const [navItems, setNavItems] = useState([]);

	useEffect(() => {
		if (auth.user.type === "ADMIN" || auth.user.type === "FS") {
			setNavItems(["poc", "ec", "edit event"]);
		} else if (auth.isPOC) {
			setNavItems(["ec", "edit event"]);
		} else if (auth.isEC) {
			setNavItems(["edit event"]);
		}
	}, [auth.user.type, auth.isPOC, auth.isEC]);
	return (
		<>
			<div className='bg-[#fffbed]'>
				<DashboardNavbar
					user={auth.user}
					option={option}
					setOption={setOption}
					navItems={navItems}
				/>
				{auth.user.type == "FS" || auth.user.type == "ADMIN" ? (
					<DashboardAdmin type={option} setType={setOption} />
				) : auth.isPOC || auth.isEC ? (
					<DashboardPositions type={option} setType={setOption} />
				) : (
					<DashboardUser type={option} setType={setOption} />
				)}

				{/* {auth.user.type == "EC" && (
					<DashboardEC type={option} setType={setOption} />
				)} */}
				{/* {auth.user.type == "NONE" ||
					(auth.user.type == null && (
						<DashboardUser type={option} setType={setOption} />
					))} */}
				{/* {auth.user.type=="FS" && <DashboardPoc />} */}
				{/* {auth.user.type=="EC" && <DashboardEc />} */}
				{/* {auth.user.type=="FS" && <DashboardUser />} */}
			</div>
		</>
	);
}

export default Dashboard;
