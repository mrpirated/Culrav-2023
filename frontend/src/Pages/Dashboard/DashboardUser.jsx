import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminPanel from "./AdminPanel";
import { setLoading } from "../../store/auth";
import getAllECsAPI from "../../api/getAllECsAPI";
import getCommiteesAPI from "../../api/getCommiteesAPI";
import getCommiteeEventsAPI from "../../api/getCommiteeEventsAPI";
import ProfileSectionInDashboard from "./ProfileSectionInDashboard";
import UserProfile from "./UserProfile";
import EditEC from "./EditEC";
import EditPOC from "./EditPOC";
import EditEvent from "./EditEvent";
const DashboardEC = (props) => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const { type, setType } = props;
	// const [type, setType] = useState("profile");
	// const [ecs, setEcs] = useState([]);
	// const [refreshList, setRefreshList] = useState(false);
	// const [commitee, setCommitee] = useState([]);
	// const [commiteeEvents, setCommiteeEvents] = useState({});
	// const [ecCommitee, setEcCommitee] = useState([]);
	// const [ecEvent, setEcEvent] = useState({});
	// useEffect(() => {
	// 	dispatch(setLoading({ loading: true }));
	// 	getAllECsAPI()
	// 		.then((response) => {
	// 			setEcs(response.data);
	// 		})
	// 		.finally(() => {
	// 			dispatch(setLoading({ loading: false }));
	// 			setRefreshList(false);
	// 		});
	// 	//   getAllECsAPI().then((response)=>{
	// 	// 	setEcs(response.data)
	// 	//   }).finally(() => {
	// 	//     dispatch(setLoading({ loading: false }));
	// 	//     setRefreshList(false);
	// 	//   });
	// }, [refreshList]);
	// useEffect(() => {
	// 	dispatch(setLoading({ loading: true }));

	// 	getCommiteesAPI()
	// 		.then((response) => {
	// 			const options = [];
	// 			const eventFetches = [];
	// 			response.data.forEach((element) => {
	// 				eventFetches.push(
	// 					getCommiteeEventsAPI({ commitee_id: element.commitee_id })
	// 				);
	// 				options.push({
	// 					value: element.commitee_id,
	// 					label: element.name,
	// 				});
	// 			});
	// 			setCommitee(options);
	// 			return Promise.all(eventFetches);
	// 		})
	// 		.then((response) => {
	// 			const commiteeEvents = {};
	// 			response.forEach((res, key) => {
	// 				commiteeEvents[key + 1] = [];
	// 				res.data.forEach((e) => {
	// 					commiteeEvents[key + 1].push({
	// 						value: e.event_id,
	// 						label: e.name,
	// 					});
	// 				});
	// 			});
	// 			console.log(commiteeEvents);
	// 			setCommiteeEvents(commiteeEvents);
	// 			return getAllECsAPI();
	// 		})
	// 		.then((response) => {
	// 			setEcCommitee(
	// 				response.data
	// 					.filter((e) => e.ec_id === auth.user.user_id)
	// 					.map((e) => e.commitee_id)
	// 			);
	// 		})
	// 		.finally(() => {
	// 			dispatch(setLoading({ loading: false }));
	// 		});
	// }, []);

	return (
		// bg-[#263544]
		<>
			<div className='bg-[#fff1c5]'>
				<div className='md:flex-row flex flex-col relative '>
					{/* left dashboard  */}
					<div className=' left w-[20%] h-screen bg-[#F5BE8A] shadow-md hidden lg:block'>
						<ProfileSectionInDashboard
							type='PROFILE'
							onClick={() => {
								setType("profile");
							}}
							check={type}
						/>
						{/* <AdminPanel
							type='Edit Event'
							onClick={() => setType("edit event")}
							check={type}
						/> */}
					</div>
					{type === "profile" && (
						<div className='flex flex-row w-full justify-center h-screen lg:h-auto'>
							<UserProfile />
						</div>
					)}
					{/* {type === "edit event" && (
						<div className='flex flex-row w-full'>
							<EditEvent
								setRefreshList={setRefreshList}
								commitee={commitee.filter((e) => ecCommitee.includes(e.value))}
								commiteeEvents={commiteeEvents}
							/>
						</div>
					)} */}
				</div>
			</div>
		</>
	);
};

export default DashboardEC;
