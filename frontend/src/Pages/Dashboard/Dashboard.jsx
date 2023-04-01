import DashboardNavbar from "./DashboardNavbar";
import { useSelector } from "react-redux";
import DashboardAdmin from "./DashboardAdmin";
import DashboardPositions from "./DashboardPositions";
import DashboardEC from "./DashboardEC";
import DashboardUser from "./DashboardUser";
import { useState } from "react";
import { useEffect } from "react";
function Dashboard() {
	const auth = useSelector((state) => state.auth);
	const [option, setOption] = useState("profile");
	const [isEC, setIsEC] = useState(false);
	const [isPOC, setIsPOC] = useState(false);
	const [navItems, setNavItems] = useState([]);
	useEffect(() => {
		if (auth.pocs.length > 0) {
			setIsPOC(true);
		}
		if (auth.ecs.length > 0) {
			setIsEC(true);
		}
	}, [auth.pocs, auth.ecs]);
	useEffect(() => {
		if (auth.user.type === "ADMIN" || auth.user.type === "FS") {
			setNavItems(["poc", "ec"]);
		} else if (isPOC) {
			setNavItems(["ec"]);
		}
	}, [auth.user.type, isPOC, isEC]);
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
				) : isPOC || isEC > 0 ? (
					<DashboardPositions
						type={option}
						setType={setOption}
						isPOC={isPOC}
						isEC={isEC}
					/>
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
