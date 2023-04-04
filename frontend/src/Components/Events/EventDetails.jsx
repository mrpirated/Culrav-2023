import React, { useState, useEffect } from "react";
import axios, * as others from "axios";
import { motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import TeamEvent from "./TeamEvent";
import EventCard from "./EventCard";
import getCommiteeEventsAPI from "../../api/getCommiteeEventsAPI";
import img from "./Assests/cardTop.webp";
import getImageAPI from "../../api/getImageAPI";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import RegisterEvent from "./RegisterEvent";

let container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

function EventDetails(props) {
	const [image, setImage] = useState("../../Pages/Team/Assets/Background.png");
	const [innerdisplay, setinnerdisplay] = useState(false);
	const [subevent, setSubevent] = useState([]);
	const [tagline, setTagline] = useState("");
	const { ecs } = props;
	console.log("Event Details", props);
	console.log("Tagline", props.event_tagline);
	const width = window.screen.width;
	let initial = "hidden";
	let animate = "visible";
	let transition = "";
	if (width < 1024) {
		initial = { y: 100, opacity: 0 };
		animate = { y: 0, opacity: 1 };
		transition = { ease: "linear", duration: 0.3 };
	}
	const navigate = useNavigate();

	const EventClick = () => {
		setinnerdisplay(true);
		// navigate("/registerevent", {
		//   state: { event_id: props.event_id, commitee_id: props.commitee_id },
		// });
	};

	const handleClose = () => {
		setinnerdisplay(!innerdisplay);
	};

	const getImage = async () => {
		setImage(getImageAPI("event", props.event_id));
	};

	useEffect(() => {
		getImage();
	}, []);

	const getEventsData = async () => {
		await getCommiteeEventsAPI({ commitee_id: props.commitee_id }).then(
			(response) => {
				setSubevent(response.data);
				console.log(response.data);
			}
		);
	};

	useEffect(() => {
		getEventsData();
	}, []);

	return (
		<>
			<div
				// id="blur"
				className='fixed w-screen h-screen z-40 top-[-12.5%] left-[-5.5%] md:left-[-12.5%]'
				onClick={props.handleClose}
			></div>
			<div
				className='fixed w-[90vw] z-40 md:w-[80vw] h-[80vh] bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] top-[50%] left-[50%] rounded-md'
				style={{ transform: "translate(-50%, -50%)" }}
			>
				{width > 1024}
				<motion.div
					variants={container}
					initial={initial}
					animate={animate}
					transition={transition}
					className='flex flex-col w-full h-full shadow-lg overflow-auto'
				>
					<div className='relative flex flex-col w-full h-auto'>
						<div className='fixed top-[-4px] right-3 z-50 p-2 md:p-4'>
							<IconButton
								color='primary'
								aria-label='Close'
								fontSize='large'
								onClick={props.handleClose}
							>
								<CancelRoundedIcon />
							</IconButton>
						</div>
						<div className='flex flex-col items-center w-full h-auto md:flex-row'>
							<div className=' w-full md:w-[50%] md:h-full p-6 relative'>
								<img
									src={image ? image : img}
									alt={`${props.name} image`}
									className='object-cover w-full h-full rounded-lg shadow-md'
								/>
								<div
									className='absolute text-white  top-[80%] left-[50%] '
									style={{ transform: "translate(-50%, -50%)" }}
								>
									<p
										className={`md:text-2xl text-center md:pl-[40px] md:pr-[40px] lg:text-4xl font-extrabold text-white`}
										style={{ fontFamily: "japan" }}
									>
										{props.name.toUpperCase()}
									</p>
								</div>
							</div>
							<div className='w-full mt-[-20px] md:mt-[0px] md:w-[50%] md:pl-[20px] md:pr-[40px] pl-[20px] pr-[20px] h-auto p-6'>
								<motion.p
									variants={item}
									className='text-xl text-center ml-[10px] mr-[10px] my-2 font-bold italic'
								>
									{props.event_tagline}
								</motion.p>
								<motion.p
									variants={item}
									className='md:text-[15px] text-center my-4'
								>
									{props.event_description}
								</motion.p>
								<motion.p
									variants={item}
									className='md:text-xl text-center my-4'
								>
									<span className='font-bold mr-[10px]'>TEAM SIZE:</span>
									{props.min_team_members === props.max_team_members
										? `${props.min_team_members}`
										: `${props.min_team_members} TO ${props.max_team_members}`}
								</motion.p>
								<div
									// id="EventRegister"
									className='pl-[80px] pr-[80px]'
								>
									<button id='EventRegister' onClick={EventClick}>
										REGISTER
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='flex justify-center'>
						<p className='text-2xl ml-[20px] mr-[20px] text-center xlsm:mt-[5px] xs:mt-[5px] xlsm:mb-[13px] xs:mb-[13px] md:mt-[25px] md:mb-[-15px] uppercase mt-[40px] mb-[-10px] font-bold lg:text-3xl '>
							RULES
						</p>
					</div>

					<div className='p-4 md:p-10 flex flex-row flex-wrap justify-center'>
						<div dangerouslySetInnerHTML={{ __html: props.rules }} />
					</div>
					<div className='flex justify-center'>
						<p className='text-2xl ml-[20px] mr-[20px] text-center xlsm:mt-[5px] xs:mt-[20px] xlsm:mb-[13px] xs:mb-[13px] md:mt-[25px] md:mb-[-15px] uppercase mt-[40px] mb-[-10px] font-bold lg:text-3xl '>
							{props.name} COORDINATORS
						</p>
					</div>
					<div className='flex flex-row flex-wrap justify-center'>
						{ecs
							.filter((e) => e.event_id === props.event_id)
							.map((e) => (
								<div className='m-10 lg:mx-20'>
									<div className='w-full h-full flex flex-col justify-center items-center'>
										<p className='font-bold text-xl lg:text-2xl mt-4'>
											{e.ec_name.toUpperCase()}
										</p>
										<p className='font-normal lg:text-md'>{e.ec_phone}</p>
									</div>
								</div>
							))}
					</div>
				</motion.div>
			</div>
			{innerdisplay && (
				<RegisterEvent
					commitee_id={props.commitee_id}
					event_id={props.event_id}
					handleClose={handleClose}
				/>
			)}
		</>
	);
}

export default EventDetails;
