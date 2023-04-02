import React, { useState, useEffect } from "react";
import Select from "react-select";
// import { User } from "../../../User/User";
import toast from "react-hot-toast";
import getCommiteeEventsAPI from "../../api/getCommiteeEventsAPI";
import editEventDetailsAPI from "../../api/editEventDetailsAPI";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../store/auth";

const Event = (props) => {
	const auth = useSelector((state) => state.auth);
	const { commitee, commiteeEvents } = props;
	const [rules, setRules] = useState("");
	const [minsize, setMinsize] = useState("");
	const [maxsize, setMaxsize] = useState("");
	const [event, setEvent] = useState([]);
	const [selectedEvent, setSelectedEvent] = useState(null);
	const [selectedCommitee, setSelectedCommitee] = useState(null);
	const [description, setDescription] = useState("");
	const [options, setoptions] = useState([]);
	const [tagline, setTagline] = useState("");
	const [eventCoordinators, setEventCoordinators] = useState([1, 2]);
	const [modal, setModal] = useState(false);
	const [checked, setChecked] = useState(false);
	const [toggle, setToggle] = useState(false);
	const dispatch = useDispatch();
	const onEventchange = (e) => {
		setSelectedEvent(e);
		console.log(e);
		dispatch(setLoading({ loading: true }));
		getCommiteeEventsAPI({ commitee_id: e.commitee_id })
			.then((response) => {
				console.log(response);
				response.data.forEach((element) => {
					if (element.event_id == e.value) {
						setTagline(element.event_tagline);
						setDescription(element.event_description);
						setMinsize(element.min_team_members);
						setMaxsize(element.max_team_members);
						if (element.min_team_members == 1 && element.max_team_members == 1)
							setChecked(true);
						setRules(element.rules);
					}
				});
			})
			.finally(() => {
				dispatch(setLoading({ loading: false }));
			});
	};
	const onCommiteeChange = (e) => {
		setSelectedCommitee(e.value);
		setEvent(commiteeEvents.filter((event) => event.commitee_id == e.value));
		setSelectedEvent(null);
	};
	const handleCheckBox = async () => {
		if (!checked) {
			setMaxsize(1);
			setMinsize(1);
		}
		setChecked(!checked);
	};

	const handleClickEditEvent = async () => {
		if (selectedCommitee == null || selectedEvent == null) {
			toast.error("Select the Event and Commitee to edit");
		} else if (minsize > maxsize) {
			if (minsize > maxsize)
				toast.error(
					"Minimim limit of team size should be <= maximum limit of team size"
				);
		} else {
			const object = {
				token: auth.token,
				event_id: selectedEvent.value,
				event_description: description,
				event_tagline: tagline,
				min_team_members: minsize,
				max_team_members: maxsize,
				rules: rules,
			};
			dispatch(setLoading({ loading: true }));
			editEventDetailsAPI(object)
				.then((response) => {
					console.log(response);
					if (response.success) {
						toast.success(response.message);
					} else toast.error(response.message);
				})
				.finally(() => {
					dispatch(setLoading({ loading: false }));
				});
		}
	};
	useEffect(() => {
		if (minsize == 1 && maxsize == 1) setChecked(true);
		else setChecked(false);
		// if (minsize > maxsize)
		// 	toast.error(
		// 		"Minimim limit of team size should be <= maximum limit of team size"
		// 	);
	}, [minsize, maxsize]);

	const handleModal = async () => {
		setModal(!modal);
	};

	return (
		<>
			<div
				className={`bg-OccurYellow my-2 w-full rounded-md md:mx-2 p-4 h-[500px] md:h-[600px] overflow-auto`}
			>
				<div>
					<p className='text-2xl font-medium'>Edit Event</p>
				</div>
				<div className='mt-4'>
					<label
						htmlFor='selectCommiteeEdit'
						className='block mb-2 font-medium text-black'
					>
						Select Commitee
					</label>
					<Select
						options={commitee}
						id='selectCommiteeEdit'
						className='w-full'
						onChange={onCommiteeChange}
						required
					/>
				</div>
				<div
					className='mt-4'
					onClick={() => {
						if (selectedCommitee == null) {
							toast("Select Commitee first");
						}
					}}
				>
					<label
						htmlFor='selectEventEdit'
						className='block mb-2 font-medium text-black'
					>
						Select Event
					</label>
					<Select
						options={event}
						id='selectEventEdit'
						className='w-full'
						onChange={onEventchange}
						required
					/>
				</div>
				<div className='mt-4'>
					<label
						htmlFor='tagline'
						className='block mb-2 font-medium text-black'
					>
						Tagline
					</label>
					<textarea
						type='text'
						onChange={(e) => {
							setTagline(e.target.value);
						}}
						value={tagline}
						id='tagline'
						className='w-full font-bold rounded-lg p-2 focus:ring-red focus:border-red'
						required
					></textarea>
				</div>
				<div className='mt-4'>
					<label
						htmlFor='description'
						className='block mb-2 font-medium text-black'
					>
						Description
					</label>
					<textarea
						type='text'
						onChange={(e) => {
							setDescription(e.target.value);
						}}
						value={description}
						id='description'
						className='w-full h-[200px] md:h-[100px]  rounded-lg p-2 focus:ring-red focus:border-red'
						required
					></textarea>
				</div>
				<div className='mt-4'>
					<label
						htmlFor='TeamSize'
						className='block mb-2 font-medium text-black'
					>
						Team Size
					</label>
					<div className='flex flex-col md:flex-row w-full '>
						<input
							type='Number'
							onChange={(e) => {
								setMinsize(e.target.value);
							}}
							value={minsize}
							id='TeamSizemin'
							placeholder='Min Team Size'
							className='w-full md:w-1/2 md:mr-2 rounded-lg p-2 focus:ring-red focus:border-red'
							required
						></input>
						<input
							type='Number'
							onChange={(e) => {
								setMaxsize(e.target.value);
							}}
							value={maxsize}
							id='TeamSizemax'
							placeholder='Max Team Size'
							className='w-full md:w-1/2  rounded-lg p-2 mt-2 md:ml-2 md:mt-0 focus:ring-red focus:border-red'
							required
						></input>
					</div>
					<div className='flex flex-row items-center mt-2'>
						<label htmlFor='solo' className='block font-medium text-black mr-2'>
							Solo Participation
						</label>
						<input
							type='checkbox'
							id='solo'
							class='w-4 h-4 rounded'
							onChange={handleCheckBox}
							checked={checked}
						/>
					</div>
				</div>
				<div className='mt-4'>
					<label htmlFor='rules' className='block mb-2 font-medium text-black'>
						Rules
					</label>
					<textarea
						type='text'
						onChange={(e) => {
							setRules(e.target.value);
						}}
						value={rules}
						id='rules'
						className='w-full h-[300px] md:h-[200px] rounded-lg p-2 focus:ring-red focus:border-red'
						required
					></textarea>
				</div>
				<div className='mt-4'>
					<button
						className='hover:shadow-md bg-lightYellow hover:bg-[#f7e3a1] shadow-md transition-all duration-100 text-black'
						onClick={handleClickEditEvent}
					>
						Edit Event
					</button>
				</div>
			</div>
		</>
	);
};

export default Event;
