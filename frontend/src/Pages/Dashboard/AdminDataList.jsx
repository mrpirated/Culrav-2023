import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import removePOCsAPI from "../../api/removePOCsAPI";
import removeECsAPI from "../../api/removeECsAPI";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import CardPOC from "./CardPOC";
import CardEC from "./CardEC";
const AdminDataList = (props) => {
	const { type, data } = props;
	const auth = useSelector((store) => store.auth);
	const deleteHandlerPoc = async (e) => {
		const deleteCnf = window.confirm("Are you sure want to delete User");
		if (deleteCnf) {
			const data = {
				token: auth.token,
				poc_id: e.poc_id,
				commitee_id: e.commitee_id,
			};
			await removePOCsAPI(data).then((response) => {
				if (response.success) toast.success(response.message);
				else toast.error(response.message);
			});
			props.setRefreshList(true);
		}
	};

	const deleteHandlerEc = async (e) => {
		const deleteCnf = window.confirm("Are you sure want to delete User");
		if (deleteCnf) {
			const data = {
				token: auth.token,
				ec_id: e.ec_id,
				event_id: e.event_id,
				commitee_id: e.commitee_id,
			};
			await removeECsAPI(data).then((response) => {
				console.log(response);
				if (response.success) toast.success(response.message);
				else toast.error(response.message);
			});
			props.setRefreshList(true);
		}
	};

	return (
		<>
			<div className='bg-[#F5BE8A] w-full md:w-full md:m-2 p-4 shadow-md h-[500px] md:h-[600px] rounded-md overflow-auto'>
				<div>
					<p className='text-2xl font-medium drop-shadow-md'>
						List Of {props.type.toUpperCase()}s
					</p>
					<div className='mt-4'>
						{data.map((element) => (
							<div>
								{type === "poc" ? (
									<CardPOC poc={element} deleteHandlerPoc={deleteHandlerPoc} />
								) : (
									<CardEC ec={element} deleteHandlerEc={deleteHandlerEc} />
								)}
							</div>
						))}
					</div>
					{/* {type === "poc" ? (
						<div className='mt-4'>
							{pocs.map((element) => {
								return (
									<div className='' key={element}>
										<div className='hover:cursor-pointer px-4 py-2 rounded-md bg-[#F7D6E0] my-2 flex w-full justify-between shadow-md'>
											<div className='flex flex-col'>
												<p className='font-semibold text-xl'>
													{element.poc_name}
												</p>
												<p className='font-semibold text-xs'>
													({element.poc_culrav_id})
												</p>
												<p className='text-md font-semibold mt-2'>
													{element.commitee_name}
												</p>
											</div>
											<div
												className='flex items-center text-[#D8315B] cursor-pointer'
												onClick={() => {
													deleteHandlerPoc(element);
												}}
											>
												<DeleteIcon />
											</div>
										</div>
									</div>
								);
							})}
						</div>
					) : (
						<div className='mt-4'>
							{ecs.map((element) => {
								return (
									<div className='' key={element}>
										<div className='hover:cursor-pointer px-4 py-2 bg-[#7BDFF2] shadow-md rounded-md my-2 flex w-full justify-between'>
											<div className='flex flex-col'>
												<p className='font-semibold text-xl'>
													{element.ec_name}
												</p>
												<p className='font-semibold text-xs'>
													({element.ec_culrav_id})
												</p>
												<p className='text-md font-semibold mt-2'>
													{element.event_name}
												</p>
												<p className='text-xs '>{element.commitee_name}</p>
											</div>
											<div
												className='flex items-center text-[#0A2463] hover:text-[#1c3878] cursor-pointer'
												onClick={() => {
													deleteHandlerEc(element);
												}}
											>
												<DeleteIcon />
											</div>
										</div>
									</div>
								);
							})}
						</div>
					)} */}
				</div>
			</div>
		</>
	);
};

export default AdminDataList;
