import React, { useState } from "react";
import "./Preloader.css";
import circle from "../../Assets/Preloader/circle.webp";
import textOnly from "../../Assets/Preloader/textOnly.webp";

function Preloader() {
  const [visibility, setVisibility] = useState("fixed");

  const handleload = () => {
    setVisibility("hidden");
  };

  setTimeout(handleload, 5000);

  return (
    <>
      <div
        className={`Preloader decrease-opacity h-screen w-screen ${visibility} z-[90] overflow-hidden flex justify-center items-center`}
      >
        <div className="relative">
          <img
            src={textOnly}
            className=" increase-opacity w-[300px] top-[41%] left-[48%] fixed z-40"
            style={{ transform: "translate(-35%, -25%)" }}
            alt=""
          />
        </div>
        <img
          src={circle}
          className="slide-top blink w-[150px] mt-[-150px]"
          alt=""
        />
      </div>
    </>
  );
}

export default Preloader;
