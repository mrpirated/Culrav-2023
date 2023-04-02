import React from "react";
import AddEc from "./AddEc";
import Event from "./Event";
function EditEvent(props) {
	const { commitee, commiteeEvents } = props;
	return (
		<div className='bg-OccurYellow w-[95%] md:w-[80%] lg:w-1/2 m-2 p-4 shadow-md h-[600px] box-border overflow-auto rounded-md '>
			<div className='w-full mt-4 p-2 '>
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
