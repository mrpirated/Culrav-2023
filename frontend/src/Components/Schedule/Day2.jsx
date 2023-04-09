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
          para="Bikaner"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="10:00am-12:00pm"
          heading="Momento Vinc"
          subheading="(Rangsaazi)"
          para="PAN College"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="10:00am-2:00pm"
          heading="Desi Sync"
          subheading="(Razzmatazz)"
          para="MP Hall"
          highlighted={false}
          color={circleColor}
        />
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
          para="Arena/Bikaner/NLHC-2"
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
          subheading=""
          para="MP Hall"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="7:30pm- 9:30pm"
          heading="Pro Nite(Celebrity/DJ)"
          subheading=""
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
