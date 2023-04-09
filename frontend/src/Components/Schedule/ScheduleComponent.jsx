import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AttractionsIcon from "@mui/icons-material/Attractions";

const ScheduleComponent = (props) => {
  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={
          props.highlighted
            ? {
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }
            : {
                background: "rgb(255,255,255)",
                color: "#000000",
              }
        }
        contentArrowStyle={
          props.highlighted
            ? { borderRight: "7px solid  rgb(33, 150, 243)" }
            : { borderRight: "7px solid  rgb(255, 255, 255)" }
        }
        date={props.date ? props.date : ""}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<AttractionsIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          {props.heading ? props.heading : ""}
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          {props.subheading ? props.subheading : ""}
        </h4>
        <p>{props.para ? props.para : ""}</p>
      </VerticalTimelineElement>
    </>
  );
};

export default ScheduleComponent;
