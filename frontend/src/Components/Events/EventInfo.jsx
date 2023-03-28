import React, { useState, useEffect } from "react";
import axios, * as others from "axios";
import { motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import Team from "./Team";
import EventCard from "./EventCard";
import getCommiteeEventsAPI from "../../api/getCommiteeEventsAPI";
import Spinner from "../../Pages/Dashboard/Spinner";
let container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function EventInfo(props) {
  const [subevent, setSubevent] = useState([]);
  const [loading, setLoading] = useState(false);

  const width = window.screen.width;
  let initial = "hidden";
  let animate = "visible";
  let transition = "";
  if (width < 1024) {
    initial = { y: 100, opacity: 0 };
    animate = { y: 0, opacity: 1 };
    transition = { ease: "linear", duration: 0.3 };
  }

  const getEventsData = async () => {
    await getCommiteeEventsAPI({ commitee_id: props.commitee_id }).then(
      (response) => {
        setSubevent(response.data);
      }
    );
    setLoading(false);
  };

  useEffect(() => {
    getEventsData();
    setLoading(true);
  }, []);

  return (
    <>
      <div
        id="blur"
        className="fixed w-screen h-screen z-40 top-0 left-0"
        onClick={props.handleClick}
      ></div>
      <div
        className="fixed w-[90vw] md:w-[80vw] h-[80vh] bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] top-[50%] left-[50%] z-40 rounded-md"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {width > 1024}
        <motion.div
          variants={container}
          initial={initial}
          animate={animate}
          transition={transition}
          className="flex flex-col w-full h-full shadow-lg overflow-auto"
        >
          <div className="relative flex flex-col w-full h-auto">
            <div className="fixed top-[-4px] right-3 z-50 p-2 md:p-4">
              <IconButton
                color="primary"
                aria-label="Close"
                fontSize="large"
                onClick={props.handleClick}
              >
                <CancelRoundedIcon />
              </IconButton>
            </div>
            <div className="flex flex-col items-center w-full h-auto md:flex-row">
              <div className=" w-full md:w-[50%] md:h-full p-6 relative">
                <img
                  src={props.imgurl}
                  alt={`${props.name} image`}
                  className="object-cover w-full h-full rounded-lg shadow-md"
                />
                <div
                  className="absolute text-white  top-[80%] left-[50%] "
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <p
                    className={`text-2xl lg:text-4xl font-extrabold ${
                      props.name === "Anunaad" ? "text-black" : "text-white"
                    }`}
                    style={{ fontFamily: "japan" }}
                  >
                    {props.name.toUpperCase()}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[50%] h-auto p-6">
                <motion.p variants={item} className="text-xl font-bold my-2 italic">
                  {props.tagline}
                </motion.p>
                <motion.p variants={item} className="md:text-xl my-4">
                  {props.commitee_description}
                </motion.p>
              </div>
            </div>
            <div className="flex justify-center">
              <p className="text-xl mt-[40px] mb-[-10px] font-bold lg:text-3xl ">
                Events Under {props.name}
              </p>
            </div>
            <div className="p-2 md:p-10 flex flex-row flex-wrap justify-center">
              {loading && (
                <div className="my-8">
                  <Spinner />
                </div>
              )}
              {subevent.map((element) => {
                return <EventCard {...element} />;
              })}
            </div>
            {/* <div className="flex justify-center">
              <p className="text-xl font-bold lg:text-3xl ">
                {props.name} COORDINATORS
              </p>
            </div> */}
            {/* <div className="flex flex-row flex-wrap justify-center">
              <Team />
              <Team />
              <Team />
            </div> */}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default EventInfo;
