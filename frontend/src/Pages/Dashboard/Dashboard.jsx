import DashboardNavbar from "./DashboardNavbar";
import { useSelector } from "react-redux";
import DashboardAdmin from "./Admin/DashboardAdmin";
import DashboardPoc from "./poc/DashboardPoc";
import DashboardUser from "./DashboardUser";

function Dashboard() {
  const auth = useSelector((state) => state.auth);
  return (
    <>
	<div className="bg-[#fffbed]">
      <DashboardNavbar user={auth.user} />
	  {auth.user.type=="FS" && <DashboardAdmin />}
	  {/* {auth.user.type=="FS" && <DashboardPoc />} */}
	  {/* {auth.user.type=="EC" && <DashboardEc />} */}
	  {/* {auth.user.type=="FS" && <DashboardUser />} */}
	  </div>
    </>
  );
}

export default Dashboard;
