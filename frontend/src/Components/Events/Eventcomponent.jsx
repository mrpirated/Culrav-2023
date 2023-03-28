import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EventInfo from "./EventInfo";
import getCommiteeEventsAPI from "../../api/getCommiteeEventsAPI";
// import axios, * as others from "axios";
// import { element } from "prop-types";

function Eventcomponent(props) {
	const [subevent, setSubevent] = useState([]);
	const [event, setEvent] = useState(props.eventTitle);
	const [display, setdisplay] = useState(false);

	const handleEvent = () => {
		setEvent(props.japanese);
		const slider = document.getElementById(`slider${props.eventTitle}`);
		slider.style.width = "100%";
	};

	const handleExitEvent = () => {
		setEvent(props.eventTitle);
		const slider = document.getElementById(`slider${props.eventTitle}`);
		slider.style.width = "0%";
	};

	const getEventsData = async () => {
		await getCommiteeEventsAPI({ commitee_id: props.commitee_id }).then(
			(response) => {
				setSubevent(response.data);
			}
		);
		// const jsony = await fetch(
		//   `${process.env.REACT_APP_COMMITEE}?commitee_id=${props.commitee_id}`
		// );
		// const response = await jsony.json();

		// const response = await axios.get(
		//   `${process.env.REACT_APP_COMMITEE}?commitee_id=${props.commitee_id}`
		// );
		// setSubevent(response.data);
		// console.log(response.data.data);
	};

	useEffect(() => {
		getEventsData();
		const slider = document.getElementById(`slider${props.eventTitle}`);
		slider.style.width = "0%";
	}, []);

	const handleClick = () => {
		setdisplay(!display);
	};

	var delayArray = [0.1, 0.2, 0.3];

	return (
		<>
			<motion.div
				className='m-2 cursor-pointer card'
				onClick={handleClick}
				whileInView={{ y: [150, 0], opacity: [0, 1] }}
				viewport={{ once: true }}
				transition={{
					duration: 0.4,
					ease: "easeOut",
					delay: delayArray[Math.floor(Math.random() * delayArray.length)],
				}}
			>
				<div
					className='relative w-[90vw] md:w-[40vw] lg:w-[27vw] xl:w-[29vw] h-[220px] shadow-lg'
					onMouseOver={handleEvent}
					onMouseOut={handleExitEvent}
				>
					<img
						src={require(`${props.image}`)}
						className='w-full h-full object-cover hover:blur-sm transition-[3s] duration-300 rounded-t-lg'
						alt=''
					/>
					<div
						id={`slider${props.eventTitle}`}
						className={`absolute top-0 left-0 h-full z-10 overflow-hidden bg-[#f58e76] opacity-[0.85] transition-all duration-[400ms] rounded-t-lg`}
					>
						{subevent.map((element) => {
							return (
								<p className='m-1 text-center text-black'>{element.name}</p>
							);
						})}
					</div>
				</div>
				<div
					className='flex bg-red text-brown mt-1 w-auto h-[100px] justify-center items-center text-2xl md:text-3xl shadow-2xl font-extrabold rounded-b-lg'
					onMouseOver={handleEvent}
					onMouseOut={handleExitEvent}
				>
					<p>{event}</p>
				</div>
			</motion.div>
			{display && <EventInfo {...props} handleClick={handleClick} />}
		</>
	);
}

export default Eventcomponent;
