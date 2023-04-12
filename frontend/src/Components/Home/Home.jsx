import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import Timer from "./Timer";

function Header() {
  return (
    <div className="header__background-image" id="home">
      <div className="header__center">
        <motion.div
          className="flex flex-col items-center justify-center"
          whileInView={{ y: [150, 0], opacity: [0, 1] }}
          transition={{ duration: 5, ease: "easeOut" }}
          whileTap={{ scale: 0.9 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.drishtiias.com/"
            target="_blank"
            className="flex flex-col items-center justify-center w-[60%] md:w-[20%]"
          >
            <img src={`https://images.culrav.online/drishti.png`} />
          </a>
          <span className="text-[25px] mt-[-5px] mb-[10px] font-semibold">
            PRESENTS
          </span>
        </motion.div>
        <motion.div
          whileInView={{ y: [150, 0], opacity: [0, 1] }}
          transition={{ duration: 5, ease: "easeOut" }}
          whileTap={{ scale: 0.9 }}
          viewport={{ once: true }}
        >
          <h1 id="inner">CULRAV</h1>
          <h1 id="inner-head">2023</h1>
          {/* <div className="flex justify-center"> */}
          {/* <Timer /> */}
          {/* </div> */}
        </motion.div>
        <div className="scrolldown">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Header;
