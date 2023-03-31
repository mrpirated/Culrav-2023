import React, { useState, useEffect } from "react";
import axios, * as others from "axios";
import { motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import TeamEvent from "./TeamEvent";
import EventCard from "./EventCard";
import getCommiteeEventsAPI from "../../api/getCommiteeEventsAPI";
import Spinner from "../../Pages/Dashboard/Spinner";
import img from "./Assests/cardTop.webp";
import getImageAPI from "../../api/getImageAPI";

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

function EventDetails(props) {
  const [image, setImage] = useState("../../Pages/Team/Assets/Background.png");
  const [subevent, setSubevent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tagline, setTagline] = useState("");

  console.log("Event Details", props);
  console.log("Tagline", props.event_tagline);
  const width = window.screen.width;
  let initial = "hidden";
  let animate = "visible";
  let transition = "";
  if (width < 1024) {
    initial = { y: 100, opacity: 0 };
    animate = { y: 0, opacity: 1 };
    transition = { ease: "linear", duration: 0.3 };
  }

  const getImage = async () => {
    setImage(getImageAPI("event", props.event_id));
  };

  useEffect(() => {
    getImage();
  }, []);

  const getEventsData = async () => {
    await getCommiteeEventsAPI({ commitee_id: props.commitee_id }).then(
      (response) => {
        setSubevent(response.data);
        console.log(response.data);
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
        // id="blur"
        className="fixed w-screen h-screen z-40 top-0 left-0"
        onClick={props.handleClose}
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
                // onClick={props.handleClose}
              >
                <CancelRoundedIcon />
              </IconButton>
            </div>
            <div className="flex flex-col items-center w-full h-auto md:flex-row">
              <div className=" w-full md:w-[50%] md:h-full p-6 relative">
                <img
                  // src={props.imgurl}
                  src={image ? image : img}
                  alt={`${props.name} image`}
                  className="object-cover w-full h-full rounded-lg shadow-md"
                />
                <div
                  className="absolute text-white  top-[80%] left-[50%] "
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <p
                    className={`text-2xl text-center pl-[40px] pr-[40px] lg:text-4xl font-extrabold text-white`}
                    style={{ fontFamily: "japan" }}
                  >
                    {props.name.toUpperCase()}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[50%] pl-[20px] pr-[40px] h-auto p-6">
                <motion.p
                  variants={item}
                  className="text-xl text-center ml-[10px] mr-[10px] my-2 font-bold italic"
                >
                  {props.event_tagline}
                </motion.p>
                <motion.p
                  variants={item}
                  className="md:text-[15px] text-center my-4"
                >
                  {props.event_description}
                </motion.p>
                <motion.p
                  variants={item}
                  className="md:text-xl text-center my-4"
                >
                  <span className="font-bold mr-[10px]">TEAM SIZE:</span>
                  {props.min_team_members === props.max_team_members
                    ? `${props.min_team_members}`
                    : `${props.min_team_members} TO ${props.max_team_members}`}
                </motion.p>
                <div
                  // id="EventRegister"
                  className="hidden md:block pl-[80px] pr-[80px]"
                >
                  <button id="EventRegister">REGISTER</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-2xl ml-[20px] mr-[20px] text-center xlsm:mt-[5px] xs:mt-[5px] xlsm:mb-[13px] xs:mb-[13px] md:mt-[25px] md:mb-[-15px] uppercase mt-[40px] mb-[-10px] font-bold lg:text-3xl ">
              RULES
            </p>
          </div>

          <div className="p-2 md:p-10 flex flex-row flex-wrap justify-center">
            {loading && (
              <div className="my-8">
                <Spinner />
              </div>
            )}

            {/* {subevent.map((element) => {
                return <EventCard {...element} />;
              })} */}
            <div className="pl-[50px] pr-[50px]">{props.rules}</div>
            {/* <div className="flex justify-center">
              <p className="text-2xl mb-[5px] text-center ml-[20px] mr-[20px] xlsm:mt-[50px] xs:mt-[50px] md:mt-[50px] xl:mb-[15px] md:mb-[5px] uppercase font-bold lg:text-3xl ">
                {props.name} COORDINATORS
              </p>
            </div>
            <div className="flex flex-row flex-wrap justify-center mb-3">
              <TeamEvent />
              <TeamEvent />
              <TeamEvent />
            </div> */}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default EventDetails;
