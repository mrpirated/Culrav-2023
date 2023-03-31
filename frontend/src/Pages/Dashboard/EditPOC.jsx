import React from "react";
import AdminDataList from "./Admin/AdminDataList";
import AddPoc from "./Admin/AddPoc";
function EditPOC(props) {
	const { pocs, setRefreshList, commitee, commiteeEvents } = props;
	return (
		<div className='flex flex-row w-full'>
			<div className='w-full'>
				<AdminDataList
					type={"poc"}
					setRefreshList={setRefreshList}
					data={pocs}
				/>
			</div>
			<div className='w-full'>
				<AddPoc commitee={commitee} setRefreshList={setRefreshList} />
			</div>
		</div>
	);
}

export default EditPOC;
