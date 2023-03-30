import CreateTeam from "../CreateTeam";
import DashboardNavbar from "../DashboardNavbar";
import AddTeamMembers from "../AddTeamMembers";
import AddPoc from "../AddPoc";
import AddEc from "../AddEc";
import EditDescriptionA from "./EditDescriptionA";
import { useSelector } from "react-redux";
const DashboardAdmin = () => {
	const auth = useSelector((state) => state.auth);

	return (
		<>
			<DashboardNavbar />
			<div className='md:flex mt-[30px] md:mt-[15px] md:flex-row flex flex-col mx-10'>
				{/* left dashboard  */}
				<div className='left m-4 w-[50%]'>
					<div className='flex flex-col flex-wrap w-full h-[70px]'>
						<div className='bg-light md:mt-[8px] ml-[-16px] md:ml-[-16px] my-2 w-full rounded-md'>
							<p className='text-2xl p-4 text-brown'>
								Hello, <span className='text-red'>{auth.user.name}</span>
							</p>
						</div>
					</div>
				</div>

				{/* center dashboard  */}
				<div className='center m-4 mt-[15px] ml-[-4px] md:ml-[0px] w-full'>
					<div className='flex flex-col w-full '>
						<AddPoc />
						<AddEc />
					</div>
				</div>

				{/* right dashboard */}
				<div className='m-4 mt-[7px] md:mr-[4px] md:mt-[15px] mb-[32px] ml-[-4px] md:ml-[0px] w-full h-full '>
					<EditDescriptionA />
				</div>
			</div>
		</>
	);
};

export default DashboardAdmin;
