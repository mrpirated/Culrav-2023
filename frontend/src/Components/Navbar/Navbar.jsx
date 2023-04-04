import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../Assets/Home/Logo.png";
import { Link } from "react-scroll";
import { useLogout } from "../../Hooks/useLogout";
import { useSelector } from "react-redux";
import "./Navbar.css";

const navItems = ["about", "events", "sponsors", "schedule", "contact"];

function Navbar() {
	const [toggle, setToggle] = useState(false);
	const [navScroll, setScroll] = useState(false);
	const auth = useSelector((state) => state.auth);
	const { logout } = useLogout();
	const navbarRef = useRef();

	const handleClickLogout = async (e) => {
		logout();
	};

	useEffect(() => {
		if (navbarRef.current != null) {
			console.log(navbarRef);
			const applyContainerProperties = () => {
				navbarRef.current.classList.add("navbar-below");
			};

			window.onscroll = function () {
				if (window.scrollY >= 500) {
					navbarRef.current.classList.add("activeNav");
					setScroll(true);
				} else {
					navbarRef.current.classList.add("activeNav");
					setScroll(false);
				}

				const element = document.getElementsByClassName("TrailerBack");
				const height = element[0].scrollHeight;
				const start = element[0].getBoundingClientRect().y;
				if (start + height * 0.2 > 0) {
					element[0].style.backgroundColor = "bisque";
				}
				if (start + height * 0.2 <= 0 && start + height * 0.4 > 0) {
					element[0].style.backgroundColor = "#F9C1B1";
				}
				if (start + height * 0.4 <= 0 && start + height * 0.6 > 0) {
					element[0].style.backgroundColor = "#f2dea4";
				}
				if (start + height * 0.6 <= 0 && start + height * 0.8 > 0) {
					element[0].style.backgroundColor = "#F9C1B1";
				}
				if (start + height * 0.8 <= 0) {
					element[0].style.backgroundColor = "bisque";
				}
			};

			applyContainerProperties();
		}
	}, []);

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

	return (
		<nav
			ref={navbarRef}
			className={`w-full flex flex-row justify-between z-30 fixed transition duration-600 ${
				navScroll ? "shadow-xl bg-[#CCAD8F]" : ""
			}`}
		>
			<div
				className={`logo md:px-0 flex justify-center items-center ${
					!navScroll ? "lg:w-1/3 lg:h-1/3" : "md:w-1/3 md:h-1/3"
				} xlsm:px-3 xlsm:py-6 xs:px-6 xs:py-6 transition duration-600`}
			>
				<a href='/'>
					<img
						className={`cursor-pointer ${
							!navScroll
								? "w-[220px] xlsm:w-[120px] sm:w-[150px] md-[150px] xl:w-[220px] sm:ml-[20px] lg:ml-[50px] xl:ml-[100px]"
								: "w-[80px] xs:w-[130px] sm:w-[120px] md:w-[80px] mt-[-10px] my-[-11px] mb-[-22px]"
						}`}
						src={logo}
						alt='Culrav Logo'
					/>
				</a>
			</div>

			<div
				className={`container px-3 md:flex xl:px-500px ${
					!navScroll
						? "pt-[50px] lg:mt-[-170px] md:mt-[-150px] xl:mt-[-150px] 2xl:mt-[-120px]"
						: "bg-[#CCAD8F] pt-[94px] 2xl:pt-[110px] xl:pt-[72px] lg:pt-[0px] lg:mt-[-16px] md:pt-[0px] md:mt-[-9px]"
				}`}
			>
				<ul
					className={`flex flex-row items-center justify-center sm:ml-[40px] md:ml-[40px] xl:ml-[20px] 2xl:ml-[50px] text-xs text-black ${
						!navScroll ? "" : "mb-[-23px] 2xl:ml-[0px]"
					}`}
				>
					{navItems.map((item) => (
						<Link
							to={`${item}`}
							key={item}
							className={`hidden ${
								!navScroll
									? "lg:mt-[20px]"
									: "lg:mt-[-7px] before:bg-dark hover:text-dark"
							} md:block md:mt-[-15px] xl:mt-[-80px] 2xl:mt-[-120px] mx-2 px-1 lg:mx-3 lg:px-2 relative font-Mont before:content-[''] before:absolute before:bg-dark before:h-[3px] before:w-0 before:left-0 before:bottom-[-8px] before:transition-[0.3s] before:duration-300 hover:before:w-full hover:text-dark`}
							smooth={true}
							duration={500}
						>
							<li
								className='text-sm cursor-pointer sm:text-[12px] lg:text-[14px] 2xl:text-[15px]'
								key={`link-${item}`}
							>
								{item.toUpperCase()}
							</li>
						</Link>
					))}
					<a
						href='/team'
						className={`hidden ${
							!navScroll
								? "lg:mt-[20px]"
								: "lg:mt-[-7px] before:bg-dark hover:text-dark"
						} md:block md:mt-[-15px] xl:mt-[-80px] 2xl:mt-[-120px] mx-2 px-1 lg:mx-3 lg:px-2 relative font-Mont before:content-[''] before:absolute before:bg-dark before:h-[3px] before:w-0 before:left-0 before:bottom-[-8px] before:transition-[0.3s] before:duration-300 hover:before:w-full hover:text-dark`}
					>
						<li
							className='text-sm  sm:text-[12px] cursor-pointer lg:text-[14px] 2xl:text-[15px]'
							key={`link-teampage`}
						>
							TEAM
						</li>
					</a>
					<a
						href={!auth.isauth ? "/login" : "/dashboard"}
						className={`hidden md:block bg-light md:mt-[-15px] ${
							!navScroll ? "lg:mt-[20px]" : "lg:mt-[-7px]"
						} xl:mt-[-80px] 2xl:mt-[-120px] md:ml-[10px] xl:ml-[20px] sm:px-4 sm:py-2 lg:px-6 lg:py-4 text-black font-bold hover:text-white hover:bg-dark transition ease-in-out duration-700`}
					>
						<li
							className='text-sm uppercase sm:text-[10px] cursor-pointer font-Mont lg:text-[14px] 2xl:text-[15px]'
							key={`link-confirmYourSeat`}
						>
							{!auth.isauth ? "REGISTER NOW" : "DASHBOARD"}
						</li>
					</a>
					{auth.isauth && (
						<li className='hidden md:block text-sm 2xl:mt-[-120px] xl:mt-[-80px] ml-[30px] uppercase sm:text-[10px] cursor-pointer font-Mont lg:text-[14px] 2xl:text-[15px]'>
							<button onClick={handleClickLogout}>LOGOUT</button>
						</li>
					)}
				</ul>
			</div>

			<div
				className={`md:hidden ${
					!navScroll ? "" : "bg-[#CCAD8F]"
				} relative flex justify-center items-center pr-[50px] mt-[-50px]`}
			>
				<div
					className={`flex cursor-pointer ${!navScroll ? "" : " mb-[-53px]"}`}
					onClick={() => setToggle(true)}
				>
					{HamOpen}
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

							<div className='logo mt-[-30px] mb-[-10px] w-full z-0 flex justify-center items-center'>
								<img className='w-[40%]' src={logo} alt='Renaissance Logo' />
							</div>

							<ul className='flex mt-[15px] flex-col items-center justify-start sm:mt-[-20px] w-full h-full p-0 m-0 text-xs text-black'>
								{navItems.map((item) => (
									<li
										className='mx-10 font-Mont pb-[20px] my-2 cursor-pointer'
										key={`link-${item}`}
									>
										<Link
											onClick={() => setToggle(false)}
											to={`${item}`}
											className="mt-[-25px] text-white text-base mx-2 px-1 lg:mx-4 lg:px-2 relative font-Mont before:content-[''] before:absolute before:bg-dark before:h-[3px] before:w-0 before:left-0 before:bottom-[-8px] before:transition-[0.3s] before:duration-300 hover:before:w-full hover:text-dark"
											smooth={true}
											duration={500}
										>
											{item.toUpperCase()}
										</Link>
									</li>
								))}
								<a
									href='/team'
									className="mt-[8px] text-base mx-2 px-1 lg:mx-4 lg:px-2 relative font-Mont before:content-[''] before:absolute before:bg-dark before:h-[3px] before:w-0 before:left-0 before:bottom-[-8px] before:transition-[0.3s] before:duration-300 hover:before:w-full hover:text-dark"
								>
									<li key={`link-teampage`} className='text-white'>
										TEAM
									</li>
								</a>
								<a href={!auth.isauth ? "/login" : "/dashboard"} className=''>
									<li className='px-6 uppercase text-white mt-[30px] mb-[30px] py-4 mx-4 text-lg font-bold transition duration-700 ease-in-out font-Mont hover:text-grey hover:bg-dark'>
										{!auth.isauth ? "REGISTER NOW" : "DASHBOARD"}
									</li>
								</a>
								{auth.isauth && (
									<div className='px-6 mt-[-20px] mb-[20px] py-4 mx-4 text-lg font-bold transition duration-700 ease-in-out font-Mont text-black'>
										<button onClick={handleClickLogout}>LOGOUT</button>
									</div>
								)}
							</ul>
						</motion.div>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
