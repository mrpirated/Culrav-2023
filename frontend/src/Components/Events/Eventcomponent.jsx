import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EventInfo from "./EventInfo";

function Eventcomponent(props) {
  const [subevent, setSubevent] = useState(0);
  const [width, setWidth] = useState(0);
  const [event, setEvent] = useState(props.eventTitle);
  const [display, setdisplay] = useState(false);

  const handleEvent = () => {
    setEvent(props.japanese);
    setWidth(100);
  };

  const handleExitEvent = () => {
    setEvent(props.eventTitle);
    setWidth(0);
  };

  const getEventsData = async () => {
    console.log("called");
    const data = await fetch(
      `http://culrav.online:5008/api/getCommiteeEvents?commitee_id=${props.commitee_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization":
            'Bearer ' +"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzkxNjY2NzgsImV4cCI6MTY4MTc1ODY3OH0.4QQWu1BvkqmSXDLl3pslsz34OtFRuccRNWpNCTRMDck",
        },
      }
    );

    const parsedData = data.json();
    console.log(parsedData);
  };

  useEffect(() => {
    getEventsData();
    // console.log("called");
  }, []);

  const handleClick = () => {
    setdisplay(!display);
  };

  var delayArray = [0.4, 0.6, 0.8, 0.7, 0.5];

  return (
    <>
      <motion.div
        className="m-2 cursor-pointer card"
        onClick={handleClick}
        whileInView={{ y: [150, 0], opacity: [0, 1] }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          delay: delayArray[Math.floor(Math.random() * delayArray.length)],
        }}
      >
        <div
          className="relative w-[90vw] md:w-[40vw] lg:w-[27vw] xl:w-[29vw] h-[220px] shadow-2xl"
          onMouseOver={handleEvent}
          onMouseOut={handleExitEvent}
        >
          <img
            src={require(`${props.image}`)}
            className="w-full h-full object-cover hover:blur-sm transition-[3s] duration-300"
            alt=""
          />
          <div
            className={`absolute top-0 left-0 w-[${width}%] h-full z-10 overflow-hidden bg-off opacity-[0.85] transition-all duration-[400ms]`}
          >
            {props.subevents.map((element) => {
              return <p className="m-1 text-center text-black">{element}</p>;
            })}
          </div>
        </div>
        <div
          className="flex bg-red text-brown mt-1 w-auto h-[100px] justify-center items-center text-2xl md:text-3xl shadow-2xl font-extrabold"
          onMouseOver={handleEvent}
          onMouseOut={handleExitEvent}
        >
          <p>{event}</p>
        </div>
      </motion.div>
      {display && <EventInfo {...props} handleClick={handleClick} />}
    </>
  );
}

export default Eventcomponent;
