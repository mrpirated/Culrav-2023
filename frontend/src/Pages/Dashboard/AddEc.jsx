import React, { useEffect, useState } from "react";
import axios, * as others from "axios";
import Select from "react-select";
import toast from "react-hot-toast";
import Spinner from "./Spinner";
import { useDispatch, useSelector } from "react-redux";
import getCommiteesAPI from "../../api/getCommiteesAPI";
import getCommiteeEventsAPI from "../../api/getCommiteeEventsAPI";
import { setLoading } from "../../store/auth";
import addECsAPI from "../../api/addECsAPI";

const AddEc = (props) => {
	const { commitee, commiteeEvents } = props;
	const [event, setEvent] = useState([]);
	const [selectedCommitee, setSelectedCommitee] = useState(null);
	const [selectedEvent, setSelectedEvent] = useState(null);
	const [progress, setProgress] = useState(false);
	const [ec, setec] = useState("");
	const auth = useSelector((state) => state.auth);
	const { setRefreshList } = props;
	const dispatch = useDispatch();
	console.log(commitee);
	const onCommiteeChange = (e) => {
		setSelectedCommitee(e);
		setEvent(commiteeEvents[e.value]);
		setSelectedEvent(null);
	};

	const onEventChange = async (e) => {
		setSelectedEvent(e);
	};

	const handleClick = async () => {
		if (selectedCommitee == null || selectedEvent == null) {
			toast.error("select an Event First");
		} else if (ec == "") {
			toast.error("Enter EC Culrav ID");
		} else {
			const data = {
				token: auth.token,
				ec_id: ec,
				event_id: selectedEvent.value,
				commitee_id: selectedCommitee.value,
			};
			await addECsAPI(data)
				.then((response) => {
					if (response.success) {
						toast.success(response.message);
						setRefreshList(true);
					} else toast.error(response.message);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<>
			<div
				className={`bg-[#f5be8a] p-4 mt-2 md:m-2 w-full  shadow-md rounded-md`}
			>
				<div>
					<p className='text-2xl font-medium'>Add EC</p>
				</div>
				<div className='mt-4'>
					<label
						htmlFor='selectCommitee'
						className='block mb-2 font-medium text-black'
					>
						Select Commitee
					</label>
					<Select
						options={commitee}
						id='selectCommitee'
						className='w-full'
						onChange={onCommiteeChange}
						value={selectedCommitee}
						required
					/>
				</div>
				<div className='mt-4'>
					<label
						htmlFor='selectEvents'
						className='block mb-2 font-medium text-black'
					>
						Select Event
					</label>
					<Select
						options={event}
						value={selectedEvent}
						id='selectEvents'
						className='w-full'
						onChange={onEventChange}
						required
					/>
				</div>
				<div className='mt-4'>
					<label htmlFor='ecid' className='block mb-2 font-medium text-black'>
						Enter Ec Culrav Id
					</label>
					<div className='flex flex-row'>
						<input
							type='text'
							value='CUL - '
							disabled={true}
							className='w-[70px] rounded-lg p-2 focus:ring-red focus:border-red mr-2 bg-white'
						></input>
						<input
							type='text'
							onChange={(e) => {
								setec(e.target.value);
							}}
							value={ec}
							id='ecid'
							className='w-full  rounded-lg p-2 focus:ring-red focus:border-red'
							required
						/>
					</div>
				</div>
				<div className='mt-4'>
					<button
						className='hover:shadow-md bg-lightYellow hover:bg-[#f7e3a1] shadow-md transition-all duration-100 text-black'
						onClick={handleClick}
					>
						Add EC
					</button>
				</div>
			</div>
		</>
	);
};

export default AddEc;
