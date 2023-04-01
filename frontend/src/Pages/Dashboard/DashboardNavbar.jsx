import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../../Assets/Preloader/circle.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import navItems from "./navItems";
import { useLogout } from "../../Hooks/useLogout";
const HamOpen = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='black'
		className='w-10 h-10'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
		/>
	</svg>
);

const HamClose = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='white'
		className='w-10 h-10'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M6 18L18 6M6 6l12 12'
		/>
	</svg>
);

function DashboardNavbar(props) {
	const { option, setOption } = props;
	const [toggle, setToggle] = useState(false);
	const auth = useSelector((state) => state.auth);
	const { logout } = useLogout();
	// const navItems = [
	// 	"Konnichiwa " + auth.user.name,
	// 	"Profile",
	// 	"POC",
	// 	"EC",
	// 	"Edit Event",
	// ];
	const handleClickLogout = async (e) => {
		logout();
	};
	return (
		<>
			<div className='bg-off w-full h-[60px] shadow-md flex flex-row z-50'>
				<div className='flex flex-row justify-start items-center w-full'>
					<a href='/'>
						<div className='mx-4 flex flex-row items-center'>
							<img src={Logo} className='w-[50px]' />
							<p className='ml-2 text-xl font-bold drop-shadow-sm'>CULRAV</p>
						</div>
					</a>
				</div>
				<div className='flex flex-row w-full justify-end items-center '>
					<div className='flex flex-row justify-end lg:hidden'>
						<div
							className={`flex cursor-pointer mr-2 `}
							onClick={() => setToggle(true)}
						>
							{HamOpen}
						</div>
					</div>
					<div className='hidden cursor-pointer lg:flex flex-row items-center justify-center m-4 text-xl text-black'>
						{/* <AccountCircleIcon /> */}

						<div className='m-2 font-semibold w-full'>
							Konnichiwa {props.user.name}
						</div>

						{/* <p className="m-2">{props.user.culrav_id}</p> */}
						<button
							onClick={handleClickLogout}
							className=' bg-lightYellow hover:bg-[#f7e3a1] shadow-md transition-all duration-200 text-black text-xl font-semibold'
						>
							Logout
						</button>
					</div>
				</div>

				{toggle && (
					<div>
						<motion.div
							id='NavBlur'
							className='fixed top-0 left-0 right-0 z-50 flex flex-col items-end justify-end w-screen p-1 pb-4 shadow-lg md:hidden bg-warm'
							animate={{ y: [-500, 0] }}
							transition={{
								type: "spring",
								bounce: 0.25,
								damping: 9,
								mass: 0.5,
							}}
						>
							<div
								className='flex z-10 cursor-pointer mr-[30px] mt-[20px]'
								onClick={() => setToggle(false)}
							>
								{HamClose}
							</div>

							<div className='logo  w-full z-0 flex justify-center items-center'>
								<img className='w-[40%]' src={Logo} alt='Renaissance Logo' />
							</div>

							<ul className='flex mt-[5px] flex-col items-center justify-start sm:mt-[-20px] w-full h-full p-0 m-0 text-xs text-black'>
								<li className='mx-10 font-Mont pb-[20px] my-2 cursor-pointer'>
									<div
										className='mt-[25px] text-center text-white text-base mx-2 px-1 lg:mx-4 lg:px-2 relative font-Mont '
										smooth={true}
										duration={500}
									>
										{`Konnichiwa ${auth.user.name}`.toUpperCase()}
									</div>
								</li>
								{navItems[
									auth.user.type !== "ADMIN" || auth.user.type !== "FS"
										? "USER"
										: auth.user.type
								].map((item) => (
									<li
										className='mt-[5px] mx-10 font-Mont pb-[20px] my-2 cursor-pointer'
										key={`link-${item}`}
									>
										<p
											onClick={() => {
												setToggle(false);
												setOption(item);
											}}
											className=' text-white text-base mx-2 px-1 font-Mont'
											smooth={true}
											duration={500}
										>
											{item.toUpperCase()}
										</p>
									</li>
								))}
								{auth.isauth && (
									<div className='px-6 mb-[20px] py-4 mx-4 text-lg font-bold transition duration-700 ease-in-out font-Mont text-black'>
										<button onClick={handleClickLogout}>LOGOUT</button>
									</div>
								)}
							</ul>
						</motion.div>
					</div>
				)}
			</div>
		</>
	);
}

export default DashboardNavbar;
