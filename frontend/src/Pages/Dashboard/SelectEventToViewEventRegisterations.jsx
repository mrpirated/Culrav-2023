import React, { useEffect, useState } from "react";
import Select from "react-select";
import getCommiteeEventsAPI from "../../api/getCommiteeEventsAPI";
import getCommiteesAPI from "../../api/getCommiteesAPI";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../store/auth";

const SelectEventToViewEventRegisterations = (props) => {
	const {
		commitee,
		commiteeEvents,
		selectedCommitee,
		setSelectedCommitee,
		selectedEvent,
		setSelectedEvent,
	} = props;
	const [event, setEvent] = useState([]);

	const dispatch = useDispatch();

	const onCommiteeChange = (e) => {
		setSelectedCommitee(e);
		setEvent(commiteeEvents.filter((event) => event.commitee_id === e.value));
		setSelectedEvent(null);
	};

	const onEventChange = async (e) => {
		setSelectedEvent(e);
		props.setSelectedEvent(e);
	};

	return (
		<>
			<div className='bg-OccurYellow w-full rounded-md p-4'>
				<div>
					<p className='text-2xl font-medium'>View Registrations</p>
				</div>
				<div className='flex flex-col lg:flex-row w-full'>
					<div className='mt-4 lg:mr-4 w-full'>
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
					<div className='mt-4 w-full'>
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
				</div>
				{/* <div className="mt-4">
          <button
            className="hover:shadow-md bg-lightYellow hover:bg-[#f7e3a1] shadow-md transition-all duration-100 text-black"
            onClick={handleClick}
          >
            VIEW REGISTERATIONS
          </button>
        </div> */}
			</div>
		</>
	);
};

export default SelectEventToViewEventRegisterations;
