import React, { useEffect, useState } from "react";
import "./Events.css";
import AnimatedText from "./AnimatedText";
// import data from "./data.js";
import Eventcomponent from "./Eventcomponent";
import getCommiteesAPI from "../../api/getCommiteesAPI";

function Events() {
  const [data, setData] = useState([]);

  const fetchCommiteeData = async () => {
    const response = await getCommiteesAPI();
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    fetchCommiteeData();
  }, []);

  let width = window.screen.width;
  let textSize = "60px";
  if (width > 640) textSize = "88px";
  console.log(textSize);
  return (
    <div className="events px-4 md:px-12 box-border">
      <div className="text-darker ml-[10px] sm:ml-[25px] my-4">
        <AnimatedText textSize={textSize} />
      </div>

      <div className="mx-4 flex flex-row flex-wrap justify-around">
        {data.map((element) => (
          <Eventcomponent {...element} />
        ))}
      </div>
    </div>
  );
}

export default Events;
