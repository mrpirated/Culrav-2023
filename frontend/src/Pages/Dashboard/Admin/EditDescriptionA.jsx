import React, { useEffect, useState } from "react";
import axios, * as others from "axios";
import Select from "react-select";
import toast from "react-hot-toast";
import Spinner from "../Spinner";
import { useSelector } from "react-redux";
const EditDescriptionA = () => {
	const [commitee, setCommitte] = useState([]);
	const [subevent, setSubevent] = useState([]);
	const [selectedsubEvent, setselectedsubEvent] = useState(null);
	const [teamName, setTeamName] = useState("");
	const [progress, setProgress] = useState(false);
	const auth = useSelector((state) => state.auth);

	const fillCommitee = async () => {
		setProgress(true);
		const response = await axios.get(`${process.env.REACT_APP_COMM}`);
		const options = [];
		const data = response.data.data;
		await data.forEach((element) => {
			const object = {
				value: element.commitee_id,
				label: element.name,
			};
			options.push(object);
		});
		setCommitte(options);
		setProgress(false);
	};

	const onEventchange = async (event) => {
		setProgress(true);
		const id = event.value;
		setselectedsubEvent(null);
		const response = await axios.get(
			`${process.env.REACT_APP_COMMITEE}?commitee_id=${id}`
		);
		const subeventoptions = [];
		await response.data.data.forEach((element) => {
			const object = {
				value: element.event_id,
				label: element.name,
			};
			subeventoptions.push(object);
		});
		setProgress(false);
		setSubevent(subeventoptions);
	};

	const onSubEventchange = async (event) => {
		console.log("subevent selected");
		console.log(event.value);
		setselectedsubEvent(event.value);
	};

	const onchangeTeamname = async (event) => {
		setTeamName(event.target.value);
	};

	const handleClick = async () => {
		if (selectedsubEvent != null) {
			// const response = await axios.post(`${process.env.REACT_APP_CREATETEAM}`, {
			//   headers: {
			//     "Content-Type": "application/json",
			//     Authorization: `Bearer ${user.data.token}`,
			//   },
			//   body: {
			//     event_id: selectedsubEvent,
			//     team_name: teamName,
			//   },
			// });

			setSubevent([]);
			setselectedsubEvent(null);
			setTeamName("");

			const response = await fetch(process.env.REACT_APP_CREATETEAM, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${auth.token}`,
				},
				body: JSON.stringify({
					event_id: selectedsubEvent,
					team_name: teamName,
				}),
			});
			const json = await response.json();

			if (response.ok) {
				if (json.success) {
					toast.success("Team created Successfully");
					window.location.reload(false);
				} else {
					toast.error(json.messge);
				}
			}
		} else {
			toast.warn("Select an event");
		}
	};

	useEffect(() => {
		fillCommitee();
	}, []);

	return (
		<>
			<div className='relative'>
				<div
					className={`bg-light my-2 w-full rounded-md mx-1 box-border p-4 ${
						!progress ? "opacity-100" : "opacity-40"
					}`}
				>
					<div>
						<p className='text-2xl font-medium'>Edit Description</p>
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
							onChange={onEventchange}
							// value={subevent}
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
							options={subevent}
							id='selectEvents'
							className='w-full'
							onChange={onSubEventchange}
							// value={selectedsubEvent}
							required
						/>
					</div>
					<div className='mt-4'>
						<label
							htmlFor='teamName'
							className='block mb-2 font-medium text-black'
						>
							Edit Description
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
							className='hover:shadow-md hover:bg-[#f43e4a] transition-all duration-100'
							onClick={handleClick}
						>
							Create Team
						</button>
					</div>
				</div>
				{progress && (
					<div
						className='absolute top-[50%] left-[50%]'
						style={{ transform: "translate(-50%, -50%)" }}
					>
						<Spinner />
					</div>
				)}
			</div>
		</>
	);
};

export default EditDescriptionA;
