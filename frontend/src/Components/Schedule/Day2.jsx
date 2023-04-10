import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CelebrationIcon from "@mui/icons-material/Celebration";
import ScheduleComponent from "./ScheduleComponent";

const circleColor = "#EECE05"

const Day2 = () => {
  return (
    <>
      <VerticalTimeline>
        <ScheduleComponent
          date="9:00am-11:00am"
          heading="Poetry Slam"
          subheading="(Litmuse)"
          para="GS Rooms"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="9:00am-11:30am"
          heading="Hasyamanch"
          subheading="(Rangmanch)"
          para="Culrav Arena"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="10:00am-12:00pm"
          heading="Momento Vinci"
          subheading="(Rangsaazi)"
          para="PAN College"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="10:00am-1:30pm"
          heading="The Vault of Dance"
          subheading="(Razzmatazz)"
          para="MP Hall"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="11:00am-1:00pm"
          heading="Samsung-Solve for Tommorrow"
          subheading="(IIC Session)"
          para="Seminar Hall"
          highlighted={false}
          color={circleColor}
        />
        {/* <ScheduleComponent
          date="10:00am-2:00pm"
          heading="Desi Sync"
          subheading="(Razzmatazz)"
          para="MP Hall"
          highlighted={false}
          color={circleColor}
        /> */}
        <ScheduleComponent
          date="11:00pm-2:00pm"
          heading="Euphony"
          subheading="(Anunaad)"
          para="Gymkhana Ground"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="11:30am-1:00am"
          heading="Spell Bee"
          subheading="(Litmuse)"
          para="NLHC-1"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="12:00pm-3:00pm"
          heading="Swaddle"
          subheading="(Rangsaazi)"
          para="Culrav Arena"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="2:00pm-5:00pm"
          heading="One Mic Stand"
          subheading=""
          para="MP Hall"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="2:00pm-4:00pm"
          heading="Rocktave"
          subheading="(Anunaad)"
          para="Gymkhana Ground"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="2:00pm-5:00pm"
          heading="Pratibimb"
          subheading="(Rangmanch)"
          para="Seminar Hall"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="5:00pm-6:00pm"
          heading="Dastan-e-Goi"
          subheading="(Himanshu Bajpai)"
          para="MP Hall"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="7:30pm- 9:55pm"
          heading="Bollywood Night"
          subheading="(Anurag Halder)"
          para="Gymkhana Ground"
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

export default Day2;
