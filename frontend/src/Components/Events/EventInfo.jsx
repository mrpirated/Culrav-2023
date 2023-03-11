import React from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import Team from "./Team";

const container = {
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
  return (
    <>
      <div
        className="fixed top-0 left-0 z-40 w-screen h-screen "
        onClick={props.handleClick}
      ></div>
      <div
        className="fixed w-[90vw] h-[80vh] bg-off top-[50%] left-[50%] z-50"
        style={{ transform: "translate(-50%, -50%)"}}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col w-full h-full overflow-auto shadow-lg"
        >
          <div className="relative flex flex-col w-full h-auto">
            <div className="fixed top-0 right-0 z-50 p-2 md:p-4">
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
                  src={require(`${props.image}`)}
                  alt=""
                  className="object-cover w-full h-full"
                />
                <div
                  className="absolute text-white  top-[80%] left-[50%] "
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <p className="text-2xl font-extrabold lg:text-4xl ">
                    {props.eventTitle.toUpperCase()}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[50%] h-auto p-6">
                <p className="my-2 text-xl font-bold">
                  "quote of this event can be written down here ."
                </p>
                <p className="my-4 text-xl">
                  Here we can write the description of the event , Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Corrupti,
                  deleniti doloremque asperiores ducimus dicta neque nobis
                  laboriosam aperiam ipsa ab molestiae placeat nisi, deserunt
                  optio labore suscipit quidem ullam commodi.
                </p>
                <p className="text-2xl md:text-3xl">
                  Events Under {props.eventTitle}
                </p>
                {props.subevents.map((element) => {
                  return (
                    <motion.p
                      variants={item}
                      className="my-1 text-xl md:text-xl text-brown"
                    >
                      {element}
                    </motion.p>
                  );
                })}
                <div className="my-4">
                  <Button variant="contained" endIcon={<DownloadIcon />}>
                    Download File
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <p className="text-xl font-bold lg:text-3xl ">
                Event Coordinators
              </p>
            </div>
            <div className="flex flex-row flex-wrap justify-center">
              <Team />
              <Team />
              <Team />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default EventInfo;
