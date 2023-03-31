import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../../Assets/Preloader/circle.webp";

function DashboardNavbar(props) {
	return (
		<>
			<div className='bg-off w-full h-[60px] shadow-md flex flex-row z-50'>
				<div className='flex flex-row justify-start items-center w-full'>
					<div className='mx-4 flex flex-row items-center'>
						<img src={Logo} className='w-[50px]' />
						<p className='ml-2 text-xl font-bold drop-shadow-sm'>CULRAV</p>
					</div>
				</div>
				<div className='flex flex-row w-full justify-end items-center'>
					<div className='cursor-pointer flex flex-row items-center justify-center m-4 text-xl text-black'>
						{/* <AccountCircleIcon /> */}
						<p className='m-1'>Hi, </p>
						<p className='m-2 font-semibold w-full'>{props.user.name}</p>
						{/* <p className="m-2">{props.user.culrav_id}</p> */}
						<button className='m-4'>Logout</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default DashboardNavbar;
