import React from "react";
import AdminDataList from "./AdminDataList";
import AddEc from "./AddEc";
import { useSelector } from "react-redux";
function EditEC(props) {
	const auth = useSelector((state) => state.auth);
	const { ecs, setRefreshList, commitee, commiteeEvents } = props;
	return (
		<div className='flex flex-col md:flex-row w-full '>
			<div className='w-full mt-4 p-2'>
				<AdminDataList
					type={"ec"}
					setRefreshList={setRefreshList}
					data={
						auth.user.type === "FS" ||
						auth.user.type === "ADMIN" ||
						auth.user.type === "TECHLEAD"
							? ecs
							: ecs.filter((e) => auth.poc.includes(e.commitee_id))
					}
				/>
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
