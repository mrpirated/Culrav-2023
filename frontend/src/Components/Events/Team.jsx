import React from "react";
import teamlogo from "./Assests/teamlogo.webp";

function Team(props) {
	const { name, contact, imageUrl } = props;
	return (
		<div className='m-10 lg:mx-20'>
			<div className='w-full h-full flex flex-col justify-center items-center'>
				<img
					src={imageUrl}
					alt='avatar'
					className='rounded-full cover h-[150px] w-[150px] lg:h-[200px] lg:w-[200px]'
				/>
				<p className='font-bold text-xl lg:text-2xl mt-4'>
					{name.toUpperCase()}
				</p>
				<p className='font-normal lg:text-md'>{contact}</p>
			</div>
		</div>
	);
}

export default Team;
