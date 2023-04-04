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
import CreateTeam from "../../Pages/Dashboard/CreateTeam";
import AddTeamMembers from "../../Pages/Dashboard/AddTeamMembers";

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

function RegisterEvent(props) {
	const [image, setImage] = useState("../../Pages/Team/Assets/Background.png");
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
		// navigate('/dashboard');
		// navigate("/registerevent", {
		//   state: { event_id: props.event_id, commitee_id: props.commitee_id },
		// });
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
						<div className='p-5 flex flex-col w-full h-full justify-center items-center'>
							<div className='w-full md:w-1/2 h-full'>
								<AddTeamMembers handleClose={props.handleClose} />
								<CreateTeam
									commitee_id={props.commitee_id}
									event_id={props.event_id}
									handleClose={props.handleClose}
								/>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
}

export default RegisterEvent;
