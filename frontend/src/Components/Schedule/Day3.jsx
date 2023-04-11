import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CelebrationIcon from "@mui/icons-material/Celebration";
import ScheduleComponent from "./ScheduleComponent";

const circleColor = "#ccffcc";

const Day3 = () => {
	return (
		<>
			<VerticalTimeline>
				<ScheduleComponent
					date='10:00am-12:30pm'
					heading='Doodle Caboodle'
					subheading='(Rangsaazi)'
					para='GS Rooms'
					highlighted={false}
					color={circleColor}
				/>
				<ScheduleComponent
					date='10:00am-1:00pm'
					heading='Harmony + Vadya'
					subheading='(Anunaad)'
					para='MP Hall'
					highlighted={false}
					color={circleColor}
				/>
				<ScheduleComponent
					date='10:00am-12:00pm'
					heading='Picture Tale'
					subheading='(Darkroom)'
					para='Sem Hall'
					highlighted={false}
					color={circleColor}
				/>
				<ScheduleComponent
					date='10:00am-2:30pm'
					heading='Nukkad'
					subheading='(Rangmanch)'
					para='Culrav Arena'
					highlighted={false}
					color={circleColor}
				/>
				<ScheduleComponent
					date='12:00pm-3:00pm'
					heading='Revel'
					subheading='(Razzmatazz)'
					para='Seminar Hall'
					highlighted={false}
					color={circleColor}
				/>
				<ScheduleComponent
					date='12:30pm-2:00pm'
					heading='Junk Arts'
					subheading='(Rangsaazi)'
					para='GS Rooms'
					highlighted={false}
					color={circleColor}
				/>
				<ScheduleComponent
					date='2:00pm-6:00pm'
					heading='Desfile de moda'
					subheading='(Spandan)'
					para='MP Hall'
					highlighted={false}
					color={circleColor}
				/>
				<ScheduleComponent
					date='2:00pm-6:00pm'
					heading='Mr. & Miss Spandan'
					subheading=''
					para='MP Hall'
					highlighted={false}
					color={circleColor}
				/>
				<ScheduleComponent
					date='2:30pm-4:30pm'
					heading='Blind Arts'
					subheading='(Rangsaazi)'
					para='NLHC-1'
					highlighted={false}
					color={circleColor}
				/>
				<ScheduleComponent
					date='3:00pm-4:30pm'
					heading='Ijaad'
					subheading='(Anunaad)'
					para='Culrav Arena'
					highlighted={false}
					color={circleColor}
				/>
				<ScheduleComponent
					date='3:00 PM-5:00 PM'
					heading='Sales Pitch'
					subheading='(Darkroom)'
					para='Sem Hall'
					highlighted={false}
					color={circleColor}
				/>
				<ScheduleComponent
					date='4:30pm-6:30pm'
					heading='Dance Battle'
					subheading='(Razzmatazz)'
					para='Culrav Arena'
					highlighted={false}
					color={circleColor}
				/>
				<ScheduleComponent
					date='7:30pm- 9:55pm'
					heading='Celebrity Night'
					subheading='(Shalmali Kholgade)'
					para='Gymkhana Ground'
					highlighted={true}
					color={circleColor}
				/>

				<VerticalTimelineElement
					iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
					icon={<CelebrationIcon />}
				/>
			</VerticalTimeline>
		</>
	);
};

export default Day3;
