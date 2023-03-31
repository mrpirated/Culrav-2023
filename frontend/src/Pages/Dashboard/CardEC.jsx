import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function CardEC(props) {
	const { ec, deleteHandlerEc } = props;
	return (
		<div className='' key={ec}>
			<div className='hover:cursor-pointer px-4 py-2 bg-[#FFF1C5] shadow-md rounded-md my-2 flex w-full justify-between'>
				<div className='flex flex-col'>
					<p className='font-semibold text-xl'>{ec.ec_name}</p>
					<p className='font-semibold text-xs'>({ec.ec_culrav_id})</p>
					<p className='text-md font-semibold mt-2'>{ec.event_name}</p>
					<p className='text-xs '>{ec.commitee_name}</p>
				</div>
				<div
					className='flex items-center text-Black cursor-pointer'
					onClick={() => {
						deleteHandlerEc(ec);
					}}
				>
					<DeleteIcon />
				</div>
			</div>
		</div>
	);
}

export default CardEC;
