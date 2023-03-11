import React from "react";
import { TypeAnimation } from "react-type-animation";

function AnimatedText(props) {
  return (
    <TypeAnimation
      sequence={[
        "EVENTS", // Types 'One'
        5000, // Waits 1s
        "이벤트", // Deletes 'One' and types 'Two'
        3000, // Waits 2s
        "आयोजन", // Types 'Three' without deleting 'Two'
        3000,
        "イベント",
        3000,
        () => {},
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: props.textSize, fontWeight: 700 }}
    />
  );
}

export default AnimatedText;
