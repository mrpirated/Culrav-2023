import React, { useEffect, useRef, useState } from "react";
import axios, * as others from "axios";
import Select from "react-select";
import toast from "react-hot-toast";
import Spinner from "./Spinner";
import createTeamAPI from "../../api/createTeamAPI";
import getCommiteeEventsAPI from "../../api/getCommiteeEventsAPI";
import { useLocation } from "react-router-dom";
import getCommiteesAPI from "../../api/getCommiteesAPI";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../store/auth";

function useQuery() {
	const { search } = useLocation();

	return React.useMemo(() => new URLSearchParams(search), [search]);
}

function CreateTeam(props) {
	const { commitee_id, event_id } = props;
	const [commitee, setCommitee] = useState([]);
	const [commiteeEvents, setCommiteeEvents] = useState([]);
	const [event, setEvent] = useState([]);
	const [selectedCommitee, setSelectedCommitee] = useState(null);
	const [selectedEvent, setSelectedEvent] = useState(null);
	const [teamName, setTeamName] = useState("");
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const onCommiteeChange = (e) => {
		setSelectedCommitee(e);
		console.log(commiteeEvents);
		setEvent(commiteeEvents.filter((event) => event.commitee_id == e.value));
		setSelectedEvent(null);
	};

	const onEventChange = async (e) => {
		setSelectedEvent(e);
	};

	const onchangeTeamname = async (event) => {
		setTeamName(event.target.value);
	};

	const handleClick = () => {
		if (selectedEvent != null && teamName != "") {
			const data = {
				token: auth.token,
				event_id: selectedEvent.value,
				team_name: teamName,
			};
			createTeamAPI(data).then((response) => {
				if (response.success) toast.success("Team created successfully");
				else toast.error(response.message);
			});
		} else {
			if (selectedEvent == null) toast.error("Select an event");
			if (teamName == "") toast.error("Enter Team Name");
		}
	};

	// useEffect(() => {
	//   let com_id = query.get("com_id");
	//   let event_id = query.get("event_id");
	//   let defValue = options.filter((opt) => opt.value == parseInt(com_id))[0];
	//   let eventdefValue = subevent.filter(
	//     (opt) => opt.value == parseInt(event_id)
	//   )[0];
	//   setComDeafultValue(defValue);
	//   setEventDeafultValue(eventdefValue);
	// }, []);

	useEffect(() => {
		dispatch(setLoading({ loading: true }));
		getCommiteesAPI()
			.then((response) => {
				const options = [];
				const eventFetches = [];
				response.data.forEach((element) => {
					eventFetches.push(
						getCommiteeEventsAPI({ commitee_id: element.commitee_id })
					);
					options.push({
						value: element.commitee_id,
						label: element.name,
					});
				});
				setCommitee(options);
				if (props) {
					setSelectedCommitee(
						options.filter((element) => element.value == props.commitee_id)
					);
				}
				return Promise.all(eventFetches);
			})
			.then((response) => {
				const commiteeEvents = [];
				response.forEach((res, key) => {
					res.data.forEach((e) => {
						commiteeEvents.push({
							value: e.event_id,
							label: e.name,
							commitee_id: e.commitee_id,
						});
					});
				});
				if (props) {
					setEvent(
						commiteeEvents.filter(
							(event) => event.commitee_id == props.commitee_id
						)
					);
					setSelectedEvent(
						commiteeEvents.find((element) => element.value == props.event_id)
					);
				}
				setCommiteeEvents(commiteeEvents);
			})
			.finally(() => {
				dispatch(setLoading({ loading: false }));
			});
	}, []);

	return (
		<>
			<div className='bg-OccurYellow my-2 w-full rounded-md box-border p-4'>
				<div>
					<p className='text-2xl font-medium'>CREATE TEAM</p>
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
						value={selectedCommitee}
						id='selectCommitee'
						className='w-full'
						onChange={onCommiteeChange}
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
					<label
						htmlFor='teamName'
						className='block mb-2 font-medium text-black'
					>
						Enter Team Name
					</label>
					<input
						type='text'
						onChange={onchangeTeamname}
						value={teamName}
						id='teamName'
						className='w-full  rounded-lg p-2 focus:ring-red focus:border-red'
						required
					/>
				</div>
				<div className='mt-4'>
					<button
						className='hover:shadow-md bg-lightYellow hover:bg-[#f7e3a1] shadow-md transition-all duration-100 text-black'
						onClick={handleClick}
					>
						CREATE TEAM
					</button>
				</div>
			</div>
		</>
	);
}

export default CreateTeam;
