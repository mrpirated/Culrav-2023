import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EventInfo from "./EventInfo";
// import Anunaad from "./Assests/anunaad.jpg";

function Eventcomponent(props) {
  const [subevent, setSubevent] = useState(0);
  const [event, setEvent] = useState(props.eventTitle);
  const [display, setdisplay] = useState(false);

  const handleEvent = () => {
    setEvent(props.japanese);
  };

  const handleExitEvent = () => {
    setEvent(props.eventTitle);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSubevent((subevent) => (subevent + 1) % props.subevents.length);
    }, 800);
    return () => clearInterval(interval);
  });

  const handleClick = () => {
    setdisplay(!display);
  };

  var delayArray = [0.4, 0.6, 0.8, 0.7, 0.5];

  return (
    <>
      <motion.div
        className="m-2 cursor-pointer"
        onClick={handleClick}
        whileInView={{ y: [150, 0], opacity: [0, 1] }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: delayArray[Math.floor(Math.random() * delayArray.length)],
        }}
      >
        <div
          className="flex w-[90vw] md:w-[40vw] lg:w-[27vw] xl:w-[29vw] h-[200px] shadow-lg relative"
          onMouseOver={handleEvent}
          onMouseOut={handleExitEvent}
        >
          <img
            src={require(`${props.image}`)}
            className="w-full h-full object-cover hover:blur-sm transition-[3s] duration-300"
            alt=""
          />
          <p
            className="absolute text-white text-2xl md:text-4xl top-[50%] left-[50%] font-extrabold "
            style={{ transform: "translate(-50%, -50%)" }}
          >
            {event}
          </p>
        </div>
        <div className="flex bg-red text-brown mt-1 w-auto h-[100px] justify-center items-center text-xl md:text-2xl shadow-lg font-extrabold">
          <motion.p>{props.subevents[subevent]}</motion.p>
        </div>
      </motion.div>
      {display && <EventInfo {...props} handleClick={handleClick} />}
    </>
  );
}

export default Eventcomponent;
