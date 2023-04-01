import React, { useEffect, useState } from "react";
import "./Events.css";
import AnimatedText from "./AnimatedText";
// import data from "./data.js";
import Eventcomponent from "./Eventcomponent";
import getCommiteesAPI from "../../api/getCommiteesAPI";
import getAllPOCsAPI from "../../api/getAllPOCsAPI";
import getAllECsAPI from "../../api/getAllECsAPI";
import getCommiteeEventsAPI from "../../api/getCommiteeEventsAPI";
function Events() {
	const [data, setData] = useState([]);
	const [pocs, setPocs] = useState([]);
	const [ecs, setEcs] = useState([]);
	const [eventData, setEventData] = useState({});
	useEffect(() => {
		var ed = {};
		getCommiteesAPI()
			.then((response) => {
				setData(response.data);
				const eventDatas = [];
				response.data.forEach((e) => {
					ed[e.commitee_id] = [];
					eventDatas.push(getCommiteeEventsAPI({ commitee_id: e.commitee_id }));
				});
				setEventData(ed);
				return Promise.all(eventDatas);
			})
			.then((response) => {
				response.forEach((e, key) => {
					ed[key + 1].push(e.data);
				});
				setEventData(ed);
				return getAllPOCsAPI();
			})
			.then((response) => {
				setPocs(response.data);
				return getAllECsAPI();
			})
			.then((response) => {
				setEcs(response.data);
			});
	}, []);
	let width = window.screen.width;
	let textSize = "60px";
	if (width > 640) textSize = "88px";
	return (
		<div className='events px-4 md:px-12 box-border'>
			<div className='text-darker ml-[10px] sm:ml-[25px] my-4'>
				<AnimatedText textSize={textSize} />
			</div>

			<div className='mx-4 flex flex-row flex-wrap justify-around'>
				{data.map((element) => (
					<Eventcomponent
						eventData={eventData}
						pocs={pocs}
						ecs={ecs}
						{...element}
					/>
				))}
			</div>
		</div>
	);
}

export default Events;
