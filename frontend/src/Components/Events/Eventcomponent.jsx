import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EventInfo from "./EventInfo";
import getCommiteeEventsAPI from "../../api/getCommiteeEventsAPI";
import { async } from "q";
import getImagesAPI from "../../api/getImageAPI";
// import axios, * as others from "axios";
// import { element } from "prop-types";

function Eventcomponent(props) {
	const [subevent, setSubevent] = useState([]);
	const [display, setdisplay] = useState(false);
	const [imgurl, setimgurl] = useState(null);
	const { eventData } = props;
	// console.log(eventData);
	const handleEvent = () => {
		const slider = document.getElementById(`slider${props.name}`);
		slider.style.width = "100%";
	};

	const handleExitEvent = () => {
		const slider = document.getElementById(`slider${props.name}`);
		slider.style.width = "0%";
	};

	useEffect(() => {
		setSubevent(eventData[props.commitee_id]);
	}, [eventData]);
	useEffect(() => {
		setimgurl(getImagesAPI("commitee", props.commitee_id));

		const slider = document.getElementById(`slider${props.name}`);
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
						src={imgurl}
						className='w-full h-full object-cover hover:blur-sm transition-[3s] duration-300 rounded-t-lg'
						alt=''
					/>
					<div
						id={`slider${props.name}`}
						className={`absolute top-0 left-0 h-full z-10 overflow-hidden bg-[#f58e76] opacity-[0.85] transition-all duration-[400ms] rounded-t-lg`}
					>
						<div className='flex flex-col items-center justify-center h-full w-full'>
							{subevent.map((element) => {
								return (
									<p className='m-1 mb-0 text-[15px] text-center uppercase text-black'>
										{element.name}
									</p>
								);
							})}
						</div>
					</div>
				</div>
				<div
					className='flex bg-red text-brown mt-1 w-auto h-[100px] justify-center items-center text-2xl md:text-3xl shadow-2xl font-extrabold rounded-b-lg'
					onMouseOver={handleEvent}
					onMouseOut={handleExitEvent}
				>
					<p>{props.name.toUpperCase()}</p>
				</div>
			</motion.div>
			{display && (
				<EventInfo {...props} handleClick={handleClick} imgurl={imgurl} />
			)}
		</>
	);
}

export default Eventcomponent;
