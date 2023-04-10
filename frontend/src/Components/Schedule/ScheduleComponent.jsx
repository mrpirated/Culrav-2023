import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AttractionsIcon from "@mui/icons-material/Attractions";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ColorLensIcon from "@mui/icons-material/ColorLens";

const ScheduleComponent = (props) => {
  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={
          props.highlighted
            ? {
                background: props.color,
                color: "#fff",
              }
            : {
                background: "rgb(255,255,255)",
                color: "#000000",
              }
        }
        contentArrowStyle={
          props.highlighted
            ? { borderRight: "7px solid" + props.color }
            : { borderRight: "7px solid  rgb(255, 255, 255)" }
        }
        date={props.date ? props.date : ""}
        iconStyle={{ background: props.color, color: "#fff" }}
        icon={
          props.subheading === "(Anunaad)" ? (
            <MusicNoteIcon />
          ) : props.subheading === "(Rangsaazi)" ? (
            <ColorLensIcon />
          ) : (
            <AttractionsIcon />
          )
        }
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
