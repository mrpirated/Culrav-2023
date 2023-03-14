import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import Team from "./Team";

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
  const width = window.screen.width;
  let initial = "hidden";
  let animate = "visible";
  let transition = "";
  if (width < 1024) {
    initial = { y: 100, opacity: 0 };
    animate = { y: 0, opacity: 1 };
    transition = { ease: "linear", duration: 0.3 };
  }

  return (
    <>
      <div
        id="blur"
        className="fixed w-screen h-screen z-40 top-0 left-0"
        onClick={props.handleClick}
      ></div>
      <div
        className="fixed w-[80vw] h-[80vh] bg-off top-[50%] left-[50%] z-40"
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
                  <p
                    className={`text-2xl lg:text-4xl font-extrabold ${
                      props.eventTitle === "Anunaad"
                        ? "text-black"
                        : "text-white"
                    }`}
                  >
                    {props.eventTitle.toUpperCase()}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[50%] h-auto p-6">
                <motion.p variants={item} className="text-xl font-bold my-2">
                  "quote of this event can be written down here ."
                </motion.p>
                <motion.p variants={item} className="md:text-xl my-4">
                  Here we can write the description of the event , Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Corrupti,
                  deleniti doloremque asperiores ducimus dicta neque nobis
                  laboriosam aperiam ipsa ab molestiae placeat nisi, deserunt
                  optio labore suscipit quidem ullam commodi.
                </motion.p>
                <motion.p
                  variants={item}
                  className="text-xl md:text-2xl font-bold"
                >
                  Events Under {props.eventTitle}
                </motion.p>
                {props.subevents.map((element) => {
                  return (
                    <motion.li variants={item} className="md:text-xl">
                      {element}
                    </motion.li>
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
