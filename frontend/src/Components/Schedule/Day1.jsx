import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CelebrationIcon from "@mui/icons-material/Celebration";
import ScheduleComponent from "./ScheduleComponent";

const circleColor = "#2196F3";

const Day1 = () => {
  return (
    <>
      <VerticalTimeline>
        <ScheduleComponent
          date="8:00am-12:00pm"
          heading="Natyamanch"
          subheading="(Rangmanch)"
          para="MP Hall"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="9:00am-12:00pm"
          heading="Paint the way"
          subheading="(Rangsaazi)"
          para="Gymkhana/Athletics ground Road"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="10:00am-12:00pm"
          heading="Lacuzzi"
          subheading="(Litmuse)"
          para="NLHC-1"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="12:30pm-3:30pm"
          heading="The Vault of Dance"
          subheading="(Razzmatazz)"
          para="MP Hall"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="1:00pm-3:00pm"
          heading="Kavyanjaali"
          subheading="(Litmuse)"
          para="NLHC-1"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="1:00pm-3:30pm"
          heading="Let's Face it"
          subheading="(Rangsaazi)"
          para="Arena/Bikaner/NLHC-2"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="11:30am-3:00pm"
          heading="Voice of Culrav- Finals"
          subheading="(Anunaad)"
          para="Seminar Hall"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="3:00pm-4:30pm"
          heading="Maskhare"
          subheading="(Rangmanch)"
          para="Seminar Hall"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="4:30pm-5:00pm"
          heading="Inaugration Ceremony"
          subheading=""
          para="MP Hall"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="5:00pm-7:30pm"
          heading="Kavya Sandhya"
          subheading=""
          para="MP Hall"
          highlighted={false}
          color={circleColor}
        />
        <ScheduleComponent
          date="7:30pm-9:30pm"
          heading="Band Performance(Pronite)"
          subheading=""
          para="Gymkhana Ground"
          highlighted={false}
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

export default Day1;
