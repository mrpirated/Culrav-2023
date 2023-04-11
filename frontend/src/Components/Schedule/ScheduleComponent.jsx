import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AttractionsIcon from "@mui/icons-material/Attractions";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { Icon } from "@mui/material";
import Drams from "./Drams";
const ScheduleComponent = (props) => {
  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work justify"
        contentStyle={{
          background: props.color,
          color: "#000000",
          border: "2px solid ",
          borderRadius: "25px",
        }}
        contentArrowStyle={
          props.highlighted
            ? { borderRight: "7px solid" + props.color }
            : { borderRight: "7px solid  rgb(255, 255, 255)" }
        }
        iconStyle={{
          background: props.color,
          color: "#000",
        }}
        icon={
          props.subheading === "(Anunaad)" ? (
            <MusicNoteIcon />
          ) : props.subheading === "(Rangsaazi)" ? (
            <ColorLensIcon />
          ) : props.subheading === "(Rangmanch)" ? (
            <Drams />
          ) : (
            <AttractionsIcon />
          )
        }
      >
        <div className="flex mb-[10px]">
          <EventAvailableIcon />
          <span className="ml-[10px]">
            <span className="vertical-timeline-element-title font-bold">
              {props.heading ? props.heading : ""}
            </span>
            <span className="vertical-timeline-element-subtitle font-bold">
              {props.subheading ? props.subheading : ""}
            </span>
          </span>
        </div>
        <div className="flex items-center mt-1 mb-[10px]">
          <div className="font-bold flex items-center justify-center">
            <PlaceIcon />
            <span className="ml-[10px]">{props.para ? props.para : ""}</span>
          </div>
        </div>
        <div className="flex items-center mt-1">
          <div className="font-bold flex items-center justify-center">
            <AccessTimeIcon />
            <span className="ml-[10px]">{props.date ? props.date : ""}</span>
          </div>
        </div>
      </VerticalTimelineElement>
    </>
  );
};

export default ScheduleComponent;
