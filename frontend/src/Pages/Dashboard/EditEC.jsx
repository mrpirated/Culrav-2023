import React from "react";
import AdminDataList from "./AdminDataList";
import AddEc from "./AddEc";
function EditEC(props) {
	const { ecs, setRefreshList, commitee, commiteeEvents } = props;
	return (
		<div className='flex flex-col md:flex-row w-full '>
			<div className='w-full mt-4 p-2'>
				<AdminDataList type={"ec"} setRefreshList={setRefreshList} data={ecs} />
			</div>
			<div className='w-full mt-4 p-2 md:w-[80%] md:mx-4'>
				<AddEc
					commitee={commitee}
					commiteeEvents={commiteeEvents}
					setRefreshList={setRefreshList}
				/>
			</div>
		</div>
	);
}

export default EditEC;
