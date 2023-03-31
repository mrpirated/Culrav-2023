import React from "react";
import AdminDataList from "./Admin/AdminDataList";
import AddEc from "./Admin/AddEc";
function EditEC(props) {
	const { ecs, setRefreshList, commitee, commiteeEvents } = props;
	return (
		<div className='flex flex-row w-full'>
			<div className='w-full'>
				<AdminDataList type={"ec"} setRefreshList={setRefreshList} data={ecs} />
			</div>
			<div className='w-full'>
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
