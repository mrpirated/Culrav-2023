import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminPanel from "./AdminPanel";
import getAllPocAPI from "../../api/getAllPOCsAPI";
import { setLoading } from "../../store/auth";
import getAllECsAPI from "../../api/getAllECsAPI";
import getCommiteesAPI from "../../api/getCommiteesAPI";
import getCommiteeEventsAPI from "../../api/getCommiteeEventsAPI";
import ProfileSectionInDashboard from "./ProfileSectionInDashboard";
import UserProfile from "./UserProfile";
import EditEC from "./EditEC";
import EditPOC from "./EditPOC";
import EditEvent from "./EditEvent";
import Myteams from "./Myteams";
import EventRegisterations from "./EventRegisterations";
const DashboardAdmin = (props) => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const { type, setType } = props;
	// const [type, setType] = useState("profile");
	const [pocs, setPocs] = useState([]);
	const [ecs, setEcs] = useState([]);
	const [refreshList, setRefreshList] = useState(false);
	const [commitee, setCommitee] = useState([]);
	const [commiteeEvents, setCommiteeEvents] = useState({});

	useEffect(() => {
		dispatch(setLoading({ loading: true }));
		getAllPocAPI()
			.then((response) => {
				setPocs(response.data);
				return getAllECsAPI();
			})
			.then((response) => {
				setEcs(response.data);
			})
			.finally(() => {
				dispatch(setLoading({ loading: false }));
				setRefreshList(false);
			});
		//   getAllECsAPI().then((response)=>{
		// 	setEcs(response.data)
		//   }).finally(() => {
		//     dispatch(setLoading({ loading: false }));
		//     setRefreshList(false);
		//   });
	}, [refreshList]);
	useEffect(() => {
		dispatch(setLoading({ loading: true }));
		getCommiteesAPI()
			.then((response) => {
				const options = [];
				const eventFetches = [];
				response.data.forEach((element) => {
					eventFetches.push(
						getCommiteeEventsAPI({ commitee_id: element.commitee_id })
					);
					options.push({
						value: element.commitee_id,
						label: element.name,
					});
				});
				setCommitee(options);
				return Promise.all(eventFetches);
			})
			.then((response) => {
				const commiteeEvents = [];
				response.forEach((res, key) => {
					res.data.forEach((e) => {
						commiteeEvents.push({
							value: e.event_id,
							label: e.name,
							commitee_id: e.commitee_id,
						});
					});
				});
				setCommiteeEvents(commiteeEvents);
			})
			.finally(() => {
				dispatch(setLoading({ loading: false }));
			});
	}, []);
	return (
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
						<AdminPanel
							type='POC'
							onClick={() => setType("poc")}
							check={type}
						/>
						<AdminPanel type='EC' onClick={() => setType("ec")} check={type} />
						<AdminPanel
							type='Edit Event'
							onClick={() => setType("edit event")}
							check={type}
						/>
						<AdminPanel
							type='My Teams'
							onClick={() => setType("my teams")}
							check={type}
						/>
						<AdminPanel
							type='EVENT REGISTERATIONS'
							onClick={() => setType("event registerations")}
							check={type}
						/>
					</div>
					{type === "ec" && (
						<div className='flex flex-row w-full'>
							<EditEC
								ecs={ecs}
								setRefreshList={setRefreshList}
								commitee={commitee}
								commiteeEvents={commiteeEvents}
							/>
						</div>
					)}
					{type === "poc" && (
						<div className='flex flex-row w-full'>
							<EditPOC
								pocs={pocs}
								setRefreshList={setRefreshList}
								commitee={commitee}
							/>
						</div>
					)}
					{type === "profile" && (
						<div className='flex flex-row w-full justify-center h-screen lg:h-auto'>
							<UserProfile userData={auth.user} />
						</div>
					)}
					{type === "edit event" && (
						<div className='flex flex-row w-full justify-center h-screen lg:h-auto'>
							<EditEvent commitee={commitee} commiteeEvents={commiteeEvents} />
						</div>
					)}
					{type === "my teams" && (
						<div className='flex flex-row w-full justify-center h-screen lg:h-auto'>
							<Myteams />
						</div>
					)}
					{type === "event registerations" && (
						<div className='flex flex-row w-full justify-center h-screen lg:h-auto'>
							<EventRegisterations />
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default DashboardAdmin;
