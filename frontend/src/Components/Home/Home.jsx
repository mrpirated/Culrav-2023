import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
// import img from "../../Assets/Home/Logo.png";

function Header() {
  return (
    <div className="header__background-image" id="home">
      <div className="header__center">
        <motion.div
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 3, ease: "easeOut" }}
          whileHover={{ scale: 0.9 }}
        ></motion.div>
        <motion.div
          whileInView={{ y: [150, 0], opacity: [0, 1] }}
          transition={{ duration: 5, ease: "easeOut" }}
          whileTap={{ scale: 0.9 }}
        >
          {/* <img className="h-[600px]" src={img} alt="" /> */}
          <h1 id="inner">CULRAV</h1>
          <h1 id="inner-head">2023</h1>
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
