import React from "react";
import AdminDataList from "./Admin/AdminDataList";
import AddEc from "./Admin/AddEc";
import Event from "./Event";
function EditEvent(props) {
	const { ecs, setRefreshList, commitee, commiteeEvents } = props;
	return (
		<div className='flex flex-row w-full'>
			<div className='w-full'>
				<Event />
			</div>
			<div className='w-[80%] mx-4'>
				<AddEc
					commitee={commitee}
					commiteeEvents={commiteeEvents}
					setRefreshList={setRefreshList}
				/>
			</div>
		</div>
	);
}

export default EditEvent;
