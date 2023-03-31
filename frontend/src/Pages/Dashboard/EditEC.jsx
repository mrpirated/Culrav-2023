import React from "react";
import AdminDataList from "./Admin/AdminDataList";
import AddEc from "./Admin/AddEc";
function EditEC(props) {
	const { ecs, setRefreshList, commitee, commiteeEvents } = props;
	return (
		<div className='flex flex-row w-full p-2'>
			<div className='w-full'>
				<AdminDataList type={"ec"} setRefreshList={setRefreshList} data={ecs} />
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

export default EditEC;
