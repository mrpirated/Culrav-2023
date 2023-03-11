import React from "react";
// import "./Events.css";
import AnimatedText from "./AnimatedText";
import data from "./data.js";
import Eventcomponent from "./Eventcomponent";

function Events() {
  let width = window.screen.width;
  let textSize = "48px";
  if (width > 768) textSize = "60px";
  console.log(textSize);
  return (
    <div className="events px-4 md:px-12 box-border">
      <div className="text-dark my-4">
        <AnimatedText textSize={textSize} />
      </div>

      <div className="mx-4 flex flex-row flex-wrap justify-around">
        {data.map((element) => (
          <Eventcomponent
            key={element.EventName}
            subevents={element.subevents}
            eventTitle={element.EventName}
            image={element.image}
            japanese={element.japanese}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
