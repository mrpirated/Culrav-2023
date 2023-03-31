import React from "react";
import AdminDataList from "./Admin/AdminDataList";
import AddPoc from "./Admin/AddPoc";
function EditPOC(props) {
	const { pocs, setRefreshList, commitee, commiteeEvents } = props;
	return (
		<div className='flex flex-col md:flex-row w-full '>
			<div className='w-full flex jusitfy-center'>
				<AdminDataList
					type={"poc"}
					setRefreshList={setRefreshList}
					data={pocs}
				/>
			</div>
			<div className='w-[90%] md:w-[80%] md:mx-4'>
				<AddPoc commitee={commitee} setRefreshList={setRefreshList} />
			</div>
		</div>
	);
}

export default EditPOC;
