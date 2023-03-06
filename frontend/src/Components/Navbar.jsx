import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../Assets/Home/Logo.png";

const navItems = ["home", "events", "sponsors", "team", "contact"];

const HamOpen = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="black"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const HamClose = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="white"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [navScroll, setScroll] = useState(false);

  window.onscroll = function () {
    if (window.scrollY > 500) setScroll(true);
    else setScroll(false);
  };

  return (
    <nav
      className={`w-full flex flex-row justify-between z-[1000] pt-[0px] fixed transition duration-600 ${
        navScroll ? "shadow-xl" : ""
      }`}
    >
      <div
        className={`logo px-4 py-4 md:px-8 md:py-4 flex justify-center items-center w-1/3 h-1/3 ${
          !navScroll
            ? "lg:w-1/3 lg:h-1/3"
            : "md:w-1/3 md:h-1/3 lg:w-1/5 lg:h-1/5"
        } xs:px-8 xs:py-8 transition duration-600`}
      >
        <a href="#/">
          <img
            className="cursor-pointer w-[80px]"
            src={logo}
            alt="Renaissance Logo"
          />
        </a>
      </div>

      <div className="container justify-end hidden px-3 md:flex xl:px-12">
        <ul className="flex flex-row items-center justify-center text-xs text-black">
          {navItems.map((item) => (
            <a
              href="#/"
              className="mt-[-25px] mx-2 px-1 lg:mx-4 lg:px-2 relative font-Mont before:content-[''] before:absolute before:bg-warm before:h-[3px] before:w-0 before:left-0 before:bottom-[-8px] before:transition-[0.3s] before:duration-300 hover:before:w-full hover:text-light"
            >
              <li className="text-sm cursor-pointer" key={`link-${item}`}>
                {item.toUpperCase()}
              </li>
            </a>
          ))}
          <a
            href="/auth"
            className="mt-[-25px] mr-[260px] mx-4 px-6 py-4 text-black font-bold hover:text-darker hover:bg-light transition ease-in-out duration-700"
          >
            <li
              className="text-sm cursor-pointer font-Mont"
              key={`link-confirmYourSeat`}
            >
              CONFIRM YOUR SEAT
            </li>
          </a>
        </ul>
      </div>

      <div className="md:hidden relative flex justify-center items-center cursor-pointer mr-[50px] mt-[-10px]">
        <div className="flex" onClick={() => setToggle(true)}>
          {HamOpen}
        </div>
        {toggle && (
          <div>
            <motion.div
              className="fixed top-0 left-0 right-0 z-50 flex flex-col items-end justify-end w-screen h-screen p-1 pb-4 shadow-lg md:hidden bg-sharp"
              animate={{ y: [-500, 0] }}
              transition={{
                type: "spring",
                bounce: 0.25,
                damping: 9,
                mass: 0.5,
              }}
            >
              <div className="flex p-3" onClick={() => setToggle(false)}>
                {HamClose}
              </div>

              <div className="logo p-1 mt-3 mb-[-10px] w-full flex justify-center items-center">
                <img className="w-[30%]" src={logo} alt="Renaissance Logo" />
              </div>

              <ul className="flex flex-col items-center justify-start w-full h-full p-0 m-0 text-xs text-grey">
                {navItems.map((item) => (
                  <li
                    className="mx-10 font-Mont pb-[20px] my-2 cursor-pointer"
                    key={`link-${item}`}
                  >
                    <a
                      href="#/"
                      className="mx-2 px-1 text-lg lg:mx-4 lg:px-2 relative before:content-[''] before:absolute before:bg-darker before:h-[3px] before:w-0 before:left-0 before:bottom-[-8px] before:transition-[0.3s] before:duration-300 hover:before:w-full hover:text-dark"
                    >
                      {item.toUpperCase()}
                    </a>
                  </li>
                ))}
                <a href="/auth" className="">
                  <li className="px-6 py-4 mx-4 text-lg font-bold transition duration-700 ease-in-out font-Mont text-grey hover:text-darker hover:bg-light">
                    CONFIRM YOUR SEAT
                  </li>
                </a>
              </ul>
            </motion.div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
