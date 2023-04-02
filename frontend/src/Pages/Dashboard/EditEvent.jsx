import React from "react";
import AddEc from "./AddEc";
import Event from "./Event";
function EditEvent(props) {
	const { setRefreshList, commitee, commiteeEvents } = props;
	return (
		<div className='flex flex-col md:flex-row w-full '>
			<div className='w-full m-4 p-2 '>
				<Event commitee={commitee} commiteeEvents={commiteeEvents} />
			</div>
			{/* <div className='w-full mt-4 p-2 md:w-[80%] md:mx-4'>
				<AddEc
					commitee={commitee}
					commiteeEvents={commiteeEvents}
					setRefreshList={setRefreshList}
				/>
			</div> */}
		</div>
	);
}

export default EditEvent;
