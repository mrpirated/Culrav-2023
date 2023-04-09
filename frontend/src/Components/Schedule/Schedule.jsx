import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AttractionsIcon from "@mui/icons-material/Attractions";

import Icon from "./entertainment.jpg";
import ScheduleComponent from "./ScheduleComponent";

const DisplayIcon = () => {
  return <img src={Icon} className="h-10 w-10"></img>;
};

const Schedule = () => {
  return (
    <div className="mt-[100px]">
      <h1 className="text-darker mb-[30px] text-center pt-[20px] md:pt-[50px] pb-[20px] md:pb-[40px] text-[40px] font-bold tracking-wide japanFont">
        SCHEDULE
      </h1>
      <VerticalTimeline>
        <ScheduleComponent
          date="2008 - 2010"
          heading="Web Designer"
          subheading="Los Angeles, CA"
          para="User Experience, Visual Design"
          highlighted={true}
        />
        <ScheduleComponent
          date="2006 - 2008"
          heading="Web Designer"
          subheading="San Francisco, CA"
          para="User Experience, Visual Design"
          highlighted={false}
        />
        <ScheduleComponent
          date="April 2013"
          heading="Content Marketing for Web, Mobile and Social Media"
          subheading="Online Course"
          para="Strategy, Social Media"
          highlighted={true}
        />
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<DisplayIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<DisplayIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<DisplayIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<DisplayIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Schedule;
