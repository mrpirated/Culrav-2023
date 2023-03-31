import React from "react";
import AdminDataList from "./AdminDataList";
import AddPoc from "./AddPoc";
function EditPOC(props) {
	const { pocs, setRefreshList, commitee, commiteeEvents } = props;
	return (
		<div className='flex flex-col md:flex-row w-full '>
			<div className='w-full mt-4 p-2'>
				<AdminDataList
					type={"poc"}
					setRefreshList={setRefreshList}
					data={pocs}
				/>
			</div>
			<div className='w-full mt-4 p-2 md:w-[80%] md:mx-4'>
				<AddPoc commitee={commitee} setRefreshList={setRefreshList} />
			</div>
		</div>
	);
}

export default EditPOC;
