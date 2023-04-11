import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import Timer from "./Timer";
import dristhiLogo from "../Sponsors/images/drishti.png";

function Header() {
  return (
    <div className="header__background-image" id="home">
      <div className="header__center">
        <motion.div
          className="w-full flex justify-center"
          whileInView={{ y: [150, 0], opacity: [0, 1] }}
          transition={{ duration: 5, ease: "easeOut" }}
          whileTap={{ scale: 0.9 }}
          viewport={{ once: true }}
        >
          <img src={dristhiLogo} className="w-[40%] md:w-[20%]" />
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
          <Timer />
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
