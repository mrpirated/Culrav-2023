import React, { useState, useEffect } from "react";
import axios, * as others from "axios";
import Select from "react-select";
import toast from "react-hot-toast";
import addECsAPI from "../../api/addECsAPI";
import { useSelector } from "react-redux";
const AddEc = () => {
	const [options, setoptions] = useState([]);
	const [selectedoption, setselectedoption] = useState(null);
	const [ec, setec] = useState("");
	const auth = useSelector((state) => state.auth);

	const getCommiteeData = async () => {
		const response = await axios.get(process.env.REACT_APP_COMM);
		const data = response.data.data;
		const optionarray = [];
		await data.forEach((element) => {
			const object = {
				value: element.commitee_id,
				label: element.name,
			};
			optionarray.push(object);
		});
		setoptions(optionarray);
	};

	const onEventchange = async (event) => {
		setselectedoption(event.value);
	};

	const handleClick = async () => {
		if (selectedoption == null) {
			toast.warn("Select a commitee first");
		} else {
			await addECsAPI({
				token: auth.token,
				ec_id: ec,
				event_id: selectedoption,
			});
			// const response = await axios.post(process.env.REACT_APP_ADDEC, {
			// 	method: "POST",
			// 	headers: {
			// 		"Content-Type": "application/json",
			// 		Authorization: `Bearer ${user.data.token}`,
			// 	},
			// 	body: JSON.stringify({
			// 		ec_id: ec,
			// 		commitee_id: selectedoption,
			// 	}),
			// });
		}
	};

	useEffect(() => {
		getCommiteeData();
	}, []);

	return (
		<>
			<div className='bg-light my-2 w-full rounded-md mx-1 box-border p-4'>
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
						options={options}
						id='selectCommitee'
						className='w-full'
						onChange={onEventchange}
						required
					/>
				</div>

				<div className='mt-4'>
					<label
						htmlFor='teamName'
						className='block mb-2 font-medium text-black'
					>
						Enter EC Id
					</label>
					<input
						type='text'
						onChange={(e) => {
							setec(e.target.value);
						}}
						value={ec}
						id='teamName'
						className='w-full  rounded-lg p-2 focus:ring-red focus:border-red'
						required
					/>
				</div>
				<div className='mt-4'>
					<button
						className='hover:shadow-md hover:bg-dark'
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
