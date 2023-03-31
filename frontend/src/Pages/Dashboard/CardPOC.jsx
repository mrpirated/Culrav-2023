import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function CardPOC(props) {
	const { poc, deleteHandlerPoc } = props;
	return (
		<div className='' key={poc}>
			<div className='hover:cursor-pointer px-4 py-2 rounded-md bg-[#FFF1C5] my-2 flex w-full justify-between shadow-md'>
				<div className='flex flex-col'>
					<p className='font-semibold text-xl'>{poc.poc_name}</p>
					<p className='font-semibold text-xs'>({poc.poc_culrav_id})</p>
					<p className='text-md font-semibold mt-2'>{poc.commitee_name}</p>
				</div>
				<div
					className='flex items-center text-Black cursor-pointer'
					onClick={() => {
						deleteHandlerPoc(poc);
					}}
				>
					<DeleteIcon />
				</div>
			</div>
		</div>
	);
}

export default CardPOC;
